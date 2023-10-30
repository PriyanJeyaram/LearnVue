# LearnVue
<details>
<summary>
    <span style="font-size: 1.4em; font-weight: bold">
        <a href="/Section01">Section 1</a>: Getting Started
    </span>
</summary>
 
---

- JavaScript Framework
- Easy to build Interactive and reactive web frontends
- Different ways of using Vue: Widget and SPA.
- Component-Based UI Framework.
- Built First App using only JS
  - To select an element, we can use a ```document.querySelector```
  - To get the entered value from the inputBox we can use the value attribute.
  - To create an element dynamically, we need to use the ```document.createElement``` and we could append it as per our requirement.
  - To append, we can use ```appendChild()``` or ```append()```
</details>

---

<details>
<summary>
    <span style="font-size: 1.4em; font-weight: bold">
        <a href="/Section02">Section 2</a>: Data Binding, Event Binding, Reactivity, and Dynamic Styling
    </span>
</summary>
 
---

### Data Binding
Initially connect HTML to Vue: Contacts Vue 3.
- ```<script src="https://unpkg.com/vue@next" defer></script>```
- ```createApp();```
  - will contain an object.
  - the object contains data which is a method that returns an object
String Interpolation: to get things written in javascript display on a web page
- Available only between closing and opening tags. ```>```here-like-this```<```
- We can't use it anywhere else.
Directory:
```v-bind:``` set an attribute on an HTML tag.
While working with methods in Interpolations, use with parentheses.
Working with data inside Vue app
- Whatever you return in data, will be made as global Vue Obj by Vue.
- So we can access it by using the ```this``` keyword.
```v-html:``` output raw HTML content | not advised, cause it allows cross-xScripting.
### Event Binding
```v-on:``` to add eventListeners.
- Logics are better off in JS files rather than in HTML ones.
- To pass the arguments we need to call the method like a normal one.
- Using the native event Object: event.target.value returns the value in the input
- Can use ```$event``` if we are somehow unable to access the event attribute.
- Exploring EventModifier
- Clicking on the submit button will always result in refreshing the page, this can be prevented by ```preventDefault()``` even in plain vanilla JS. Here we have a Modifier, we could do something like: 
  - ```v-on:submit.prevent``` the same result with a short line of code.
- If we want to display the name only after the user presses enter then we can do this:
  - ```v-on:input.keyup.enter```
- Similarly, we can do this with the click: 
  - ```v-on:click.left/right/middle```
v-once can be used to lock an initial value.
### Reactivity
- Two Way Binding: ```v-model``` – Accepts the input and feedbacks the same <br>
- Consider the case where we have the counter add 5 times. Now even though the method that prints the fullName does not use a counter the Vue doesn't know that, so it re-evaluates the methods each time, thereby creating complexity. <br>
- Introducing Computed Properties: It re-evaluates only when the dependencies change.
- Watcher: tells when the dependencies change 
- [Vue methods vs watchers vs computed properties](https://flaviocopes.com/vue-methods-watchers-computed-properties/)
  - Watchers are used for monitoring only 1 dependency at a time
  - Whereas computed listens to changes of more than 1 dependency.
- ShortHand: 
  - ```v-on:``` → ```@```
  - ```v-bind:``` → ```:```
### Dynamic Styling
- Style Binding Syntax: 
  - ```:style="{borderColor: boxSelected? 'red': '#ccc'}"```
- Adding CSS classes Dynamically. ```:{class: prop}```
- Provides multiple syntaxes: arrayBased or Object-Based.
</details>

---

<details>
<summary>
    <span style="font-size: 1.4em; font-weight: bold">
        <a href="/Section03">Section 3</a>: Rendering Conditional Content & Lists
    </span>
</summary>
 
---

### Render Content Conditionally 
- If we have goals, then present the UL, else present the paragraph.
- Directives :)
  - ```v-if```, ```v-else```, ```v-else-if```, ```v-for``` 
  - ```<p v-if="goals.length === 0">content</p>```
  - ```v-else``` must be used right after the v-if, v-else-if may be present before else.
  - v-if removes the dom element
  - Whereas ```v-show``` just hides it from the user.
  - ```v-for="goal in goals"```
- To delete a value from an array we use the splice method:
  - ```arr.splice(index, numbOfItemsToDelete);```
- Keys are unique identifiers for a particular element, It must be binded using v-bind: or simply colon.
</details>

---

<details>
<summary>
    <span style="font-size: 1.4em; font-weight: bold">
        Section 4: Monster Slayer
    </span>
</summary>
 
---
  #### [Take me to Monster Slayer](https://tinyurl.com/01MonsterSlayer)
</details>

---

<details>
<summary>
    <span style="font-size: 1.4em; font-weight: bold">
        <a href="/Section05">Section 5</a>: Behind the Scenes
    </span>
</summary>
 
---

- Proxy in JS - Helps in updating the existing value and changes the output accordingly.
- JS is not reactive by default.
- Each vue app is independent and does not communicate with each other.
- 1 HTML part per app.
- We mount out the Vue app to an HTML part, that part is called “Template”
- refs: Does retrieve when we need them and not on every little change.
  - ```<input type='text' v-model="enteredValue">```
    - Here the value entered in the text box is evaluated for every keystroke.
  - Usage:
    - Template part: ```<input type= 'text' ref = 'userText'>```
    - Script part: ```this.message = this.$refs.userText.value;```
- Virtual Dom: In the Browser, Vue controlled template is rendered in the DOM.
  - Does not re-render everything.
  - Compares 2 Virtual DOMs in the memory if there is a change and updates it to the real DOM.
  - Contains some optimization and does not really create V-DOMs for every change. (Side note)
- Vue Instance Life Cycle:
  - ```beforeCreate()``` → ```created()``` –{Compile Template}→ ```beforeMount()``` → ```mounted()``` –{Mounted Vue Instance}
  - When the data changes → ```beforeUpdate()``` → ```updated()```
  - To unmount → ```beforeUnmount()``` → ```unmounted()```
</details>

---

<details>
<summary>
    <span style="font-size: 1.4em; font-weight: bold">
        <a href="/Section06">Section 6</a>: Introducing Components
    </span>
</summary>
 
---

- Scenario: 
  - Let's say we have a PhoneBook App, which displays Name, Phone, Email and a button to show and hide the details.
  - In Template, we will use ```v-for``` to iterate the list of contacts in the contacts [].
  - When we click on the button, we don’t see just the details of the expected one, but all contacts with each click. 
  - This type of problem could be solved by using components.
- The Vue component is an app that belongs to our main app.
- Multiple Vue Apps vs Multiple Components
  - Having multiple Vue ( Calls ```createApp()``` multiple times) apps in a single static page is not the best choice, we could opt for SPA( Calls ```createApp()``` only once).
  - We could write one “root app” and build multiple components.
  - It is better to build one root app that holds multiple components.

</details>

---

<details>
<summary>
    <span style="font-size: 1.4em; font-weight: bold">
        <a href="/Section07">Section 7</a>: Moving to a Better Development Setup & Workflow with the Vue CLI
    </span>
</summary>
 
---

What is the VUE CLI? Why do we need it? How does it work? <br>

Installing Dependencies: <br>
- To install Node and NPM: [NVM Install](https://github.com/nvm-sh/nvm#installing-and-updating)
- List the Node Versions available in the local machine: ```nvm ls``` <br>
- Lists all the Node versions available: ```nvm list-remote``` <br>
- Install particular version of NVM: ```nvm install v18.18.2``` <br>
- Check NPM version: ```npm -v``` <br>
- Check Node version: ```node -v``` <br>
- Install the Vue CLI: ```npm install -g @vue/cli``` <br>
- Check Vue version: ```vue -V ``` <br>

Move to the directory where you want to create the  App and type in the command

- ```vue create appNameWithoutSpaces``` <br>

Scenario: We must display contact information on button click.
- Initially we used CDN to provide the vue support, Now we can proceed in a nice advanced approach.
- Once vue app is created, we need to download all the dependencies present in the ```packages.json```
  - ```cd``` to the project folder and type in ```npm install```
- After this we could see the ```node_modules``` folder containing the dependencies.

In main.js:
- Installed vue could be imported like:
  - ``` import {createApp} from 'vue'; ```
- Initially we use ```const app = Vue.createApp({configs for vue to take care})```
- Write the config separately in the ```App.vue``` file surrounded by ``` export default ```
- Then we can import that config file using: ``` import App from './App.vue' ```
- Now we can createApp like: ``` const app = createApp(App) ```, where App is the config, anyNameIsOK.
- When using components we need to import them here, like:
  - ``` import ComponentClassName from './pathToClass/ComponentClassName.vue' ```
- It can be added to the main vue app by:
  - ``` app.component('tag-with-hyphen', ComponentClassName); ```
- Finally this could be mounted like: ``` app.mount('CSS-Class-Selector'); ```
While Writing code for components, Create a separate directory for components.

In Component File:
- We can write all the HTML code related to the specific component in the template tag 
- We can write all the Vue content in the script tag and always do ``` export default ```

In App.vue
- We can include all the needed components with the tag-name specified in the main.js file.
- We can also have scripts in this to perform some required operations.

Adding Styling:

- We can add whatever styling we want inside the style tag in ```App.vue``` config file.

</details>

---

<details>
<summary>
    <span style="font-size: 1.4em; font-weight: bold">
        <a href="/Section08">Section 8</a>: Component Communication
    </span>
</summary>
 
---

### props: 
- Just like data properties. This is available in the entire Vue component, including the template.
- Simplest form takes an array.
- names must not clash.
- Uses camelCase, whereas in template it will be kebab case (friend-contact)
- Used for parent-child communication
- Unidirectional data flow, Data passed from app must be changed only there & not in the Component.
- Should not mutate prop
- Validating Props: 
  - We can use a JS object, containing our attributes. 
  - The Value may be another Obj containing: 
    - ```type```,
    - ```required```,
    - ```validator: function(value) {validation logic goes here}```
    - ```default```
- Binding All Props:
  - Prev Approach:
    - ```<friend-contact``` 
    - ```:first-name="friend.firstName"```
    - ```:last-name="friend.lastName"```
    - ```> </friend-contact>```
  - Shortened Version:
    - ```<friend-contact v-bind = "friend" > </friend-contact>```
      - this will work iff the data property returns ```friend``` object.
### Custom Events:
- We can emit custom event to the parent from the child:
  - ``` this.$emit('any-kebab-case', this.id); ```
- Then access it in the parent like we use the @click
  - ```@any-kebab-case="toggleFavoriteStatus"```
- Defining & Validating Custom Events:
  - we can specify it like data, methods & computed properties like:
    - ```emits: [],```
  - This can also be complicated with objects having a key as the name & value as a function which validates or even to raise a warning.
  - In this way we can declare all the custom events we need inside this emits attribute.
  - To delete a friend from a friends array by comparing the id can be done like:
    - ``` this.friends = this.friends.filter((friend) => friend.id !== id); ```
### Provide + Inject: To help with pass-through problems
- Scenario: We display different contents on clicking different buttons.
- The ```App.vue``` file uses: ``` ActiveElement.vue ``` & ``` KnowledgeBase.vue ```
- The ```KnowledgeBase.vue``` just tunnels ```topics[]``` to ```KnowledgeGrid.vue```
- There is a custom event being tunneled from 
- ```KnowledgeElement.vue``` → ```KnowledgeGrid.vue``` → ```KnowledgeBase.vue```
- This is sent to the ```App.vue``` to invoke activateTopic method which sets the ```activeTopic```
- This pass through from ```App.vue``` to ```KnowledgeGrid.vue``` could be simplified by using provide & inject like: 
  - In ```App.vue```
    - ```provide() {```
      - ```return {```
      - ```topics: this.topics,```
      - ```};```
    - ```}```
  - In ```KnowledgeGrid.vue``` ⇒ ```inject: ['topics']```
- Communicate only between parent & child 
- Use provide & inject for pass-through cases, otherwise use normal props & events thingy.
### Summary:
- ```Props(parent → child)```
- ```emit[child → parent]```
- ```provide() { return something that is needed somewhere}```
- ```inject: [mention the name of what is provided to use them]```

</details>

---

<details>
<summary>
    <span style="font-size: 1.4em; font-weight: bold">
        <a href="/Section09">Section 9</a>: Diving Deeper Into Components
    </span>
</summary>
 
---

### Content: 
- Component Registration & Styling
- Slots & Dynamic Components
- Naming & Folder Structure

### Global vs Local Component:
- When the component is Global, it can be accessed anywhere inside the Vue app, in any template.
- When we use a component only in 1 file, we register it locally by:
- import: ``` import TheHeader from './components/TheHeader.vue';```
- inside the export default: ```components: { TheHeader }```
- Components registered locally can’t be used somewhere else in the App

### Scoped Styles: Affects only that component where we add it.
- add a scoped attribute like: ```<style scoped>```

### Working with Slots: 
  - Consider having 3 files, each having some template code that needs to be wrapped by the same element. We could simply declare it as a global style, but we can also use another feature: 
  - ``` <slot></slot> ```
  - We can write a separate component and describe it and the content is rendered by ```<slot>``` tag.
  - Can have only 1 unnamed slot, we can name the slot by: 
  - In BaseCard.vue: ```<slot name ="header"></slot>```
  - In UserInfo.vue: ``` <template v-slot: header/default> the content goes here </template> ```
  #### Slot styling and Compiling:
  - The style scoped will work only for codes that are not encapsulated in ```<slot>```. 
  If we want the styling we need to place that styling in the ```BaseCard.vue``` file
  - If slots did not get any content,
  - ``` <header v-if="$slots.header">```: this will render the element only if the content is passed.
  - Or we could simply pass a default content as a replacement.
  - ShortHand: 
  - ```v-slot:header``` → ```#header```
  #### Scoped Slots

### Dynamic Components:
  - ``` <component :is="variableUpdatedOnButtonClickToMakeItDynamic"></component> ```

  #### Keeping Dynamic Components Alive:
  - <keep-alive>: they will be cached and not entirely deleted.

### Use of Teleport:
- Scenario: We have a 2 open dialog if empty text is submitted as a goal. This would normally be nested deep inside the body tag, which is not semantically optimal, so we could use the teleport tag like:
- ``` <teleport:to="body"> the code to be teleported goes here </teleport>```

- In ```vue 2```, inside ```<template>```,  we could only have only 1 root element and have multiple child elements.
- But now in ```vue 3```, we can have multiple root elements known as ```fragments```.

</details>

---

<details>
<summary>
    <span style="font-size: 1.4em; font-weight: bold">
        <a href="/Section11">Section 11</a>: Forms
    </span>
</summary>
 
---

- ```npm install```
- ```v-model``` when used in the input type= number, automatically converts the default string to number.
- v-model modifier: ```lazy```, ```trim```
- For checkbox and radio button: use the ```value``` attribute to differentiate which is which
- If we have only one checkbox we opt for true or false.
- We can create our own form component similar to creating other components

</details>

---

<details>
<summary>
    <span style="font-size: 1.4em; font-weight: bold">
        <a href="/Section12">Section 12</a>: Sending HTTP Requests
    </span>
</summary>
 
---

- Connecting Vue app to the Backend.
- ``` npm install ```
- Create a firebase App to access the real-time database feature.
- Copy the link to use it inside ``` <fetch> ``` 
- Comment out all the code related to sending and receiving data locally in the vue app.
- fetch(theLink/anyName.json, {method: , header: {Content-Type}, body: JSON.stringify({})});
-  ``` fetch ``` returns a ``` promise ```, which can be handled by: ``` then() ```, ``` catch() ``` and ``` async ``` /  ``` await ``` .
- Error Handling:
  - ``` throw new Error("Error Message which could be accessed by error.message."); ```

</details>

---
