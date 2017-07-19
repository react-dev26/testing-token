# tokenAI #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
  This is a repository for TokenAI site

* Version
  1.0.0

### How do I get set up? ###

* Summary of set up
  We use yarn throughout running/testing the application.
  Webpack is the main tool.

1. Install dependencies:
  ```
  yarn
  ```

2. Run the development server:
  ```
  yarn start
  ```

3. Connect to http://localhost:8080

* How to run tests
  ```
  yarn test
  ```

* How to run test:coverage  
  ```
  yarn test:coverage
  ```

* How to run test:coverage && report
  ```
  yarn test:coverage && yarn test:coverage:report
  ```
* Deployment instructions
  It is deployed to heroku.

  ```
  heroku login
  ```

  ```
  cd tokenAI
  git init
  heroku git:remote -a "app name"
  ```

  ```
  git add .
  git commit -am "make it better"
  git push heroku master
  ```
