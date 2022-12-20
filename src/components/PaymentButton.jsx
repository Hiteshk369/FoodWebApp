import React from 'react'
import GooglePayButton from '@google-pay/button-react';

const PaymentButton = ({total}) => {

    const new_total = total+40;
    const FinalPrice = String(new_total);
  return (
 <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Hitesh Kumar',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: FinalPrice,
      currencyCode: 'INR',
      countryCode: 'IN',
    },
    shippingAddressRequired:true,
    callbackIntents:['PAYMENT_AUTHORIZATION']
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
  onPaymentAuthorized={paymentData => {
    console.log(paymentData);
    return {transactionState : 'SUCCESS'}
  }}
  existingPaymentMethodRequired='false'
  buttonColor='black'
  buttonType='buy'
    />
  )
}

export default PaymentButton