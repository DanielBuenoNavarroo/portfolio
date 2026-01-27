export const Links = [
  { href: "/", label: "Home" },
  { href: "/", label: "About me" },
  { href: "/", label: "Services" },
  { href: "/", label: "My Work" },
  { href: "/", label: "Contact me" },
];

export const Tools = [
  { name: "vscode", icon: "/assets/vscode.png" },
  { name: "firebase", icon: "/assets/firebase.png" },
  { name: "mongodb", icon: "/assets/mongodb.png" },
  { name: "figma", icon: "/assets/figma.png" },
  { name: "git", icon: "/assets/git.png" },
];

export const Data = [
  {
    name: "Languages",
    icon1: "/assets/code-icon.png",
    icon2: "/assets/code-icon-dark.png",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    name: "Education",
    icon1: "/assets/edu-icon.png",
    icon2: "/assets/edu-icon-dark.png",
    description: "B.Tech in Computer Science",
  },
  {
    name: "Projects",
    icon1: "/assets/project-icon.png",
    icon2: "/assets/project-icon-dark.png",
    description: "Built more than 5 projects",
  },
];

type fadeUpType = {
  initial?: {
    initialY?: number;
    opacity?: number;
  };
  delay?: number;
};

export function fadeUp({
  initial: { initialY = 60, opacity = 0 } = {},
  delay = 0,
}: fadeUpType = {}) {
  return {
    initial: { y: initialY, opacity },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: {
      type: "spring" as const,
      stiffness: 250,
      damping: 70,
      mass: 1,
      delay,
    },
  };
}
