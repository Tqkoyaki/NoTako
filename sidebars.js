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
    'turing-tako/turing',
    'euler-tako/euler',
    'lee-tako/lee'
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
        'turing-tako/intro-to-cs/page-5',
        'turing-tako/intro-to-cs/page-6',
        'turing-tako/intro-to-cs/page-7',
        'turing-tako/intro-to-cs/page-8',
        'turing-tako/intro-to-cs/page-9',
        'turing-tako/intro-to-cs/page-10',
      ]
    },
    {
      type: 'category',
      label: 'How to Code: Simple Data',
      items: [
        'turing-tako/simple-data/page-1',
        'turing-tako/simple-data/page-2',
        'turing-tako/simple-data/page-3',
        'turing-tako/simple-data/page-4',
        'turing-tako/simple-data/page-5',
        'turing-tako/simple-data/page-6',
        'turing-tako/simple-data/page-7',
        'turing-tako/simple-data/page-8',
        'turing-tako/simple-data/page-9',
        'turing-tako/simple-data/page-10',
      ]
    },
    {
      type: 'category',
      label: 'How to Code: Complex Data',
      items: [
        'turing-tako/complex-data/page-1',
        'turing-tako/complex-data/page-2',
        'turing-tako/complex-data/page-3',
        'turing-tako/complex-data/page-4',
        'turing-tako/complex-data/page-5',
        'turing-tako/complex-data/page-6',
        'turing-tako/complex-data/page-7',
        'turing-tako/complex-data/page-8',
        'turing-tako/complex-data/page-9',
      ]
    },
    {
      type: 'category',
      label: 'Programming Languages: Part A',
      items: [
        'turing-tako/prog-lang-a/page-1',
        'turing-tako/prog-lang-a/page-2',
        'turing-tako/prog-lang-a/page-3',
        'turing-tako/prog-lang-a/page-4',
      ]
    }
  ],
  eulerSidebar: [
    'euler-tako/euler',
    {
      type: 'category',
      label: 'Mathematical Thinking',
      items: [
        'euler-tako/math-thinking/page-1',
        'euler-tako/math-thinking/page-2',
        'euler-tako/math-thinking/page-3',
        'euler-tako/math-thinking/page-4',
        'euler-tako/math-thinking/page-5',
        'euler-tako/math-thinking/page-6',
      ]
    },
    {
      type: 'category',
      label: 'Algebra and Trigonometry',
      items: [
        {
          type: 'category',
          label: 'PreAlgebra',
          items: [
            'euler-tako/algebra-trig/pre-alg/page-1',
            'euler-tako/algebra-trig/pre-alg/page-2',
            'euler-tako/algebra-trig/pre-alg/page-3',
            'euler-tako/algebra-trig/pre-alg/page-4',
            'euler-tako/algebra-trig/pre-alg/page-5',
            'euler-tako/algebra-trig/pre-alg/page-6',
          ]
        },
        {
          type: 'category',
          label: 'Equations and Inequalities',
          items: [
            'euler-tako/algebra-trig/equations/page-1',
            'euler-tako/algebra-trig/equations/page-2',
            'euler-tako/algebra-trig/equations/page-3',
            'euler-tako/algebra-trig/equations/page-4',
            'euler-tako/algebra-trig/equations/page-5',
            'euler-tako/algebra-trig/equations/page-6',
            'euler-tako/algebra-trig/equations/page-7',
          ]
        },
        {
          type: 'category',
          label: 'Functions',
          items: [
            'euler-tako/algebra-trig/functions/page-1',
            'euler-tako/algebra-trig/functions/page-2',
            'euler-tako/algebra-trig/functions/page-3',
          ]
        },
      ]
    }
  ],
  leeSidebar: [
    'lee-tako/lee',
    {
      type: 'category',
      label: 'CompTIA A+ 1101',
      items: [
        'lee-tako/comptia-a-1101/page-1',
        'lee-tako/comptia-a-1101/page-2',
        'lee-tako/comptia-a-1101/page-3',
        'lee-tako/comptia-a-1101/page-4',
        'lee-tako/comptia-a-1101/page-5',
      ]
    },
    {
      type: 'category',
      label: 'CompTIA A+ 1102',
      items: [
        'lee-tako/comptia-a-1102/page-1',
        'lee-tako/comptia-a-1102/page-2',
        'lee-tako/comptia-a-1102/page-3',
        'lee-tako/comptia-a-1102/page-4',
      ]
    }
  ]
};

module.exports = sidebars;
