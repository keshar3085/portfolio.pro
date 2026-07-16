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

// Fill this object strictly from your resume (no generated content).
export const portfolioData: PortfolioData = {
  name: "Keshar Sahu",
  role: "B.Tech CSE (Data Science) Student | Aspiring Data Analyst",
  intro:
    "Undergraduate student at SSTC with hands-on experience in Python, data analysis, and full-stack development. Aspiring data analyst seeking an internship to apply and expand real-world data analysis skills.",
  about:
    "Certified vocational trainee at Bhilai Steel Plant (SAIL) with project delivery in cybersecurity and data visualization. I have worked on log analysis, data pipelines, and full-stack development through internship and training programs.",
  location: "Bhilai, Chhattisgarh",
  email: "kesharsahu3085@gmail.com",
  phone: "+91 8224824953",
  resumeUrl: "/assets/Keshar_Resume.pdf",
  codingProfiles: {
    github: "https://github.com/keshar3085",
    linkedin: "",
    leetcode: "https://leetcode.com/u/kesharsahu30/",
  },
  skills: [
    { title: "Languages", skills: ["Python", "JavaScript", "c", "c++"] },
    { title: "Frontend", skills: ["HTML", "CSS", "JavaScript"] },
    { title: "Backend", skills: ["Python"] },
    { title: "Databases", skills: ["MongoDB", "SQL"] },
    { title: "Tools", skills: ["Git", "GitHub", "VS Code",] },
    {
      title: "Technologies",
      skills: ["Streamlit", "Pandas", "NumPy", "Plotly", "Data Analysis", "Cybersecurity Log Analysis", "Data Visualization"],
    }
  ],
  experience: [
    {
      company: "Jyesta Corporate Entity (Remote)",
      role: "Full Stack Web Development Intern",
      duration: "Jun 2025 - Aug 2025",
      responsibilities: [
        "Completed a 2-month full stack web development internship with hands-on training in frontend and backend technologies.",
      ],
      achievements: [
        "Earned NSDC-validated Training and Internship Certifications.",
        "Certificate ID: JC-20250724-S JT0Q65",
      ],
    },
    {
      company: "Bhilai Steel Plant (SAIL) - HRDP, Bhilai",
      role: "Project-Based Vocational Trainee",
      duration: "Apr 2025 - Aug 2025",
      responsibilities: [
        "Developed Cybersail Log Analysis Dashboard, a Streamlit-based tool to process SSH logs, detect suspicious behavior, and visualize cybersecurity insights for BSP.",
        "Built a data pipeline using Python, Pandas, NumPy, and Plotly for threat detection and log monitoring.",
      ],
      achievements: [
        "Performance Rating: Excellent",
        "Registration Number: P.25/5541",
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
      degree: "12th, CBSE | 70.00%",
      institution: "Delhi Public School, Bhilai",
      duration: "2021 - 2022",
    },
    {
      degree: "10th, CBSE | 85.00%",
      institution: "Delhi Public School, Bhilai",
      duration: "2019 - 2020",
    },
  ],
  projects: [
    {
      title: "Cybersail Log Analysis Dashboard",
      description:
        "Built a cybersecurity dashboard for BSP to analyze SSH authentication logs, detect brute-force attempts, and visualize threat patterns in real time.",
      tech: ["Python", "MongoDB", "Streamlit", "HTML", "CSS", "JavaScript", "Pandas", "NumPy", "Plotly"],
    },
    {
      title: "Satellite Image Super Resolution",
      description:
        "Developed a super resolution model using SRGAN to transform low-resolution satellite images into high-resolution outputs.",
      tech: ["Python", "GAN", "SRGAN", "Deep Learning"],
    },
  ],
  certifications: [
    "Vocational Training Certificate - Bhilai Steel Plant (SAIL), Aug 2025",
    "NSDC-validated Training and Internship Certification - Jyesta Corporate Entity",
  ],
  achievements: [
    "Certified vocational trainee at Bhilai Steel Plant (SAIL)",
    "Project report on Cybersail Log Analysis Dashboard rated Excellent",
    "SAIL HRDP Regn. No. P.25/5541",
    "Delivered cybersecurity and data visualization project for BSP",
  ],
};
