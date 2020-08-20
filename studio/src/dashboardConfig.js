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
                  buildHookId: '5f3defe5957bd7a10bd1e053',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vsmpaiq7',
                  apiId: '102fe65f-b3ea-4ba0-8f87-d0cc18505b6b'
                },
                {
                  buildHookId: '5f3defe5453c5ea76548bfd8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-akpta6w3',
                  apiId: '24fa1e08-2866-4a66-99bf-9d25a518cd71'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicepakau/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-akpta6w3.netlify.app', category: 'apps' }
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
