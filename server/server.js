import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userSchema from "./Schema/userSchema.js";
import taskSchema from "./Schema/taskSchema.js";

const app = express();

app.use(cors());

app.use(bodyParser.json());

// db connection
mongoose
  .connect(
    "mongodb+srv://BrightMensah:Mensah12@cluster0.ytbvacg.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected successfully"))
  .catch(() => console.log("connection was unsuccessful"));

app.get("/", function (req, res) {
  res.send("hello world");
});

// sign up user

app.post("/signup", (req, res) => {
  // check if user details exist
  userSchema
    .findOne({
      email: req.body.email,
    })
    .then((userExist) => {
      if (userExist) {
        res.send({ userExist: true });
        console.log("user exist");
      } else {
        // sign the user up
        const userSignedUp = new userSchema({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });

        userSignedUp
          .save()
          .then(() => res.send({ success: "user registered" }));
      }
    });
});

// login user
app.post("/login", (req, res) => {
  userSchema
    .findOne({
      email: req.body.email,
    })
    .then(function (userExist) {
      if (userExist) {
        //  if user exist go on to check if the password associated with the account is
        if (userExist) {
          let userPassword = req.body.password;
          // check if  password is equal to the user password
          {
            userPassword === userExist.password
              ? res.send({ success: true, msg: "login successful" })
              : res.send({
                  loginFailed: true,
                  msg: "email or password is incorrect",
                });
          }
        }
      } else {
        // if email does not exist
        res.send({ loginFailed: true, msg: "email or password is incorrect" });
        console.log("email or password is incorrect");
      }
    })
    .catch(function () {
      console.log("something went wrong.");
    });
});

// add task
app.post("/task", function (req, res) {
  taskSchema
    .findOne({
      title: req.body.title,
      description: req.body.description,
    })
    .then(function (taskExist) {
      if (taskExist) {
        console.log("task exist");
      } else {
        let userTask = new taskSchema({
          title: req.body.title,
          description: req.body.description,
        });
        userTask.save().then(function () {
          console.log("task added");
        });
      }
    });
});

// get all task
app.get("/task", function (req, res) {
  taskSchema.find({}).then((allTask) => {
    res.send(allTask);
  });
});

// get task by id , update and delete them

app.get("/task/:id", (req, res) => {
  let id = req.params.id;
  taskSchema.findById(id).then((respond) => {
    if (respond) {
      res.send(respond);
    }
  });
});

// update task

app.put("/task/:id", function (req, res) {
  const id = req.params.id;

  taskSchema
    .findByIdAndUpdate(id, {
      title: req.body.title,
      description: req.body.description,
    })
    .then((respond) => res.send({ respond, msg: "task updated" }));
});

app.delete("/task/:id", function (req, res) {
  const id = req.params.id;

  taskSchema
    .findByIdAndDelete(id)
    .then(() => res.send({ msg: "task has been deleted" }))
    .catch((error) => res.send(error));
});
const port = 3400;
app.listen(port, () => console.log(`server started on port ${port}`));
