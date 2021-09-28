$(document).ready(function () {
  $('.sidenav').sidenav({
    edge: "right"
  });
  $('.collapsible').collapsible();
  $('.tooltipped').tooltip();
  $('select').formSelect();
  $('.datepicker').datepicker({
    autoClose: "false",
    yearRange: 3,
    format: "dd mmmm, yyyy",
    showClearBtn: true,
    i18n: {
      done: "Select"
    }
  });
});
