window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount = document.querySelector('#loan-amount');
  const loanYears = document.querySelector('#loan-years');
  const loanRate = document.querySelector('#loan-rate');
  const defaultInputs = {amount:500000, years:30, rate:4};

  loanAmount.value = defaultInputs.amount;
  loanYears.value = defaultInputs.years;
  loanRate.value = defaultInputs.rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const updatedValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(updatedValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = values.rate / 100 / 12;
  const totalPayments = values.years * 12;
  const calculated = ((values.amount * monthlyRate) / (1-(1+monthlyRate)**(-totalPayments)));
  const rounded = calculated.toFixed(2);
  
  return `${rounded}`;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.querySelector('#monthly-payment');
  monthlyPayment.innerText = '$'+ monthly;
}
