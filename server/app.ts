import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/routes'

const app = express()

app.use(cors(({origin: true, credentials: true})));
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', router)

export default app