const fetch = window.fetch
const bo = 1 // assume we only have 1 boss
var myCharacter = ""  
var currCharacter
var currTarget


$(document).ready(function() {

    function displayCharacterSelect() {
        // initial game setting
        myCharacter = ""

        $(".gamesec1").empty()
        $(".gamesec2").empty()
        $(".gamesec1").html(`
        <h1 class="header" id="type-h">Choose your character...</h1>
        <img class="responsive-img" id="char-container1" data-char1="1" data-toggle="tooltip" title="Cloud" src="img/c1.jpg" alt="c1"> 
        <img class="responsive-img" id="char-container2" data-char2="2" data-toggle="tooltip" title="Bob" src="img/c2.jpg" alt="c2"> 
        <img class="responsive-img" id="char-container3" data-char3="3" data-toggle="tooltip" title="Tim" src="img/c3.jpg" alt="c3"> 
        <img class="responsive-img" id="char-container4" data-char4="4" data-toggle="tooltip" title="Rob" src="img/c4.jpg" alt="c4">   
        `) 
    }

    displayCharacterSelect();

    // Display Current Game 
    function displayStart (charData, targData) {
        currCharacter = charData
        currTarget = targData

        $(".gamesec1").html(`
            <div class="gamesection center-align">
                <div class="gameplayer col s12 m6 l4 center-align">   
                    <img class="responsive-img" id="mychar" data-mychar="mychar" data-toggle="tooltip" title="${currCharacter.name}" src="img/c${currCharacter.id}.jpg" alt="c${currCharacter.id}">                    
                </div>
                <div class="gamemiddle col s12 m6 l4 center-align"> 
                    <img class="responsive-img" id="myattack" data-toggle="tooltip" title="Click Me" src="img/attack.jpg" alt="attack">
                </div>
                <div class="gameenemy col s12 m6 l4 center-align"> 
                    <img class="responsive-img" id="mytarget" data-mychar="mytarget" data-toggle="tooltip" title="${currTarget.name}" src="img/t${currTarget.id}.jpg" alt="t${currTarget.id}">                                                                        
                </div>
            </div>       
        `)  

        $(".gamesec2").html(`
            <div class="row set1">
                <li>
                    <h6>Your Character</h6>
                    <img class="responsive-img" id="mycharpanel" data-panel1="mychar" data-toggle="tooltip" title="${currCharacter.name}" src="img/c${currCharacter.id}.jpg" alt="c${currCharacter.id}"> 
                    <p>Name: ${currCharacter.name}</p>
                    <p>HP: ${currCharacter.health}</p>
                </li>   
            </div>
            <div class="row set2">
                <li>
                    <h6>Your Target</h6>
                    <img class="responsive-img" id="mytarpanel" data-panel1="mytar" data-toggle="tooltip" title="${currTarget.name}" src="img/t${currTarget.id}.jpg" alt="t${currTarget.id}"> 
                    <p>Name: ${currTarget.name}</p>
                    <p>HP: ${currTarget.health}</p>
                </li>  
            </div>
            <div class="row set3">                                
                <div class="score-board center-align">
                    <h6>Live Score [HP]</h6>  
                    <div class="player col s12 m6 l6 center-align">   
                        <li>                    
                            <div class="score-box">
                                ${currCharacter.health}                              
                            </div>
                            <p>${currCharacter.name}</p>
                        </li>                          
                    </div>
                    <div class="enemy col s12 m6 l6 center-align">                        
                        <li>
                            <div class="score-box">
                                ${currTarget.health}
                            </div>
                            <p>${currTarget.name}</p>
                        </li>                               
                    </div>
                </div>
            </div>  
            <div class="row set4 center-align">
                <img class="responsive-img restart-btn" data-panel1="restart" data-toggle="tooltip" title="restart game" src="img/restart.jpg" alt="restart game"> 
            </div>   
            <div class="row set5 center-align">
                <a href="/"><img class="responsive-img exitgame-btn" data-panel1="exitgame" data-toggle="tooltip" title="exit game" src="img/exit.jpg" alt="exit game"></a>
            </div>  
            `)  
    }

    // Display Gameover 
    function displayGameover (charData, targData, status) {
        currCharacter = charData
        currTarget = targData

        $(".gamesec1").html(`
            <div class="gamesection center-align">
                <div class="gameplayer col s12 m6 l4 center-align">   
                    <img class="responsive-img" id="mychar" data-mychar="mychar" data-toggle="tooltip" title="${currCharacter.name}" src="img/c${currCharacter.id}.jpg" alt="c${currCharacter.id}">                    
                </div>
                <div class="gamemiddle col s12 m6 l4 center-align"> 
                    <img class="responsive-img" id="over" data-toggle="tooltip" title="Click Me" src="img/gameover.jpg" alt="over">
                    <h4>${status}</h4>
                </div>
                <div class="gameenemy col s12 m6 l4 center-align"> 
                    <img class="responsive-img" id="mytarget" data-mychar="mytarget" data-toggle="tooltip" title="${currTarget.name}" src="img/t${currTarget.id}.jpg" alt="t${currTarget.id}">                                                                        
                </div>
            </div>       
        `)  

        $(".gamesec2").html(`
            <div class="row set1">
                <li>
                    <h6>Your Character</h6>
                    <img class="responsive-img" id="mycharpanel" data-panel1="mychar" data-toggle="tooltip" title="${currCharacter.name}" src="img/c${currCharacter.id}.jpg" alt="c${currCharacter.id}"> 
                    <p>Name: ${currCharacter.name}</p>
                    <p>HP: ${currCharacter.health}</p>
                </li>   
            </div>
            <div class="row set2">
                <li>
                    <h6>Your Target</h6>
                    <img class="responsive-img" id="mytarpanel" data-panel1="mytar" data-toggle="tooltip" title="${currTarget.name}" src="img/t${currTarget.id}.jpg" alt="t${currTarget.id}"> 
                    <p>Name: ${currTarget.name}</p>
                    <p>HP: ${currTarget.health}</p>
                </li>  
            </div>
            <div class="row set3">                                
                <div class="score-board center-align">
                    <h6>Live Score [HP]</h6>  
                    <div class="player col s12 m6 l6 center-align">   
                        <li>                    
                            <div class="score-box">
                                ${currCharacter.health}                              
                            </div>
                            <p>${currCharacter.name}</p>
                        </li>                          
                    </div>
                    <div class="enemy col s12 m6 l6 center-align">                        
                        <li>
                            <div class="score-box">
                                ${currTarget.health}
                            </div>
                            <p>${currTarget.name}</p>
                        </li>                               
                    </div>
                </div>
            </div>  
            <div class="row set4 center-align">
                <img class="responsive-img restart-btn" data-panel1="restart" data-toggle="tooltip" title="restart game" src="img/restart.jpg" alt="restart game"> 
            </div>   
            <div class="row set5 center-align">
                <a href="/"><img class="responsive-img exitgame-btn" data-panel1="exitgame" data-toggle="tooltip" title="exit game" src="img/exit.jpg" alt="exit game"></a>
            </div>  
            `)  
    }

    function getData (ch){
        // get selected character's name, hp from database
        $.get("/api/Characters/"+ch, function(data1) {
            // get random target's name, hp from database  
            $.get("/api/Boss/"+bo, function(data2) {    
                displayStart (data1, data2)
                // console.log(data1)
                // console.log(data2)
            })        
        })
    }

    // When on click characters, display start and status panel
    $(document).on("click", "#char-container1", function(event) {
        event.preventDefault();
        myCharacter = $(this).attr("data-char1")
        console.log('Your character: ' +  $(this).attr("data-char1")) 
        getData (myCharacter) 
    });

    $(document).on("click", "#char-container2", function(event) {
        event.preventDefault();
        myCharacter = $(this).attr("data-char2")
        console.log('Your character: ' +  $(this).attr("data-char2"))         
        getData (myCharacter) 
    });

    $(document).on("click", "#char-container3", function(event) {
        event.preventDefault();
        myCharacter = $(this).attr("data-char3")
        console.log('Your character: ' +  $(this).attr("data-char3"))         
        getData (myCharacter) 
    });

    $(document).on("click", "#char-container4", function(event) {
        event.preventDefault();
        myCharacter = $(this).attr("data-char4")
        console.log('Your character: ' +  $(this).attr("data-char4"))         
        getData (myCharacter) 
    });

    //When on click "Restart" button
    $(document).on("click", ".restart-btn", function(event) {
        event.preventDefault(); 
        displayCharacterSelect();
    });

    //When on click "Attack" button
    $(document).on("click", "#myattack", function(event) {
        event.preventDefault(); 
        // console.log(currcharacter)
        // console.log(currtarget)

        // When target attack you by random 1/10 chance
        var randChance = Math.floor(Math.random() * 10)
        var randTargetDefense = Math.floor(Math.random() * currTarget.defense)
        var randCurrDefense = Math.floor(Math.random()* currCharacter.defense)
        // console.log(randChance)
        // console.log(randCurrDefense)
        

        if (randChance <= 2)
        // When the Boss attacks you
        {
            currCharacter.health = currCharacter.health - (currTarget.attack - randCurrDefense)
        }
        // When you attack target 
        else 
        {
            currTarget.health = currTarget.health - (currCharacter.attack - randTargetDefense)
        }


        // When Health is 0
        if (currTarget.health <= 0)
        { 
            displayGameover(currCharacter, currTarget, 'You won the game!')
        } 
        else if (currCharacter.health <= 0)
        {
            displayGameover(currCharacter, currTarget, 'You lose! Try Next Time!')
        }
        else 
        {
            displayStart(currCharacter, currTarget)
        }

    });


})