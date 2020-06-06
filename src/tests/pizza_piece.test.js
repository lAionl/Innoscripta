import React from 'react';
import renderer from 'react-test-renderer';
import { PizzaPiece } from '../components/pizza_piece';

test('PizzaPiece', () => {
    const tree = renderer
        .create(
            <PizzaPiece
                pizza={{
                    url: 'http://www.ww.ww',
                    name: 'Mamma Mia',
                    price: 2,
                    composition: 'Some text about composition'
                }}
            />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});