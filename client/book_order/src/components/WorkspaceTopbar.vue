<template lang="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand">Dashboard</router-link>

        <div class="navbar-nav" v-if="currentUser?.role === 'ADMIN'">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="javascript:void(0)">Manage Books</a>
                    <div class="dropdown-menu">
                        <router-link to="/admin/addbooks" class="dropdown-item" href="javascript:void(0)">Add Book</router-link> 
                        <router-link to="/admin/books" class="dropdown-item" href="javascript:void(0)">Listing Book</router-link> 
                    </div>
                </li>
            </ul>
        </div> 

        <div class="navbar-text ml-auto">
            <span class="logged-in-user">
                Logged in as {{currentUser?.name}} ({{currentUser ? toTitleCase(currentUser?.role) : null}})
            </span>
        </div>
        <button @click="logout" class="btn btn-link">Logout</button>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'WorkspaceTopbar',
    computed: {
        ...mapGetters(['currentUser'])
    },
    mounted() {
        console.log('Current User', this.currentUser);
    },
    methods: {
        logout() {
            this.$store.commit('LOGOUT');
            this.$router.replace('/auth/login')
        },
        toTitleCase(str) {
            return str.toLowerCase().replace(/\b\w/g, function (char) {
                return char.toUpperCase();
            });
        }
    }
}
</script>
<style lang="">

</style>