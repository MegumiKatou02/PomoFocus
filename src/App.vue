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

    <div class="content">
      <h2>Tăng cường hiệu suất làm việc với Pomodoro Timer</h2>
      
      <section>
        <h3>Pomofocus là gì?</h3>
        <p>Pomofocus là ứng dụng hẹn giờ Pomodoro được tối ưu hóa cho cả máy tính và điện thoại. Mục tiêu của ứng dụng là giúp bạn tập trung tốt hơn vào công việc như học tập, viết lách hay lập trình. Ứng dụng được phát triển dựa trên phương pháp Pomodoro - một kỹ thuật quản lý thời gian hiệu quả của Francesco Cirillo.</p>
      </section>

      <section>
        <h3>Giới thiệu về kỹ thuật Pomodoro</h3>
        <p>Kỹ thuật Pomodoro là phương pháp làm việc hiệu quả do Francesco Cirillo sáng tạo. Phương pháp này chia thời gian làm việc thành các khoảng 25 phút tập trung, xen kẽ với những giờ nghỉ ngắn. Mỗi chu kỳ làm việc được gọi là một "pomodoro" - có nguồn gốc từ từ "cà chua" trong tiếng Ý, lấy cảm hứng từ chiếc đồng hồ hẹn giờ hình quả cà chua mà Cirillo sử dụng khi còn là sinh viên.</p>
      </section>

      <section>
        <h3>Hướng dẫn sử dụng Pomodoro Timer</h3>
        <ul>
          <li>Thêm các công việc cần làm trong ngày</li>
          <li>Ước tính số pomodoro cần thiết (1 pomodoro = 25 phút làm việc)</li>
          <li>Chọn một công việc để bắt đầu</li>
          <li>Khởi động đồng hồ và tập trung làm việc trong 25 phút</li>
          <li>Nghỉ giải lao 5 phút khi có chuông báo</li>
          <li>Lặp lại quy trình cho đến khi hoàn thành công việc</li>
        </ul>
      </section>

      <footer class="footer">
        <p class="credits">
          Inspired by <a href="https://pomofocus.io/" target="_blank" rel="noopener">pomofocus.io</a>
        </p>
        <p class="github-link">
          <a href="https://github.com/MegumiKatou02/PomoFocus.git" target="_blank" rel="noopener">
            <svg height="20" width="20" viewBox="0 0 16 16" class="github-icon">
              <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            GitHub
          </a>
        </p>
      </footer>
    </div>
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

.content {
  /* margin-top: 500px; */
  max-width: 800px;
  margin: 0 auto;
  padding: 10rem 2rem 0rem;
  text-align: left;
  line-height: 1.8;
}

h2 {
  font-size: 2.5rem;
  color: #4CAF50;
  margin-bottom: 3rem;
  font-weight: 700;
  line-height: 1.3;
}

h3 {
  font-size: 1.8rem;
  color: #4CAF50;
  margin: 2rem 0 1.5rem;
  font-weight: 600;
}

section {
  margin-bottom: 3.5rem;
}

p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #37474f;
  margin-bottom: 1.5rem;
}

ul {
  list-style-type: disc;
  padding-left: 2.5rem;
  margin-top: 1rem;
}

li {
  font-size: 1.2rem;
  color: #37474f;
  margin-bottom: 1rem;
  line-height: 1.6;
  position: relative;
}

li::marker {
  color: #4CAF50;
}

.footer {
  margin-top: 6rem;
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid #eee;
}

.footer p {
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0;
}

.footer a {
  color: #303f9f;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer a:hover {
  color: #1a237e;
}

.github-link {
  margin-top: 1rem;
}

.github-icon {
  margin-right: 0.5rem;
  vertical-align: middle;
}

.github-link a {
  display: inline-flex;
  align-items: center;
  color: #303f9f;
  text-decoration: none;
  transition: color 0.3s ease;
}

.github-link a:hover {
  color: #1a237e;
}
</style>
