import { h } from 'vue';
const renderIcon = (icon: string) => () => h('i', { class: icon });

export const menuOptions = [
    {
        label: 'Dashboard',
        key: '/dashboard',
        icon: renderIcon('bx bxs-dashboard'),
    },
    {
        label: 'Accounts',
        key: '/account',
        icon: renderIcon('bx bx-user'),
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
