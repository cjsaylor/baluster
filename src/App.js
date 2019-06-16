import React, { useState } from 'react';
import {
  estimateQuantity,
  spacingMeasurements,
  nearest16th,
} from 'baluster'
import './App.css'


function App() {
    const [innerWidth, setInnerWidth ] = useState(0.0)
    const setWidth = (val) => setInnerWidth(cur => val + (cur - Math.floor(cur)))
    const addFraction = (val) => setInnerWidth(cur => Math.floor(cur) + val)
    let quantity = estimateQuantity(innerWidth)
    let measurements = []
    try {
        measurements = spacingMeasurements(innerWidth, quantity)
    } catch (e) {
        quantity++
        measurements = spacingMeasurements(innerWidth, quantity)
    }
    return (
        <div className="App">
            <h1>Baluster Calculator</h1>
            <label>Inner Post Width: </label>
            <input type="number" placeholder="Whole Inches" onChange={e => setWidth(parseInt(e.target.value || 0, 10))}/>
            <label>Fraction:</label>
            <select onChange={e => addFraction(parseFloat(e.target.value))}>
                {[...Array(16).keys()].map(val => (
                    <option key={val} value={val/16}>{val}/16"</option>
                ))}
            </select>
            {!!innerWidth && (
                <React.Fragment>
                    <p>Number of Balusters: {quantity}</p>
                    <p>Spacing (on center):</p>
                    <ol>
                        {
                            measurements
                                .map(val => {
                                    if (nearest16th(val) === 16) {
                                        return [Math.ceil(val), [0,16]];
                                    }
                                    return [Math.floor(val), [nearest16th(val), 16]]
                                })
                                .map((val, i) => (
                                    <li key={i}>{val[0]} <sup>{val[1][0]}</sup>/<sub>{val[1][1]}</sub>"</li>
                                ))
                        }
                    </ol>
                </React.Fragment>
            )}
        </div>
    );
}

export default App;
