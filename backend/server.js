const express = require('express');
const mongoose = require('mongoose');
const User = require("./User");
const Orders = require("./Orders")
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to DB");
}).catch(err => {
  console.log(err);
});

app.get('/', async (req, res) => {
  console.log("working");
   res.send("Hello")
});


app.post('/register', async (req, res) => {
  console.log("working");
    const usr = req.body;
    try {
        const user = await User.create({ Email: usr.Email, Password: usr.Password });
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(404);
    }
});

app.post('/login', async (req, res) => {
    const usr = req.body;
    try {
        const user = await User.find({ Email: usr.Email });
        if (user[0].Password === usr.Password) {
            const token = jwt.sign({ Email: user.Email, userId: user._id }, 'B2RhwM0vppVupW9aPobZSgLW7YlpdgrV', { expiresIn: '1h' });
            const id = user[0]._id
            res.status(200).json({token, id});
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.sendStatus(404);
    }
});

app.get('/orders/:usrId', async (req, res) => {
  const usrId = req.params.usrId;
  try {
    const order = await Orders.find({ UserId: usrId });
    if (order.length === 0) {
      res.status(404).json({ error: 'No orders found for this user' });
    } else {
      res.status(200).json(order);
    }
  } catch (error) {
    res.status(404).json({ error: 'No orders found for this user' });
  }
});


app.get('/order/:orderId', async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const order = await Orders.findOne({ _id: orderId });
    if (order.length === 0) {
      res.status(404).json({ error: 'No orders found for this user' });
    } else {
      res.status(200).json(order);
    }
  } catch (error) {
    res.status(404).json({ error: 'No orders found for this user' });
  }
});


app.get('/Admin', async (req, res) => {
  try {
    const order = await Orders.find();
    if (order.length === 0) {
      res.status(404).json({ error: 'No orders found for this user' });
    } else {
      res.status(200).json(order);
    }
  } catch (error) {
    res.status(404).json({ error: 'No orders found for this user' });
  }
});

app.post('/Admin/order', async (req, res) => {
  const orderId = req.body.orderId;
  const newStatus = req.body.status;

  try {
    const order = await Orders.findOneAndUpdate(
      { _id: orderId },
      { Status: newStatus },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ error: 'No order found with that ID' });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});





function Date_and_time() {
  let date = new Date();
    let options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    let currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    let istTime = date.toLocaleTimeString('en-IN', options);
    let date_and_time = currentDate + " " + istTime;

    return ("Date and Time:", date_and_time);
}

app.post('/cart', async (req, res) => {
    const usrId = req.body.userId;
    const addrs = req.body.Address;
    const phone = req.body.Phone;
    const cart_items = req.body.items;
    const totalAmount = cart_items.reduce((total, item) => total + parseInt(item.price.replace('₹', '')), 0);
    current_date_and_time = Date_and_time();
    try {
      const order = await Orders.create({ UserId: usrId, Address: addrs,Phone: phone, Ordered_Items: cart_items, Ordered_Time: current_date_and_time, Status:"Order Placed", Total_Amount: totalAmount});
      res.sendStatus(200);
  } catch (error) {
      res.sendStatus(404);
  }
});


app.listen(process.env.PORT || 5000, () => {  
  console.log(`App is Listening...`);
});