<script lang="ts">
import { defineComponent, h } from 'vue';
import { NBreadcrumb, NBreadcrumbItem, NIcon } from 'naive-ui';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

type Properties = {
    onClick: Function;
};

export default defineComponent({
    props: {
        items: { type: Array },
    },
    setup(props) {
        const store = useStore();
        const router = useRouter();

        let BreadCrumbs: any = [];
        props.items?.forEach((crumbItem: any) => {
            const properties: Properties = {
                onClick: () => {},
            };

            if (crumbItem.path) {
                properties.onClick = () => {
                    store.state.menuValue = '/dashboard';
                    router.push('/dashboard');
                };
            }

            const crumb = h(NBreadcrumbItem, properties, () => [h(NIcon, { class: 'mr-7px' }, () => h(crumbItem.icon)), crumbItem.title]);
            BreadCrumbs.push(crumb);
        });

        return () => h(NBreadcrumb, () => BreadCrumbs);
    },
});
</script>
