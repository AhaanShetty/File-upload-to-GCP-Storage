// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
 // Instantiates a client. Explicitly use service account credentials by
 // specifying the private key file. All clients in google-cloud-node have this
 // helper, see https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md


 // Makes an authenticated API request.
//  async function getBucket(){
//    try {
//      const [buckets] = await storage.getBuckets();
//
//      console.log('Buckets:');
//      buckets.forEach(bucket => {
//        console.log(bucket.name);
//      });
//    } catch (err) {
//      console.error('ERROR:', err);
//    }
// }



async function uploadFile() {
  // Uploads a local file to the bucket
  const filename = "";
  const bucketName = "";
  const projectId = ''
  const keyFilename = ''
  const storage = new Storage({projectId, keyFilename});
  const result = await storage.bucket(bucketName).upload(filename, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,
    // By setting the option `destination`, you can change the name of the
    // object you are uploading to a bucket.
    metadata: {
      // Enable long-lived HTTP caching headers
      // Use only if the contents of the file will never change
      // (If the contents will change, use cacheControl: 'no-cache')
      cacheControl: 'public, max-age=31536000',
    },
  });
  console.log(result[0].metadata.mediaLink);
  console.log(`${filename} uploaded to ${bucketName}.`);
}

uploadFile();
