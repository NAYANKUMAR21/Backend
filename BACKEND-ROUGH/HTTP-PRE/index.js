const Ndata = require("./data");
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  let data = {
    posts: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
    ],
    todos: [
      { name: "nayan" },
      { name: "nayan" },
      { name: "nayan" },
      { name: "nayan" },
      { name: "nayan" },
      { name: "nayan" },
      { name: "nayan" },
    ],
  };
  //   res.write(JSON.stringify(data));
  console.log(req.url);
  if (req.url === "/products") {
    res.setHeader("content-type", "application/json");
    return res.end(JSON.stringify(data));
  } else if (req.url === "/todos") {
    res.setHeader("content-type", "application/json");
    return res.end(JSON.stringify(data.todos));
  } else {
    // res.setHeader("content-type","application/json")
    console.log(Ndata.data);

    // res.write(`${Ndata}`)

    return res.end(`${Ndata.data}`); //changes to be done
  }
});
server.listen(8080, () => {
  console.log("server started");
});