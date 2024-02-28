<template>
    <div class="row mt-5">
        <div class="col-md-10 m-auto">
            <div class="card card-body text-center">
                <h1>Login</h1>
                <form @submit.prevent="register()">
                    <div class="form-group">
                        <label for="email" class="float-left">Email</label>
                        <input type="email" id="email" name="email" class="form-control" placeholder="Enter Email"
                            v-model="user.email" />
                    </div>
                    <div class="form-group">
                        <label for="email" class="float-left">Password</label>
                        <input type="password" id="password" name="password" class="form-control"
                            placeholder="Enter Password" v-model="user.password" />
                    </div>
                    <div class="form-group">
                        <label for="fname" class="float-left">First Name</label>
                        <input type="text" id="fname" name="fname" class="form-control" placeholder="Enter First Name"
                            v-model="user.first_name" />
                    </div>
                    <div class="form-group">
                        <label for="lname" class="float-left">Last Name</label>
                        <input type="text" id="lname" name="lname" class="form-control" placeholder="Enter Last Name"
                            v-model="user.last_name" />
                    </div>
                    <div class="form-group">
                        <label for="role" class="float-left">Role</label>
                        <select class="form-control" id="mySelect" v-model="user.role">
                            <option value="" disabled>Select an option</option>
                            <option v-for="role in roles" :key="role" :value="role">{{ role }}</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-success float-left">
                        Submit
                    </button>
                </form>
                <p class="lead mt-4">
                    Go to Dashboard? <a href="/">Dashboard</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            user: {
                email: null,
                password: null,
                first_name: null,
                last_name: null,
                role: null
            },
            roles: ['ADMIN', 'MEMBER']
        }
    },
    methods: {
        async register() {
            try {
                await axios.post("http://localhost:7007/auth/register", {
                    user: this.user
                });
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Sucessfully Registered. Now please check your mailbox for token to validate your email address',
                });
                this.$router.push(`/verify-email?email=${this.user.email}`);
            } catch (e) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: e.response.data.message,
                });
            }
        }
    }
}
</script>