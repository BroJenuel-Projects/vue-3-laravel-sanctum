<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { NButton, NIcon } from 'naive-ui';
import { WeatherSunny24Regular, WeatherMoon20Filled, BriefcaseMedical24Regular } from '@vicons/fluent';
import UserSelect from './UserSelect/UserSelect.vue';

const store = useStore();
const isDark = computed(() => store.state.isDark);
const changeTheme = () => (store.state.isDark = !store.state.isDark);
</script>
<template>
    <div class="flex flex-row justify-between items-center h-[50px] px-10px">
        <span class="flex items-center gap-2">
            <NIcon size="25">
                <BriefcaseMedical24Regular />
            </NIcon>
            Web Title
        </span>
        <div class="flex gap-1">
            <NButton tertiary circle @click="changeTheme()" #icon>
                <NIcon v-show="isDark">
                    <WeatherSunny24Regular />
                </NIcon>
                <NIcon v-show="!isDark">
                    <WeatherMoon20Filled />
                </NIcon>
            </NButton>
            <UserSelect />
        </div>
    </div>
</template>
