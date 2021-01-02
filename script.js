var elSiteMenu = document .querySelector('.site-menu');
var elSiteToggler = document .querySelector('.site-header__toggler');
var elMainContentVideos = document.querySelector('.main-content__videos');


elSiteToggler .addEventListener('click', function() {
  elSiteMenu.classList.toggle('site-menu--open');
});
