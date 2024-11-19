// Write a function that returns the reverse of a string

let a = "Javascript";
// let i = length.a;

const reverseString = (String) => {
  if(typeof String !== 'string'){
    throw new Error("Only Strings are allowed")
  }
  let reversed_string = "";
  for (let i = String.length - 1; i >= 0; i--) {
    reversed_string += String[i];
  // console.log(reversed_string);
  // console.log(String.length);
  }
  return reversed_string
};
let result = reverseString(a);
console.log(result)
console.log(reverseString("aftab"))
console.log(reverseString("12121111"))
// console.log(reverseString(12121111)) // not a string so the no output and hence the if statement will be executed

// -------------------------------------------------------------------

//Using 2nd method to reverse a string

const reverseString2 = (a)=> {
  if(typeof a !== 'string'){
    throw new Error("Only Strings are allowed")
  }
  let split_input = a.split("")
  let reve_list = split_input.reverse("")
  let rev_str = reve_list.join("")
  console.log(split_input)
  console.log(reve_list)
  console.log(rev_str)
}
reverseString2("AFTAB")
// reverseString2(12345)

