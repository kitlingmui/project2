const fetch = window.fetch
var mycharacter = ""
var mytarget = ""

$(document).ready(function() {

    function updategamedisplay() {
        if ((mycharacter === "") && (mytarget === ""))
        {
            $(".gamescreen").empty()
            $(".gamescreen").html(`
            <h1 class="header" id="type-h">Choose your character...</h1>
            <img id="char-container1" data-char1="c1" data-toggle="tooltip" title="jim" src="img/c1.jpg" alt="c1"> 
            <img id="char-container2" data-char2="c2" data-toggle="tooltip" title="bob" src="img/c2.jpg" alt="c2"> 
            <img id="char-container3" data-char3="c3" data-toggle="tooltip" title="tim" src="img/c3.jpg" alt="c3"> 
            <img id="char-container4" data-char4="c4" data-toggle="tooltip" title="rob" src="img/c4.jpg" alt="c4">   
            `) 
        }
        else if ((mycharacter !== "") && (mytarget === ""))
        {
            $(".gamescreen").empty()
            $(".gamescreen").html(`
            <h1 class="header" id="type-h">Choose your target...</h1>
            <img id="char-target1" data-char1="t1" data-toggle="tooltip" title="bat" src="img/t1.jpg" alt="t1"> 
            <img id="char-target2" data-char1="t2" data-toggle="tooltip" title="octopus" src="img/t2.jpg" alt="t2"> 
            <img id="char-target3" data-char1="t3" data-toggle="tooltip" title="dragon" src="img/t3.jpg" alt="t3">   
            `) 
        }
  
    }

    updategamedisplay();

    function updatepaneldisplay(ch) {
        $("#game-panel").html(`
            <div class="row">
                <div class="col s12 m6 l3 center-align">
                    <p>Character</p>
                    <img id="char-panel1" data-panel1="c1" data-toggle="tooltip" title="jim" src="img/${ch}.jpg" alt="${ch}"> 
                </div>
                <div class="col s12 m6 l3 center-align">
                    <p>Target</p>
                    <img id="char-panel1" data-panel1="c1" data-toggle="tooltip" title="jim" src="img/${ch}.jpg" alt="${ch}"> 
                </div>
                <div class="col s12 m6 l3 center-align">
                    <p>Weapon</p> 
                    <img id="char-panel1" data-panel1="c1" data-toggle="tooltip" title="jim" src="img/${ch}.jpg" alt="${ch}">
                </div>
                <div class="col s12 m6 l3 center-align">
                    <p>Health Points</p>
                    <img id="char-panel1" data-panel1="c1" data-toggle="tooltip" title="jim" src="img/${ch}.jpg" alt="${ch}">
                </div>
            </div>
            `)  
    }

    // When user clicks icon
    $("#char-container1").on("click", function(event) {
        event.preventDefault();
        if  (mycharacter === "") {
            mycharacter = $(this).attr("data-char1")
            console.log('Your character: ' +  $(this).attr("data-char1"))         
            updategamedisplay();
            updatepaneldisplay(mycharacter);
        }
    });

    // When user clicks icon
    $("#char-container2").on("click", function(event) {
        event.preventDefault();
        if  (mycharacter === "") {
            mycharacter = $(this).attr("data-char2")
            console.log('Your character: ' +  $(this).attr("data-char2"))         
            updategamedisplay();
            updatepaneldisplay(mycharacter);
        }
    });

    // When user clicks icon
    $("#char-container3").on("click", function(event) {
        event.preventDefault();
        if  (mycharacter === "") {
            mycharacter = $(this).attr("data-char3")
            console.log('Your character: ' +  $(this).attr("data-char3"))         
            updategamedisplay();
            updatepaneldisplay(mycharacter);
        }
    });

    // When user clicks icon
    $("#char-container4").on("click", function(event) {
        event.preventDefault();
        if  (mycharacter === "") {
            mycharacter = $(this).attr("data-char4")
            console.log('Your character: ' +  $(this).attr("data-char4"))         
            updategamedisplay();
            updatepaneldisplay(mycharacter);
        }
    });

  

})