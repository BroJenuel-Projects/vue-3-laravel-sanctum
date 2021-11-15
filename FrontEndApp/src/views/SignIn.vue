<template>
    <form action="#">
        <div>
            <label for="email">Email address</label>
            <input type="text" name="email" id="email" />
        </div>
        <div>
            <label for="password">Password</label>
            <input type="text" name="password" id="password" />
        </div>
        <div>
            <button type="submit">Sign in</button>
        </div>
    </form>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import axios from './../service/axios'
export default defineComponent({
    setup() {
        const email = ref('')
        const password = ref('')
        const store = useStore()


    }
})
</script>
