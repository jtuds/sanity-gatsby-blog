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
                  buildHookId: '6036435bebe6c2007d733ddf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-viizo297',
                  apiId: 'b2d933c3-19c6-40bc-94e8-fdfa8c3f9dc1'
                },
                {
                  buildHookId: '6036435bd39bb3008e6631dc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-g1jgow35',
                  apiId: 'ee796512-6e21-430f-ab2e-e02664bdd9f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jtuds/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-g1jgow35.netlify.app', category: 'apps' }
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
