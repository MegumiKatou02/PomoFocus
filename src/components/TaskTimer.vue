<template>
  <div class="timer">
    <div class="timer-display">
      {{ formatTime(timeRemaining) }}
    </div>
    <div class="timer-state">
      {{ timerState === 'work' ? 'Thời gian làm việc' : 'Thời gian nghỉ ngơi' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { TimerState } from '@/types/timer';

const props = defineProps<{
  timeRemaining: number;
  timerState: TimerState;
}>();

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};
</script>

<style scoped>
.timer {
  text-align: center;
}

.timer-display {
  font-size: 6rem;
  font-weight: bold;
  font-family: monospace;
}

.timer-state {
  font-size: 1.5rem;
  color: #666;
  margin-top: 1rem;
}
</style>
