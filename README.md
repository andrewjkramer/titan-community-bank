# titan-community-bank
Titan Community Bank is a full stack project that uses Node.js with Express, and MongoDB.

It began as two separate semester-long JavaScript projects built during COP 2803 Client-Side JavaScript and COP 2844 Server-Side JavaScript at St. Petersburg College.

Upon completion of the semester, I took the time to learn how to connect the client-side code to the server-side code via API requests, and hosted everything live on Heroku... while also learning Bootstrap.

Features:

- Node.js back end  
- Regex form validation  
- Login/logout via LocalStorage  
- Storage of transaction data via MongoDB  
- Real-time updating transaction list/balance info/Chart.js via AJAX API calls to Express server

Future improvements:

- Multi-user sessions -- as of now all users share the same transaction data due to LocalStorage
- Possibly rebuild with React

Local installation:

1. Insert your MongoDB URI key into app/server.js line 31  
2. Terminal: npm install  
3. Terminal: npm start  

Live URL:

https://titancommunitybank.herokuapp.com/
