export interface Project {
    flight_number: number;
    mission_name: string;
    mission_id: any;
    upcoming: boolean;
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: string;
    launch_date_local: string;
    is_tentative: boolean;
    tentative_max_precision: string;
    tbd: boolean;
    launch_window: number;
    rocket: any;
    ships: any;
    telemetry: any;
    launch_site: any;
    launch_success: boolean;
    launch_failure_details: object;
    links: any;
    details: string;
    static_fire_date_utc: string;
    static_fire_date_unix: number;
    timeline: any;
    crew: any;
}

export interface ProjectList {
    projectList: [Project];
}
