# @viewar/components

> ViewAR's reusable react components

[![Build Status](https://travis-ci.com/viewar/components.svg?branch=master)](https://travis-ci.com/viewar/components)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=viewar/components)](https://dependabot.com)
[![PRs Welcome][pr-welcome]](http://makeapullrequest.com)
[![Conventional Commits](https://img.shields.io/badge/✔-Conventional%20Commits-blue.svg)](https://conventionalcommits.org)
[![Semantic Versioning][semantic-img]][semantic-url]

[pr-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[semantic-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-blue.svg
[semantic-url]: https://semver.org/

<!--- /status badge url references ---->

## Usage

`npm run start:mock` or  
`npm run start` for 3D mode

## ComponentPresenter

> ❗️❗️ **This is just a provisional styleguide subtstitute**  
> 🏗 **until we found the right component pattern libary to match our needs**
>
> _see [[feat] add styleguide](viewar/components#2) (issue#2)_

#### what

reads hash location and renders corresponding Component

#### how

links to component showcases are auto generated  
**requires export in '/components/showcases.js':**

```jsx
export { default as Button } from 'components/Button/Showcase';
```
