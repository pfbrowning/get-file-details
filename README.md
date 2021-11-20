# get-file-details
A Node.js function which gathers basic details about a local file synchronously.

## Installation
```
npm i get-file-details --save
```
## Usage
```
import getFileDetails from 'get-file-details';

const fileDetails = getFileDetails('path/to/your/file');
```
## File Details
This function queries and returns the most basic essential properties for querying and manipulating files.  The naming convention used was inspired by [this Stackoverflow answer](https://stackoverflow.com/a/2235762).

```ts
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
```