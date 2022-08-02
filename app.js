const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");

//config env
require("dotenv").config();

const routes = require("./routes");

//config app
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

//config routes
routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
