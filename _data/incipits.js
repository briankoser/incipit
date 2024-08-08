const Cache = require("@11ty/eleventy-cache-assets");
const Csv = require('csv-string');

module.exports = async function() {
    console.log("Fetching Incipits csv…");
  
    const CSV_URL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSt8Et7iD9OfDenWcY3IsqiOAX38aGZA7658zZ3yz9esyobyMwdvgFwaxxzgApOteM3XktJc_utF9sy/pub?gid=0&single=true&output=csv`;
    let csvString = await Cache(CSV_URL, {
        duration: "1d",
        type: "csv"
    });

    const records = Csv.parse(csvString, { 
        output: "objects"
    });

    console.log(JSON.stringify(records));

    return records.sort((a, b) => {
        return a.Book < b.Book
    });
}