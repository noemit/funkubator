import theme from "@/data/theme";
import { MAP_COLOR_VARIANT_TO_TEXT } from "./mapVariants";

export function convertAsteriskToPrimaryStrongTag(str: string) {
  return str.replace(
    /\*{1,2}(.*?)\*{1,2}/g,
    `<strong class="font-normal ${
      MAP_COLOR_VARIANT_TO_TEXT[theme.colors.primary]
    }">$1</strong>`
  );
}


export function convertAsteriskToSecondaryStrongTag(str: string) {
  return str.replace(
    /\*{1,2}(.*?)\*{1,2}/g,
    `<strong class="font-normal ${
      MAP_COLOR_VARIANT_TO_TEXT[theme.colors.secondary]
    }">$1</strong>`
  );
}
