# titan-community-bank
Titan Community Bank is a full stack project that uses Node.js with Express, MongoDB, Bootstrap 5 for style and responsiveness, and Heroku for hosting.

Features:

- Login/logout via LocalStorage
- Regex form validation/data sanitization
- Storage of transaction data via MongoDB
- Real-time updating transaction list/balance info/Chart.js via AJAX API calls to Express server

Future improvements:

- Multi-user sessions -- as of now all users share the same transaction data due to LocalStorage
- Possibly rebuild with React

Local installation:

0. need to install pnpm on your OS... via npm or other methods:

"https://pnpm.io/installation"

or for Windows (will need to uninstall Node.js first, this version is to use it as an exe which will allow you to use it as a nvm replacement to manage Node.js versions...)

"https://stackoverflow.com/questions/75365692/how-to-install-pnpm-on-windows"

This command worked for me:

"iwr https://get.pnpm.io/install.ps1 -useb | iex"

Ran this command in admin-level PowerShell at some point before, and may need to do the same:

"set-ExecutionPolicy RemoteSigned -Scope CurrentUser unrestricted"

May also need to run:

"pnpm setup" so it sets the central package store path.

1. Insert your MongoDB URI key into the .env.example file, uncomment line 11 in server.js, comment out line 12.
2. Terminal: npx npkill (Only necessary if you already previously installed with npm - deletes node_modules to convert to symbolic link pnpm version)
2. Terminal: pnpm import (Only necessary if you already previously installed with npm - this command uses the package-lock.json file.)
3. Terminal: pnpm install
4. Terminal: pnpm start
5. Browser: http://localhost:5000/

See this if you have issues:

"https://dev.to/andreychernykh/yarn-npm-to-pnpm-migration-guide-2n04"

Live URL (not using pnpm.. yet):

https://titancommunitybank.herokuapp.com/
