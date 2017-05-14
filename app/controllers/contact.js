import Ember from 'ember';

export default Ember.Controller.extend({
	email: "",
	message: "",
	showError: false,
	errorMessage: null,

	isValid: Ember.computed.match('model.email',/^.+@.+\..+$/),
	isGreater:Ember.computed.gte('model.message.length', 5),
	notValid:Ember.computed.not('isValid'),
	notGreater:Ember.computed.not('isGreater'),
	isDisabled:Ember.computed.or('notGreater', 'notValid'),
	isOk:Ember.computed.and('isDisabled'),

});
