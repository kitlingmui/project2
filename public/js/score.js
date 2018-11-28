const fetch = window.fetch
$(document).ready(function() {
    $(".win").text("You Win: " + sessionStorage.getItem('win'));
    $(".lose").text("You Lose: " +sessionStorage.getItem('lose'));
});