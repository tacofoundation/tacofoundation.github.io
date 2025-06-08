<script setup>
import { ref } from 'vue'

// Cargar JSONs desde la carpeta correcta
const modules = import.meta.glob('../../catalogue/data/*.json', { eager: true })

const udfList = Object.entries(modules).map(([path, mod]) => ({
  ...mod.default,
  id: path.split('/').pop().replace('.json', '')
}))

const selected = ref(null)
const activeTab = ref('Snippets')

const openUdf = (udf) => {
  selected.value = udf
  activeTab.value = 'Snippets'
}
const closeUdf = () => {
  selected.value = null
}
</script>

<template>
  <div class="p-4">
    <!-- Galería -->
    <div v-if="!selected" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="udf in udfList"
        :key="udf.id"
        @click="openUdf(udf)"
        class="cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md hover:ring-2 hover:ring-red-400 transition"
      >
        <img :src="udf.image" alt="" class="rounded-t-xl w-full h-40 object-cover" />
        <div class="p-4">
          <h3 class="text-lg font-bold text-black dark:text-white mb-1">{{ udf.title }}</h3>
          <div class="flex flex-wrap gap-1 mb-2">
            <span
              v-for="tag in udf.tags"
              :key="tag"
              class="text-xs bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-2 py-0.5 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300">
            {{ udf.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Detalle -->
    <div v-else class="dark:bg-black bg-white p-6 rounded-xl shadow-md">
      <button @click="closeUdf" class="mb-4 text-sm text-red-500 underline">← Back to catalog</button>
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <img :src="selected.image" alt="" class="rounded-xl w-full object-cover" />
          <h2 class="text-2xl font-bold mt-4 text-black dark:text-white">
            {{ selected.title }}
          </h2>
          <div class="flex gap-2 mt-2">
            <span
              v-for="tag in selected.tags"
              :key="tag"
              class="text-xs bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-2 py-0.5 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <div>
          <!-- Tabs -->
          <div class="flex border-b border-gray-600 mb-4">
            <button
              v-for="tab in ['Snippets', 'Code', 'Utils']"
              :key="tab"
              @click="activeTab = tab"
              :class="[
                'px-4 py-2',
                activeTab === tab ? 'border-b-2 border-red-500 font-bold text-white' : 'text-gray-400'
              ]"
            >
              {{ tab }}
            </button>
          </div>

          <div v-if="activeTab === 'Snippets'" class="text-sm space-y-3">
            <div>
              <strong>Load from GitHub</strong>
              <pre class="bg-gray-900 text-white p-2 rounded">{{ selected.snippets.load }}</pre>
            </div>
            <div>
              <strong>Run UDF</strong>
              <pre class="bg-gray-900 text-white p-2 rounded">{{ selected.snippets.run }}</pre>
            </div>
            <div class="mt-4">
              <strong>Links</strong>
              <ul class="list-disc ml-6 text-blue-400 underline">
                <li><a :href="selected.links.catalog" target="_blank">UDF Catalog</a></li>
                <li><a :href="selected.links.github" target="_blank">GitHub</a></li>
              </ul>
            </div>
          </div>

          <div v-else-if="activeTab === 'Code'" class="bg-gray-900 text-white p-4 rounded overflow-x-auto text-sm">
            <pre>{{ selected.code }}</pre>
          </div>

          <div v-else class="text-gray-400 italic">
            Utils section coming soon...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
