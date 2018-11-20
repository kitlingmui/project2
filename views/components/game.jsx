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
    {/* <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/> */}
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
        <div class="container gamescreen">   
              {/* display logic goes here */}
        </div>
      </div>
    </div>
 
    <nav id="mynav" class="black" role="navigation">
        <div class="nav-wrapper container panelscreen">
           {/* display current game setting goes here */}
        </div>
    </nav>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="js/materialize.js"></script>
  <script src="js/init.js"></script>
  <script type="text/javascript" src='./js/gameapp.js' />

  </body>
</html>

module.exports = Game