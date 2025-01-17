import { colors } from "./colors";
import { FormLabel } from "./components/form-label";
import { Heading } from "./components/heading";
import { Text } from "./components/text";
import {
  chakraFontsizeConfig,
  fontWeights,
  letterSpacings,
  lineHeights,
} from "./typography";
import { DeepPartial, Theme, extendTheme } from "@chakra-ui/react";

const chakraTheme: Theme = extendTheme(
  {
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    } as Theme["config"],
    fonts: {
      heading: `"Inter", -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif`,
      body: `"Inter", -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif`,
      mono: `'IBM Plex Mono', monospace`,
    },
    styles: {
      global: {
        "html, body": {
          background: "initial",
          padding: 0,
          margin: 0,
          fontFeatureSettings: `'zero' 1`,
          scrollBehavior: "smooth",
        },
        "::selection": {
          backgroundColor: "#90cdf4",
          color: "#fefefe",
        },
        "::-moz-selection": {
          backgroundColor: "#90cdf4",
          color: "#fefefe",
        },
      },
    },
    components: {
      Heading,
      Text,
      FormLabel,
      Button: {
        baseStyle: {
          borderRadius: "full",
        },
      },
      Modal: {
        baseStyle: {
          overlay: {
            backdropFilter: "blur(5px)",
          },
          dialog: {
            background: "backgroundHighlight",
          },
        },
      },
      Drawer: {
        baseStyle: {
          overlay: {
            backdropFilter: "blur(5px)",
          },
          dialog: {
            background: "backgroundHighlight",
          },
        },
      },
      Select: {
        defaultProps: {
          variant: "filled",
        },
        variants: {
          filled: {
            field: {
              borderWidth: "1px",
              borderColor: "inputBorder",
              background: "inputBg",
              _hover: {
                background: "inputBgHover",
                borderColor: "blue.500",
              },
            },
          },
        },
      },
      Input: {
        defaultProps: {
          variant: "filled",
        },
        variants: {
          filled: {
            field: {
              borderWidth: "1px",
              borderColor: "inputBorder",
              background: "inputBg",
              _hover: {
                background: "inputBgHover",
                borderColor: "blue.500",
              },
            },
          },
        },
        sizes: {
          xl: {
            field: {
              fontSize: "lg",
              px: 4,
              h: 14,
              borderRadius: "md",
            },
            addon: {
              fontSize: "lg",
              px: 4,
              h: 14,
              borderRadius: "md",
            },
          },
        },
      },
      Textarea: {
        defaultProps: {
          variant: "filled",
        },
        variants: {
          filled: {
            borderWidth: "1px",
            borderColor: "inputBorder",
            background: "inputBg",
            _hover: {
              background: "inputBgHover",
              borderColor: "blue.500",
            },
          },
        },
      },
      Menu: {
        baseStyle: {
          list: {
            bg: "backgroundHighlight",
            py: 0,
          },
          item: {
            py: 2,
          },
        },
      },
      Table: {
        baseStyle: {
          cell: {
            borderColor: "borderColor",
          },
        },
      },
    } as DeepPartial<Theme["components"]>,
    colors,
    fontSizes: chakraFontsizeConfig,
    fontWeights,
    lineHeights,
    letterSpacings,
    sizes: {
      container: {
        page: "1170px",
      },
    },
    semanticTokens: {
      colors: {
        // inputs
        inputBg: { default: "gray.50", _dark: "whiteAlpha.50" },
        inputBgHover: { default: "gray.100", _dark: "whiteAlpha.100" },
        inputBorder: { default: "gray.200", _dark: "transparent" },
        // other
        bgBlack: { default: "black", _dark: "white" },
        bgWhite: { default: "white", _dark: "black" },
        backgroundBody: { default: "backgroundLight", _dark: "backgroundDark" },
        backgroundHighlight: { default: "white", _dark: "#1B2129" },
        backgroundCardHighlight: { default: "white", _dark: "#0F1318" },
        wordmark: { default: "#262A36", _dark: "whiteAlpha.900" },
        heading: { default: "#262A36", _dark: "whiteAlpha.900" },
        paragraph: { default: "rgba(39, 46, 54, 0.9)", _dark: "gray.500" },
        headingLight: { default: "#F2FBFF", _dark: "#262A36" },
        paragraphLight: {
          default: "rgba(242, 251, 255, 0.8)",
          _dark: "rgba(39, 46, 54, 0.9)",
        },
        borderColor: { default: "gray.200", _dark: "whiteAlpha.100" },
      },
    },
  },
  // withDefaultColorScheme({ colorScheme: "primary" }),
) as Theme;

export default chakraTheme;
