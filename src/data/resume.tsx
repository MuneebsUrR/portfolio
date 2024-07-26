import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, Icon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Muneeb",
  initials: "MUR",
  url: "https://myportfolio-git-main-muneebsurrs-projects.vercel.app/",
  location: "Islamabad, PK",
  locationLink: "https://www.google.com/maps/place/Islamabad,+Islamabad+Capital+Territory,+Pakistan/@33.6162509,72.7564296,10z/data=!3m1!4b1!4m6!3m5!1s0x38dfbfd07891722f:0x6059515c3bdb02b6!8m2!3d33.6995086!4d73.0362897!16zL20vMGRoZDU?entry=ttu",
  description:
    "Software Engineer and Full Stack Developer. I love building things and helping people.",
  summary:
    "I am a final-year student at [FAST National University](https://www.nu.edu.pk/) with two years of experience in building Apps and Websites. Currently, I am also expanding my skills by learning AI and machine learning. My academic journey has equipped me with a strong foundation in both frontend and backend development, and I am excited to apply my skills to real-world projects and contribute to the tech community.",
  avatarUrl: "/pic8.jpg",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express",
    "GraphQL",
    "Redux",
    "Python",
    "Scikit-learn",
    "OpenCV",
    "FastAPI",
    "Flask",
    "Postgres",
    "Google Cloud",
    "Azure",
    "MongoDB",
    "SQL",
    "Docker",
    "CI/CD",
    "TailwindCSS",
    "Bootstrap",
    ".Net",
    "C/C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "muneebsurrehman@gmail.com",
    tel: "+923446444750",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MuneebsUrR",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muneeb-ur-rehman-bbab45242/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "email",
        url: "mailto:muneebsurrehman@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "FAST NUCES",
      href: "http://isb.nu.edu.pk/",
      badges: [],
      location: "On site",
      title: "Software Developer",
      logoUrl: "/fast.png",
      start: "May 2024",
      end: "September 2024",
      description:
        "Worked on two projects as a Full Stack Developer: created a test execution application that processed over 5000 admission tests every year, and built a website for FAST National University, Islamabad, which saw a 30% increase in user engagement.",
    },
    {
      company: "Pak Level",
      badges: [],
      href: "https://www.paklevel.com/",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/paklevel.svg",
      start: "December 2023",
      end: "Current",
      description:
        "Pak Level is a startup based company which is a Cambridge Assessment International Examination past papers library. As a full stack developer, I was responsible for developing the website and maintaining the backend services.",
    },
    {
      company: "FAST NUCES ISB",
      href: "http://isb.nu.edu.pk/",
      badges: [],
      location: "On Site",
      title: "Lab Demonstrator",
      logoUrl: "/fast.png",
      start: "June 2024",
      end: "September 2024",
      description:
        "As a Lab Demonstrator for Programming Fundamentals, I assist students in mastering C++ concepts.",
    },
    {
      company: "Interns Pk",
      href: "https://interns.pk/",
      badges: [],
      location: "Remote",
      title: "Front End Developer Internship",
      logoUrl: "/internpk.png",
      start: "June 2023",
      end: "July 2023",
      description:
        "Excelled in front-end web development skills (HTML, CSS, Bootstrap & JavaScript) and wordpress. Completed 150+ online tasks and solved problems in each of them",
    },

  ],
  education: [
    {
      school: "FAST NUCES",
      href: "https://www.nu.edu.pk/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/fast2.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Punjab College",
      href: "https://pgc.edu/",
      degree: "HSSC(FSC)",
      logoUrl: "/school.png",
      start: "2019",
      end: "2020",
    },

  ],
  projects: [
    {
      title: "FAST NUCES ISB(Website)",
      href: "",
      dates: "May 2024 - current",
      active: true,
      description:
        "Developing a comprehensive website for the [FAST National University Islamabad](https://www.nu.edu.pk/), enhancing online presence and accessibility. The website features a responsive design, detailed information about academic programs, faculty, and facilities, as well as an events calendar, news section e.t.c",
      technologies: [
        "Next.js",
        "Typescript",
        "Oracle db",
        "TailwindCSS",
        "NEXT UI",
        "Figma"

      ],
      links: [
        {
          type: "Currently Working...",
          href: "mailto:muneebsurrehman@gmail.com",
          icon: <Icons.email className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Test Executor Application",
      href: "",
      dates: "May 2024 - current",
      active: true,
      description:
        "Working on a test executor application for the  [FAST National University Islamabad](https://www.nu.edu.pk/), specifically for MCQs-based admission tests. This application automates the evaluation of multiple-choice questions during university admissions, ensuring efficient and accurate grading. Additionally, it features face detection to verify the identity of test-takers, enhancing the security and integrity of the examination process.",
      technologies: [
        "React js",
        "Node js",
        "Express",
        "MYSQL",
        "TailwindCSS",
        "Material UI",
        "Prisma"
      ],
      links: [
        {
          type: "Currently Working...",
          href: "mailto:muneebsurrehman@gmail.com",
          icon: <Icons.email className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },

    {
      title: "Pak Level",
      href: "https://paklevel-dev.vercel.app/",
      dates: "Dec 2023 - current",
      active: true,
      description:
        "Topical and yearly past papers of more than 100 subjects related to the Cambridge Assessment International Examination.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDb",
        "Mongoose",
        "TailwindCSS",
        "python",
        "beautifulsoup",
        "Shadcn UI",

      ],
      links: [
        {
          type: "Website",
          href: "https://paklevel-dev.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Automated Glaucoma Detection",
      href: "https://github.com/MuneebsUrR/Automated-Glaucoma-Detector",
      dates: "Feb 2024 - Feb 2024",
      active: true,
      description:
        "Glaucoma is a serious eye condition that can lead to blindness if not detected and treated early. Our project aims to develop an automated glaucoma detection system using Convolutional Neural Networks (CNNs), a type of deep learning algorithm.",
      technologies: [
        "Python",
        "scikit-learn",
        "OpenCV",
        "CNN",
        "Deep Learning",
        "Image Processing",

      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/MuneebsUrR/Automated-Glaucoma-Detector",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Job Mingle",
      href: "https://job-mingle-client.vercel.app/",
      dates: "Nov 2023 - Dec 2023",
      active: true,
      description:
        "Job Mingle is a platform where you can find jobs aggregated from sources like LinkedIn, Indeed, Glassdoor, etc. Say goodbye to tedious website searches; just explore Job Mingle.",
      technologies: [
        "React js",
        "Node js",
        "JWT",
        "Express",
        "MongoDB",
        "Bootstrap",
        "Yup/Formik",

      ],
      links: [
        {
          type: "Website",
          href: "https://job-mingle-client.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Timetable scheduling problem",
      href: "https://github.com/MuneebsUrR/Timetable-scheduling-Problem",
      dates: "Feb 2024 - Feb 2024",
      active: true,
      description:
        "Timetable scheduling problem in python with the help of genetic algorithms. The problem is to schedule a set of lectures in such a way that there are no conflicts between the lectures.",
      technologies: [
        "Python",
        "Genetic Algorithms",

        "Data Structures",
        "Algorithms",

        'Artificial Intelligence',

      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/MuneebsUrR/Timetable-scheduling-Problem",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Societas",
      href: "https://github.com/MuneebsUrR/sociteas",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "As a team lead, I spearheaded the development of a University Society Management System using .NET. This comprehensive platform streamlines the administration of university societies by automating membership management, event planning, and resource allocation. The system enhances communication between society members and administrators, providing a user-friendly interface for efficient coordination and engagement",
      technologies: [
        "HTML",
        "CSS",
        ".NET",
        "C#",
        "MVC",
        "Azure",
        "My SQL",

      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/MuneebsUrR/sociteas",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },

    {
      title: "Text Guru",
      href: "https://text-guru.netlify.app/",
      dates: "August 2023 - August 2023",
      active: true,
      description:
        "Text Guru is a powerful React-based web app that revolutionizes text processing. Paraphrase AI-generated content into human-like text, ensuring it's plagiarism-free. Simplify text manipulation with a range of utility features",
      technologies: [
        "React js",
        "CSS",
        "Bootstrap",
        "Javascript",
        "RapidAPI",
        "Netlify",


      ],
      links: [
        {
          type: "Website",
          href: "https://text-guru.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "NewsLer",
      href: "https://github.com/MuneebsUrR/Newsler",
      dates: "August 2023 - August 2023",
      active: true,
      description:
        "Discover the latest in technology, business, entertainment, health, sports, and general news all in one place with Newsler - your go-to news app. Stay informed and up-to-date with a wide range of news categories, all conveniently available for free. Download now and never miss a headline that matters.",
      technologies: [
        "React js",
        "React-Router",
        "CSS",
        "Bootstrap",
        "Javascript",
        "News API",
        "Vercel",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/MuneebsUrR/Newsler",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    

  ],
  hackathons: [
    {
      title: "Advanced React",
      dates: "",
      location: "Meta",
      description:
        "Learned how to use more advanced React concepts and features.",
      image:
        "./meta.png",
      mlh: "",
      links: [{
        title: "certificate",
        icon: <Icons.globe className="size-3" />,
        href: "https://www.coursera.org/account/accomplishments/certificate/EPEMDPTPASLE"
      }],
    },
    {
      title: "Prompt Engineering for developers ",
      dates: "",
      location: "Deep Learning",
      description:
        "",
      image:
        "./deeplearning.png",
      mlh: "",
      links: [{
        title: "certificate",
        icon: <Icons.googleDrive className="size-3" />,
        href: "https://drive.google.com/file/d/1a1C_ceLUA5A3qR_Kn3apPqFi7urb_50P/view?usp=sharing"
      }],
    },
    {
      title: "Python(basic)",
      dates: "",
      location: "Hacker Rank",
      description:
        "Python (basic) skills certification test to verify my python skills.",
      image:
        "./hackerrank.png",
      mlh: "",
      links: [{
        title: "certificate",
        icon: <Icons.googleDrive className="size-3" />,
        href: "https://drive.google.com/file/d/1fJBa2ybGuHrrXsyfvwmJBE9Ox23VvMTG/view"
      }],
    },
    {
      title: "React(basic)",
      dates: "",
      location: "Hacker Rank",
      description:
        "React (basic) skills certification test to verify my react skills.",
      image:
        "./hackerrank.png",
      mlh: "",
      links: [{
        title: "certificate",
        icon: <Icons.googleDrive className="size-3" />,
        href: "https://drive.google.com/file/d/1zbsMQUIvSKpIoTXK4HZYzwQKSXYF0LIy/view"
      }],
    },
    {
      title: "Python Fundamentals",
      dates: "",
      location: "Great Learning",
      description:
        "",
      image:
        "./greatlearning.png",
      mlh: "",
      links: [{
        title: "certificate",
        icon: <Icons.googleDrive className="size-3" />,
        href: "https://drive.google.com/file/d/11hX504_OumneG7epgrcpU0bMCpsGqbG-/view"
      }],
    },
    {
      title: "Javascript and JQuery from scratch",
      dates: "",
      location: "Eduonix",
      description:
        "",
      image:
        "./edu.png",
      mlh: "",
      links: [{
        title: "certificate",
        icon: <Icons.googleDrive className="size-3" />,
        href: "https://drive.google.com/file/d/1qRdQKKqIxf1ls_nMvAkyOJBgfIScYXXD/view"
      }],
    },

  ],
} as const;
