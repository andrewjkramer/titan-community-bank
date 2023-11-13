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

1. Insert your MongoDB URI key into the .env.example file, uncomment related code in server.js (lines 10-14).
2. Terminal: npm install
3. Terminal: npm start

Checkout the pnpm-test branch which uses the pnpm package manager rather than npm:

https://github.com/andrewjkramer/titan-community-bank/tree/pnpm-test

Live URL:

https://titancommunitybank.herokuapp.com/
