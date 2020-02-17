import React from 'react';
import about1 from './assets/images/7.jpg';
class About extends React.Component {
    render() {
        return <div className="container about-pizza">
            <div className="row">
                <h2 className="text-center">About Pizza</h2>
                <div className="col-md-6">
                    <img src={about1} alt="About Pizza" height="350" width="400" />

                </div>
                <div className="col-md-6">
                    <h3>Pizza is AWESOME</h3>
                    <p>
                                Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with
                                some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and
                                many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired
                                oven heated to a very high temperature—and served hot.
                                    One of the simplest and most traditional pizzas is the Margherita, which is topped with
                                    matoes or tomato sauce, mozzarella, and basil. Popular legend relates that it was named
                                    for Queen Margherita, wife of Umberto I, who was said to have liked its mild fresh flavour
                                    d to have also noted that its topping colours—green, white, and red—were those of the Italian
                                    flag.
                                        Italy has many variations of pizza: Roman pizza often omits tomatoes
                                        (an early 16th-century import) and uses onions and olives. The Ligurian pizza
                                        resembles the pissaladière of Provence in France, adding anchovies to olives
                                        and onions. Pizza has also spread from Italy throughout much of the rest of the world,
                                        d, in regions outside of Italy, the toppings used vary with the ingredients available and
                                        the flavour profile preferred.
            </p>



                </div>


            </div>
        </div>

    }
}

export default About;



