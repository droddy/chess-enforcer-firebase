import * as functions from "firebase-functions";
import {getNewBoard, movePiece} from "./board-commands";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info(request.body.name);
//   //   functions.logger.info(request.rawBody, {structuredData: true});
//   let result = '';
//   if (request.body.name && request.query["name"]) result =
// `${request.body.name} ${request.query["name"]}`
//   else result = `${request.query["name"] || request.body.name}`;
//   response.send(`${result},  Hello from Firebase!`);
// });

export const getNewChessBoard = functions.https.onRequest(
  (_request, response) => {
    response.send(getNewBoard());
  });

export const moveChessPiece = functions.https.onRequest(
  (request, response) => {
    // fromSquare: Square, toSquare: Square, board: Board, currentTeam: Team
    response.send(movePiece(
      request.body.fromSquare,
      request.body.toSquare,
      request.body.board,
      request.body.currentTeam));
  });
