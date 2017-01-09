'use strict';

var $ = require('jquery');
var cookie = require('./cookie');
var data = require('../../common/data');

var cookies = cookie.getCookies();

if (cookies) {
  // logged in
  var url = 'http://api.ahcsdev.ibx.com/claimweb/favorites?callback=?';
  data.request(url, cookies, function(favs) {

    if (favs) {
      // has favorites
      $('#my-claimweb-icon').addClass('icon-document-star').css('display','inline');
      var list = '';
      $.each(favs, function(key, fav) {
        list += '<li class="icon-star"><a href="http://ahcsdev.ibx.com/claimweb/' + fav.url + '">' + fav.caption + '</a></li>';
      });
      $('#favs-list').html(list);
    } else {
      // no favorites
      return false;
    }
  });
}

$('#my-claimweb-icon').hover(function() {
  // revealing hidden favorites when hovering
    $('#favs-list').removeClass('hidden');
  },
  function() {
  // hiding favorites when not hovering
    $('#favs-list').addClass('hidden');
});