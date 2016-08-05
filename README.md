# lets-try-angular-2-typescript

## Synopsis
This is a project for try out some of the new angular 2 features, and covers some of  the core fundamentals like :
  - Components
  - One-way data binding for read-only data
  - Bind component methods to user events
  - Services
  - Routing
  
## Installation
The repo do not include the modules that list in package.json, it will be installed from a package management
### Prerequisite
Install [Node.js® and npm] (https://nodejs.org/en/download/) if they are not already on your machine.
> Verify that you are running at least node v4.x.x and npm 3.x.x by running node -v and npm -v in a terminal/console window. Older versions produce errors.

#### Install packages

We install the packages listed in package.json using npm. Enter the following command in a terminal window with admin privileges (command window in Windows):

`npm install`

#### npm scripts

We've captured many of the most useful commands in npm scripts defined in the package.json:



- `npm start` - runs the compiler and a server at the same time, both in "watch mode".
`npm run tsc` - runs the TypeScript compiler once.
- `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
- `npm run lite` - runs the lite-server, a light-weight, static file server, written and maintained by John Papa and Christopher Martin with excellent support for Angular apps that use routing.
- `npm run typings` - runs the typings tool.
- `npm run postinstall` - called by npm automatically after it successfully completes package installation. This script installs the TypeScript definition files this app requires.

> The typings folder could not show up after `npm install`. If so, please install them manually. 
`npm run typings install`

## Testing

### Unit tests
#### Jasmine
We write our tests with the Jasmine test framework, in order to run its enter the following command.

`npm test`
#### Karma
We use Karma framework for run our test code in a real browser ( at the moment it has been configured in Chrome only ), enter the following command.

`npm run test:karma`

The `htmlReporter` is also wired in. That produces a prettier output; look for it in `~_test-output/tests.html`; this file is excluded from source control.

#### End-To-End (E2E)
BEFORE RUNNING THE FIRST TEST you must update the Selenium webdriver. Run `npm run webdriver:update` first time only.
Thereafter, run them with `npm run e2e`.
That command first compiles, then simultaneously starts the Http-Server at localhost:8080 and launches protractor.
A custom reporter (see `protractor.config.js`) generates a `_test-output/protractor-results.txt` which is easier to read; this file is excluded from source control.
> You can add the ability to test in multiple browsers, enabling `multiCapabilities` in `protractor.config.js`
> ```
> exports.config = {
>  ...
>   multiCapabilities: [
>	{
>	  'browserName' : 'chrome'
>	},
> 	{
> 	  'browserName' : 'firefox'
> 	}
>   ],
> ...
>``` 