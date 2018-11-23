const fetch = window.fetch
var mycharacter = ""
var mytarget = ""
var charhp;
var targhp;

$(document).ready(function() {

    function displaycharacterselect() {
        // initial game setting
        mycharacter = ""
        mytarget = ""
        charhp = 500;
        targhp = 800; 

        $(".gamesec1").empty()
        $(".gamesec2").empty()
        $(".gamesec1").html(`
        <h1 class="header" id="type-h">Choose your character...</h1>
        <img class="responsive-img" id="char-container1" data-char1="c1" data-toggle="tooltip" title="jim" src="img/c1.jpg" alt="c1"> 
        <img class="responsive-img" id="char-container2" data-char2="c2" data-toggle="tooltip" title="bob" src="img/c2.jpg" alt="c2"> 
        <img class="responsive-img" id="char-container3" data-char3="c3" data-toggle="tooltip" title="tim" src="img/c3.jpg" alt="c3"> 
        <img class="responsive-img" id="char-container4" data-char4="c4" data-toggle="tooltip" title="rob" src="img/c4.jpg" alt="c4">   
        `) 
    }
    displaycharacterselect();

    function displaystart (ch) {
        $(".gamesec1").html(`
            <div class="gamesection center-align">
                <div class="gameplayer col s12 m6 l4 center-align">   
                    <img class="responsive-img" id="mychar" data-mychar="mychar" data-toggle="tooltip" title="jim" src="img/${ch}.jpg" alt="${ch}">                    
                </div>
                <div class="gamemiddle col s12 m6 l4 center-align"> 
                    <img class="responsive-img" id="myattack" data-toggle="tooltip" title="Click Me" src="img/attack.jpg" alt="attack">
                </div>
                <div class="gameenemy col s12 m6 l4 center-align"> 
                <img class="responsive-img" id="mytarget" data-mychar="mytarget" data-toggle="tooltip" title="Bahamut" src="img/t1.jpg" alt="Bahamut">                                                                        
                </div>
            </div>       
        `)  

        $(".gamesec2").html(`
            <div class="row set1">
                <li>
                    <h6>Your Character</h6>
                    <img class="responsive-img" id="mycharpanel" data-panel1="mychar" data-toggle="tooltip" title="jim" src="img/${ch}.jpg" alt="${ch}"> 
                    <p>Name: jim</p>
                    <p>HP: ${charhp}</p>
                </li>   
            </div>
            <div class="row set2">
                <li>
                    <h6>Your Target</h6>
                    <img class="responsive-img" id="mytarpanel" data-panel1="mytar" data-toggle="tooltip" title="Bahamut" src="img/t1.jpg" alt="Bahamut"> 
                    <p>Name: Bahamut</p>
                    <p>HP: ${targhp}</p>m
                </li>  
            </div>
            <div class="row set3">                                
                <div class="score-board center-align">
                    <h6>Live Score [HP]</h6>  
                    <div class="player col s12 m6 l6 center-align">   
                        <li>                    
                            <div class="score-box">
                                ${charhp}                              
                            </div>
                            <p>Jim</p>
                        </li>                          
                    </div>
                    <div class="enemy col s12 m6 l6 center-align">                        
                        <li>
                            <div class="score-box">
                                ${targhp}
                            </div>
                            <p>Bahamut</p>
                        </li>                               
                    </div>
                </div>
            </div>  
            <div class="row set4 center-align">
                <img class="responsive-img restart-btn" data-panel1="restart" data-toggle="tooltip" title="restart game" src="img/restart.jpg" alt="restart game"> 
            </div>    
            `)  
    }


    // When on click characters, display start and status panel
    $(document).on("click", "#char-container1", function(event) {
        event.preventDefault();
        mycharacter = $(this).attr("data-char1")
        console.log('Your character: ' +  $(this).attr("data-char1"))         
        displaystart(mycharacter);
    });

    $(document).on("click", "#char-container2", function(event) {
        event.preventDefault();
        mycharacter = $(this).attr("data-char2")
        console.log('Your character: ' +  $(this).attr("data-char2"))         
        displaystart(mycharacter);
    });

    $(document).on("click", "#char-container3", function(event) {
        event.preventDefault();
        mycharacter = $(this).attr("data-char3")
        console.log('Your character: ' +  $(this).attr("data-char3"))         
        displaystart(mycharacter);
    });

    $(document).on("click", "#char-container4", function(event) {
        event.preventDefault();
        mycharacter = $(this).attr("data-char4")
        console.log('Your character: ' +  $(this).attr("data-char4"))         
        displaystart(mycharacter);
    });

    //When on click "Restart" button
    $(document).on("click", ".restart-btn", function(event) {
        event.preventDefault(); 
        displaycharacterselect();
    });

    //When on click "Attack" button

})