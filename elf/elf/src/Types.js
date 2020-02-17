import React from 'react';
import types1 from './assets/images/3.jpg';
import types2 from './assets/images/5.jpg';
import types3 from './assets/images/3.jpg';
import types4 from './assets/images/5.jpg';
class Types extends React.Component {
    render() {
        return <div className="container pizza-types" >
            <div className="row" />
            <h3 className="text-center">Pizza Types</h3>

            <div className="col-md-3" >
                <img src={types1} height="140" width="140" alt="Peperoni" />
                <div className="caption" />
                <h3>Peperoni Pizza</h3>
                <p> Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually.</p>
            </div>


            <div className="col-md-3" >
                    <img src={types2} height="140" width="140" alt="Vegetable" />
                    <div className="caption" />
                        <h3>Vegetable Pizza</h3>
                        <p> Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually.</p>
                    </div>
                

            <div className="col-md-3">
                    <img src={types3}  height="140" width="140" alt="Cheese" />
                    <div className="caption" />
                        <h3>Cheese Pizza</h3>
                        <p> Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually.</p>
                    </div>
            

            <div className="col-md-3">
                    <img src={types4} height="140" width="140" alt="Bossu" />
                    <div className="caption" />
                        <h3>Bossu Pizza</h3>
                        <p> Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually.</p>
                    </div>

                </div>
            

        

    }
}





export default Types;

