/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docsSidebar: [
        {
            'Getting Started': [
                'about-getting-started',
                'about-namepaths',
                'about-commandline',
                'about-configuring-jsdoc',
                'about-configuring-default-template',
                'about-block-inline-tags',
                'about-plugins',
                'plugins-markdown',
                'about-tutorials',
                'about-including-package',
                'about-including-readme',
                'about-license-jsdoc3',
            ],
        },
        {
            Examples: [
                'howto-es2015-classes',
                'howto-es2015-modules',
                'howto-commonjs-modules',
                'howto-amd-modules',
            ],
        },
        { 'Block Tags': [{ type: 'autogenerated', dirName: 'block-tags' }] },
        { 'Inline Tags': [{ type: 'autogenerated', dirName: 'inline-tags' }] },
        'contribute',
    ],
};

module.exports = sidebars;
