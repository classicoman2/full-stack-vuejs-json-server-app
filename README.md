# Full Stack Vue.js + Bootstrap 4.5 + json-server/Node.js app




### Client
- [ ] Fer un Sign Up form amb `Bootstrap`
- [ ] Heroku - references to local API should be to `window.location.href`
- [ ] Generacio urls de API, a __getters__ de Vuex, ja que son un codi que hauria de ser GLOBAL
- [x] _Bootstrap Theming_ amb __Webpack__
- [x] Filtrar en clicar ENTER en camp de Filtre: és necessari 1) Crear component amb barra navegació (si no es complica molt) i 2) Emprar Programmatic Navigation (Vue Router)
- [x] Crear component HEADER
- [x] Crear component FOOTER - sticky amb Bootstrap

### Server etc
- [ ] Link a HEROKU CHEAT SHEET


BACK: empro [json-server](https://github.com/typicode/json-server) i em baso [en aquest exemple bàsic](https://github.com/typicode/json-server#simple-example)

Desplegada [aqui](https://vue-json-server-app.herokuapp.com/) 

## Postman
[Postman collection with tests in local and remote](https://www.getpostman.com/collections/d3a611a1d40e4ab60ff0)

## HEROKU Deployment
:warning: Basat en [el tutorial basic de HEROKU](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

> 1.Iniciar sessió en Heroku
```bash
heroku login
```
> 2.Provar l'app en local
```bash
heroku local web
```

> 3.Crear aplicacio a heroku
```bash
heroku apps:create staticsitenodejs
```

> 4.Commitejar canvis (cada cop, repetirem aquesta passa i la següent)
```bash
git add . && git commit -m "canvi fet"
```

> 5.Fer push de la branca corresponent
```bash
git push heroku main
```

