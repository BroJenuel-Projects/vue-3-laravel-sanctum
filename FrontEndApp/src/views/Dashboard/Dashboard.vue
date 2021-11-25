<template>
    <NLayout class="h-[100vh]">
        <NLayoutHeader bordered class="h-[50px]">
            <div class="flex flex-row justify-between items-center h-[50px] px-10px">
                <span> This is the Header </span>
                <div class="flex gap-1">
                    <n-button @click="changeTheme()">
                        <i class="bx bx-sun"></i>
                    </n-button>
                    <NButton @click="signOut()"> Logout </NButton>
                </div>
            </div>
        </NLayoutHeader>
        <NLayout has-sider class="h-[calc(100%-50px)]">
            <NLayoutSider collapse-mode="width" :collapsed-width="64" :width="240" show-trigger="bar" bordered>
                <NScrollbar class="h-[100%]">
                    <SideMenu />
                </NScrollbar>
            </NLayoutSider>
            <NLayoutContent content-style="padding: 24px;">
                <router-view></router-view>
            </NLayoutContent>
        </NLayout>
    </NLayout>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { NButton, NLayout, NLayoutContent, NLayoutSider, NLayoutHeader, NMenu, NScrollbar } from 'naive-ui';
import router from '../../router';
import SideMenu from "./../../components/SideMenus/SideMenus.vue"

export default defineComponent({
    components: {
        NMenu,
        NButton,
        NLayout,
        NLayoutContent,
        NLayoutSider,
        NLayoutHeader,
        NScrollbar,
        SideMenu
    },
    setup() {
        const store = useStore();

        onMounted(() => {
            if (localStorage.getItem('token')) store.dispatch('me');
        });

        return {
            changeTheme() {
                store.state.isDark = !store.state.isDark;
            },
            async signOut() {
                await store.dispatch('signOut');
                router.push('/');
            },

        };
    },
});
</script>
