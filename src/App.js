import React, { Component } from 'react';
import ProductsWrapper from './components/products_wrapper/products_wrapper';
import InputsWrapper from './components/inputs_wrapper/inputs_wrapper';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="app">
                <ProductsWrapper></ProductsWrapper>
                <InputsWrapper></InputsWrapper>
            </div>
        );
    }
}

export default App;






