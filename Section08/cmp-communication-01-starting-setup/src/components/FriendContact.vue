<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(FAV)' : '' }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button> &nbsp;
    <button @click="toggleFavorite">Toggle Favorite</button> &nbsp;
    <button @click="$emit('delete', id)">Delete</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailId }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailId: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  emits: ['toggle-favorite','delete'],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    }
  }
};
</script>