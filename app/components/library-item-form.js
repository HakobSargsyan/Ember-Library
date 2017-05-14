import Ember from 'ember';

export default Ember.Component.extend({
	actions :{
		buttonClicked:function(params){
			this.sendAction('action',params);
		}
	}
});
