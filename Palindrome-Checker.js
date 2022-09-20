function palindrome(str) {
  str = str.replace(/\W+|\s+|_+/ig, "").toLowerCase();
  let copy = str.split("").reverse().join("");
  //console.log(copy === str);
  return str === copy;
}

palindrome("_eye");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("My age is 0, 0 si ega ym.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four")
