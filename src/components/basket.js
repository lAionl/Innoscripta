import React, { Component } from "react";


export class Basket extends Component {

    render() {
        const { basket, deletePizza } = this.props;
        const totalPrice = basket.reduce((accumulator, elem) => accumulator + elem.price, 0);
        return (
            <>
                <div className="alert alert-success mb-2 mt-2 ml-3 mr-3">In your basket:</div>
                <ul className="list-group list-group-flush mb-3 mt-3 ml-3 mr-3">
                    {basket.map((elem, i) =>
                        <li className="list-group-item mb-1 mt-1 ml-1 mr-1" key={i}>
                            {`${elem.name} - ${elem.price} $`}
                            <button 
                                className="btn btn-danger btn-sm mb-1 mt-1 ml-1 mr-1"
                                onClick={() => deletePizza(elem)}
                            >{' x '}</button>
                        </li>
                    )}
                </ul>
                <div className="alert alert-primary mb-3 mt-3 ml-3 mr-3">
                    <p>{`Total for ${basket.length} ${basket.length === 1 ? 'pizza' : 'pizzas'}: ${totalPrice}$`}</p>
                    <p>{`With delivery: ${totalPrice + 3}$`}</p>
                </div>
            </>
        );
    }
}
