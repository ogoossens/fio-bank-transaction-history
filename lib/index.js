"use strict";

/*
  *
  * Used FIO source: https://www.fio.sk/docs/cz/API_Bankovnictvi.pdf
  * Also attached in GIT project
  *
 */

// External modules
const fetch = require('node-fetch');
const moment = require('moment');

// Module settings
let fioURL = "https://fioapi.fio.cz/ib_api/rest/periods/";
let fioToken = "";

// For debugging
let showURL = false;

function setToken(token) {
  fioToken = token;
}

function setURL(url) {
  fioURL = url;
}

function showRequestURL(boolean) {
  showURL = boolean;
}

function getHistoryForLastDays(amountOfDays) {
  return new Promise((resolve, reject) => {
    if (amountOfDays) {
      let todayDate = moment();
      let fromDate = moment().subtract(amountOfDays, 'days');
      getHistoryFromToDate(fromDate.format("YYYY-MM-DD"), todayDate.format("YYYY-MM-DD"))
        .then((jsonResult) => {
          resolve(jsonResult);
        })
        .catch((error) => {
          reject(error);
        });
    } else {
      reject("Set number of days to check");
    }
  });
}

function getHistoryFromToDate(dateFrom, dateTo) {
  return new Promise((resolve, reject) => {

    if (fioToken) {

      // Build the request URL
      let requestUrl = fioURL + fioToken + "/" + dateFrom + "/" + dateTo + "/transactions.json";

      // Debug - show URL
      if (showURL) {
        console.log(requestUrl);
      }

      // Call the FIO API for results
      fetch(requestUrl, {method: "Get"})
        .then(res => res.json())
        .then((jsonResult) => {

          // All seems ok - resolve
          resolve(jsonResult);
        })
        .catch(error => {

          // Error encountered
          reject("Error calling FIO: " + error);
        });
    } else {
      reject("FIO token not set. Use setToken(<token>) first.");
    }
  });
}

module.exports.setToken = setToken;
module.exports.setURL = setURL;
module.exports.getHistoryForLastDays = getHistoryForLastDays;
module.exports.getHistoryFromToDate = getHistoryFromToDate;
module.exports.showRequestURL = showRequestURL;
