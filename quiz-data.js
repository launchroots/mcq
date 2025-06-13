// Quiz Database
window.quizDatabase = {
    cybersecurity: {
  title: "Cyber Security",
  description: "Test your knowledge of security principles and threat protection.",
  questions: [
    {
      question: "What is the primary purpose of a firewall?",
      options: [
        "Block unauthorized network access",
        "Speed up internet connection",
        "Encrypt all data transmissions",
        "Prevent physical theft of devices"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which attack involves sending fraudulent emails?",
      options: [
        "Phishing",
        "DDoS",
        "SQL Injection",
        "Man-in-the-middle"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What does VPN stand for?",
      options: [
        "Virtual Private Network",
        "Verified Public Node",
        "Volatile Packet Navigation",
        "Virtual Protocol Number"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which authentication method is most secure?",
      options: [
        "Multi-factor authentication",
        "Single password",
        "PIN code",
        "Security questions"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What type of malware encrypts files for ransom?",
      options: [
        "Ransomware",
        "Spyware",
        "Adware",
        "Trojan"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which protocol provides secure web browsing?",
      options: [
        "HTTPS",
        "HTTP",
        "FTP",
        "SMTP"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "What does CIA stand for in security?",
      options: [
        "Confidentiality, Integrity, Availability",
        "Cyber Intelligence Agency",
        "Critical Infrastructure Assessment",
        "Central Internet Authority"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "Which tool scans for network vulnerabilities?",
      options: [
        "Nmap",
        "Wireshark",
        "Photoshop",
        "Excel"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "What is a brute force attack?",
      options: [
        "Trying all possible password combinations",
        "Physically breaking into a server room",
        "Overloading a network with traffic",
        "Exploiting software bugs"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "Which encryption is strongest for WiFi?",
      options: [
        "WPA3",
        "WEP",
        "WPA",
        "No encryption"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    // Advanced
    {
      question: "What makes a zero-day exploit unique?",
      options: [
        "Vulnerability unknown to the vendor",
        "Attacks at midnight",
        "Requires zero credentials",
        "Affects only Linux systems"
      ],
      correctAnswer: 0,
      difficulty: "advanced"
    },
    {
      question: "What is steganography?",
      options: [
        "Hiding data within other files",
        "Creating strong passwords",
        "Network traffic analysis",
        "Firewall configuration"
      ],
      correctAnswer: 0,
      difficulty: "advanced"
    }
  ]
},
cloud: {
  title: "Cloud Computing",
  description: "Test your knowledge of cloud services and architectures.",
  questions: [
    {
      question: "Which service provides virtual machines?",
      options: [
        "EC2",
        "S3",
        "Lambda",
        "RDS"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What does IaaS stand for?",
      options: [
        "Infrastructure as a Service",
        "Internet as a System",
        "Integrated Application Solution",
        "Internal Authentication Service"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which is NOT a cloud deployment model?",
      options: [
        "Peer-to-peer cloud",
        "Public cloud",
        "Private cloud",
        "Hybrid cloud"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What is the main benefit of elasticity?",
      options: [
        "Automatic scaling",
        "Fixed pricing",
        "Physical security",
        "Limited storage"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which service provides object storage?",
      options: [
        "S3",
        "EC2",
        "Lambda",
        "DynamoDB"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What does PaaS provide?",
      options: [
        "Development platforms",
        "Virtual machines",
        "Physical servers",
        "Networking hardware"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "Which tool manages containers?",
      options: [
        "Kubernetes",
        "Terraform",
        "Ansible",
        "Chef"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "What is serverless computing?",
      options: [
        "Running code without managing servers",
        "No servers used at all",
        "Only physical servers",
        "Free cloud services"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "Which is a NoSQL database service?",
      options: [
        "DynamoDB",
        "MySQL",
        "PostgreSQL",
        "Oracle"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "What is a VPC?",
      options: [
        "Virtual Private Cloud",
        "Virtual Public Cluster",
        "Verified Proxy Certificate",
        "Volume Partition Controller"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    // Advanced
    {
      question: "What is a cold start problem?",
      options: [
        "Initialization delay in serverless",
        "Data center cooling issue",
        "VM boot time",
        "Network latency"
      ],
      correctAnswer: 0,
      difficulty: "advanced"
    },
    {
      question: "What does eventual consistency mean?",
      options: [
        "Data becomes consistent over time",
        "Immediate data synchronization",
        "No data replication",
        "Only primary key consistency"
      ],
      correctAnswer: 0,
      difficulty: "advanced"
    }
  ]
},
data_science: {
  title: "Data Science & Analytics",
  description: "Test your data analysis and machine learning knowledge.",
  questions: [
    {
      question: "Which library is for data manipulation in Python?",
      options: [
        "Pandas",
        "TensorFlow",
        "Matplotlib",
        "Scrapy"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What does CSV stand for?",
      options: [
        "Comma Separated Values",
        "Columnar Storage Volume",
        "Computer Statistical Variables",
        "Coded System Verification"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which graph shows distribution?",
      options: [
        "Histogram",
        "Pie chart",
        "Line graph",
        "Scatter plot"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What is regression used for?",
      options: [
        "Predicting continuous values",
        "Classifying categories",
        "Clustering data",
        "Cleaning datasets"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which is a supervised learning algorithm?",
      options: [
        "Linear Regression",
        "K-means",
        "PCA",
        "Apriori"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What does ETL stand for?",
      options: [
        "Extract, Transform, Load",
        "Evaluate, Test, Learn",
        "Explore, Train, Label",
        "Engine, Table, Link"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "Which metric evaluates classifiers?",
      options: [
        "F1 Score",
        "Mean Squared Error",
        "R-squared",
        "Silhouette Score"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "What is feature engineering?",
      options: [
        "Creating better input features",
        "Building ML models",
        "Data collection",
        "Cloud computing"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "Which is NOT a neural network layer?",
      options: [
        "Random Forest Layer",
        "Convolutional Layer",
        "Recurrent Layer",
        "Dense Layer"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "What does NLP stand for?",
      options: [
        "Natural Language Processing",
        "Neural Learning Process",
        "Normalized Linear Programming",
        "Network Latency Protocol"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    // Advanced
    {
      question: "What is the curse of dimensionality?",
      options: [
        "Problems with high-dimensional data",
        "Too many observations",
        "Small datasets",
        "Low variance features"
      ],
      correctAnswer: 0,
      difficulty: "advanced"
    },
    {
      question: "What does the ROC curve show?",
      options: [
        "TPR vs FPR at different thresholds",
        "Training loss over time",
        "Feature importance",
        "Data distribution"
      ],
      correctAnswer: 0,
      difficulty: "advanced"
    }
  ]
},
digital_marketing: {
  title: "Digital Marketing",
  description: "Test your online marketing strategies knowledge.",
  questions: [
    {
      question: "What does SEO stand for?",
      options: [
        "Search Engine Optimization",
        "Social Engagement Outreach",
        "Systematic Event Organization",
        "Segment Expansion Operations"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which platform is best for B2B marketing?",
      options: [
        "LinkedIn",
        "TikTok",
        "Snapchat",
        "Pinterest"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What does CTR measure?",
      options: [
        "Click-through rate",
        "Cost-to-revenue",
        "Conversion time ratio",
        "Content tracking results"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which is NOT a social media platform?",
      options: [
        "Google Analytics",
        "Instagram",
        "Twitter",
        "Facebook"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What is content marketing?",
      options: [
        "Creating valuable content to attract customers",
        "Buying ad space",
        "Cold emailing",
        "Telemarketing"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which metric measures ad profitability?",
      options: [
        "ROAS",
        "CPC",
        "CTR",
        "Bounce Rate"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "What is a buyer persona?",
      options: [
        "Fictional ideal customer profile",
        "Sales representative",
        "Marketing manager",
        "Product designer"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "Which is an email marketing tool?",
      options: [
        "Mailchimp",
        "Photoshop",
        "Tableau",
        "Slack"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "What does PPC stand for?",
      options: [
        "Pay-Per-Click",
        "Professional Promotion Campaign",
        "Public Profile Creation",
        "Product Placement Contract"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "Which is NOT a type of marketing funnel?",
      options: [
        "Square funnel",
        "AIDA",
        "TOFU/MOFU/BOFU",
        "Sales funnel"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    // Advanced
    {
      question: "What is dark social?",
      options: [
        "Untrackable private shares",
        "Illegal marketing",
        "After-hours posting",
        "Unpublished drafts"
      ],
      correctAnswer: 0,
      difficulty: "advanced"
    },
    {
      question: "What is lookalike audience targeting?",
      options: [
        "Targeting users similar to customers",
        "Targeting competitors' followers",
        "Targeting by location only",
        "Targeting random users"
      ],
      correctAnswer: 0,
      difficulty: "advanced"
    }
  ]
},
ui_ux: {
  title: "UI/UX Design",
  description: "Test your user interface and experience design knowledge.",
  questions: [
    {
      question: "What does UX stand for?",
      options: [
        "User Experience",
        "User Exploration",
        "Universal Exchange",
        "Ultimate Execution"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which tool is for prototyping?",
      options: [
        "Figma",
        "Excel",
        "Word",
        "PowerPoint"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What is wireframing?",
      options: [
        "Basic layout blueprint",
        "Color scheme design",
        "Final product design",
        "User research"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which is NOT a design principle?",
      options: [
        "Randomness",
        "Contrast",
        "Alignment",
        "Proximity"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What does UI stand for?",
      options: [
        "User Interface",
        "Universal Integration",
        "User Integration",
        "Unified Interface"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What is information architecture?",
      options: [
        "Content organization structure",
        "Building design",
        "Network infrastructure",
        "Database schema"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "Which is a usability testing method?",
      options: [
        "Think-aloud protocol",
        "A/B coding",
        "Server load testing",
        "Color theory analysis"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "What is a persona in UX?",
      options: [
        "Fictional user representation",
        "Designer personality",
        "Color palette",
        "Font style"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "Which is NOT a UI component?",
      options: [
        "Backend API",
        "Button",
        "Dropdown",
        "Checkbox"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "What is affordance in design?",
      options: [
        "Perceived functionality",
        "Free design resources",
        "Color contrast",
        "Animation speed"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    // Advanced
    {
      question: "What is Fitts's Law about?",
      options: [
        "Target acquisition time",
        "Color psychology",
        "Font readability",
        "Network latency"
      ],
      correctAnswer: 0,
      difficulty: "advanced"
    },
    {
      question: "What is the golden ratio in design?",
      options: [
        "1:1.618",
        "2:3:5",
        "16:9",
        "4:3"
      ],
      correctAnswer: 0,
      difficulty: "advanced"
    }
  ]
},
mobile_dev: {
  title: "Mobile App Development",
  description: "Test your mobile application development skills.",
  questions: [
    {
      question: "Which language is native to Android?",
      options: [
        "Kotlin",
        "Swift",
        "Dart",
        "C#"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What is React Native used for?",
      options: [
        "Cross-platform apps",
        "Only iOS apps",
        "Only Android apps",
        "Web apps"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which is NOT a mobile OS?",
      options: [
        "Windows XP",
        "Android",
        "iOS",
        "HarmonyOS"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What does APK stand for?",
      options: [
        "Android Package Kit",
        "App Programming Kernel",
        "Application Process Key",
        "Automated Protocol Kit"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which tool is for iOS development?",
      options: [
        "Xcode",
        "Android Studio",
        "Visual Studio",
        "Eclipse"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What is Flutter?",
      options: [
        "UI toolkit for cross-platform apps",
        "Backend framework",
        "Database system",
        "Game engine"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "What is Jetpack Compose?",
      options: [
        "Modern Android UI toolkit",
        "iOS development framework",
        "Cross-platform solution",
        "Backend service"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "Which is a state management solution?",
      options: [
        "Redux",
        "MySQL",
        "Firebase",
        "GraphQL"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "What is a mobile app lifecycle?",
      options: [
        "States from launch to termination",
        "App marketing stages",
        "Development timeline",
        "User engagement phases"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "Which is NOT a mobile architecture pattern?",
      options: [
        "Waterfall",
        "MVVM",
        "MVC",
        "Clean Architecture"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    // Advanced
    {
      question: "What improves React Native performance?",
      options: [
        "Hermes engine",
        "More CSS",
        "Larger images",
        "Complex animations"
      ],
      correctAnswer: 0,
      difficulty: "advanced"
    },
    {
      question: "What is JNI in Android?",
      options: [
        "Java Native Interface",
        "JavaScript Network Integration",
        "Jetpack Navigation Interface",
        "JSON Network Interpreter"
      ],
      correctAnswer: 0,
      difficulty: "advanced"
    }
  ]
},
graphic_design: {
  title: "Graphic Design",
  description: "Test your visual communication and design principles.",
  questions: [
    {
      question: "What does CMYK stand for?",
      options: [
        "Cyan, Magenta, Yellow, Key",
        "Color, Matte, Yield, Kernel",
        "Creative, Modern, Youthful, Kinetic",
        "Contrast, Mood, Y-axis, Kinetics"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which is a vector graphics editor?",
      options: [
        "Adobe Illustrator",
        "Photoshop",
        "Lightroom",
        "Premiere Pro"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What is kerning?",
      options: [
        "Letter spacing adjustment",
        "Color blending",
        "Image cropping",
        "Layer organization"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which is NOT a design element?",
      options: [
        "Algorithm",
        "Line",
        "Shape",
        "Texture"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What is the rule of thirds?",
      options: [
        "Composition guideline",
        "Color theory principle",
        "Printing standard",
        "Font size rule"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What does DPI measure?",
      options: [
        "Print resolution",
        "Color depth",
        "File size",
        "Monitor brightness"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "Which is a complementary color pair?",
      options: [
        "Red and Green",
        "Red and Blue",
        "Blue and Yellow",
        "Black and White"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "What is negative space?",
      options: [
        "Empty space around subjects",
        "Dark color areas",
        "Hidden layers",
        "Transparent elements"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "Which is NOT a typography term?",
      options: [
        "Margin alignment",
        "Leading",
        "Tracking",
        "X-height"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "What is a mood board?",
      options: [
        "Visual inspiration collection",
        "Color palette generator",
        "Design checklist",
        "Project timeline"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    // Advanced
    {
      question: "What is chromatic aberration?",
      options: [
        "Color fringing effect",
        "Perfect color matching",
        "Black and white conversion",
        "High contrast ratio"
      ],
      correctAnswer: 0,
      difficulty: "advanced"
    },
    {
      question: "What is the Bézier curve used for?",
      options: [
        "Creating smooth vector paths",
        "3D modeling",
        "Photo filters",
        "Print layouts"
      ],
      correctAnswer: 0,
      difficulty: "advanced"
    }
  ]
},
fullstack: {
  title: "Full Stack Development",
  description: "Test your frontend and backend development knowledge.",
  questions: [
    {
      question: "What does API stand for?",
      options: [
        "Application Programming Interface",
        "Automated Program Interaction",
        "Application Process Integration",
        "Advanced Programming Instruction"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which is a frontend framework?",
      options: [
        "React",
        "Django",
        "Flask",
        "Spring"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What is HTML used for?",
      options: [
        "Page structure",
        "Styling",
        "Functionality",
        "Database queries"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which is a backend language?",
      options: [
        "Node.js",
        "CSS",
        "HTML",
        "jQuery"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style System",
        "Creative Style Solutions",
        "Coded Styling Syntax"
      ],
      correctAnswer: 0,
      difficulty: "beginner"
    },
    {
      question: "Which is a NoSQL database?",
      options: [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "SQLite"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "What is REST?",
      options: [
        "Architectural style for APIs",
        "Programming language",
        "Frontend framework",
        "Database system"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "Which tool controls versions?",
      options: [
        "Git",
        "NPM",
        "Docker",
        "Webpack"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "What is JWT used for?",
      options: [
        "Authentication",
        "Database queries",
        "CSS styling",
        "HTML templating"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    {
      question: "Which is NOT a JavaScript runtime?",
      options: [
        "JVM",
        "Node.js",
        "Deno",
        "Bun"
      ],
      correctAnswer: 0,
      difficulty: "intermediate"
    },
    // Advanced
    {
      question: "What is time complexity of binary search?",
      options: [
        "O(log n)",
        "O(n)",
        "O(n²)",
        "O(1)"
      ],
      correctAnswer: 0,
      difficulty: "advanced"
    },
    {
      question: "What is the virtual DOM?",
      options: [
        "Lightweight copy of real DOM",
        "3D rendering engine",
        "Database optimization",
        "Network protocol"
      ],
      correctAnswer: 0,
      difficulty: "advanced"
    }
  ]
}

        
    }
; // This closing brace was missing