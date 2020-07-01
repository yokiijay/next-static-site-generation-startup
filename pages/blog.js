import Layout from '../Components/Layout'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { getBlogData } from '../lib/blogs'
import Link from 'next/link'
import { rgba } from 'polished'

const Blog = ({ allBlogData }) => {
  return (
    <Layout title='Choose a blog to view detail' description={false}>
      <ul
        css={css`
          font-size: 1.6rem;
          a {
            color: white;
            background: mediumslateblue;
            text-decoration: none;
            padding: 10px;
            box-shadow: 0 8px 10px ${rgba('mediumslateblue', .4)};
          }
        `}
      >
        {allBlogData.map(blog => (
          <li key={blog.id}>
            <Link href='/blogs/[id]' as={`/blogs/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allBlogData = getBlogData()
  return {
    props: {
      allBlogData
    }
  }
}

export default Blog
