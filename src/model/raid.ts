export interface Raid {
    name: string;
    difficulty_sm_8: number;
    difficulty_sm_16: number | null;
    difficulty_hm_8: number;
    difficulty_hm_16: number | null;
    difficulty_nim_8: number | null;
    difficulty_nim_16: number | null;
}

export interface SelectedRaid {
    raid: Raid;
    groupSize: string;
    difficulty: string;
}