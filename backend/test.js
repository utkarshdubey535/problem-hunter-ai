const mongoose = require("mongoose");
require("dotenv").config();

console.log("URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("✅ Connected");
    process.exit(0);
})
.catch((err) => {
    console.log("❌ Error");
    console.log(err);
    process.exit(1);
});