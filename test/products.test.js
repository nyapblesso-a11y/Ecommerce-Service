import request from "supertest";
import app from "../app.js"; // Import the Express app
import pool from "../config/db.js"; // Import DB pool

describe("Products API", () => {
  let productId;

  // Cleanup before and after tests
  beforeAll(async () => {
    // Optional: Clear test table
    await pool.query("DELETE FROM products");
  });

  afterAll(async () => {
    // Close DB connection after tests
    await pool.end();
  });

  // CREATE PRODUCT
  it("should create a new product", async () => {
    const res = await request(app)
      .post("/product")
      .send({
        name: "Test Product",
        description: "This is a test product",
        price: 100,
        category: "Electronics",
        image_url: "https://example.com/product.jpg"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty("id");
    expect(res.body.data.name).toBe("Test Product");

    productId = res.body.data.id; // Save for later tests
  });

  // GET ALL PRODUCTS
  it("should get all products", async () => {
    const res = await request(app).get("/product");

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.count).toBeGreaterThanOrEqual(1);
  });

  // GET SINGLE PRODUCT
  it("should get single product by ID", async () => {
    const res = await request(app).get(`/product/${productId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.id).toBe(productId);
  });

  // SEARCH AND FILTER
  it("should get products with search and filter", async () => {
    const res = await request(app).get("/product?search=Test&category=Electronics");

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data[0].name).toContain("Test");
    expect(res.body.data[0].category).toBe("Electronics");
  });

it("should update product price and description", async () => {
  const res = await request(app)
    .put(`/product/${productId}`)
    .send({
      name: "Test Product",
      description: "Updated description",
      price: 150.00,
      category: "Electronics",
      image_url: "https://example.com/product.jpg"
    });

  expect(res.statusCode).toBe(200);
  expect(res.body.success).toBe(true);
  expect(res.body.data.price).toBe("150.00"); 
  expect(res.body.data.description).toBe("Updated description");
});

  // DELETE PRODUCT
  it("should delete the product", async () => {
    const res = await request(app).delete(`/product/${productId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toMatch(/deleted/);
  });

  // GET NON-EXISTENT PRODUCT
  it("should return 404 for non-existent product", async () => {
    const res = await request(app).get(`/product/${productId}`);

    expect(res.statusCode).toBe(404);
    expect(res.body.success).toBe(false);
  });
});
