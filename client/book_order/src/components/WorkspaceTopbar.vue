<template lang="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand">Dashboard</router-link>

        <div class="navbar-nav">
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
                Logged in as Surajit Malik
            </span>
        </div>
        <button @click="logout" class="btn btn-link">Logout</button>
    </nav>
</template>
<script>
export default {
    name: 'WorkspaceTopbar',
    methods: {
        logout() {
            this.$router.push('/auth/login')
        }
    }
}
</script>
<style lang="">

</style>