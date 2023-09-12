type Social = {
  label: string;
  link: string;
};

type Service = {
  name: string;
  description: string;
};

type Presentation = {
  mail: string;
  title: string;
  heading: string;
  description: string;
  socials: Social[];
  services: Service[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "noemi.titarenco@gmail.com",
  title: "Funkubator",
  heading: "*imagine a world where the artist is the rule,* not the exception",
  // profile: "/profile.webp",
  description:
    "*We work with builders to cultivate real value in the early stage of software product development.* We take this same vision and bring it to our enterprise partners to develop high-engagement prototypes and products.",
  socials: [
    {
      label: "Contact",
      link: "https://form.jotform.com/231117875986065",
    },
  ],
  services: [
    {
      name: "Gaming Innovation",
      description: "Leverage cutting-edge gaming concepts to create compelling and interactive user experiences."
    },
    {
      name: "Interactive Web Content Development",
      description: "Craft unique web experiences that blur the line between software and art, engaging users like never before."
    },
    {
      name: "EdTech Solutions",
      description: "Merge the worlds of education and technology, developing products that are not only functional but also artistic and captivating."
    },
    {
      name: "Ideation Workshops",
      description: "Collaborative brainstorming sessions to conceptualize next-generation software products tailored to your corporate needs."
    },
    {
      name: "Hands-on Builder Collaboration",
      description: "Work side-by-side with our team of expert builders to ensure your vision comes to life seamlessly."
    },
    {
      name: "Art-Driven Software Design",
      description: "Embrace a design philosophy that integrates artistic principles, ensuring your software stands out in the market."
    },
    {
      name: "Prototyping & MVP Development",
      description: "Rapidly turn ideas into tangible prototypes, enabling faster validation and iteration."
    },
    {
      name: "User Engagement Analysis",
      description: "Utilize our expertise to analyze and enhance user interaction and engagement across your software products."
    },
    {
      name: "Customized EdTech Platforms",
      description: "Design and develop platforms specifically tailored to modern educational needs, combining interactivity and learning."
    },
    {
      name: "Process Insight",
      description: "Dive deep into your process, understanding the strengths and weaknesses of your approach and how it can support your brand."
    }
  ], 
};

export default presentation;
