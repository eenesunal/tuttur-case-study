import { styled } from "styles/stitches.config"

export const Text = styled("span", {
  lineHeight: "1",
  margin: "0",
  fontVariantNumeric: "tabular-nums",
  color: "$gray900",
  fontFamily: "$default",
  display: "block",
  variants: {
    variant: {
      largeTitle: {
        fontSize: "2rem",
        lineHeight: "2.5625rem",
        letterSpacing: "-0.00625em",
      },
      title1: {
        fontSize: "1.6875rem",
        lineHeight: "2.125rem",
        letterSpacing: "-0.015625em",
      },
      title2: {
        fontSize: "1.3125rem",
        lineHeight: "1.75rem",
        letterSpacing: "0em",
      },
      title3: {
        fontSize: "1.1875rem",
        lineHeight: "1.75rem",
        letterSpacing: "0em",
      },
      bodyL: {
        fontSize: "1.0625rem",
        lineHeight: "1.5rem",
        letterSpacing: "-0.019375em",
      },
      body: {
        fontSize: "0.9375rem",
        lineHeight: "1.5rem",
        letterSpacing: "-0.0075em",
      },
      footnote: {
        fontSize: "0.8125rem",
        lineHeight: "1rem",
        letterSpacing: "-0.0075em",
      },
      caption1: {
        fontSize: "0.75rem",
        lineHeight: "1rem",
        letterSpacing: "0em",
      },
    },
    weight: {
      bold: {
        fontWeight: 700,
      },
      semibold: {
        fontWeight: 600,
      },
      medium: {
        fontWeight: 500,
      },
      regular: {
        fontWeight: 400,
      },
      thin: {
        fontWeight: 200
      }
    }
  },
  compoundVariants: [
    {
      variant: "largeTitle",
      weight: "regular",
      css: {
        letterSpacing: "0.075em"
      },
    },
    {
      variant: "title1",
      weight: "medium",
      css: {
        letterSpacing: "0.0125em"
      },
    },
    {
      variant: "title1",
      weight: "regular",
      css: {
        letterSpacing: "0.065625em"
      },
    },
    {
      variant: "title2",
      weight: "regular",
      css: {
        letterSpacing: "0.034375em"
      },
    },
    {
      variant: "title3",
      weight: "regular",
      css: {
        letterSpacing: "0.028125em"
      },
    },
    {
      variant: "bodyL",
      weight: "medium",
      css: {
        letterSpacing: "0.0275em"
      },
    },
    {
      variant: "bodyL",
      weight: "regular",
      css: {
        letterSpacing: "0.0275em"
      },
    },
    {
      variant: "body",
      weight: "medium",
      css: {
        letterSpacing: "0.015em"
      },
    },
    {
      variant: "body",
      weight: "regular",
      css: {
        letterSpacing: "0.015em"
      },
    },
  ],
  defaultVariants: {
    variant: "body",
    weight: "regular"
  },
})

export default Text
