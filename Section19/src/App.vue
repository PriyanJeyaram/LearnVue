<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h2>{{ age }}</h2>
    <!-- <h2>{{ user.age }}</h2> -->
    <button @click="callMe">click me</button>
    <!-- <div>
      <input type="text" id="firstName" @input="setFirstName"/>
      <input type="text" id="lastName" @input="setLastName"/>
    </div> -->
    <div>
      <input type="text" id="firstName" v-model="firstName" />
      <input type="text" id="lastName" v-model="lastName" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
// import { reactive } from 'vue';
const firstName = ref('');
const lastName = ref('');
const age = ref(21);

// const user = reactive({
//   name: 'Priyan',
//   age: 21,
// });

const callMe = () => {
  // user.name = 'Shyam Jeyaram';
  // user.age = 2023 - 2009;
  age.value = 2023 - 2009;
};

// const setFirstName = (event) => {
//   firstName.value = event.target.value;
// }
// const setLastName = (event) => {
//   lastName.value = event.target.value;
// }

const userName = computed(() => {
  return firstName.value + ' ' + lastName.value;
});

watch([userName, age], (newValues, oldValues) => {
  console.log(oldValues[0], oldValues[1], newValues[0],newValues[1]);
});

// setTimeout(() => {
//   // user.value.name = 'Priyan Jeyaram';
//   // user.value.age = 22;
//   user.name = 'Priyan Jeyaram';
//   user.age = 22;
// }, 5000);

</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>