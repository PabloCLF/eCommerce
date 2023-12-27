import express from 'express';
import "./config/db.config.js";
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import usersRouter from './routes/users.router.js';


const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/api/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
})