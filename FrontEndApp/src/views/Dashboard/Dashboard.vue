<template>
    <NLayout class="h-[100vh]">
        <NLayoutHeader bordered class="h-[50px]">
            <div class="flex flex-row justify-between items-center h-[50px] px-10px">
                <span> Header Header Header </span>
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
                    <n-menu :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions" />
                </NScrollbar>
            </NLayoutSider>
            <NLayoutContent content-style="padding: 24px;">
                <div>
                    <div>
                        <router-link to="/">Home</router-link> | <router-link to="/signin">Signin</router-link> |
                        <router-link to="/account">Alex Garrett-Smith</router-link>
                    </div>
                    <router-view></router-view>
                </div>
            </NLayoutContent>
        </NLayout>
    </NLayout>
</template>
<script lang="ts">
import { defineComponent, h, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { NButton, NLayout, NLayoutContent, NLayoutSider, NLayoutHeader, NMenu, NScrollbar } from 'naive-ui';
import router from '../../router';

function renderIcon(icon: string) {
    return () =>
        h('i', {
            class: icon,
        });
}

const menuOptions = [
    {
        label: 'Hear the Wind Sing',
        key: 'hear-the-wind-sing',
        icon: renderIcon('bx bx-book'),
    },
    {
        label: 'Pinball 1973',
        key: 'pinball-1973',
        icon: renderIcon('bx bx-book'),
        disabled: false,
        children: [
            {
                label: 'Rat',
                key: 'rat',
            },
        ],
    },
    {
        label: 'A Wild Sheep Chase',
        key: 'a-wild-sheep-chase',
        disabled: false,
        icon: renderIcon('bx bx-book'),
    },
    {
        label: 'Dance Dance Dance',
        key: 'Dance Dance Dance',
        icon: renderIcon('bx bx-book'),
        children: [
            {
                type: 'group',
                label: 'People',
                key: 'people',
                children: [
                    {
                        label: 'Narrator',
                        key: 'narrator',
                        icon: renderIcon('bx bx-book'),
                    },
                    {
                        label: 'Sheep Man',
                        key: 'sheep-man',
                        icon: renderIcon('bx bx-book'),
                    },
                ],
            },
            {
                label: 'Beverage',
                key: 'beverage',
                icon: renderIcon('bx bx-book'),
                children: [
                    {
                        label: 'Whisky',
                        key: 'whisky',
                    },
                ],
            },
            {
                label: 'Food',
                key: 'food',
                children: [
                    {
                        label: 'Sandwich',
                        key: 'sandwich',
                    },
                ],
            },
            {
                label: 'The past increases. The future recedes.',
                key: 'the-past-increases-the-future-recedes',
            },
        ],
    },
];

export default defineComponent({
    components: {
        NMenu,
        NButton,
        NLayout,
        NLayoutContent,
        NLayoutSider,
        NLayoutHeader,
        NScrollbar,
    },
    setup() {
        const store = useStore();

        onMounted(() => {
            if (localStorage.getItem('token')) store.dispatch('me');
        });

        return {
            menuOptions,
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
