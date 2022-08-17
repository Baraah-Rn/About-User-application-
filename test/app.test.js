import app from '../app.js';
import supertest from "supertest";


const request = supertest(app);

describe("POST /users", ()=>{
    describe("if the user's firstName, LastName and age are valid", () => {
        it("server will respond with a 200 status code", async ()=>{
        const response = await request.post("/users").send({firstName : "Noha", lastName : "Doe", age:20})
       expect(response.statusCode).toBe(200);
     });
 });
 describe("if the user's firstName is undefined ", () => {
    it("server will respond with a 400 status code", async ()=>{
    const response = await request.post("/users").send({firstName :""})
        expect(response.statusCode).toBe(400);
 });
});
describe("if the user's lastName is undefined ", () => {
    it("server will respond with a 400 status code", async ()=>{
    const response = await request.post("/users").send({lastName :""})
        expect(response.statusCode).toBe(400);
 });
});
describe("if the user's age is undefined ", () => {
    it("server will respond with a 400 status code", async ()=>{
    const response = await request.post("/users").send({age : 0})
        expect(response.statusCode).toBe(400);
 });
});

});


