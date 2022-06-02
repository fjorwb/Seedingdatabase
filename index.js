require('dotenv').config()

const express = require('express');
const router = require('./routes')

const app = express();

app.use(express.json());
app.use(router)

app.get('/', (req, res) => {
	res.send('hello!!!!');
});



const port = 3005;

app.listen(port, () => {
	console.log(`Server listening at port: ${port}`);
});
