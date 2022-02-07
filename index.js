const bodyParser = require('body-parser');
const express = require('express'); 
const app = express(); 
const cors = require('cors');
const mongoose = require('mongoose');

// Added this line to try and overcome terminal error
app.use(
    express.urlencoded({ extended: true })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(cors('*'));

const userRoute = require('./routes/userRoute')

// Connect to DB
mongoose.connect(
    "mongodb+srv://project3:project3@cluster0.wnuva.mongodb.net/firstdatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    () => console.log('connected to db!')
);

app.use('/users', userRoute);

app.get("/", (req, res) => {
    res.send("Hello")
})

const port = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log('server up and running'));
}


module.exports = app;