const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const stripeController = async (req, res) => {
  const { purchased_items, products_total_amount, shipping_fee } = req.body;


  const paymentIntent = await stripe.paymentIntents.create({
    amount: products_total_amount + shipping_fee,
    currency: 'usd',
  });

  res.json({ clientSecret: paymentIntent.client_secret });
};

module.exports = stripeController;
