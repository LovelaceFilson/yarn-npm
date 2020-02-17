import React from 'react';
class Nav extends React.Component {
    render() {
        return <nav className="navbar navbar-default navbar-home">
            <div className="container-fluid" />

            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

                <a classnameName="navbar-brand" href="#">PIZZAMANIA </a>



                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


                    <ul className="nav navbar-nav navbar-right navbar-navbar">
                        <li><a href="#"><strong>Home</strong> </a></li>
                        <li><a href="#">About Pizza</a></li>
                        <li><a href="#">Pizza Types</a></li>

                    </ul>



                </div>
            </div>
        </nav>



    }
}

export default Nav;


