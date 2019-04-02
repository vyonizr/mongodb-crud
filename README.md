# mongodb-crud# rest-api

## List of routes

| Route | HTTP | Params | Body | Description |
| ----- | ---- | --------- | ---- | ----------- |
| `api/books` | GET | `none` | `none` | Get all books info |
| `api/books` | POST | `none` | `isbn:String`,`title:String`,`author:String`,`category:String`,`stock:Number` | Create a book |
| `api/books` | DELETE | `none` | `isbn` | Delete a book by its ISBN |
| `api/books/` | PUT | `none` | `isbn:String`, `field:String`, `value:String` | Update a book with new info by its ISBN |
| `api/books/` | PATCH | `none` | `isbn:String`, `field:String`, `value:String` | Update a book with new info by its ISBN |

## Usage

Make sure you have Node.js and npm installed on your computer, then run these commands:

``` shell
npm install
npm run dev
```

Access the API on `http://localhost:4000/`