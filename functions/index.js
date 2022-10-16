const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

exports.myFunctionName = functions.firestore
  .document('measures/{docId}')
  .onCreate((snap, context) => {
    // Get an object representing the document
    // e.g. {'name': 'Marie', 'age': 66}
    const newValue = snap.data();

    // access a particular field as you would any JS property
    const { title } = newValue;

    console.log('New document with title:' + title + ' was created');
  });
