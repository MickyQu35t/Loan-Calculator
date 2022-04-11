// ADD EVENT LISTENER
document.getElementById("form").addEventListener('submit', function(e){
  // SHOW LOADER
  document.getElementById("loader").style.display = "block";
  setTimeout(calculateLoan,4000);
  // HIDE RESULTS
  document.getElementById("results").style.display = "none"
  e.preventDefault();
});

function calculateLoan(e){
  // VARIABLES
  const amountBorrowed = document.getElementById('amount');
  const annualInterest = document.getElementById('interest');
  const yearlyPayments = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');
  const Principal = parseFloat(amountBorrowed.value);
  const Interest = parseFloat(annualInterest.value)/100;
  const Time = parseFloat(yearlyPayments.value)*12;
  monthlyPayment.value = (Principal*Interest)/Time;
  totalPayment.value = (monthlyPayment.value*Time)+Principal;
  totalInterest.value = totalPayment.value-Principal;
  // HIDE LOADER
  document.getElementById('loader').style.display = 'none';
  // SHOW RESULTS
  document.getElementById('results').style.display = 'block';
  
  e.preventDefault();
}




















// VARIABLES REQUIRED









// const monthlyPayment = 
// const totalPayment =
// const totalInterest =