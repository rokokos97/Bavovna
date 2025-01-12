const transformErrorMessage = {
  INVALID_PASSWORD: 'The email address or password is incorrect',
  EMAIL_EXIST: 'User with this email already exists',
  EMAIL_NOT_FOUND_OR_INVALID_PASSWORD: 'The email address or password is incorrect',
  EMAIL_NOT_FOUND: 'No account found with this email',
  SERVER_ERROR: 'Oops... There was a server error with your connection, please try again later',
  RESET_EMAIL_SENT:
    'We have sent you an email with further instructions on how to reset your password',
  INVALID_CURRENT_PASSWORD: 'Current password is incorrect',
  PASSWORD_CHANGED: 'Your password has been changed',
  ERR_NETWORK: 'Oops... There was a server error with your connection, please try again later',
  SERVER_ERROR_MAIL: 'Oops... There was a mail server error, please try again later',
  NEWSLETTER_EMAIL_EXIST: 'You are already subscribed to our updates',
  NEWSLETTER_NOT_EXIST: 'You are not subscribed to our updates',
  CONFIRM_NEWSLETTER_SENT:
    'Thank you for signing up with BAVOVNA newsletter!We have sent you an email with promo-code',
  EMAIL_NOT_VERIFIER: 'Please verify your email',
  USER_UPDATE: 'User info has been updated',
  INVALID_TOKEN: 'Token has already been used',
  CONFIRM_NEWSLETTER_DELETED: 'Your subscription has been canceled',
};
export default transformErrorMessage;
