import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
  customComponent?: string; // For special components like architecture diagrams
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "ble-tracker",
    companyName: "BLE-Tracker-IITJ",
    type: "Personal",
    category: ["Mobile Dev", "Backend"],
    shortDescription: "ESP32-based BLE tracking system inspired by Apple AirTag with Flutter app support, encrypted beacon payloads, and 6-month battery life.",
    githubLink: "https://github.com/AnujPatil110377/BLE-Tracker-IITJ",
    techStack: ["C++", "Python", "Flutter", "Embedded Systems"],
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-06-30"),
    companyLogoImg: "/projects/ble-tracker/cover.png",
    descriptionDetails: {
      paragraphs: [
        "Developed an ESP32-based BLE tracking system inspired by Apple AirTag and Google Find My Device, with Flutter app support for real-time tracking.",
        "Implemented background location updates in the app and encrypted beacon payloads for privacy-preserving tracking.",
        "Designed custom firmware optimized for long-range BLE communication and battery life up to 6 months."
      ],
      bullets: [
        "ESP32-based hardware design with optimized power consumption",
        "Flutter mobile application with real-time tracking capabilities",
        "Encrypted beacon payloads for privacy-preserving tracking",
        "Background location updates and real-time notifications",
        "Extended battery life up to 6 months through power optimization"
      ]
    },
    pagesInfoArr: []
  },
  {
    id: "rl-navigation",
    companyName: "TurtleBot4-RL",
    type: "Research",
    category: ["AI/ML", "Robotics"],
    shortDescription: "A custom Gymnasium environment for deep reinforcement learning (DRL) with TurtleBot4 in ROS 2 & Gazebo, featuring robust navigation and advanced SLAM capabilities.",
    githubLink: "https://github.com/AnujPatil110377/Turtlebot4-RL",
    websiteLink: "https://drive.google.com/file/d/1nxP_nftTVpdNu74930hxVFkkDXxcX2Zu/view",
    techStack: ["Python", "Reinforcement Learning", "ROS2", "Gazebo", "SLAM", "Machine Learning"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-30"),
    companyLogoImg: "/projects/rl-navigation/cover.jpg",
    descriptionDetails: {
      paragraphs: [
        "Developed a comprehensive reinforcement learning environment for TurtleBot4 navigation and simultaneous localization and mapping (SLAM) tasks built on ROS 2 Jazzy and Gazebo Harmonic.",
        "Implemented advanced obstacle tracking system with Model Predictive Path Integral (MPPI) controller and SMAC Hybrid planner for ultra-conservative navigation and robust obstacle avoidance.",
        "Created Gymnasium-compliant API supporting multiple RL algorithms including PPO, SAC, and TD3 with dynamic goal assignment and completion logic for autonomous navigation training."
      ],
      bullets: [
        "Advanced RL environment with comprehensive TurtleBot4 navigation capabilities",
        "Built-in SLAM integration for autonomous mapping and localization with AMCL",
        "Dynamic obstacle detection and tracking system for complex scenarios",
        "Support for PPO, SAC, TD3 and other state-of-the-art RL algorithms",
        "Ultra-conservative safety margins with rigorous obstacle avoidance",
        "Gymnasium-compliant API for easy integration and fast prototyping",
        "Headless and visual simulation modes with optimized performance"
      ]
    },
    pagesInfoArr: [
      {
        title: "TurtleBot4-RL Navigation Demo",
        imgArr: [],
        description: "Live demonstration of TurtleBot4 autonomous navigation using reinforcement learning in Gazebo simulation environment.",
        customComponent: "VideoEmbed"
      }
    ]
  },
  {
    id: "px4-path-planner",
    companyName: "Path_planning_PX4",
    type: "Research",
    category: ["Robotics", "AI/ML"],
    shortDescription: "Integration of ego-planner-swarm with PX4 for planning real-time collision-free and obstacle-free trajectories in bounded environment.",
    githubLink: "https://github.com/AnujPatil110377/Path_planning_PX4",
    websiteLink: "https://drive.google.com/file/d/1mS4SwN_tnUayqp6AD7laSQx_sVaSmY35/view",
    techStack: ["C++", "PX4", "ROS2", "Computer Vision", "Embedded Systems"],
    startDate: new Date("2024-07-01"),
    endDate: new Date("2024-12-31"),
    companyLogoImg: "/projects/px4-planner/cover.jpg",
    descriptionDetails: {
      paragraphs: [
        "Integrated ego-planner-swarm algorithm with PX4 autopilot system to enable real-time trajectory planning for autonomous multi-rotor drones in complex environments.",
        "Developed collision-free and obstacle-free trajectory generation system that operates in bounded environments with dynamic obstacle detection and avoidance.",
        "Implemented complete autonomous flight system for multi-rotor drones equipped with PX4 autopilot, depth camera, and on-board computer for real-time obstacle avoidance."
      ],
      bullets: [
        "Integration of ego-planner-swarm with PX4 autopilot for real-time planning",
        "Real-time collision-free trajectory generation in bounded environments",
        "Autonomous multi-rotor drone navigation with obstacle avoidance",
        "Depth camera integration for real-time environment perception",
        "On-board computer processing for autonomous flight operations",
        "Dynamic obstacle detection and trajectory re-planning capabilities"
      ]
    },
    pagesInfoArr: [
      {
        title: "PX4 Fast Planner Demo",
        imgArr: [],
        description: "Real-time demonstration of PX4 ego-planner-swarm integration for autonomous drone navigation and obstacle avoidance.",
        customComponent: "VideoEmbed"
      }
    ]
  },
  {
    id: "linkedin-scraper",
    companyName: "LinkedIn",
    type: "Personal",
    category: ["Web Dev", "Backend"],
    shortDescription: "Automated LinkedIn profile scraper and email extraction tool processing 10,000+ profiles with 85% accuracy, featuring anti-detection mechanisms and data visualization.",
    githubLink: "https://github.com/AnujPatil110377/linkedIn_Scraper",
    techStack: ["Python", "Web Scraping", "Data Analysis", "Selenium"],
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-04-30"),
    companyLogoImg: "/projects/linkedin-scraper/cover.jpg",
    descriptionDetails: {
      paragraphs: [
        "Built a comprehensive LinkedIn profile scraping and email extraction system capable of processing over 10,000 profiles with 85% accuracy rate.",
        "Implemented sophisticated anti-detection mechanisms including rotating proxies, randomized delays, and browser fingerprint spoofing to avoid rate limiting.",
        "Developed data analysis and visualization components for extracted information, enabling insights into professional networks and contact patterns."
      ],
      bullets: [
        "Automated scraping of 10,000+ LinkedIn profiles with 85% success rate",
        "Advanced anti-detection techniques including proxy rotation and delay randomization",
        "Email extraction and validation with pattern matching algorithms",
        "Data visualization dashboard for scraped information analysis",
        "Compliance with rate limiting and ethical scraping practices"
      ]
    },
    pagesInfoArr: [
      {
        title: "LinkedIn Scraper Demo",
        imgArr: [],
        description: "Demonstration of automated LinkedIn profile scraping and job data extraction with real-time processing visualization.",
        customComponent: "GifEmbed"
      }
    ]
  },
  {
    id: "sketch-generation",
    companyName: "AI-Sketch-Generator",
    type: "Personal",
    category: ["AI/ML", "Computer Vision"],
    shortDescription: "AI-powered sketch generation system using Generative Adversarial Networks, converting photos to artistic sketches with 92% user satisfaction and multiple artistic styles.",
    githubLink: "https://github.com/AnujPatil110377/quick_draw",
    techStack: ["Python", "Machine Learning", "Computer Vision", "Deep Learning"],
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-10-31"),
    companyLogoImg: "/projects/sketch-generation/cover.jpg",
    descriptionDetails: {
      paragraphs: [
        "Developed an AI-powered sketch generation system using Generative Adversarial Networks (GANs) to convert photographs into artistic sketches.",
        "Implemented multiple artistic styles including pencil sketches, charcoal drawings, and abstract interpretations with high-quality output generation.",
        "Achieved 92% user satisfaction rating through extensive testing and iterative model improvements, with support for batch processing and real-time generation."
      ],
      bullets: [
        "GAN-based architecture for photo-to-sketch conversion",
        "Multiple artistic style options (pencil, charcoal, abstract)",
        "92% user satisfaction rating from testing feedback",
        "Real-time sketch generation with optimized inference pipeline",
        "Batch processing capabilities for multiple image conversion"
      ]
    },
    pagesInfoArr: [
      {
        title: "AI Sketch Generation Demo",
        imgArr: [],
        description: "Real-time demonstration of AI-powered sketch generation using RNN models to convert drawings into artistic sketches.",
        customComponent: "GifEmbed"
      }
    ]
  },
  {
    id: "mips-simulator",
    companyName: "Mips_simulator",
    type: "Academic",
    category: ["Systems", "Backend"],
    shortDescription: "Complete MIPS processor simulator with 5-stage pipeline, hazard detection, and forwarding unit, supporting 50+ instructions with comprehensive debugging tools.",
    githubLink: "https://github.com/AnujPatil110377/Mips_simulator",
    techStack: ["C++", "Computer Architecture", "Assembly", "Systems Programming"],
    startDate: new Date("2023-08-01"),
    endDate: new Date("2023-12-31"),
    companyLogoImg: "/projects/mips-simulator/cover.png",
    descriptionDetails: {
      paragraphs: [
        "Designed and implemented a complete MIPS processor simulator with full 5-stage pipeline architecture including fetch, decode, execute, memory, and writeback stages.",
        "Integrated advanced features including hazard detection unit, data forwarding mechanisms, and branch prediction to achieve realistic processor behavior.",
        "Developed comprehensive debugging and visualization tools supporting 50+ MIPS instructions with detailed execution tracing and performance analysis."
      ],
      bullets: [
        "Complete 5-stage pipeline implementation with realistic timing",
        "Hazard detection and data forwarding for pipeline optimization",
        "Support for 50+ MIPS instructions including arithmetic, logical, and memory operations",
        "Comprehensive debugging interface with step-by-step execution",
        "Performance analysis tools for instruction throughput and pipeline efficiency"
      ]
    },
    pagesInfoArr: []
  },
  {
    id: "safe-landing-detection",
    companyName: "Safe-landing-Spot-Detection-for-drones",
    type: "Research",
    category: ["AI/ML", "Computer Vision"],
    shortDescription: "A comprehensive deep learning project implementing multiple semantic segmentation models for drone imagery analysis, including RGB, RGBD, and MARS models for safe landing spot detection.",
    githubLink: "https://github.com/AnujPatil110377/Safe-landing-Spot-Detection-for-drones",
    techStack: ["Python", "Deep Learning", "Computer Vision", "PyTorch", "TensorFlow"],
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-05-31"),
    companyLogoImg: "/projects/safe-landing-detection/cover.jpg",
    descriptionDetails: {
      paragraphs: [
        "Developed a comprehensive deep learning project implementing multiple semantic segmentation models for drone imagery analysis, focusing on safe landing spot detection for autonomous drones.",
        "Implemented three distinct models: RGB model for standard image segmentation, RGBD model combining RGB and depth information, and MARS model specialized for planetary terrain analysis using advanced UNet++ architecture.",
        "Achieved 85%+ IoU on validation set with the RGB model, enhanced segmentation accuracy through depth-aware features in RGBD model, and optimized MARS model for safe landing spot detection on Mars terrain with ONNX export for efficient deployment."
      ],
      bullets: [
        "RGB Model: Standard semantic segmentation achieving 85%+ IoU on drone imagery",
        "RGBD Model: Multi-modal fusion combining RGB and depth for enhanced accuracy",
        "MARS Model: UNet++ architecture with attention mechanisms for planetary analysis",
        "Advanced data augmentation using Albumentations for robust training",
        "Real-time inference capabilities with ONNX model export for deployment",
        "Safe landing spot detection algorithms with terrain risk assessment",
        "Comprehensive evaluation metrics and visualization tools"
      ]
    },
    pagesInfoArr: []
  }
];

export const featuredProjects = Projects.slice(0, 3);
