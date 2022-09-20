function rot13(str) {
  let alpha =['A','B','C','D','E','F','G','H','I','J','K',
  'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
  let alpha13 = ['N','O','P','Q','R','S','T','U','V','W',
  'X','Y','Z','A','B','C','D','E','F','G','H','I','J','K',
  'L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];

  let res = [];

  for(let i = 0; i < str.length; i++)
    for(let j = 0; j < alpha.length; j++)
      if(str[i] === alpha[j])
        res.push(alpha13[j]);

  str = res.join("");
  return str;
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
