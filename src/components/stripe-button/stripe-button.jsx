import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    //stripe wants cents for money

    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HxFNOCwgx36MU89HC0lkE1DYu6ivjCp7Tc2VM5Idnpv18juBcy78twFgpUAjnxS5814mre5zyj73CoNP2XkPUqn00xfnEY0hF"

    //this is what we would pass into our backend.
    const onToken = token => {
        console.log(token)
        alert('Successful Payment!')
    }
    return (
        <StripeCheckout 
            label="Pay Now"
            name="eCommerce App"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;