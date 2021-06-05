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


### Dev
If you are going to host an own version of this repo  
**Please create an own API endpoint** *as the given api can't handle the traffic.*  

To get things started - clone the repo and run these commands
```
npm install
npm run dev -- --open
```