import express from 'express';
import { configDotenv } from 'dotenv';
import connectDB from './config/db.js';
configDotenv();
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const port = process.env.PORT || 5000;
const app = express();

connectDB();

app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);
app.use('/api/users', userRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('API is running...');
});
app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);