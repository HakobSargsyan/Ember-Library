// app/routes/libraries/index.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('library').then(function(response){
    	return response;
    });
  },

  actions:{
  	deleteLibrary:function(id){

  	},
  	
  }

});