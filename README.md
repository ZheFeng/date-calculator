# DATE CALCULATOR

### Environment
This app is build base on nodejs. If you don't have nodejs installed in your system, here is the [instruction](https://nodejs.org/en/ "Install Nodejs").


### Start the app
To run the app, you just need to simply type ``npm start``, then the app will ask input (start and end date), enter the dates then you will see the result.

    > npm start

    > date-calculator@1.0.0 start /Users/zhefeng/development/date-calculator
    > node .

    Please enter the start date (DD/MM/YYYY):
    11/12/2015
    Please enter the end date (DD/MM/YYYY):
    22/12/2015
    11/12/2015 - 22/12/2015: 10 days

### Test the app
To run the test script, you need to install some dependencies, in this app, we using Mocha to do the test. So just type ``npm install``, then all dependencies will be installed.

    > npm install

    npm WARN package.json date-calculator@1.0.0 No license field.
    npm WARN deprecated graceful-fs@2.0.3: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
    mocha@2.4.5 node_modules/mocha
    ├── escape-string-regexp@1.0.2
    ├── diff@1.4.0
    ├── commander@2.3.0
    ├── supports-color@1.2.0
    ├── growl@1.8.1
    ├── debug@2.2.0 (ms@0.7.1)
    ├── mkdirp@0.5.1 (minimist@0.0.8)
    ├── jade@0.26.3 (commander@0.6.1, mkdirp@0.3.0)
    └── glob@3.2.3 (inherits@2.0.1, graceful-fs@2.0.3, minimatch@0.2.14)


After install the dependencies, we can start to do the test, in this app, all you need to do is type ``npm test``.

    > npm test

    > date-calculator@1.0.0 test /Users/zhefeng/development/date-calculator
    > mocha



      Calculator
        count days
          ✓ calculate the number of full days elapsed
          ✓ should never counted the first and the last day
          ✓ should count 0 if end date is before or equal the start date

      Utilities
        parseDate
          ✓ should return null if format not in DD/MM/YYYY. (eg. asdfasdf/asdf, asdfsdf)
          ✓ should return null if day, month or year is not an integer. (eg. 12/dd/1999)
          ✓ should return null if day, month or year is not a valid date number. (eg. 55/55/1999)
        formatDate
          ✓ should convert date object into to string with format DD/MM/YYYY
          ✓ should fill the 0 into interger under 10. (eg. 1/4/2015 - 01/04/2015)


      8 passing (13ms)
