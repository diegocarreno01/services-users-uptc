const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://diegocarreno2014:CORSAgls855@db-users.hkffiie.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((data) => console.log("DB is conected"))
  .then((err) => console.log(err));
