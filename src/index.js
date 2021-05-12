const express = require('express');
require('express-async-errors');
const cors = require('cors');

const app = express();
const port = 8000;

const TaskRouter = require('./controllers/TaskRouter');

app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
}));

app.use(express.json())

app.use('/task', TaskRouter);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
