const request = require("supertest");
const app = require("../src/app");
const mongoose = require("mongoose");

beforeAll(async () => {
  try {
    console.log("Connecting to MongoDB Atlas for testing...");
    await mongoose.connect(
      "mongodb+srv://myUser:qRJgJmsJppqiaXws@crud-cluster.ag3t0.mongodb.net/testdb?retryWrites=true&w=majority", // Test database
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB Atlas for testing.");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    throw error; // Fail tests if MongoDB connection fails
  }
}, 60000); // 60 seconds timeout for connecting to remote DB

afterAll(async () => {
  try {
    console.log("Closing MongoDB Atlas connection...");
    await mongoose.connection.close();
    console.log("Connection closed.");
  } catch (error) {
    console.error("Error closing the MongoDB Atlas connection:", error);
  }
}, 60000);

describe("Item CRUD operations", () => {
  let itemId;

  test("Create an item", async () => {
    const response = await request(app)
      .post("/items")
      .send({ name: "Test Item", description: "Test Description" })
      .expect(201);

    expect(response.body).toHaveProperty("name", "Test Item");
    itemId = response.body._id;
  });

  test("Retrieve all items", async () => {
    const response = await request(app).get("/items").expect(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  test("Retrieve a single item", async () => {
    const response = await request(app).get(`/items/${itemId}`).expect(200);
    expect(response.body).toHaveProperty("name", "Test Item");
  });

  test("Update an item", async () => {
    const response = await request(app)
      .put(`/items/${itemId}`)
      .send({ description: "Updated Description" })
      .expect(200);

    expect(response.body).toHaveProperty("description", "Updated Description");
  });

  test("Delete an item", async () => {
    await request(app).delete(`/items/${itemId}`).expect(204); // Expect 204 No Content
    await request(app).get(`/items/${itemId}`).expect(404); // Ensure item is deleted
  });
});
