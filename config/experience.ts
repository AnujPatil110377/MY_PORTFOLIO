import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "tata-motors",
    position: "Robotics Software Intern",
    company: "Tata Motors Electric Mobility Division",
    location: "Mumbai, India",
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-07-31"),
    description: [
      "Designed and trained reinforcement learning models for crowd-aware navigation in dynamic environments.",
      "Integrated simulated crowd behaviors with robot control pipeline to enable safe and socially compliant motion.",
      "Developed algorithms for autonomous vehicle navigation in complex urban scenarios.",
    ],
    achievements: [
      "Successfully designed and implemented reinforcement learning models for crowd-aware navigation in dynamic environments.",
      "Integrated simulated crowd behaviors with robot control pipeline to enable safe and socially compliant motion.",
      "Contributed to autonomous vehicle navigation research for urban mobility solutions.",
    ],
    skills: ["Python", "Reinforcement Learning", "ROS2", "Machine Learning", "Computer Vision"],
    companyUrl: "https://www.tatamotors.com",
    logo: "/experience/tata-logo.jpg",
  },
  {
    id: "iit-research",
    position: "UG Researcher",
    company: "Distributed Systems and Control Lab, IIT Jodhpur",
    location: "Jodhpur, India",
    startDate: new Date("2023-08-01"),
    endDate: new Date("2024-04-30"),
    description: [
      "Developed swarm control system for Crazyflie UAVs using ROS2 and C++, achieving sub-10ms latency.",
      "Extended the system to control Khepera IV robots with client-server architecture.",
      "Presented experimental abstract at the 9th IEEE Indian Control Conference (ICC) 2023.",
    ],
    achievements: [
      "Achieved sub-10ms latency in swarm control system for Crazyflie UAVs using ROS2 and C++.",
      "Successfully extended control architecture to Khepera IV robots with robust client-server implementation.",
      "Presented research findings at IEEE Indian Control Conference (ICC) 2023, contributing to academic publications.",
    ],
    skills: ["ROS2", "C++", "Swarm Robotics", "Control Systems", "UAVs"],
    companyUrl: "https://www.iitj.ac.in",
    logo: "/experience/iitj-logo.jpg",
  },
  {
    id: "inter-iit",
    position: "Team Lead",
    company: "Inter-IIT Tech Meet 13.0 (ideaForge Challenge)",
    location: "IIT Jodhpur, India",
    startDate: new Date("2024-10-01"),
    endDate: new Date("2024-12-31"),
    description: [
      "Led team in designing fault-tolerant control algorithm for single motor failure in quadcopters.",
      "Utilized PX4, Matlab/Simulink, C++, and Python for testing and simulation.",
      "Secured 9th position among all IITs in the prestigious competition.",
    ],
    achievements: [
      "Successfully designed and implemented fault-tolerant control algorithm for quadcopter motor failure scenarios.",
      "Led cross-functional team and coordinated development using PX4, Matlab/Simulink, C++, and Python.",
      "Achieved 9th position among all IITs in Inter-IIT Tech Meet 13.0, demonstrating technical excellence.",
    ],
    skills: ["PX4", "MATLAB", "Simulink", "C++", "Python", "Control Systems"],
    companyUrl: "https://inter-iit.tech",
    logo: "/experience/inter-iit-logo.jpg",
  },
];
