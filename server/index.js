import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dictionaryRoutes from './routes/dictionaryRoutes.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());


app.use('/api/dictionary', dictionaryRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
