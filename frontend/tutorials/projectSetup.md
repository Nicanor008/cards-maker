## Project Setup
The best way to setup react projects is to use [Create react app cli](https://create-react-app.dev/) from react team.
`npx create-react-app cards-maker`. This helps to save time and pain of setting up everything from scratch. Helps to focus on building your product. 

This is what I used for cards-maker and made some changes of scripts because of preferences, discussed on [Parcel Bundler Configuration section](./parcel.md).

## Folder Structure
As react is a library, there's is no specific folder structure to follow. But it's always good to follow a best practices, scalability and ease of use. Hence, I decided to use the most common approach structure as shown below.

```
cards-maker
└───client
│   │   src
│   │     │ __tests__
│   │     │ assets
│   │     │ components
│   │     │ containers
│   │     │ images
│   │     │ store
│   │     │ utils
│   │     │ App.js
│   │     │ index.css
│   │     │ logo.svg
│   │     │ setupTests.js
│   │   index.html
│   │   index.js
│   tutorials
│       │   projectSet.md
│       │   parcel.md
│───folder2
│       file021.txt
│───.eslintrc.json
│───.babelrc
│───.env.example
│───.gitignore
│───.prettierrc.js
│───.netlify.toml
│───.package.json
```