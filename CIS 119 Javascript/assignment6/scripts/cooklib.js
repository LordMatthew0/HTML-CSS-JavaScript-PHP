/*
    cooklib.js
    Dave Klick
    CIS 119
    2014-03-16
    
    Simple cookie handling library
*/

function saveCookie(name, value, daysUntilExpire) {
   if (!name || !value) return;
   var now = new Date();
   var millisecondsPerDay = 24 * 60 * 60 * 1000;
   var expDate = new Date(now.getTime()
      + daysUntilExpire * millisecondsPerDay);
   document.cookie = name + "=" + escape(value)
      + ";expires=" + expDate.toGMTString()
      + ";path=/";
}

function readCookie(name) {
   if (!name) return null;
   var cook = document.cookie.split('; ');
   for (var i=0; i<cook.length; i++) {
      if (name == cook[i].split('=')[0]) {
         return unescape(cook[i].split('=')[1]);
      }
   }
   return null;
}

function deleteCookie(name) {
    if (!name) return;
    var now = new Date();
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    // set expiry date to arbitrary date in past
    var expDate = new Date(now.getTime()
        - 7 *  millisecondsPerDay);
    document.cookie = name + "=;expires="
        + expDate.toGMTString() + ";path=/";
}

function deleteAllCookies() {
    var now = new Date();
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    // set expiry date to arbitrary date in past
    var expDate = new Date(now.getTime()
        - 7 *  millisecondsPerDay);
    var cook = document.cookie.split('; ');
    for (var i=0; i<cook.length; i++) {
        var cname = cook[i].split('=')[0];
        // var cval = cook[i].split('=')[1];
        document.cookie = cname + "=;expires="
            + expDate.toGMTString() + ";path=/";
    }
}
