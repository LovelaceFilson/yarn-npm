import React from 'react';
import slider1 from './assets/images/1.jpg';
import slider2 from './assets/images/2.jpg';

class Slider extends React.Component {
    render() {
        return <div className="container-fluid">
            <div className="row">
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    
   <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>

                    </ol>

                
   <div className="carousel-inner carousel-content" role="listbox">
                        <div className="item active">
                            <img src={slider1} alt="pizza7" />
      </div>




                            <div className="item">
                                <img src={slider2} width="100%" alt="pizza2" />
      </div>




                            </div>
                        </div>

                        
   <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>

                        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>

                        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div>
            
            }
        }
        
export default Slider;