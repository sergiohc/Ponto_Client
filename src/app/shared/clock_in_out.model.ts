
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
        this.h1 = clockInOutInfo.h1;
        this.h2 = clockInOutInfo.h2;
        this.h3 = clockInOutInfo.h3;
        this.h4 = clockInOutInfo.h4;
        this.employee_id = clockInOutInfo.employee_id;
    }
}
