import { createServer, Model, Response } from "miragejs";
import productImage from "./assets/images/prodcut1.jpg";

export function makeServer({ environment = "test" } = {}) {

  let server = createServer({
    environment,
    models: {
      product: Model,
      user: Model,
    },
    seeds(server) {
      server.create("user", {
        id: 1,
        username: "ali",
        password: 123,
      });
      server.create("product", {
        id: 1,
        category: "shoes",
        title: "product1",
        price: 100,
        image: productImage,
        description: "sample",
      });
      server.create("product", {
        id: 2,
        category: "shoes",
        title: "product2",
        price: 100,
        image: productImage,
        description: "sample",
      });
      server.create("product", {
        id: 3,
        category: "shoes",
        title: "product3",
        price: 100,
        image: productImage,
        description: "sample",
      });
      server.create("product", {
        id: 4,
        category: "shoes",
        title: "product4",
        price: 100,
        image: productImage,
        description: "sample",
      });
      server.create("product", {
        id: 5,
        category: "shoes",
        title: "product5",
        price: 100,
        image: productImage,
        description: "sample",
      });
      server.create("product", {
        id: 6,
        category: "shoes",
        title: "product6",
        price: 100,
        image: productImage,
        description: "sample",
      });
      server.create("product", {
        id: 7,
        category: "shoes",
        title: "product7",
        price: 100,
        image: productImage,
        description: "sample",
      });
      server.create("product", {
        id: 8,
        category: "shoes",
        title: "product8",
        price: 100,
        image: productImage,
        description: "sample",
      });
      server.create("product", {
        id: 9,
        category: "shoes",
        title: "product9",
        price: 100,
        image: productImage,
        description: "sample",
      });
      server.create("product", {
        id: 10,
        category: "shoes",
        title: "product10",
        price: 100,
        image: productImage,
        description: "sample",
      });
      server.create("product", {
        id: 11,
        category: "shoes",
        title: "product11",
        price: 100,
        image: productImage,
        description: "sample",
      });
      server.create("product", {
        id: 12,
        category: "shoes",
        title: "product12",
        price: 100,
        image: productImage,
        description: "sample",
      });
      server.create("product", {
        id: 13,
        category: "shoes",
        title: "product13",
        price: 100,
        image: productImage,
        description: "sample",
      });
      server.create("product", {
        id: 14,
        category: "shoes",
        title: "product14",
        price: 100,
        image: productImage,
        description: "sample",
      });
      server.create("product", {
        id: 15,
        category: "shoes",
        title: "product15",
        price: 100,
        image: productImage,
        description: "sample",
      });
    },

    routes() {
      this.timing = 3000
      this.namespace = "api";
      this.post("/auth/register", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        let user = schema.users.create({
          username: data.username,
          password: data.password,
        });
        return user;
      });
      this.post("/auth/login", (schema, request) => {
        const user_data = JSON.parse(request.requestBody);
        let user = schema.users.findBy({
          username: user_data.username,
          password: user_data.password,
        });
        if (user) {
          return {
            accessToken: 1,
            refreshToken: 2,
          };
        } else {
          return new Response(
            400,
            { some: "header" },
            { none_filed_error: ["user credential is failed"] }
          );
        }
      });
      this.post("/auth/refresh", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        if (data.refreshToken === 2) {
          return {
            accessToken: 1,
          };
        } else
          return new Response(
            401,
            { some: "header" },
            { none_filed_error: ["user credential is failed"] }
          );
      });
      this.get("/products", (schema) => {
        return schema.products.all();
      });
      this.post("/products", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        if (!data.title) {
          return new Response(
            400,
            { some: "header" },
            { title: ["title cannot be blank"] }
          );
        }
        console.log(data.price);
        if (parseInt(data.price) < 0) {
          return new Response(
            400,
            { some: "header" },
            { price: ["price cannot be negative"] }
          );
        }
        let product = schema.products.create({
          title: data.title,
          category: data.category,
          price: data.price,
          image: productImage,
          description: data.description,
        });
        return product;
      });
      this.put("/product/:id", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        let product = schema.products.find(request.params.id);
        if (!data.title) {
          return new Response(
            400,
            { some: "header" },
            { title: ["title cannot be blank"] }
          );
        }
        console.log(data.price);
        if (parseInt(data.price) < 0) {
          return new Response(
            400,
            { some: "header" },
            { price: ["price cannot be negative"] }
          );
        }
        product.update({
          title: data.title,
          category: data.category,
          price: data.price,
          image: productImage,
          description: data.description,
        });
        return product;
      });
      this.delete("/product/:id");

      this.post("/order", (schema, request) => {
        const data = JSON.parse(request.requestBody);
      });

      this.get("/products/:id", (schema, request) => {
        let id = request.params.id;
        const product = schema.products.find(id);
        if (product) {
          return product;
        }
        return new Response(
          404,
          {},
          { error: `Product with id ${id} not found` }
        );
      });
    },
  });

  return server;
}
