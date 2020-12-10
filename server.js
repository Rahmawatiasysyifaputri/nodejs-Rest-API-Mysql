const { mysql, app } = require("./config/init");
const db = require("./config/db");
const fs = require("fs");

fs.readdir("./routes", async (err, file) => {
  try {
    await file.forEach((value) => {
      require(`./routes/${value}`)(app, db);
    });
  } catch (error) {
    throw error;
  }
});