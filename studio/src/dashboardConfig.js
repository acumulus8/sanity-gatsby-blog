export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604ba1086936ec2defd2a625',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-oaoqt44c',
                  apiId: 'e422c7aa-b745-4f95-8810-2a688138298e'
                },
                {
                  buildHookId: '604ba1075549a32d27493ccc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ozghxnqp',
                  apiId: 'f31d3881-6641-4bb4-a19f-fc43309cd874'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/acumulus8/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ozghxnqp.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
