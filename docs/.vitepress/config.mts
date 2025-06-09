import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Simula __dirname en ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


export default defineConfig({
  title: "The TACO Specification",
  description: "Every EO problem deserves a TACO.",

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Involved', link: '/get_involved' }
      { text: 'Tutorials', link: '/tutorials' },
      { text: 'Contributing', link: '/contribute' },
      { text: 'Catalog', link: '/catalogue' },
    ],

    sidebar: {
      '/get_involved/': [
        {
          text: 'Get Involved',
          collapsed: false,
          items: generateSidebarFromDir('get_involved')
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tacofoundation' },
      { icon: 'hugging face', link: 'https://huggingface.co/tacofoundation' }
    ]
  }
})

function generateSidebarFromDir(dir: string) {
  const fullPath = path.resolve(__dirname, '../', dir)

  return fs
    .readdirSync(fullPath)
    .filter(file => file.endsWith('.md') && file !== 'index.md')
    .map(file => {
      const name = file.replace('.md', '')
      const text = name
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase())

      return {
        text,
        link: `/${dir}/${name}`
      }
    })
}
