---
layout: home

hero:
  name: '<span id="hero-start">The TACO Specification</span>'
  text: ""
  tagline: >
    A FAIR-compliant, cloud-native specification that defines a formal and scalable format 
    for packaging and sharing AI-ready Earth Observation datasets.

  image:
    src: /image/taco.png
    alt: taco

  actions:
    - theme: brand
      text: Read the Paper
      link: /markdown-examples
    - theme: alt
      text: View Implementation
      link: /api-examples
---
<div id="hero-start"></div>

<script setup>
import ProblemStatement from './.vitepress/components/ProblemStatement.vue'
import Solution from './.vitepress/components/Solution.vue'
import Features from './.vitepress/components/Features.vue'
import CallToAction from './.vitepress/components/CallToAction.vue'

function scrollToContent() {
  const el = document.querySelector('#main-content')
  if (el) {
    const yOffset = -20;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

</script>

<div class="flex justify-center">
  <div
    class="inline-flex items-center space-x-2 cursor-pointer slower-bounce group"
    @click="scrollToContent"
  >
    <div
      class="w-8 h-8 border rounded-full flex items-center justify-center transition-colors group-hover:border-blue-400"
    >
      <svg
        class="w-5 h-5 transition-colors group-hover:text-blue-400"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
    <span class="text-sm transition-colors group-hover:text-blue-400">
      Scroll Down
    </span>
  </div>
</div>

<!-- Ancla destino -->
<div id="main-content" class="mt-9"></div>

<!-- Componentes -->
<ProblemStatement />
<Solution />
<Features />
<CallToAction />
