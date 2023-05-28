<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">DataTables</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Custom</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="seperator-header layout-top-spacing">
            <h4 class="">Style 1</h4>
        </div>
        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel p-0">
                    <div class="custom-table">
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #id="props">
                                <div class="checkbox-outline-primary custom-control custom-checkbox">
                                    <input variant="primary" type="checkbox" class="custom-control-input" :id="props.row.id" />
                                    <label class="custom-control-label" :for="props.row.id"></label>
                                </div>
                            </template>
                            <template #profile="props">
                                <img :src="'/assets/images/' + props.row.thumb" class="rounded-circle profile-img" alt="avatar" />
                            </template>
                            <template #status="props">
                                <span class="badge inv-status" :class="'badge-' + props.row.status.class">{{ props.row.status.key }}</span>
                            </template>
                            <template #actions>
                                <a href="javascript:;" class="cancel">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-x-circle table-cancel"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="15" y1="9" x2="9" y2="15"></line>
                                        <line x1="9" y1="9" x2="15" y2="15"></line>
                                    </svg>
                                </a>
                            </template>
                            <template #salary="props"> ${{ props.row.salary }} </template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>

        <div class="seperator-header layout-top-spacing">
            <h4 class="">Style 2</h4>
        </div>
        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel p-0">
                    <div class="custom-table">
                        <v-client-table :data="items1" :columns="columns1" :options="table_option1">
                            <template #id="props">
                                <div class="checkbox-outline-primary custom-control custom-checkbox">
                                    <input variant="primary" type="checkbox" class="custom-control-input" :id="props.row.id" />
                                    <label class="custom-control-label" :for="props.row.id"></label>
                                </div>
                            </template>
                            <template #profile="props">
                                <img :src="'/assets/images/' + props.row.thumb" class="rounded-circle profile-img" alt="avatar" />
                            </template>
                            <template #status="props">
                                <span class="badge inv-status" :class="'badge-' + props.row.status.class">{{ props.row.status.key }}</span>
                            </template>
                            <template #actions>
                                <div class="me-2 custom-dropdown dropdown btn-group">
                                    <a class="btn dropdown-toggle btn-icon-only" href="#" role="button" id="pendingTask" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            style="width: 24px; height: 24px"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-more-horizontal"
                                        >
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                    </a>

                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item"> view </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item"> Edit </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item"> View Response </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item"> Delete </a>
                                        </li>
                                    </ul>
                                </div>
                            </template>
                            <template #salary="props"> ${{ props.row.salary }} </template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>

        <div class="seperator-header layout-top-spacing">
            <h4 class="">Style 3</h4>
        </div>
        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel p-0">
                    <div class="custom-table table3">
                        <v-client-table :data="items2" :columns="columns2" :options="table_option2">
                            <template #profile="props">
                                <img :src="'/assets/images/' + props.row.thumb" class="rounded profile-img" alt="avatar" />
                            </template>
                            <template #status="props">
                                <span class="badge inv-status" :class="'badge-' + props.row.status.class">{{ props.row.status.key }}</span>
                            </template>
                            <template #actions>
                                <a href="javascript:void(0);" title="Edit" data-bs-toggle="tooltip" data-bs-placement="top">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-edit-2"
                                    >
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                    </svg>
                                </a>
                                <a href="javascript:void(0);" title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-trash"
                                    >
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    </svg>
                                </a>
                            </template>
                            <template #salary="props"> ${{ props.row.salary }} </template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .table3 .actions svg {
        padding: 2px;
    }
</style>

<script setup>
    import { onMounted, ref } from "vue";
    import "../../../assets/sass/elements/tooltip.scss";

    import { useMeta } from "../../../composables/use-meta";
    useMeta({ title: "Custom Table" });
    //table 1
    const columns = ref(["id", "first_name", "last_name", "email", "phone", "profile", "status", "actions"]);
    const items = ref([]);
    const table_option = ref({
        headings: {
            id: (h, row, index) => {
                return "#";
            },
        },
        perPage: 5,
        perPageValues: [5, 10, 20, 50],
        skin: "table",
        columnsClasses: { actions: "actions text-center" },
        sortable: ["first_name", "last_name", "email", "phone"],
        sortIcon: {
            base: "sort-icon-none",
            up: "sort-icon-asc",
            down: "sort-icon-desc",
        },
        pagination: { nav: "scroll", chunk: 5 },
        texts: {
            count: "Showing {from} to {to} of {count}",
            filter: "",
            filterPlaceholder: "Search...",
            limit: "Results:",
        },
        resizableColumns: false,
    });

    //table 2
    const columns1 = ref(["id", "profile", "name", "email", "phone", "status", "actions"]);
    const items1 = ref([]);
    const table_option1 = ref({
        headings: {
            id: (h, row, index) => {
                return "#";
            },
        },
        perPage: 5,
        perPageValues: [5, 10, 20, 50],
        skin: "table table-hover",
        columnsClasses: { actions: "actions text-center" },
        sortable: ["name", "email", "phone"],
        sortIcon: {
            base: "sort-icon-none",
            up: "sort-icon-asc",
            down: "sort-icon-desc",
        },
        pagination: { nav: "scroll", chunk: 5 },
        texts: {
            count: "Showing {from} to {to} of {count}",
            filter: "",
            filterPlaceholder: "Search...",
            limit: "Results:",
        },
        resizableColumns: false,
    });

    //table 3
    const columns2 = ref(["id", "profile", "first_name", "last_name", "email", "phone", "status", "actions"]);
    const items2 = ref([]);
    const table_option2 = ref({
        perPage: 5,
        perPageValues: [5, 10, 20, 50],
        skin: "table table-hover",
        columnsClasses: { actions: "actions text-center" },
        sortable: ["id", "first_name", "last_name", "email", "phone"],
        sortIcon: {
            base: "sort-icon-none",
            up: "sort-icon-asc",
            down: "sort-icon-desc",
        },
        pagination: { nav: "scroll", chunk: 5 },
        texts: {
            count: "Showing {from} to {to} of {count}",
            filter: "",
            filterPlaceholder: "Search...",
            limit: "Results:",
        },
        resizableColumns: false,
    });

    onMounted(() => {
        bind_data();
        setTimeout(() => {
            initTooltip();
        }, 500);
    });

    const bind_data = () => {
        items.value = [
            { id: 1, thumb: "profile-9.jpeg", first_name: "Tiger", last_name: "Nixon", email: "tiger@gmail.com", phone: "555-555-5555", status: { key: "Approved", class: "primary" } },
            { id: 2, thumb: "profile-11.jpeg", first_name: "Garrett", last_name: "Winters", email: "garrett@gmail.com", phone: "222-222-2222", status: { key: "Closed", class: "danger" } },
            { id: 3, thumb: "profile-12.jpeg", first_name: "Ashton", last_name: "Cox", email: "ashton@gmail.com", phone: "333-333-3333", status: { key: "Suspended", class: "warning" } },
            { id: 4, thumb: "profile-13.jpeg", first_name: "Cedric", last_name: "Kelly", email: "cedric@gmail.com", phone: "444-444-4444", status: { key: "Suspended", class: "warning" } },
            { id: 5, thumb: "profile-14.jpeg", first_name: "Airi", last_name: "Satou", email: "airi@gmail.com", phone: "555-555-5555", status: { key: "Approved", class: "primary" } },
            { id: 6, thumb: "profile-15.jpeg", first_name: "Brielle", last_name: "Williamson", email: "brielle@gmail.com", phone: "666-666-6666", status: { key: "Closed", class: "danger" } },
            { id: 7, thumb: "profile-16.jpeg", first_name: "Herrod", last_name: "Chandler", email: "herrod@gmail.com", phone: "555-555-5555", status: { key: "Approved", class: "primary" } },
        ];
        items1.value = [
            { id: 1, thumb: "profile-9.jpeg", name: "Tiger Nixon", email: "tiger@gmail.com", phone: "555-555-5555", status: { key: "Approved", class: "primary" } },
            { id: 2, thumb: "profile-11.jpeg", name: "Garrett Winters", email: "garrett@gmail.com", phone: "222-222-2222", status: { key: "Closed", class: "danger" } },
            { id: 3, thumb: "profile-12.jpeg", name: "Ashton Cox", email: "ashton@gmail.com", phone: "333-333-3333", status: { key: "Suspended", class: "warning" } },
            { id: 4, thumb: "profile-13.jpeg", name: "Cedric Kelly", email: "cedric@gmail.com", phone: "444-444-4444", status: { key: "Suspended", class: "warning" } },
            { id: 5, thumb: "profile-14.jpeg", name: "Airi Satou", email: "airi@gmail.com", phone: "555-555-5555", status: { key: "Approved", class: "primary" } },
            { id: 6, thumb: "profile-15.jpeg", name: "Brielle Williamson", email: "brielle@gmail.com", phone: "666-666-6666", status: { key: "Closed", class: "danger" } },
            { id: 7, thumb: "profile-16.jpeg", name: "Herrod Chandler", email: "herrod@gmail.com", phone: "555-555-5555", status: { key: "Approved", class: "primary" } },
        ];
        items2.value = [
            { id: 1, thumb: "profile-9.jpeg", first_name: "Tiger", last_name: "Nixon", email: "tiger@gmail.com", phone: "555-555-5555", status: { key: "Approved", class: "primary" } },
            { id: 2, thumb: "profile-11.jpeg", first_name: "Garrett", last_name: "Winters", email: "garrett@gmail.com", phone: "222-222-2222", status: { key: "Closed", class: "danger" } },
            { id: 3, thumb: "profile-12.jpeg", first_name: "Ashton", last_name: "Cox", email: "ashton@gmail.com", phone: "333-333-3333", status: { key: "Suspended", class: "warning" } },
            { id: 4, thumb: "profile-13.jpeg", first_name: "Cedric", last_name: "Kelly", email: "cedric@gmail.com", phone: "444-444-4444", status: { key: "Suspended", class: "warning" } },
            { id: 5, thumb: "profile-14.jpeg", first_name: "Airi", last_name: "Satou", email: "airi@gmail.com", phone: "555-555-5555", status: { key: "Approved", class: "primary" } },
            { id: 6, thumb: "profile-15.jpeg", first_name: "Brielle", last_name: "Williamson", email: "brielle@gmail.com", phone: "666-666-6666", status: { key: "Closed", class: "danger" } },
            { id: 7, thumb: "profile-16.jpeg", first_name: "Herrod", last_name: "Chandler", email: "herrod@gmail.com", phone: "555-555-5555", status: { key: "Approved", class: "primary" } },
        ];
    };

    const initTooltip = () => {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map((tooltipTriggerEl) => {
            return new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
    };
</script>
