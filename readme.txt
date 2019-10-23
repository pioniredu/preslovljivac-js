a very simple package for changing characters from latin to cyrillic (serbian).  
example:  
``` javascript  
const preslovljivac = require("preslovljivac"); //loading the package  
console.log(preslovljivac.preslovi("text")); /*using it to write "text" to console in cyrillic */  
 ```  
note: a few letters that exist in english latin don't exist in serbian  cyrillic, those are:  
Q (translated as "ку"),  
X (translated as "кс"),  
Y (translated as "иј"),  
W (translated as "в").  
