const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB config
const db = require('./keys').mongoURI;

//connect to mongoDB
mongoose
.connect(db)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

//let's write our first route
app.get('/', (req,res) => res.send('Hello!!!'));


//adding routes to use

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

//creating port for test

const port = 7500;
app.listen(port, () => console.log(`server running on port ${port}`));