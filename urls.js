const fs = require('fs');
const express = require('express');
let axios = require('axios');


fs.readFile('urls.txt', 'utf8', function (error, data) {
    if (error) return reject(error);

    // 1. break file text into lines array using .split('\n')
    let urls = data.trim().split('\n')      

    // 2. loop through each line
    urls.forEach(url => {
        //console.log(url)

        // 3. make get request using axios
        // 4. get domain name from url string and put in a variable

        let domain = getDomain(url);
        
        axios.get(url).then(response => {

            // 5. save returned data to a file named as domain name
            fs.writeFileSync(domain, response.data)
            console.log('wrote to: ' + domain)

        }, error => {
            // 6. handle axios error
            console.log('couldnt download: ' + url)
        })
    })
});

function getDomain(url) {
	const urlObject = new URL(url);
	const hostName = urlObject.hostname;

	// The regular expression below works with .com, .net, .org and other top level domain names
	let domainName = hostName.replace(/^[^.]+\./g, '');
	return hostName;
}