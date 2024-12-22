export default defineAppConfig({
  appName: 'Tinkering Tuna',
  appDescription: 'Personal website of Jason Ventresca',
  profilePicture: '/assets/desert-botanical-gardens-head-shot.webp',
  footerName: 'Jason Ventresca',
  email: 'ionlyreadspam@gmail.com', // JV-TODO
  twitterUsername: '@twenty4seventh',
  phone: '', // JV-TODO
  openGraphImage: '', // 'https://canvas.hrcd.fr/social-preview.jpg', // JV-TODO
  socials: {
    github: 'http://github.com/jasonventresca',
    twitter: 'https://twitter.com/twenty4seventh',
    linkedin: 'https://www.linkedin.com/in/jason-ventresca-94227019/',
    instagram: 'https://www.instagram.com/fliph0riz0n/',
    spotify: 'https://open.spotify.com/user/1291973520',
  },
  ui: {
    primary: 'emerald',
    gray: 'zinc',
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    input: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
    textarea: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
  },
})
