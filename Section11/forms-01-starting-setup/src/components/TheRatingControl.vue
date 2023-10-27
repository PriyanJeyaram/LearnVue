<template>
    <ul>
        <li :class="{active: modelValue === 'poor'}">
            <button type="button" @click="setRating('poor')">Poor</button>
        </li>
        <li :class="{active: modelValue === 'average'}">
            <button type="button" @click="setRating('average')">Average</button>
        </li>
        <li :class="{active: modelValue === 'good'}">
            <button type="button" @click="setRating('good')">Good</button>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['modelValue'],
    emit:['update:modelValue'],

    methods: {
        setRating(modelValue) {
            this.$emit('update:modelValue', modelValue);
        }
    }
};
</script>

<style scoped>
.active {
  border-color: #c2943f;
}

.active button {
  color: #c2943f;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>