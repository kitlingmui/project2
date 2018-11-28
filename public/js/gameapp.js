const fetch = window.fetch
const bo = 1 // assume we only have 1 boss
var myCharacter = ""  
var win = 0 
var lose = 0
var currCharacter
var currTarget
var isPlaying = true;

$(document).ready(function() {
    var mySound;
  // Gets Link for Theme Song
  function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
mySound = new sound("./sound/Fighting.mp3");
mySound.play(); 
function togglePlay() {
  if (isPlaying) {
    mySound.stop();
    isPlaying = false;
  } else {
    mySound.play();
    isPlaying = true;
  }
};

    function displayCharacterSelect() {
        // initial game setting
        myCharacter = ""

        $(".gamesec1").empty()
        $(".gamesec2").empty()
        $(".gamesec1").html(`
        <h1 class="header" id="type-h">Choose your character...</h1>
        <img class="responsive-img" id="char-container1" data-char1="1" data-toggle="tooltip" title="Naruto" src="img/c1.gif" alt="c1"> 
        <img class="responsive-img" id="char-container2" data-char2="2" data-toggle="tooltip" title="Kakashi" src="img/c2.gif" alt="c2"> 
        <img class="responsive-img" id="char-container3" data-char3="3" data-toggle="tooltip" title="Gaara" src="img/c3.gif" alt="c3"> 
        <img class="responsive-img" id="char-container4" data-char4="4" data-toggle="tooltip" title="Sasuke" src="img/c4.gif" alt="c4">   
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
                    <img class="responsive-img" id="mychar" data-mychar="mychar" data-toggle="tooltip" title="${currCharacter.name}" src="img/c${currCharacter.id}.gif" alt="c${currCharacter.id}">                    
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
                    <p>Wins: ${win}</p>
                </li>   
            </div>
            <div class="row set2">
                <li>
                    <h6>Your Target</h6>
                    <img class="responsive-img" id="mytarpanel" data-panel1="mytar" data-toggle="tooltip" title="${currTarget.name}" src="img/t${currTarget.id}.jpg" alt="t${currTarget.id}"> 
                    <p>Name: ${currTarget.name}</p>
                    <p>Wins: ${lose}</p>
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
            <div class="row set5 center-align">
                <a href="/"><img class="responsive-img soundgame-btn" data-panel1="soundgame" data-toggle="tooltip" title="sound game" src="img/sound.jpg" alt="sound game"></a>
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
                    <p>Wins: ${win}</p>
                </li>   
            </div>
            <div class="row set2">
                <li>
                    <h6>Your Target</h6>
                    <img class="responsive-img" id="mytarpanel" data-panel1="mytar" data-toggle="tooltip" title="${currTarget.name}" src="img/t${currTarget.id}.jpg" alt="t${currTarget.id}"> 
                    <p>Name: ${currTarget.name}</p>
                    <p>Wins: ${lose}</p>
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
    // When on click "Sound" button
    $(document).on("click", ".soundgame-btn", function(event) {
        event.preventDefault(); 
        togglePlay();
    });

    //When on click "Attack" button
    $(document).on("click", "#myattack", function(event) {
        event.preventDefault(); 
        isClick = true;
        currentnumber =  currCharacter.id;
        if (currentnumber === 1 )
        {
            currCharacter.id = 5;
            $("#mycharpanel").attr("src","img/c" + currentnumber  +".gif");
            setTimeout(
                function() {
                    currCharacter.id = currentnumber;
                    $("#mychar").attr("src","img/c" + currCharacter.id +".gif");
                },1600
            );
        }
        if (currentnumber === 4 )
        {
            currCharacter.id = 6;
            $("#mycharpanel").attr("src","img/c" + currentnumber  +".gif");
            setTimeout(
                function() {
                    currCharacter.id = currentnumber;
                    $("#mychar").attr("src","img/c" + currCharacter.id +".gif");
                },1600
            );
        }
        if (currentnumber === 3 )
        {
            currCharacter.id = 7;
            $("#mycharpanel").attr("src","img/c" + currentnumber  +".gif");
            setTimeout(
                function() {
                    currCharacter.id = currentnumber;
                    $("#mychar").attr("src","img/c" + currCharacter.id +".gif");
                },1600
            );
        }
        if (currentnumber === 2 )
        {
            currCharacter.id = 8;
            $("#mycharpanel").attr("src","img/c" + currentnumber  +".gif");
            setTimeout(
                function() {
                    currCharacter.id = currentnumber;
                    $("#mychar").attr("src","img/c" + currCharacter.id +".gif");
                },3000
            );
        }
        else{}
        //currcharacter.id = currentnumber;
        // console.log(currcharacter)
        // console.log(currtarget)

        // When target attack you by random 1/10 chance
        var randChance = Math.floor(Math.random() * 10)
        var randTargetDefense = Math.floor(Math.random() * currTarget.defense)
        var randCharacterDefense = Math.floor(Math.random()* currCharacter.defense)
        // console.log(randChance)
        // console.log(randCurrDefense)
        

        if (randChance <= 2)
        // When the Boss attacks you
        {
            currCharacter.health = currCharacter.health - (currTarget.attack - randCharacterDefense)
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
            win++
            sessionStorage.setItem('win', win);
            console.log(win)
        } 
        else if (currCharacter.health <= 0)
        {
            displayGameover(currCharacter, currTarget, 'You lose! Try Next Time!')
            lose++
            sessionStorage.setItem('lose', lose);
            console.log(lose)
        }
        else 
        {
            displayStart(currCharacter, currTarget)
        }

    });


})