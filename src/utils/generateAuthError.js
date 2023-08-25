export function generateAuthError(message) {
  switch (message) {
    case 'INVALID_PASSWORD':
      return 'Email or password not correct';
    case 'EMAIL_EXISTS':
      return 'User with this Email already exists';
    case 'EMAIL_NOT_FOUND':
      return 'User with this email was not found';
    default:
      return 'Too many login attempts. Please try later';
  }
}
