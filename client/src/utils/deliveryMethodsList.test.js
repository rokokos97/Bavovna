import deliveryMethodsList from './deliveryMethodsList';

describe('deliveryMethodsList', () => {
  it('should contain correct delivery method entries', () => {
    expect(deliveryMethodsList).toHaveProperty('1');
    expect(deliveryMethodsList).toHaveProperty('2');
    // Additional checks for the structure can be added here
  });

  it('should have correct labels and prices for method 1', () => {
    const method1 = deliveryMethodsList['1'];
    expect(method1[1].label).toBe('Nova post delivery to the post office');
    expect(method1[1].price).toBe(2);
    // Add checks for other methods within method 1
  });

  it('should have correct labels and prices for method 2', () => {
    const method2Labels = [
      'Nova post delivery to the post office',
      'Nova post delivery to the address',
      'International delivery',
    ];
    method2Labels.forEach((label) => {
      expect(deliveryMethodsList['2']).toHaveProperty(label);
      expect(deliveryMethodsList['2'][label].label).toBe(label);
      // Add checks for price consistency
    });
  });

  // Additional tests to validate the content of each delivery method
});
