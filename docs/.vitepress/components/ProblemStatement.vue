<template>
  <section class="text-center px-6 py-12">
    <div class="flex flex-col items-center">
      <lucide-alert-triangle class="text-red-500 w-16 h-16" />
      <h2 class="!text-[2.5rem] !font-bold">The Structural Bottleneck</h2>
      <p class="max-w-4xl !text-[1.25rem] !leading-relaxed">
        There is no standard for AI-ready Earth Observation datasets. The
        data remains fragmented, siloed, and difficult to unify, holding
        back the full potential of planetary-scale insight.
      </p>
    </div>

    <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="!bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
        <lucide-shuffle class="text-red-500 w-8 h-8 mx-auto mb-4" />
        <h3 class="!text-black dark:!text-white !font-semibold !text-lg mb-2">Ad Hoc File Structures</h3>
        <p class="!text-black dark:!text-gray-300 !text-sm">
          Data producers adopt inconsistent organizational patterns, making datasets difficult to interpret,
          compare, and integrate across different projects.
        </p>
      </div>

      <div class="!bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
        <lucide-file-x class="text-red-500 w-8 h-8 mx-auto mb-4" />
        <h3 class="!text-black dark:!text-white !font-semibold !text-lg mb-2">Loosely Defined Formats</h3>
        <p class="!text-black dark:!text-gray-300 !text-sm">
          Without standardized schemas, data interpretation becomes subjective and error-prone, hindering automated
          processing.
        </p>
      </div>

      <div class="!bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
        <lucide-git-branch class="text-red-500 w-8 h-8 mx-auto mb-4" />
        <h3 class="!text-black dark:!text-white !font-semibold !text-lg mb-2">Inconsistent Semantic Encodings</h3>
        <p class="!text-black dark:!text-gray-300 !text-sm">
          Varying metadata standards prevent meaningful data integration and limit the development of interoperable AI
          tools.
        </p>
      </div>

      <div class="!bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
        <lucide-database class="text-red-500 w-8 h-8 mx-auto mb-4" />
        <h3 class="!text-black dark:!text-white !font-semibold !text-lg mb-2">Limited Cloud Optimization</h3>
        <p class="!text-black dark:!text-gray-300 !text-sm">
          Most datasets lack efficient partial read support and cloud-native access patterns, resulting in poor
          performance and high costs.
        </p>
      </div>
    </div>

  </section>
</template>


