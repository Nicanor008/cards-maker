# Cards Maker Tutorial
## 🌱 Idea Background
We were sitting down with my friends on a chilly Saturday waiting for a game. 
> "Why don't we have a simple and easy app that the bride and groom can use to invite users without using the printed cards and paper", One of my friends suggested.

I thought for a second, that's an awesome idea. 
> "But I believe there's an app for that man", I brushed off


> "Which one then?" He asked convincing

I even had no idea if there was such an app. I took out my phone and started googling. Yeah there were some solutions but not the way were thinking of. 
> You IT guys should think of this stuff man, or what are you even doing." He murmured frustratingly

It was funny the way he said but it was true. On the next few weeks, I spent my free time researching on the relevant solutions. Even though we never had time to catch up and discuss on the idea, I started doing research, design and development.

## 🧰 Tools
- Node JS - API development
- React JS - Frontend library
> **Why NodeJS?** - I've been using NodeJS for a while on Restful API development. And since I was a sole developer then I had no option. Also, real time communication. [Cards Maker API documentation](https://cardsmaker.herokuapp.com/docs/)

**Why ReactJS?**
- Fast rendering on virtual DOM. This was important consideration as the solution was to use [What You See Is What You Get - WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) technique.
- Previous experience working on React projects
- Scalability especially to transform to mobile app, I would use React Native.
- Community support.

## ⚙️ Other Development tools
- Redux - open-source JavaScript library for managing application state.
- Redux-saga - Easily make asynchronous calls things like data fetching
- Bulma - CSS framework based on flexbox and sass
- Parcel - Frontend React bundler
- Netlify - Hosting frontend React JS solution
- Heroku - Hosting Backend Node JS solution

## 📟 Source Code: How to Get Started
- You must have Node installed, Check out on https://nodejs.org/en/download/
- Clone [this Cards Maker](https://github.com/Nicanor008/cards-maker.git) repo and open the project folder on your favorite IDE or editor.
- Install dependencies, `yarn` or `npm install` on terminal.
- Copy the `.env-example` file to `.env`
- On terminal, run the development environment, `yarn client` or `yarn start`.
- Open your favorite browser, and run `http://localhost:1234`

## 👨🏻‍🚀 Live Playground
[Frontend](https://cards-maker.netlify.app/create)

## 📛 Why the name `Cards Maker`
No special reason. Just what came into my mind. The aim of the solution is the make cards just the same any user will create a printed event car. Hence **Cards Maker**

## ⛏️ Problem Statement
Where I've grown, Eldoret, Kenya, whenever there's is an event, we print event card and send one person to go to every individual and give them the card. The long distance relaties can be called via a phone or still a letter has to be sent. Anything can happen, letters get lost or rained on. (Eldoret is highland place, so it's rainy mostly).Some people even forget they were invited to an event because there was no reminder.

## 🛣️ Roadmap
I work on this solution part time, hence the slow releases.
[Here](https://mm.tt/1476175414?t=P60NyMDd2G) is a list of complete and ongoing features and enhancements. Here is an overview.
![alt text](./client/src/images/roadmap.png)


## 🌀 Purpose
You can use Cards Makers to:
- Create and view Event Cards
- Invite users to read/edit event
- Share Event cards on social media
- Download Event cards as image(png/jpg) or pdf
- Use Template to create event cards

## 🎯 Target Audience
Generally any event invitation. This include but not limited to:
- Pre-Wedding & weddings
- Celebrations - birthdays, graduation, baby shower, job promotion etc
- Anniversaries

## 👨🏽‍🏫 👨‍💻 Code Tutorial
A simple tutorial of how I created an event card:
- [Project and folder structure Setup](./tutorials/projectSetup.md) - Getting started with React
- [Parcel Bundler Configuration](./tutorials/parcel.md)
- [User Flow](./tutorials/productAnalysis.md)
- [User Authentication](./tutorials/userAuthentication.md)
- [Creating event cards]
- [View Cards publicly](./client/src/containers/Cards/cards.js)
- [Managing User cards and user details](./client/src/containers/Cards/home/index.js)
- [Search Event Cards]((./client/src/containers/Cards/../../../../../client/src/components/cards/searchCard.js))
- [Share Event Cards in social media](./client/src/components/cards/shareButton.js)

## Cards Maker Overview Video
[![Cards Maker Intro](./client/src/images/landingPage.png)](https://youtu.be/GYcoQRYeojI "Cards Maker Intro")
