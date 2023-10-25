<template>
  <div>
    <the-header></the-header>
    <!-- <badge-list></badge-list>
    <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role"></user-info>
    <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps['another-prop'] }}</p>
      </template>
    </course-goals> -->
    <button @click="setActiveComponent('active-component')">Active Component</button>
    <button @click="setActiveComponent('manage-component')">Manage Component</button>
    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/Layout/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveComponent from './components/ActiveComponent.vue';
import ManageComponent from './components/ManageComponent.vue';

export default {
  components: {
    TheHeader,
    // BadgeList,
    // UserInfo,
    // CourseGoals,
    ActiveComponent,
    ManageComponent,
  },
  data() {
    return {
      activeComponent: 'active-component',
      // activeUser: {
      //   name: 'Maximilian Schwarzmüller',
      //   description: 'Site owner and admin',
      //   role: 'admin',
      // },
    };
  },
  methods: {
    setActiveComponent(component) {
      this.activeComponent = component;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>