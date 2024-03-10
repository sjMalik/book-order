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
                <div class="form-group m-b-0 m-t-10">
                    <div class="col-sm-12 text-center">
                        Don't have an account?
                        <a href="javascript:void(0)" class="text-info m-l-5"><b>Sign up</b></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
                const { data } = await this.$http.post("auth/login", {
                    email: this.email,
                    password: this.password
                });
                this.$store.commit("LOGIN", data);
                this.$router.push('/');
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Sucessfully logged in',
                });
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