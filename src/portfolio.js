const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jinhohl2.github.io/Portfolio/',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jinho Lee',
  role: 'Master Student in Computer Science',
  description:
    'I am a .',
  resume: 'https://drive.google.com/file/d/18dcolKelO_jX1IGeYejMhadFAGrhF97r/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/jin-ho-lee-a66191153/',
    github: 'https://github.com/jinhohl2',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Novus-J-Mate Restaurant App',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['TypeScript', 'React', 'MongoDB', 'Node','Express'],
    sourceCode: 'https://github.com/jinhohl2/Novus-J-Mate-Restaurant',
    livePreview: 'https://27guptamohit.gitlab.io/novus-j-mate-restaurant/',
  },
  {
    name: '3D Reconstruction with Radon Transformation',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Python', 'Computer Vision'],
    sourceCode: 'https://github.com/jinhohl2/3D-Reconstruction-of-Medical-Images-with-Radom-Transformation',
    livePreview: 'https://drive.google.com/file/d/1TptasmPkFpJjEO-C_m44Z4Z2pdB2-wix/view?usp=sharing',
  },
  {
    name: 'Field Efficiency Visualization',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Javascript', 'Deck.gl', 'amChart'],
    sourceCode: 'https://github.com/jinhohl2/fieldefficiency',
    livePreview: 'https://drive.google.com/file/d/1pV2zYLhXFCNM-DUAaMsEksPTXeoBHSxV/view?usp=sharing',
  },
  {
    name: 'Face Recognition Model with Graph Structure',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Deep Learning/AI', 'CNN', 'GNN'],
    sourceCode: 'https://github.com/jinhohl2/Face_Recognition_with_Graph',
    livePreview: 'https://github.com',
  },
  {
    name: 'Optimal Item Resource Allocation',
    visual: "",
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Python', 'Convex Optimization'],
    sourceCode: 'https://github.com/jinhohl2/Multiple_Item_Allocation',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
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
  // email is optional - if left empty Contact section won't show up
  email: 'jinhohl2@illinois.edu',
}

export { header, about, projects, skills, contact }
