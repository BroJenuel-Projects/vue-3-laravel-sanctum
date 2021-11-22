<template>
    <form action="#">
        <div>
            <label for="email">Email address</label>
            <input type="text" name="email" v-model="email" id="email" />
        </div>
        <div>
            <label for="password">Password</label>
            <input type="text" name="password" v-model="password" id="password" />
        </div>
        <div>
            <button type="button" @click="submit()">Sign in</button>
        </div>
    </form>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        const email = ref('')
        const password = ref('')
        const store = useStore()
        const router = useRouter()

        return {
            email,
            password,
            submit: async () => {
                await store.dispatch("signIn", {
                    email: email.value,
                    password: password.value
                })

                router.replace("/account");
            }
        }

    }
})
</script>
