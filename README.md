A very simple package for changing characters from latin to cyrillic (Serbian) and vice versa, depending on which one is more abundant in text (it changes to the less abundant one).  
  
example:  
``` javascript  
import preslovi from 'preslovljivac'; //loading the package  
console.log(preslovi("text",'','n')); /*using it to write "text" to console in cyrillic, the output will be "текст" */  
console.log(preslovi("текст",'','Cyrl')); //output will be "text"  
```  
  
You can also give it a second parameter, in case you want something to remain unchanged.  
For example, i want 'Microsoft' and 'Google' to remain the same:
``` javascript  
import preslovi from 'preslovljivac';
console.log(preslovi("some text, Google Microsoft", "Google, Microsoft",'a'));  
//the expected output is "соме текст, Google Microsoft"  
```  
Do note though that you need to write it as a string, with each entry divided by commas (,).  
  
You can also pass a third parameter.  
If the third parameter is a 'falsy' value, it will use the auto-detector that i built: https://www.npmjs.com/package/detektor.  
It only counts through the first 512 characters, so if you have some massive strings it  won't count through the entire string, so it may not be 100% accurate if both are abundant throughout the text. It will convert every character no matter the length of the string,  though.  
If you want to avoid this, you can give it a parameter 'Cyrl' for cyrillic, a non-empty string for latin.  
For example:  
``` javascript  
import preslovi from 'preslovljivac';
console.log(preslovi("text in latin",'','t')); //i passed t as the third parameter so that it isn't a 'falsy' value  
//expected output is "текст ин латин"  
console.log(preslovi("текст на ћирилици",'','Cyrl')); /*i passed 'Cyrl' as the third parameter, so now it will treat it as cyrillic text and the output will be "tekst na ćirilici"*/  
//alternatively you can just let it use the auto-detect  
console.log(preslovi("text text and more text")); //the output here will be "текст текст анд море текст"  
```  
  
./tests/main.js is a test file used with ava. Feel free to configure it as you wish.  
  
Note: A few letters that exist in English latin don't exist in Serbian cyrillic, those are:  
Q (translated as "ку"),  
X (translated as "кс"),  
Y (translated as "иј"),  
W (translated as "в").  
  
Here's a link to the npm page: https://www.npmjs.com/package/preslovljivac  
If you have any suggestions, feel free to send them to me. I'm always open for improvement.  