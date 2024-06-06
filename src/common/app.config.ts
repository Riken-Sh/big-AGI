/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'Ella',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'Ella',
  },
  Meta: {
    Description: 'Launch Ella to unlock the full potential of AI, with precise control over your data and models. Voice interface, AI personas, advanced features, and fun UX.',
    SiteName: 'Ella | Precision AI for You',
    ThemeColor: '#32383E',
    TwitterSite: '@rickroll',
  },
  URIs: {
    Home: 'https:/ellagpt.me',
    // App: 'https://get.big-agi.com',
    CardImage: 'https://raw.githubusercontent.com/Riken-Sh/big-AGI/main/public/icons/card-dark-1200.png',
    OpenRepo: 'https://youtube.com/watch?v=lYBUbBu4W08&si=KG1GOGVJ1-HpicOS',
//     OpenProject: 'https://github.com/users/enricoros/projects/4',
//    SupportInvite: 'https://discord.gg/MkH4qj2Jp9',
    // Twitter: 'https://www.twitter.com/enricoros',
    PrivacyPolicy: 'https://ellagpt.me/privacy',
  },
} as const;
