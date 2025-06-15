<template>
  <section
    id="callToAction"
    class="w-full max-w-screen-2xl mx-auto px-8 py-16 min-h-screen flex flex-col justify-center"
  >
    <div class="w-full mx-auto text-center">
      <h2 class="!text-4xl md:!text-5xl font-extrabold mb-6">
        Shape the Future of AI-ready EO Datasets
      </h2>
      <p class="text-xl mb-12 leading-relaxed">
        Be part of the movement to standardize AI-ready Earth Observation data.
        Collaborate, learn, and contribute to tools that accelerate global insight and innovation.
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <!-- GitHub -->
        <a
          href="https://github.com/example"
          target="_blank"
          class="card-link flex flex-col items-center text-center !no-underline"
        >
          <FontAwesomeIcon :icon="faGithub" class="!w-12 !h-12 text-blue-300" />
          <h3 class="text-xl font-semibold mb-2">Contribute</h3>
          <p class="text-sm">Join our open-source community on GitHub</p>
        </a>

        <!-- Docs -->
        <a
          href="https://docs.example.org"
          target="_blank"
          class="card-link flex flex-col items-center text-center !no-underline"
        >
          <FontAwesomeIcon :icon="faBookOpen" class="!w-12 !h-12 text-teal-300" />
          <h3 class="text-xl font-semibold mb-2">Learn</h3>
          <p class="text-sm">Explore our comprehensive documentation</p>
        </a>

        <!-- HuggingFace -->
        <a
          href="https://huggingface.co"
          target="_blank"
          class="card-link flex flex-col items-center text-center !no-underline"
        >
          <img
            src="https://huggingface.co/front/assets/huggingface_logo.svg"
            alt="Hugging Face"
            class="!w-12 !h-12"
          />
          <h3 class="text-xl font-semibold mb-2">Datasets</h3>
          <p class="text-sm">Find and share datasets on HuggingFace</p>
        </a>
      </div>
    </div>

    <!-- Back to Top Button (embebido directamente) -->
    <div class="flex justify-center mt-8">
      <div
        class="inline-flex items-center space-x-2 cursor-pointer slower-bounce group"
        @click="scrollToTop"
      >
        <div
          class="w-8 h-8 border rounded-full flex items-center justify-center transition-colors group-hover:border-blue-400"
        >
          <svg
            class="w-5 h-5 transition-colors group-hover:text-blue-400 rotate-180"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <span class="text-sm transition-colors group-hover:text-blue-400">
          Back to Top
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<style scoped>
.card-link {
  background-color: #f9f9f9;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
  color: #2d2d2d;
}

.card-link:hover {
  transform: scale(1.05);
  background-color: #e0f2fe;
  border-color: #90cdf4;
  color: #2d2d2d;
}

.dark .card-link {
  background-color: #2d2d2d;
  border-color: #444;
  color: #fff;
}

.dark .card-link:hover {
  background-color: #334155;
  border-color: #60a5fa;
  color: #fff;
}
</style>
