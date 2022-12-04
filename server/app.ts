import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/routes'
import path from "path";

const app = express()

app.use(cors(({origin: true, credentials: true})));
app.use(morgan('dev'));
app.use(express.json());

app.use('/', router)
app.use(express.static(path.join(__dirname, "..", "..", "dist")));

export default app