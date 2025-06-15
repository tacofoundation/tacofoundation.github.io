<script setup>
import { ref } from 'vue'

const modules = import.meta.glob('../../catalogue/data/*.json', { eager: true })

const udfList = Object.entries(modules).map(([path, mod]) => ({
  ...mod.default,
  id: path.split('/').pop().replace('.json', '')
}))

const selected = ref(null)

const openUdf = (udf) => {
  selected.value = udf
}

const closeUdf = () => {
  selected.value = null
}
</script>

<template>
  <div class="p-4">
    <div v-if="!selected" class="flex flex-wrap gap-6 justify-center">
      <div v-for="udf in udfList" :key="udf.id" @click="openUdf(udf)"
        class="udf-card cursor-pointer w-[300px] h-[320px]">
        <div class="flex justify-center">
          <img :src="udf.image" alt="" class="rounded-xl w-[120px] h-[120px] object-cover" />
        </div>
        <h3 class="text-2xl font-bold tracking-wide text-center truncate mb-3">
          {{ udf.title }}
        </h3>
        <div class="flex flex-wrap gap-1 justify-center mb-2">
          <span v-for="tag in udf.tags" :key="tag" class="udf-tag">
            {{ tag }}
          </span>
        </div>
        <p class="udf-desc text-sm text-center line-clamp-2">{{ udf.description }}</p>
      </div>
    </div>

    <div v-else class="max-w-7xl w-full mx-auto">
      <button @click="closeUdf" class="mb-4 text-sm text-red-500 underline">← Back to catalog</button>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="sticky top-6 self-start">
          <img :src="selected.image" alt="" class="rounded-xl w-[160px] h-[160px] object-cover mb-4 mx-auto" />
          <h2 class="text-3xl font-bold text-center text-black dark:text-white mb-2">{{ selected.title }}</h2>
          <div class="flex flex-wrap gap-2 justify-center mb-4">
            <span v-for="tag in selected.tags" :key="tag" class="udf-tag">
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="max-h-[80vh] overflow-y-auto pr-2">
          <div class="space-y-6 text-sm">
            <div>
              <strong class="block mb-1 text-black dark:text-white">Load from GitHub</strong>
              <pre class="bg-gray-900 text-white p-2 rounded">{{ selected.snippets.load }}</pre>
            </div>
            <div>
              <strong class="block mb-1 text-black dark:text-white">Run UDF</strong>
              <pre class="bg-gray-900 text-white p-2 rounded">{{ selected.snippets.run }}</pre>
            </div>
            <div>
              <strong class="block mb-1 text-black dark:text-white">Links</strong>
              <ul class="list-disc ml-6 text-blue-400 underline">
                <li><a :href="selected.links.catalog" target="_blank">UDF Catalog</a></li>
                <li><a :href="selected.links.github" target="_blank">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.udf-card {
  background-color: #f9f9f9;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
  color: #2d2d2d;
}
.udf-card {
  background-color: #f9f9f9;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
  color: #2d2d2d;
}

.udf-card:hover {
  transform: scale(1.05);
  background-color: #e0f2fe;
  border-color: #3b82f6;
  color: #2d2d2d;
}

.dark .udf-card {
  background-color: #2d2d2d;
  border-color: #444;
  color: #ffffff;
}

.dark .udf-card:hover {
  background-color: #1e293b;
  border-color: #3b82f6;
  color: #ffffff;
}

.udf-desc {
  color: #4b5563;
}

.dark .udf-desc {
  color: #d1d5db;
}

.udf-tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  background-color: #e5e7eb;
  color: #1f2937;
}

.dark .udf-tag {
  background-color: #4b5563;
  color: #ffffff;
}

h2 {
  color: #1f2937; 
}

.dark h2 {
  color: #ffffff; 
}

strong {
  color: #1f2937;
  font-weight: 600;
}

.dark strong {
  color: #ffffff;
}

</style>
