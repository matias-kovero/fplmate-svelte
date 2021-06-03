# FPLMate
*Just an testing repo for svelte.*  
> This repo might feature changing code styles / bad practices.  

Attempting to re-create and clean the spaghetti coded react-app found at [fplmate.com](https://fplmate.com/)

### Mandatory data
Every route needs season data from: `/api/bootstrap-static/`  
This is the base data that is referenced in our other fetches.  

Data needed for other routes:
```
/users/{userid}
 - /api/entry/{userid}
 - /api/event/{gameweek}/live
 - /api/entry/{userid}/event/{gameweek}/picks

/fixtures
 - /api/fixtures

/leagues
 - /api/leagues-classic/{leagueid}/standings/?page_new_entries=1&page_standings=1
```

### Ideal state
As the data is public (no auth needed), ideally we would like to server side render the data. But when a user has specified a profile he is intrested, show automatically that profiles information _(will require some sort of state handling -> stores)_

No profile specified:
```
/leagues
 - /api/leagues-classic/{global-league-id1}
 - /api/leagues-classic/{global-league-id1}
 - .../etc
```
Profile specified:
```
- /api/leagues-classic/{profile-league-id1}
- /api/leagues-classic/{profile-league-id2}
- .../etc

- /api/leagues-classic/{global-league-id1}
- /api/leagues-classic/{global-league-id1}
- .../etc
```

Also should have direct rendering of specific leagues ex:
```
/leagues/{leagueid}
 - /api/leagues-classic/{leagueid}/standings/?page_new_entries=1&page_standings=1
```