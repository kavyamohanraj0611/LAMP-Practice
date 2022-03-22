function functDisp(sum1) {
    console.log(sum1);
  }
  
  function functCalc(num1, num2, functDisp) {
    let sum1 = num1 + num2;
    functDisp(sum1);
  }
functCalc(15, 25, functDisp);