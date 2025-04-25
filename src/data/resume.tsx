import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, Icon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Muneeb",
  initials: "MUR",
  url: "https://portfolio-brown-six-15.vercel.app/",
  location: "Islamabad, PK",
  locationLink: "https://www.google.com/maps/place/Islamabad,+Islamabad+Capital+Territory,+Pakistan/@33.6162509,72.7564296,10z/data=!3m1!4b1!4m6!3m5!1s0x38dfbfd07891722f:0x6059515c3bdb02b6!8m2!3d33.6995086!4d73.0362897!16zL20vMGRoZDU?entry=ttu",
  description:
    "Software Developer | DevOps Engineer. I love building things and helping people.",
  summary:
    "I am a final-year student at [FAST National University](https://www.nu.edu.pk/) with two years of experience in building Apps and Web Applications. Currently, I am also expanding my skills by learning AI automation, DevOps, Cloud Engineering. My academic journey has equipped me with a strong foundation in both frontend and backend development, and I am excited to apply my skills to real-world projects and contribute to the tech community.",
  avatarUrl: "/mainpic.jpeg",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "Javascript/Typescript",
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
    "AWS",
    "MongoDB",
    "SQL",
    "Docker",
    "CI/CD",
    "Github Actions",
    "jenkins",
    "TailwindCSS",
    "Bootstrap",
    "ASP.Net core",
    "C/C++",
    "C#",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },

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
        url: "#",
        icon: Icons.x,

        navbar: false,
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
      company: "Fiverr",
      href: "https://www.fiverr.com/muneebsurrehman",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/fiverr.png",
      start: "November 2024",
      end: "Current",
      description:
        "Offering full-stack app and web development services on Fiverr. Achieved Level 1 Seller status by successfully delivering 20+ projects on time to international clients.",
    },
    {
      company: "FAST NUCES",
      href: "http://isb.nu.edu.pk/",
      badges: [],
      location: "On site",
      title: "DevOps Engineer",
      logoUrl: "/fast.png",
      start: "May 2024",
      end: "September 2024",
      description:
        "Working on two projects 1) a test execution application that processed over 5000 admission tests every year. 2)  Website for FAST National University, Islamabad",
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
      title: "RethinkVC(A new way of imagining version control)",
      href: "https://github.com/SpunkyAmigo/rethink-vc",
      dates: "August 2024 - may 2025",
      active: true,
      description: "Developed a git integrated tool for software developers and writers to manage their documents in a real time environment achieving a 500ms response time for live edits.",
      technologies: [
        "Nextjs",
        "Nodejs",
        "Yjs",
        "Supabase",
        "Docker",
        "git",
        "Socket.io",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/SpunkyAmigo/rethink-vc",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Veterinary Doctor Booking Platform",
      href: "https://telavets.com/",
      dates: "February 2025 - April 2025",
      active: true,
      description: "[Telavets](https://telavets.com/) – Client facing platform with 5000+ monthly visitors, enabling vet booking via round-robin scheduling for fair appointment distribution. [Televet Express](https://televetexpress.com/) – Vet management dashboard used by 10+ veterinarians for handling appointments booked on telavet, fax prescriptions, and patient data.",
      technologies: [
        "Nextjs",
        "reactjs",
        "Nodejs",
        "Express",
        "firebase",
        "calendly/zoom API",
        "make.com",
      ],
      links: [
        {
          type: "Website",
          href: "https://telavets.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "VibeShare – Social Club & Events App (iOS – In Review)",
      href: "https://drive.google.com/drive/folders/1pwq6fIFwqEgZtSuWSqExO64-pgQcpXgG?usp=sharing",
      dates: "February 2025 - April 2025",
      active: true,
      description: "Designed and developed a social networking app that enables users to create clubs and host events based on shared interests. Implemented key features including real-time chat, club and event management, push notifications, and multi-platform authentication (Google, Apple, Phone).",
      technologies: [
        "React native",
        "Node js",
        "Firebase",
        "Stripe"
      ],
      links: [
        {
          type: ".ipa file",
          href: "https://drive.google.com/drive/folders/1pwq6fIFwqEgZtSuWSqExO64-pgQcpXgG?usp=sharing",
          icon: <Icons.googleDrive className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },

    {
      title: "TourMate AI Travel Planner App",
      href: "https://drive.google.com/drive/folders/11W9Axc905maxN_WYPEvtxHHlAnIQRQu6?usp=sharing",
      dates: "",
      active: true,
      description: "Built a personalized trip planner integrating Google Cloud APIs and Gemini LLM to recommend dynamic routes and destinations. Achieved user-specific travel plans in under 5 seconds",
      technologies: [
        "React native",
        "Firebase",
        "Gemini API",
        "Google Cloud"
      ],
      links: [
        {
          type: ".apk file",
          href: "https://drive.google.com/drive/folders/11W9Axc905maxN_WYPEvtxHHlAnIQRQu6?usp=sharing",
          icon: <Icons.googleDrive className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },

    {
      title: "Test Executor Application",
      href: "#",
      dates: "May 2024 - August 2024",
      active: true,
      description: "Worked on a test executor application for FAST NUCES, specifically for MCQs-based admission tests, facilitating online exams for over 2500+ candidates.",
      technologies: [
        "Reactjs",
        "Nodejs",
        "MySQL"
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Paklevel.com",
      href: "https://www.paklevel.com/",
      dates: "December 2023 - March 2024",
      active: true,
      description: "Topical and yearly past papers on more than 40 subjects related to the Cambridge International Examination.",
      technologies: [
        "Nextjs",
        "MongoDB",
        "Python",
        "BeautifulSoup",
        "Llama3"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.paklevel.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },



  ],
  certificates: [
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
