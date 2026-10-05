/**
 * Portfolio Data Configuration for Ashwan Shan
 * Easily update personal details, skills, education, projects, and testimonials here.
 */

const portfolioData = {
  personal: {
    name: "Ashwan Shan",
    primaryRole: "Front-end Developer",
    secondaryRole: "Computer Science Student & Developer",
    about: "I’m a Computer Science student and developer who enjoys building modern, responsive and user-friendly web applications. I work with frontend technologies, backend systems and AI-powered applications while continuously improving my problem-solving and DSA skills.",
    heroGreeting: "I’m Ashwan Shan",
    heroRoleAccent: "Front-end",
    heroRoleSuffix: "Developer",
    hireMeCta: "HIRE ME",
    email: "ashwanishan22@gmail.com",
    phone: "Available on request",
    country: "India",
    city: "Greater Noida",
    university: "Galgotias University",
    githubUrl: "https://github.com/ashwanshan",
    linkedinUrl: "https://www.linkedin.com/in/ashwan-shan-2b9b5a324/",
    instagramUrl: "https://www.instagram.com/ashh._.008/",
    copyrightYear: 2026
  },

  skills: [
    {
      category: "Programming",
      icon: "code",
      description: "Core algorithms, object-oriented design & scripting languages",
      items: ["C++", "Python", "Java", "JavaScript", "TypeScript"]
    },
    {
      category: "Frontend",
      icon: "layout",
      description: "Modern, dynamic and responsive user interfaces",
      items: ["HTML", "CSS", "React.js", "Vite", "Tailwind CSS"]
    },
    {
      category: "Backend",
      icon: "server",
      description: "Server architecture, middleware & scalable RESTful APIs",
      items: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      category: "Database",
      icon: "database",
      description: "Relational, cloud database solutions & real-time stores",
      items: ["PostgreSQL", "Supabase", "MongoDB"]
    },
    {
      category: "Other Core & Tools",
      icon: "tool",
      description: "Version control, algorithmic problem-solving & modern domains",
      items: ["Git", "GitHub", "DSA", "AI/ML", "Cybersecurity"]
    }
  ],

  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Galgotias University",
    status: "Currently in 3rd Year",
    details: "Undergraduate coursework focused on Algorithms, Data Structures, Operating Systems, Web Engineering, and Software Architecture."
  },

  projects: [
    {
      id: "civinova",
      title: "CiviNova – Societal Challenge & Innovation Platform",
      highlight: "SIH 2026 Project",
      description: "An AI and GIS-powered platform for crowdsourcing societal challenges, clustering nearby complaints and connecting civic problems with government innovation workflows.",
      technologies: ["React", "TypeScript", "Node.js", "Supabase", "PostgreSQL", "GIS", "AI"],
      features: [
        "Geo-tagged complaint reporting with pinpoint interactive maps",
        "AI/GIS-based nearby complaint clustering",
        "Haversine distance-based spatial aggregation",
        "Real-time administrative government dashboard",
        "Area-level work orders and department allocation",
        "Student idea assessment and innovation submission",
        "Government problem-to-student idea matching engine",
        "AI fallback system for offline & high-load resilience"
      ],
      image: "assets/images/project-civinova.jpg",
      github: "https://github.com/ashwanshan",
      live: "#"
    },
    {
      id: "algovisualizer",
      title: "AlgoVisualizer – DSA & Graph Visualizer",
      highlight: "Interactive Tool",
      description: "An interactive web-based visualizer for graph traversal algorithms, tree data structures, and sorting algorithms with step-by-step state animations.",
      technologies: ["React", "TypeScript", "DSA", "Algorithms", "Tailwind CSS"],
      features: [
        "Visual step-by-step pathfinding animations (Dijkstra, BFS, DFS, A*)",
        "Binary Search Tree and AVL Tree dynamic node insertion and rebalancing",
        "Sorting visualizer: Quick Sort, Merge Sort, Heap Sort with speed controls",
        "Time and space complexity breakdowns for every algorithm mode"
      ],
      image: "assets/images/project-algovisualizer.jpg",
      github: "https://github.com/ashwanshan",
      live: "#"
    },
    {
      id: "scientific-calculator",
      title: "Scientific Calculator",
      highlight: "Desktop App",
      description: "A Java-based scientific calculator implementing mathematical operations with a clean user interface and object-oriented programming concepts.",
      technologies: ["Java", "OOP", "Swing"],
      features: [
        "Comprehensive trigonometric, logarithmic, and exponent functions",
        "Responsive, intuitive Swing GUI with modern keyboard support",
        "Decoupled calculation engine adhering to clean OOP design",
        "Domain error validation & precision decimal formatting"
      ],
      image: "assets/images/project-calculator.jpg",
      github: "https://github.com/ashwanshan",
      live: "#"
    },
    {
      id: "address-book",
      title: "Address Book Management System",
      highlight: "Data Structures",
      description: "A contact management application supporting adding, deleting, searching and updating contacts using data structures and file handling.",
      technologies: ["C++", "Linked List", "DSA", "File Handling", "OOP"],
      features: [
        "High-performance singly and doubly linked list data structures",
        "Instant multi-field search and alphabetical sorting",
        "Binary file persistence for long-term record preservation",
        "Robust input validation and modular menu interface"
      ],
      image: "assets/images/project-addressbook.jpg",
      github: "https://github.com/ashwanshan",
      live: "#"
    },
    {
      id: "ecart-ml",
      title: "eCart – Personalized Recommendations",
      highlight: "E-Commerce + ML",
      description: "An e-commerce web application with personalized product recommendations based on user behaviour and product data.",
      technologies: ["HTML", "CSS", "JavaScript", "Machine Learning"],
      features: [
        "Behavioral tracking and content-based recommendation logic",
        "Interactive product catalog with category filtering",
        "Dynamic cart management with persistent local storage",
        "Clean, responsive product showcase with smooth checkout flow"
      ],
      image: "assets/images/project-ecart.jpg",
      github: "https://github.com/ashwanshan",
      live: "#"
    },
    {
      id: "ai-portfolio-chatbot",
      title: "AI Portfolio Chatbot",
      highlight: "AI Integration",
      description: "An AI-powered chatbot integrated into a personal portfolio to answer questions about projects, skills, experience and development work.",
      technologies: ["React", "TypeScript", "AI", "Gemini API", "HTML", "CSS"],
      features: [
        "Interactive Q&A answering queries on Ashwan's experience & tech stack",
        "Context-aware AI responses powered by the Google Gemini API",
        "Pre-configured quick prompt chips for prospective recruiters",
        "Lightweight, accessible conversational floating widget"
      ],
      image: "assets/images/project-aichatbot.jpg",
      github: "https://github.com/ashwanshan",
      live: "#"
    }
  ],

  recommendations: [
    {
      id: 1,
      rating: 5,
      title: "Amazing Work!",
      text: "Ashwan demonstrated exceptional technical depth and execution during our development sprints. His ability to build responsive interfaces while maintaining clean code architecture is remarkable.",
      author: "Team Member",
      role: "Full-Stack Developer",
      avatar: "assets/images/avatar-1.svg"
    },
    {
      id: 2,
      rating: 5,
      title: "Great Quality!",
      text: "Ashwan is dedicated, fast-learning, and delivers top-notch frontend work. His problem-solving abilities and focus on intuitive UI/UX make him a valuable asset to any project team.",
      author: "Project Collaborator",
      role: "UI/UX & Frontend Collaborator",
      avatar: "assets/images/avatar-2.svg"
    },
    {
      id: 3,
      rating: 5,
      title: "Great Quality!",
      text: "A passionate developer with great attention to detail. Working with Ashwan on complex algorithmic and full-stack challenges was an absolute pleasure. High initiative and consistent delivery.",
      author: "Mentor",
      role: "Technical Mentor",
      avatar: "assets/images/avatar-3.svg"
    },
    {
      id: 4,
      rating: 5,
      title: "Amazing Work!",
      text: "Ashwan's proactive mindset and grasp of modern web technologies like React, TypeScript, and backend integration helped elevate our project standards. Highly recommended!",
      author: "Developer",
      role: "Peer Software Engineer",
      avatar: "assets/images/avatar-4.svg"
    }
  ],

  partners: [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "TS" },
    { name: "Node.js", icon: "🟢" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "GitHub", icon: "🐙" },
    { name: "Supabase", icon: "⚡" }
  ]
};

// Expose globally
window.portfolioData = portfolioData;
