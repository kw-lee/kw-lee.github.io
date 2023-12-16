module.exports = {
  pathPrefix: '/',
  siteUrl: 'https://kw-lee.github.io',
  title: 'Kyeongwon Lee',
  description: 'Personal Website of Kyeongwon Lee',
  author: 'Kyeongwon Lee',
  authorAlternative: '이경원',
  introduction: [
    'Hi there! I am a Ph.D. candidate studying Bayesian statistics at Department of Statistics, Seoul National University. I have been studying all topics related to Bayesian statistics, such as Bayesian computation and asymptotic properties.',
    'I love studying with a computer as well as pencel and paper!, I enjoy swimming, photography, and programming (including web and tweak for my devices, which is far from my major 😄).',
  ],
  avatar: 'sudal.png',
  professions: [
    'Ph.D. Candidate',
    'Bayesian Statistician',
  ],
  tocMaxDepth: 2,
  excerptMaxLength: 500,
  birthday: 'Jan, 1995',
  location: 'Seoul, Korea',
  email: 'lkw1718@snu.ac.kr',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT
    || 'https://kw-lee.disqus.com/embed.js',
  pages: {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    research: 'research',
  },
  social: [
    {
      url: '/resume.pdf',
      icon: ['ai', 'cv'],
    }, {
      url: 'https://github.com/kw-lee',
      icon: ['fab', 'github'],
    },
  ],
  // facebook: 'https://www.facebook.com/rolwin.monteiro',
  // instagram: 'https://www.instagram.com/reevan100/',
  // rss: '/rss.xml',
  // wakatime: {
  //   username: 'tcimba',
  //   activity: '7add4047-08f9-4da8-b649-aa114503678f',
  //   language: '460a84ab-722a-4b80-b896-cabaa13ad7eb',
  //   editor: 'd851639a-28d8-4884-949f-d338a858f7e9',
  //   os: 'caf7d0d1-8fd2-4595-a991-363c8583fea9',
  // },
  // contaz'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  education: [
    {
      date: 'Mar 2017 - Present',
      icon: 'graduation-cap',
      title: 'Ph.D. in Statistics',
      location: 'Department of Statistics, Seoul National University, Korea',
    }, {
      date: 'Mar 2013 - Feb 2017',
      icon: 'university',
      title: 'B.S. in Statistics',
      location: 'Department of Statistics, Seoul National University, Korea',
    }, {
      date: 'Mar 2013 - Feb 2017',
      icon: 'university',
      title: 'B.S. in Mathematics',
      location: 'Department of Mathematical Sciences, Seoul National University, Korea',
    }, {
      date: 'Mar 2010 - Feb 2013',
      icon: 'school',
      title: 'High School',
      location: 'Wando High School, Korea',
    }],
  interests: [
    {
      title: 'Statistics',
      icon: 'chart-line',
    }, {
      title: 'Bayesian Statistics',
      icon: 'dice',
    }, {
      icon: 'code',
      title: 'Programming',
    }, {
      icon: ['fab', 'linux'],
      title: 'Open Source Community',
    }, {
      icon: 'camera',
      title: 'Photography',
    }, {
      icon: 'water',
      title: 'Swimming',
    },
  ],
  experience: [
    {
      title: 'Non-Research Projects',
      position: 'left',
      data: [
        {
          date: '2021',
          title: 'Statistical/probabilistic research on the risk of defective occurrence during reliability testing and measures to reduce risk by securing additional sampling',
          location: 'Samsung Electronics Co., Ltd., Korea',
        },
        {
          date: '2020 - 2021',
          title: 'A Study on the Improvement of Index Preparation Methods for Expansion of Actual Transaction Price Index for the apartment house',
          location: 'Korea Real Estate Board (한국부동산원), Korea',
          // description: 'description',
        },
      ],
    }, {
      title: 'Lecture',
      position: 'right',
      data: [
        {
          date: '2020 - 2022',
          title: 'Introduction to Data Science',
          location: 'Humaiin, Korea',
        },
        {
          date: '2018 - 2019',
          title: 'Statistical and Bayesian Inference for Machine Learning',
          location: 'Fastcampus, Korea',
          // description: 'description',
        },
      ],
    }, {
      title: 'Teaching Assistant',
      position: 'right',
      data: [
        {
          title: 'Theory of Statistics',
          date: '2023 Spring',
          location: 'Department of Statistics, Seoul National University, Korea',
        }, {
          title: 'Bayesian Data Analysis',
          date: '2022 Fall',
          location: 'Korea National Open University, Korea',
        }, {
          title: 'Advanced Bayesian Statistics',
          date: '2022 Spring',
          location: 'Department of Statistics, Seoul National University, Korea',
        }, {
          title: 'Data Science with R and Python',
          date: '2020 - 2022',
          location: 'Statistical Research Institute, Seoul National University, Korea',
        }, {
          title: 'Theory of Statistics',
          date: '2021 Spring',
          location: 'Department of Statistics, Seoul National University, Korea',
        }, {
          title: 'Mathematical Statistics',
          date: '2020 Fall',
          location: 'Department of Statistics, Seoul National University, Korea',
        }, {
          title: 'Mathematical Statistics',
          date: '2019 Spring',
          location: 'Department of Statistics, Seoul National University, Korea',
        }, {
          title: 'Statistics Lab.',
          date: '2018 Fall',
          location: 'Department of Statistics, Seoul National University, Korea',
        }, {
          title: 'Mathematical Statistics',
          date: '2018 Spring',
          location: 'Department of Statistics, Seoul National University, Korea',
        }, {
          title: 'Statistics Lab.',
          date: '2017 Fall',
          location: 'Department of Statistics, Seoul National University, Korea',
        }, {
          title: 'Statistics',
          date: '2017 Spring',
          location: 'Department of Statistics, Seoul National University, Korea',
        },
      ],
    }, {
      title: 'Extracurricular Activities',
      position: 'left',
      data: [
        {
          date: '2022',
          title: 'SNU Computer Study Club (SCSC)',
          location: 'Seoul, Korea',
        }, {
          date: '2017 - 2020',
          title: 'Korean user group for Stan (Stan Korea)',
          location: 'Seoul, Korea',
        }, {
          date: '2016',
          title: 'The 58th Student Council of Seoul National University',
          location: 'Seoul, Korea',
        }, {
          date: '2015 - 2016',
          title: 'Founder and President of SNU Industrial Mathematics Club (REPIM)',
          location: 'Seoul, Korea',
        }, {
          date: '2014 - 2015',
          title: 'Operating Committee of the 33th Student Council of College of Natural Sciences, Seoul National University',
          location: 'Seoul, Korea',
        }, {
          date: '2014 - 2015',
          title: 'Founder and President of the first Student Council of Department of Mathematical Sciences, Seoul National University',
          location: 'Seoul, Korea',
        }, {
          date: '2013 - 2018',
          title: 'Seoul National University Photography Club (Youngsang)',
          location: 'Seoul, Korea',
        },
      ],
    },
  ],
  awards: [
    {
      date: '2023',
      title: 'Top Graduate Student Paper Award',
      location: 'Journal of the Korean Statistical Society Summer Conference',
    }, {
      date: '2022',
      title: 'NeurIPS 2022 Scholar Award',
      location: 'Neural Information Processing Systems',
    }, {
      date: '2020',
      title: 'Award for Excellence in Teaching',
      location: 'Department of Statistics, Seoul National University',
      description: 'For teaching Mathematical Statistics',
    }, {
      date: '2019',
      title: 'The Next Generation of Academics in the Field of Fundamental Science (학문후속세대 장학금)',
      location: 'Seoul National University',
    },
  ],
  tagColors: [
    'magenta', 'red', 'volcano', 'orange', 'gold',
    'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple',
  ],
  tags: [
    {
      id: 'python',
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
    {
      id: 'r',
      name: 'R',
      description: 'A language and environment for statistical computing and graphics.',
      color: '#2266B8',
    },
    {
      id: 'cpp',
      name: 'C++',
      description: 'A high-level, general-purpose programming language.',
      color: '#659AD2',
    },
    {
      id: 'julia',
      name: 'Julia',
      description: 'A high-level, general-purpose dynamic programming language, most commonly used for numerical analysis and computational science.',
      color: '#CA3C32',
    },
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
      id: 'rxjs',
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous programming.',
      color: '#b7178c',
    },
  ],
};
