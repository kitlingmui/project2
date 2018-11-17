const React = require('react')

const Game = () =>

<html lang="en">
<head>
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Game</title>
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />

  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Black+Ops+One|Bungee+Inline" rel="stylesheet" />
  <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
 
</head>
<body>
    <nav id="mynav" class="black" role="navigation">
        <div class="nav-wrapper container">
            <a href="/" ><img id="logo-container" data-toggle="tooltip" title="home" class="brand-logo center" src="img/logo.jpg" alt="homelogo" /></a>     
        </div>
    </nav>

    <div id="index-banner" class="parallax-container game-banner">
      <div class="section no-pad-bot">
        <div class="container">    
            <h1 class="header" id="type-h">Choose your character...</h1>
            <img id="char-container"  href="#" src="img/c1.jpg" alt="c1" /> 
            <img id="char-container"  href="#" src="img/c2.jpg" alt="c2" /> 
            <img id="char-container"  href="#" src="img/c3.jpg" alt="c3" /> 
            <img id="char-container"  href="#" src="img/c4.jpg" alt="c4" /> 
        </div>
        <div>
            <h1 class="header" id="type-h">Choose your target...</h1>
            <img id="char-container"  href="#" src="img/t1.jpg" alt="t1" /> 
            <img id="char-container"  href="#" src="img/t2.jpg" alt="t2" /> 
            <img id="char-container"  href="#" src="img/t3.jpg" alt="t3" /> 
        </div>
      </div>
    </div>
 
    <div>
        <h1>my score panel</h1>
    </div>

  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="js/materialize.js"></script>
  <script src="js/init.js"></script>

  </body>
</html>

module.exports = Game