import { getAllFileDetails } from "./functions/get-all-file-details";
import getFileDetails from "./get-file-details";

enum OperationType {
  getFileDetails,
  getAllFileDetails,
}

const operation: OperationType = OperationType.getAllFileDetails;
const fileDetailsPath = "";
const allFileDetailsPath = "";

switch (operation as OperationType) {
  case OperationType.getFileDetails:
    console.log("getFileDetails", getFileDetails(fileDetailsPath));
    break;
  case OperationType.getAllFileDetails:
    console.log("getAllFileDetails", getAllFileDetails(allFileDetailsPath));
    break;
  default:
    throw new Error("Unsupported operation type");
}
