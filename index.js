const express = require('express');
const studentRouter = require('/Users/visheshmehta/Desktop/SOLID_CM/app/routers/studentRouter.js');
const courseRouter = require('/Users/visheshmehta/Desktop/SOLID_CM/app/routers/courseRouter.js');

const app = express();
const port = 3000;

app.use(express.json()); // Assuming you want to parse JSON requests

app.use('/api', studentRouter);
app.use('/api', courseRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
