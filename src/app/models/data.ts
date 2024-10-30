export interface Data {
    section: string;
    state: State;
}

export enum State {
    'Running' = 'settings_backup_restore',
    'Alarm' = 'error_outline',
    'Warning' = 'report_problem'
}