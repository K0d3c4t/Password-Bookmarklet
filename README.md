# Password-Bookmarklet
Its pretty self explanatory.
## Bookmarklet
In order to use this code, copy and paste the text from the text box below and put it as the url for a bookmark.
#### Basic Bookmarklet
```javascript
javascript:var%20password = prompt("Please enter password");{ if(password =="test"){alert("Access Granted");window.location.href="google.com";}else{if(password!= null)alert("Access Denied");}};
```
#### Usable Anywhere Bookmarklet
```javascript
https://whoislookup.pro/<script>var password = prompt("Please enter password");%7B if(password =="test")%7Balert("Access Granted");window.location.href="google.com";%7Delse%7Bif(password!= null)alert("Access Denied");%7D%7D;</script>
```
