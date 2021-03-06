import { ClockInOut } from './clock_in_out.model';
export class Employee {
    id: number;
    name: string;
    cpf: string;
    pis: string;
    user_id: number;
    team: string;
    office: string;
    slug: string;
    clockInOut: ClockInOut[] = [];

    constructor(employeeInfo: any) {
        this.id = employeeInfo.id;
        this.name = employeeInfo.name;
        this.cpf = employeeInfo.cpf;
        this.pis = employeeInfo.pis;
        this.user_id = employeeInfo.user_id;
        this.team = employeeInfo.team;
        this.office = employeeInfo.office;

        this.slug = employeeInfo.slug;
        this.includeclock(employeeInfo.clockInOut);
    }

    private includeclock(clock: any) {
      for (const count in clock) {
          this.clockInOut.push( new ClockInOut(clock[count]) );
      }
  }
}
