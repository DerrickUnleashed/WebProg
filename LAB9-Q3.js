function bmi() {
  var gender = document.getElementById("genderI").value;
  var pounds = parseFloat(document.getElementById("poundsI").value);
  var feet = parseFloat(document.getElementById("feetI").value);
  var inches = parseFloat(document.getElementById("inchesI").value);
  var totalInches = feet * 12 + inches;
  if (isNaN(pounds) || isNaN(feet) || isNaN(inches) || totalInches <= 0) {
    alert("Error: Please enter valid numeric values for weight and height.");
    poundsI.value = "";
    feetI.value = "";
    inchesI.value = "";
    return;
  } else {
    var bmival = (pounds * 703) / (totalInches * totalInches);
    bmival = bmival.toFixed(2);
    document.getElementById("res").value = bmival;
    if (gender == "male") {
      if (bmival <= 17.5) {
        alert("BMI Status : Anorexia");
      } else if (bmival <= 20.7) {
        alert("BMI Status : Underweight");
      } else if (bmival <= 26.4) {
        alert("BMI Status : Ideal Weight");
      } else if (bmival <= 27.8) {
        alert("BMI Status : Marginally overweight range");
      } else if (bmival <= 31.1) {
        alert("BMI Status : Overweight range");
      } else {
        alert("BMI Status : Very overweight or Obese range");
      }
    } else {
      if (bmival <= 17.5) {
        alert("BMI Status : Anorexia");
      } else if (bmival <= 19.1) {
        alert("BMI Status : Underweight");
      } else if (bmival <= 25.8) {
        alert("BMI Status : Ideal Weight");
      } else if (bmival <= 27.3) {
        alert("BMI Status : Marginally overweight range");
      } else if (bmival <= 32.3) {
        alert("BMI Status : Overweight range");
      } else {
        alert("BMI Status : Very overweight or Obese range");
      }
    }
  }
}
