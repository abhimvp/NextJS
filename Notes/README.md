# NextJS Notes

- App Router is future of building apps in NextJs and currently some companies still use Pages Router.If you're new to NextJS go with App Router.
  ![About App Router](Img/image.png)
- Next.js course Handbook - contains resources and links as part of learning from [instructor](https://innate-noodle-e82.notion.site/Next-js-Course-Handbook-d1ed7f83a8044ada8c933a11f7b70dc3).

## Next.js Fundamentals (including React)

- we really need to understand why the technologies exist & what problems are they trying to solve.
- let's understand - why next.js exists if react is being used by some many devs out there?
  - what problems NextJs solves & how does it make frontend development so much easier.
- what is Next.js?
  - It is a framework built on `top of React` that gives you the `flexibility` of building scalable apps by `allowing you to render content on the server`.A Full Stack Framework.you can also build backend as NextJS provides node server out of the box.
  - In `React` you always render content on the client.With NextJS, you can choose to do on the client and on the server by default on pages you want.
- Benefits of Next.js?
  ![alt text](Img/image_1.png)
  - Different Rendering Techniques:
    - With NextJS, you can choose how you want to render content on the page.
    - In React, you will always render content on the client side using client-side rendering & nothing happens on server.
    - Some of these techniques are: Static Side Generation (SSG), Server side rendering (SSR) & Incremental Site Regeneration (ISR).
    - If we have lot of blog posts, marketing content - then you want to use `Static Side Generation`. What happens in SSG is all your content gets pre-build on server & then the server will pass the content to the client & all this content is pre-built and cached. So your client is basically fetching cached content over and over. So you get a huge performance boost because of that reason. Ex: A list of products & list of blog posts and the application we will build (Static Coffee Stores) uses SSG.
    - `SSR` -> we can generate the site on the server, if you want to refresh data on page refresh that is SSR. you're rendering content on the Server, but each time as you refresh the page- you're rendering the content & refreshing the data again.Ex: use SSR for applications like Dynamic News feed, Netflix.
    - `ISR` -> incremental Site Regeneration -> best of both techniques -> You get SSG along with SSR -> able to generate page in advance part of build process and render content on server as well.
- Performance with NextJs?
  ![alt text](Img/image_2.png)
  - It is incredibly difficult to build performant applications. NextJS takes care of lot of complexity for us, so we don't want to worry about performance too much.
  - You get performance for free with Next.js
  - Some features that help with performance comes out of the box, those features are -> Code Splitting, Minifying files, Image Optimization, Pre-fetching assets.
  - Code Splitting is essentially a technique, that will help you divide your web app in `small chunks` so you can only load the chunk that is used by the current page.
    - in order to do code splitting in react , you need to bring in more packages and also learn how to do code splitting. But NextJS it already takes care of it for you. So you can focus on building the application.It comes out of the box. Don't have to write any special code for it.
    - Next build provides the optimized build of your application. it creates chunks in a way when you visit a page the server only loads the chunks of that page we're trying to visit but not entire app.
  - Code minification - gets rid of special characters, white spaces and so on to make the file size really tiny. So the files that gets packaged to the browser are really small. Therefore you get a huge performance boost because of that as well. In react, we had to do code minification using webpack , we had to learn all of that.
  - Image Optimization : the next image component provided by NextJS - which optimizes the images automatically. NextJS instead of using image tag from the browser - it will use Image Component from next.js - serves the image based on browser size -> mobile - small , browser - large.
  - Pre-fetching assets - whenever you visit a page, NextJS will automatically pre-fetch the assets for the next page you're going to visit. So when you click on the link, it will load instantly.
- Image Component in Next.js:
  - Based on specific view port, it automatically going to render a different file size, which helps so much with performance.
  - pre-fetching feature of next.js : performant application because we're only downloading the specific image as the user is about to go to that area.
- File based Routing and SEO:
  ![alt text](Img/image_3.png)
  - Next.js has intuitive file based routing system. The image above is example of Next.js project, which consists of pages directory, the minute you create a new file under pages directory, you automatically have a route as we see in above image. No need to install additional package like react-router in create-react-app. This specific pages has also support for dynamic page routes as well.
  - it also helps with performance. If you go to a specific route in next.js and next.js only loads that route & resources needed. if you share a bunch of code between routes , next.js also takes care of chunking that part of code.
  - next.js also has this specific api folder. Which holds all the backend logic, all the server side code of our project. any route you create inside api folder is essentially a server side route.
  - SEO is important for any application, next.js has built-in support for SEO. It automatically generates meta tags and other things that are required for SEO. In react, we had to use third party packages like react-helmet to do that.
    - SEO stands for Search Engine Optimization.A language for the Bots.if you configure your web app to have specific properties such as have proper titles, have metadata that becomes the language of your web app to communicate with bots, so that we're making the life of bots easier to discover our content.
      ![alt text](Img/image_4.png)
    - we publish or deploy our app -> a bot will go and crawl your page as it discovers it -> tried to understand what the page is about -> then it ranks our page -> displays your page on Google.
    - Next.js has built-in support for SEO, it automatically generates meta tags and other things that are required for SEO.
- Serverless Functions with next.js:
  ![alt text](Img/image_5.png)
  - In the above image the file - hello.js is actually a serverless function - what is the advantage here? -> why do we want to make sure our frontend talk to the backend.The minute we call /api/hello -> it will wake up the server & start a brand new node server & execute the code inside & shuts down the server.

## App Router - Project #1: Build Your First Next App

### Project Overview: What Are We Building?

- We will be building an app called `Coffee Connoisseur` - this project will teach you all the fundamentals of next.js & will be diving into lot of complex topics.
- Discover local coffee shops

  - By default you will see a list of Coffee shops in your location, which are displayed in card components.
  - Each card has a hover state and is also clickable.
  - when we click on a card we should see details of that coffee shop.
  - when we click on Go Back -> we should be going to home page.
  - When we click on View stores nearby -> it will show coffee shops near your location making use of our latitude and longitude & gives us list of shops in that surrounding location.
  - we will state changes when we click on something.
  - even we refresh the page the information persists.
  - we will be using Air table to store the data.
  - this application is built with TailWindCSS as well.

- Note : Next.js 15 brings a significant performance boost to your applications, making them faster and more efficient. The new version also offers a better developer experience with improved features and tools. Most importantly, we get enhanced TypeScript support, making our code more reliable and easier to maintain. By upgrading, we're future-proofing our application with the latest features and security updates.

### Create Next.js App Zero Config

- Go to [nextjs.org](https://nextjs.org/) official docs and let's start building an app by using what they recommend in the [documentation](https://nextjs.org/docs) and let's head over to [installation](https://nextjs.org/docs/app/getting-started/installation).
- Before you begin, make sure your system meets the following requirements: Node.js 18.18 or later.

```bash
abhis@Tinku MINGW64 ~/Desktop/NextJS (main)
$ node --version
v22.14.0
```

- Struck with this [error](https://github.com/vercel/next.js/discussions/76671).

  - Had to install - [Latest Microsoft Visual C++ Redistributable version](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)

- The quickest way to create a new Next.js app is using create-next-app, which sets up everything automatically for you. To create a project, run: `npx create-next-app@latest`

```bash
abhis@Tinku MINGW64 ~/Desktop/NextJS (main)
$ npx create-next-app@latest
√ What is your project named? ... discover-coffee-stores
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like your code inside a `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to use Turbopack for `next dev`? ... No / Yes
√ Would you like to customize the import alias (`@/*` by default)? ... No / Yes
Creating a new Next.js app in C:\Users\abhis\Desktop\NextJS\discover-coffee-stores.

Using npm.

Initializing project with template: app-tw


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- @tailwindcss/postcss
- tailwindcss
- eslint
- eslint-config-next
- @eslint/eslintrc


# then run server
abhis@Tinku MINGW64 ~/Desktop/NextJS/discover-coffee-stores (main)
$ rm -rf node_modules/

abhis@Tinku MINGW64 ~/Desktop/NextJS/discover-coffee-stores (main)
$ rm -rf package-lock.json

abhis@Tinku MINGW64 ~/Desktop/NextJS/discover-coffee-stores (main)
$ rm -rf .next/

abhis@Tinku MINGW64 ~/Desktop/NextJS/discover-coffee-stores (main)
$ pnpm install
Packages: +326
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 397, reused 301, downloaded 30, added 326, done

dependencies:
+ lightningcss-win32-x64-msvc 1.30.1
+ next 15.4.6
+ react 19.1.0 (19.1.1 is available)
+ react-dom 19.1.0 (19.1.1 is available)

devDependencies:
+ @eslint/eslintrc 3.3.1
+ @tailwindcss/postcss 4.1.12
+ @types/node 20.19.11 (24.3.0 is available)
+ @types/react 19.1.10
+ @types/react-dom 19.1.7
+ eslint 9.33.0
+ eslint-config-next 15.4.6
+ tailwindcss 4.1.12
+ typescript 5.9.2

╭ Warning ───────────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│   Ignored build scripts: @tailwindcss/oxide, sharp, unrs-resolver.                         │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.   │
│                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────╯

Done in 21.3s using pnpm v10.10.0

abhis@Tinku MINGW64 ~/Desktop/NextJS/discover-coffee-stores (main)
$ pnpm approve-builds
√ Choose which packages to build (Press <space> to select, <a> to toggle all, <i> to invert selection) · @tailwindcss/oxide, sharp, unrs-resolver
√ The next packages will now be built: @tailwindcss/oxide, sharp, unrs-resolver.
Do you approve? (y/N) · true
node_modules/.pnpm/@tailwindcss+oxide@4.1.12/node_modules/@tailwindcss/oxide: Running postinstall script, done in 387ms
node_modules/.pnpm/sharp@0.34.3/node_modules/sharp: Running install script, done in 276ms
node_modules/.pnpm/unrs-resolver@1.11.1/node_modules/unrs-resolver: Running postinstall script, done in 251ms

abhis@Tinku MINGW64 ~/Desktop/NextJS/discover-coffee-stores (main)
$ pnpm run dev

> discover-coffee-stores@0.1.0 dev C:\Users\abhis\Desktop\NextJS\discover-coffee-stores
> next dev

   ▲ Next.js 15.4.6
   - Local:        http://localhost:3000
   - Network:      http://192.168.29.186:3000

 ✓ Starting...
 ✓ Ready in 4.9s
 ○ Compiling / ...
 ✓ Compiled / in 12.8s (617 modules)
 ⚠ Fast Refresh had to perform a full reload due to a runtime error.
 GET / 200 in 13844ms
 GET /_next/static/webpack/b6946bd147f66071.webpack.hot-update.json 404 in 14086ms
 GET / 200 in 118ms
```

- Install Extensions in VSCODE:

  - ES7 React/Redux/GraphQL/React-Native snippets
  - Dracula Theme Official
  - ESLint
  - GitLens
  - JavaScript and TypeScript Nightly
  - Quokka.js
  - Prettier - Code Formatter
  - Tailwind CSS IntelliSense

- [Next.js Setup project Walkthrough](https://github.com/abhimvp/NextJS/blob/main/discover-coffee-stores/README.md)
