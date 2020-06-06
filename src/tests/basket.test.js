import React from 'react';
import renderer from 'react-test-renderer';
import { Basket } from '../components/basket';

test('Basket render', () => {
    const basket = [{
        name: 'Pizza 1',
        url: 'url',
        idx: 0,
        price: 1,
        composition: 'some text',
    }, {
        name: 'Pizza 2',
        url: 'url',
        idx: 1,
        price: 2,
        composition: 'some text',
    }, {
        name: 'Pizza 3',
        url: 'url',
        idx: 2,
        price: 3,
        composition: 'some text',
    }];
    const tree = renderer
        .create(
            <Basket
                basket={basket}
            />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
