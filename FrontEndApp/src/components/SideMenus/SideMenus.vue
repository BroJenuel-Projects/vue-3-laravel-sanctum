<template>
    <NMenu :collapsed-width="64" :collapsed-icon-size="22" :value="menuValue" :options="menuOptions" :on-update:value="changeMenu" />
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { NMenu } from 'naive-ui';
import { useRoute, useRouter } from 'vue-router';
import { menuOptions } from './menuOptions';
export default defineComponent({
    components: {
        NMenu,
    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const menuValue = ref('');
        const changeMenu = (key: string) => (menuValue.value = key);
        onMounted(() => {
            changeMenu(route.path);
        });

        return {
            menuValue,
            menuOptions,
            changeMenu: (key: string) => {
                changeMenu(key);
                router.push(key);
            },
        };
    },
});
</script>
