<template>
  <section class="text-center px-6 py-12">
    <div class="flex flex-col items-center">
      <lucide-alert-triangle class="text-red-500 w-16 h-16" />
      <h2 class="!text-[2.5rem] !font-bold">The Structural Bottleneck</h2>
      <p class="max-w-4xl !text-[1.25rem] !leading-relaxed">
        While geospatial communities have long relied on standardized formats like NetCDF and GeoTIFF, AI-ready datasets
        derived from Earth Observation lack equivalent conventions. Over 500 AI-ready EO datasets exist, yet they remain
        fragmented and difficult to integrate.
      </p>
    </div>

    <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="!bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
        <lucide-shuffle class="text-red-500 w-8 h-8 mx-auto mb-4" />
        <h3 class="!text-black dark:!text-white !font-semibold !text-lg mb-2">Ad Hoc File Structures</h3>
        <p class="!text-black dark:!text-gray-300 !text-sm">
          Data producers adopt inconsistent organizational patterns, making datasets difficult to navigate and
          understand across different projects.
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

    <div class="mt-11 rounded-xl !bg-red-50 dark:!bg-red-900 p-7 border-l-4 !border-red-400 dark:!border-red-600">
      <h3 class="!m-[5px] !font-bold !text-2xl mb-2 !text-gray-900 dark:!text-white !text-left">The FAIR Principles Gap</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 !text-left !text-base !leading-[1.6] !text-gray-800 dark:!text-gray-200">
        <div>
          <p><strong>Findability:</strong> Lack of standardized metadata schemas limits discoverability in search
            engines and data catalogs.</p>
          <p class="mt-4"><strong>Accessibility:</strong> Manual downloads and custom APIs instead of scalable,
            cloud-native access patterns.</p>
        </div>
        <div>
          <p><strong>Interoperability:</strong> Varying formats with different byte layouts, chunking strategies, and
            metadata conventions create integration barriers.</p>
          <p class="mt-4"><strong>Reusability:</strong> Missing licenses, provenance, and documentation make datasets
            difficult to audit, cite, or extend.</p>
        </div>
      </div>
    </div>
  </section>
</template>
