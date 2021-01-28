
BACK:  empro [json-server](https://github.com/typicode/json-server) i em baso [en aquest exemple bàsic](https://github.com/typicode/json-server#simple-example)


Desplegada a https://vue-json-server-app.herokuapp.com/

Falta ficar VUE.JS a front i generar versió build a dins de '/public' 


## Com desplegar a HEROKU

:warning: Basat en [el tutorial basic de HEROKU](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

1.- Iniciar sessió en Heroku

```js
    heroku login
```

2.- Provar l'app en local

```js
    heroku local web
```

3.-Crear aplicacio a heroku

```js
    heroku apps:create staticsitenodejs
```

4.- Commitejar els canvis fets (cada vegada que facem canvis, repetirem les passes 4 i 5 d'aquesta guia)

```js
    git add . && git commit -m "canvi fet"
```

5.- Fer push de la branca corresponent

```js
    git push heroku main
```

