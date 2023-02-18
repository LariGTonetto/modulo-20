import {expect} from '@jest/globals';
import React from "react";
import renderer from "react-test-renderer";
import indices from "../Mod20/desafio-2"


test('This is validated', () => {
    const tree = renderer.create(<desafio-2 />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('That result of smaller', () => {
    expect(indices).toContain(4);
});

test('That result of bigger', () => {
    expect(indices).toContain(10);
})
