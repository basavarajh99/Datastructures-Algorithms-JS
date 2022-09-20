function convertToRoman(num) {
  let pair = {
    1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 
    90: 'XC', 50: 'L', 40: 'XL', 10: 'X', 9:'IX', 5: 'V',
    4: 'IV', 1: 'I'
  }

  let ans = "";
  let keys = Object.keys(pair);
  while(num > 0){
    for(let i = keys.length; i >= 0; i--){
      if(num >= keys[i]){
        ans += pair[keys[i]];
        num -= keys[i];
        break;
      }
    }
  }
  // console.log(ans);
  return ans;
}

convertToRoman(798);
