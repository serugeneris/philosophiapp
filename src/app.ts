import express from 'express';
import { router } from './routes/routes';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../src/public')));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next();
});

app.use(router);
console.log('working app.js');
console.log(process.env.OPENAI_KEY)


app.listen(3000);