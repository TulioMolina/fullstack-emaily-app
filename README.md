# [fullstack-emaily-app](https://tm-emaily.herokuapp.com)

An email survey web app for collecting feedback, built with Express.js and React.

Emaily provides an interface that allows users to easily create and send simple yes/no question surveys by using, under the hood, [Sendgrid](https://sendgrid.com/) and its event webhook feature to monitor and update survey results. Only the first vote per customer is taken into account. Emaily is mainly targeted to startups that need to collect data from their customers, but it can be used by anyone who wants to easily launch an email survey.

Conceptually, each survey costs 1 credit, and signed in users can buy 5 credits for 5$ with a credit card. The payment system is implemented with [Stripe](https://stripe.com/), currently on test mode; so instead of inputting a real credit card, the following fake data can be used to acquire credits for free:
- Email: example@example.com
- Card number: 4242424242424242
- MM/YY: 12/25
- CVC: 123

This app employs [Google OAuth 2.0](https://developers.google.com/identity/protocols/oauth2/web-server) and cookies as authentication mechanism, which is implemented with [Passport.js](http://www.passportjs.org/). [MongoDB](https://www.mongodb.com/) is used as database system. The front end of the app was developed with [React](https://reactjs.org/) and [Redux](https://redux.js.org/). The app and database were deployed to [Heroku](https://devcenter.heroku.com/) and [Atlas](https://www.mongodb.com/cloud/atlas), respectively.

## Technologies
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/), [React Router](https://reactrouter.com/), [Redux](https://redux.js.org/), [Redux Thunk](https://www.npmjs.com/package/redux-thunk), [Redux Form](https://redux-form.com/8.3.0/)
- [MongoDB](https://www.mongodb.com/), [Mongoose](https://mongoosejs.com/)
- [Passport.js](http://www.passportjs.org/), [cookie-session](https://www.npmjs.com/package/cookie-session)
- [Sendgrid](https://sendgrid.com/), [@sendgrid/mail](https://www.npmjs.com/package/@sendgrid/mail)
- [Stripe](https://stripe.com/)
- [Materialize CSS](https://materializecss.com/)

## Local setup
- Clone the repo: `git clone https://github.com/TulioMolina/fullstack-emaily-app.git`
- Install both server and client side dependencies: `npm install && npm install --prefix client`
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

- Run locally on ports 3000 (front end) and 5000 (back end): `npm run dev`

Deployed app at this [link](https://tm-emaily.herokuapp.com).

## Usage example

1) Landing page, log in with Google account:

![1](https://github.com/TulioMolina/fullstack-emaily-app/blob/master/demo-images/1.png)

2) Empty dashboard, add credits to create a survey:

![2](https://github.com/TulioMolina/fullstack-emaily-app/blob/master/demo-images/2.png)

3) Input fake credit card data:

![3](https://github.com/TulioMolina/fullstack-emaily-app/blob/master/demo-images/3.png)

4) Five credits added, click the plus sign button for survey creation form:

![4](https://github.com/TulioMolina/fullstack-emaily-app/blob/master/demo-images/4.png)

5) Create your survey with your email as one of the recipients to receive the survey:

![5](https://github.com/TulioMolina/fullstack-emaily-app/blob/master/demo-images/5.png)

6) Review and submit your survey:

![6](https://github.com/TulioMolina/fullstack-emaily-app/blob/master/demo-images/6.png)

7) Dashboard showing recently created survey, 1 credit discounted:

![7](https://github.com/TulioMolina/fullstack-emaily-app/blob/master/demo-images/7.png)

8) Email received, click either 'yes' or 'no' to vote:

![8](https://github.com/TulioMolina/fullstack-emaily-app/blob/master/demo-images/8.png)

9) Refresh your dashboard to check the updated vote count:

![9](https://github.com/TulioMolina/fullstack-emaily-app/blob/master/demo-images/9.png)
