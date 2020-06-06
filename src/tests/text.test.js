import React from 'react';
import renderer from 'react-test-renderer';
import { TextComponent } from '../components/text';

test('TextComponent h1 - Head with css-class "head-h1"', () => {
    const tree = renderer
        .create(
            <TextComponent
                tag="h1"
                content="Head"
                styleClass="head-h1"
            />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('TextComponent some text in <p> without css-classes', () => {
    const tree = renderer
        .create(
            <TextComponent
                tag="p"
                content="Some text in tag"
            />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});