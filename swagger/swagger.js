import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-Commerce API",
      version: "1.0.0",
      description: "API documentation for the E-commerce backend"
    },
    servers: [
      {
        url: "http://localhost:4040",
      }
    ]
  },
  apis: ["./routes/*.js"], 
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
