<template>
  <div class="flex justify-center mt-12">
    <div
      class="inline-flex items-center space-x-2 cursor-pointer slower-bounce group"
      @click="scrollToTarget"
    >
      <div
        class="w-8 h-8 border rounded-full flex items-center justify-center transition-colors group-hover:border-blue-400"
      >
        <svg
          class="w-5 h-5 transition-colors group-hover:text-blue-400"
          :class="{ 'rotate-180': direction === 'up' }"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <span class="text-sm transition-colors group-hover:text-blue-400">
        {{ label }}
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  targetId: String,
  label: {
    type: String,
    default: 'Scroll Down'
  },
  direction: {
    type: String,
    default: 'down' // 'up' or 'down'
  }
})

function scrollToTarget() {
  const el = document.getElementById(props.targetId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
