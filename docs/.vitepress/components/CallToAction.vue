<script setup>
import { ArrowRight, Github, BookOpen, MessageCircle } from 'lucide-vue-next'
</script>

<template>
  <section class="py-20 px-6 from-slate-800 to-blue-900">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="!text-4xl md:text-5xl !font-extrabold   mb-6">
        Join the Revolution
      </h2>
      <p class="!text-xl   !mb-12 leading-relaxed">
        Help us standardize the future of AI-ready Earth Observation data.
        Together, we can accelerate scientific discovery and enable breakthrough innovations.
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div class="bg-white/10   p-6 rounded-xl border border-white/20">
          <Github class="w-12 h-12 text-blue-300 mx-auto mb-4" />
          <h3 class="text-xl font-semibold   mb-2">Contribute</h3>
          <p class="  text-sm">Join our open-source community on GitHub</p>
        </div>

        <div class="bg-white/10   p-6 rounded-xl border border-white/20">
          <BookOpen class="w-12 h-12 text-teal-300 mx-auto mb-4" />
          <h3 class="text-xl font-semibold   mb-2">Learn</h3>
          <p class="  text-sm">Explore our comprehensive documentation</p>
        </div>

        <div class="bg-white/10   p-6 rounded-xl border border-white/20">
          <MessageCircle class="w-12 h-12 text-green-300 mx-auto mb-4" />
          <h3 class="text-xl font-semibold   mb-2">Discuss</h3>
          <p class="  text-sm">Connect with the community and share ideas</p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          class="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600   px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
        >
          Get Started Today
          <ArrowRight class="ml-2 w-5 h-5" />
        </button>

        <button
          class="border border-white   hover:bg-white/20 px-8 py-4 text-lg font-semibold  "
        >
          View on GitHub
        </button>
      </div>
    </div>
  </section>
</template>
