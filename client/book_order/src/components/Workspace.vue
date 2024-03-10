<template>
    <div id="main-wrapper">
        <workspace-topbar></workspace-topbar>

        <div class="page-wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import WorkspaceTopbar from './WorkspaceTopbar';

export default {
    name: "app",
    components: { WorkspaceTopbar }
}
</script>

<style>
#main-wrapper {
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: -1;
}

#page-wrapper {
    background: #eef5f9;
}
</style>