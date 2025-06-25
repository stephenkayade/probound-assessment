# ![Probound test](https://github.com/stephenkayade/probound-assessment/blob/master/public/images/login-page.png)
# WebApp
<table>
<tr>
<td>
   probound is revolutionizing the way businesses operate by providing intelligent digital workforce solutionshat drive growth and efficiency.

We're developing an enterprise-grade conversational AI platform that facilitates seamless human-machine interactions. Leveraging our cutting-edge LLM technology, businesses can create sophisticated AI agents that listen, reason, and respond with human-like intelligence and emotional depth, driving automated decision-making and action aligned with their strategic objectives.
</td>
</tr>
</table>


## Demo
Here is a working live demo of the test solution:  https://adediran-probound-assessment.vercel.app/


## Site

### Signup page

![](https://github.com/stephenkayade/probound-assessment/blob/master/public/images/signup-page.png)

### Responsive Signup page

![](https://github.com/stephenkayade/probound-assessment/blob/master/public/images/responsive-signup.png)

### Verification page

![](https://github.com/stephenkayade/probound-assessment/blob/master/public/images/verify-page.png)

### Login page

![](https://github.com/stephenkayade/probound-assessment/blob/master/public/images/login-page.png)

### Responsive Login page

![](https://github.com/stephenkayade/probound-assessment/blob/master/public/images/responsive-login.png)

### Forgot Password page

![](https://github.com/stephenkayade/probound-assessment/blob/master/public/images/forgot-page.png)

### Responsive Forgot Password page

![](https://github.com/stephenkayade/probound-assessment/blob/master/public/images/responsive-forgot.png)

### Reset Password page

![](https://github.com/stephenkayade/probound-assessment/blob/master/public/images/reset-page.png)

### Responsive Reset Password page

![](https://github.com/stephenkayade/probound-assessment/blob/master/public/images/responsive-reset.png)

### Development
Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request 

### Bug / Feature Request

If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue [here](https://github.com/stephenkayade/probound-assessment/issues) by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/stephenkayade/probound-assessment/issues). Please include sample queries and their corresponding results.


## Built with 


- [React](https://react.dev/) - A JavaScript library for building user interfaces

- [Vite](https://vite.dev/) - The Build Tool for the Web. Vite is a blazing fast frontend build tool powering the next generation of web applications.


- [Axios](https://axios-http.com/) - Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.

- [Polio Icons] - Include popular icons in your React projects easily with polio-icons, it allows you to include only the icons that your project is using.

- [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

- [React error boundary ](https://legacy.reactjs.org/docs/error-boundaries.html) - Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

- [React router dom ](https://www.npmjs.com/package/react-router-dom) - react-router-dom is a routing library for React applications that run in the web browser (DOM = Document Object Model). It allows you to create Single Page Applications (SPAs) by enabling dynamic routing—without reloading the page.

- [Tailwindcss ](https://tailwindcss.com/) - Tailwind is unapologetically modern, and takes advantage of all the latest and greatest CSS features to make the developer experience as enjoyable as possible.

- [Moment ](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript.

- [Classnames ](https://jedwatson.github.io/classnames/) - A simple javascript utility for conditionally joining classNames together

- [Jquery ](https://jquery.com/) - jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.

- [Universal Cookie ](https://www.npmjs.com/package/universal-cookie) - Universal Cookie is a JavaScript library that provides a consistent API for managing cookies in any JavaScript runtime environment (i.e., universal = works on both client and server). This is particularly useful in React applications

- [UUID](https://www.npmjs.com/package/uuid) - In React (and JavaScript in general), uuid is a popular library used to generate universally unique identifiers (UUIDs). These are 128-bit numbers used to uniquely identify information without significant risk of duplication.

- [Framer Motion](https://motion.dev/) - framer-motion is a powerful animation library for React that provides a declarative API to create smooth, physics-based, and complex animations with ease.


## How the App works

- [Signup](https://motion.dev/) - All users are expected to signup on the platform

- [Verification](https://motion.dev/) - All users must verify their emails before proceeding to onboarding

- [Onboarding](https://motion.dev/) - After verify their email they proceed to the go through the onboarding process

- [Onboarding](https://motion.dev/) - After a successful onboarding users then proceed to login into their accounts.


## folders in the root of the application
Here is a breakdown of folders in the Application
- [Node_Modules] - The node_modules folder is a critical directory in any JavaScript or TypeScript project, including React. It contains all the project dependencies (and their dependencies) that are installed via Node.js and npm (or yarn/pnpm).

- [Public] - the public folder is a special directory used to store static files that do not go through Webpack processing. These files are served as-is when the app is running.

public/
├── fonts
  ├── icons
    ├── fa (fontawesome icons)
    ├── fad (fontawesome icons)
    ├── fe (feather icons)
    ├── po (polio icons)
  ├── webfont - This is 
    ├── sora - Typography (font family)
├── images
  ├── assets - images used on the app are kept here
  ├── fav - favicons
├── manifest.json
└── vite.svg

- [Src] - In a React Vite app, the src folder (short for “source”) is the core directory where your application’s code lives. It contains all your JavaScript/TypeScript, React components, stylesheets, and other source files that are compiled, bundled, and optimized by Vite during development and production builds.

- .env
├── .gitignore
├── package-lock.json.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
├── vite.config.ts
└── vite.svg

src/
├── _data - A file that contains hard-coded data
  ├── icons
    ├── fa (fontawesome icons)
    ├── fad (fontawesome icons)
    ├── fe (feather icons)
    ├── po (polio icons)
  ├── webfont - This is 
    ├── sora - Typography (font family)
├── _theme
  ├── css - css files used in the app are kept here
  ├── fonts - favicons
    ├── icons
    ├── fa (fontawesome icons)
    ├── fad (fontawesome icons)
    ├── fe (feather icons)
    ├── po (polio icons)
  ├── webfont - This is 
    ├── sora - Typography (font family)
├── components
  ├── app - contains UI that is used in the entire App instead of a page
  ├── animations - contains reusable animation UI that is used in the entire App
  ├── partials - contains subfolders that contains very reusable UI components
├── context
  ├── user - contains three user context files that is used in the entire application.
  ├── types.tsx - contains action types that is used in the context
├── hooks - contains reusable custom hooks that extracts page logic and help separate logic from UI
├── pages
  ├── auth - The auth folder contains user authentication pages.
  ├── onboarding - The onboarding folder contains onboarding screens
├── routes - Contains application routes
├── utils - Contains utility files
├── App.tsx - Renders application routes
├── index.css - contains some application css styles
├── main.tsx - Renders the App.tsx component
├── vite-env.d.ts - tells the TypeScript compiler to include the type declarations from the vite/client module globally. It's similar to saying:

## [License] - no license
