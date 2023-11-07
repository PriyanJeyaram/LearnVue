export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Maximilian',
                    lastName: 'Schwarzmüller',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstName: 'Julie',
                    lastName: 'Jones',
                    areas: ['frontend', 'career'],
                    description:
                        'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 35
                }
            ],
        };
    },
    getters: {
        coaches(state) {
            return state.coaches;
        },
        hasCoaches(state) {
            return state.coaches && state.coaches.length > 0;
        },
        isCoach(_, getters, _2, rootGetters) {
            const coaches = getters.coaches;
            const userId = rootGetters.userId;
            return coaches.some(coach => coach.id === userId);
        },
    },
    mutations: {
        registerCoach(state, payload) {
            state.coaches.push(payload);
        },
        setCoach(state, payload) {
            state.coaches = payload;
        }
    },
    actions: {
        async registerCoach(context, data) {
            const userId= context.rootGetters.userId;
            const coachData = {
                firstName: data.first,
                lastName: data.last,
                areas: data.areas,
                description: data.desc,
                hourlyRate: data.rate,
            };

            const token = context.rootGetters.token;

            const resp = await fetch(`https://findcoach-fc-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=${token}`, {
                method: 'PUT',
                body: JSON.stringify(coachData),
            });
            
            // const respData = await resp.json();

            if (!resp.ok) {
                // error ...
            }

            context.commit('registerCoach', {
                ...coachData,
                id: userId,
            });
        },
        async loadCoaches(context) {
            const response = await fetch(`https://findcoach-fc-default-rtdb.firebaseio.com/coaches.json`);
            const responseData = await response.json();
            if(!response.ok) {
                // error ...
                throw new Error(responseData.message || 'Failed to fetch!');
            }

            const coaches = [];

            for(const key in responseData) {
                const coach = {
                    id: key,
                    firstName: responseData[key].firstName,
                    lastName: responseData[key].lastName,
                    areas: responseData[key].areas,
                    description: responseData[key].description,
                    hourlyRate: responseData[key].hourlyRate,
                };
                coaches.push(coach);
            }

            context.commit('setCoach', coaches);
        },
    }
}