# Vue.js CLI 2 - Cheat Sheet

## Index

<!-- toc -->

- [1. Start](#1-start)
  * [Docs](#docs)
  * [Extensions](#extensions)
- [2. Basics](#2-basics)
  * [Declarative Rendering](#declarative-rendering)
    + [Interpolation inside a tag](#interpolation-inside-a-tag)
    + [v-bind: Interpolation inside an attribute](#v-bind-interpolation-inside-an-attribute)
    + [v-model: two-way Binding](#v-model-two-way-binding)
  * [Template Syntax](#template-syntax)
  * [Methods](#methods)
  * [LifeCycle Hooks](#lifecycle-hooks)
- [3. Conditional Rendering](#3-conditional-rendering)
  * [Conditional groups with template](#conditional-groups-with-template)
  * [v-else](#v-else)
  * [v-show](#v-show)
- [4. List Rendering](#4-list-rendering)
  * [Basic](#basic)
  * [index Argument](#index-argument)
  * [v-for with an Object](#v-for-with-an-object)
  * [key](#key)
- [5. Computed Properties & Watchers](#5-computed-properties--watchers)
  * [Computed property](#computed-property)
  * [Why not use a simple Method?](#why-not-use-a-simple-method)
  * [Computed vs. Watch](#computed-vs-watch)
  * [Watchers](#watchers)
- [6. Class and Style Bindings](#6-class-and-style-bindings)
  * [Object Syntax](#object-syntax)
    + [Basic](#basic-1)
    + [Multiple](#multiple)
    + [Array Syntax](#array-syntax)
- [7. Events](#7-events)
  * [Click Event Handler](#click-event-handler)
  * [Inline handler](#inline-handler)
  * [Key Modifiers](#key-modifiers)
- [8. Creating Components](#8-creating-components)
  * [Import](#import)
  * [props](#props)
- [9. Vue Router](#9-vue-router)
  * [Dynamic Route Matching](#dynamic-route-matching)
    + [Reacting to Params Changes](#reacting-to-params-changes)
  * [Named Routes](#named-routes)
  * [Programatic navigation](#programatic-navigation)
  * [Passing props to Route Components](#passing-props-to-route-components)
- [10. Slots](#10-slots)
- [EXTRA](#extra)
  * [Tricks & Hacks](#tricks--hacks)
  * [Sass/SCSS](#sassscss)
    + [Emprar Sass/SCSS en Components](#emprar-sassscss-en-components)
    + [Theming](#theming)
  * [Bootstrap](#bootstrap)
  * [Webpack](#webpack)
  * [Vuex](#vuex)

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

### Extensions
* [__Vetur__ for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
* __Vue.js Devtools__ for [Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) and [Mozilla](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

## 2. Basics

### Declarative Rendering

#### Interpolation inside a tag
```html
<div>
  {{ message }}
</div>
```

> Data declaration: Versió bàsica de Vue.js (CDN Vue)

```ts
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

> Data declaration a Vue CLI
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

#### v-bind: Interpolation inside an attribute
We can also [bind element attributes](https://vuejs.org/v2/guide/#Declarative-Rendering):
```ts
<div>
  <span v-bind:title="message">
    This is a message
  </span>
</div>
```

#### v-model: two-way Binding
[Only with \<input>, \<select> or \<textarea>](https://vuejs.org/v2/api/#v-model) 
> [more](https://vuejs.org/v2/guide/#Handling-User-Input)
```ts
<div ">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
```

### Template Syntax
> (ja vist) Text interpolation
```ts
<span>Message: {{ msg }}</span>
```
Also accepts all JS expressions, functions...
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

### Methods
> Mètodes privats per un component
```ts
export default {
  name: 'foo',
  data: () => {
    return {
      name: 'John'
    }
  }
  methods: {
    greet: function () {
      // `this` inside methods point to the Vue instance
      alert('Hello ' + this.name + '!')
    }
  }
}
```

### LifeCycle Hooks
> Els meus favorits: `created()`, `mounted()`
```ts
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.a)
  }`
```


## 3. Conditional Rendering
The block will only be rendered if the directive’s expression returns a truthy value.
> [more](https://vuejs.org/v2/guide/conditional.html)
```ts
<div id="app-3">
  <span v-if="seen">Now you see me</span>
</div>
```

### Conditional groups with template
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


## 4. List Rendering
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



## 5. Computed Properties & Watchers
### Computed property
> More [here](https://vuejs.org/v2/guide/computed.html#Basic-Example)

```ts
<template>
  <div>
    <p>{{greet}}</p>
  </div>
</template>

export default {
  name: 'foo',
  data: () => {
    return {
      name: 'John'
    }
  }
  methods: {
    greet: function () {
      // `this` inside methods point to the Vue instance
      return 'Hello ' + this.name + '!'
    }
  }
}
```

### Why not use a simple Method?

> The [advantage of Computed Properties over simple Method invocation](https://vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods) is that
1. Computed properties are cached based on their reactive dependencies
2. A computed property will only re-evaluate when some of its reactive dependencies have changed
3. E.g: The reactive dependency of `greet` method is the property `name`

### Computed vs. Watch

> You can also use [watch](https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property) as in __Angular.js__

### Watchers
> Els _Watchers_ permeten reaccionar a canvis en un camp d'entrada
> [more here](https://vuejs.org/v2/guide/computed.html#Watchers)



## 6. Class and Style Bindings
### Object Syntax
> [more](https://vuejs.org/v2/guide/class-and-style.html#Object-Syntax)

#### Basic
```ts
<div v-bind:class="{ active: isActive }"></div>
```

#### Multiple
```ts
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```

#### Array Syntax
> [more](https://vuejs.org/v2/guide/class-and-style.html#Array-Syntax)
```ts
<div v-bind:class="[activeClass, errorClass]"></div>
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```


## 7. Events

### Click Event Handler
```js
<div id="example-2">
  <!-- `greet` is the name of a method defined below -->
  <button v-on:click="greet">Greet</button>
</div>
```

### Inline handler
```ts
<div id="example-3">
  <button v-on:click="say('hi')">Say hi</button>
</div>
```

### Key Modifiers
> [more](https://vuejs.org/v2/guide/events.html#Key-Modifiers)
```ts
<!-- Qualsevol tecla>
<input v-on:keyup="teclaEspitjada">
<!-- Una tecla en concret>
<input v-on:keyup.enter="enterKey">
```

## 8. Creating Components
To create a component, copy and Paste another Component & modify: template, script and styles.

### Import
```ts
import Header from "@/components/Header.vue";
```
```ts
export default {
  name: "HelloWorld",
  components: {
    Header
  },
};
```

### props
> [more](https://vuejs.org/v2/guide/components-props.html)
```ts
export default {
  name: "MainPage",
  props: {
    msg: String
  }
```

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

## 10. Slots
(pending)
> [more](https://vuejs.org/v2/guide/components-slots.html)

## EXTRA

### Tricks & Hacks
* [Prevent a form from submitting](https://stackoverflow.com/questions/51642232/prevent-form-default-behavior-in-vue-js)
* [Webpack i SASS: problema amb versió 11 de node-sass: solved](https://exerror.com/typeerror-this-getoptions-is-not-a-function-in-vue-js/)

### Sass/SCSS
#### Emprar Sass/SCSS en Components
> [more](https://cli.vuejs.org/guide/css.html#referencing-assets)

Instal·la,
```bash
npm install -D sass-loader sass
```

i en components, empra
```html
<style lang="scss">
...
```

#### Theming
Crear el fitxer `custom.scss` seguint tutorial oficial BS i a `main.js` posar:
```js
import "./scss/custom.scss"
```
Al fitxer anterior, escriure els _override_ de variables i maps

### Bootstrap
Install Bootstrap to use w/ Vue CLI:
```bash
# BS CSS i js
npm i bootstrap
# Popper i JQuery
(pendent)
```
- [Més Info](https://travishorn.com/adding-bootstrap-to-a-vue-cli-project-98c2a30e0ed0)

### Webpack


### Vuex
> [Setting up Vuex with Vue CLI 3](https://dev.to/abhisheksarmah/setting-up-vuex-state-management-with-vue-cli-3-3ne9)
> [more](https://vuex.vuejs.org/guide/)
```bash
npm install vuex --save
```



