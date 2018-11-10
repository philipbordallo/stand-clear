import React from 'react';
import ReactDOM from 'react-dom';

import 'css/styles';
import 'utilities/injectSpritemap';

import App from './App';


function handleDOMReady() {
  const applicationElement = document.getElementById('application');
  if (applicationElement) {
    const Container = React.createElement(App);
    ReactDOM.render(Container, applicationElement);
  }
}

document.addEventListener('DOMContentLoaded', handleDOMReady);
