# BrowseAi - Product Engineer Frontend Assignment

This project developed and designed by [Masud Afsar](https://github.com/masudafsar) base on the given [repository](https://github.com/BrowseAI-Official/front-end-assignment) and the [guide note](https://browseai.notion.site/browseai/Product-Engineer-Frontend-Assignment-3baf4513f8914c9ba08f982c97dc040d).



### How to run the project

We can run the project on `development` or `production` mode. First you need to install the dependencies with command below:

```sh
npm install
```

Then with this command we can start the project in `development` mode:

```sh
npm run dev
```

After running development server open it in your browser [localhost:5173](http://localhost:5173/).

And for run the project in `production` mode you need to `build` it first and after that use `preview` script to run a server:

```sh
npm run build
npm run preview
```

The production web server runs on port 4173, so you can see it in [localhost:4173](http://localhost:4173/).

At the end for opening the documentation on storybook use command below:

```sh
npm run storybook
```



### Installed packages

Here I list packages I have installed in the project with description about them.

| Package                        | Environment | Description                                                 |
| ------------------------------ | ----------- | ----------------------------------------------------------- |
| @tanstack/react-query          | Production  | Hooks for fetching, caching and updating asynchronous data  |
| @tanstack/react-query-devtools | Production  | Dev Tools of `react-query`                                  |
| react-router-dom               | Production  | A package for handling navigating and routing between pages |
| react-window                   | Production  | A package for implementing virtualized table                |
| react-virtualized-auto-sizer   | Production  | A package for auto sizing virtualized table                 |
| sass                           | Development | SCSS file compiler                                          |
| storybook                      | Development | A package for documenting component                         |
| @storybook/*                   | Development | Addons for `storybook`                                      |



### My development explanation

- [x] Developed component with **TailwindCSS** and **SCSS** module
- [x] Implemented several component with different variants base on design
- [x] Implemented **button** and **badge** component in different color, size and variant (visit **storybook**)
- [x] Used **compound pattern** for card and table component
- [x] Implemented **virtualized tables** to show huge data on it
- [x] Documented button component in Storybook
- [x] Implemented api calling with **react-query**
- [ ] Set alias for paths in `tsconfig.json`
- [ ] Write unit tests for components
- [ ] Implement to call search api in parallel



### My develop challenges

- [x] Design base on Figma file (design system and color palette in design was missed)
- [x] Develop a virtualized table
- [x] Validate user entry in bulk insertion for over 1k row (now it's work with 1M row) 
- [ ] Parallell api calls
- [ ] Documentation of GitHub api