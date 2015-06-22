// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery.the_final_countdown.1.1.min.js


// https://github.com/marcjeanson/Pomodoroz/commits/master?page=2
$(document).ready(function() {

  startButton.onclick = function() {
    $("#timer").createTimer({
      time_in_seconds: 1500
    });
  };


});
