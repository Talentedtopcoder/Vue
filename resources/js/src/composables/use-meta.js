import { useHead } from '@vueuse/head';
import { unref, computed } from 'vue';

let siteTitle = 'hello';
let separator = '|';

export const usePageTitle = (pageTitle) =>
    useHead(
        computed(() => ({
            title: `${unref(pageTitle)} ${separator} ${siteTitle}`,
        }))
    );

export const useMeta = (data) => {
    return useHead({ ...data, title: `${data.title} | CORK - Multipurpose Bootstrap Dashboard Template` });
};
