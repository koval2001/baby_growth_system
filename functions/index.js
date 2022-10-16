const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

exports.myFunctionName = functions.firestore
  .document('measures/{docId}')
  .onCreate((snap) => {
    const newValue = snap.data();
    const { title } = newValue;
    console.log('New document with title:' + title + ' was created');
  });
