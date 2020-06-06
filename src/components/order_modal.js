import React, { Component } from "react";
import ReactDOM from 'react-dom';

export class OrderModal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.state = {
            address: '',
            phone: '',
            name: '',
            showSuccess: false,
        };
        this.getCountPizzas = this.getCountPizzas.bind(this);
    }
    componentDidMount() {
        const modalRoot = document.getElementById('modal-root');
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        const modalRoot = document.getElementById('modal-root');
        modalRoot.removeChild(this.el);
    }

    getCountPizzas(basket) {
        const pizzasInBasket = basket.map(item => item.name).reduce((acc, el) => {
            acc[el] = (acc[el] || 0) + 1;
            return acc;
        }, {});
        let text = [];
        for (let [key, value] of Object.entries(pizzasInBasket)) {
            text = [...text, `${key}: ${value}, `];
        }
        return text;
    }

    render() {
        const { onClose, basket } = this.props;
        const { address, phone, name, showSuccess } = this.state;
        const countPizzas = this.getCountPizzas(basket);
        return (
            <>
            {ReactDOM.createPortal(
                (<div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{'Order'}</h5>
                            <button onClick={onClose} className="close">
                                <span>{' X '}</span>
                            </button>
                        </div>
                        {!showSuccess && (
                            <div className="modal-body">
                                <p>{`In your basket ${basket.length} ${basket.length === 1 ? 'pizza.': 'pizzas.'}`}</p>
                                <p>{`${basket.length === 1 ? 'There is:' : 'There are:'} ${countPizzas}`}</p>
                                <div className="form-group">
                                    <label htmlFor="name">{'Name'}</label>
                                    <input
                                        id="name"
                                        className="form-control"
                                        value={name}
                                        onChange={val => this.setState({ name: val.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>{'Address'}</label>
                                    <textarea
                                        className="form-control"
                                        value={address}
                                        onChange={val => this.setState({ address: val.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>{'Phone number'}</label>
                                    <input
                                        value={phone}
                                        onChange={val => this.setState({ phone: val.target.value })}
                                        type="tel"
                                        className="form-control"
                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                    />
                                </div>
                            </div>
                        )}
                        {showSuccess && (
                            <div className="modal-body alert-success">{'Your order has been sent! Thank you!'}</div>
                        )}
                        <div className="modal-footer">
                            <button onClick={onClose} className="btn btn-secondary">{'Close'}</button>
                            {!showSuccess && (
                                <button
                                    onClick={() => this.setState({ showSuccess: true })}
                                    disabled={!name || !address || !phone}
                                    className="btn btn-primary">{'Send an order'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>), this.el
            )}
            </>
        );
    }
}
