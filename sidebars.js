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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  subjectSidebar: [
    'intro',
    'turing-tako/turing'
  ],
  turingSidebar: [
    'turing-tako/turing',
    {
      type: 'category',
      label: 'Python Basics',
      items: [
        'turing-tako/python-basics/page-1',
        'turing-tako/python-basics/page-2',
        'turing-tako/python-basics/page-3',
        'turing-tako/python-basics/page-4',
        'turing-tako/python-basics/page-5',
        'turing-tako/python-basics/page-6',
        'turing-tako/python-basics/page-7',
      ]
    },
    {
      type: 'category',
      label: 'Intro to Computer Science',
      items: [
        'turing-tako/intro-to-cs/page-1',
        'turing-tako/intro-to-cs/page-2',
        'turing-tako/intro-to-cs/page-3',
        'turing-tako/intro-to-cs/page-4',
      ]
    },
  ],
};

module.exports = sidebars;
