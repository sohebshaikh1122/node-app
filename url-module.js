const { log } = require('console');
const url = require('url');

const urlString = "https://us02web.zoom.us/j/8748449745?pwd=IQelRYADLrADpEUMwoI4JdwalXEyID.1&omn=82184057048";

const urlObject = url.parse(urlString, true);
console.table(urlObject);
console.log(`Protocol: ${urlObject.protocol}`);
console.log(`--------------------------------------`);
console.log(`Host name: ${urlObject.hostname}`);
console.log(`--------------------------------------`);
console.log(`path parameter : ${urlObject.path}`);
console.log(`--------------------------------------`);
console.log(`Query parameter:`);
const queryParameter = urlObject.query;
for (const key in queryParameter) {
        const element = queryParameter[key];
        console.log(`${key}==>${element}`);
}
console.log(`--------------------------------------`);
console.log(`============ url format method==========`);
const urlFormat = url.format({
    protocol : "https",
    hostname : "www.assignment.com",
    pathname : "/path",
    query : {
        query1 : "value",
        query2: "value",
    },
});
console.log(urlFormat);


