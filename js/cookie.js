'use strict';

function _cookieParse(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) ===0) {
      return c.substring(name.length,c.length);
    }
  }
  return '';
}

exports.getCookies = function() {
  var cookie = {
    userName: false,
    admin: 0
  };
  cookie.userName = _cookieParse('MyClaimWebUserName');

  if (!cookie.userName) {
    return false;     // not logged in
  } else {
    cookie.admin = _cookieParse('MyClaimWebSecurity');
    return cookie;
  }
};