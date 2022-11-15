const express = require("express");
const authModel = require("../auth/Auth.model");
const tryModel = require("./Try.model");
const app = express.Router();

const MiddleWare = async (req, res, next) => {
  let token = req.headers.token;
  if (!token) {
    return res.send("Missing Token");
  }
  let [email, password] = token.split("_#_");
  try {
    let user = await authModel.findOne({ email });
    console.log(user);
    if (user) {
      if (password === user.password) {
        req.userId = user.id;
        next();
      } else {
        res.status(401).send("Authentication check failed password wrong");
      }
    } else {
      res.status(400).send(`user with token email:${email} not found`);
    }
  } catch (er) {
    res.send(`inside tries middleware ${er.message}`);
  }
};

app.patch("/", async (req, res) => {
  const { titleId, groupId } = req.query;
  try {
    let { todo } = await tryModel.findById({ _id: groupId });
    let map = todo?.map((item) => {
      if (item._id.toString() === titleId) {
        item.status = !item.status;
      }
      return item;
    });
    let updatedStatus = await tryModel.findByIdAndUpdate(
      { _id: groupId },
      { todo: map },
      { new: true }
    );
    return res.send(updatedStatus);
  } catch (er) {
    return res.send(er.message);
  }
});

app.get("/:email", async (req, res) => {
  const { email } = req.params;

  try {
    let data = await tryModel.find({ email }).sort({ groupNumber: "asc" });
    res.send(data);
  } catch (er) {
    res.status(401).send(`inside get Tries-->${er.message}`);
  }
});
app.get("/", async (req, res) => {
  const { groupId } = req.query;
  try {
    let data = await tryModel.findOne({ _id: groupId });
    return res.send(data);
  } catch (er) {
    return res.send();
  }
});
app.post("/", async (req, res) => {
  const { email, groupNumber } = req.body;
  if (!email || !groupNumber) {
    return res.send("Missing body content to POST");
  }
  try {
    let data = await tryModel.findOne({ email, groupNumber });
    console.log(data, "inside post right now");
    if (data) {
      data.todo = [...data.todo, ...req.body.todo];
      let fix = await tryModel.findByIdAndUpdate(
        data._id,
        {
          ...data,
        },
        { new: true }
      );
      return res.send(fix);
    } else {
      let createBase = await tryModel.create({ ...req.body });
      return res.send(createBase);
    }
  } catch (er) {
    return res.status(401).send(`inside try ${er.message}`);
  }
});

app.delete("/:id", async (req, res) => {
  //FULL group delete
  const { id } = req.params;
  try {
    let data = await tryModel.findByIdAndDelete(id);
    res.send(data);
  } catch (er) {
    res.status(401).send(`inside delete tries-->${er.message}`);
  }
});

app.delete("/", async (req, res) => {
  const { groupId, titleId } = req.query; // todo
  console.log(titleId);
  if (!groupId || !titleId) {
    return res.status(200).send("Missing quires");
  }
  try {
    // let data = await tryModel.find({ _id: titleId });
    // let data = await tryModel.aggregate([
    //   { $unwind: "$todo" },
    //   { $match: { _id: titleId } },
    // ]);
    let { todo } = await tryModel.findOne({ _id: groupId }, { todo: 1 });

    let filter = todo.filter((item) => {
      console.log(item._id.toString(), typeof titleId);
      return item._id.toString() !== titleId;
    });
    console.log(filter.length, "<-----------------------------");
    let fix = await tryModel.findByIdAndUpdate(
      { _id: groupId },
      { todo: [...filter] },
      { new: true }
    );
    // let del = await tryModel.findByIdAndDelete({});

    res.send(fix);
  } catch (er) {
    res.status(401).send(`inside todo delete--->${er.message}`);
  }
});

module.exports = app;

//db.demo414.aggregate([{$unwind: "$details"}, {$match:{"details.StudentMarks" :56}}] )
//Product.find({ categories:  {$in: ['5052843e023273693300010a']}})

//Data Structure
/* 
{
    "_id": "636cc0a5e2467da3ad65084f",
    "email": "nayanKumar@gmail.com",
    "groupNumber": 2,
    "todo": [
        {
            "status": true,
            "title": "xyzabcbacb",
            "_id": "636cc0a5e2467da3ad650850"
        },
        {
            "status": true,
            "title": "xyzabcbacb",
            "_id": "636cc0a5e2467da3ad650851"
        },
        {
            "status": true,
            "title": "xyzabcbacb",
            "_id": "636cc0a5e2467da3ad650852"
        },
        {
            "status": true,
            "title": "nayan",
            "_id": "636cc183022c3dfe38b741c3"
        },
        {
            "status": true,
            "title": "nayan",
            "_id": "636cc183022c3dfe38b741c4"
        },
        {
            "status": true,
            "title": "nayan",
            "_id": "636cc183022c3dfe38b741c5"
        }
    ],
    "__v": 0
}
*/
