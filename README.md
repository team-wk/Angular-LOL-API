# Angular LOL API
Angular playground repository. <br />
Back-end in NodeJS + MongoDB + ExpressJS is only for hosting RESTful API.

## Angular
### Installation
In `front-end` directory: `npm install`

### Run
In `front-end` directory: `ng serve`

### Host
http://localhost:4200/

## NodeJS server
### Installation
In `back-end` directory: `npm install --only=dev`

### Run
`mongod`  <br />
In `back-end` directory: `npm run start`

### RESTful API
* http://localhost:4300/champions
* http://localhost:4300/champions/:championId
* http://localhost:4300/items
* http://localhost:4300/items/:itemId
* http://localhost:4300/masteries
* http://localhost:4300/masteries/:masteryId

## Planned API
* http://localhost:4300/runes
* http://localhost:4300/runes/:runeId
* http://localhost:4300/summonerspells
* http://localhost:4300/summonerspells/:summonerspellId

## Reference
### Front-end
* https://angular.io/
* https://material.angular.io/
* https://sass-guidelin.es/#architecture

### Back-end
* https://nodejs.org/en/
* https://www.mongodb.com/download-center?jmp=nav#community
* https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

### JSON data
* http://gameinfo.eune.leagueoflegends.com/pl/game-info/champions/
* http://gameinfo.eune.leagueoflegends.com/pl/game-info/items/
* http://gameinfo.eune.leagueoflegends.com/pl/game-info/summoners/
