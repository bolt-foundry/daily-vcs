/*
  Standard fonts available in VCS on both client and server targets.

  Roboto is the default font and always available.
  Others can be requested by a composition.
*/

const Roboto = [
  { fileName: "Roboto-Regular.ttf" },
  { fileName: "Roboto-Italic.ttf", fontStyle: "italic" },
  { fileName: "Roboto-Bold.ttf", fontWeight: 700 },
  { fileName: "Roboto-BoldItalic.ttf", fontWeight: 700, fontStyle: "italic" },
  { fileName: "Roboto-Thin.ttf", fontWeight: 100 },
  { fileName: "Roboto-ThinItalic.ttf", fontWeight: 100, fontStyle: "italic" },
  { fileName: "Roboto-Light.ttf", fontWeight: 300 },
  {
    fileName: "Roboto-LightItalic.ttf",
    fontWeight: 300,
    fontStyle: "italic",
  },
  { fileName: "Roboto-Medium.ttf", fontWeight: 500 },
  {
    fileName: "Roboto-MediumItalic.ttf",
    fontWeight: 500,
    fontStyle: "italic",
  },
  { fileName: "Roboto-Black.ttf", fontWeight: 900 },
  {
    fileName: "Roboto-BlackItalic.ttf",
    fontWeight: 900,
    fontStyle: "italic",
  },
];

const RobotoCondensed = [
  { fileName: "RobotoCondensed-Regular.ttf" },
  { fileName: "RobotoCondensed-Italic.ttf", fontStyle: "italic" },
  { fileName: "RobotoCondensed-Bold.ttf", fontWeight: 700 },
  {
    fileName: "RobotoCondensed-BoldItalic.ttf",
    fontWeight: 700,
    fontStyle: "italic",
  },
  { fileName: "RobotoCondensed-Light.ttf", fontWeight: 300 },
  {
    fileName: "RobotoCondensed-LightItalic.ttf",
    fontWeight: 300,
    fontStyle: "italic",
  },
  { fileName: "RobotoCondensed-Medium.ttf", fontWeight: 500 },
  {
    fileName: "RobotoCondensed-MediumItalic.ttf",
    fontWeight: 500,
    fontStyle: "italic",
  },
];

const Anton = [{ fileName: "Anton-Regular.ttf" }];

const Bangers = [{ fileName: "Bangers-Regular.ttf" }];

const Bitter = [
  { fileName: "Bitter-Regular.ttf" },
  { fileName: "Bitter-Italic.ttf", fontStyle: "italic" },
  { fileName: "Bitter-Bold.ttf", fontWeight: 700 },
  { fileName: "Bitter-BoldItalic.ttf", fontWeight: 700, fontStyle: "italic" },

  { fileName: "Bitter-Thin.ttf", fontWeight: 100 },
  { fileName: "Bitter-ThinItalic.ttf", fontWeight: 100, fontStyle: "italic" },

  { fileName: "Bitter-Light.ttf", fontWeight: 300 },
  { fileName: "Bitter-LightItalic.ttf", fontWeight: 300, fontStyle: "italic" },

  { fileName: "Bitter-Medium.ttf", fontWeight: 500 },
  { fileName: "Bitter-MediumItalic.ttf", fontWeight: 500, fontStyle: "italic" },

  { fileName: "Bitter-Black.ttf", fontWeight: 900 },
  { fileName: "Bitter-BlackItalic.ttf", fontWeight: 900, fontStyle: "italic" },
];

const Exo = [
  { fileName: "Exo-Regular.ttf" },
  { fileName: "Exo-Italic.ttf", fontStyle: "italic" },
  { fileName: "Exo-Bold.ttf", fontWeight: 700 },
  { fileName: "Exo-BoldItalic.ttf", fontWeight: 700, fontStyle: "italic" },

  { fileName: "Exo-Thin.ttf", fontWeight: 100 },
  { fileName: "Exo-ThinItalic.ttf", fontWeight: 100, fontStyle: "italic" },

  { fileName: "Exo-Light.ttf", fontWeight: 300 },
  { fileName: "Exo-LightItalic.ttf", fontWeight: 300, fontStyle: "italic" },

  { fileName: "Exo-Medium.ttf", fontWeight: 500 },
  { fileName: "Exo-MediumItalic.ttf", fontWeight: 500, fontStyle: "italic" },

  { fileName: "Exo-Black.ttf", fontWeight: 900 },
  { fileName: "Exo-BlackItalic.ttf", fontWeight: 900, fontStyle: "italic" },
];

const Lovelo = [{ fileName: "LoveloBlack.otf", fontWeight: 700 }];

const Magra = [
  { fileName: "Magra-Regular.ttf" },
  { fileName: "Magra-Bold.ttf", fontWeight: 700 },
];

const PermanentMarker = [{ fileName: "PermanentMarker-Regular.ttf" }];

const SuezOne = [{ fileName: "SuezOne-Regular.ttf" }];

const Teko = [
  { fileName: "Teko-Regular.ttf" },
  { fileName: "Teko-Bold.ttf", fontWeight: 700 },
  { fileName: "Teko-Light.ttf", fontWeight: 300 },
  { fileName: "Teko-Medium.ttf", fontWeight: 500 },
  { fileName: "Teko-SemiBold.ttf", fontWeight: 600 },
];

const Futura = [
  { fileName: "Futura-Bold.ttf", fontWeight: 700 },
];

const BebasNeue = [
  { fileName: "BebasNeue-Bold.ttf", fontWeight: 700 },
];

const KC = [{ fileName: "KCIllHand.ttf", fontWeight: 400 }];

export const standardFontFamilies = [
  {
    family: "Roboto",
    variants: Roboto,
  },
  {
    family: "RobotoCondensed",
    variants: RobotoCondensed,
  },
  {
    family: "Anton",
    variants: Anton,
  },
  {
    family: "Bangers",
    variants: Bangers,
  },
  {
    family: "BebasNeue",
    variants: BebasNeue,
  },
  {
    family: "Bitter",
    variants: Bitter,
  },
  {
    family: "Exo",
    variants: Exo,
  },
  {
    family: "Futura",
    variants: Futura,
  },
  {
    family: "KC",
    variants: KC,
  },
  {
    family: "Lovelo",
    variants: Lovelo,
  },
  {
    family: "Magra",
    variants: Magra,
  },
  {
    family: "PermanentMarker",
    variants: PermanentMarker,
  },
  {
    family: "SuezOne",
    variants: SuezOne,
  },
  {
    family: "Teko",
    variants: Teko,
  },
];
