import express from 'express';
import dotenv from 'dotenv';
import './models/index';
import binTypeRoutes from './routes/binType.route';
import categoryRoutes from './routes/category.route';
import productRoutes from './routes/product.route';
import affiliationRoutes from './routes/affiliation.route';
import ecologicalIndiceRoutes from './routes/ecologicalIndice.route';
import errorHandler from './middlewares/errorHandler';

dotenv.config();

const app = express();
const port = process.env.BACKEND_PORT || 3001;

app.use(express.json());

app.use('/api/binType', binTypeRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
app.use('/api/affiliation', affiliationRoutes);
app.use('/api/ecologicalIndice', ecologicalIndiceRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
