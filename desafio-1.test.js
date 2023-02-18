import {expect} from '@jest/globals';
import React from "react";
import renderer from "react-test-renderer";
import {desafio-1} from "../../Mod20/MDC"


test('This is validated', () => {
    const tree = renderer.create(<desafio-1 />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('That result is equal', () => {
    expect(desafio-1(10,20)).toEqual(10);
})
