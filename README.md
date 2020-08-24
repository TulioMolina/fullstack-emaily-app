# fullstack-emaily-app

An email surveys SPA for collecting feedback from customers, built with Express.js and React.

Emaily provides an interface that allows to easily create and send simple yes/no question surveys, by using Sendgrid under the hood. It is mainly targeted to startups that need to collect data from their customers, but it could be used by anyone who wants to easily launch a survey. Conceptually, each survey has a cost of one credit, and users can buy 5 credits for 5$ with a credit card. This payment system is implemented with Stripe and it is currently in test mode, so instead of inputting a real credit card, you can use this fake data to acquire credits:
- Email: example@example.com
- Card number: 4242424242424242
- MM/YY: 12/25
- CVC: 123

This app uses Google OAuth 2.0 and cookies as authentication mechanism, implemented with Passport.js. MongoDB is used as database. The app and database were deployed to Heroku and Atlas, respectively.

## Technologies
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/), [React Router](https://reactrouter.com/), [Redux](https://redux.js.org/), [Redux Form](https://redux-form.com/8.3.0/)
- [MongoDB](https://www.mongodb.com/), [Mongoose](https://mongoosejs.com/)
- [Passport.js](http://www.passportjs.org/), [cookie-session](https://www.npmjs.com/package/cookie-session)
- [Sendgrid](https://sendgrid.com/), [@sendgrid/mail](https://www.npmjs.com/package/@sendgrid/mail)
- [Stripe](https://stripe.com/)
- [Materialize CSS](https://materializecss.com/)

## Local setup
- Clone the repo: `git clone https://github.com/TulioMolina/fullstack-emaily-app.git`
- Install dependencies: `npm install`
- Appropriately configure your development environment by creating and populating the `/config/dev.js` file with the following data:
  ```
  module.exports = {
  googleClientID: <google client ID>,
  mongoURI: <mongoDB instance URI>,
  cookieKey: <cookie key secret>,
  stripePublishableKey: <stripe publishable key>,
  stripeSecretKey: <stripe secret key>
  sendGridKey: <sendgrid key>,
  redirectDomain: "http://localhost:3000", 
  };
```
- Run locally on port 3000: `npm run dev`

Deployed app at this [link](https://tm-emaily.herokuapp.com).
