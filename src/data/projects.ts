export type Project = {
  title: string;
  description: string;
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Product-Led Growth",
    description: "Build something of value and they will come and spread the word. Worry about distrubution after value is validated.",
    link: "product-led-growth",
    },
  {
    title: "Patience",
    description: "Take the time to do and refine research, knowing that a majority of experimentation yields inconclusive results.",
    link: "patience",
  },
  {
    title: "Realism",
    description: "Stay close to the user's real life experience, emotions, and understanding. Make it personal.",
    link: "realism",
  },
];

export default projects;
