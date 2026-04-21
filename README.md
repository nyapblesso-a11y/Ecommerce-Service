# 🛒 E-Commerce API

A RESTful backend API for managing products in an e-commerce platform.
Built with **Node.js**, **Express**, and documented using **Swagger (OpenAPI 3.0)**.

---

##  Live Demo

*  Production: https://ecommerce-service-h7mh.onrender.com
*  API Docs: https://ecommerce-service-h7mh.onrender.com/api-docs

---

##  Tech Stack

* **Backend:** Node.js, Express
* **Documentation:** Swagger (swagger-jsdoc, swagger-ui-express)
* **Database:** ( PostgreSQL)
* **Hosting:** Render

---

##  Features

* Create products
* Retrieve all products (with search & filters)
* Get a single product by ID
* Update product details
* Delete products
* Get available products

---

##  Project Structure

```
project-root/
│
├── routes/
│   └── products.routes.js       # API routes + Swagger docs
│
├── controller/
│   └── products.controller.js   # Business logic
│
├── swagger.js                  # Swagger configuration
├── server.js / app.js          # Entry point
└── package.json
```

---

##  Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/nyapblesso-a11y/Ecommerce-Service.git
cd ecommerce-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
npm run dev
```

Server will start on:

```
http://localhost:4040
```

---

##  API Documentation

Swagger UI available at:

```
http://localhost:4040/api-docs
```

---

##  API Endpoints

###  Products

---

###  Create Product

```http
POST /product
```

**Request Body**

```json
{
  "name": "iPhone 15",
  "description": "Latest Apple smartphone",
  "price": 1200,
  "category": "Electronics",
  "image_url": "https://images.example/photo"
}
```

**Response**

* `201 Created`
* `400 Bad Request`

---

###  Get All Products (Search & Filter)

```http
GET /product
```

**Query Params**

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| search    | string | Search by product name |
| category  | string | Filter by category     |

**Example**

```
/product?search=iphone&category=Electronics
```

---

###  Get Available Products

```http
GET /product/available
```

**Response**

* `200 OK`

---

###  Get Product by ID

```http
GET /product/{id}
```

**Params**

* `id` (integer)

**Response**

* `200 OK`
* `404 Not Found`

---

###  Update Product

```http
PUT /product/{id}
```

**Request Body (optional fields)**

```json
{
  "name": "Updated name",
  "price": 999
}
```

**Response**

* `200 OK`
* `404 Not Found`

---

###  Delete Product

```http
DELETE /product/{id}
```

**Response**

* `200 OK`
* `404 Not Found`

---

## Example cURL Requests

### Create Product

```bash
curl -X POST http://localhost:4040/product \
-H "Content-Type: application/json" \
-d '{
  "name": "iPhone 15",
  "price": 1200
}'
```

---

##  Error Handling

Typical error responses:

```json
{
  "error": "Product not found"
}
```

```json
{
  "error": "Invalid input"
}
```

---

##  Future Improvements

*  Input validation (Joi / Zod)
*  Authentication (JWT / Firebase)
*  Pagination & sorting
*  Order & user management
*  Image upload support

---

## Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

##  License

This project is licensed under the MIT License.

---

##  Author

Built by **Nyap Bless Ringnyu**
