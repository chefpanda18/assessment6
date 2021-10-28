const fs = require('fs');
const express = require('express');
let axios = require('axios');

fs.readFile('urls.txt', 'utf8', function (err, data) {
    if (err) {
		// handle possible error
		console.error(err);
		// kill the process and tell the shell it errored
		process.exit(1);
	}
    let urls = data.trim().split('\n')      

    let results = urls.map(async (url) => {
        return await axios.get(url);
    });

    Promise.allSettled(results).then(data => {

        data.forEach((result) => {
            
             if(result.status === 'fulfilled') {
                let domain = getDomain(result.value.config.url)

                fs.writeFileSync(domain, result.value.data)
                console.log('wrote to: ' + domain)

            } else {
                console.log("Couldn't download " + result.reason.config.url)
            }
        });

    })


        
});

function getDomain(url) {
	const urlObject = new URL(url);
	const hostName = urlObject.hostname;

	// The regular expression below works with .com, .net, .org and other top level domain names
	let domainName = hostName.replace(/^[^.]+\./g, '');
	return hostName;
}