import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my developer portfolio.",
    metadata: {
      title: "Home",
      description: "Anuj Patil's software developer portfolio - Building intelligent applications for autonomous robotics systems.",
    },
  },
  skills: {
    title: "Skills",
    description: "Full-stack development meets robotics engineering.",
    metadata: {
      title: "Skills",
      description:
        "Anuj Patil's software development and robotics skills - from web applications to autonomous systems programming.",
    },
  },
  projects: {
    title: "Projects",
    description: "Software solutions powering intelligent robotics.",
    metadata: {
      title: "Projects",
      description: "Anuj Patil's software projects for robotics - BLE tracking apps, UAV navigation systems, and autonomous robot applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Anuj Patil for robotics and AI/ML opportunities.",
    },
  },
  resume: {
    title: "Resume",
    description: "Anuj Patil's resume.",
    metadata: {
      title: "Resume",
      description: "Anuj Patil's robotics engineering and AI/ML resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Anuj Patil's professional experience in robotics engineering and AI/ML development.",
    },
  },
};
