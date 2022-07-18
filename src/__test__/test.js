import healthIndicator from '../js/healthIndicator';

test('health indicator1', () => {
  const person1 = {
    name: 'Маг',
    health: 90,
  };
  const result1 = healthIndicator(person1);
  expect(result1).toBe('healthy');
});

test('health indicator2', () => {
  const person2 = {
    name: 'Демон',
    health: 45,
  };

  const result2 = healthIndicator(person2);
  expect(result2).toBe('wounded');
});

test('health indicator3', () => {
  const person3 = {
    name: 'Зомби',
    health: 10,
  };

  const result3 = healthIndicator(person3);
  expect(result3).toBe('critical');
});
