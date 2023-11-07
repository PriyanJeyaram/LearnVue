export default {
    namespaced: true,
    state() {
        return {
            requests: [],
        }
    },
    mutations: {
        addRequest(state, payload) {
            state.requests.push(payload);
        },
        setRequest(state, payload) {
            state.requests = payload;
        }
    },
    actions: {
        async contactCoach(context, payload) {
            const newRequest = {
                userEmail: payload.email,
                message: payload.message,
            };

            const resp = await fetch(`https://findcoach-fc-default-rtdb.firebaseio.com/req/${payload.coachId}.json`, {
                method: 'POST',
                body: JSON.stringify(newRequest),
            })
            const respData = await resp.json();

            if (!resp.ok) {
                console.log(respData);
                throw new Error(respData.message || 'Failed to send request.');
            }
            
            newRequest.id = respData.name;
            newRequest.coachId = payload.coachId;

            context.commit('addRequest', newRequest);
        },
        async fetchRequests(context) {
            console.log('fetchingRequests...')
            const coachId = context.rootGetters.userId;
            const token = context.rootGetters.token;
            const resp = await fetch(`https://findcoach-fc-default-rtdb.firebaseio.com/req/${coachId}.json?auth=${token}`);
            const respData = await resp.json();

            if (!resp.ok) {
                throw new Error(respData.message || 'Failed to fetch requests.');
            }

            const requests = [];

            for (const key in respData) {
                const request = {
                    id: key,
                    coachId: coachId,
                    userEmail: respData[key].userEmail,
                    message: respData[key].message,
                };
                requests.push(request);
            }

            context.commit('setRequest', requests);
        }
    },
    getters: {
        requests(state, _, _2, rootGetters) {
            const coachId = rootGetters.userId;
            return state.requests.filter(req => req.coachId === coachId);
        },
        hasRequests(_, getters) {
            return getters.requests && getters.requests.length > 0;
        }
    }
}