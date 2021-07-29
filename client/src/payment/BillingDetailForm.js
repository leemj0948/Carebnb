import React from 'react';
import FormField from './FormField';
const BillingDetailForm = () => {
  return (
    <>
      <FormField
        name="name"
        label="Name"
        type="text"
        placeholder="Name"
        required
      />
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="Email"
        required
      />
      <FormField
        name="address"
        label="Address"
        type="text"
        placeholder="Address"
        required
      />
      <FormField
        name="city"
        label="City"
        type="text"
        placeholder="City"
        required
      />
      <FormField
        name="state"
        label="State"
        type="text"
        placeholder="State"
        required
      />
      <FormField
        name="zip"
        label="ZIP"
        type="text"
        placeholder="ZIP"
        required
      />
    </>
  );
};

export default BillingDetailForm;
