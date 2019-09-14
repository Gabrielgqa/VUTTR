const app = require("./src/app");

let port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server rodando na porta: ${port}`);
});

module.exports = app;
