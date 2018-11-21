module.exports = {
  title: 'Tuto VuePress / Netlify',
  description: 'Tuto VuePress / Netlify',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Tuto VuePress / Netlify',
      description: 'How to take care of my pets',
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'Tuto VuePress / Netlify',
      description: 'Comment s\'occuper de mes animaux',
    },
  },
  themeConfig: {
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        sidebar: {
          '/otis/': [
            {
              title: 'My dog - Otis',
              collapsable: false,
              children: ['food', 'hobbies'],
            },
          ],
          '/bolt/': [
            {
              title: 'Bolt',
              collapsable: false,
              children: ['food', 'hobbies'],
            },
          ],
          '/goody/': [
            {
              title: 'My rabbit - Goody',
              collapsable: false,
              children: ['food', 'hobbies'],
            },
          ],
          '/': [''], // fallback
        },
        nav: [
          {text: '', link: '/'},
          {text: 'Otis', link: '/otis/'},
          {text: 'Bolt', link: '/bolt/'},
          {text: 'Goody', link: '/goody/'},
          {text: 'Github', link: 'https://github.com/Assitan/tuto-vuepress'},
        ],
      },
      '/fr/': {
        label: 'Français',
        selectText: 'Langues',
        sidebar: {
          '/fr/otis/': [
            {
              title: 'Mon chien - Otis',
              collapsable: false,
              children: ['food', 'hobbies'],
            },
          ],
          '/fr/bolt/': [
            {
              title: 'Mon chat - Bolt',
              collapsable: false,
              children: ['food', 'hobbies'],
            },
          ],
          '/fr/goody/': [
            {
              title: 'Mon lapin - Goody',
              collapsable: false,
              children: ['food', 'hobbies'],
            },
          ],
          '/': [''], // fallback
        },
        nav: [
          {text: 'Otis', link: '/fr/otis/'},
          {text: 'Bolt', link: '/fr/bolt/'},
          {text: 'Goody', link: '/fr/goody/'},
          {text: 'Github', link: 'https://github.com/Assitan/tuto-vuepress'},
        ],
      },
    },
  },
};
