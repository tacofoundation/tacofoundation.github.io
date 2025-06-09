<template>
  <section class="text-center px-6 py-12 problem-section">
    <div class="flex flex-col items-center">
      <lucide-alert-triangle class="icon-warning" />
      <h2 class="heading">The Structural Bottleneck</h2>
      <p class="description">
        There is no standard for AI-ready Earth Observation datasets. The
        data remains fragmented, siloed, and difficult to unify, holding
        back the full potential of planetary-scale insight.
      </p>
    </div>

    <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Tarjeta 1 -->
      <div class="card">
        <lucide-shuffle class="icon" />
        <h3 class="card-title">Ad Hoc File Structures</h3>
        <p class="card-text">
          Data producers adopt inconsistent organizational patterns, making datasets difficult to interpret,
          compare, and integrate across different projects.
        </p>
      </div>

      <!-- Tarjeta 2 -->
      <div class="card">
        <lucide-file-x class="icon" />
        <h3 class="card-title">Loosely Defined Formats</h3>
        <p class="card-text">
          Without standardized schemas, data interpretation becomes subjective and error-prone, hindering automated
          processing.
        </p>
      </div>

      <!-- Tarjeta 3 -->
      <div class="card">
        <lucide-git-branch class="icon" />
        <h3 class="card-title">Inconsistent Semantic Encodings</h3>
        <p class="card-text">
          Varying metadata standards prevent meaningful data integration and limit the development of interoperable AI
          tools.
        </p>
      </div>

      <!-- Tarjeta 4 -->
      <div class="card">
        <lucide-database class="icon" />
        <h3 class="card-title">Limited Cloud Optimization</h3>
        <p class="card-text">
          Most datasets lack efficient partial read support and cloud-native access patterns, resulting in poor
          performance and high costs.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>

.heading {
  font-size: 2.5rem;
  font-weight: bold;
}

.description {
  max-width: 64rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.icon-warning {
  color: #ef4444;
  width: 4rem;
  height: 4rem;
}

.icon {
  color: #ef4444;
  width: 2rem;
  height: 2rem;
  margin: 0 auto 1rem;
}

.card {
  background-color: #f9f9f9;
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  border: 1px solid #d1d5db;
}

.dark .card {
  background-color: color-mix(in oklab, var(--color-white) 10%, transparent);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.card-title {
  color: #1a202c;
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.dark .card-title {
  color: #f7fafc;
}

.card-text {
  color: #2d3748;
  font-size: 0.875rem;
}

.dark .card-text {
  color: #e2e8f0;
}
</style>
