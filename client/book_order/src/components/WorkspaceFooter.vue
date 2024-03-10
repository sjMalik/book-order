<template>
    <footer class="footer text-center">
        {{ (new Date()).getFullYear() }} Online Book Order &nbsp;&nbsp; <i class="fas fa-globe text-light-green"></i>
        &nbsp;&nbsp; Release {{ this.version }}
    </footer>
</template>

<script>
export default {
    name: "WorkspaceFooter",
    data() {
        return {
            version: ""
        }
    },
    mounted() {
        this.release();
    },
    methods: {
        // release() {
        //     this.$http.get('/')
        //     .then(reply => {
        //         this.version = reply.data.version;
        //     })
        //     .catch(err => console.log(err))
        // }
    }
}
</script>

<style scoped></style>
