import { Link } from '../../shared/model/link.model';

export class LoginModel {
  userName: string;
  password: string;
  links: Array<Link>;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
