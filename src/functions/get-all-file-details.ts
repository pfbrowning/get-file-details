import { getAllFilesSync } from "get-all-files";
import getFileDetails from "../get-file-details";
import { FileDetail } from "../file-details";

export const getAllFileDetails = (directory: string): FileDetail[] => {
  const allFilePaths = getAllFilesSync(directory).toArray();
  return allFilePaths.map((fp) => getFileDetails(fp));
};
