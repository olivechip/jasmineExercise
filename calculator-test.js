describe('monthly-rate tests',function(){
  it('should calculate the monthly rate correctly', function () {
  const values = {
    rate: 6,
    years: 5,
    amount: 20000
  }
  expect(calculateMonthlyPayment(values)).toBe('386.66');
});
it('should calculate the monthly rate correctly', function () {
  const values = {
    rate: 10,
    years: 1,
    amount: 100000
  }
  expect(calculateMonthlyPayment(values)).toBe('8791.59');
});
it('should calculate the monthly rate correctly', function () {
  const values = {
    rate: 2,
    years: 30,
    amount: 700000
  }
  expect(calculateMonthlyPayment(values)).toBe('2587.34');
});
})



describe('round to 2 decimal places',function(){
  it('should return result w/ 2 decimal places', function () {
    const values = {
      rate: 50,
      years: 100,
      amount: 2000
    }
    expect(calculateMonthlyPayment(values)).toBe('83.33');
  });
  it('should return result w/ 2 decimal places', function () {
    const values = {
      rate: 0,
      years: 0,
      amount: 0
    }
    expect(calculateMonthlyPayment(values)).toBe('NaN');
  });
});