const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes_DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => {
        console.log("Established a connect to the database jokes_DB")
    })
    .catch( err => console.log("Something went wrong when connecting tothe DB", err))