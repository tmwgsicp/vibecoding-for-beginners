<script setup>
import { ref, onMounted } from 'vue'

const visitors = ref(100)
const loading = ref(true)

// Cloudflare Worker API 地址
const API_URL = 'https://vibecoding-analytics.2589462900.workers.dev'

onMounted(async () => {
  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    
    if (!data.error) {
      visitors.value = data.visitors
    }
  } catch (error) {
    console.error('Failed to fetch analytics:', error)
  } finally {
    loading.value = false
  }
})

</script>

<template>
  <div class="hero-stats">
    <div class="stats-content">
      <span class="stats-text">
        欢迎！你是第 
        <span class="stats-number">
          <template v-if="loading">...</template>
          <template v-else>{{ visitors.toLocaleString() }}</template>
        </span>
        位来学习的开发者
      </span>
    </div>
  </div>
</template>

<style scoped>
.hero-stats {
  margin: 40px 0 24px 0;
  text-align: center;
}

.stats-content {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: linear-gradient(135deg, 
    rgba(24, 144, 255, 0.05) 0%, 
    rgba(82, 196, 26, 0.05) 100%
  );
  border: 1px solid var(--vp-c-brand-soft);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.stats-content:hover {
  border-color: var(--vp-c-brand-1);
  background: linear-gradient(135deg, 
    rgba(24, 144, 255, 0.08) 0%, 
    rgba(82, 196, 26, 0.08) 100%
  );
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.15);
}

.stats-text {
  font-size: 15px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  font-weight: 500;
}

.stats-number {
  color: var(--vp-c-brand-1);
  font-weight: 700;
  font-size: 22px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  margin: 0 4px;
}

@media (max-width: 768px) {
  .stats-content {
    padding: 10px 20px;
  }
  
  .stats-text {
    font-size: 14px;
  }
  
  .stats-number {
    font-size: 18px;
  }
}
</style>
