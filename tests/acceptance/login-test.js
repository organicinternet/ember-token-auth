import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Login', {
  setup: function() {
    if (window.localStorage.getItem('token-testAuth')) {
      window.localStorage.removeItem('token-testAuth');
    }
    App = startApp();
  },

  teardown: function() {
    window.history.pushState('','','/tests');
    Ember.run(App, 'destroy');
  }
});

test('visiting /login when there is not valid login should not redirect', function() {
  visit('/login');

  andThen(function() {
    equal(currentPath(), 'login');
  });
});

test('visiting /login should redirect to index with there is a valid login', function() {
  
  visit('/login');
  click('button#login');
  visit('/login');

  andThen(function() {
    equal(currentPath(), 'index');
  });
});
