import * as functions from "firebase-functions";
import {getNewBoard, movePiece} from "./board-commands";

export const getNewChessBoard = functions.https.onRequest(
  (_request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.send(getNewBoard());
  }
);

export const moveChessPiece = functions.https.onRequest((request, response) => {
  // fromSquare: Square, toSquare: Square, board: Board, currentTeam: Team
  const args = JSON.parse(request.body);
  functions.logger.debug(args);
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.send(
    movePiece(
      args.fromSquare,
      args.toSquare,
      args.board,
      args.currentTeam
    )
  );
});
