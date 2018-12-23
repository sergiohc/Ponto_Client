export class Employee {
    id: number;
    name: string;
    cpf: string;
    pis: string;
    user_id: number;
    team_id: number;
    office_id: number;
    slug: string;

    constructor(employeeInfo: any) {
        this.id = employeeInfo.id;
        this.name = employeeInfo.name;
        this.cpf = employeeInfo.cpf;
        this.pis = employeeInfo.pis;
        this.user_id = employeeInfo.user_id;
        this.team_id = employeeInfo.team_id;
        this.office_id = employeeInfo.team_id;

        this.slug = employeeInfo.slug;
    }
}
