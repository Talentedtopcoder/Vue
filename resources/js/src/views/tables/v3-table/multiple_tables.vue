<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">DataTables</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Multiple Table</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel br-6 p-0">
                    <div class="custom-table">
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #salary="props"> ${{ props.row.salary }} </template>
                            <template #status="props">
                                <div :title="props.row.status.tooltip" class="t-dot" :class="props.row.status.class"></div>
                            </template>
                            <template #actions="props">
                                <a href="javascript:;" class="cancel" @click="view_row(props.row)">
                                    <button type="button" class="btn btn-primary btn-sm">View</button>
                                </a>
                            </template>
                        </v-client-table>
                    </div>
                </div>
                <div class="panel br-6 p-0 mt-5">
                    <div class="custom-table">
                        <v-client-table :data="items1" :columns="columns1" :options="table_option1">
                            <template #progress="props">
                                <div class="progress">
                                    <div
                                        role="progressbar"
                                        aria-valuemin="0"
                                        :aria-valuemax="props.row.progress.count"
                                        aria-valuenow="100"
                                        class="progress-bar"
                                        :class="'bg-' + props.row.progress.class"
                                        :style="{ width: props.row.progress.count + '%' }"
                                    ></div>
                                </div>
                            </template>
                            <template #salary="props"> ${{ props.row.salary }} </template>
                            <template #actions="props">
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
                                            <a href="javascript:void(0);" class="dropdown-item" @click="view_row1(props.row)"> view </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item"> Edit </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item"> Delete </a>
                                        </li>
                                    </ul>
                                </div>
                            </template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from "vue";

    import { useMeta } from "../../../composables/use-meta";
    useMeta({ title: "Multiple Tables" });

    const code_arr = ref([]);
    //table 1
    const columns = ref(["name", "position", "office", "age", "salary", "status", "actions"]);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: "table",
        columnsClasses: { actions: "actions text-center", status: "text-center" },
        sortable: [],
        pagination: { nav: "scroll", chunk: 5 },
        texts: {
            count: "Showing {from} to {to} of {count}",
            filter: "",
            filterPlaceholder: "Search...",
            limit: "Results:",
        },
        sortable: ["name", "position", "office", "age", "start_date", "salary"],
        sortIcon: {
            base: "sort-icon-none",
            up: "sort-icon-asc",
            down: "sort-icon-desc",
        },
        resizableColumns: false,
    });

    //table 2
    const columns1 = ref(["name", "position", "progress", "office", "age", "salary", "actions"]);
    const items1 = ref([]);
    const table_option1 = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: "table ",
        columnsClasses: { actions: "actions text-center" },
        sortable: [],
        pagination: { nav: "scroll", chunk: 5 },
        texts: {
            count: "Showing {from} to {to} of {count}",
            filter: "",
            filterPlaceholder: "Search...",
            limit: "Results:",
        },
        sortable: ["name", "position", "office", "age", "start_date", "salary"],
        sortIcon: {
            base: "sort-icon-none",
            up: "sort-icon-asc",
            down: "sort-icon-desc",
        },
        resizableColumns: false,
    });

    onMounted(() => {
        bind_data();
    });

    const bind_data = () => {
        //table 1
        items.value = [
            { id: 1, name: "Tiger Nixon", position: "System Architect", office: "Edinburgh", age: 61, status: { class: "bg-warning", tooltip: "Low" }, salary: "320,800" },
            { id: 2, name: "Garrett Winters", position: "Accountant", office: "Tokyo", age: 63, status: { class: "bg-primary", tooltip: "Normal" }, salary: "170,750" },
            { id: 3, name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: 66, status: { class: "bg-warning", tooltip: "Low" }, salary: "86,000" },
            { id: 4, name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, status: { class: "bg-secondary", tooltip: "Medium" }, salary: "433,060" },
            { id: 5, name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, status: { class: "bg-warning", tooltip: "Low" }, salary: "162,700" },
            { id: 6, name: "Brielle Williamson", position: "Integration Specialist", office: "New York", age: 61, status: { class: "bg-primary", tooltip: "Normal" }, salary: "372,000" },
            { id: 7, name: "Herrod Chandler", position: "Sales Assistant", office: "San Francisco", age: 59, status: { class: "bg-warning", tooltip: "Low" }, salary: "137,500" },
            { id: 8, name: "Rhona Davidson", position: "Integration Specialist", office: "Tokyo", age: 55, status: { class: "bg-secondary", tooltip: "Medium" }, salary: "327,900" },
            { id: 9, name: "Colleen Hurst", position: "Javascript Developer", office: "San Francisco", age: 39, status: { class: "bg-danger", tooltip: "High" }, salary: "205,500" },
            { id: 10, name: "Sonya Frost", position: "Software Engineer", office: "Edinburgh", age: 23, status: { class: "bg-secondary", tooltip: "Medium" }, salary: "103,600" },
            { id: 11, name: "Jena Gaines", position: "Office Manager", office: "London", age: 30, status: { class: "bg-warning", tooltip: "Low" }, salary: "90,560" },
            { id: 12, name: "Quinn Flynn", position: "Support Lead", office: "Edinburgh", age: 22, status: { class: "bg-danger", tooltip: "High" }, salary: "342,000" },
            { id: 13, name: "Charde Marshall", position: "Regional Director", office: "San Francisco", age: 36, status: { class: "bg-danger", tooltip: "High" }, salary: "470,600" },
        ];

        //table 2
        items1.value = [
            { id: 1, name: "Haley Kennedy", position: "Senior Marketing Designer", office: "London", age: 43, progress: { class: "warning", count: 55 }, salary: "313,500" },
            { id: 2, name: "Tatyana Fitzpatrick", position: "Regional Director", office: "London", age: 19, progress: { class: "primary", count: 30 }, salary: "385,750" },
            { id: 3, name: "Michael Silva", position: "Marketing Designer", office: "London", age: 66, progress: { class: "danger", count: 85 }, salary: "198,500" },
            { id: 4, name: "Paul Byrd", position: "Chief Financial Officer (CFO)", office: "New York", age: 64, progress: { class: "secondary", count: 44 }, salary: "725,000" },
            { id: 5, name: "Gloria Little", position: "Systems Administrator", office: "New York", age: 59, progress: { class: "success", count: 100 }, salary: "237,500" },
            { id: 6, name: "Bradley Greer", position: "Software Engineer", office: "London", age: 41, progress: { class: "warning", count: 67 }, salary: "132,000" },
            { id: 7, name: "Dai Rios", position: "Personnel Lead", office: "Edinburgh", age: 35, progress: { class: "primary", count: 25 }, salary: "217,500" },
            { id: 8, name: "Jenette Caldwell", position: "Development Lead", office: "New York", age: 61, progress: { class: "danger", count: 93 }, salary: "345,000" },
            { id: 9, name: "Yuri Berry", position: "Chief Marketing Officer (CMO)", office: "New York", age: 40, progress: { class: "secondary", count: 52 }, salary: "675,000" },
            { id: 10, name: "Caesar Vance", position: "Pre-Sales Support", office: "New York", age: 21, progress: { class: "warning", count: 24 }, salary: "106,450" },
            { id: 11, name: "Doris Wilder", position: "Sales Assistant", office: "Sidney", age: 23, progress: { class: "danger", count: 82 }, salary: "85,600" },
            { id: 12, name: "Angelica Ramos", position: "Chief Executive Officer (CEO)", office: "London", age: 47, progress: { class: "warning", count: 70 }, salary: "1,200,000" },
            { id: 13, name: "Gavin Joyce", position: "Developer", office: "Edinburgh", age: 42, progress: { class: "secondary", count: 40 }, salary: "92,575" },
            { id: 14, name: "Jennifer Chang", position: "Regional Director", office: "Singapore", age: 28, progress: { class: "warning", count: 10 }, salary: "57,650" },
        ];
    };

    //table 1
    const view_row = (item) => {
        alert("ID: " + item.id + ", Name: " + item.name);
    };

    //table 2
    const view_row1 = (item) => {
        alert("ID: " + item.id + ", Name: " + item.name);
    };
</script>
