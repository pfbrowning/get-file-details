import { getAllFilesSync } from "get-all-files";
import { type FileDetail } from "../models/file-detail";
import { getFileDetails } from "./get-file-details";

export const getAllFileDetails = (directory: string): FileDetail[] => {
  const allFilePaths = getAllFilesSync(directory).toArray();
  return allFilePaths.map((fp) => getFileDetails(fp));
};
