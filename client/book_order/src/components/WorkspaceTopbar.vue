<template lang="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="javascript:void(0)">Dashboard</a>
    <div class="navbar-nav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Home</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="todosDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Todos
            </a>
            <div class="dropdown-menu" aria-labelledby="todosDropdown">
                <a class="dropdown-item" href="javascript:void(0)">Create Todo</a>
                <a class="dropdown-item" href="javascript:void(0)">Update Todo</a>
            </div>
        </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Mailbox</a>
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
            this.$router.replace("/login");
        },
    }
}
</script>

<style lang="">

</style>