let text="Strings can be created by wrapping text in single or double quotation(\"\") marks"  ;
console.log(text)

// String Operations

console.log("combine " + "these " + "strings " + "together");

// Excercise 
var word1 = "Billy";
var word2 = "went";
var word3 = "for";
var word4 = "a"; 
var word5 = "walk";
var space = " ";
var period = ".";
var sentence = ( word1 + space + word2 + space + word3 + space + word4 + space + word5 + period)  ;
console.log(sentence)

// Escaping characters \" \" OR \' \'
// In order to indicate that we want to use the " as a quotation mark, we have to escape the character using a backslash (\).
var sentence = "\"Javascript strings are useful for storing text.\"";

console.log(sentence);

// Escaped characters can also be used to add tabs or go to the next line in your strings, with the following:
// clearInterval
// a new line - \n
// a tab - \t

var sentence = "Javascript strings are useful for storing text.\n";
var tabbedSentence = "\tJavascript strings are also useful for manipulating text.";

console.log(sentence + tabbedSentence);

var twosentences = "My name is Vishwnath Jumanal.\nI am from Bijapur"  

// Excercise : Create a string variable with two sentences (named twosentences) and separate the sentences by a new line (\n).
console.log(twosentences)