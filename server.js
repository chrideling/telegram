const express = require('express')
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello world!");
})

//commenting again and again!
app.listen(port, () => console.log(`app listening at port ${port}`))
