import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@AnujPatil110377",
    icon: Icons.gitHub,
    link: "https://github.com/AnujPatil110377",
  },
  {
    name: "LinkedIn",
    username: "Anuj Vijay Patil",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/anuj-vijay-patil",
  },
  {
    name: "Twitter",
    username: "@AnujPatil110377",
    icon: Icons.twitter,
    link: "https://twitter.com/AnujPatil110377",
  },
  {
    name: "Gmail",
    username: "b22ee010@iitj.ac.in",
    icon: Icons.gmail,
    link: "mailto:b22ee010@iitj.ac.in",
  },
];
