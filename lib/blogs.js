import fs, { readFileSync } from 'fs'
import path from 'path'
import {loadFront as matter} from 'yaml-front-matter'
import marked from 'marked'
// prism way
// import Prismjs from 'prismjs'
// import loadLanguages from 'prismjs/components/'
// loadLanguages()

// highlight.js way
import hljs from 'highlight.js'

const blogsDir = path.join(process.cwd(), 'blogs')

export const getBlogPaths = ()=>{
  const filenames = fs.readdirSync(blogsDir)
  return filenames.map(filename=>({
    params: {
      id: filename.replace(/\.md$/, '')
    }
  }))
}

export const getBlogData = ()=>{
  const filenames = fs.readdirSync(blogsDir)
  const allPost = filenames.map(filename=>{
    const id = filename.replace(/\.md$/, '')
    const fileContent = fs.readFileSync(path.join(blogsDir, filename), 'utf-8')
    const matterResult = matter(fileContent)
    return {
      id,
      ...matterResult
    }
  })
  return allPost
}

export const getBlogDataById = id =>{
  const fileContent = readFileSync(path.join(blogsDir, id+'.md'), 'utf-8')
  const matterResult = matter(fileContent)
  matterResult.__content = marked(matterResult.__content, {
    // prismjs way
    // highlight(code, languagae){
    //   const html = Prism.highlight(code, Prismjs.languages[languagae], languagae)
    //   return html
    // }

    // highlight.js way
    highlight(code, languagae) {
      const validLanguage = hljs.getLanguage(languagae) ? languagae : 'plaintext'
      return hljs.highlight(validLanguage, code).value
    }
  })
  return {
    id,
    ...matterResult
  }
}
