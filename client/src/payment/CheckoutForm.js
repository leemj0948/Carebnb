import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import BillingDetailsFields from './BillingDetailForm';
import axios from 'axios';
import styled from 'styled-components';
// import pay_in  from './api/payment_intents'

const CheckoutForm = ({ price, onSuccessfulCheckout }) => {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  const stripe = useStripe();
  const elements = useElements();

  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };
  const handleFormSubmit = async e => {
    e.preventDefault();

    const billingDetails = {
      name: e.target.name.value,
      email: e.target.email.value,
      address: {
        city: e.target.city.value,
        line1: e.target.address.value,
        state: e.target.state.value,
        postal_code: e.target.zip.value,
      },
    };
    setProcessingTo(true);
    const cardElement = elements.getElement(CardElement);

    // try {
    const { data: clientSecret } = await axios.post(
      'http://localhost:5000/pay',
      { amount: price * 100 }
    );

    const confirmed = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: billingDetails,
      },
    });
    console.log(confirmed);
    onSuccessfulCheckout();
    if (confirmed.error) {
      setCheckoutError(confirmed.error.message);
      setProcessingTo(false);
      return;
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <CheckoutTitle>Pay with</CheckoutTitle>
        <BillingDetailsFields />
      </div>
      <div>
        <CardElementContainer>
          <CardElement
            hidePostalCode={true}
            // option={cardElementOpts}
            onChange={handleCardDetailsChange}
          />
        </CardElementContainer>
      </div>
      <Rule>
        <h1>Cancellation policy</h1>
        <p>
          Cancel within 24 hour and get a full refund, minus the first night and
          service fee. Learn more
        </p>
        <p>
          Our Extenuating Circumstance policy does not cover travel disruptions
          caused by COVID-19. Learn more
        </p>
        <Notice>
          By selecting the button below, I agree to the Host's House Rules,
          Airbnb's COVID-19 Safety Requirements, and the Guest Refund Policy.
        </Notice>
        {/* <Payment /> */}
      </Rule>
      <div>
        {/* TIP always disable your submit button while processing payments */}
        <PayBtn disabled={isProcessing || !stripe}>
          {isProcessing ? 'Processing...' : `Confirm and Pay`}
        </PayBtn>
      </div>
    </form>
  );
};

const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;

  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;

const CheckoutTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  padding: 1rem 0;
`;
const Rule = styled.div`
  padding-top: 2rem;
  h1 {
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;

    padding: 2rem 0;
  }

  p {
    padding: 2rem 0;
  }
`;

const Notice = styled.div`
  border-top: 1px solid #dddddd;
  font-size: 1rem;
  padding: 1rem 0;
`;

const PayBtn = styled.button`
  width: 200px;
  height: 50px;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 10px;
  background: rgb(244, 44, 85);
`;

export default CheckoutForm;
