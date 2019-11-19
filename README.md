A very simple package for changing characters from latin to cyrillic (Serbian) and vice versa, depending on which one is more abundant in text (it changes to the less abundant one).  
  
It only counts through the first 512 characters, so if you have some massive strings it  won't count through the entire string, so it may not be 100% accurate if both are abundant throughout the text. It will convert every character no matter the length of the string,  though.  
  
example:  
``` javascript  
const preslovljivac = require("preslovljivac"); //loading the package  
console.log(preslovljivac.preslovi("text")); /*using it to write "text" to console in cyrillic, the output will be "текст" */  
console.log(preslovljivac.preslovi("текст")); //output will be "text"  
```  
  
You can also give it a second parameter, in case you want something to remain unchanged.  
For example, i want 'Microsoft' and 'Google' to remain the same:
``` javascript  
const preslovljivac = require("preslovljivac");  
console.log(preslovljivac.preslovi("some text, Google Microsoft", "Google, Microsoft"));  
//the expected output is "соме текст, Google Microsoft"  
```  
Do note though that you need to write it as a string, with each entry divided by commas (,).  
  
./tests/main.js is a test file used with ava. Feel free to configure it as you wish.  
  
Note: A few letters that exist in English latin don't exist in Serbian cyrillic, those are:  
Q (translated as "ку"),  
X (translated as "кс"),  
Y (translated as "иј"),  
W (translated as "в").  
  
Here's a link to the npm page: https://www.npmjs.com/package/preslovljivac  
If you have any suggestions, feel free to send them to me. I'm always open for improvement.  
