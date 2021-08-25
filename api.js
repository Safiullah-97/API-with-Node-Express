const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { listenerCount } = require("./User"); 


require('./User');
app.use(bodyParser.json());


const TodoX = mongoose.model("TODO")

app.get('/Get', async (req, res) => {
    try {
        const todo = await TodoX.find({})
        
        res.send(todo);
    }
    catch (error) {
        res.status(500)
    }
})

app.post('/Post', async (req, res) => {
    try {
        const todo = new TodoX();
        todo.TodoItems= req.body.TodoItems;
        todo.Todo_List=req.body.Todo_List;
        
        await todo.save();

        res.send(todo);
    }
    catch (error) {
        res.status(500)
    }
})

mongoose.connect("mongodb+srv://safi:safi123@cluster0.9baf1.mongodb.net/Work1?retryWrites=true&w=majority",
// mongodb+srv://safi:<password>@cluster0.9baf1.mongodb.net/MYDB?retryWrites=true&w=majority
    {
        useNewUrlParser: true, useUnifiedTopology: true,
        useCreateIndex: true, useFindAndModify: false
    })
    .then(() => {
        console.log('Connected to MongoDB');
        server = app.listen(6000, () => {
            console.log("Listening to port: 6000");
        });
    });


    