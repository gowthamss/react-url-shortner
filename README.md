# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

The challenge is to create a landing page for the URL shortening. In this chanllenge we have to use a API to get the original long url that the user has provided and shorten it and make it available to them by giving a copy option.

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   Shorten any valid URL
-   See a list of their shortened links, even after refreshing the browser
-   Copy the shortened link to their clipboard in a single click
-   Receive an error message when the `form` is submitted if:
    -   The `input` field is empty

### Screenshot

![](./src/assets/desktop1.JPG)
![](./src/assets/desktop2.JPG)
![](./src/assets/desktop3.JPG)
![](./src/assets/desktop4.JPG)
![](./src/assets/mobile1.JPG)
![](./src/assets/mobile2.JPG)
![](./src/assets/mobile3.JPG)
![](./src/assets/mobile4.JPG)

### Links

-   Solution URL: [Add solution URL here](https://github.com/gowthamss/react-url-shortner)
-   Live Site URL: [Add live site URL here](https://gowthamss.github.io/react-url-shortner/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   [React](https://reactjs.org/) - JS library
-   [Styled Components](https://styled-components.com/) - For styles

### What I learned

In this challenge, I used React to create my first own challenge. So, I feel more confident using React. And I also used Styed Components for the first time and I loved to use it and continue to use it in the upcoming projects. Also learned about browser storage.

```js
<Links
    key={index}
    shortLink={shortLink}
    onCopyClick={this.onCopyClick}
    ref={{
        copyLinkRef: this.copyLinkRef,
        copyBtnRef: this.copyBtnRef,
    }}
/>
```

### Continued development

Apply browser storage to store the short link results in the browser to always show some results.

### Useful resources

-   [Example resource 1](https://reactjs.org/docs/refs-and-the-dom.html) - This helped me use React ref's effectively.
-   [Example resource 2](https://reactjs.org/docs/forwarding-refs.html) - This will help understand how to pass forward ref's to child component.
-   [Example resource 3](https://stackoverflow.com/questions/53561913/react-forwarding-multiple-refs) - This helps in how to forward multiple ref's to children.
-   [Example resource 4](https://stackoverflow.com/questions/39597804/how-i-can-use-refs-to-change-styling-class-in-reactjs) - This helps in styling the React components by using ref's.
-   [Example resource 5](https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard) - This stackoverflow post is useful to understad copy to clipboard functionality.
-   [Example resource 6](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - This will help in understanding browser local storage.
-   [Example resource 7](https://stackoverflow.com/questions/43762363/how-to-store-an-array-of-objects-in-local-storage) - A good resource on understanding how to send complex data and retrieve using local storage API.

## Author

-   Website - [Add your name here](https://www.your-site.com)
-   Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gowthamss)
-   Twitter - [@yourusername](https://www.twitter.com/@gowthamss)
