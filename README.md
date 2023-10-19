# LearnVue
## Section 1: Getting Started
- JavaScript Framework
- Easy to build Interactive and reactive web frontends
- Different ways of using Vue: Widget and SPA.
- Component-Based UI Framework.
- Built First App using only JS
  - To select an element, we can use a document.querySelector
  - To get the entered value from the inputBox we can use the value attribute.
  - To create an element dynamically, we need to use the document.createElement and we could append it as per our requirement.
  - To append, we can use appendChild() or append()
---
## Section 2: Data Binding, Event Binding, Reactivity, and Dynamic Styling.
### Data Binding
Initially connect HTML to Vue: Contacts Vue 3.
- <script src="https://unpkg.com/vue@next" defer></script>
- createApp(); 
  - will contain an object.
  - the object contains data which is a method that returns an object
String Interpolation: to get things written in javascript display on a web page
- Available only between closing and opening tags. >here-like-this<
- We can't use it anywhere else.
Directory:
v-bind: set an attribute on an HTML tag.
While working with methods in Interpolations, use with parentheses.
Working with data inside Vue app
- Whatever you return in data, will be made as global Vue Obj by Vue.
- So we can access it by using the “this” keyword.
v-html: output raw HTML content | not advised, cause it allows cross-xScripting.
### Event Binding
v-on: to add eventListeners.
Logics are better off in JS files rather than in HTML ones.
To pass the arguments we need to call the method like a normal one.
Using the native event Object: event.target.value returns the value in the input
Can use $event if we are somehow unable to access the event attribute.
Exploring EventModifier
- Clicking on the submit button will always result in refreshing the page, this can be prevented by preventDefault() even in plain vanilla JS. Here we have a Modifier, we could do something like: 
  - v-on:submit.prevent the same result with a short line of code.
- If we want to display the name only after the user presses enter then we can do this:
  - v-on:input.keyup.enter
- Similarly, we can do this with the click: 
  - v-on:click.left/right/middle
v-once can be used to lock an initial value.
### Reactivity
- Two Way Binding: v-model – Accepts the input and feedbacks the same <br>
- Consider the case where we have the counter add 5 times. Now even though the method that prints the fullName does not use a counter the Vue doesn't know that, so it re-evaluates the methods each time, thereby creating complexity. <br>
- Introducing Computed Properties: It re-evaluates only when the dependencies change.
- Watcher: tells when the dependencies change 
- [Vue methods vs watchers vs computed properties](https://flaviocopes.com/vue-methods-watchers-computed-properties/)
  - Watchers are used for monitoring only 1 dependency at a time
  - Whereas computed listens to changes of more than 1 dependency.
- ShortHand: 
  - v-on: → @
  - v-bind: → :

### Dynamic Styling

- Style Binding Syntax: 
  - :style=”{borderColor: boxSelected? ‘red’: ‘#ccc’}”
- Adding CSS classes Dynamically. :{class: prop}
- Provides multiple syntaxes: arrayBased or Object-Based.
---
## Section 3: Rendering Conditional Content & Lists
### Render Content Conditionally 
- If we have goals, then present the UL, else present the paragraph.
- Directives :)
  - v-if, v-else, v-else-if, v-for 
  - <p v-if=”goals.length === 0”>content</p>
  - v-else must be used right after the v-if, v-else-if may be present before else.
  - v-if removes the dom element
  - Whereas v-show just hides it from the user.
  - v-for=”goal in goals”
- To delete a value from an array we use the splice method:
  - arr.splice(index, numbOfItemsToDelete);
- Keys are unique identifiers for a particular element, It must be binded using v-bind: or simply colon.
---
## Section 4: Monster Slayer
