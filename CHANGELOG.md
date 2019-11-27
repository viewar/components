# Changelog

> generated with [@semantic-release/changelog](https://github.com/semantic-release/changelog)

# [1.5.0](https://github.com/viewar/components/compare/v1.4.0...v1.5.0) (2019-11-27)


### Bug Fixes

* **ButtonToggle:** allow `<ButtonToggle />` to be un-controlled ([e085434](https://github.com/viewar/components/commit/e085434dcaa93942d0f15bca13178b4aa4e71776))
* **scripts:** fix 'format' - ignore build ([5caf8d3](https://github.com/viewar/components/commit/5caf8d3403f546442ec3391d7f9f21a4848d3353))
* **router:** use HashRouter ([5a11853](https://github.com/viewar/components/commit/5a11853b6ada6dda12d685ae0771efdbd32ac25a))


### Features

* **ButtonToggle:** add `<ButtonToggle />` ([a58639f](https://github.com/viewar/components/commit/a58639fc27a6b8fc8b6de05cbbc96db0ddf7e650))
* **Slider:** add `<Slider />` component + Showcase ([#19](https://github.com/viewar/components/issues/19)) ([4860fc2](https://github.com/viewar/components/commit/4860fc22ced0b953e57cefd5f6075c06b098e66f))
* **husky:** add `npm test` to 'pre-push' hooks ([eb7d799](https://github.com/viewar/components/commit/eb7d799aae16a9f05ea157652dce5c7721350ade))
* **PropertyPicker:** only show 'item.properties' filtered by 'props.shownProperties' ([79835e0](https://github.com/viewar/components/commit/79835e037daa0d8a0cbf3e675076bacc77b377a8))
* **componentPresenter:** render Showcases per router param ([#20](https://github.com/viewar/components/issues/20)) ([fff1af6](https://github.com/viewar/components/commit/fff1af6361be260bbcccf5188139f644069df2c8))
* **sass:** use global includePaths of '@viewar/webpack' > v1.6.0* move /src/style to /src/sass to be auto included* rename index.scss to style* use shorthand import `[@import](https://github.com/import) 'styles'` in component scss ([d40ffbc](https://github.com/viewar/components/commit/d40ffbcf9553c197fca48e7c27a65bc93212df8b))

# [1.4.0](https://github.com/viewar/components/compare/v1.3.0...v1.4.0) (2019-11-20)

### Features ✨

- **ButtonToggle:** add `<ButtonToggle />` ([8c7f1b3](https://github.com/viewar/components/commit/8c7f1b3f84175d1e0e15199ca1fe13d57b575ddf))
- **componentPresenter:** render Showcases per router param ([#20](https://github.com/viewar/components/issues/20)) ([fff1af6](https://github.com/viewar/components/commit/fff1af6361be260bbcccf5188139f644069df2c8))
- **husky:** add `npm test` to 'pre-push' hooks ([eb7d799](https://github.com/viewar/components/commit/eb7d799aae16a9f05ea157652dce5c7721350ade))
- **PropertyPicker:** only show 'item.properties' filtered by 'props.shownProperties' ([891c5b5](https://github.com/viewar/components/commit/891c5b54641ba6f27f4e8642824b915f1c5659d0))
- **Slider:** add `<Slider />` component + Showcase ([#19](https://github.com/viewar/components/issues/19)) ([e22b30e](https://github.com/viewar/components/commit/e22b30e4e5f264f46ced7bbafa164457079a1037))

### Bug Fixes 🐛

- **ButtonToggle:** allow `<ButtonToggle />` to be un-controlled ([bc552bc](https://github.com/viewar/components/commit/bc552bc4ad6d566f37dafd09456c4945c66fdcca))
- **scripts:** fix 'format' - ignore build ([c6d6919](https://github.com/viewar/components/commit/c6d691916c445f562bf40e700a926fee98a6bb98))

### Component Changes 🌀

- **ButtonToggle:** add `Showcase` component ([70640c0](https://github.com/viewar/components/commit/70640c0526569f87ac80f7e059197a4105c5ea24))

### Dependencies and Environment ⚙️

- **deps:** bump viewar-api from 0.56.6 to 0.57.0 ([#18](https://github.com/viewar/components/issues/18)) ([5df5849](https://github.com/viewar/components/commit/5df5849279799d8b1f6f9dc7e8a5870a43d2a133))
- **git:** ignore build folder ([1fb1707](https://github.com/viewar/components/commit/1fb17070d7598c23a5e6cbc3cb8b368a16979c56))

# [1.3.0](https://github.com/viewar/components/compare/v1.2.1...v1.3.0) (2019-11-18)

### Features ✨

- **PropertyPicker:** only show 'item.properties' filtered by 'props.shownProperties' ([79835e0](https://github.com/viewar/components/commit/79835e037daa0d8a0cbf3e675076bacc77b377a8))
- **spec:** add minimal spec test for `<Overlay />` ([b2bd667](https://github.com/viewar/components/commit/b2bd667896398213def303d5ca8b5536cedc2048))
- **spec:** add spec test for `<Input />` ([795a643](https://github.com/viewar/components/commit/795a6434a4b6a53eeec121c393ab0f0e4e1f45d4))

### Bug Fixes 🐛

- **scripts:** fix 'format' - ignore build ([5caf8d3](https://github.com/viewar/components/commit/5caf8d3403f546442ec3391d7f9f21a4848d3353))

### Component Changes 🌀

- **Overlay:** add `props.className` ([b869ed9](https://github.com/viewar/components/commit/b869ed94129ddd628b9f1c43377616d3a6da9448))
- **PropertyPicker:** show options on top of properties ([b71223d](https://github.com/viewar/components/commit/b71223d8b3fd287158f7bf7dd5321e96d0e49e59))

### Dependencies and Environment ⚙️

- **deps:** bump '@viewar/config-eslint' to v1.8.0 ([2642087](https://github.com/viewar/components/commit/26420870e6e51830d7485d1b5cfb48a7f59cd0ba))
- **git:** ignore build folder ([d5d27c1](https://github.com/viewar/components/commit/d5d27c1af9fae019def81fd653ff2e8ae441d293))

## [1.2.1](https://github.com/viewar/components/compare/v1.2.0...v1.2.1) (2019-11-17)

### Bug Fixes 🐛

- **CHANGELOG:** add initial components to log and fix duplicate entries ([5317612](https://github.com/viewar/components/commit/5317612be72918611ae8831a0797e7a5efe652e5))

# [1.2.0](https://github.com/viewar/components/compare/v1.1.0...v1.2.0) (2019-11-16)

### Features ✨

- **spec:** add 'App.spec.js' ([7037976](https://github.com/viewar/components/commit/703797652fe667cb2ddc68033030132c06d059de))
- **spec:** add spec test for `<Accordion />` ([fa7edc2](https://github.com/viewar/components/commit/fa7edc279840698d24aa55f7254f3ec6850c49e1))
- **viewar:** add 'viewar-core' and 'viewar-api' ([#12](https://github.com/viewar/components/issues/12)) ([a964d86](https://github.com/viewar/components/commit/a964d8622086ab15702d5909ddfe4eb7dc54f12a))

### Bug Fixes 🐛

- **Accordion:** fix propType for children ([175e38f](https://github.com/viewar/components/commit/175e38f3f6f192f0e622b1efd36c3220b84eec2f))

### Dependencies and Environment ⚙️

- remove unused Test.jsx ([f143446](https://github.com/viewar/components/commit/f1434468ecdd455e67cc976a01c3202acb9c23cf))

### Tests ✔️

- fix proptype warnings for Accordion and Button ([787ab6b](https://github.com/viewar/components/commit/787ab6b83663e0bc875491be0440667d7341041a))

# [1.1.0](https://github.com/viewar/components/compare/v1.0.0...v1.1.0) (2019-11-15)

### Features ✨

- **PropertyPicker:** add `<PropertyPicker />` ([a85ccf9](https://github.com/viewar/components/commit/a85ccf9c1bc261c5437d545d9102598b456d7656))

### Component Changes 🌀

- **Accordion:** add proptype for 'className' ([9876881](https://github.com/viewar/components/commit/9876881448e38ad7136ad0054d2128e1b3f3941d))
- **Icon:** fix lint error 'no-use-before-define' ([883205e](https://github.com/viewar/components/commit/883205e97a6186880a5bb0c6347a6c3d6c9fb5c7))
- **Input:** fix lint error 'no-use-before-define' ([b759e08](https://github.com/viewar/components/commit/b759e084f08303d10df7d26ca9631fcb8be2f339))
- **LoadingState:** add prop-types for 'isVisible' ([216f1af](https://github.com/viewar/components/commit/216f1af6606881ac42aa2b6614ad3ae73a4d53e2))
- **Overlay:** add propTypes ([0cb86b3](https://github.com/viewar/components/commit/0cb86b319fd523d8ce59aa1d225053a27d6e9d75))
- **Overlay:** format ([6f03fd8](https://github.com/viewar/components/commit/6f03fd8acbfe58c3e3560495f84acc3f0bdbb41a))
- **PropertyPicker:** update `<PropertyPicker /> after implementing into real life app ([d5c920f](https://github.com/viewar/components/commit/d5c920f849d558c320f79d2bd94a2cee5c74f7a2))

### Documentation 📝

- add initial CHANGELOG ([e16d370](https://github.com/viewar/components/commit/e16d370994b6f27a8fdda5126e5e966145950d3b))

# [1.0.0](https://github.com/viewar/components/compare/0bcdd6c782705e7d50500748031a1876f4bcc55e...v1.0.0) (2019-11-12)

### Bug Fixes 🐛

- **setup:** stable setup ([1a5ba55](https://github.com/viewar/components/commit/1a5ba5556d0d002a1c7d05d7728a496b043b16d8))

### Component Changes 🌀

- **Accordion:** add proptype for 'className' ([1e196bd](https://github.com/viewar/components/commit/1e196bd7e72b4680519fdfa40152ac55a689bfab))
- **Icon:** fix lint error 'no-use-before-define' ([1880540](https://github.com/viewar/components/commit/1880540e996838c427d4a83a0fe3fbb14493f7c2))
- **Input:** fix lint error 'no-use-before-define' ([1f1ba30](https://github.com/viewar/components/commit/1f1ba30217842fd0253627912b8ea958d333904a))
- **LoadingState:** add prop-types for 'isVisible' ([73c0e78](https://github.com/viewar/components/commit/73c0e7869a96b1f7427c331e761ff77e0d8cfbcf))
- **Overlay:** add propTypes ([e5a66ed](https://github.com/viewar/components/commit/e5a66ede51f4492fd32c17434b8daa54549db896))
- **Overlay:** format ([061d3c9](https://github.com/viewar/components/commit/061d3c92bdfed6b27b8a5f9e2c62dac8cf3e70e1))
- add components - Input, Overlay, Sidebar, Accordion, LoadingState, Button, ... ([1f7fc92](https://github.com/viewar/components/commit/1f7fc92d6b52f0822557b0f12be8cebaeec35005))

### Dependencies and Environment ⚙️

- **deps:** add '@viewar/webpack' and '@viewar/config-eslint' ([0bcdd6c](https://github.com/viewar/components/commit/0bcdd6c782705e7d50500748031a1876f4bcc55e))
- **deps:** add 'classnames' ([4193add](https://github.com/viewar/components/commit/4193add89c1dfa7ef8e989103b308bdce2ef6904))
- **deps:** add 'prettier' ([0dfffc4](https://github.com/viewar/components/commit/0dfffc48d0a66d116c926b253008092241460d67))
- **deps:** add 'puppeteer' for headless-chrome in karmas browser tests ([7e9ea2d](https://github.com/viewar/components/commit/7e9ea2d1868b3c1d7409f799a807adc2042ef2db))
- **deps:** bump '@viewar/config-eslint' to 1.7.0 ([81f21eb](https://github.com/viewar/components/commit/81f21ebc2552aa14a02c14548a481580e210814f))

### Documentation 📝

- **README:** add status badges ([b6bac92](https://github.com/viewar/components/commit/b6bac92c65fd477955464aeea84ccdad49b88b2b))
