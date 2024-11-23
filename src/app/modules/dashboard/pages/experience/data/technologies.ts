import { ITechnology } from "src/app/core/models/project.model";

export const TECHNOLOGIES: ITechnology[] = [
  {
    category: 'Backend',
    items: [
      {
        name: 'Python',
        logo: "/assets/images/logos/python.png",
        id: 1,
        url: 'https://www.python.org/',
        active: true,
        description: "Python is a programming language that lets you work quickly and integrate systems more effectively."
      },
      {
        name: 'Node.js',
        logo: "/assets/images/logos/nodejs.png",
        id: 2,
        url: 'https://nodejs.org/',
        active: true,
        description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
      },
      {
        name: 'Express.js',
        logo: "/assets/images/logos/expressjs.png",
        id: 3,
        url: 'https://expressjs.com/',
        active: true,
        description: "Express.js is a fast, unopinionated, minimalist web framework for Node.js."
      },
    ],
  },
  {
    category: 'Frontend',
    items: [
      {
        name: 'React',
        logo: "/assets/images/logos/react.png",
        id: 4,
        url: 'https://reactjs.org/',
        active: true,
        description: "React is a JavaScript library for building user interfaces."
      },
      {
        name: 'Angular',
        logo: "/assets/images/logos/angular.png",
        id: 5,
        url: 'https://angular.io/',
        active: true,
        description: "Angular is a platform for building mobile and desktop web applications."
      },
      {
        name: 'Vue.js',
        logo: "/assets/images/logos/vuejs.png",
        id: 6,
        url: 'https://vuejs.org/',
        active: true,
        description: "Vue.js is a progressive framework for building user interfaces."
      },
    ],
  },
  {
    category: 'Mobile',
    items: [
      {
        name: 'Flutter',
        logo: "/assets/images/logos/flutter.png",
        id: 7,
        url: 'https://flutter.dev/',
        active: true,
        description: "Flutter is an open-source UI software development kit created by Google."
      },
      {
        name: 'React Native',
        logo: "/assets/images/logos/react-native.png",
        id: 8,
        url: 'https://reactnative.dev/',
        active: true,
        description: "React Native is an open-source UI software framework for building mobile applications."
      },
    ],
  },
  {
    category: 'Desktop',
    items: [
      {
        name: 'Electron',
        logo: "/assets/images/logos/electron.png",
        id: 9,
        url: 'https://www.electronjs.org/',
        active: true,
        description: "Electron is a framework for building cross-platform desktop apps with JavaScript, HTML, and CSS."
      },
      {
        name: '.NET',
        logo: "/assets/images/logos/dotnet.png",
        id: 10,
        url: 'https://dotnet.microsoft.com/',
        active: true,
        description: ".NET is a free, cross-platform, open-source developer platform for building many different types of applications."
      },
    ],
  },
  {
    category: 'Graphic',
    items: [
      {
        name: 'Adobe Photoshop',
        logo: "/assets/images/logos/photoshop.png",
        id: 11,
        url: 'https://www.adobe.com/products/photoshop.html',
        active: true,
        description: "Adobe Photoshop is a raster graphics editor developed by Adobe."
      },
      {
        name: 'Adobe Illustrator',
        logo: "/assets/images/logos/illustrator.png",
        id: 12,
        url: 'https://www.adobe.com/products/illustrator.html',
        active: true,
        description: "Adobe Illustrator is a vector graphics editor and design program developed by Adobe."
      },
      {
        name: 'Figma',
        logo: "/assets/images/logos/figma.png",
        id: 13,
        url: 'https://www.figma.com/',
        active: true,
        description: "Figma is a web-based interface design application with real-time collaboration features."
      },
    ],
  },
];
