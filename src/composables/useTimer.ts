import { ref, computed } from 'vue';
import type { TimerState } from '@/types/timer';
import { DEFAULT_SETTINGS, TIMER_STATES } from '@/constants/timer';
import notificationSound from '@/assets/sounds/notification.wav'

export function useTimer() {
  const timeRemaining = ref(DEFAULT_SETTINGS.workDuration);
  const timerState = ref<TimerState>('idle');
  const isRunning = ref(false);
  let timerInterval: number | null = null;

  const progress = computed(() => {
    const total = timerState.value === TIMER_STATES.WORK 
      ? DEFAULT_SETTINGS.workDuration 
      : DEFAULT_SETTINGS.breakDuration;
    return ((total - timeRemaining.value) / total) * 100;
  });

  const startTimer = () => {
    if (timerState.value === TIMER_STATES.IDLE) {
      timerState.value = TIMER_STATES.WORK;
      timeRemaining.value = DEFAULT_SETTINGS.workDuration;
    }
    
    isRunning.value = true;
    timerInterval = setInterval(() => {
      timeRemaining.value--;
      
      if (timeRemaining.value <= 0) {
        if (timerState.value === TIMER_STATES.WORK) {
          timerState.value = TIMER_STATES.BREAK;
          timeRemaining.value = DEFAULT_SETTINGS.breakDuration;
          playNotification();
        } else {
          resetTimer();
          playNotification();
        }
      }
    }, 1000);
  };

  const pauseTimer = () => {
    isRunning.value = false;
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  };

  const resetTimer = () => {
    pauseTimer();
    timerState.value = 'idle';
    timeRemaining.value = DEFAULT_SETTINGS.workDuration;
  };

  const playNotification = () => {
    try {
      const audio = new Audio(notificationSound);
      audio.play().catch(error => {
        console.error('Không thể phát âm thanh:', error);
      });
    } catch (error) {
      console.error('Lỗi khởi tạo Audio:', error);
    }
  };

  return {
    timeRemaining,
    timerState,
    isRunning,
    progress,
    startTimer,
    pauseTimer,
    resetTimer,
  };
}
