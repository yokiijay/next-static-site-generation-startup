/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Head from 'next/head'
import { rgba } from 'polished'

const Layout = ({ children, title, description, ...props }) => {
  return (
    <div {...props} className='layout'>
      <Head>
        <title>Startup | SSG</title>
        <meta
          name='description'
          content='Next Static-Site-Generation startup'
        />
      </Head>

      <header
        css={css`
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
          font-size: 1.6rem;
          border-bottom: 10px solid ${rgba('lavender', .6)};
          background: white;

          .title {
            color: mediumslateblue;
            margin-bottom: 0;
            text-transform: capitalize;
          }

          .description {
            font-size: 1rem;
            color: ${rgba('darkslateblue', 0.5)};
            margin-bottom: 0;
            font-weight: bold;
          }
        `}
      >
        <h1 className='title'>{title || 'Lorem, ipsum dolor.'}</h1>
        {description && (
          <p className='description'>
            {description ||
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, obcaecati!'}
          </p>
        )}
      </header>
      {/* <div
        className='divider'
        css={css`
          border-bottom: 1px solid lavender;
        `}
      ></div> */}


      <main
        css={css`
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
          color: mediumslateblue;
          background: white;
        `}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
