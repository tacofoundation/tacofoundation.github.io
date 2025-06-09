---
layout: home

hero:
  name: "The TACO Specification"
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



<script setup>
import ProblemStatement from './.vitepress/components/ProblemStatement.vue'
import Solution from './.vitepress/components/Solution.vue'
import Features from './.vitepress/components/Features.vue'
import CallToAction from './.vitepress/components/CallToAction.vue'


</script>

<ProblemStatement />
<Solution />
<Features />
<CallToAction />
