import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = path.join(process.cwd(), 'app')

export const getPostFrontmatter = (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(root, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  return data // this is the frontmatter
}
