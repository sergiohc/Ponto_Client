
export class ClockInOut {
    id: number;
    date: Date;
    h1: Date;
    h2: Date;
    h3: Date;
    h4: Date
    employee_id: number;

    constructor(clockInOutInfo: any) {
        this.id = clockInOutInfo.id;
        this.date = clockInOutInfo.date;
        this.h1 = clockInOutInfo.hour1;
        this.h2 = clockInOutInfo.hour2;
        this.h3 = clockInOutInfo.hour3;
        this.h4 = clockInOutInfo.hour4;
        this.employee_id = clockInOutInfo.employee_id;
    }
}
