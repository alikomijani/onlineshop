import { createServer, Model, Response } from "miragejs";
import productImage from "./assets/images/prodcut1.jpg";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    models: {
      product: Model,
    },
    seeds(server) {
      server.create("product", {
        id: 1,
        category: "shoes",
        title: "product1",
        price: 100,
        image: productImage,
        description: "samp;e",
      });
      server.create("product", {
        id: 2,
        category: "shoes",
        title: "product2",
        price: 100,
        image: productImage,
        description: "samp;e",
      });
      server.create("product", {
        id: 3,
        category: "shoes",
        title: "product3",
        price: 100,
        image: productImage,
        description: "samp;e",
      });
      server.create("product", {
        id: 4,
        category: "shoes",
        title: "product4",
        price: 100,
        image: productImage,
        description: "samp;e",
      });
      server.create("product", {
        id: 5,
        category: "shoes",
        title: "product5",
        price: 100,
        image: productImage,
        description: "samp;e",
      });
      server.create("product", {
        id: 6,
        category: "shoes",
        title: "product6",
        price: 100,
        image: productImage,
        description: "samp;e",
      });
      server.create("product", {
        id: 7,
        category: "shoes",
        title: "product7",
        price: 100,
        image: productImage,
        description: "samp;e",
      });
      server.create("product", {
        id: 8,
        category: "shoes",
        title: "product8",
        price: 100,
        image: productImage,
        description: "samp;e",
      });
      server.create("product", {
        id: 9,
        category: "shoes",
        title: "product9",
        price: 100,
        image: productImage,
        description: "samp;e",
      });
      server.create("product", {
        id: 10,
        category: "shoes",
        title: "product10",
        price: 100,
        image: productImage,
        description: "samp;e",
      });
      server.create("product", {
        id: 11,
        category: "shoes",
        title: "product11",
        price: 100,
        image: productImage,
        description: "samp;e",
      });
      server.create("product", {
        id: 12,
        category: "shoes",
        title: "product12",
        price: 100,
        image: productImage,
        description: "samp;e",
      });
      server.create("product", {
        id: 13,
        category: "shoes",
        title: "product13",
        price: 100,
        image: productImage,
        description: "samp;e",
      });
      server.create("product", {
        id: 14,
        category: "shoes",
        title: "product14",
        price: 100,
        image: productImage,
        description: "samp;e",
      });
      server.create("product", {
        id: 15,
        category: "shoes",
        title: "product15",
        price: 100,
        image: productImage,
        description: "samp;e",
      });
    },

    routes() {
      this.namespace = "api";
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
        return product
      });
      this.put("/product/:id" , (schema, request) => {
        const data = JSON.parse(request.requestBody);
        let product = schema.products.find(request.params.id)
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
        return product
      });
      this.delete("/product/:id");
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
