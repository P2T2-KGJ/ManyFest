# ManyFest

![GitHub language count](https://img.shields.io/github/languages/count/P2T2-KGJ/KGL)

## Description

Collection tracking and sharing website, where a user can add, edit, and delete items and collections.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)
- [License](#license)

## Installation

Utilizing ManyFest locally will require an ['AWS S3'](https://aws.amazon.com/s3/) account, as S3 is the database utilized by the Multer-S3 dependency for photo storage.

Once the .env file has been established with the required info, hosting the application locally as follows:

Install required dependencies:

```console
$ npm i
```
Generate the mySQL database:

```console
$ mysql -u root -p < db/schema.sql
```

Utilize available seed data:

```console
$ npm run seed
```

  Start the server:

```console
$ npm start
```

  View the website at: http://localhost:3001

  Heroku Deployed App: https://manyfestapp.herokuapp.com/

## Usage

to-do

## Contact

Find more projects at:

[github.com/freyaliesel](https://github.com/freyaliesel)

[github.com/JesseComeau](https://github.com/JesseComeau)

[github.com/GlennJohnYC](https://github.com/GlennJohnYC)

## License

MIT License

Copyright (c) [2022] [KGY]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
