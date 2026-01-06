// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import threejsLogo from './assets/tech_logo/threejs.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import supabaseLogo from './assets/tech_logo/supabase.jpg';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import openaiapiLogo from './assets/tech_logo/openai.svg';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import canvaLogo from './assets/tech_logo/canva.jpg';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import genaiLogo from './assets/tech_logo/genai.png';

// Experience Section Logo's
import infosysLogo from './assets/company_logo/infosys.png';
import invigoLogo from './assets/company_logo/invigo.jpg';
import salesforceLogo from './assets/company_logo/salesforce.png';

// Education Section Logo's
import pceLogo from './assets/education_logo/pce.png';
import ngyLogo from './assets/education_logo/ngy.png';
import duvLogo from './assets/education_logo/duv.jpg';

// Project Section Logo's
import solarLogo from './assets/work_logo/solar.png';
import calcLogo from './assets/work_logo/calc.png';
import cineLogo from './assets/work_logo/cine.png';
import plannerLogo from './assets/work_logo/planner.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Three JS', logo: threejsLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend & AI',
    skills: [
      { name: 'Supabase', logo: supabaseLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'OpenAI API', logo: openaiapiLogo },
      { name: 'Gen AI', logo: genaiLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Canva', logo: canvaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: infosysLogo,
      role: "AI Intern",
      company: "Infosys Springboard",
      date: "September 2025 – October 2025",
      desc: "Developed an AI-based music composition system by integrating deep learning models into a Librosa audio processing pipeline. Built a context-aware application with a real-time Streamlit UI that generates personalized music based on user moods.",
      skills: [
        "Python",
        "Deep Learning",
        "Streamlit",
        "Librosa",
        "Gen AI",
        "React JS",
        "Tailwind CSS",
        "Next Js",
      ],
    },
    {
      id: 1,
      img: invigoLogo,
      role: "Technical Team Lead",
      company: "Invigo Educare Pvt Ltd",
      date: "May 2024 – August 2025",
      desc: "Led the technical development of an internship platform designed to enhance student engagement. Overseeing a team using Agile workflows, I ensured the delivery of a fully responsive platform that operates seamlessly across devices, significantly boosting team productivity and user accessibility.",
      skills: [
        "React JS",
        "Next JS",
        "JavaScript",
        "Tailwind CSS",
        "Team Leadership",
      ],
    },
    {
      id: 2,
      img: salesforceLogo,
      role: "Salesforce Developer Intern",
      company: "SmartInternz (AICTE)",
      date: "September 2021 - August 2022",
      desc: "Completed an intensive 8-week virtual internship focused on Salesforce fundamentals. Gained hands-on experience in Apex programming, Testing & Debugging, and Process Automation. Successfully earned Super Badges for Apex Specialist and Process Automation Specialist while working with Lightning Web Components (LWC).",
      skills: [
        "Salesforce",
        "Apex",
        "LWC",
        "Process Automation",
        "API",
        "Deployment",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: pceLogo,
      school: "Purnea College of Engineering, Purnea",
      date: "Oct 2022 – June 2026 (Expected)",
      branch: "Electronics and Communication Engineering",
      desc: "I am currently pursuing my Bachelor's degree in Electronics and Communication Engineering at Purnea College of Engineering. While my academic coursework focuses on core electronics, I have actively directed my learning toward Computer Science and software engineering. I have built a strong foundation in Data Structures and Algorithms (DSA) and Full Stack Web Development through self-study and practical projects. My time here has been defined by bridging the gap between hardware principles and modern software solutions, preparing me for a versatile role in the tech industry.",
      degree: "Bachelor of Technology - B.Tech",
    },
    {
      id: 1,
      img: ngyLogo,
      school: "+2 NGY High School, Valmikinagar (BSEB)",
      date: "April 2020 – March 2022",
      desc: "I completed my Intermediate education under the Bihar School Examination Board (BSEB) with a specialization in Physics, Chemistry, and Mathematics (PCM). This period was instrumental in developing my analytical and problem-solving mindset. Alongside my core science subjects, I maintained a strong focus on language studies in English and Hindi. The rigorous curriculum at NGY High School provided the necessary mathematical groundwork that I now apply to complex engineering problems and algorithmic logic.",
      degree: "Higher Secondary (10+2) - PCM",
    },
    {
      id: 2,
      img: duvLogo,
      school: "Dhruv Urmila Vidyapeeth, Radhia (CBSE)",
      date: "April 2018 – March 2020",
      desc: "I completed my foundational schooling under the CBSE curriculum at Dhruv Urmila Vidyapeeth in East Champaran. During these formative years, I studied a diverse range of subjects including Mathematics (Advanced), Science, Social Science, Sanskrit, and English. This phase helped me cultivate a disciplined approach to learning and a broad academic base. My performance in advanced mathematics specifically sparked my early interest in logical reasoning, which eventually led me to pursue an engineering career.",
      degree: "Secondary School Examination (10th)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "3D Solar System",
      description:
        "An immersive and visually stunning 3D simulation of our solar system designed to turn complex celestial dynamics into an interactive educational experience. Built using Three.js, this application renders realistic planetary motion, textures, and lighting in real-time. It provides users with a captivating way to explore orbital mechanics and the scale of the universe directly from their browser.",
      image: solarLogo,
      tags: ["HTML", "CSS", "JavaScript", "Three.js", "3D Modeling"],
      github: "https://github.com/Abhi8531/3D-Solar-System.git",
      webapp: "https://3d-solar-system-by-abhi.vercel.app/",
    },
    {
      id: 1,
      title: "VisioCalc - AI Canvas Calculator",
      description:
        "A cutting-edge, AI-powered calculator that bridges the gap between analog creativity and digital problem-solving. By integrating a drawing canvas with OCR and the OpenAI API, VisioCalc allows users to hand-draw mathematical equations which are instantly recognized and solved in real-time. This full-stack application utilizes a robust TypeScript frontend to ensure type safety and a seamless user experience.",
      image: calcLogo,
      tags: ["React JS", "TypeScript", "OpenAI API", "OCR", "HTML", "CSS"],
      github: "https://github.com/Abhi8531/VisioCalc.git",
      webapp: "https://visio-calc.vercel.app/",
    },
    {
      id: 2,
      title: "CineNest - Movie Discovery Platform",
      description:
        "A powerful and responsive movie discovery platform designed for cinema enthusiasts to explore, filter, and curate their entertainment journey. Leveraging the TMDb API, the app features infinite scroll pagination and advanced filtering capabilities. It utilizes Redux Toolkit for state management to handle personalized watchlists and dynamic recommendations, ensuring a smooth and personalized user interface.",
      image: cineLogo,
      tags: ["React JS", "Redux Toolkit", "TMDb API", "JavaScript", "CSS"],
      github: "https://github.com/Abhi8531/CineNest.git",
      webapp: "https://cine-nest.vercel.app/",
    },
    {
      id: 3,
      title: "Smart Study Planner",
      description:
        "A comprehensive full-stack application designed to revolutionize interview preparation through personalized planning. This smart platform generates custom study schedules and tracks real-time progress across coding challenges and technical concepts. Powered by Next.js and Supabase, it leverages OpenAI to adapt to the user's learning pace, ensuring a structured and efficient path to career success.",
      image: plannerLogo,
      tags: ["React JS", "Node.js", "TypeScript", "Supabase", "OpenAI API"],
      github: "https://github.com/Abhi8531/complete-interview-prep-guide.git",
      webapp: "https://placement-planner.vercel.app/",
    },
  ];  