import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import cors from "cors";


const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use('/products', productRoutes);

app.listen(8080, () => console.log('Server running at port 8080'));