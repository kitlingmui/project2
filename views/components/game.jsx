const React = require('react')

const Game = () =>

<html lang="en">
<head>
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Game</title>
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Black+Ops+One|Bungee+Inline" rel="stylesheet" />
  <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://code.jquery.com/jquery.js"></script>
 
</head>
<body>
    <div id="game-banner" className="parallax-container game-banner">
      <div className="section no-pad-bot">
        <div className="row gamescreen">   
            <div className="col s12 m6 l10 left-align gamesec1">
              {/* game display goes here */}
            </div>
            <div className="col s12 m6 l2 left-align gamesec2">
              {/* game panel goes here */}
            </div>   
        </div>
      </div>
    </div>

  <script type="text/javascript" src='./js/gameapp.js' />
  </body>
</html>

module.exports = Game