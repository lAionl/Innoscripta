import React, { Component } from "react";
import { TextComponent } from '../components/text';
import { PizzaPiece } from '../components/pizza_piece';
import { Basket } from '../components/basket';
import { OrderModal } from '../components/order_modal';
import { pizzas } from '../static/data';

export class Pizzas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            basket: [],
            idx: 0,
            showOrderModal: false,
        }
        this.addPizza = this.addPizza.bind(this);
        this.deletePizza = this.deletePizza.bind(this);

    }

    addPizza(pizza) {
        let { basket, idx } = this.state;
        const pizzas = [...basket, { ...pizza, idx }];
        this.setState({ basket: pizzas, idx: idx+=1 })
    }
    deletePizza(pizza) {
        const { basket } = this.state;
        const newBasket = basket.filter(item => item.idx !== pizza.idx)
        this.setState({ basket: newBasket });
    }

    render() {
        const pizzasList = pizzas;
        const { basket, showOrderModal } = this.state;
        return (
            <>
                {basket.length > 0 && (
                    <>
                        <Basket
                            basket={basket}
                            deletePizza={this.deletePizza}
                        />
                        <button onClick={() => this.setState({ showOrderModal: !showOrderModal })} className="btn btn-warning mb-3 mt-3 ml-3 mr-3">{'Make an order'}</button>
                    </>
                )}
                <TextComponent
                    tag="h1"
                    content="Choose your pizza!"
                    styleClass="mb-3 mt-3 ml-3 mr-3"
                />
                {pizzasList.map((pizza, i) => 
                    <PizzaPiece
                        key={i}
                        pizza={pizza}
                        addPizza={() => this.addPizza(pizza)}
                    />
                )}
                <div className={`modal fade ${showOrderModal ? 'show' : ''}`} id="modal-root" style={showOrderModal ? {display: 'block'} : {}}>
                    {showOrderModal && (
                        <OrderModal
                            onClose={() => this.setState({ showOrderModal: !showOrderModal })}
                            basket={basket}
                        />
                    )}
                </div>
            </>
        );
    }
}
