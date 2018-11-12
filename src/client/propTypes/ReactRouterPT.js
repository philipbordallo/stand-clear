import PT from 'prop-types';

function match(shape) {
  return PT.shape({
    isExact: PT.bool,
    params: PT.shape(shape).isRequired,
    path: PT.string.isRequired,
    url: PT.string.isRequired,
  });
}

const location = PT.shape({
  hash: PT.string.isRequired,
  pathname: PT.string.isRequired,
  search: PT.string.isRequired,
});

const history = PT.shape({
  action: PT.oneOf(['PUSH', 'REPLACE', 'POP']).isRequired,
  block: PT.func.isRequired,
  createHref: PT.func.isRequired,
  go: PT.func.isRequired,
  goBack: PT.func.isRequired,
  goForward: PT.func.isRequired,
  length: PT.number,
  listen: PT.func.isRequired,
  location: location.isRequired,
  push: PT.func.isRequired,
  replace: PT.func.isRequired,
});

const ReactRouterPT = {
  match,
  location,
  history,
};

export default ReactRouterPT;
