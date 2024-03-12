<template lang="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand" href="javascript:void(0)">Dashboard</router-link>
    <div class="navbar-nav" v-if="currentUser?.role === 'ADMIN'">
        <ul class="navbar-nav">
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="todosDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Manage Books
            </a>
            <div class="dropdown-menu" aria-labelledby="todosDropdown">
                <router-link to="/admin/addbooks" class="dropdown-item" href="javascript:void(0)">Add Book</router-link>
                <router-link to="/admin/books" class="dropdown-item" href="javascript:void(0)">Listing Book</router-link>
            </div>
        </li>
        </ul>
    </div>
    <div class="navbar-text ml-auto">
        <span  class="logged-in-user">
            Logged in as {{currentUser?.name}}
        </span>
    </div>
    <button class="btn btn-link" @click="handleLogout()">Logout</button>
</nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "WorkspaceTopbar",
    computed: {
        ...mapGetters(["currentUser"])
    },
    methods: {
        handleLogout() {
            this.$store.commit("LOGOUT");
            this.$router.replace("/auth/login");
        },
    }
}
</script>

<style lang="">

</style>