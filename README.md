# Swipeable Approval Cards

Swipeable/draggable cards to positive or negative actions, in the style of the Tinder or Linkedin mobile apps.

## Checking it out

- `git clone` the repository
- `cd` into its root directory and `npm install`
- `npm start` to start the webpack development server
- Open your favourite browser and navigate to `localhost:8080`!

You can have a little peek behind the scenes by opening up the dev tools, with <kbd>Ctrl</kbd>+<kbd>H</kbd>!

For a more optimized-for-production build of the javascript, run `npm run build`. Put the resulting `bundle.js` into any folder with a html file pointing to it. So long as that html contains an element with an id of "approval-app" and a link to the [Material Design Icons Font], you should be able to try the component out with the scenario of your choice!

## Testing

To run the tests, simply run `npm test`.

## Wishlist

- Animate the assessed card (transition to `transform: translateX(20rem); opacity: 0`?)
- Feedback for the user after the assessment (Via toast?)
- Filter the employees, dovetail into showing the approved ones when the stack is empty

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[Material Design Icons Font]: 'http://google.github.io/material-design-icons/'
