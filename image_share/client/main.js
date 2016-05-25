import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

if (Meteor.isClient){
	console.log("I am on the clientaaaaaa1");
  var image_data = {
    img_src:"laptop.jpg",
    img_alt:"some laptops"
  };
  Template.images.helpers(image_data);
}

if (Meteor.isServer){
	Meteor.startup(function(){
		// code to run on server at startup
		console.log("I am on the serverzzzzzz");
	})
}