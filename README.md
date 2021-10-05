# preslovljivac-js

A simple transliteration library for Serbian language, written in Javascript and using ES Modules.

[![Donate via PayPal](https://img.shields.io/badge/Donate-via_PayPal-2997d8.svg?labelColor=253b80)](https://paypal.me/zamphyr)
[![Donate via OpenCollective](https://img.shields.io/badge/Donate-via_OpenCollective-3884ff.svg)](https://opencollective.com/pionir)

## Usage

``` javascript  
import preslovi from '@pionir/preslovljivac'; //loading the package  
console.log(preslovi("text",'','n')); /*using it to write "text" to console in cyrillic, the output will be "текст" */  
console.log(preslovi("текст",'','Cyrl')); //output will be "text"  
```  
  
You can also give it a second parameter, in case you want something to remain unchanged.  
For example, I want 'Microsoft' and 'Google' to remain the same:
``` javascript  
import preslovi from '@pionir/preslovljivac';
console.log(preslovi("neki tekst, Google Microsoft", "Google, Microsoft",'a'));  
//the expected output is "неки текст, Google Microsoft"  
```  
Do note though that you need to write it as a string, with each entry divided by commas (,).  
  
You can also pass a third parameter.  
If the third parameter is a 'falsy' value, it will use the auto-detector that i built: https://www.npmjs.com/package/@pionir/detektor-js.  
It only counts through the first 512 characters, so if you have some massive strings it  won't count through the entire string, so it may not be 100% accurate if both are abundant throughout the text. It will convert every character no matter the length of the string,  though.  
If you want to avoid this, you can give it a parameter 'Cyrl' for cyrillic, a non-empty string for latin.  
For example:  
``` javascript  
import preslovi from '@pionir/preslovljivac';
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
   
If you have any suggestions, feel free to send them to me. I'm always open for improvement.  

## Donate
This projects has been developed as part of the Pionir Free School. To help sustain the school we ask for your donation or sponsorship if you find this project useful. By donating or sponsoring you will be funding continuous development of this and other projects at Pionir.

[![Donate via PayPal](https://img.shields.io/badge/Donate-via_PayPal-2997d8.svg?labelColor=253b80)](https://paypal.me/zamphyr)
[![Donate via OpenCollective](https://img.shields.io/badge/Donate-via_OpenCollective-3884ff.svg)](https://opencollective.com/pionir)

## Backers and sponsors
![](https://opencollective.com/pionir/sponsors.svg?avatarHeight=32&button=false) ![](https://opencollective.com/pionir/backers.svg?avatarHeight=32&button=false)
