import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import GooglePayButton from "@google-pay/button-react";

const PaymentButton = ({total}) => {

  const navigate = useNavigate();
  const finalPrice = String(total + 40)

  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: finalPrice,
      currencyCode: "INR",
      countryCode: "IN"
    },
    shippingAddressRequired:true,
    callbackIntents:['PAYMENT_AUTHORIZATION']
  };

  function handleLoadPaymentData(paymentData) {
    //console.log("load payment data", paymentData);
    navigate('/confirmation')
  }

  function handlePaymentAuthorized(paymentData) {
    // console.log(paymentData);
    return {transactionState : 'SUCCESS'}
  }

  return (
    <GooglePayButton
        paymentRequest={paymentRequest}
        onLoadPaymentData={handleLoadPaymentData}
        onPaymentAuthorized={handlePaymentAuthorized}
    />
  )
}

export default PaymentButton