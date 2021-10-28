const urlObject = new URL('https://www.kindacode.com/article/node-js-get-domain-hostname-and-protocol-from-a-url/');
const hostName = urlObject.hostname;

// The regular expression below works with .com, .net, .org and other top level domain names
let domainName = hostName.replace(/^[^.]+\./g, '');

console.log(hostName)
console.log(domainName)
