import React, { Component } from "react";


export class PizzaPiece extends Component {

    render() {
        const { pizza, addPizza } = this.props;
        return (
            <div className="card border-primary mb-3 mt-3 ml-3 mr-3">
                <img 
                    className="card-img-top"
                    src={pizza.url}
                    style={{ width: '180px', height: '160px'}}
                />
                <div className="card-body">
                    <h5 className="card-title">{pizza.name}</h5>
                    <p className="card-text">{`${pizza.price} $`}</p>
                    <p className="card-text">{pizza.composition}</p>
                    <bitton className="btn btn-primary" onClick={addPizza}>Buy</bitton>
                </div>
            </div>
        );
    }
}
