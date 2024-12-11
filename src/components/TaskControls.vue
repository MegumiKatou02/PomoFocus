<template>
  <div class="controls">
    <button 
      class="control-btn"
      @click="isRunning ? onPause() : onStart()"
      :class="{ 'btn-pause': isRunning }"
    >
      {{ isRunning ? 'Tạm dừng' : 'Bắt đầu' }}
    </button>
    <button 
      class="control-btn"
      @click="onReset"
    >
      Đặt lại
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps<{
  isRunning: boolean;
}>();

const emit = defineEmits<{
  (e: 'start'): void;
  (e: 'pause'): void;
  (e: 'reset'): void;
}>();

const onStart = () => emit('start');
const onPause = () => emit('pause');
const onReset = () => emit('reset');
</script>

<style scoped>
.controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.control-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  transition: all 0.3s;
}

.control-btn:hover {
  opacity: 0.9;
}

.btn-pause {
  background-color: #f44336;
}
</style>
