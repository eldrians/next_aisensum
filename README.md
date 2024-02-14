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

![getcustomer](https://github.com/eldrians/next_aisensum/assets/91566708/acff956a-42d6-445a-a8af-546bfb4a2b70)


Add Customer

![addcustomer](https://github.com/eldrians/next_aisensum/assets/91566708/299e4e28-54cb-4013-9a3c-a593bb9a3994)


Update Customer (with patch)

![updatecustomer](https://github.com/eldrians/next_aisensum/assets/91566708/84c8c762-3b38-4954-8677-d15c42359832)


Delete Customer

![deletecustomer](https://github.com/eldrians/next_aisensum/assets/91566708/3542d6d9-3dc9-4383-ac7f-479adb8f4e0b)


### Loading, search, filter, and pagination

loading with skeleton

![image](https://github.com/eldrians/next_aisensum/assets/91566708/9a5a107c-cbb8-47bc-8b11-8c20810ed8ed)

search name

![search](https://github.com/eldrians/next_aisensum/assets/91566708/bb928757-6147-4df3-9f76-3c25bafe8668)


custom header

![custom](https://github.com/eldrians/next_aisensum/assets/91566708/3ffc6d32-c700-4627-8f13-442b5d98b3b6)


pagination

![pagination](https://github.com/eldrians/next_aisensum/assets/91566708/1a58ec4e-dbcc-4116-9c4c-6b94fe0f8aee)


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
