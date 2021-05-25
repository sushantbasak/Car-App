require('./db/mongoose');
const express = require('express');
const app = express();
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');
const orderRouter = require('./routes/order');

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(userRouter);
app.use(orderRouter);
app.use(adminRouter);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.listen(port, () => console.log('Server started on port ' + port));
