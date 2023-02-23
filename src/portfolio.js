const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jinhohl2.github.io/Portfolio/',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jinho Lee',
  role: 'Future Technology Optimist',
  description:
    'I am a student at the University of Illinois at Urbana Champaign, pursuing a Master of Computer Science Degree. I am highly motivated and extremely passionate about developing. I am currently looking for an innovative company where I can show my passion and skills in the field of computer science!',
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
      'Building a web app to provide augmented dining experiences to the users and assist their decisions.',
    stack: ['TypeScript', 'React', 'MongoDB', 'Node','Express'],
    sourceCode: 'https://github.com/jinhohl2/Novus-J-Mate-Restaurant',
    livePreview: 'https://27guptamohit.gitlab.io/sign-up',
  },
  {
    name: '3D Reconstruction with Radon Transformation',
    description:
      'Medical image analysis and reconstruction using image processing techniques. Check out the preview by clicking the button below!',
    stack: ['Python', 'Computer Vision'],
    sourceCode: 'https://github.com/jinhohl2/3D-Reconstruction-of-Medical-Images-with-Radom-Transformation',
    livePreview: 'https://drive.google.com/file/d/1TptasmPkFpJjEO-C_m44Z4Z2pdB2-wix/view?usp=sharing',
  },
  {
    name: 'Field Efficiency Visualization',
    description:
      'Visualization of tractor routes and crop harvest data using modern visualization frameworks.',
    stack: ['Javascript', 'Deck.gl', 'amChart'],
    sourceCode: 'https://github.com/jinhohl2/fieldefficiency',
    livePreview: 'https://drive.google.com/file/d/1pV2zYLhXFCNM-DUAaMsEksPTXeoBHSxV/view?usp=sharing',
  },
  {
    name: 'Face Recognition Model with Graph Structure',
    description:
      'Face recognization/relationship analysis using state-of-the-art computer vision technique and graph structure.',
    stack: ['Deep Learning/AI', 'CNN', 'GNN'],
    sourceCode: 'https://github.com/jinhohl2/Face_Recognition_with_Graph',
    livePreview: 'https://github.com',
  },
  {
    name: 'Optimal Item Resource Allocation',
    visual: "",
    description:
      'An algorithm for optimization of convex problem that solves the distribution of multiple resources considering social welfare.',
    stack: ['Python', 'Convex Optimization'],
    sourceCode: 'https://github.com/jinhohl2/Multiple_Item_Allocation',
    livePreview: 'https://github.com',
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
