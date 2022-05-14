# ManyFest

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub language count](https://img.shields.io/github/languages/count/P2T2-KGJ/KGL)
![GitHub top language](https://img.shields.io/github/languages/top/P2T2-KGJ/ManyFest)

## Description

Collection tracking and sharing website, where a user can add, edit, and delete items and collections.

Application utilizes node, express, express-session, aws-sdk, bcrypt, handlebars, multer, sequilize, mysql and tw-elements.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)
- [License](#license)

## Installation

Running a ManyFest clone will require an [AWS](https://aws.amazon.com/) account, as well as access to a MySQL database while run locally, or via JawsDB while hosted.

A `.env` file is required to host sensitive variable information, such as database name, user, password, and AWS S3 bucket information

- Install required dependencies via node package manager.

- Create the database

- Populate with provided seed data, or provide your own.

## Usage

The application demonstrates our ability to create and deploy an application using front and back-end frameworks using node/express via ORM and using MVC design pattern.

The application links to a database storing user, collection, item, and image information.

Users are able to sign up. Passwords are stored on the database encrypted via bcrypt. Users are also able to update their username/email address via the dashboard.

Users can view their list of collections via their dashboard, and create additional collections,.

From the collection view page, collections can be edited or deleted, and additional items can be added to the currently selected list. When adding a collection item, a user can choose to upload an associated photo (stored via AWS-S3).

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
