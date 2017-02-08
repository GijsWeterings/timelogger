# Timelogger project

[![Build Status](https://travis-ci.org/GijsWeterings/timelogger.svg?branch=master)](https://travis-ci.org/GijsWeterings/timelogger)
> **[:boom: See production site :boom:](https://timelogger.me)**

## Development Workflow


**4. Start a live-reload development server:**

```sh
npm run dev
```

> This is a full web server nicely suited to your project. Any time you make changes within the `src` directory, it will rebuild and even refresh your browser.

**5. Testing with `mocha`, `karma`, `chai`, `sinon` via `phantomjs`:**

```sh
npm test
```

> 🌟 This also instruments the code in `src/` using [isparta](https://github.com/douglasduteil/isparta), giving you pretty code coverage statistics at the end of your tests! If you want to see detailed coverage information, a full HTML report is placed into `coverage/`.

**6. Generate a production build in `./build`:**

```sh
npm run build
```


**5. Deploy the project on Firebase Hosting:**

```sh
npm install -g firebase-tools
firebase login
firebase deploy
```

> Obviously, not everybody can deploy the site, you need to be a Firebase admin.
