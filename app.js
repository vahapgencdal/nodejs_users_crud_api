import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const PORT = 5000;

const app = express();

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res)=>{
    res.send("Users CRUD API");
});


app.listen(PORT, ()=>{console.log('Server running on port : http://localhost:${PORT}')});


