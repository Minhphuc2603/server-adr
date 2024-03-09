// Khai báo module express
import express, { json } from 'express';
import * as dotenv from 'dotenv';

import connectDB from './database.js';
import cors from "cors"
import categoryRouter from './route/category.js';
import questionRouter from './route/question.js';

dotenv.config();
// Định nghĩa 1 webserver
const app = express();
app.use(
    cors({
      origin: process.env.CLIENT,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true, 
    })
  );

// Kích hoạt middleware cho phép Express server làm việc với dữ liệu JSON
app.use(json());

app.get('/', (req, res) => {
    res.send("Welcome to Home page!");
});
app.use('/category', categoryRouter);
app.use('/question', questionRouter);

const port = process.env.PORT || 8080;

app.listen(port, async () => {
    connectDB();
    console.log(`Web server running on: http://localhost:${port}`);
});