window.MyPrototype = Ember.Application.create();

// Template to URL mapping
MyPrototype.Router.map(function() {
  this.resource('home', { path: '/' });
  // this.resource('account', { path: '/account' });
});
