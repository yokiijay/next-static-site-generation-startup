import Layout from '../../Components/Layout'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { getBlogPaths, getBlogDataById } from '../../lib/blogs'
import { rgba } from 'polished'

const BlogDetail = ({ blogData }) => {
  return (
    <Layout title={blogData.title} description={blogData.description}>
      <div
        dangerouslySetInnerHTML={{ __html: blogData.__content }}
        className='markdown-body'
        css={css`
          font-size: 1.2rem;
          list-style: none;
          color: ${rgba('mediumslateblue', .8)};
          h1,h2,h3,h4,h5,h6 { color: mediumslateblue; }
        `}
      ></div>
    </Layout>
  )
}

export const getStaticPaths = () => {
  const paths = getBlogPaths()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = ({ params }) => {
  const { id } = params
  const blogData = getBlogDataById(id)
  return {
    props: {
      blogData
    }
  }
}

export default BlogDetail
