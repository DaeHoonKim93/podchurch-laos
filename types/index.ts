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
  leader: string;
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
