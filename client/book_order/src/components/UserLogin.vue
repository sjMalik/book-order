<template>
    <div class="row mt-5">
        <div class="col-md-10 m-auto">
            <div class="card card-body text-center">
                <h1>Login</h1>
                <form @submit.prevent="login()">
                    <div class="form-group">
                        <label for="email" class="float-left">Email</label>
                        <input type="email" id="email" name="email" class="form-control" placeholder="Enter Email"
                            v-model="email" />
                    </div>
                    <div class="form-group">
                        <label for="email" class="float-left">Password</label>
                        <input type="password" id="password" name="password" class="form-control"
                            placeholder="Enter Password" v-model="password" />
                    </div>
                    <button type="submit" class="btn btn-success float-left">
                        Submit
                    </button>
                </form>
                <p class="lead mt-4">
                    Go to Home? <a href="/">Home</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'UserLogin',
    data() {
        return {
            email: null,
            password: null
        };
    },
    methods: {
        async login() {
            try {
                await axios.post("http://localhost:7007/auth/login", {
                    email: this.email,
                    password: this.password
                });
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Sucessfully logged in',
                });
                this.$router.push('/');
            } catch (e) {
                console.log(e)
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: e.response.data.message,
                });
            }
        },
    },
}
</script>