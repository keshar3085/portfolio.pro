export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  achievements?: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  details?: string;
};

export type SkillGroup = {
  title:
    | "Languages"
    | "Frontend"
    | "Backend"
    | "Databases"
    | "Tools"
    | "Technologies";
  skills: string[];
};

export type PortfolioData = {
  name: string;
  role: string;
  intro: string;
  about: string;
  location?: string;
  email: string;
  phone: string;
  resumeUrl: string;
  profileImage?: string;
  codingProfiles: {
    github?: string;
    linkedin?: string;
    leetcode?: string;
  };
  skills: SkillGroup[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  certifications: string[];
  achievements: string[];
};

export const portfolioData: PortfolioData = {
  name: "Keshar Sahu",

  role: "B.Tech CSE (Data Science) Student | Aspiring Data Analyst",

  intro:
    "B.Tech CSE (Data Science) student skilled in Python, SQL, data analysis, machine learning, and full-stack development. Hands-on experience through internships, vocational training, and projects in cybersecurity and data visualization.",

  about:
    "Undergraduate student at Shri Shankaracharya Technical Campus with practical experience in Python, data analysis, cybersecurity log analysis, and full-stack development. Certified vocational trainee at Bhilai Steel Plant (SAIL) with project experience in building data-driven cybersecurity solutions. Also completed a Full Stack Web Development internship and the Lenovo LEAP NextGen Scholar Program.",

  location: "Bhilai, Chhattisgarh",

  email: "kesharsahu3085@gmail.com",

  phone: "+91 8224824953",

  resumeUrl: "/assets/kesharesume.pdf",

  codingProfiles: {
    github: "https://github.com/keshar3085",
    linkedin: "https://www.linkedin.com/in/keshar-sahu-6710452a2/",
    leetcode: "https://leetcode.com/u/kesharsahu30/",
  },

  skills: [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "SQL"],
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Backend",
      skills: ["Python", "Streamlit"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "SQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      title: "Technologies",
      skills: [
        "Pandas",
        "NumPy",
        "Plotly",
        "Data Analysis",
        "Data Visualization",
        "Machine Learning",
        "Cybersecurity",
        "Full-Stack Development",
      ],
    },
  ],

  experience: [
    {
      company: "Jyesta Corporate Entity",
      role: "Full Stack Web Development Intern",
      duration: "Jun 2025 - Aug 2025",
      responsibilities: [
        "Completed a 2-month Full Stack Web Development internship with hands-on experience in frontend and backend technologies.",
      ],
      achievements: [
        "Earned NSDC-validated Training and Internship Certification.",
      ],
    },

    {
      company: "Bhilai Steel Plant (SAIL) - HRDP",
      role: "Project-Based Vocational Trainee",
      duration: "Aug 2025",
      responsibilities: [
        "Developed a Streamlit-based SSH Log Analysis Dashboard to detect suspicious login behavior and visualize cybersecurity insights.",
        "Built data processing pipelines using Python, Pandas, NumPy, and Plotly for log analysis and threat detection.",
      ],
      achievements: [
        "Performance Rating: Excellent",
        "Registration Number: P.25/5541",
      ],
    },

    {
      company: "Lenovo LEAP - NextGen Scholar Program",
      role: "Artificial Intelligence Learner",
      duration: "2025",
      responsibilities: [
        "Completed an Artificial Intelligence learning program through the Lenovo LEAP NextGen Scholar Program.",
      ],
      achievements: [
        "Achieved Grade A in the program.",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering (Data Science)",
      institution: "Shri Shankaracharya Technical Campus (SSTC), Bhilai",
      duration: "2023 - 2027",
    },
    {
      degree: "12th, CBSE (PCM with Computer Science) | 68.00%",
      institution: "Delhi Public School, Bhilai",
      duration: "2022 - 2023",
    },
    {
      degree: "10th, CBSE | 85.00%",
      institution: "Delhi Public School, Bhilai",
      duration: "2020 - 2021",
    },
  ],

  projects: [
    {
      title: "Cybersail Log Analysis Dashboard",
      description:
        "Built a cybersecurity dashboard for BSP to analyze SSH authentication logs, identify brute-force attempts, detect suspicious activity, and visualize threat patterns.",
      tech: [
        "Python",
        "MongoDB",
        "Streamlit",
        "Pandas",
        "NumPy",
        "Plotly",
      ],
      github: "https://github.com/keshar3085/cybersecurity-dashboard",
      live: "https://cybersecurity-dashboard-hgshdycydfye2gfipclbby.streamlit.app/",
    },

    {
      title: "Smart Inventory Management System",
      description:
        "Developed a smart inventory management solution during the IIIT Naya Raipur Hackathon to streamline inventory tracking, stock monitoring, and inventory organization.",
      tech: [
        "Python",
        "Web Development",
        "Database",
      ],
    },

    {
      title: "Satellite Image Super Resolution",
      description:
        "Developed an SRGAN-based deep learning model to enhance low-resolution satellite images into high-resolution outputs.",
      tech: [
        "Python",
        "GAN",
        "SRGAN",
        "Deep Learning",
      ],
    },
  ],

  certifications: [
    "Vocational Training Certificate - Bhilai Steel Plant (SAIL), Aug 2025",
    "NSDC-validated Training and Internship Certification - Jyesta Corporate Entity",
    "Lenovo LEAP NextGen Scholar Program - Grade A",
  ],

  achievements: [
    "Track Winner - IIIT Naya Raipur Hackathon",
    "Project report on Cybersail Log Analysis Dashboard rated Excellent",
    "Certified vocational trainee at Bhilai Steel Plant (SAIL)",
    "Achieved Grade A in Lenovo LEAP NextGen Scholar Program",
  ],
};
