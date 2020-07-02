import { Global } from "@emotion/core"
import { normalize } from "polished"
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
// import 'prismjs/themes/prism-funky.css'

import 'highlight.js/styles/atom-one-light.css'
import 'github-markdown-css/github-markdown.css'

const App = ({Component, pageProps}) => {

  return <div>
    <Global styles={css`
      ${normalize()};
      body {
        background: lavender;
      }
      /* p>code {
        background: mediumpurple;
        padding: 4px 8px;
        color: white;
        border-radius: 4px;
      }
      pre {
        background: lavender;
        padding: 10px;
        border-radius: 4px;
      }
      code {
        /* color: black; */
        font-size: 15px;
      } */
    `} />
    <Component {...pageProps} />
  </div>
}

export default App