import * as functions from 'firebase-functions';
const express = require('express');
const app = express();

app.get ('/data', (request: any, response: any) => {response.json({value: "Hello World !"});
});
exports.api = functions.https.onRequest(app);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
/*
 export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
 });
*/
