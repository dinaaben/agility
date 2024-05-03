import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    'about-agility',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: [
        'tutorial-basics/congratulations',
        'tutorial-basics/create-a-blog-post',
      ],
    },
    {
      type: 'category',
      label: 'Analyze PCAP files',
      items: [
        'Analyze PCAP files/supported-file-formats',
        'Analyze PCAP files/start-a-new-analysis',
        'Analyze PCAP files/access-your-analysis',
        'Analyze PCAP files/filter-and-sort-analyses',
      ],
    },
    {
      type: 'category',
      label: 'View Results',
      items: [
        'View results/view-your-high-level-summary',
        {
          type: 'category',
          label: 'View results in Call Flow Details',
          link: {
            type: 'doc',
            id: 'View results/view-results-in-call-flow-details/view-results-in-call-flow-details',
          },
          items: [
            'View results/view-results-in-call-flow-details/procedure-details',
          ],
        },
        'View results/filter-call-flow-results',
        'View results/diagnostics-tab',
        'View results/flow-extractions-tab',
        'View results/protocol-level-analysis-tab',
        'View results/kpi-analysis-tab',
        'View results/provide-feedback',
        'View results/run-a-comparative-analysis',
      ],
    },
  ],
  api: [
    
    'hello',
    {
      type: 'autogenerated',
      dirName: 'api-webhooks',  
    }
  ],
  install: [
    
    'hello',
    {
      type: 'autogenerated',
      dirName: 'installation-reference',  
    }
  ],
  
};

export default sidebars;
