module.exports = {
  pathPrefix: '/greatest-gatsby-academic-template',
  siteUrl: 'https://tc-imba.github.io',
  title: 'Shixin Song',
  description: 'Logbook of Shixin Song',
  author: 'Shixin Song',
  authorAlternative: '宋世欣',
  introduction: [
    '[fxhsb](https://github.com/Reapor-Yurnero) Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  ],
  avatar: 'avatar.png',
  professions: [
    'CSE Student',
    // 'Software Engineer',
    // 'Full Stack Developer',
  ],
  tocMaxDepth: 2,
  excerptMaxLength: 500,
  birthday: 'Some day',
  location: 'Earth',
  email: 'john.doe@gmail.com',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT
    || 'https://tc-imba.disqus.com/embed.js',
  pages: {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    research: 'research',
  },
  social: {
    github: 'https://github.com/',
    // facebook: 'https://www.facebook.com/rolwin.monteiro',
    // twitter: 'https://twitter.com/rolwin100',
    // instagram: 'https://www.instagram.com/reevan100/',
    // rss: '/rss.xml',
  },
  wakatime: {
    username: 'tcimba',
    activity: '7add4047-08f9-4da8-b649-aa114503678f',
    language: '460a84ab-722a-4b80-b896-cabaa13ad7eb',
    editor: 'd851639a-28d8-4884-949f-d338a858f7e9',
    os: 'caf7d0d1-8fd2-4595-a991-363c8583fea9',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT
    || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  education: [
    {
      date: 'Jan 2020 - Present',
      icon: 'graduation-cap',
      title: 'Ph.D in Computer Science',
      location: 'Some University, Somewhere',
    }, {
      date: 'Sept 2015 - Aug 2019',
      icon: 'university',
      title: 'B.S.E. in Electrical and Computer Engineering',
      location: 'Some University, Somewhere',
    }, {
      date: 'Sept 2008 - June 2015',
      icon: 'school',
      title: 'Middle School',
      location: 'Some Middle School, Somewhere',
    }],
  interests: [
    {
      icon: 'cubes',
      title: 'Distributed Systems',
    }, {
      icon: 'layer-group',
      title: 'Full Stack Development',
    }, {
      icon: ['fab', 'linux'],
      // icon: 'linux',
      title: 'Open Source Community',
    }],
  experience: [
    {
      title: 'Work',
      position: 'left',
      data: [
        {
          date: 'Aug 2019 - Present',
          title: 'Software Engineer',
          location: 'Somewhere',
          description: 'description',
        },
      ],
    }, {
      title: 'Teaching',
      position: 'right',
      data: [
        {
          date: 'Aug 2019',
          title: 'Teaching Assistant of XXX',
          location: 'Somewhere',
        }, {
          date: 'Aug 2018',
          title: 'Teaching Assistant of XXX',
          location: 'Somewhere',
        }, {
          date: 'Aug 2017',
          title: 'Teaching Assistant of XXX',
          location: 'Somewhere',
        }, {
          date: 'Aug 2018',
          title: 'Teaching Assistant of XXX',
          location: 'Somewhere',
        }, {
          date: 'Aug 2017',
          title: 'Teaching Assistant of XXX',
          location: 'Somewhere',
        },
      ],
    }, {
      title: 'Volunteer',
      position: 'left',
      data: [
        {
          date: 'Aug 2019',
          title: '[fxh](https://github.com/Reapor-Yurnero) home visit third time',
          location: 'Somewhere',
        }, {
          date: 'Aug 2018',
          title: '[fxh](https://github.com/Reapor-Yurnero) home visit second time',
          location: 'Somewhere',
        }, {
          date: 'Aug 2017',
          title: '[fxh](https://github.com/Reapor-Yurnero) home visit\n\n111',
          location: 'Somewhere',
        },
      ],
    },
  ],
  awards: [
    {
      date: 'Someday',
      title: 'Some Award',
    }, {
      date: 'Someday',
      title: 'Another Award',
    },
  ],
  tagColors: [
    'magenta', 'red', 'volcano', 'orange', 'gold',
    'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple',
  ],
  tags: [
    {
      id: 'javascript',
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    {
      id: 'rxjs',
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    {
      id: 'typescript',
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    {
      id: 'reactjs',
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    {
      id: 'gatsby',
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    {
      id: 'html',
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    {
      id: 'css',
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    {
      id: 'python',
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
  ],
};
