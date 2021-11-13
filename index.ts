const express = require('express');
const path = require('path');


const app = express();


app.get('/', (req:any, res:any ) => {
  res.status(200)
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.use(express.static(path.join('public')))




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is run on port: ' + PORT);
});
