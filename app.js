const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const path = require('path');

const router = require('./routes');
app.use(express.static(path.join(__dirname)));
app.use(router);

app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`server is listening at PORT http://localhost:${PORT}`);
})