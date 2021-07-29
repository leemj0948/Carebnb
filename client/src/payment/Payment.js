import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

const Payment = ({ totalprice }) => {
  const publishablekey = process.env.publishablekey;
  // var element = elements.create('card', {
  //   style: {
  //     base: {
  //       iconColor: '#c4f0ff',
  //       color: '#fff',
  //       fontWeight: '500',
  //       fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
  //       fontSize: '16px',
  //       fontSmoothing: 'antialiased',
  //       ':-webkit-autofill': {
  //         color: '#fce883',
  //       },
  //       '::placeholder': {
  //         color: '#87BBFD',
  //       },
  //     },
  //     invalid: {
  //       iconColor: '#FFC7EE',
  //       color: '#FFC7EE',
  //     },
  //   },
  // });
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label="Confrim and pay"
      name="Carebnb"
      local="ar"
      billingaddress
      shippingAddress
      // image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${totalprice}`}
      // amount={priceForStripe}
      panelLabel="Confrim and pay"
      token={onToken}
      stripeKey={publishablekey}
      // style={element}
    />
  );
};

const mapStateToProps = ({ booking: { totalprice } }) => ({
  totalprice,
});
export default connect(mapStateToProps, null)(Payment);
