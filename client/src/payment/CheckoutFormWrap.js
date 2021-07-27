import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51IvxI9BWIjn6kM5hPCmtJ9oaFbWGzsl9YeLnZGMlVRelWPm9tJVXr2M2y2L79LJdy8IYAchebI93u431IlKMs4RA00Rr9o3UQv'
);
const CheckoutFormWrap = ({ children }) => {
  return (
    <div>
      <Elements stripe={stripePromise}>{children}</Elements>
    </div>
  );
};

export default CheckoutFormWrap;
