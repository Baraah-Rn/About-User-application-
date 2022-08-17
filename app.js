import express from 'express';
import bodyParser from "body-parser";
import usersRoutes from "./routs/users.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.use('/users', usersRoutes);



app.listen(PORT, ()=>{
    console.log(`The app is listing to port: http://localhost:${PORT}`);
});