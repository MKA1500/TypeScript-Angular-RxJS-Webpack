import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello, we are testing', 'version webpack 4'], ' ');

  return element;
}

document.body.appendChild(component());
