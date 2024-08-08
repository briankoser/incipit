const Cache = require("@11ty/eleventy-cache-assets");
const FastCsv = require('@fast-csv/parse');

module.exports = async function() {
    console.log("Fetching Incipits csv…");
  
    const CSV_URL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSt8Et7iD9OfDenWcY3IsqiOAX38aGZA7658zZ3yz9esyobyMwdvgFwaxxzgApOteM3XktJc_utF9sy/pub?gid=0&single=true&output=csv`;
    let csvString = await Cache(CSV_URL, {
        duration: "1d",
        type: "csv"
    });

    const records = await new Promise((resolve, reject) => {
        const result = [];
        FastCsv.parseString(csvString, { headers: true })
            .on('data', row => result.push(row))
            .on('error', error => { 
                console.log(error);
                reject(error);
            })
            .on('end', () => resolve(result));
    });

    console.log(records);

    return records.sort((a, b) => {
        return a.book < b.book
    });
}