
# IR School Report BackEnd

### React-App
[Link] https://school-needs.netlify.com/

### Heroku Deployment URL :
[Link] https://ir-school-report-backend.herokuapp.com/

---
## Retrieve Posts
---

_HTTP METHOD: [GET]_

**URL: /posts**

_Returned Object will look like:_

```
        {
          id: 1,
          postTitle: 'Shortage of Art Supplies',
          description: 'Our Art classes are suffering from a shortage of art supplies. Working in the arts helps learners to develop creative problem-solving skills. The arts provide challenges for learners at all levels. Art education connects students with their own culture as well as with the wider world.',
          imgUrl: 'https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg?cs=srgb&dl=art-supplies-arts-and-crafts-ballpens-159644.jpg&fm=jpg',
          resolved: false,
          scheduled: false,
          needsAtt: true,
          user_school: 'Lambda School',
          user_id: 1
        },
        {
          id: 2,
          postTitle: 'New, Energy Efficient Lightbulbs',
          description: 'Students and faculty had the idea to replace the lights throughout the school with energy-efficient bulbs. Although they can initially cost more than traditional incandescent bulbs, during their lifetime they save you money, because they use less energy.',
          imgUrl: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?cs=srgb&dl=alternative-energy-background-blue-1036936.jpg&fm=jpg',
          resolved: false,
          scheduled: false,
          needsAtt: true,
          user_school: 'Lambda School',
          user_id: 1
        }
```


---
## Create a new User Account
---
_HTTP Method: [POST]_
__URL: /users__

Schema: 

|    Name   | Type    | Required | Description      |
|---------|:---------:|:----------:|:--------------------:|
|     id    | integer | Yes       | primary key, auto-increments|
| firstName | string  | Yes      | user's first name, 128 char max |
|  lastName | string  | Yes      | user's last name, 128 char max |
| email     | string  | Yes      | user's email address, 128 char max, unique |
| password  | string  | Yes      | user's password, 128 char max |
| school    | string  | Yes      | school user works for, 128 char max |
| isAdmin   | boolean | Yes       | Default value: False|

_Example:_
```
{
        "firstName": "John",
          "lastName": "Doe",
          "email": "JDoe@test.com",
          "password": "pass",
          "school": "Lambda School",
}
```

_Returns:_
```
{
  "user": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "JDoe@test.com",
    "password": "$2a$08$7ZQLXZUO.jiBYNK2Z2yZ4.P0KHxbXVynaWuyDKzoYPARDRCQE7yua",
    "school": "Lambda School"
    }
}
```


---
## Login
---

_HTTP Method: [POST]_
__URL: /login__

Schema:

| Name     | Type   | Required |
|----------|:--------:|:----------:|
| email    | String | Yes      |
| password | String | Yes      |

_Example_

```
{
    "email": "JDoe@test.com",
    "password": "pass"
}
```

_Returns:_

```
{
    "message": "Welcome John!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpc0FkbWluIjoxLCJpYXQiOjE1NTU1MzgyMTQsImV4cCI6MTU1NTYyNDYxNH0.M4VOBtgZ981Ukye_LvHt4_bD-2HpHDF3AwMjJ2SSFQ0"
}
```

---
## Create a new Post
---

_HTTP Method: [POST]_
__URL: /submitPosts__

Schema: 

```
| Name        | Type    | Required | Description                                                         |
|-------------|:---------:|:----------:|:---------------------------------------------------------------:|
| id          | integer | Yes       | key value, auto increments                                          |
| postTitle   | String  | Yes      | Issue/Equipment that needs resolving/replacement, 250 char max      |
| description | String  | Yes      | Brief description of issue, no char limit                           |
| imgUrl      | String  | No       | Default to Null, image URL to include image of issue, 2000 char max |
| resolved    | Boolean | Yes       | Default to false, for admin use to organize posts                   |
| scheduled   | Boolean | Yes       | Default to false, for admin use to organize posts                   |
| needsAtt    | Boolean | Yes       | Default to false, for admin use to organize posts                   |
| user_school | String  | Yes       | matches name of school user works for, 250 char max                 |
| user_id     | integer | Yes       | Foreign key, matches id of user who made the post                   |
```
_Example_

```
{
    "postTitle": "Library needs new computer",
    "description": "The library's computer is very old. It needs a new computer"
}
```

_Returns the id of the new post:_
```
[
    5
]
```
---

# Admin-Only API Calls
_requires user to have authorization header_

---

---
## Retrieve Posts
---


_HTTP Method [GET]_
__URL: /admin__


_Returned Object will look like:_

```
        {
          id: 1,
          postTitle: 'Shortage of Art Supplies',
          description: 'Our Art classes are suffering from a shortage of art supplies. Working in the arts helps learners to develop creative problem-solving skills. The arts provide challenges for learners at all levels. Art education connects students with their own culture as well as with the wider world.',
          imgUrl: 'https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg?cs=srgb&dl=art-supplies-arts-and-crafts-ballpens-159644.jpg&fm=jpg',
          resolved: false,
          scheduled: false,
          needsAtt: true,
          user_school: 'Lambda School',
          user_id: 1
        },
        {
          id: 2,
          postTitle: 'New, Energy Efficient Lightbulbs',
          description: 'Students and faculty had the idea to replace the lights throughout the school with energy-efficient bulbs. Although they can initially cost more than traditional incandescent bulbs, during their lifetime they save you money, because they use less energy.',
          imgUrl: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?cs=srgb&dl=alternative-energy-background-blue-1036936.jpg&fm=jpg',
          resolved: false,
          scheduled: false,
          needsAtt: true,
          user_school: 'Lambda School',
          user_id: 1
        }
```




---
## Update a Post
---
_HTTP Method [PUT]_
__URL /admin/:id__

Schema

```
| Name        | Type    | Required | Description                                                         |
|-------------|:-------:|:--------:|:-------------------------------------------------------------------:|
| id          | integer | Yes       | key value, auto increments                                          |
| postTitle   | String  | Yes      | Issue/Equipment that needs resolving/replacement, 250 char max      |
| description | String  | Yes      | Brief description of issue, no char limit                           |
| imgUrl      | String  | Yes       | Default to Null, image URL to include image of issue, 2000 char max |
| resolved    | Boolean | Yes       | Default to false, for admin use to organize posts                   |
| scheduled   | Boolean | Yes       | Default to false, for admin use to organize posts                   |
| needsAtt    | Boolean | Yes       | Default to false, for admin use to organize posts                   |
| user_school | String  | Yes       | matches name of school user works for, 250 char max                 |
| user_id     | integer | Yes       | Foreign key, matches id of user who made the post                   |
```

_Example_

```
  {
    "id": 1,
    "postTitle": "Updated Title",
    "description": "Updated Description",
    "imgUrl": "updatedImageUrl",
    "resolved": false,
    "scheduled": true,
    "needsAtt": false,
    "user_school": "Updated School",
    "user_id": 1
  }
```

_Returns the post ID_


---
## Delete a Post
---
_HTTP Method: [DELETE]_  
__URL: /admin/:id__

_Returns the deleted post ID_
