import React from 'react';
import ReactDOM from 'react-dom';

function Example() {

    const values = [10, 20, 30,40];
    const [a,b,c,d] = values;

     console.log(a,b,c,d)


    return (
        <div className="container">
           <h4>Destructurring</h4>
           <p> values : {a} , {b} , {c} , {d}</p>

       
        </div>
    );
}

export default Example;

