<template>
    <div class="row mt-5">
        <div class="col-md-10 m-auto">
            <div class="card card-body text-center">
                <h1>Email Verification</h1>
                <small>Please Enter the token received in your registered email address</small>
                <form @submit.prevent="verify()">
                    <div class="form-group">
                        <label for="token" class="float-left">Token</label>
                        <input type="text" id="token" name="token" class="form-control" placeholder="Enter Token"
                            v-model="token" />
                    </div>
                    <button type="submit" class="btn btn-success float-left">
                        Submit
                    </button>
                </form>
                <p class="mt-4">
                    <span class="float-right">Already verified? Go to <a href="/auth/login">Login</a></span>
                    <span class="float-left">Didn't receive the token? <a href="javascript:void(0)">Resend</a></span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'EmailVerification',
    data() {
        return {
            token: null,
            email: null,
        };
    },
    mounted() {
        this.email = this.$route.query.email;
    },
    methods: {
        async verify() {
            try {
                await axios.post("http://localhost:7007/email_verification", {
                    email: this.email,
                    token: this.token
                });
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Email Verified',
                });
                this.$router.push('/auth/login');
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