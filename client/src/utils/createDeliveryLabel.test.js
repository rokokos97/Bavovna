import createDeliveryLabel from './createDeliveryLabel';

describe('createDeliveryLabel', () => {
  it('should return correct label when all fields are provided', () => {
    const address = {
      city: { label: 'Kyiv' },
      warehouse: { label: 'Warehouse 1' },
      street: 'Main Street',
      houseNumber: '123',
      flatNumber: '45',
      intDeliveryAddress: 'International Address Example',
    };
    const expectedLabel =
      'Kyiv, Warehouse 1, str.Main Street 123, apt.45International Address Example';
    expect(createDeliveryLabel(address)).toBe(expectedLabel);
  });

  it('should handle missing fields correctly', () => {
    const address = {
      city: { label: 'Kyiv' },
      street: 'Main Street',
      houseNumber: '123',
    };
    const expectedLabel = 'Kyiv, str.Main Street 123';
    expect(createDeliveryLabel(address)).toBe(expectedLabel);
  });

  it('should return an empty string for an empty object', () => {
    expect(createDeliveryLabel({})).toBe('');
  });
});
