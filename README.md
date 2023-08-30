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

0. need to install pnpm on your OS.... 

"https://pnpm.io/installation"

or for Windows

"https://stackoverflow.com/questions/75365692/how-to-install-pnpm-on-windows"

This command worked for me:

"iwr https://get.pnpm.io/install.ps1 -useb | iex"

Ran this command in admin level powershell at some point before, may need to do the same:

"set-ExecutionPolicy RemoteSigned -Scope CurrentUser unrestricted"


1. Insert your MongoDB URI key into app/server.js line 31
2. Terminal: pnpm import
3. Terminal: pnpm install

See this if you have issues:

"https://dev.to/andreychernykh/yarn-npm-to-pnpm-migration-guide-2n04"

Live URL (not using pnpm yet):

https://titancommunitybank.herokuapp.com/
