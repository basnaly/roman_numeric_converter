
$(function(){
  $('form').submit(false); // disable form submit
});

const onClickSize = () => {
  let resultText = calculateSize();
  $("#result-size").html(resultText).addClass("animate__animated animate__backInRight");
  $("#size").val("");
}

const calculateSize = () => {
  let unitFromSize = $("#unit-from-size").val();
  let unitToSize = $("#unit-to-size").val();
  let size = $("#size").val();
  let resultSize = 0;
  
  if (!validateArg(size, "#result-size")){ 
    return; // if no size do not continue
  }

  if (unitFromSize === unitToSize) {
    resultSize = size;
  }

  else if (unitFromSize === "mm" && unitToSize === "cm"){
    resultSize = size / 10;
  }
    
  else if (unitFromSize === "cm" && unitToSize === "mm"){
    resultSize = size * 10;
  }

  else if (unitFromSize === "mm" && unitToSize === "in"){
    resultSize = +(size * 0.0393701).toFixed(2);
  }

  else if (unitFromSize === "in" && unitToSize === "mm"){
    resultSize = +(size * 25.4).toFixed(2);
  }

  else if (unitFromSize === "cm" && unitToSize === "in"){
    resultSize = +(size * 0.393701).toFixed(2);
  }

  else if (unitFromSize === "in" && unitToSize === "cm"){
    resultSize = +(size * 2.54).toFixed(2);
  }

  return `${size} ${unitFromSize} = ${resultSize} ${unitToSize}`;

}
  
const validateArg = (arg, id) => {  
  if (!arg) { // not be empty
    alert ("Please fill the cell!");
    $(id).removeClass("animate__animated animate__backOutRight").html("The result");
    return false;
  }
  return true;
}




const onClickWeight = () => {
  let resultText = calculateWeight();
  $("#result-weight").html(resultText).addClass("animate__animated animate__backInRight");
  $("#weight").val("");
}

const calculateWeight = () => {
  let unitFromWeight = $("#unit-from-weight").val();
  let unitToWeight = $("#unit-to-weight").val();
  let weight = $("#weight").val();
  let resultWeight = 0;
  
  if (!validateArg(weight, "#result-weight")){
    return;
  }

  if (unitFromWeight === unitToWeight) {
    resultWeight = weight;
  }

  else if (unitFromWeight === "kg" && unitToWeight === "pound"){
    resultWeight = +(weight * 2.20462).toFixed(2);
  }
    
  else if (unitFromWeight === "pound" && unitToWeight === "kg"){
    resultWeight = +(weight * 0.453592).toFixed(2);
  }

  else if (unitFromWeight === "kg" && unitToWeight === "ounce"){
    resultWeight = +(weight * 35.274).toFixed(2);
  }

  else if (unitFromWeight === "ounce" && unitToWeight === "kg"){
    resultWeight = +(weight * 0.0283495).toFixed(2);
  }

  else if (unitFromWeight === "pound" && unitToWeight === "ounce"){
    resultWeight = +(weight * 16).toFixed(2);
  }

  else if (unitFromWeight === "ounce" && unitToWeight === "pound"){
    resultWeight = +(weight * 0.0625).toFixed(2);
  }

  return `${weight} ${unitFromWeight} = ${resultWeight} ${unitToWeight}`;
  
}




const onClickTemp = () => {
  let resultText = calculateTemp();
  $("#result-temp").html(resultText).addClass("animate__animated animate__backInRight");
  $("#temp").val("");
}

const calculateTemp = () => {
  let unitFromTemp = $("#unit-from-temp").val();
  let unitToTemp = $("#unit-to-temp").val();
  let temp = $("#temp").val();
  let resultTemp = 0;
  
  if (!validateArg(temp, "#result-temp")){
    return;
  }

  if (unitFromTemp === unitToTemp) {
    resultTemp = temp;
  }

  else if (unitFromTemp === "°C" && unitToTemp === "°F"){
    resultTemp = +((temp * 9/5) + 32).toFixed(2);
  }
    
  else if (unitFromTemp === "°F" && unitToTemp === "°C"){
    resultTemp = +((temp - 32) * 5/9).toFixed(2);
  }

  return `${temp} ${unitFromTemp} = ${resultTemp} ${unitToTemp}`;
  
}
