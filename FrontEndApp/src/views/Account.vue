<template>
    <div>
        Account Page
        <button @click="Logout()">Sign Out</button>
        <pre>
            {{ user }}
        </pre>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
    setup() {
        const store = useStore();
        const user = computed(() => store.state.user.user);
        const router = useRouter();

        return {
            user,
            Logout: () => {
                store.dispatch("signOut");
                router.push("/");
            },
        };
    },
});
</script>
