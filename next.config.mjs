/** @type {import('next').NextConfig} */
import nextMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'

const nextConfig = {
  experimental: {
    mdxRs: true,
  },
}

const withMDX = nextMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

export default withMDX(nextConfig)
