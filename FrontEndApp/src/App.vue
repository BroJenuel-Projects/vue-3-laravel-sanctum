<template>
    <div>
        <div>
            <router-link to="/">Home</router-link> |
            <router-link to="/signin">Signin</router-link> |
            <router-link to="/account">Alex Garrett-Smith</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    setup() {
        const store = useStore()
        onMounted(() => {
            if (localStorage.getItem('token')) store.dispatch("me");
        })
    },
})
</script>
