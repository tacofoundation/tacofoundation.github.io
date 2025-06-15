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

import ScrollToNext from './ScrollToNext.vue'

</script>




<template>
  <section id="features" class="w-full max-w-none px-8 py-16 min-h-screen flex flex-col justify-center">
    <div class="w-full">
      <div class="text-center mb-8">
        <h2 class="!text-[2.5rem] md:!text-5xl lg:!text-[3.5rem] !font-extrabold !mb-6 text-balance">
          Why Choose TACO?
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="card-taco"
        >
          <div class="flex items-center mb-4 gap-4">
            <div class="icon-wrapper">
              <component :is="feature.icon" class="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 icon-inner" />
            </div>
            <h3 class="card-title text-balance">{{ feature.title }}</h3>
          </div>
          <p class="card-text text-balance">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
    <ScrollToNext targetId="callToAction" label="Scroll Down" />

  </section>
</template>


<style scoped>
.card-taco {
  background-color: #f9f9f9;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 2rem;
  text-align: left;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
}

.card-taco:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  background-color: #dbeafe; 
  padding: 0.75rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.vp-doc h3{
   margin:0 !important;
}

.icon-inner {
  color: #2563eb;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a202c;
}

.card-text {
  color: #2d3748;
  font-size: 0.95rem;
  line-height: 1.6;
}

.dark .card-taco {
  background-color: #2d2d2d;
  border: 1px solid #444;
}

.dark .card-title,
.dark .card-text {
  color: #f7fafc;
}

.dark .icon-wrapper {
  background-color: #3b3b3b;
}

.dark .icon-inner {
  color: #60a5fa;
}
</style>
