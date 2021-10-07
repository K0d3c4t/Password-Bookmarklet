# Password-Bookmarklet
Its pretty self explanatory.
## Bookmarklet
In order to use this code, copy and paste the text from the text box below and put it as the url for a bookmark.
#### Basic Bookmarklet
This is just a normal bookmarklet.
```javascript
javascript:var%20password = prompt("Please enter password");{ if(password =="test"){alert("Access Granted");window.location.href="google.com";}else{if(password!= null)alert("Access Denied");}};
```
#### Usable Anywhere Bookmarklet
This bookmarklet can be executed anywhere, like on new tabs, but will be affected by slow internet and no wifi.
```javascript
https://whoislookup.pro/<script>var password = prompt("Please enter password");%7B if(password =="test")%7Balert("Access Granted");window.location.href="google.com";%7Delse%7Bif(password!= null)alert("Access Denied");%7D%7D;</script>
```
Both bookmarklets preform the same functions.
