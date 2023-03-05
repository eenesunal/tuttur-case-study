import { styled } from "styles/stitches.config"

const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$1",
  textTransform: "uppercase",
  fontFamily: "$default",
  fontSize: "0.9375rem",
  lineHeight: "1.5rem",
  letterSpacing: "-0.0075em",
  fontWeight: 600,
  cursor: "pointer",
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
    pointerEvents: "none",
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "$primary500",
        color: "white",
        "@hover": {
          "&:hover": { backgroundColor: "$primary600" },
        },
        "@focus": {
          "&:focus": { boxShadow: "0 0 0 2px $primary600" },
        }
      },
      secondary: {
        backgroundColor: "$gray100",
        color: "$gray900",
        "@hover": {
          "&:hover": { backgroundColor: "$gray200" },
        },
        "@focus": {
          "&:focus": { boxShadow: "0 0 0 2px $gray200" },
        }
      },
      success: {
        backgroundColor: "$green100",
        color: "$green600",
        "@hover": {
          "&:hover": { backgroundColor: "$green300" },
        },
        "@focus": {
          "&:focus": { boxShadow: "0 0 0 2px $green300" },
        }
      },
      remove: {
        backgroundColor: "$yellow100",
        color: "$yellow600",
        "@hover": {
          "&:hover": { backgroundColor: "$yellow300" },
        },
        "@focus": {
          "&:focus": { boxShadow: "0 0 0 2px $yellow300" },
        }
      },
      odd: {
        backgroundColor: "$gray200",
        "@hover": {
          "&:hover": { backgroundColor: "$gray500" },
        },
        "@focus": {
          "&:focus": { boxShadow: "0 0 0 2px $gray300" },
        }
      },
      oddSelected: {
        backgroundColor: "$blue600",
        "@hover": {
          "&:hover": { backgroundColor: "$blue500" },
        },
        "@focus": {
          "&:focus": { boxShadow: "0 0 0 2px $blue400" },
        }
      },
    },
    size: {
      large: {
        padding: "$3_5 $8",
      },
      medium: {
        padding: "$3 $7 ",
      },
      small: {
        padding: "$2_5 $6",
      },
      mini: {
        padding: "$1 $2",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
})

export default Button
