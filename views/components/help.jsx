const React = require('react')

const Help = () =>
<html lang="en">
<head>
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Help</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Black+Ops+One|Bungee+Inline" rel="stylesheet" />
  <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://code.jquery.com/jquery.js"></script>
 
</head>
<body>
    <nav id="mynav" className="black" role="navigation">
        <div className="nav-wrapper container">
            <a href="/" ><img id="logo-container" data-toggle="tooltip" title="home" className="brand-logo center" src="img/logo.jpg" alt="homelogo" /></a>     
        </div>
    </nav>

    <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
            <div className="container">
                <h1 className="header center deep-orange-text text-darken-1 title-name">HELP</h1>
                <div className="section section-help">  
                    <div className="row center">
                        <div className="col s12 m4">
                        <div className="icon-block">
                            <h4 className="center brown-text"><i className="material-icons">videogame_asset</i></h4>
                            <h5 className="center">Objective</h5>
                            <p className="center light">Pick your legendary Hero, then take down Bahamut and claim victory!.</p>
                        </div>
                        </div>
                
                        <div className="col s12 m4">
                        <div className="icon-block">
                            <h4 className="center brown-text"><i className="material-icons">group</i></h4>
                            <h5 className="center">How to play</h5>
                            <p className="center light">Click the START button and then choose your charater. Once the game starts it will be you vs the target. Everytime when you click the attack button, you will damage your opponent and your target will lose their health points.
                                Bahamut will then attack back in return until you have either won or lost the game!</p>
                        </div>
                        </div>
                
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h4 className="center brown-text"><i className="material-icons">grade</i></h4>
                                <h5 className="center">Check your score</h5>                  
                                <p className="center light">You can view your win and loss history in the SCORE section.</p>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
    </div>
    

    <footer className="page-footer black">
        <div className="container">
        <div className="row">
            <div className="col l6 s12">
            <h5 className="white-text">Team6 Members</h5>
            <ul>
                <li><a className="white-text" href="#!">Hoang Cao</a></li>
                <li><a className="white-text" href="#!">Kit Mui</a></li>
                <li><a className="white-text" href="#!">Kyle Macabasco</a></li>
                <li><a className="white-text" href="#!">Taylor Darnell</a></li>
            </ul>
            </div>
        </div>
        </div>
        <div className="footer-copyright">
        <div className="container center-align">
            <a className="brown-text text-lighten-3 center">Copyright@2018</a>
        </div>
        </div>
    </footer>

  <script type="text/javascript" src='./js/indexapp.js' />

  </body>
</html>

module.exports = Help