const fs = require('fs');
const http = require('http');
const https = require('https');
const url = require('url');

if (process.argv.length < 3) {
  console.error('Usage: node urls.js FILENAME');
  process.exit(1);
}

const filename = process.argv[2];

// Read the file containing the URLs
try {
  // store the read file contents
  var contents = fs.readFileSync(filename, 'utf8');
} catch (error) {
  // errors thrown by fs will be caught here
  console.error(`Error reading file: ${error.message}`);
  // kill the process and tell the shell it errored
  process.exit(1);
}

const urls = contents.split('\n').filter(Boolean);

urls.forEach((link) => {
  const { hostname, protocol } = url.parse(link);
  const client = protocol === 'https:' ? https : http;

  client.get(link, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      fs.writeFile(hostname, data, (err) => {
        if (err) {
          console.error(`Couldn't write to ${hostname}: ${err.message}`);
        } else {
          console.log(`Wrote to ${hostname}`);
        }
      });
    });
  }).on('error', (err) => {
    console.error(`Couldn't download ${link}: ${err.message}`);
  });
});
