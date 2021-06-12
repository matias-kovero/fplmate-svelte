# FPLMate
*Just an testing repo for svelte.*  
> This repo might feature changing code styles / bad practices.  

This project is an attempt to clean spaghetti coded react-app [fplmate.com](https://fplmate.com/)  
Also trying to boost SEO ratings + initial load times with sveltekits SSR.


## Info

Before the content can be displayed to the users initial data needs to be  
fetched from `/bootstrap-static`. This fetch might slow down 1st render!

This is created to serve as an PWA - so it has an layout aimed for mobile.

### Endpoints

| Path | Sub-path     | Description                |
| :-------- | :------- | :------------------------- |
| `/` |  | Home page |
| `/user` |  | Profile page |
| `/user` | `/{userId}` | Users profile page |
| `/user` | `/{userId}/event/{gw}` | Users roster of given gameweek |
| `/fixtures` |  | Current/Latest fixtures |
| `/fixtures` | `/{gameweek}` | Gameweeks fixtures |
| `/leagues` |  | Leagues page |
| `/settings` |  | Settings page |

### Structure
SvelteKit uses an _filesystem-based router_. The structure is found under `src/routes`. Each route can have pages _(.svelte)_ and endpoints _(.json.js)_ under them.  
Pages provide html markdown whilist endpoints provide data to the given page.  

Example this project has an route: `src/routes/user/[id]/[gameweek]`  
that matches urls: `/user/1234/10` => _(id=1234, gameweek=10)_

### Dev
To get things started - clone the repo and run these commands
```
npm install
npm run dev -- --open
```