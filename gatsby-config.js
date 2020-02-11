module.exports = {
   siteMetadata: {
      title: `Gatsby Docs Starter`,
      description: `A documentation starter`,
      author: `@prvnbist`,
      menu: [
         { id: 1, title: 'Introduction', link: '/docs/introduction' },
         {
            title: 'File',
            children: [
               { id: 2, title: 'Create File', link: '/docs/file/create' },
               { id: 3, title: 'Delete File', link: '/docs/file/delete' },
               { id: 4, title: 'Update File', link: '/docs/file/update' },
               { id: 5, title: 'Read File', link: '/docs/file/read' },
               { id: 6, title: 'Rename File', link: '/docs/file/rename' }
            ]
         },
         {
            title: 'Folder',
            children: [
               {
                  id: 7,
                  title: 'Create Folder',
                  link: '/docs/folder/create'
               },
               {
                  id: 8,
                  title: 'Delete Folder',
                  link: '/docs/folder/delete'
               },
               {
                  id: 9,
                  title: 'Rename Folder',
                  link: '/docs/folder/rename'
               }
            ]
         },
         {
            title: 'Git',
            children: [
               {
                  id: 10,
                  title: 'Add and Commit',
                  link: '/docs/git/add-and-commit'
               },
               {
                  id: 11,
                  title: 'Remove and Commit',
                  link: '/docs/git/remove-and-commit'
               }
            ]
         },
         {
            title: 'Types',
            children: [
               { id: 12, title: 'File', link: '/docs/types/file' },
               { id: 13, title: 'Folder', link: '/docs/types/folder' },
               {
                  id: 14,
                  title: 'Folder with Files',
                  link: '/docs/types/folder-with-files'
               },
               { id: 15, title: 'Success', link: '/docs/types/success' },
               { id: 16, title: 'Error', link: '/docs/types/error' },
               { id: 17, title: 'Result', link: '/docs/types/result' },
               {
                  id: 18,
                  title: 'Subscription',
                  link: '/docs/types/subscription'
               },
               { id: 19, title: 'Author', link: '/docs/types/author' },
               { id: 20, title: 'Commit', link: '/docs/types/commit' },
               { id: 21, title: 'Committer', link: '/docs/types/committer' }
            ]
         },
         {
            title: 'Queries',
            children: [
               {
                  id: 22,
                  title: 'Get Commit',
                  link: '/docs/queries/get-commit'
               },
               {
                  id: 23,
                  title: 'Get Commit Content',
                  link: '/docs/queries/get-commit-content'
               },
               {
                  id: 24,
                  title: 'Get Commit Log',
                  link: '/docs/queries/get-commit-log'
               },
               {
                  id: 25,
                  title: 'Get Commits',
                  link: '/docs/queries/get-commits'
               },
               { id: 26, title: 'Get File', link: '/docs/queries/get-file' },
               { id: 27, title: 'Get Files', link: '/docs/queries/get-files' },
               {
                  id: 28,
                  title: 'Get Folder with Files',
                  link: '/docs/queries/get-folder-with-files'
               },
               {
                  id: 29,
                  title: 'Get Nested Folders',
                  link: '/docs/queries/get-nested-folders'
               },
               { id: 30, title: 'Open File', link: '/docs/queries/open-file' }
            ]
         },
         {
            title: 'Mutations',
            children: [
               {
                  id: 31,
                  title: 'Create File',
                  link: '/docs/mutations/create-file'
               },
               {
                  id: 32,
                  title: 'Delete File',
                  link: '/docs/mutations/delete-file'
               },
               {
                  id: 33,
                  title: 'Draft File',
                  link: '/docs/mutations/draft-file'
               },
               {
                  id: 34,
                  title: 'Rename File',
                  link: '/docs/mutations/rename-file'
               },
               {
                  id: 35,
                  title: 'Update File',
                  link: '/docs/mutations/update-file'
               },
               {
                  id: 36,
                  title: 'Create Folder',
                  link: '/docs/mutations/create-folder'
               },
               {
                  id: 37,
                  title: 'Rename Folder',
                  link: '/docs/mutations/rename-folder'
               },
               {
                  id: 38,
                  title: 'Delete Folder',
                  link: '/docs/mutations/delete-folder'
               },
               {
                  id: 39,
                  title: 'Image Upload',
                  link: '/docs/mutations/image-upload'
               },
               {
                  id: 40,
                  title: 'Install App',
                  link: '/docs/mutations/install-app'
               }
            ]
         }
      ]
   },
   plugins: [
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'docs',
            path: `${__dirname}/src/docs`
         }
      },
      `gatsby-plugin-mdx`
   ]
}
