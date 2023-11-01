const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jinhoroy.github.io/Portfolio/',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jinho Lee',
  role: 'Future Technology Optimist',
  description:
    'I am a student at the University of Illinois at Urbana Champaign, pursuing a Master of Computer Science Degree. I am highly motivated and extremely passionate about developing. I am currently looking for an innovative company where I can show my passion and skills in the field of computer science!',
  resume: 'https://separate-podium-d7a.notion.site/35392c0d8ec84a6b998c07576670d80d?pvs=4',
  social: {
    linkedin: 'https://www.linkedin.com/in/jin-ho-lee-a66191153/',
    github: 'https://github.com/jinroylee',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Trentube',
    description:
      'Web application that will allow users to interact with YouTube Trending Videos',
    stack: ['MySQL', 'GCP', 'Node', 'TypeScript'],
    sourceCode: 'https://github.com/jinroylee/Trentube',
    livePreview: 'https://separate-podium-d7a.notion.site/Trentube-9fbe555a034e4afa88b8329dc9c4ada0',
  },
  {
    name: 'Career-Pro',
    description:
      'ChatGPT-powered career advising website',
    stack: ['Next.js', 'OpenAI-API', 'Node','Express'],
    sourceCode: 'https://github.com/jinroylee/career_pro_frontend',
    livePreview: 'https://career-pro.pages.dev/',
  },
  {
    name: 'Novus-J-Mate Restaurant App',
    description:
      'Building a web app to provide augmented dining experiences to the users and assist their decisions.',
    stack: ['TypeScript', 'React', 'MongoDB', 'Node','Express'],
    sourceCode: 'https://github.com/jinroylee/Novus-J-Mate-Restaurant',
    livePreview: 'https://27guptamohit.gitlab.io/sign-up',
  },
  {
    name: '3D Reconstruction with Radon Transformation',
    description:
      'Medical image analysis and reconstruction using image processing techniques. Check out the preview by clicking the button below!',
    stack: ['Python', 'Computer Vision'],
    sourceCode: 'https://github.com/jinroylee/3D-Reconstruction-of-Medical-Images-with-Radom-Transformation',
    livePreview: 'https://drive.google.com/file/d/1TptasmPkFpJjEO-C_m44Z4Z2pdB2-wix/view?usp=drive_link',
  },
  {
    name: 'Face Recognition Model with Graph Structure',
    description:
      'Face recognization/relationship analysis using state-of-the-art computer vision technique and graph structure.',
    stack: ['AI', 'CNN', 'GNN'],
    sourceCode: 'https://github.com/jinroylee/Face_Recognition_with_Graph',
    livePreview: 'https://github.com/jinroylee/Face_Recognition_with_Graph',
  },
  {
    name: 'Field Efficiency Visualization',
    description:
      'Visualization of tractor routes and crop harvest data using modern visualization frameworks.',
    stack: ['Javascript', 'Deck.gl', 'amChart'],
    sourceCode: 'https://github.com/jinroylee/fieldefficiency',
    livePreview: 'https://drive.google.com/file/d/1pV2zYLhXFCNM-DUAaMsEksPTXeoBHSxV/view?usp=sharing',
  },
  {
    name: 'Optimal Item Resource Allocation',
    visual: "",
    description:
      'An algorithm for optimization of convex problem that solves the distribution of multiple resources considering social welfare.',
    stack: ['Python', 'Convex Optimization', 'Algorithm'],
    sourceCode: 'https://github.com/jinroylee/Multiple_Item_Allocation',
    livePreview: 'https://github.com/jinroylee/Multiple_Item_Allocation',
  },
]

const skills = [

  'Python',
  'C++',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'React',
  'Node',
  'ML/AI',
  'Computer Vision',
  'Git',
]

const contact = {
  email: 'jinhohl2@illinois.edu',
}

export { header, about, projects, skills, contact }
