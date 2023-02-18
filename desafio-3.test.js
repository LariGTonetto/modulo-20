import {expect} from '@jest/globals';
import React from "react";
import renderer from "react-test-renderer";
import totalSoma from "../../Mod20/desafio-3";

test('This is validated', () => {
    const tree = renderer.create(<desafio-3 />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('That result of smaller', () => {
    expect(totalSoma).toEqual(156361);
})
