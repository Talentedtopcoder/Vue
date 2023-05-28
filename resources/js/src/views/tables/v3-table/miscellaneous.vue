<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">DataTables</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Miscellaneous</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="seperator-header layout-top-spacing">
            <h4 class="">Show/ Hide Columns</h4>
        </div>
        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel p-0">
                    <div class="custom-table">
                        <v-client-table ref="showHideColumns" :data="items" :columns="columns" :options="table_option">
                            <template #beforeFilter>
                                <div class="custom-dropdown dropdown btn-group">
                                    <a class="btn dropdown-toggle btn-icon-only" href="#" role="button" id="pendingTask" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <button aria-haspopup="true" aria-expanded="false" type="button" class="btn dropdown-toggle btn-outline-primary">
                                            Columns
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-chevron-down"
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-end" @click="$event.stopPropagation()">
                                        <div class="checkbox-outline-primary mx-3 my-2 custom-control custom-checkbox" v-for="(column, index) in columns" :key="index">
                                            <input
                                                variant="primary"
                                                type="checkbox"
                                                class="custom-control-input"
                                                :checked="table_option.hiddenColumns.includes(column) ? false : true"
                                                :id="'chk' + index"
                                                @change="show_hide_columns(column, $event.target.checked)"
                                            />
                                            <label class="custom-control-label" :for="'chk' + index">
                                                {{ capitalize(column) }}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template #salary="props"> ${{ props.row.salary }} </template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>

        <div class="seperator-header layout-top-spacing">
            <h4 class="">Individual column searching (text inputs)</h4>
        </div>
        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel p-0">
                    <div class="custom-table">
                        <v-client-table :data="items1" :columns="columns1" :options="table_option1">
                            <template #action>
                                <div class="actions text-center">
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
                                </div>
                            </template>
                            <template #salary="props"> ${{ props.row.salary }} </template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>

        <div class="seperator-header layout-top-spacing">
            <h4 class="">Column Filter</h4>
        </div>
        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel p-0">
                    <div class="custom-table table3">
                        <v-client-table :data="items2" :columns="columns2" :options="table_option2">
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
                            <template #action>
                                <div class="actions text-center">
                                    <a href="javascript:;" class="cancel">
                                        <button type="button" class="btn btn-outline-primary btn-sm">View</button>
                                    </a>
                                </div>
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

    import { useMeta } from "../../../composables/use-meta";
    useMeta({ title: "Miscellaneous Table" });

    //table 1
    const columns = ref(["name", "position", "office", "age", "start_date", "salary"]);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: "table",
        pagination: { nav: "scroll", chunk: 5 },
        texts: {
            count: "Showing {from} to {to} of {count}",
            filter: "",
            filterPlaceholder: "Search...",
            limit: "Results:",
        },
        resizableColumns: false,
        sortable: ["name", "position", "office", "age", "start_date", "salary"],
        sortIcon: {
            base: "sort-icon-none",
            up: "sort-icon-asc",
            down: "sort-icon-desc",
        },
        hiddenColumns: [],
    });

    //table 2
    const items1 = ref([]);
    const columns1 = ref(["id", "name", "position", "office", "age", "start_date", "salary", "action"]);
    const table_option1 = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: "table",
        columnsClasses: { action: "actions text-center" },

        pagination: { nav: "scroll", chunk: 5 },
        texts: {
            count: "Showing {from} to {to} of {count}",
            filter: "",
            filterPlaceholder: "Search...",
            limit: "Results:",
        },
        resizableColumns: false,
        sortable: ["id", "name", "position", "office", "age", "start_date", "salary"],
        sortIcon: {
            base: "sort-icon-none",
            up: "sort-icon-asc",
            down: "sort-icon-desc",
        },
        filterByColumn: true,
    });

    //table 3
    const items2 = ref([]);
    const columns2 = ref(["id", "profile", "first_name", "last_name", "email", "phone", "status", "action"]);
    const table_option2 = ref({
        headings: {
            id: (h, row, index) => {
                return "#";
            },
        },
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: "table",
        columnsClasses: { actions: "actions text-center" },
        pagination: { nav: "scroll", chunk: 5 },
        texts: {
            count: "Showing {from} to {to} of {count}",
            filter: "",
            filterPlaceholder: "Search...",
            limit: "Results:",
        },
        resizableColumns: false,
        sortable: ["first_name", "last_name", "email", "phone", "status"],
        sortIcon: {
            base: "sort-icon-none",
            up: "sort-icon-asc",
            down: "sort-icon-desc",
        },
    });

    onMounted(() => {
        bind_data();
    });

    const bind_data = () => {
        //table 1
        items.value = [
            { id: 1, name: "Tiger Nixon", position: "System Architect", office: "Edinburgh", age: 61, start_date: "2011/04/25", salary: "320,800" },
            { id: 2, name: "Garrett Winters", position: "Accountant", office: "Tokyo", age: 63, start_date: "2011/07/25", salary: "170,750" },
            { id: 3, name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: 66, start_date: "2009/01/12", salary: "86,000" },
            { id: 4, name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, start_date: "2012/03/29", salary: "433,060" },
            { id: 5, name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, start_date: "2008/11/28", salary: "162,700" },
            { id: 6, name: "Brielle Williamson", position: "Integration Specialist", office: "New York", age: 61, start_date: "2012/12/02", salary: "372,000" },
            { id: 7, name: "Herrod Chandler", position: "Sales Assistant", office: "San Francisco", age: 59, start_date: "2012/08/06", salary: "137,500" },
            { id: 8, name: "Rhona Davidson", position: "Integration Specialist", office: "Tokyo", age: 55, start_date: "2010/10/14", salary: "327,900" },
            { id: 9, name: "Colleen Hurst", position: "Javascript Developer", office: "San Francisco", age: 39, start_date: "2009/09/15", salary: "205,500" },
            { id: 10, name: "Sonya Frost", position: "Software Engineer", office: "Edinburgh", age: 23, start_date: "2008/12/13", salary: "103,600" },
            { id: 11, name: "Jena Gaines", position: "Office Manager", office: "London", age: 30, start_date: "2008/12/19", salary: "90,560" },
            { id: 12, name: "Quinn Flynn", position: "Support Lead", office: "Edinburgh", age: 22, start_date: "2013/03/03", salary: "342,000" },
            { id: 13, name: "Charde Marshall", position: "Regional Director", office: "San Francisco", age: 36, start_date: "2008/10/16", salary: "470,600" },
            { id: 14, name: "Haley Kennedy", position: "Senior Marketing Designer", office: "London", age: 43, start_date: "2012/12/18", salary: "313,500" },
            { id: 15, name: "Tatyana Fitzpatrick", position: "Regional Director", office: "London", age: 19, start_date: "2010/03/17", salary: "385,750" },
            { id: 16, name: "Michael Silva", position: "Marketing Designer", office: "London", age: 66, start_date: "2012/11/27", salary: "198,500" },
            { id: 17, name: "Paul Byrd", position: "Chief Financial Officer (CFO)", office: "New York", age: 64, start_date: "2010/06/09", salary: "725,000" },
            { id: 18, name: "Gloria Little", position: "Systems Administrator", office: "New York", age: 59, start_date: "2009/04/10", salary: "237,500" },
            { id: 19, name: "Bradley Greer", position: "Software Engineer", office: "London", age: 41, start_date: "2012/10/13", salary: "132,000" },
            { id: 20, name: "Dai Rios", position: "Personnel Lead", office: "Edinburgh", age: 35, start_date: "2012/09/26", salary: "217,500" },
            { id: 21, name: "Jenette Caldwell", position: "Development Lead", office: "New York", age: 61, start_date: "2011/09/03", salary: "345,000" },
            { id: 22, name: "Yuri Berry", position: "Chief Marketing Officer (CMO)", office: "New York", age: 40, start_date: "2009/06/25", salary: "675,000" },
            { id: 23, name: "Caesar Vance", position: "Pre-Sales Support", office: "New York", age: 21, start_date: "2011/12/12", salary: "106,450" },
            { id: 24, name: "Doris Wilder", position: "Sales Assistant", office: "Sidney", age: 23, start_date: "2010/09/20", salary: "85,600" },
            { id: 25, name: "Angelica Ramos", position: "Chief Executive Officer (CEO)", office: "London", age: 47, start_date: "2009/10/09", salary: "1,200,000" },
            { id: 26, name: "Gavin Joyce", position: "Developer", office: "Edinburgh", age: 42, start_date: "2010/12/22", salary: "92,575" },
            { id: 27, name: "Jennifer Chang", position: "Regional Director", office: "Singapore", age: 28, start_date: "2010/11/14", salary: "57,650" },
        ];

        //table 2
        items1.value = [
            { id: 1, name: "Tiger Nixon", position: "System Architect", office: "Edinburgh", age: 61, start_date: "2011/04/25", salary: "320,800" },
            { id: 2, name: "Garrett Winters", position: "Accountant", office: "Tokyo", age: 63, start_date: "2011/07/25", salary: "170,750" },
            { id: 3, name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: 66, start_date: "2009/01/12", salary: "86,000" },
            { id: 4, name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, start_date: "2012/03/29", salary: "433,060" },
            { id: 5, name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, start_date: "2008/11/28", salary: "162,700" },
            { id: 6, name: "Brielle Williamson", position: "Integration Specialist", office: "New York", age: 61, start_date: "2012/12/02", salary: "372,000" },
            { id: 7, name: "Herrod Chandler", position: "Sales Assistant", office: "San Francisco", age: 59, start_date: "2012/08/06", salary: "137,500" },
            { id: 8, name: "Rhona Davidson", position: "Integration Specialist", office: "Tokyo", age: 55, start_date: "2010/10/14", salary: "327,900" },
            { id: 9, name: "Colleen Hurst", position: "Javascript Developer", office: "San Francisco", age: 39, start_date: "2009/09/15", salary: "205,500" },
            { id: 10, name: "Sonya Frost", position: "Software Engineer", office: "Edinburgh", age: 23, start_date: "2008/12/13", salary: "103,600" },
            { id: 11, name: "Jena Gaines", position: "Office Manager", office: "London", age: 30, start_date: "2008/12/19", salary: "90,560" },
            { id: 12, name: "Quinn Flynn", position: "Support Lead", office: "Edinburgh", age: 22, start_date: "2013/03/03", salary: "342,000" },
            { id: 13, name: "Charde Marshall", position: "Regional Director", office: "San Francisco", age: 36, start_date: "2008/10/16", salary: "470,600" },
            { id: 14, name: "Haley Kennedy", position: "Senior Marketing Designer", office: "London", age: 43, start_date: "2012/12/18", salary: "313,500" },
            { id: 15, name: "Tatyana Fitzpatrick", position: "Regional Director", office: "London", age: 19, start_date: "2010/03/17", salary: "385,750" },
            { id: 16, name: "Michael Silva", position: "Marketing Designer", office: "London", age: 66, start_date: "2012/11/27", salary: "198,500" },
            { id: 17, name: "Paul Byrd", position: "Chief Financial Officer (CFO)", office: "New York", age: 64, start_date: "2010/06/09", salary: "725,000" },
            { id: 18, name: "Gloria Little", position: "Systems Administrator", office: "New York", age: 59, start_date: "2009/04/10", salary: "237,500" },
            { id: 19, name: "Bradley Greer", position: "Software Engineer", office: "London", age: 41, start_date: "2012/10/13", salary: "132,000" },
            { id: 20, name: "Dai Rios", position: "Personnel Lead", office: "Edinburgh", age: 35, start_date: "2012/09/26", salary: "217,500" },
            { id: 21, name: "Jenette Caldwell", position: "Development Lead", office: "New York", age: 61, start_date: "2011/09/03", salary: "345,000" },
            { id: 22, name: "Yuri Berry", position: "Chief Marketing Officer (CMO)", office: "New York", age: 40, start_date: "2009/06/25", salary: "675,000" },
            { id: 23, name: "Caesar Vance", position: "Pre-Sales Support", office: "New York", age: 21, start_date: "2011/12/12", salary: "106,450" },
            { id: 24, name: "Doris Wilder", position: "Sales Assistant", office: "Sidney", age: 23, start_date: "2010/09/20", salary: "85,600" },
            { id: 25, name: "Angelica Ramos", position: "Chief Executive Officer (CEO)", office: "London", age: 47, start_date: "2009/10/09", salary: "1,200,000" },
            { id: 26, name: "Gavin Joyce", position: "Developer", office: "Edinburgh", age: 42, start_date: "2010/12/22", salary: "92,575" },
            { id: 27, name: "Jennifer Chang", position: "Regional Director", office: "Singapore", age: 28, start_date: "2010/11/14", salary: "57,650" },
        ];

        //table 3
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

    const capitalize = (text) => {
        return text
            .replace("_", " ")
            .replace("-", " ")
            .toLowerCase()
            .split(" ")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ");
    };

    const show_hide_columns = (column, value) => {
        if (!table_option.value.hiddenColumns.includes(column) && !value) {
            table_option.value.hiddenColumns.push(column);
        } else {
            table_option.value.hiddenColumns = table_option.value.hiddenColumns.filter((d) => d !== column);
        }
    };
</script>
