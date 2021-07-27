<<<<<<< HEAD
import Stripe from "stripe";
=======
import Stripe from 'stripe';
>>>>>>> 725c70ba... Almost Done, Stripe, paysuccessPage, header layout

const stripe = new Stripe(process.env.SECRET_KEY);

const payment_intents = async (req, res) => {
<<<<<<< HEAD
  if (req.method === "POST") {
    console.log('dd')
=======
  if (req.method === 'POST') {
    console.log('dd');
>>>>>>> 725c70ba... Almost Done, Stripe, paysuccessPage, header layout
    try {
      const { amount } = req.body;
      // Psst. For production-ready applications we recommend not using the
      // amount directly from the client without verifying it first. This is to
      // prevent bad actors from changing the total amount on the client before
      // it gets sent to the server. A good approach is to send the quantity of
      // a uniquely identifiable product and calculate the total price server-side.
      // Then, you would only fulfill orders using the quantity you charged for.

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
<<<<<<< HEAD
        currency: "usd"
=======
        currency: 'usd',
>>>>>>> 725c70ba... Almost Done, Stripe, paysuccessPage, header layout
      });

      res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
<<<<<<< HEAD
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default payment_intents; 
=======
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default payment_intents;
>>>>>>> 725c70ba... Almost Done, Stripe, paysuccessPage, header layout
