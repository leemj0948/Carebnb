const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const stripe = require('stripe')(process.env.SECRET_KEY);

const app = express();

<<<<<<< HEAD
const port = process.env.PORT || 3001;

=======
const port = process.env.PORT || 5000;
>>>>>>> 725c70ba... Almost Done, Stripe, paysuccessPage, header layout

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, error => {
  if (error) throw error;
  console.log('server running on port' + port);
});

app.post('/pay', async (req, res) => {
  // console.log(res.body.amount);
  if (req.method === 'POST') {
    try {
      const { amount } = req.body;
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        // payment_method_types: ['card_present'],
      });
      res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
});
<<<<<<< HEAD

// app.post('/pay', (req, res) => {
//   const body = {
//     source: req.body.token.id,
//     amount: req.body.amount,
//     currency: 'usd',
//   };
//   //성공 했을경우

//   stripe.charges.create(body, (stripeErr, stripeRes) => {
//     if (stripeErr) {
//       res.status(500).send({ error: stripeErr });
//     } else {
//       res.status(200).send({ success: stripeRes });
//     }
//   });
// });

// const express = require('express');
// const app = express();
// // This is your real test secret API key.
// const stripe = require('stripe')(
//   'sk_test_51IvxI9BWIjn6kM5hHoxKI0eqCueLDAHroxVcA8UHMC2uO1DcBOJjL4y1dN9I9XpGn9x4ZwpAdjgxi5s1TcIquUgH00uykpI7wb'
// );

// app.use(express.static('.'));
// app.use(express.json());

// const calculateOrderAmount = items => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return 1400;
// };

// app.post('/create-payment-intent', async (req, res) => {
//   const { items } = req.body;
//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(items),
//     currency: 'usd',
//   });
//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// app.listen(4242, () => console.log('Node server listening on port 4242!'));
=======
>>>>>>> 725c70ba... Almost Done, Stripe, paysuccessPage, header layout
