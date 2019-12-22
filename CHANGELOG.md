## [1.8.0](https://github.com/viewar/components/compare/v1.8.0...v1.7.4) (2019-12-22)

### Features

- **unit-tests:** add jest unit tests for npm scripts ([e8fd480](https://github.com/viewar/components/commit/e8fd480))

## [1.7.4](https://github.com/viewar/components/compare/v1.7.3...v1.7.4) (2019-12-21)

### Bug Fixes

- **ci:** use npm ci ([e7c29dc](https://github.com/viewar/components/commit/e7c29dc))

## [1.7.3](https://github.com/viewar/components/compare/v1.7.2...v1.7.3) (2019-12-21)

### Bug Fixes

- **DownloadAll:** fix calculation by removing 'Math.ceil' ([e53d831](https://github.com/viewar/components/commit/e53d831))
- **release:** add 'cross-env' to 'release' stages install script ([6cdc224](https://github.com/viewar/components/commit/6cdc224))

## [1.7.2](https://github.com/viewar/components/compare/v1.7.1...v1.7.2) (2019-12-20)

### Bug Fixes

- **Icons:** fix asset paths ([90dd515](https://github.com/viewar/components/commit/90dd515))

## [1.7.1](https://github.com/viewar/components/compare/v1.7.0...v1.7.1) (2019-12-20)

### Bug Fixes

- **ci:** install build deps in release stage ([38e4e1d](https://github.com/viewar/components/commit/38e4e1d))

# [1.7.0](https://github.com/viewar/components/compare/v1.6.0...v1.7.0) (2019-12-20)

### Bug Fixes

- **osx:** use rimraf and add add 'clean' script ([3a38441](https://github.com/viewar/components/commit/3a38441))
- **osx:** use rimraf and add add 'clean' script ([7e89023](https://github.com/viewar/components/commit/7e89023))

### Features

- **npm:** setup for package release ([#53](https://github.com/viewar/components/issues/53)) ([abb371c](https://github.com/viewar/components/commit/abb371c))
- **npm:** setup for package release ([#53](https://github.com/viewar/components/issues/53)) ([5ea8526](https://github.com/viewar/components/commit/5ea8526))

# [1.6.0](https://github.com/viewar/components/compare/v1.5.1...v1.6.0) (2019-12-17)

### Bug Fixes

- **SceneStateProgress:** fix onCancel and on Restart to handle connection errors ([7d7f5c9](https://github.com/viewar/components/commit/7d7f5c9))
- **Slider:** adapt dragHandler for mobile ([aff6b12](https://github.com/viewar/components/commit/aff6b12))

### Features

- **DownloadAll:** add `<DownloadAll />` component ([a231ddc](https://github.com/viewar/components/commit/a231ddc))
- **SceneStateProgress:** add `<SceneStateProgress />` with showcase and mockdata ([760cc14](https://github.com/viewar/components/commit/760cc14))

## [1.5.1](https://github.com/viewar/components/compare/v1.5.0...v1.5.1) (2019-12-06)

### Bug Fixes

- **install:** update package-lock ([b27b56c](https://github.com/viewar/components/commit/b27b56c))
- **Slider:** fix 'max < fullWdth' cases\* move initial position set to `componentDidMount()` ([31010d8](https://github.com/viewar/components/commit/31010d8))

# [1.5.0](https://github.com/viewar/components/compare/v1.4.0...v1.5.0) (2019-11-27)

### Bug Fixes

- **router:** use HashRouter ([5a11853](https://github.com/viewar/components/commit/5a11853))

### Features

- **sass:** use global includePaths of '@viewar/webpack' > v1.6.0* move /src/style to /src/sass to be auto included* rename index.scss to style\* use shorthand import `[@import](https://github.com/import) 'styles'` in component scss ([d40ffbc](https://github.com/viewar/components/commit/d40ffbc))

# [1.4.0](https://github.com/viewar/components/compare/v1.3.0...v1.4.0) (2019-11-20)

### Bug Fixes

- **ButtonToggle:** allow `<ButtonToggle />` to be un-controlled ([bc552bc](https://github.com/viewar/components/commit/bc552bc))
- **ButtonToggle:** allow `<ButtonToggle />` to be un-controlled ([e085434](https://github.com/viewar/components/commit/e085434))
- **scripts:** fix 'format' - ignore build ([c6d6919](https://github.com/viewar/components/commit/c6d6919))

### Features

- **ButtonToggle:** add `<ButtonToggle />` ([8c7f1b3](https://github.com/viewar/components/commit/8c7f1b3))
- **ButtonToggle:** add `<ButtonToggle />` ([a58639f](https://github.com/viewar/components/commit/a58639f))
- **componentPresenter:** render Showcases per router param ([#20](https://github.com/viewar/components/issues/20)) ([43730b5](https://github.com/viewar/components/commit/43730b5))
- **componentPresenter:** render Showcases per router param ([#20](https://github.com/viewar/components/issues/20)) ([fff1af6](https://github.com/viewar/components/commit/fff1af6))
- **husky:** add `npm test` to 'pre-push' hooks ([eb7d799](https://github.com/viewar/components/commit/eb7d799))
- **PropertyPicker:** only show 'item.properties' filtered by 'props.shownProperties' ([891c5b5](https://github.com/viewar/components/commit/891c5b5))
- **Slider:** add `<Slider />` component + Showcase ([#19](https://github.com/viewar/components/issues/19)) ([e22b30e](https://github.com/viewar/components/commit/e22b30e))
- **Slider:** add `<Slider />` component + Showcase ([#19](https://github.com/viewar/components/issues/19)) ([4860fc2](https://github.com/viewar/components/commit/4860fc2))

# [1.3.0](https://github.com/viewar/components/compare/v1.2.1...v1.3.0) (2019-11-18)

### Bug Fixes

- **scripts:** fix 'format' - ignore build ([5caf8d3](https://github.com/viewar/components/commit/5caf8d3))

### Features

- **PropertyPicker:** only show 'item.properties' filtered by 'props.shownProperties' ([79835e0](https://github.com/viewar/components/commit/79835e0))
- **spec:** add minimal spec test for `<Overlay />` ([b2bd667](https://github.com/viewar/components/commit/b2bd667))
- **spec:** add spec test for `<Input />` ([795a643](https://github.com/viewar/components/commit/795a643))
- **spec:** add spec test for `<SideBar />` ([b0fa38e](https://github.com/viewar/components/commit/b0fa38e))

## [1.2.1](https://github.com/viewar/components/compare/v1.2.0...v1.2.1) (2019-11-17)

### Bug Fixes

- **CHANGELOG:** add initial components to log and fix duplicate entries ([5317612](https://github.com/viewar/components/commit/5317612))

# [1.2.0](https://github.com/viewar/components/compare/v1.1.0...v1.2.0) (2019-11-16)

### Bug Fixes

- **Accordion:** fix propType for children ([175e38f](https://github.com/viewar/components/commit/175e38f))
- **Accordion:** fix propType for children ([0682674](https://github.com/viewar/components/commit/0682674))

### Features

- **spec:** add 'App.spec.js' ([4a7bc92](https://github.com/viewar/components/commit/4a7bc92))
- **spec:** add 'App.spec.js' ([7037976](https://github.com/viewar/components/commit/7037976))
- **spec:** add spec test for `<Accordion />` ([d86962a](https://github.com/viewar/components/commit/d86962a))
- **spec:** add spec test for `<Accordion />` ([fa7edc2](https://github.com/viewar/components/commit/fa7edc2))
- **viewar:** add 'viewar-core' and 'viewar-api' ([#12](https://github.com/viewar/components/issues/12)) ([25eb40a](https://github.com/viewar/components/commit/25eb40a))
- **viewar:** add 'viewar-core' and 'viewar-api' ([#12](https://github.com/viewar/components/issues/12)) ([a964d86](https://github.com/viewar/components/commit/a964d86))

# [1.1.0](https://github.com/viewar/components/compare/v1.0.0...v1.1.0) (2019-11-15)

### Features

- **PropertyPicker:** add `<PropertyPicker />` ([a85ccf9](https://github.com/viewar/components/commit/a85ccf9))

# [1.0.0](https://github.com/viewar/components/compare/1a5ba55...v1.0.0) (2019-11-12)

### Bug Fixes

- **setup:** stable setup ([1a5ba55](https://github.com/viewar/components/commit/1a5ba55))
