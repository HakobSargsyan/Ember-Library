import Ember from 'ember';

export default Ember.Controller.extend({
	headerMessage: 'Coming Soon',
	emailAddress: "",
	showError: false,
	errorMessage:null,
	/*actualEmailAddress: Ember.observer('emailAddress',function(){
		console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
	}),*/

	emailAddressChanged: Ember.computed('emailAddress',function(){
		return this.get('emailAddress') === "";
	}),

	emailAddressChanged: Ember.computed.empty('emailAddress'),
	isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isDisabled: Ember.computed.not('isValid'),


	actions: {
		saveInvitation: function(){
			const email = this.get('emailAddress');
			let invitation = this.get('store').createRecord('invitation',{
				email: email,
			})
			invitation.save().then((response)=>{
				this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
				this.set('emailAddress', '');
			});
		}
	},
});
