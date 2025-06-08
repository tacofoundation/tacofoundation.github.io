<template>
  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <div class="flex justify-center mb-6">
          <CheckCircle class="w-16 h-16 text-green-500" />
        </div>
        <h2 class="!text-4xl md:text-5xl !font-bold mb-6">
          Introducing <span class="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">TACO</span>
        </h2>
        <p class="text-xl inline-block max-w-4xl mx-auto leading-relaxed !text-center mb-8">
          A comprehensive FAIR-compliant specification that brings order to AI-ready Earth Observation datasets,
          enabling seamless interoperability and reproducible science through standardization.
        </p>
        <div class="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          Built on GDAL & Apache Parquet • Multi-language Support • Cloud-Optimized
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
          <div class="flex justify-center mb-6">
            <Layers class="w-12 h-12 text-blue-500" />
          </div>
          <h3 class="text-2xl font-bold !text-black mb-4 text-center">Formal Data Model</h3>
          <p class="leading-relaxed text-center mb-4 !text-black">
            Structured data model with SAMPLEs, TORTILLA containers, and comprehensive metadata schemas.
          </p>
          <ul class="text-sm space-y-2 !text-black">
            <li>• Self-contained SAMPLE units</li>
            <li>• Hierarchical TORTILLA containers</li>
            <li>• Standardized metadata conventions</li>
          </ul>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-500">
          <div class="flex justify-center mb-6">
            <Database class="w-12 h-12 text-teal-500" />
          </div>
          <h3 class="text-2xl font-bold !text-black mb-4 text-center">Binary File Format</h3>
          <p class="leading-relaxed text-center mb-4 !text-black">
            Efficient binary serialization with Apache Parquet metadata and GDAL VFS support.
          </p>
          <ul class="text-sm space-y-2 !text-black">
            <li>• Partial read optimization</li>
            <li>• Cloud-native access patterns</li>
            <li>• Self-contained & portable</li>
          </ul>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
          <div class="flex justify-center mb-6">
            <Code class="w-12 h-12 text-green-500" />
          </div>
          <h3 class="text-2xl font-bold !text-black mb-4 text-center">Unified API</h3>
          <p class="leading-relaxed text-center mb-4 !text-black">
            Consistent interfaces across Python, R, Julia, and JavaScript for creating and accessing datasets.
          </p>
          <ul class="text-sm space-y-2 !text-black">
            <li>• Toolbox for dataset creation</li>
            <li>• Reader for efficient access</li>
            <li>• DataFrame integration</li>
          </ul>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-xl border border-slate-200">
          <div class="flex items-center mb-4">
            <Cloud class="w-8 h-8 text-blue-500 mr-3" />
            <h4 class="text-xl font-semibold !text-black">Cloud-Optimized Architecture</h4>
          </div>
          <p class="leading-relaxed !text-black">
            Built-in support for major cloud storage platforms (S3, Azure, GCS) with efficient partial reads
            and minimal HTTP requests, reducing both latency and operational costs.
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl border border-slate-200">
          <div class="flex items-center mb-4">
            <Zap class="w-8 h-8 text-green-500 mr-3" />
            <h4 class="text-xl font-semibold !text-black">Foundation Model Ready</h4>
          </div>
          <p class="leading-relaxed !text-black">
            Designed specifically for the era of foundation models, enabling seamless combination of diverse
            datasets for effective training and performance evaluation.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle, Layers, Cloud, Code, Database, Zap } from 'lucide-vue-next';
</script>
