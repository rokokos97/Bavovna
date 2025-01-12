import React from 'react';
import PropTypes from 'prop-types';

const FondyCheckout = ({ amount, currency, orderId }) => {
  const handlePayment = () => {
    // Ініціалізуємо Fondy Checkout
    const fondy = new window.Fondy();
    fondy.checkout({
      options: {
        merchant_id: process.env.REACT_APP_FONDY_MERCHANT_ID, // ID мерчанта з .env
        amount: amount,
        currency: currency || 'UAH', // Валюта (UAH, USD тощо)
        order_id: orderId, // Унікальний ідентифікатор замовлення
        response_url: `${window.location.origin}/orderSuccess`, // URL для результату
      },
      onApprove: (data) => {
        console.log('Платіж успішно виконано:', data);
        alert('Оплата успішна!');
      },
      onError: (error) => {
        console.error('Помилка при оплаті:', error);
        alert('Щось пішло не так під час оплати.');
      },
    });
  };

  return (
    <button onClick={handlePayment} className="fondy-payment-button">
      Оплатити через Fondy
    </button>
  );
};

FondyCheckout.PropTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string,
  orderId: PropTypes.string.isRequired,
};

export default FondyCheckout;
