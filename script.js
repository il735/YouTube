var siteMenu = document .querySelector('.site-menu');
var siteToggler = document .querySelector('.site-header__toggler');


siteToggler .addEventListener('click', function() {
  siteMenu.classList.toggle('site-menu--open')
});