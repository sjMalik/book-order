import { jwtDecode } from 'jwt-decode'

export default class User {
    constructor({ id, email, role, first_name, last_name, email_verification }) {
        this.id = id;
        this.email = email;
        this.role = role;
        this.first_name = first_name || '';
        this.last_name = last_name || '';
        this.name = this.first_name + " " + this.last_name;
        this.isVerified = email_verification === 'VERIFIED';
    }

    static from(token) {
        try {
            let obj = jwtDecode(token);
            return new User(obj)
        } catch (e) {
            console.error(e)
            return null
        }
    }
}
