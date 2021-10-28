const urls = require('./urls');
const util = require('util');
const fs = require('fs');
const express = require('express');
let axios = require('axios');
const { response } = require('express');
var app = express();


function readFile(fileName) {
	return new Promise((resolve, reject) => {
	  fs.readFile(fileName, 'utf8', function (error, data) {
		if (error) return reject(error);

		// make each line separate item of lines array
		let lines = data.trim().split('\n')
		
		lines.forEach(line => {
			
			let domain = getDomain(line)

			axios.get(line)
			.then(response => {
				
				fs.writeFileSync(domain, response.data);
				console.log('wrote: ' + domain)
			}, error => {
				console.log(error.code + ' ' + domain)
			})
			

		})
  
		resolve();
	  })
	});
  }
  
  async function run() {
	await readFile('urls.txt');
  }
  
  run();


// fs.readFile('urls.txt', 'utf8', function(err, data) {
// 		if (err) {
// 			// handle possible error
// 			console.error(err);
// 			// kill the process and tell the shell it errored
// 			process.exit(1);
// 		}
// 		// otherwise success
// 		console.log(`file contents: ${data}`);
// 	});
	
// 	console.log('reading file');
// 	// file won't have been read yet at this point


function getDomain(url) {
	const urlObject = new URL(url);
	const hostName = urlObject.hostname;

	// The regular expression below works with .com, .net, .org and other top level domain names
	let domainName = hostName.replace(/^[^.]+\./g, '');
	return hostName;
}