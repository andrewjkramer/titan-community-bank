# titan-community-bank
Titan Community Bank is a full stack project that uses Node.js with Express, MongoDB, Bootstrap 5 for style and responsiveness, and Heroku for hosting.

Features:

- Real-time updating transaction list/balance/spending trends chart via API calls to server
- Responsive mobile and desktop design via Bootstrap, and data storage via MongoDB
- Accurate data capture and input sanitization via Regex-powered form validation

Future improvements:

- Multi-user sessions -- as of now all users share the same transaction data due to LocalStorage
- Possibly rebuild with React

Local installation:

1. Insert your MongoDB URI key into the .env.example file.
2. Terminal: npm install
3. Terminal: npm start

Local installation using Docker:

1. Insert your MongoDB URI key into the .env.example file.
2. Start Docker engine.
3. CLI: docker-compose up

Checkout the pnpm-test branch which uses the pnpm package manager rather than npm:

https://github.com/andrewjkramer/titan-community-bank/tree/pnpm-test

Live URL:

https://titancommunitybank.herokuapp.com/
