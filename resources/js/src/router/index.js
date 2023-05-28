import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/index.vue';
import store from '../store';

// Vue.use(VueRouter);
// import { createApp } from 'vue';
// const app = createApp();
// app.use(createRouter);

const routes = [
    //dashboard
    { path: '/', name: 'Home', component: Home },

    {
        path: '/index2',
        name: 'index2',
        component: () => import(/* webpackChunkName: "index2" */ '../views/index2.vue'),
    },

    //components
    {
        path: '/components/tabs',
        name: 'tabs',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/components/tabs.vue'),
    },
    {
        path: '/components/accordions',
        name: 'accordions',
        component: () => import(/* webpackChunkName: "components-accordions" */ '../views/components/accordions.vue'),
    },
    {
        path: '/components/modals',
        name: 'modals',
        component: () => import(/* webpackChunkName: "components-modals" */ '../views/components/modals.vue'),
    },
    {
        path: '/components/cards',
        name: 'cards',
        component: () => import(/* webpackChunkName: "components-cards" */ '../views/components/cards.vue'),
    },
    {
        path: '/components/carousel',
        name: 'carousel',
        component: () => import(/* webpackChunkName: "components-carousel" */ '../views/components/carousel.vue'),
    },

    {
        path: '/components/timeline',
        name: 'timeline',
        component: () => import(/* webpackChunkName: "components-timeline" */ '../views/components/timeline.vue'),
    },
    {
        path: '/components/media-object',
        name: 'media-object',
        component: () => import(/* webpackChunkName: "components-media-object" */ '../views/components/media_object.vue'),
    },
    {
        path: '/components/list-group',
        name: 'list-group',
        component: () => import(/* webpackChunkName: "components-list-group" */ '../views/components/list_group.vue'),
    },
    {
        path: '/components/pricing-table',
        name: 'pricing-table',
        component: () => import(/* webpackChunkName: "components-pricing-table" */ '../views/components/pricing_table.vue'),
    },
    {
        path: '/components/notifications',
        name: 'notifications',
        component: () => import(/* webpackChunkName: "components-notifications" */ '../views/components/toast.vue'),
    },

    {
        path: '/components/lightbox',
        name: 'lightbox',
        component: () => import(/* webpackChunkName: "components-lightbox" */ '../views/components/lightbox.vue'),
    },
    {
        path: '/components/countdown',
        name: 'countdown',
        component: () => import(/* webpackChunkName: "components-countdown" */ '../views/components/countdown.vue'),
    },
    {
        path: '/components/counter',
        name: 'counter',
        component: () => import(/* webpackChunkName: "components-counter" */ '../views/components/counter.vue'),
    },
    {
        path: '/components/sweetalert',
        name: 'sweetalert',
        component: () => import(/* webpackChunkName: "components-sweetalert" */ '../views/components/sweetalert.vue'),
    },

    //fonts
    {
        path: '/font-icons',
        name: 'font-icons',
        component: () => import(/* webpackChunkName: "font-icons" */ '../views/font_icons.vue'),
    },

    //pages
    {
        path: '/pages/helpdesk',
        name: 'helpdesk',
        component: () => import(/* webpackChunkName: "pages-helpdesk" */ '../views/pages/helpdesk.vue'),
    },
    {
        path: '/pages/contact-us',
        name: 'contact-us',
        component: () => import(/* webpackChunkName: "pages-contact-us" */ '../views/pages/contact_us.vue'),
    },
    {
        path: '/pages/faq',
        name: 'faq',
        component: () => import(/* webpackChunkName: "pages-faq" */ '../views/pages/faq.vue'),
    },
    {
        path: '/pages/faq2',
        name: 'faq2',
        component: () => import(/* webpackChunkName: "pages-faq2" */ '../views/pages/faq2.vue'),
    },
    {
        path: '/pages/privacy-policy',
        name: 'privacy-policy',
        component: () => import(/* webpackChunkName: "pages-privacy-policy" */ '../views/pages/privacy_policy.vue'),
    },
    {
        path: '/pages/coming-soon',
        name: 'coming-soon',
        component: () => import(/* webpackChunkName: "pages-coming-soon" */ '../views/pages/coming_soon.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/pages/error404',
        name: 'error404',
        component: () => import(/* webpackChunkName: "pages-error404" */ '../views/pages/error404.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/pages/error500',
        name: 'error500',
        component: () => import(/* webpackChunkName: "pages-error500" */ '../views/pages/error500.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/pages/error503',
        name: 'error503',
        component: () => import(/* webpackChunkName: "pages-error503" */ '../views/pages/error503.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/pages/maintenence',
        name: 'maintenence',
        component: () => import(/* webpackChunkName: "pages-maintenence" */ '../views/pages/maintenence.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/pages/blank-page',
        name: 'blank-page',
        component: () => import(/* webpackChunkName: "pages-blank-page" */ '../views/pages/blank_page.vue'),
    },
    {
        path: '/pages/sample',
        name: 'sample',
        component: () => import(/* webpackChunkName: "pages-sample" */ '../views/pages/sample.vue'),
    },

    //auth
    {
        path: '/auth/login-boxed',
        name: 'login-boxed',
        component: () => import(/* webpackChunkName: "auth-login-boxed" */ '../views/auth/login_boxed.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/register-boxed',
        name: 'register-boxed',
        component: () => import(/* webpackChunkName: "auth-register-boxed" */ '../views/auth/register_boxed.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/lockscreen-boxed',
        name: 'lockscreen-boxed',
        component: () => import(/* webpackChunkName: "auth-lockscreen-boxed" */ '../views/auth/lockscreen_boxed.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/pass-recovery-boxed',
        name: 'pass-recovery-boxed',
        component: () => import(/* webpackChunkName: "auth-pass-recovery-boxed" */ '../views/auth/pass_recovery_boxed.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "auth-login" */ '../views/auth/login.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "auth-register" */ '../views/auth/register.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/lockscreen',
        name: 'lockscreen',
        component: () => import(/* webpackChunkName: "auth-lockscreen" */ '../views/auth/lockscreen.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/pass-recovery',
        name: 'pass-recovery',
        component: () => import(/* webpackChunkName: "auth-pass-recovery" */ '../views/auth/pass_recovery.vue'),
        meta: { layout: 'auth' },
    },

    //elements
    {
        path: '/elements/alerts',
        name: 'alerts',
        component: () => import(/* webpackChunkName: "elements-alerts" */ '../views/elements/alerts.vue'),
    },
    {
        path: '/elements/avatar',
        name: 'avatar',
        component: () => import(/* webpackChunkName: "elements-avatar" */ '../views/elements/avatar.vue'),
    },
    {
        path: '/elements/badges',
        name: 'badges',
        component: () => import(/* webpackChunkName: "elements-badges" */ '../views/elements/badges.vue'),
    },
    {
        path: '/elements/breadcrumbs',
        name: 'breadcrumbs',
        component: () => import(/* webpackChunkName: "elements-breadcrumbs" */ '../views/elements/breadcrumbs.vue'),
    },
    {
        path: '/elements/buttons',
        name: 'buttons',
        component: () => import(/* webpackChunkName: "elements-buttons" */ '../views/elements/buttons.vue'),
    },
    {
        path: '/elements/buttons-group',
        name: 'buttons-group',
        component: () => import(/* webpackChunkName: "elements-buttons-group" */ '../views/elements/buttons_group.vue'),
    },
    {
        path: '/elements/color-library',
        name: 'color-library',
        component: () => import(/* webpackChunkName: "elements-color-library" */ '../views/elements/color_library.vue'),
    },
    {
        path: '/elements/dropdown',
        name: 'dropdown',
        component: () => import(/* webpackChunkName: "elements-dropdown" */ '../views/elements/dropdown.vue'),
    },
    {
        path: '/elements/infobox',
        name: 'infobox',
        component: () => import(/* webpackChunkName: "elements-infobox" */ '../views/elements/infobox.vue'),
    },
    {
        path: '/elements/jumbotron',
        name: 'jumbotron',
        component: () => import(/* webpackChunkName: "elements-jumbotron" */ '../views/elements/jumbotron.vue'),
    },
    {
        path: '/elements/loader',
        name: 'loader',
        component: () => import(/* webpackChunkName: "elements-loader" */ '../views/elements/loader.vue'),
    },
    {
        path: '/elements/pagination',
        name: 'pagination',
        component: () => import(/* webpackChunkName: "elements-pagination" */ '../views/elements/pagination.vue'),
    },
    {
        path: '/elements/popovers',
        name: 'popovers',
        component: () => import(/* webpackChunkName: "elements-popovers" */ '../views/elements/popovers.vue'),
    },
    {
        path: '/elements/progress-bar',
        name: 'progress-bar',
        component: () => import(/* webpackChunkName: "elements-progress-bar" */ '../views/elements/progress_bar.vue'),
    },
    {
        path: '/elements/search',
        name: 'search',
        component: () => import(/* webpackChunkName: "elements-search" */ '../views/elements/search.vue'),
    },
    {
        path: '/elements/tooltips',
        name: 'tooltips',
        component: () => import(/* webpackChunkName: "elements-tooltips" */ '../views/elements/tooltips.vue'),
    },
    {
        path: '/elements/treeview',
        name: 'treeview',
        component: () => import(/* webpackChunkName: "elements-treeview" */ '../views/elements/treeview.vue'),
    },
    {
        path: '/elements/typography',
        name: 'typography',
        component: () => import(/* webpackChunkName: "elements-typography" */ '../views/elements/typography.vue'),
    },

    //tables
    {
        path: '/tables',
        name: 'tables',
        component: () => import(/* webpackChunkName: "tables" */ '../views/tables.vue'),
    },

    //users
    {
        path: '/users/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "users-profile" */ '../views/users/profile.vue'),
    },
    {
        path: '/users/account-setting',
        name: 'account-setting',
        component: () => import(/* webpackChunkName: "users-account-setting" */ '../views/users/account_setting.vue'),
    },

    //drag&drop
    {
        path: '/dragndrop',
        name: 'dragndrop',
        component: () => import(/* webpackChunkName: "dragndrop" */ '../views/dragndrop.vue'),
    },

    //charts
    {
        path: '/charts/apex-chart',
        name: 'apex-chart',
        component: () => import(/* webpackChunkName: "charts-apex-chart" */ '../views/charts/apex_chart.vue'),
    },

    //widgets
    {
        path: '/widgets',
        name: 'widgets',
        component: () => import(/* webpackChunkName: "widgets" */ '../views/widgets.vue'),
    },

    //forms
    {
        path: '/forms/basic',
        name: 'basic',
        component: () => import(/* webpackChunkName: "forms-basic" */ '../views/forms/basic.vue'),
    },
    {
        path: '/forms/input-group',
        name: 'input-group',
        component: () => import(/* webpackChunkName: "forms-input-group" */ '../views/forms/input_group.vue'),
    },
    {
        path: '/forms/layouts',
        name: 'layouts',
        component: () => import(/* webpackChunkName: "forms-layouts" */ '../views/forms/layouts.vue'),
    },
    {
        path: '/forms/validation',
        name: 'validation',
        component: () => import(/* webpackChunkName: "forms-validation" */ '../views/forms/validation.vue'),
    },
    {
        path: '/forms/checkbox-radio',
        name: 'checkbox-radio',
        component: () => import(/* webpackChunkName: "forms-checkbox-radio" */ '../views/forms/checkbox_radio.vue'),
    },
    {
        path: '/forms/switches',
        name: 'switches',
        component: () => import(/* webpackChunkName: "forms-switches" */ '../views/forms/switches.vue'),
    },
    {
        path: '/forms/wizards',
        name: 'wizards',
        component: () => import(/* webpackChunkName: "forms-wizards" */ '../views/forms/wizards.vue'),
    },
    {
        path: '/forms/file-upload',
        name: 'file-upload',
        component: () => import(/* webpackChunkName: "forms-file-upload" */ '../views/forms/fileupload.vue'),
    },
    {
        path: '/forms/clipboard',
        name: 'clipboard',
        component: () => import(/* webpackChunkName: "forms-clipboard" */ '../views/forms/clipboard.vue'),
    },
    {
        path: '/forms/date-picker',
        name: 'date-picker',
        component: () => import(/* webpackChunkName: "forms-date-picker" */ '../views/forms/date_range_picker.vue'),
    },
    {
        path: '/forms/input-mask',
        name: 'input-mask',
        component: () => import(/* webpackChunkName: "forms-input-mask" */ '../views/forms/input_mask.vue'),
    },
    {
        path: '/forms/quill-editor',
        name: 'quill-editor',
        component: () => import(/* webpackChunkName: "forms-quill-editor" */ '../views/forms/quill_editor.vue'),
    },
    {
        path: '/forms/touchspin',
        name: 'touchspin',
        component: () => import(/* webpackChunkName: "forms-touchspin" */ '../views/forms/touchspin.vue'),
    },
    {
        path: '/forms/markdown-editor',
        name: 'markdown-editor',
        component: () => import(/* webpackChunkName: "forms-markdown-editor" */ '../views/forms/markdown_editor.vue'),
    },
    {
        path: '/forms/select2',
        name: 'select2',
        component: () => import(/* webpackChunkName: "forms-select2" */ '../views/forms/select2.vue'),
    },

    //apps
    {
        path: '/apps/chat',
        name: 'chat',
        component: () => import(/* webpackChunkName: "apps-chat" */ '../views/apps/chat.vue'),
    },
    {
        path: '/apps/mailbox',
        name: 'mailbox',
        component: () => import(/* webpackChunkName: "apps-mailbox" */ '../views/apps/mailbox.vue'),
    },
    {
        path: '/apps/todo-list',
        name: 'todo-list',
        component: () => import(/* webpackChunkName: "apps-todo-list" */ '../views/apps/todo_list.vue'),
    },
    {
        path: '/apps/contacts',
        name: 'contacts',
        component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/apps/contacts.vue'),
    },
    {
        path: '/apps/notes',
        name: 'notes',
        component: () => import(/* webpackChunkName: "apps-notes" */ '../views/apps/notes.vue'),
    },
    {
        path: '/apps/scrumboard',
        name: 'scrumboard',
        component: () => import(/* webpackChunkName: "apps-scrumboard" */ '../views/apps/scrumboard.vue'),
    },
    {
        path: '/apps/calendar',
        name: 'calendar',
        component: () => import(/* webpackChunkName: "apps-calendar" */ '../views/apps/calendar.vue'),
    },
    {
        path: '/apps/invoice/list',
        name: 'invoice-list',
        component: () => import(/* webpackChunkName: "apps-invoice-list" */ '../views/apps/invoice/list.vue'),
    },
    {
        path: '/apps/invoice/preview',
        name: 'invoice-preview',
        component: () => import(/* webpackChunkName: "apps-invoice-preview" */ '../views/apps/invoice/preview.vue'),
    },
    {
        path: '/apps/invoice/add',
        name: 'invoice-add',
        component: () => import(/* webpackChunkName: "apps-invoice-add" */ '../views/apps/invoice/add.vue'),
    },
    {
        path: '/apps/invoice/edit',
        name: 'invoice-edit',
        component: () => import(/* webpackChunkName: "apps-invoice-edit" */ '../views/apps/invoice/edit.vue'),
    },

    //v3-table
    {
        path: '/tables/v3-table/basic',
        name: 'table-v3-table-basic',
        component: () => import(/* webpackChunkName: "tables-basic" */ '../views/tables/v3-table/basic.vue'),
    },
    {
        path: '/tables/v3-table/striped',
        name: 'v3-table-striped',
        component: () => import(/* webpackChunkName: "tables-v3-table-striped" */ '../views/tables/v3-table/striped.vue'),
    },
    {
        path: '/tables/v3-table/order-sorting',
        name: 'v3-table-order-sorting',
        component: () => import(/* webpackChunkName: "tables-v3-table-order-sorting" */ '../views/tables/v3-table/order_sorting.vue'),
    },
    {
        path: '/tables/v3-table/multi-column',
        name: 'v3-table-multi-column',
        component: () => import(/* webpackChunkName: "tables-v3-table-multi-column" */ '../views/tables/v3-table/multi_column.vue'),
    },
    {
        path: '/tables/v3-table/multiple-tables',
        name: 'v3-table-multiple-tables',
        component: () => import(/* webpackChunkName: "tables-v3-table-multiple-tables" */ '../views/tables/v3-table/multiple_tables.vue'),
    },
    {
        path: '/tables/v3-table/alt-pagination',
        name: 'v3-table-alt-pagination',
        component: () => import(/* webpackChunkName: "tables-v3-table-alt-pagination" */ '../views/tables/v3-table/alt_pagination.vue'),
    },
    {
        path: '/tables/v3-table/custom',
        name: 'v3-table-custom',
        component: () => import(/* webpackChunkName: "tables-v3-table-custom" */ '../views/tables/v3-table/custom.vue'),
    },
    {
        path: '/tables/v3-table/range-search',
        name: 'v3-table-range-search',
        component: () => import(/* webpackChunkName: "tables-v3-table-range-search" */ '../views/tables/v3-table/range_search.vue'),
    },
    {
        path: '/tables/v3-table/export',
        name: 'v3-table-export',
        component: () => import(/* webpackChunkName: "tables-v3-table-export" */ '../views/tables/v3-table/export.vue'),
    },
    {
        path: '/tables/v3-table/live-dom-ordering',
        name: 'v3-table-live-dom-ordering',
        component: () => import(/* webpackChunkName: "tables-v3-table-live-dom-ordering" */ '../views/tables/v3-table/live_dom_ordering.vue'),
    },
    {
        path: '/tables/v3-table/miscellaneous',
        name: 'v3-table-miscellaneous',
        component: () => import(/* webpackChunkName: "tables-v3-table-miscellaneous" */ '../views/tables/v3-table/miscellaneous.vue'),
    },
    //vue3-datatable
    {
        path: '/tables/vue3-datatable/basic',
        name: 'table-vue3-datatable-basic',
        component: () => import(/* webpackChunkName: "tables-vue3-datatable-basic" */ '../views/tables/vue3-datatable/basic.vue'),
    },
    {
        path: '/tables/vue3-datatable/order-sorting',
        name: 'vue3-datatable-order-sorting',
        component: () => import(/* webpackChunkName: "tables-vue3-datatable-order-sorting" */ '../views/tables/vue3-datatable/order_sorting.vue'),
    },
    {
        path: '/tables/vue3-datatable/alt-pagination',
        name: 'vue3-datatable-alt-pagination',
        component: () => import(/* webpackChunkName: "tables-vue3-datatable-alt-pagination" */ '../views/tables/vue3-datatable/alt_pagination.vue'),
    },
    {
        path: '/tables/vue3-datatable/search',
        name: 'vue3-datatable-search',
        component: () => import(/* webpackChunkName: "tables-vue3-datatable-search" */ '../views/tables/vue3-datatable/search.vue'),
    },
    {
        path: '/tables/vue3-datatable/checkbox',
        name: 'vue3-datatable-checkbox',
        component: () => import(/* webpackChunkName: "tables-vue3-datatable-checkbox" */ '../views/tables/vue3-datatable/checkbox.vue'),
    },
    {
        path: '/tables/vue3-datatable/slot',
        name: 'vue3-datatable-slot',
        component: () => import(/* webpackChunkName: "tables-vue3-datatable-slot" */ '../views/tables/vue3-datatable/slot.vue'),
    },
    {
        path: '/tables/vue3-datatable/column-filter',
        name: 'vue3-datatable-column-filter',
        component: () => import(/* webpackChunkName: "tables-vue3-datatable-column-filter" */ '../views/tables/vue3-datatable/column-filter.vue'),
    },
    {
        path: '/tables/vue3-datatable/actions',
        name: 'vue3-datatable-actions',
        component: () => import(/* webpackChunkName: "tables-vue3-datatable-actions" */ '../views/tables/vue3-datatable/actions.vue'),
    },
    {
        path: '/tables/vue3-datatable/sticky-header',
        name: 'vue3-datatable-sticky-header',
        component: () => import(/* webpackChunkName: "tables-vue3-datatable-sticky-header" */ '../views/tables/vue3-datatable/sticky-header.vue'),
    },
    {
        path: '/tables/vue3-datatable/column-chooser',
        name: 'vue3-datatable-column-chooser',
        component: () => import(/* webpackChunkName: "tables-vue3-datatable-column-chooser" */ '../views/tables/vue3-datatable/column-chooser.vue'),
    },
    {
        path: '/tables/vue3-datatable/advance',
        name: 'vue3-datatable-advance',
        component: () => import(/* webpackChunkName: "tables-vue3-datatable-advance" */ '../views/tables/vue3-datatable/advance.vue'),
    },
];

const router = new createRouter({
    // mode: 'history',
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.layout && to.meta.layout == 'auth') {
        store.commit('setLayout', 'auth');
    } else {
        store.commit('setLayout', 'app');
    }
    next(true);
});

export default router;
