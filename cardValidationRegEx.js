/**
 * @title JavaScript Program that validates credit card number
 * @author Marcellus Ifeanyi
 * @notice This is the implementation of Regular Expressions to validate credit cards
 * @dev This code uses JavaScript RegEx to validates MasterCard and Visa Card
 */

// function that validates MasterCard using RegEx
function masterCardValidation(mCardNumber, mCardCvv) {
  /**
   * Explanation of the cardNumberRegex
   *
   * For the masterCard the first number must be 5 ie it starts with 5 and the the second number will be any number between the range of 1 to 5 ie [1-5], then the remaining numbers will be number between the range of 0 to 9 ie [0-9] and also the remaining numbers must be 14 ie {14}. Thus the user must provide a total of 16 digits numbers for the validation to be Successful. The 16 digits number must start with "5".
   */

  let cardNumberRegex = /^(?:5[1-5][0-9]{14})$/;

  // testing the cardNumberRegex
  const masterCardNumber = cardNumberRegex.test(mCardNumber);

  // The card CVV must have a minimum and maximum of 3 digits ie {3} of any number between 0 to 9 ie [0-9]
  let cardCvvRegex = /^[0-9]{3}$/;

  // testing the cardCvvRegex
  const masterCardCvv = cardCvvRegex.test(mCardCvv);

  return { masterCardNumber, masterCardCvv };
}

// calling the function and passing in the arguments ie the 16 digits card Number and 3 digits card CVV, defined as function parameters.
const { masterCardNumber, masterCardCvv } = masterCardValidation(
  5123234345678943,
  1343
);

console.log("\n ********* Validating MasterCard **********\n");

// the output returns "true" if the card Number is 16 digits and starts with "5" and if the card CVV is 3 digits and true if the CVV is exactly 3 digits in the range of [0-9]
console.log({ masterCardNumber, masterCardCvv });

console.log("\n\n");

// functions that validates Visa Card using RegEx
function visaCardValidation(vCardNumber, vCardCvv) {
  /**
   * Explanation of the vCardNumberRegex
   *
   *For the Visa Card the first number must be "4" and followed 12 digits numbers ie {12} within the range of 0 to 9 ie [0-9]. thus the minimum and maximum number after the first digit is 12, {12}. Also the cvv code must have a minimum and maximum of 3 digits number within the range of 0 to 9 ie [0-9]{3}.
   */

  let vCardNumberRegex = /^(?:4[0-9]{12})$/;

  // testing the vCardNumberRegex
  const visaCardNumber = vCardNumberRegex.test(vCardNumber);

  // Cvv code
  let vCardCvvRegex = /^[0-9]{3}$/;

  // testing the vCardCvvRegex
  const visaCardCvv = vCardCvvRegex.test(vCardCvv);

  return { visaCardNumber, visaCardCvv };
}

// calling the function
const { visaCardNumber, visaCardCvv } = visaCardValidation(4234467823461, 2235);

console.log("\n******* Validating VisaCard ************* \n");

// the output is "true" is the card details provided by the user is correct
console.log({ visaCardNumber, visaCardCvv });

console.log("\n");
