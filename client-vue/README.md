# Vue.js CLI 2 - Cheat Sheet

## Index

(pendent__)

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
[Vue.js](https://vuejs.org/) i [Vue CLI](https://cli.vuejs.org/guide/)

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

### Component
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

## 3. List Rendering

### Maintaining State
> [more](https://vuejs.org/v2/guide/list.html#Maintaining-State)
```ts
<div v-for="item in items" v-bind:key="item.id">
  <!-- content -->
</div>
```

## Events
### Method Event Handlers
```js
<div id="example-2">
  <!-- `greet` is the name of a method defined below -->
  <button v-on:click="greet">Greet</button>
</div>
```

## Bootstrap
```bash
# BS CSS i js
npm i bootstrap
# Popper i JQuery
(pendent)
```
- [Més Info](https://travishorn.com/adding-bootstrap-to-a-vue-cli-project-98c2a30e0ed0)
### Bootstrap Icons
```bash
npm install --save bootstrap-icons
```
A `main.js` importar fitxer .css corresponent

I a `main.js`, afegir:
```js
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
```



