# LearnVue
## [Section 1](/Section1/Vue-Complete-FirstAppWithJustJS/): Getting Started 
- JavaScript Framework
- Easy to build Interactive and reactive web frontends
- Different ways of using Vue: Widget and SPA.
- Component-Based UI Framework.
- Built First App using only JS
  - To select an element, we can use a ```document.querySelector```
  - To get the entered value from the inputBox we can use the value attribute.
  - To create an element dynamically, we need to use the ```document.createElement``` and we could append it as per our requirement.
  - To append, we can use ```appendChild()``` or ```append()```
---
## [Section 2](/Section2): Data Binding, Event Binding, Reactivity, and Dynamic Styling.
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
Logics are better off in JS files rather than in HTML ones.
To pass the arguments we need to call the method like a normal one.
Using the native event Object: event.target.value returns the value in the input
Can use $event if we are somehow unable to access the event attribute.
Exploring EventModifier
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
---
## [Section 3](/Section3/lists-cond-01-starting-setup): Rendering Conditional Content & Lists
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
---
## Section 4: Monster Slayer.
  #### [Take me to Monster Slayer](https://tinyurl.com/01MonsterSlayer)
---
## [Section 5](/Section5/behind-scenes-01-starting-setup/): Behind the Scenes
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
---
## [Section 6](/Section6/cmp-intro-01-starting-setup): Introducing Components
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
---
## [Section 7] (/Section7): Moving to a Better Development Setup & Workflow with the Vue CLI

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

