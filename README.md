## TODO

### Client
- [ ] _Bootstrap Theming_ amb __Webpack__
- [x] Filtrar en clicar ENTER en camp de Filtre: és necessari 1) Crear component amb barra navegació (si no es complica molt) i 2) Emprar Programmatic Navigation (Vue Router)
- [x] Crear component HEADER
- [x] Crear component FOOTER - sticky amb Bootstrap
- [ ] Prettier vs. Vetur ?

### Server etc
- [ ] Link a HEROKU CHEAT SHEET



BACK:  empro [json-server](https://github.com/typicode/json-server) i em baso [en aquest exemple bàsic](https://github.com/typicode/json-server#simple-example)


Desplegada a https://vue-json-server-app.herokuapp.com/

Falta ficar VUE.JS a front i generar versió build a dins de '/public' 

## Postman

[Collection de Postman amb proves en local i en Heroku](https://www.getpostman.com/collections/d3a611a1d40e4ab60ff0)


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

