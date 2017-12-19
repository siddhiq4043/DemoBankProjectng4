import { Link } from './link.model';

export class Register {
  name: string;
  phone: number;
  email: string;
  annualIncome: number;
  birthDate: string;
  loanType: string;
  employeetype: string;
  loanrequired: number;
  contactTime: string;
  agree: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
