const express = require("express");
const postRouter = require("./API/router/router");

const app = express();
app.use(express.json());
app.use("/post", postRouter);

const PORT = 8002;

app.listen(PORT, () => {
  console.log(`the app is running in port http://localhost:${PORT}`);
});
