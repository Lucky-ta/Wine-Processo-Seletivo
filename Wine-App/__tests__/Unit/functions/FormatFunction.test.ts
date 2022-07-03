/* eslint-disable no-undef */
import formatPrice from '../../../src/services/formatFunctions/formatPrice';

describe('Test Format functions', () => {
  it('Value result must have the follow shape `10,10`', () => {
    const value = 10.100;
    const result = formatPrice(value);

    expect(typeof result).toBe('string');
    expect(result).toBe('10,10');
  });
});
