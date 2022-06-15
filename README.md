# PokeTeams

## Routes

``` javascript 
// usuarios
'/users'
// teams
'/team'
//auth
'/auth'
```

### Users

``` javascript 
const URL_BASE = '/users'

GET '/users'
GET '/user/:id'
POST '/users'
PUT '/users/:id'
DELETE '/users/:id'
```
### Users

``` javascript 

const URL_BASE = '/team'

GET '/team'
POST '/team'
POST '/team/pokemons'
PUT '/team/pokemons/:id'
DELETE '/team/pokemons/:id'

```
# Controllers

## Users

- getAllusers
- getUserByID
- createUser
- editUser
- deleteUser

## Pokemon
