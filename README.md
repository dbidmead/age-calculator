# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [The challenge](#the-challenge)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)

## The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

## Links

- Solution URL: [https://dbidmead.github.io/age-calculator](https://dbidmead.github.io/age-calculator)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JS for form validation and DOM manipulation

## What I learned

### Access today's date in JS

```js
const today = new Date();

const day = today.getDate();
const month = 1 + today.getMonth();
const year = today.getFullYear();

const TODAY = {
  day: day,
  month: month,
  year: year
};

console.log(`Today's date is ${TODAY.month} ${TODAY.day}, ${TODAY.year}`)
```
Note that getMonth() returns months indexed at 0, so for display purposes add 1 to that value.

### Prevent page refresh on form submit if not desired

```js
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
})
```

### Change child element properties based on parent class in CSS

```html
<div class="error" id="parent">
  <div id="child"></div>
</div>
```

```css
#parent {
  color: black;
}

#child {
  color: green;
}

.error>#child {
  color: red;
}
```
By using the > connector, if #parent ever gains the class "error", it will cause #child styles to change.

## Author

- GitHub - [@dbidmead](https://github.com/dbidmead)
- Frontend Mentor - [@dbidmead](https://www.frontendmentor.io/profile/dbidmead)