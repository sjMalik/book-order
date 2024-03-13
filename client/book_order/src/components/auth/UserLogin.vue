<template>
    <div class="row mt-5">
        <div class="col-md-10 m-auto">
            <div class="card card-header" style="background-color: white;">
                <h1>Online Book Order</h1>
            </div>
            <div class="card card-body text-center">
                <h2>Login</h2>
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
                    <button type="reset" class="btn btn-secondary ml-2 float-left">
                        Reset
                    </button>
                </form>
                <div class="form-group m-b-0 m-t-10">
                    <div class="col-sm-10 text-center">
                        Don't have an account?
                        <router-link to="/auth/registration" class="text-info m-l-5">Sign up</router-link>
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
                // Telling the Vuex store to commit the mutation named "LOGIN" with the provoided data
                this.$store.commit('LOGIN', data);
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