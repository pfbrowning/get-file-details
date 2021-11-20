import getFileDetails from './get-file-details'

if (process.argv.length < 3) {
  console.log('Pass the absolute path of the file that you want to test against as a parameter')
  process.exit()
}

const filePathArgument = process.argv[2]

const details = getFileDetails(filePathArgument)

console.log('output', details)
