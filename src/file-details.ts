/** Represents the most notable basic properties of a file */
export interface FileDetail {
    /** The file name without an extension */
    fileRoot: string;
    /** The file name including its extension */
    fileName: string;
    /** The file extension including the preceeding dot */
    fileExtension: string;
    /** The directory path, excluding the filename */
    directory: string;
    /** The full path to the file, including the directory, filename, and extension */
    absolutePath: string;
    /** The file's size in megabytes */
    fileSizeInMb: number;
    /** The file's size in bytes */
    fileSizeInBytes: number;
    /** The last modified date represented as the number of milliseconds since the Unix Epoch */
    lastModifiedTimestampInMs: number;
    /** The last modified date represented in simplified ISO 8601 format */
    lastModifiedISODateString: string;
}