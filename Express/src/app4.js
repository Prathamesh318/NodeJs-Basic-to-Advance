// app4.js
import express from "express";
import bodyParser from "body-parser";
import { addEmployee, getAllEmployees } from "./service/employeeService.js";

const app = express();
app.use(bodyParser.json());

const port = 8081;

app.get("/api/employees", getAllEmployees);

app.post("/api/employees",addEmployee);

app.listen(port, () => console.log("employee service started"));
