const React = require('react')

const Index = () =>
    <html lang="en">
    <head>
    <meta httpEquiv="Content-Type" content="text/html; charSet=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Index</title>


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Black+Ops+One|Bungee+Inline" rel="stylesheet" />
    <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
    <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
    
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
                <h1 className="header center deep-orange-text text-darken-1 title-name">RPG Game</h1>

                <div className="container" id="menu">
                <div className="row center">
                    <a href="/game" id="download-button" className="btn-large waves-effect waves-light orange darken-2">Start Game</a>
                </div>
                <div className="row center">
                    <a href="/score" id="download-button" className="btn-large waves-effect waves-light orange darken-1">Score</a>
                </div>
                <div className="row center">
                    <a href="/help" id="download-button" className="btn-large waves-effect waves-light orange darken-1">Help</a>
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

    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="js/materialize.js"></script>
    <script src="js/init.js"></script>

    </body>
    </html>

module.exports = Index