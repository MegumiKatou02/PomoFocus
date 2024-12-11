<template>
  <div class="app">
    <h1>Pomodoro Timer</h1>
    
    <div class="progress-bar">
      <div 
        class="progress" 
        :style="{ width: `${progress}%` }"
        :class="{ 'break': timerState === 'break' }"
      ></div>
    </div>

    <TaskTimer 
      :timeRemaining="timeRemaining"
      :timerState="timerState"
    />
    
    <TaskControls
      :isRunning="isRunning"
      @start="startTimer"
      @pause="pauseTimer"
      @reset="resetTimer"
    />
  </div>
</template>

<script setup lang="ts">
import TaskTimer from './components/TaskTimer.vue';
import TaskControls from './components/TaskControls.vue';
// import { useTimer } from './composables/useTimer';
import { useTimer } from '@/composables/useTimer';

const {
  timeRemaining,
  timerState,
  isRunning,
  progress,
  startTimer,
  pauseTimer,
  resetTimer,
} = useTimer();
</script>

<style>
.app {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background-color: #eee;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.progress {
  height: 100%;
  background-color: #4CAF50;
  transition: width 1s linear;
}

.progress.break {
  background-color: #2196F3;
}
</style>
