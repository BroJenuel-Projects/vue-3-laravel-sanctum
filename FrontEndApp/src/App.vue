<template>
    <NConfigProvider :theme-overrides="themeOverrides" :theme="theme">
        <NLayout class="h-[100vh]">
            <router-view></router-view>
        </NLayout>
    </NConfigProvider>
</template>
<script lang="ts">
import { defineComponent, onMounted, computed, ref, watch, reactive, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { NConfigProvider, darkTheme, NLayout } from 'naive-ui';
import { useRouter } from 'vue-router';

export default defineComponent({
    components: {
        NConfigProvider,
        NLayout,
    },
    setup() {
        const store = useStore();
        const theme: any = ref(null);
        const isDark = computed(() => store.state.isDark);
        const primaryColors = computed(() => store.state.primaryColors);
        const router = useRouter();
        const themeOverrides = reactive({
            common: {
                primaryColor: primaryColors.value.primaryColorLight,
                primaryColorHover: primaryColors.value.primaryColorLight,
                primaryColorSuppl: primaryColors.value.primaryColorLight,
            },
            dark: {
                primaryColor: '#22577A',
            },
        });

        const changePrimaryColors = () => {
            themeOverrides.common.primaryColor = isDark.value ? primaryColors.value.primaryColorDark : primaryColors.value.primaryColorLight;
            themeOverrides.common.primaryColorHover = isDark.value ? primaryColors.value.primaryColorDark : primaryColors.value.primaryColorLight;
            themeOverrides.common.primaryColorSuppl = isDark.value ? primaryColors.value.primaryColorDark : primaryColors.value.primaryColorLight;

            if (isDark.value) document.documentElement.style.setProperty('--primaryColor', primaryColors.value.primaryColorDark);
            else document.documentElement.style.setProperty('--primaryColor', primaryColors.value.primaryColorLight);
        };

        onMounted(async () => {
            if (localStorage.getItem('token'))
                await store
                    .dispatch('me')
                    .then(() => {
                        router.push('/dashboard');
                    })
                    .catch(() => {
                        router.push('/');
                    });
            else router.replace('/');
        });

        watch(isDark, () => {
            theme.value = theme.value == null ? darkTheme : null;
            changePrimaryColors();
        });

        return {
            theme,
            themeOverrides,
        };
    },
});
</script>
