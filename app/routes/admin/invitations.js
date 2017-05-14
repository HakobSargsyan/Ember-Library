import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.get('store').findAll('invitation',function(response){
			return response;
		})
	}
});
