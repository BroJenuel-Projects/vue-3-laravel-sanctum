<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { NLayout, NLayoutContent, NLayoutSider, NLayoutHeader, NScrollbar } from 'naive-ui';
import SideMenu from './../../components/SideMenus/SideMenus.vue';
import DashboardHeaderVue from '../../components/DashBoardHeader/DashboardHeader.vue';

const store = useStore();
const collapsed = ref(false);

const checkWidth = (): void => {
    if (window.innerWidth <= 768) collapsed.value = true;
    else collapsed.value = false;
};

const updateCollapsed = () => (collapsed.value = !collapsed.value);
onMounted(() => {
    if (localStorage.getItem('token')) store.dispatch('me');

    checkWidth();
    window.addEventListener('resize', function (event) {
        checkWidth();
    });
});
</script>

<template>
    <NLayout class="h-[100vh]">
        <NLayoutHeader bordered class="h-[50px]">
            <DashboardHeaderVue />
        </NLayoutHeader>
        <NLayout has-sider class="h-[calc(100%-50px)]">
            <NLayoutSider
                :collapsed="collapsed"
                collapse-mode="width"
                :collapsed-width="64"
                :width="240"
                show-trigger="bar"
                bordered
                :native-scrollbar="false"
                :on-update:collapsed="updateCollapsed"
            >
                <SideMenu />
            </NLayoutSider>
            <NLayoutContent content-style="padding: 24px;">
                <router-view></router-view>
            </NLayoutContent>
        </NLayout>
    </NLayout>
</template>
