import type { TailwindColor } from "@/utils/types/tailwind";

type Theme = {
  colors: {
    primary: TailwindColor;
    secondary: TailwindColor;
    blur: {
      top: TailwindColor;
      bottom: TailwindColor;
    };
  };
};

const theme: Theme = {
  colors: {
    primary: "pink",
    secondary: "yellow",
    blur: {
      top: "orange",
      bottom: "violet",
    },
  },
};

export default theme;
