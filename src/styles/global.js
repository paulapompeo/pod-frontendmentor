import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #121725;
    --dark-gray: #2C344B;
    --mid-gray: #5A668A;
    --ligh-gray: #C2CBE5;
    --white: #ffffff;
    --green: #54e6af;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  //desktop > 1440
  // tablet -> 768
  // smart -> 375

  // font-size: 16px -> ideal para desktop
  // REM = 1rem = font-size (16px)
  html {
    @media (max-width: 1080px) { // TODO: mudar conforme as telas
      font-size: 93.75%; // 16 * 93.75 = 15px
    }
    @media (max-width: 720px) { // TODO: mudar conforme as telas
      font-size: 87.5%; // 16 * 87.5 = 14px
    }
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body, textarea, h1 { //o que é texarea?
    font-family: 'Chivo', sans-serif;
    font-weight: 300;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`