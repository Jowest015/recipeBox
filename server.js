const express = require('express');
const dbroutes = require('./src/recipe/routes');

const app = express();
const port = 2340;

app.use(express.json());

app.get('/', (req, res)=> {
  res.send('Hello world');
});

app.use('/api/v1/recipes', dbroutes);

app.listen(port, ()=> {
  console.log(`Connection established at http://localhost:${port}`)
});