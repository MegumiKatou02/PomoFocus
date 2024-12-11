export type TimerState = 'work' | 'break' | 'idle';

export interface TimerSettings {
  workDuration: number;
  breakDuration: number;
}
