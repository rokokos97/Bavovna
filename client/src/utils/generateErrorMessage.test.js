import transformErrorMessage from './generateErrorMessage';

describe('Error Message Transformations', () => {
  it('should correctly map INVALID_PASSWORD to its message', () => {
    expect(transformErrorMessage['INVALID_PASSWORD']).toBe('The email address or password is incorrect.');
  });

  it('should correctly map EMAIL_EXIST to its message', () => {
    expect(transformErrorMessage['EMAIL_EXIST']).toBe('User with this Email already exists.');
  });

  // Test other error codes similarly

  it('should include all expected error codes', () => {
    const expectedErrorCodes = [
      'INVALID_PASSWORD',
      'EMAIL_EXIST',
      'EMAIL_NOT_FOUND_OR_INVALID_PASSWORD',
      'EMAIL_NOT_FOUND',
      'SERVER_ERROR',
      'RESET_EMAIL_SENT',
      'INVALID_CURRENT_PASSWORD',
      'PASSWORD_CHANGED',
      'ERR_NETWORK',
    ];
    expectedErrorCodes.forEach((code) => {
      expect(transformErrorMessage).toHaveProperty(code);
    });
  });
});
