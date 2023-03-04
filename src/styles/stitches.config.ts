import { createStitches, globalCss } from "@stitches/react"
import type * as Stitches from "@stitches/react"

import assertNever from "assert-never"

import { gray, primary, green, blue, yellow, red } from "./colors"

export type { VariantProps } from "@stitches/react"

export const globalStyles = globalCss({
  html: { display: "block", margin: 0, padding: 0, fontSize: 14 },
  body: {
    display: "block",
    margin: 0,
    padding: 0,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  code: {
    fontFamily:
      "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
  },
  "#root": {
    display: "flex",
    width: "100vw",
    height: "auto",
    margin: 0,
    padding: 0,
  },
  ".App": {
    display: "flex",
    width: "100vw",
    height: "auto",
    margin: 0,
    padding: 0,
  },
})

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  keyframes,
  config,
  reset,
} = createStitches({
  theme: {
    colors: {
      ...gray,
      ...primary,
      ...green,
      ...blue,
      ...yellow,
      ...red,
    },
    shadows: {
      ...gray,
      ...primary,
      ...green,
      ...blue,
      ...yellow,
      ...red,
    },
    fonts: {
      default: [
        "-apple-system",
        "BlinkMacSystemFont",
        "'Segoe UI'",
        "'Roboto'",
        "'Oxygen'",
        "'Ubuntu'",
        "'Cantarell'",
        "'Fira Sans'",
        "'Droid Sans'",
        "'Helvetica Neue'",
        "sans-serif",
      ].join(","),
    },
    space: {
      px: "1px",
      0: "0",
      "0_5": "0.125rem",
      1: "0.25rem",
      "1_5": "0.375rem",
      2: "0.5rem",
      "2_5": "0.625rem",
      3: "0.75rem",
      "3_5": "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
    },
    sizes: {
      px: "1px",
      0: "0",
      "0_5": "0.125rem",
      1: "0.25rem",
      "1_5": "0.375rem",
      2: "0.5rem",
      "2_5": "0.625rem",
      3: "0.75rem",
      "3_5": "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    radii: {
      1: "4px",
      2: "6px",
      3: "8px",
      4: "12px",
      round: "50%",
      pill: "9999px",
    },
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      max: "999",
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
    hover: "(any-hover: hover)",
  },
  utils: {
    text: (
      value:
        | "xs"
        | "sm"
        | "base"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl"
        | "7xl"
        | "8xl"
        | "9xl"
    ) => {
      switch (value) {
        case "xs":
          return {
            fontSize: "0.75rem",
            lineHeight: "1rem",
          }
        case "sm":
          return {
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
          }
        case "base":
          return {
            fontSize: "1rem",
            lineHeight: "1.5rem",
          }
        case "lg":
          return {
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
          }
        case "xl":
          return {
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
          }
        case "2xl":
          return {
            fontSize: "1.5rem",
            lineHeight: "2rem",
          }
        case "3xl":
          return {
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
          }
        case "4xl":
          return {
            fontSize: "2.25rem",
            lineHeight: "2.5rem",
          }
        case "5xl":
          return {
            fontSize: "3rem",
            lineHeight: 1,
          }
        case "6xl":
          return {
            fontSize: "3.75rem",
            lineHeight: 1,
          }
        case "7xl":
          return {
            fontSize: "4.5rem",
            lineHeight: 1,
          }
        case "8xl":
          return {
            fontSize: "6rem",
            lineHeight: 1,
          }
        case "9xl":
          return {
            fontSize: "8rem",
            lineHeight: 1,
          }
        default:
          return assertNever(value)
      }
    },
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<"textAlign">) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<"flexDirection">) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<"flexWrap">) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<"alignItems">) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<"alignContent">) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<"justifyContent">) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<"alignSelf">) => ({ alignSelf: value }),

    fg: (value: Stitches.PropertyValue<"flexGrow">) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<"flexShrink">) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<"boxShadow">) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<"lineHeight">) => ({
      lineHeight: value,
    }),

    ox: (value: Stitches.PropertyValue<"overflowX">) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<"overflowY">) => ({ overflowY: value }),

    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),
  },
})
