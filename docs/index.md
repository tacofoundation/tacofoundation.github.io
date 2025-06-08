---
layout: home

hero:
  name: "The TACO Specification"
  text: "The Missing Piece: Standardising for AI-ready Earth Observation Datasets"
  tagline: >
    A FAIR-compliant, cloud-optimized specification defining a formal data model, binary file format, 
    and unified API for organizing AI-ready Earth Observation datasets. Built on proven technologies 
    like GDAL and Apache Parquet for seamless multi-language integration.

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
