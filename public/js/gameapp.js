const fetch = window.fetch
const bo = 1 // assume we only have 1 boss
var mycharacter = ""  
var currcharacter
var currtarget
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

    function displaycharacterselect() {
        // initial game setting
        mycharacter = ""

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

    displaycharacterselect();

    // Display Current Game 
    function displaystart (chardata, targdata) {
        currcharacter = chardata
        currtarget = targdata

        $(".gamesec1").html(`
            <div class="gamesection center-align">
                <div class="gameplayer col s12 m6 l4 center-align">   
                    <img class="responsive-img" id="mychar" data-mychar="mychar" data-toggle="tooltip" title="${currcharacter.name}" src="img/c${currcharacter.id}.jpg" alt="c${currcharacter.id}">                    
                </div>
                <div class="gamemiddle col s12 m6 l4 center-align"> 
                    <img class="responsive-img" id="myattack" data-toggle="tooltip" title="Click Me" src="img/attack.jpg" alt="attack">
                </div>
                <div class="gameenemy col s12 m6 l4 center-align"> 
                    <img class="responsive-img" id="mytarget" data-mychar="mytarget" data-toggle="tooltip" title="${currtarget.name}" src="img/t${currtarget.id}.jpg" alt="t${currtarget.id}">                                                                        
                </div>
            </div>       
        `)  

        $(".gamesec2").html(`
            <div class="row set1">
                <li>
                    <h6>Your Character</h6>
                    <img class="responsive-img" id="mycharpanel" data-panel1="mychar" data-toggle="tooltip" title="${currcharacter.name}" src="img/c${currcharacter.id}.jpg" alt="c${currcharacter.id}"> 
                    <p>Name: ${currcharacter.name}</p>
                    <p>HP: ${currcharacter.health}</p>
                </li>   
            </div>
            <div class="row set2">
                <li>
                    <h6>Your Target</h6>
                    <img class="responsive-img" id="mytarpanel" data-panel1="mytar" data-toggle="tooltip" title="${currtarget.name}" src="img/t${currtarget.id}.jpg" alt="t${currtarget.id}"> 
                    <p>Name: ${currtarget.name}</p>
                    <p>HP: ${currtarget.health}</p>
                </li>  
            </div>
            <div class="row set3">                                
                <div class="score-board center-align">
                    <h6>Live Score [HP]</h6>  
                    <div class="player col s12 m6 l6 center-align">   
                        <li>                    
                            <div class="score-box">
                                ${currcharacter.health}                              
                            </div>
                            <p>${currcharacter.name}</p>
                        </li>                          
                    </div>
                    <div class="enemy col s12 m6 l6 center-align">                        
                        <li>
                            <div class="score-box">
                                ${currtarget.health}
                            </div>
                            <p>${currtarget.name}</p>
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
    function displaygameover (chardata, targdata, status) {
        currcharacter = chardata
        currtarget = targdata

        $(".gamesec1").html(`
            <div class="gamesection center-align">
                <div class="gameplayer col s12 m6 l4 center-align">   
                    <img class="responsive-img" id="mychar" data-mychar="mychar" data-toggle="tooltip" title="${currcharacter.name}" src="img/c${currcharacter.id}.jpg" alt="c${currcharacter.id}">                    
                </div>
                <div class="gamemiddle col s12 m6 l4 center-align"> 
                    <img class="responsive-img" id="over" data-toggle="tooltip" title="Click Me" src="img/gameover.jpg" alt="over">
                    <h4>${status}</h4>
                </div>
                <div class="gameenemy col s12 m6 l4 center-align"> 
                    <img class="responsive-img" id="mytarget" data-mychar="mytarget" data-toggle="tooltip" title="${currtarget.name}" src="img/t${currtarget.id}.jpg" alt="t${currtarget.id}">                                                                        
                </div>
            </div>       
        `)  

        $(".gamesec2").html(`
            <div class="row set1">
                <li>
                    <h6>Your Character</h6>
                    <img class="responsive-img" id="mycharpanel" data-panel1="mychar" data-toggle="tooltip" title="${currcharacter.name}" src="img/c${currcharacter.id}.jpg" alt="c${currcharacter.id}"> 
                    <p>Name: ${currcharacter.name}</p>
                    <p>HP: ${currcharacter.health}</p>
                </li>   
            </div>
            <div class="row set2">
                <li>
                    <h6>Your Target</h6>
                    <img class="responsive-img" id="mytarpanel" data-panel1="mytar" data-toggle="tooltip" title="${currtarget.name}" src="img/t${currtarget.id}.jpg" alt="t${currtarget.id}"> 
                    <p>Name: ${currtarget.name}</p>
                    <p>HP: ${currtarget.health}</p>
                </li>  
            </div>
            <div class="row set3">                                
                <div class="score-board center-align">
                    <h6>Live Score [HP]</h6>  
                    <div class="player col s12 m6 l6 center-align">   
                        <li>                    
                            <div class="score-box">
                                ${currcharacter.health}                              
                            </div>
                            <p>${currcharacter.name}</p>
                        </li>                          
                    </div>
                    <div class="enemy col s12 m6 l6 center-align">                        
                        <li>
                            <div class="score-box">
                                ${currtarget.health}
                            </div>
                            <p>${currtarget.name}</p>
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

    function getdata (ch){
        // get selected character's name, hp from database
        $.get("/api/Characters/"+ch, function(data1) {
            // get random target's name, hp from database  
            $.get("/api/Boss/"+bo, function(data2) {    
                displaystart (data1, data2)
                // console.log(data1)
                // console.log(data2)
            })        
        })
    }

    // When on click characters, display start and status panel
    $(document).on("click", "#char-container1", function(event) {
        event.preventDefault();
        mycharacter = $(this).attr("data-char1")
        console.log('Your character: ' +  $(this).attr("data-char1")) 
        getdata (mycharacter) 
    });

    $(document).on("click", "#char-container2", function(event) {
        event.preventDefault();
        mycharacter = $(this).attr("data-char2")
        console.log('Your character: ' +  $(this).attr("data-char2"))         
        getdata (mycharacter) 
    });

    $(document).on("click", "#char-container3", function(event) {
        event.preventDefault();
        mycharacter = $(this).attr("data-char3")
        console.log('Your character: ' +  $(this).attr("data-char3"))         
        getdata (mycharacter) 
    });

    $(document).on("click", "#char-container4", function(event) {
        event.preventDefault();
        mycharacter = $(this).attr("data-char4")
        console.log('Your character: ' +  $(this).attr("data-char4"))         
        getdata (mycharacter) 
    });

    //When on click "Restart" button
    $(document).on("click", ".restart-btn", function(event) {
        event.preventDefault(); 
        displaycharacterselect();
    });
    // When on click "Sound" button
    $(document).on("click", ".soundgame-btn", function(event) {
        event.preventDefault(); 
        togglePlay();
    });

    //When on click "Attack" button
    $(document).on("click", "#myattack", function(event) {
        event.preventDefault(); 
        // console.log(currcharacter)
        // console.log(currtarget)

        // When target attack you by random 1/10 chance
        var randchance = Math.floor(Math.random() * 10)

        if (randchance == 1)
        {
            currcharacter.health = currcharacter.health - currtarget.attack + currcharacter.defense  
        }
      
        // When you attack target (everytime when you click attack)
        currtarget.health = currtarget.health - currcharacter.attack

        if (currtarget.health <= 0)
        { 
            displaygameover(currcharacter, currtarget, 'You won the game!')
        } 
        else if (currcharacter.health <= 0)
        {
            displaygameover(currcharacter, currtarget, 'You lose the game!')
        }
        else 
        {
            displaystart(currcharacter, currtarget)
        }

    });


})