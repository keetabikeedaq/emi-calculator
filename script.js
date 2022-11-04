function LoanCalculator() {
    let inputAmount = document.getElementById('princi');
    let inputYear = document.getElementById('yR');
    let inputInterest = document.getElementById('iR');
  
    let inputAmountVal = +inputAmount.value;
    let inputYearVal = +inputYear.value;
    let inputInterestVal = +inputInterest.value;
  
    let yearToMonth = +(inputYearVal * 12);
    let interestToMonth = +(inputInterestVal / 12 / 100);
    let interestNumerator = (1 + interestToMonth) ** yearToMonth;
    let interestDenominator = (1 + interestToMonth) ** yearToMonth - 1;
  
    let EMIcalculator =
      (inputAmountVal * interestToMonth * interestNumerator) /
      interestDenominator;
  
alert(`Your monthly EMI is Rs. ${EMIcalculator.toFixed(2)}\n\
and your total amount payable is 
Rs.${(EMIcalculator * yearToMonth).toFixed(2)}`);
  }