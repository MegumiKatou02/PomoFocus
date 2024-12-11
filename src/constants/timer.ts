export const DEFAULT_SETTINGS = {
  workDuration: 25 * 60,
  breakDuration: 5 * 60,
};

export const TIMER_STATES = {
  WORK: 'work',
  BREAK: 'break',
  IDLE: 'idle',
} as const;
