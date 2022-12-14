# 15 Project 2: items List


Deployed App URL:
https://tempi-appthis.herokuapp.com/


[![License: MIT](https://github.com/ralphmenard0](https://opensource.org/licenses/MIT)

## Description

My application aims to make keeping track of gifts for family and friends much easier by allowing a user to create an account, create a gift by taking into account who the gift receiver is, and what they are getting for them. Our app also provides users with a page to view all of their existing gifts, as well as an option to delete, update a gift, and mark it as being completed. Overall, our project goal is to reduce the stress of keeping track of planned gifts for friends, co-workers, family, or others.

### Motivation

My motivation behind this project was initially to create an app that would allow the user to keep track of Christmas gifts, but we decided to shift our project to track gifts for any occasion.

## Table of Contents

- [Core Objectives Met](#Core)
- [Technologies Used](#Technologies)
- [Local Installation & Usage](#Local)
- [Deployed App](#Deployed)
- [Demo](#Demo)
- [License](#MIT)
- [Questions](#Questions)

## Core Objectives Met

1.  When a user views the homepage, they will find a site description and buttons to sign in or create an account.
2.  When a user attempts to sign in or create an account, they can sign in or create a password-protected account.
3.  When a user views the user's landing page in a logged-in state, they see a list of all the gifts they have added.
4.  When a user views the user's landing page in a logged-out state, they are redirected to the sign in page.
5.  When a user clicks the 'add' button to add a new gift, they have the opportunity to enter the gift recipient and description and to save the new gift.
6.  When a user clicks on the 'update' button associated with a specific gift, they are able to edit the recipient and description or to check off the gift as purchased, and to save the gift.
7.  When a user clicks on the 'save' button after having edited or added information about a gift, they are redirected to their user landing page, where the new or updated gift renders with its associated updates.

## Technologies Used

- JavaScript
- MySQL
- Node.js
- [NPM Express.js Package](https://www.npmjs.com/package/express)
- [NPM Handlebars.js Package](https://www.npmjs.com/package/handlebars)
- [NPM Sequelize ORM Package](https://www.npmjs.com/package/sequelize)
- [NPM Express-Session Package](https://www.npmjs.com/package/express-session)
- [NPM Cookies Package](https://www.npmjs.com/package/cookies)
- [NPM bcrypt Package](https://www.npmjs.com/package/bcrypt)
- [NPM TestCafe Package](https://www.npmjs.com/package/testcafe)
- [NPM Router Package](https://www.npmjs.com/package/router)
- [NPM dotenv Package](https://www.npmjs.com/package/dotenv)
- [NPM mysql2 Package](https://www.npmjs.com/package/mysql2)
- [NPM nodemon Package](https://www.npmjs.com/package/nodemon)
- [NPM connect-session-sequelize Package](https://www.npmjs.com/package/connect-session-sequelize?activeTab=versions)

## Local Installation & Usage

To use this app, you will need a MySQL Workbench account, and to have the app installed on your machine. Documentation with installation instructions are available [here.](https://dev.mysql.com/doc/workbench/en/wb-installing.html) 

STEP 1

    A1.1 Clone this gift-list repo to your machine.

STEP 2

From Visual Studio Code or the code editor of your choice:

    A2.1 Open the repo.  
    A2.2 Locate and open the .env.EXAMPLE file, located in the root directory.
    A2.3 Add your own MySQL Workbench Username and Password to the env.EXAMPLE file.
    A2.4 Re-name the file to .env (i.e. remove .EXAMPLE).
    A2.5 Save your changes.
    A2.6 Locate and open db\schema.sql.
    A2.7 Copy and paste the database schema into a new MySQL Workbench query tab and run it. Refresh and view your updated schemas to ensure that giftTracker_db now appears.

STEP 3

From your terminal, run:

    A3.1 npm i
    A3.2 npm run watch

STEP 4

From the modern browser of your choice:

    A4.1 Open http://localhost:3001.

You may now use the site to create a new account, sign in to a new one, and to add, edit, or delete gifts.

### TestCafe

A requirement of this assignment was to use a new technology that hadn't previously been used in class. Our group chose [TestCafe](https://www.npmjs.com/package/testcafe) to assist with end-to-end web testing. To utilize TestCafe for this app:

STEP 1

    TC1.1 Complete steps A1.1 to A3.1, above. 

STEP 2

From your terminal, run:

    TC2.1 npm run seed

STEP 3

To run tests, you will need two terminals open.  

From Terminal 1, run:

    TC3.1 npm run watch

From Terminal 2, run:

    TC3.2 npm run testcafe-ui
    TC3.3 TestCafe will open a browser window and run the programmed tests. Once tests are complete, Terminal 2 will show the tests run and passed.

STEP 4

From Visual Studio Code or the code editor of your choice:

    TC4.1 If you wish to run tests more than once, run the following from a new query tab before repeating the tests:
    
    USE gifttracker_db;
    DELETE FROM user where email = 'donald@smith.com';
    SELECT * FROM user;



## MIT License

&copy;2022 Ralph menard
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


