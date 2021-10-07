# Password-Bookmarklet
Its pretty self explanatory. WIP RIGHT NOW
## Bookmarklet
In order to use this code, copy and paste the text from the text box below and put it as the url for a bookmark.
#### Basic Bookmarklet
```javascript
javascript:var%20password = prompt("Please enter password");{ if(password =="test"){alert("Access Granted");window.location.href="google.com";}else{if(password!= null)alert("Access Denied");}};
```
#### Usable Anywhere Bookmarklet
```javascript
https://google-gruyere.appspot.com/123/<script>var%20password = prompt("Please enter password");{ if(password =="test"){alert("Access Granted");window.location.href="google.com";}else{if(password!= null)alert("Access Denied");}};</script>
```
