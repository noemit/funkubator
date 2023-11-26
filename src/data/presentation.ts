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
  heading: "*A lot of incubators give companies a leg up. We don't.* The adversity paradox is the idea that we get stronger from adversity even though we rarely seek it out. Companies operate in the same way. Adding friction, difficulty and minimal support ensures only the best ideas and founders (and idea/founder combos) move forward. We don't really think there are any bad founders, just people who haven't found their thing yet. Struggle. Find your thing. Funkubate. Different is good. If it's not fun, it's not worth it. If its not fun, you'll stop as soon as it gets hard. *Sometimes the best decision can be overshadowed by a slightly worse decision that’s just more fun to do. When in doubt, choose fun.* Less is more: less hustle, less noise, less features. Stop kidding yourself, it *is* supposed to be fun. ",
  // profile: "/profile.webp",
  description:
    "Welcome. *Funkubator is a world where you, the artist, are the rule, not the exception.*",
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
