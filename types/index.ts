export interface Member {
  id: number;
  name: string;
  team: string;
  photo: string;
  hymn: string;
  verse: string;
  prayer: string;
  intro: string;
}

export interface Team {
  id: number;
  name: string;
  color: string;
  description: string;
  role: string;
  members: string[];
}

export interface ScheduleItem {
  date: string;
  title: string;
  desc: string;
}

export interface SchedulePhase {
  phase: string;
  color: string;
  items: ScheduleItem[];
}

export interface Mission {
  id: string;
  type: 'bible' | 'exercise' | 'prayer';
  title: string;
  desc: string;
}

export interface MissionWeek {
  week: number;
  label: string;
  missions: Mission[];
}
