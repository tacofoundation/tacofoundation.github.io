<script setup>
import { ArrowRight, Github, BookOpen, MessageCircle } from 'lucide-vue-next'
</script>

<template>
  <section class="py-20 px-6 from-slate-800 to-blue-900">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="!text-4xl md:text-5xl !font-extrabold mb-6">
        Shape the Future of AI-ready EO Datasets
      </h2>
      <p class="!text-xl !mb-12 leading-relaxed">
        Be part of the movement to standardize AI-ready Earth Observation data. 
        Collaborate, learn, and contribute to tools that accelerate global insight and innovation.
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <a
          href="https://github.com/example" 
          target="_blank"
          class="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
        >
          <Github class="w-12 h-12 text-blue-300 mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">Contribute</h3>
          <p class="text-sm">Join our open-source community on GitHub</p>
        </a>

        <a
          href="https://docs.example.org"
          target="_blank"
          class="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
        >
          <BookOpen class="w-12 h-12 text-teal-300 mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">Learn</h3>
          <p class="text-sm">Explore our comprehensive documentation</p>
        </a>

        <a
          href="https://community.example.org"
          target="_blank"
          class="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
        >
          <MessageCircle class="w-12 h-12 text-green-300 mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">Discuss</h3>
          <p class="text-sm">Connect with the community and share ideas</p>
        </a>
      </div>

    </div>
  </section>
</template>