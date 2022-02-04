<script lang="ts" setup>
import { NButton, NIcon, NPopselect, NText } from 'naive-ui';
import { Person20Regular } from '@vicons/fluent';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { selectOptions } from './options';
import { h } from 'vue';

const store = useStore();
const router = useRouter();
const options = selectOptions;

const signOut = async () => {
    await store.dispatch('signOut');
    router.push('/');
};

const renderLabel = (option: any) => {
    return h(
        'div',
        {
            style: {
                display: 'flex',
                alignItems: 'center',
            },
        },
        [
            h(
                NIcon,
                {
                    size: '30',
                },
                () => h(option.icon)
            ),
            h(
                'div',
                {
                    style: {
                        marginLeft: '12px',
                        padding: '4px 0',
                    },
                },
                [
                    h('div', null, [option.label]),
                    h(
                        NText,
                        { depth: 3, tag: 'div' },
                        {
                            default: () => option.description,
                        }
                    ),
                ]
            ),
        ]
    );
};

const selectOption = (val: string) => {
    if (val === 'profile') {
        store.state.menuValue = '/profile';
        router.push('/profile');
    }
    if (val === 'logout') signOut();
};
</script>
<template>
    <NPopselect :render-label="renderLabel" :options="options" trigger="click" size="large" :on-update:value="selectOption">
        <NButton :type="store.state.menuValue == '/profile' ? `primary` : undefined" strong secondary circle #icon>
            <NIcon class="-mt-3px -ml-3px" size="25">
                <Person20Regular />
            </NIcon>
        </NButton>
    </NPopselect>
</template>
