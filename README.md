# Practice-Template

If you were starting off with a completely empty folder do steps 1-4, otherwise run npm install and start at #5:

//install package.json in directory
1) npm init 

//install dependencies into package.json file as devs
//devs are something you normally would not call in your js/html files
2) create package.json file
   npm install 
   npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react express nodemon path webpack

//install dependencies into package.json
//these you would normally call in your file e.g. "import React from 'react'"
3) npm install --save react react-dom

//import webpack (should be provided)
4) copy webpack from prior files

//create script in package.json to init webpack and create/monitor files needed
5) "build": "webpack -w"

//run script to invoke all dependencies and create bundle.js file
//note that you would normally script bundle.js in your index.html file so it would have access to index.jsx and everything else it imports.  Note that this webpack has been configured to create certain folders
6) npm run build

7) create your html page and script bundle.js at bottom of your body and start coding!