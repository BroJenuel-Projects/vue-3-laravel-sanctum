<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { NMenu } from "naive-ui";
import { useRoute, useRouter } from "vue-router";
import { menuOptions } from "./menuOptions";

const route = useRoute();
const router = useRouter();
const menuValue = ref("");
function changeMenu(key: string) {
    router.push(key);
}

watch(
    () => route.path,
    (path) => {
        menuValue.value = path;
    }
);

onMounted(() => {
    changeMenu(route.path);
});
</script>
<template>
    <NMenu
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :value="menuValue"
        :options="menuOptions"
        :on-update:value="changeMenu"
    />
</template>
