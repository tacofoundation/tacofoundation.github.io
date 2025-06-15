<template>
  <section id="solution" class="w-full max-w-none px-8 py-16 min-h-screen flex flex-col justify-center">
    <div class="w-full">
      <div class="text-center mb-8">
        <div class="flex justify-center mb-4">
          <CheckCircle class="w-16 h-16 text-green-500" />
        </div>
        <h2 class="!text-4xl md:text-5xl !font-bold mb-6">
          Introducing <span class="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">TACO</span>
        </h2>
        <div class="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          Built on GDAL & Apache Parquet • Multi-language Support • Cloud-Optimized • FAIR-compliant
        </div>
        <p class="text-xl inline-block w-full text-balance leading-relaxed !text-center mb-8">
          TACO is a unified specification that brings structure, clarity, and interoperability to AI-ready Earth
          Observation data.
          To achieve this, TACO defines a complete, interoperable specification:
        </p>
      </div>

      <!-- Tarjetas principales -->
      <div class="grid md:grid-cols-3 gap-8 mb-5">
        <div class="card-taco border-t-4 border-blue-500 dark:border-blue-400">
          <div>
            <div class="flex justify-center mb-6">
              <Layers class="w-12 h-12 text-blue-500 dark:text-blue-400" />
            </div>
            <h3 class="card-title">Formal Data Model</h3>
            <p class="card-text mb-4">
              A structured data model built on <strong>SAMPLEs 🌽</strong>,
              <strong>TORTILLA</strong> 🫓, and rich, standardized metadata schemas,
              all coming together to generate a <strong>TACO</strong> 🌮.
            </p>
          </div>
          <ul class="card-list">
            <li>Self-contained <code>SAMPLE</code> units</li>
            <li>Hierarchical <code>TORTILLA</code> containers</li>
            <li>Standardized metadata conventions</li>
          </ul>
        </div>

        <div class="card-taco border-t-4 border-teal-500 dark:border-teal-400">
          <div>
            <div class="flex justify-center mb-6">
              <Database class="w-12 h-12 text-teal-500 dark:text-teal-400" />
            </div>
            <h3 class="card-title">Binary File Format</h3>
            <p class="card-text mb-4">
              Efficient binary serialization using Apache Parquet metadata and
              <a href="https://gdal.org/en/stable/user/virtual_file_systems.html" class="text-blue-500 underline"
                target="_blank" rel="noopener noreferrer">
                GDAL VFS
              </a> for fast, scalable access to geospatial data.
            </p>
          </div>
          <ul class="card-list">
            <li>Partial read optimization</li>
            <li>Cloud-native access patterns</li>
            <li>Self-contained & portable</li>
          </ul>
        </div>

        <div class="card-taco border-t-4 border-green-500 dark:border-green-400">
          <div>
            <div class="flex justify-center mb-6">
              <Code class="w-12 h-12 text-green-500 dark:text-green-400" />
            </div>
            <h3 class="card-title">Unified API</h3>
            <p class="card-text mb-4">
              Consistent interfaces across Python, R, and Julia for creating and accessing datasets.
            </p>
          </div>
          <ul class="card-list">
            <li>Toolbox for dataset creation</li>
            <li>Reader for efficient access</li>
            <li>DataFrame integration</li>
          </ul>
        </div>
      </div>

      <!-- Tarjetas secundarias -->
      <div class="grid md:grid-cols-2 gap-8">
        <div class="card-taco card-taco-subtle">
          <div class="flex items-center mb-4">
            <Cloud class="w-8 h-8 text-blue-500 mr-3" />
            <span class="text-lg font-bold leading-none">Cloud-Optimized Architecture</span>
          </div>
          <p class="card-text">
            Built-in support for major cloud storage platforms (S3, Azure, GCS) with efficient partial reads
            and minimal HTTP requests, reducing both latency and operational costs.
          </p>
        </div>

        <div class="card-taco card-taco-subtle">
          <div class="flex items-center mb-4">
            <Zap class="w-8 h-8 text-green-500 mr-3" />
            <span class="text-lg font-bold leading-none">Foundation Model Ready</span>
          </div>
          <p class="card-text">
            Designed specifically for the era of foundation models, enabling seamless combination of diverse
            datasets for effective training and performance evaluation.
          </p>
        </div>
      </div>
    </div>
    <ScrollToNext targetId="features" label="Scroll Down" />
  </section>
</template>


<script setup>
import { CheckCircle, Layers, Cloud, Code, Database, Zap } from 'lucide-vue-next';

import ScrollToNext from './ScrollToNext.vue'

</script>

<style scoped>
.card-taco {
  background-color: #f9f9f9;
  border-radius: 1rem;
  padding: 2rem;
  text-align: left;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-taco:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.dark .card-taco {
  background-color: color-mix(in oklab, var(--color-white) 10%, transparent);
}

.card-taco-subtle {
  border: 1px solid rgba(0, 0, 0, 0.1);
  /* Color del borde más gris */
}

.dark .card-taco-subtle {
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.card-title {
  color: #1a202c;
}

.dark .card-title {
  color: #f7fafc;
}

.card-text {
  color: #2d3748;
  font-size: 0.95rem;
  line-height: 1.6;
}

.dark .card-text {
  color: #e2e8f0;
}

.card-list {
  font-size: 0.85rem;
  color: #2d3748;
  padding-left: 1.25rem;
}

.dark .card-list {
  color: #e2e8f0;
}

.card-taco[data-v-01506de7] {
    padding: 1rem !important;
}
</style>

