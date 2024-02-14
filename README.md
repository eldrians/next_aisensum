# AISENSUM Test - Axel Eldrian Hadiwibowo

#### Access APP on [aisensum-app][3]

FRONTEND - NEXT14 - [frontend-file][1]

BACKEND - FLASK - MYSQL - [backend-file][2]

[1]: https://github.com/eldrians/next_aisensum
[2]: https://github.com/eldrians/flask_aisensum
[3]: https://next-aisensum.vercel.app/

Here are the tasks that I have completed.

| Task                                                              |
| :---------------------------------------------------------------- |
| `Frontend: CRUD without Refresh (Tanstack)`                       |
| `Frontend: loading with skeleton, Filter, Search, and Pagination` |
| `Frontend: Responsive application (mobile, desktop, tablet)`      |
| `Frontend: Clean-code file structure`                             |
| `Frontend: Good Performance (Page Speed avg 90%>)`                |
| `Frontend: Reusable Component (shadcn)`                           |
| `Frontend: Form Validation (zod)`                                 |
| `Backend: Create app with flask and mysql`                        |
| `Backend: CRUD`                                                   |
| `Backend: JWT validation (created but not applied)`               |
| `Backend: clean-code`                                             |
| `APP: Application are completed host on vercel`                   |

## FRONTEND - DOCUMENTATION

### CRUD - Customer

Get Customer

Add Customer

Update Customer (with patch)

Delete Customer

### Loading, search, filter, and pagination

loading with skeleton

search name

custom header

pagination

### Responsive

### Clean Code

You can see from github

### Good Performance

### Form Validation

### Reusable component

You can see from github

## BACKEND - DOCUMENTATION

Base URL : https://flask-aisensum.vercel.app/

i created JWT authentication, and autorization too, but i dont implemented because the application dont have sign up or login section. u can see from my github [backend-axel][3]

### API Reference

#### Get all customer

```http
  GET /customer
```

#### Get add customer

```http
  POST /customer
```

| form-data     | Type     |
| :------------ | :------- |
| `name`        | `string` |
| `username_ig` | `string` |
| `fav-color`   | `string` |

#### Get update customer

```http
  PUT /customer/<id>
```

but, i used PATCH instead PUT

```http
  PATCH /customer/patch/<id>
```

| form-data     | Type     |
| :------------ | :------- |
| `id`          | `number` |
| `name`        | `string` |
| `username_ig` | `string` |
| `fav-color`   | `string` |

#### Delete update customer

```http
  DELETE /customer/<id>
```

| form-data | Type     |
| :-------- | :------- |
| `id`      | `number` |

## Setup & Run

### Setup FRONT END - NEXT JS

```http
  git clone https://github.com/eldrians/next_aisensum.git

  npm i

  create and fill .env.local

  npm run dev
```

### Setup BACK END - FLASK MYSQL

file : [flask-aisensum-github][2]

```http
  git clone https://github.com/eldrians/flask_aisensum.git

  npm i -g vercel

  pip install mysql.connector flask_cors jwt

  create and fill .env

  Vercel dev
```
