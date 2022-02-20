
const send = () => {
  let num = $("#input").val();
  console.log(num);
  let converted = convertToRoman(num);
  console.log(converted);
  $(".result").html(converted);
}

const combinaion = ([a, b, c], num) => {
  if (num < 4) return a.repeat(num);
  if (num === 4) return a + b;
  if (num === 5) return b;
  if (num < 9) return b + a.repeat(num - 5);
  if (num === 9) return a + c;
};

const MAPPING = {
  0: ["I", "V", "X"],
  1: ["X", "L", "C"],
  2: ["C", "D", "M"],
  3: ["M",  "\u2181",  "\u2182"],
}

function convertToRoman(num) {
  let arr = (num + "").split("").reverse();
  let roman = arr.map((el, i) => combinaion(MAPPING[i], +el)).reverse().join("");
  return roman;
}