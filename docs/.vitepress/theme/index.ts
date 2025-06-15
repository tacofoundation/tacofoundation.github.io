import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import {
  AlertTriangle,
  Shuffle,
  FileX,
  GitBranch,
  Database
} from 'lucide-vue-next'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBookOpen, faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '../theme/style.css'

library.add(faGithub, faBookOpen, faFaceSmileBeam)

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout),
  enhanceApp({ app }) {
    app.component('lucide-alert-triangle', AlertTriangle)
    app.component('lucide-shuffle', Shuffle)
    app.component('lucide-file-x', FileX)
    app.component('lucide-git-branch', GitBranch)
    app.component('lucide-database', Database)

    app.component('FontAwesomeIcon', FontAwesomeIcon)
  }
} satisfies Theme
