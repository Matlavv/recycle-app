import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './config/connection';
import binTypeRoutes from './routes/binType.route';
import categoryRoutes from './routes/category.route';
import itemRoutes from './routes/item.route';
import productAlternativeRoutes from './routes/productAlternative.route';

dotenv.config();

const app = express();
const port = process.env.BACKEND_PORT || 3001;

app.use(express.json());

app.use('/api/binType', binTypeRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/item', itemRoutes);
app.use('/api/productAlternative', productAlternativeRoutes);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  try {
    await sequelize.sync({ force: true });
    console.log('Database synchronized');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

export default app;
