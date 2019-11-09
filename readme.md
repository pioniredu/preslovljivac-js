A very simple package for changing characters from latin to cyrillic (Serbian) and vice versa, depending on which one is more abundant in text (it changes to the less abundant one).  
  
It only counts through the first 512 characters, so if you have some massive strings it  won't count through the entire string, so it may not be 100% accurate if both are abundant throughout the text. It will convert every character no matter the length of the string,  though.  
  
example:  
``` javascript  
const preslovljivac = require("preslovljivac"); //loading the package  
console.log(preslovljivac.preslovi("text")); /*using it to write "text" to console in cyrillic, the output will be "текст" */  
console.log(preslovljivac.preslovi("текст")); //output will be "text"  
```  
  
./tests/main.js is a test file used with ava. Feel free to configure it as you wish.  
  
Note: A few letters that exist in English latin don't exist in Serbian cyrillic, those are:  
Q (translated as "ку"),  
X (translated as "кс"),  
Y (translated as "иј"),  
W (translated as "в").  
  
you can check it out on npm as well: https://www.npmjs.com/package/preslovljivac  