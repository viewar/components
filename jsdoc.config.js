module.exports = {
  tags: {
    allowUnknownTags: [ 'component' ],
  },
  source: {
    include:        './dist',
    includePattern: '\\.(jsx|js|ts|tsx)$',
  },
  plugins: [ /* 'node_modules/jsdoc-babel',  */'node_modules/better-docs', 'node_modules/better-docs/component' ],
  opts:    {
    destination: 'docs/',
    recurse:     true,
    encoding:    'utf8',
    template:    'node_modules/better-docs',
  },
  templates: {
    cleverLinks:    false,
    monospaceLinks: false,
  },
  'better-docs': {
    'static':       true,
    sort:         true,
    // sectionOrder: [ 'Namespaces', 'Interfaces', 'Global', 'Events' ],
    meta:         {
      title: 'ViewAR API Documentation',
    },
    search:    true,
    collapse:  true,
    typedefs:  true,
    'private':  true,
    menu:      {
      'ViewAR SDK': {
        href:   'https://developer.viewar.com',
        target: '_blank',
      },
    },
    // scripts: [ 'jsdoc/styles.css' ],
  },
};
