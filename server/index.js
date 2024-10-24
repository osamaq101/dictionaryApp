import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dictionaryRoutes from './routes/dictionaryRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());


app.use('/api/dictionary', dictionaryRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
