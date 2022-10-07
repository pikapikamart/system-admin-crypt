import "styled-components";


declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      red: string,
      green: string,
      blue: string,
      darkBlue: string,
      greyBlue: string,
      white1: string,
      white2: string,
      white3: string,
      white4: string,
      whiteBlue1: string,
      dark1: string,
      dark2: string,
      grey1: string,
      grey2: string,
      grey3: string
    },
    breakpoints: {
      tablet: number,
      desktop: number
    }
  }
}