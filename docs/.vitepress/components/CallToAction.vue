<template>
  <section class="py-20 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="!text-4xl md:text-5xl font-extrabold mb-6">
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
          <FontAwesomeIcon :icon="faBookOpen" class="!w-12 !h-12 text-teal-300 " />
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
  </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
</script>

<style scoped>
.card-link {
  background-color: #f9f9f9;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
}

.card-link:hover {
  transform: scale(1.05);
  background-color: #e0f2fe; /* azul claro suave para hover */
  border-color: #90cdf4;
}

.dark .card-link {
  background-color: #2d2d2d;
  border-color: #444;
}

.dark .card-link:hover {
  background-color: #334155; /* azul-gris oscuro para hover */
  border-color: #60a5fa;
}
</style>
