<script setup>
import { Zap, Shield, Repeat, Users, TrendingUp, Cpu } from 'lucide-vue-next'

const features = [
  {
    icon: Zap,
    title: "Accelerated Development",
    description: "Reduce time-to-science with standardized, ready-to-use datasets"
  },
  {
    icon: Shield,
    title: "Data Integrity",
    description: "Built-in validation and consistency checks ensure data quality"
  },
  {
    icon: Repeat,
    title: "Enhanced Reproducibility",
    description: "Standardized formats enable reliable scientific reproducibility"
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "Developed with input from leading EO and AI researchers"
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Designed to handle datasets from gigabytes to petabytes"
  },
  {
    icon: Cpu,
    title: "Foundation Model Ready",
    description: "Optimized for training and evaluating large-scale AI models"
  }
]
</script>

<template>
  <section class="py-10 px-6 ">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8">
        <h2 class="!text-[3rem] md:text-5xl !font-extrabold !mb-6">
          Why Choose TACO?
        </h2>
        <p class="text-xl inline-block max-w-3xl mx-auto leading-relaxed">
          Built for the future of Earth Observation AI, TACO provides the foundation 
          for scalable, reproducible, and interoperable scientific progress.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="p-6 rounded-xl border bg-white !border-slate-200 hover:!border-blue-300 hover:shadow-lg transition-all duration-300 group"
        >
          <div class="flex items-center mb-4">
            <div class="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
              <component :is="feature.icon" class="w-5 h-5 text-blue-600" />
            </div>
            <h3 class="!text-xl !ml-4 !mt-0 !text-black">
              {{ feature.title }}
            </h3>
          </div>
          <p class="text-slate-600 leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
