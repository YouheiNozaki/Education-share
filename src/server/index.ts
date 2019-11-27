import Express from 'express';
import { connectDB } from '../../config/db';

const app = Express();

connectDB();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
