


![FIO](https://user-images.githubusercontent.com/8824657/111978900-b94ea080-8b04-11eb-89e0-871a25bf354f.png)



# fio-bank-transaction-history

 [![Version](https://img.shields.io/npm/v/fio-bank-transaction-history.svg)](https://www.npmjs.com/package/fio-bank-transaction-history) [![Downloads](https://img.shields.io/npm/dt/fio-bank-transaction-history.svg)](https://www.npmjs.com/package/fio-bank-transaction-history)

> **Unofficial** FIO BANK module to get FIO bank account transaction history

:heavy_check_mark: **FROM - TO** date request

:heavy_check_mark: **LAST X days** request




## :cloud: Installation

```sh
# Using npm
npm install --save fio-bank-transaction-history
```



## :computer: Usage

```js
const fio = require('fio-bank-transaction-history');
fio.setToken(" < YOUR FIO TOKEN >");

// Transactions in the last X days of the account history
fio.getHistoryForLastDays(6)
  .then((jsonResult) => {
    console.log(jsonResult);
  })
  .catch((error) => {
    console.log(error);
  });

// FROM - TO date function to access the account history
fio.getHistoryFromToDate("2021-02-13", "2021-03-13")
  .then((jsonResult) => {
    console.log(jsonResult);
  })
  .catch((error) => {
    console.log(error);
  });
```

## :information_source: Tips

```js
// For date format use moment.js
// To get today date in required format use
moment().format("YYYY-MM-DD");

// To find out if a transaction is "credit" or "debit" 
// just check the value of column1 "objem" (X > 0)?
```


## :page_facing_up: Options

```js
// Set different FIO URL
// Default is : https://www.fio.cz/ib_api/rest/periods/
fio.setURL(url);

// For debugging to see the called URL (can be tested in browser)
// Default is: false
fio.showRequestURL(true);
```




## :clipboard: Result
```js
// Full call response
accountStatement: {
info: {
  accountId: '2612345678',
  bankId: '8330',
  currency: 'EUR',
  iban: 'SK4783300000002612345678',
  bic: 'FIOZSKBAXXX',
  openingBalance: 1000.00,
  closingBalance: 2000.00,
  dateStart: '2021-03-17+0100',
  dateEnd: '2021-03-23+0100',
  yearList: null,
  idList: null,
  idFrom: 11111111111,
  idTo: 11111111111,
  idLastDownload: null
},
transactionList: { transaction: [Array] }
```

```js
// Single transaction from transactionList
// Example: result.accountStatement.transactionList.transaction[0]

column0: { value: '2021-02-13+0100', name: 'Datum', id: 0 },
column1: { value: -8.88, name: 'Objem', id: 1 },
column5: { value: '1349', name: 'VS', id: 5 },
...
```

```code
So if you need to access the CURRENCY for example you call
result.accountStatement.transactionList.transaction[0].column14.value;
```

![2021-03-23 00_28_34-FIO Banka API manual pdf - Adobe Acrobat Reader DC (32-bit)](https://user-images.githubusercontent.com/8824657/112072517-4845d200-8b72-11eb-90ab-a4b8c5dce86e.png)



## :question: Get Help
For bug reports and feature requests, open issues. :bug:




## :yum: How to contribute
Have an idea? Found a bug? Let me know :thumbsup:

Thanks! :heart:


<!--
## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:
-->


## :scroll: License

[MIT] © Oliver Goossens
