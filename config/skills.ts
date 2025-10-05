import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "Versatile programming language for AI/ML, data analysis, and automation scripts.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "Web Development",
    description:
      "Full-stack web development using modern frameworks, APIs, and responsive design principles.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "Flutter",
    description:
      "Cross-platform mobile development framework for building native iOS and Android apps.",
    rating: 5,
    icon: Icons.flutter,
  },
  {
    name: "Embedded Systems",
    description:
      "Design and development of microcontroller-based systems for IoT and robotics applications.",
    rating: 5,
    icon: Icons.cplusplus,
  },
  {
    name: "ROS2",
    description:
      "Robot Operating System for developing autonomous robotic applications with real-time communication.",
    rating: 5,
    icon: Icons.settings,
  },
  {
    name: "Computer Vision",
    description:
      "Image processing and visual perception systems for robotics and autonomous navigation.",
    rating: 5,
    icon: Icons.media,
  },
  {
    name: "C++",
    description:
      "High-performance programming for embedded systems, robotics, and real-time applications.",
    rating: 4,
    icon: Icons.cplusplus,
  },
  {
    name: "Machine Learning",
    description:
      "Advanced algorithms for pattern recognition, prediction, and autonomous decision making.",
    rating: 4,
    icon: Icons.cyberpunk,
  },
  {
    name: "PX4",
    description:
      "Professional autopilot software for autonomous vehicles, UAVs, and robotic systems.",
    rating: 4,
    icon: Icons.settings,
  },
  {
    name: "MATLAB",
    description:
      "Technical computing platform for algorithm development, data analysis, and visualization.",
    rating: 4,
    icon: Icons.settings,
  },
  {
    name: "Gazebo",
    description:
      "3D robotics simulator for testing autonomous systems, UAVs, and robotic algorithms.",
    rating: 4,
    icon: Icons.laptop,
  },
  {
    name: "Simulink",
    description:
      "Model-based design environment for multidomain simulation and model-based design.",
    rating: 4,
    icon: Icons.settings,
  },
  {
    name: "Control Systems",
    description:
      "Design and analysis of feedback control systems for autonomous vehicle navigation.",
    rating: 4,
    icon: Icons.settings,
  },
  {
    name: "ESP32",
    description:
      "Microcontroller programming for IoT applications, sensor integration, and embedded systems.",
    rating: 4,
    icon: Icons.cplusplus,
  },
  {
    name: "Linux",
    description:
      "System administration and embedded Linux development for robotics and autonomous systems.",
    rating: 4,
    icon: Icons.laptop,
  },
  {
    name: "Reinforcement Learning",
    description:
      "Training intelligent agents through reward-based learning for autonomous systems.",
    rating: 3,
    icon: Icons.settings,
  },
  {
    name: "SLAM",
    description:
      "Simultaneous Localization and Mapping algorithms for autonomous navigation systems.",
    rating: 3,
    icon: Icons.settings,
  },
  {
    name: "SolidWorks",
    description:
      "3D CAD design and mechanical engineering for robotics hardware and prototyping.",
    rating: 3,
    icon: Icons.settings,
  },
  {
    name: "Git",
    description:
      "Version control and collaborative development for robotics projects and research.",
    rating: 3,
    icon: Icons.gitBranch,
  },
  {
    name: "Verilog",
    description:
      "Hardware description language for FPGA programming and digital system design.",
    rating: 3,
    icon: Icons.settings,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
