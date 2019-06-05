---
title: All Content
---

# MarfeelAlfred

![MarfeelAlfred](https://i.imgur.com/0zCBDhn.jpg)

## To commit
As we use [Commitizen](http://commitizen.github.io/cz-cli/) you can do either:
```
npx git-cz
```
Or
```
npm run commit
```

## To run
In order to run it we need to do: ``npm run start PUBLISHER_ID EXTRACTOR_NAME MODE`` where:
* ```PUBLISHER_ID```: for instance ```elconfidencial.com```
* ```EXTRACTOR_NAME```: for instance ```inventory```
* ```MODE```: for instance ```dev```. If left empty it will be production mode

e.g:
````bash
# in dev mode
npm run start lavanguardia.com inventory dev

# in prod mode
npm run start lavanguardia.com inventory

````

We can also run it directly with node:
````bash
# in dev mode
node ./src/alfred lavanguardia.com inventory dev

# in prod mode
node ./src/alfred lavanguardia.com inventory

````

## To test
````bash
# run test matching the patter and watch
npm test -- --t blackList
# or
npm run test blackList

# run test for all
npm run test
````

Currently there's a [bug](https://github.com/facebook/jest/issues/3436) with the watcher in OS X
In order to make it work you need to do:
````bash
$ brew update
$ brew install watchman

````

## Fixtures
In order to create fixtures to run with your test you have to run:
````bash
npm run fixture <uri of your article/section/mosaic>
````

This will create a file in ```tests/fixtures/``` with the wanted html

## Commands
``` bash
# To install all dependencies
npm i

# To validate (lint and tests)
npm run validate


# To lint all files
npm run lint


# To run all the tests
npm run test


# To run the test with a watcher
npm run test:watch

```

## Hooks

Before you commit any change it will validate all: 
````
eslint, tests
```` 

Before push your changes it will run all the test.
````
tests
```` 
## Tools we use
- **[Husky](https://github.com/typicode/husky)**
- **[Commitizen](http://commitizen.github.io/cz-cli/)**
- **[ESLint](https://eslint.org)**
- **[Jest](https://facebook.github.io/jest/)**
- **[Puppeteer](https://pptr.dev/)**
