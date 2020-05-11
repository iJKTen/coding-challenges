/*Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

/*
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
*/

// return masked string
function maskify(cc) {

  // If length is less than or equal to 4 then return that string
  // Get the index of the string minus 4 and then create a '#' from 0 to end index.
  // You need a loop to create a string of '#' until the above index reaches 0.
  // Then remove the last 4 characters from the string and append it to the string created above and return it.

  if(cc.length <= 4)
  {
    return cc;
  }
  else
  {
    let endIndex = cc.length - 4;
    let str = '';
    while(endIndex > 0)
    {
      str += '#';
      endIndex--;
    }
    return str + cc.substr(cc.length - 4, 4);
  }
}

// https://www.codewars.com/kata/5412509bd436bd33920011bc/javascript
