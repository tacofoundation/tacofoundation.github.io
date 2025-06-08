// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";

// Importar solo los íconos Lucide necesarios
import {
  AlertTriangle,
  Shuffle,
  FileX,
  GitBranch,
  Database
} from "lucide-vue-next";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Puedes usar slots personalizados aquí si los necesitas
    });
  },
  enhanceApp({ app }) {
    // Registrar solo los íconos utilizados como componentes globales
    app.component("lucide-alert-triangle", AlertTriangle);
    app.component("lucide-shuffle", Shuffle);
    app.component("lucide-file-x", FileX);
    app.component("lucide-git-branch", GitBranch);
    app.component("lucide-database", Database);
  },
} satisfies Theme;
