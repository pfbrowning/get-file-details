import { FileDetail } from "./file-details";
import * as fsPath from 'path';
import * as fs from 'fs';

/**
 * Synchronously examines the file at the specified path
 * @param absolutePath The absolute file path of the file that we want to know more about
 * @returns A promise which produces an object detailing the most basic properties of a file
 */
const getFileDetails = (absolutePath: string): FileDetail => {
    const {name: fileRoot, ext: fileExtension, base: fileName, dir: directory} = fsPath.parse(absolutePath);
    const {size: fileSizeInBytes, mtime: lastModifiedTimeAsJsDate} = fs.statSync(absolutePath);
    const fileSizeInMb = fileSizeInBytes / (1024 * 1024);
    const lastModifiedTimestampInMs = lastModifiedTimeAsJsDate.getTime();
    const lastModifiedISODateString = lastModifiedTimeAsJsDate.toISOString();

    return {
        fileRoot,
        fileName,
        fileExtension,
        directory,
        absolutePath,
        fileSizeInBytes,
        fileSizeInMb,
        lastModifiedTimestampInMs,
        lastModifiedISODateString,
    }
};

export default getFileDetails;