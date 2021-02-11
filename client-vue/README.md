# Vue.js CLI 2 - Cheat Sheet

## Index

<!-- toc -->

- [1. Start](#1-start)
  * [Docs](#docs)
- [2. Basics](#2-basics)
- [Declarative Rendering](#declarative-rendering)
  * [Component (Vue CLI)](#component-vue-cli)
  * [Template Syntax](#template-syntax)
  * [LifeCycle Hooks](#lifecycle-hooks)
- [3. Computed Properties & Watchers](#3-computed-properties--watchers)
  * [Computed property](#computed-property)
- [4. Class and Style Bindings](#4-class-and-style-bindings)
- [5. Conditional Rendering](#5-conditional-rendering)
  * [Conditional groups with \](#conditional-groups-with-)
  * [v-else](#v-else)
  * [v-show](#v-show)
- [6. List Rendering](#6-list-rendering)
  * [Basic](#basic)
  * [index Argument](#index-argument)
  * [v-for with an Object](#v-for-with-an-object)
  * [key](#key)
- [7. Events](#7-events)
  * [Method Event Handlers](#method-event-handlers)
- [8. Vue Cli](#8-vue-cli)
  * [props](#props)
- [9. Vue Router](#9-vue-router)
  * [Dynamic Route Matching](#dynamic-route-matching)
    + [Reacting to Params Changes](#reacting-to-params-changes)
  * [Named Routes](#named-routes)
  * [Programatic navigation](#programatic-navigation)
  * [Passing props to Route Components](#passing-props-to-route-components)
- [10. EXTRA](#10-extra)
  * [Bootstrap](#bootstrap)
  * [Bootstrap Icons](#bootstrap-icons)

<!-- tocstop -->

## 1. Start
Instal·la Vue,
```
sudo npm install -g @vue/cli
```
Crea aplicacio vue cli,
```
vue create nomcarpetaprojecte
```
### Docs
>[Vue.js](https://vuejs.org/) | [Vue CLI](https://cli.vuejs.org/guide/) | [Vue Router](https://router.vuejs.org/)

## 2. Basics

## Declarative Rendering
```html
<div id="app">
  {{ message }}
</div>
```
```ts
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

### Component (Vue CLI)
```ts
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => {
    return {
      message: 'Hello Vue!'
    }
  }
```
### Template Syntax
> Text
```ts
<span>Message: {{ msg }}</span>
```
Also accepts all JS expressions
```ts
<span>Message: {{ 10 + 5 }}</span>
```
> Raw HTML
```ts
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```
> Attributes
```ts
<div v-bind:id="dynamicId"></div>
```
> Boolean enable/disable attribute
```ts
<button v-bind:disabled="isButtonDisabled">Button</button>
```

### LifeCycle Hooks
> Els meus favorits: `created()`, `mounted()`
```ts
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.a)
  }`
```

## 3. Computed Properties & Watchers
### Computed property
```ts
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
```

## 4. Class and Style Bindings
(pending)

## 5. Conditional Rendering
The block will only be rendered if the directive’s expression returns a truthy value.
> [more](https://vuejs.org/v2/guide/conditional.html)
```ts
<div id="app-3">
  <span v-if="seen">Now you see me</span>
</div>
```

### Conditional groups with \<template>
```ts
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

### v-else
```ts
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you dont
</div>
```

### v-show
The usage is very similar to __v-if__, the difference is that an element with v-show will always be rendered and remain in the DOM; v-show only toggles the display CSS property of the element
```ts
<h1 v-show="ok">Hello!</h1>
```

## 6. List Rendering
> [more](https://vuejs.org/v2/guide/list.html#Maintaining-State)

### Basic
```ts
<div v-for="item in items" v-bind:key="item.id">
  {{ item.message }}
</div>
```

### index Argument
```ts
<ul>
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```

### v-for with an Object
```ts
<ul id="v-for-object" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
```

### key
It is recommended to provide a key attribute with v-for whenever possible for [maintaining-state](https://vuejs.org/v2/guide/list.html#Maintaining-State) reasons
```ts
<div v-for="item in items" v-bind:key="item.id">
  <!-- content -->
</div>
```

## 7. Events
### Method Event Handlers
```js
<div id="example-2">
  <!-- `greet` is the name of a method defined below -->
  <button v-on:click="greet">Greet</button>
</div>
```

## 8. Vue Cli

### props
(pending)

## 9. Vue Router
```bash
# Install vue router
npm install vue-router
# Add router as plugin and modify .js and .vue files implied 
vue add router
```
### Dynamic Route Matching
#### Reacting to Params Changes
```ts
 watch: {
    $route(to, from) {
      // react to route changes...
    }
  }
```

### Named Routes
```ts
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
```

### Programatic navigation
```ts
router.push({ name: 'user', params: { userId: '123' } })
```

### Passing props to Route Components
```ts
const router = new VueRouter({
  routes: [{ path: '/user/:id', component: User }]
})
```

## 10. EXTRA

### Bootstrap
Install Bootstrap to use w/ Vue CLI:
```bash
# BS CSS i js
npm i bootstrap
# Popper i JQuery
(pendent)
```
- [Més Info](https://travishorn.com/adding-bootstrap-to-a-vue-cli-project-98c2a30e0ed0)
### Bootstrap Icons
Install Bootstrap Icons to use w/ Vue CLI:
```bash
# A main.js importar fitxer .css corresponent
npm install --save bootstrap-icons
```

```bash
# Afegir a main.js
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
```



