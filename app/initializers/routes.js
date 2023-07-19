import Router from '../router';

export function initialize() {
  Router.map(function () {
    this.route('show', { path: '/*' });
  });
}

export default {
  initialize,
};
