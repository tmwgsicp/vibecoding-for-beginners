<script setup>
import { ref } from 'vue'

// 手动设置访客数（定期更新）
const visitors = ref(800)
const loading = ref(false)

</script>

<template>
  <div class="hero-stats">
    <div class="stats-content">
      <span class="stats-icon">👋</span>
      <span class="stats-text">
        👋 欢迎！你是第 
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
  margin: 32px 0;
  text-align: center;
}

.stats-content {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.stats-content:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 12px rgba(24, 144, 255, 0.1);
}

.stats-icon {
  font-size: 20px;
}

.stats-text {
  font-size: 16px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.stats-number {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  font-size: 18px;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
}

@media (max-width: 768px) {
  .stats-content {
    padding: 12px 24px;
    gap: 8px;
  }
  
  .stats-text {
    font-size: 14px;
  }
  
  .stats-number {
    font-size: 16px;
  }
  
  .stats-icon {
    font-size: 18px;
  }
}
</style>
