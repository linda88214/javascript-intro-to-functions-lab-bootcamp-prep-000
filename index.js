//JavaScript method .toUpperCase and .toLowerCase is used to change the string to be all caps or all lowercase

function shout(string) {
  return string.toUpperCase()
}


function whisper(string) {
  return string.toLowerCase()
}


function logShout(string) {
  console.log(string.toUpperCase())
}


function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  } else (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}

// we are returning the true condition
// if the first if statement is true, then it will return "I can't hear you!"
// if the first if statement is false and the second statement is true, it will return "YES INDEED"
// if else statement will return the string which is true
