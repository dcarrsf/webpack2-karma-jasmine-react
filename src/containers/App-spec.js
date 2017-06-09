import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from './App.jsx';

describe('App', () => {
  it('should exist', () => {
    const app = TestUtils.renderIntoDocument(<App/>);
    expect(app).toBeDefined();
  });

  it('should change values', () => {
    const app = TestUtils.renderIntoDocument(<App/>);
    const inputNode = ReactDOM.findDOMNode(app.refs.input);
    const newValue = 'some text';
    
    inputNode.value = newValue;
    TestUtils.Simulate.change(inputNode);

    const nameNode = ReactDOM.findDOMNode(app.refs.name);
    expect(nameNode.textContent).toEqual(newValue);
  });
});
