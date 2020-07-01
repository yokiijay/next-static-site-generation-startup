import { Global } from "@emotion/core"
import { normalize } from "polished"
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
// import 'prismjs/themes/prism-funky.css'

import 'highlight.js/styles/grayscale.css'

const App = ({Component, pageProps}) => {

  return <div>
    <Global styles={css`
      ${normalize()};
    `} />
    <Component {...pageProps} />
  </div>
}

export default App