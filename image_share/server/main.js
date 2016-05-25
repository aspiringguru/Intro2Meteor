import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  console.log("I am in the Meteor.startup.");
});

if (Meteor.isClient){
	console.log("I am on the client. bbbbb");
}

if (Meteor.isServer){
	Meteor.startup(function(){
		// code to run on server at startup
		console.log("I am on the server. cccccc");
	})
}
