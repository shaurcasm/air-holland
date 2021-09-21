# Air Holland

## About

A simple project for an assignment. Full-stack development based on ReactJs, NodeJs and ExpressJs.

## Deployed Site

https://shaurcasm-air-holland.herokuapp.com/

## Script Details

### Install Script

> npm install

Installs dependencies.

### Development Script

> npm start

Starts the Dev build.
Concurrently start the server and the single page app or client. Client must have the proxy(in package.json) set to server's
port

### Build Script

.env file > NODE_ENV=production

To build the client:
> npm run build

Build script used by Heroku:
> npm heroku-postbuild

### Test Script

> npm test

Tests the client-side App.


## Notes

### User Story:

1. Instantly see the duties for today on app open.
2. Browse the event in the event list, see screen the the right for the format we require.
3. Tap an item and see all details 
4. Pull to refresh to reload the data 
5. Data needs to be available offline (after loaded initially)

### Technical Requirements:

1. For the icons, use “Font Awesome”; 
2. Try to mimic the events list as closely as possible; describe deviations (if any); 
3. Anything you add on the detail view to make the events more meaningful to show your empathy with the target audience of the app, is appreciated. 
4. We allow the assignment to be created in any mobile hybrid techstack that is TypeScript based, such as Ionic, Angular jQuery Mobile, Cordova, React, NativeScript or React Native.