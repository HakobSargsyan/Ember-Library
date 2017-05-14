import Ember from 'ember';

export default Ember.Route.extend({
	
	model(){
		return this.get('store').createRecord('contact');
	},
	actions: {
		sendContact:function(model){
			model.save().then(() => this.transitionTo('admin.contacts'));
		},
		close:function(){
			this.set('emailAddress','');
			this.set('description','');
		}
	}
});
