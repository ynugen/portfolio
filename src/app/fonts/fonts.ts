import localFont from "next/font/local";

export const pixeloid = localFont({
  src: [
    {
      path: "./PixeloidSans-mLxMm.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./PixeloidSansBold-PKnYd.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-pixeloid",
});

export const timetwist = localFont({
  src: [
    {
      path: "./Timetwist-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Timetwist-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Timetwist-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-timetwist",
});

export const helveticaNeue = localFont({
  src: [
    {
      path: "./HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./HelveticaNeueItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./HelveticaNeueMediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./HelveticaNeueBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./HelveticaNeueBlack.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./HelveticaNeueBlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./HelveticaNeueUltraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./HelveticaNeueUltraLightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./HelveticaNeueLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./HelveticaNeueHeavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./HelveticaNeueHeavyItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-helvetica",
});

export const milkyVintage = localFont({
  src: "./MilkyVintageRegular.ttf",
  display: "swap",
  variable: "--font-milky",
});
