

// Check if a given string is a palindrome or not.

const isPalindrome = (str) => {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};

console.log(isPalindrome(rotor))

// civic, radar, level, rotor, kayak, madam, and refer