// Paste the code from Firebase 
var config = {
    apiKey: "AIzaSyD_ZmsIoWyqztWxp2xVh4gkNbmdiyVFHTk",
    authDomain: "project-6961058089634139943.firebaseapp.com",
    databaseURL: "https://project-6961058089634139943.firebaseio.com",
    projectId: "project-6961058089634139943",
    storageBucket: "project-6961058089634139943.appspot.com",
    messagingSenderId: "1096151042336"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact88');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});