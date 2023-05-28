<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">DataTables</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Range Search</span></li>
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
                        <div class="d-flex p-3 justify-content-between">
                            <div class="d-flex align-items-sm-center flex-column flex-sm-row me-1">
                                <span class="text-nowrap me-sm-2">Minimum age:</span>
                                <input v-model="min_age" maxLength="3" class="form-control form-control-sm" placeholder="Minimum age..." @keyup.prevent="range_change()" />
                            </div>
                            <div class="d-flex align-items-sm-center flex-column flex-sm-row ms-1">
                                <span class="text-nowrap me-sm-2">Maximum age:</span>
                                <input v-model="max_age" maxLength="3" class="form-control form-control-sm" placeholder="Maximum age..." @keyup.prevent="range_change()" />
                            </div>
                        </div>

                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #action="props">
                                <a href="javascript:;" class="cancel" @click="delete_row(props.row)">
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
                                        class="feather feather-trash-2 table-cancel"
                                    >
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
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

<script setup>
    import { onMounted, ref } from "vue";

    import { useMeta } from "../../../composables/use-meta";
    useMeta({ title: "Range Search Table" });

    const columns = ref(["name", "position", "office", "age", "start_date", "salary", "action"]);
    const items_all = ref([]);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: "table table-hover",
        columnsClasses: { action: "actions text-center" },
        sortable: [],
        pagination: { nav: "scroll", chunk: 5 },
        texts: {
            count: "Showing {from} to {to} of {count}",
            filter: "",
            filterPlaceholder: "Search...",
            limit: "Results:",
        },
        resizableColumns: false,
    });
    const min_age = ref("");
    const max_age = ref("");

    onMounted(() => {
        bind_data();
    });

    const bind_data = () => {
        items_all.value = items.value = [
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
    };

    const range_change = () => {
        let dt = items_all.value;
        if (min_age.value != "" && min_age.value != null) {
            dt = dt.filter((d) => d.age >= Number(min_age.value));
        }
        if (max_age.value != "" && max_age.value != null) {
            dt = dt.filter((d) => d.age <= Number(max_age.value));
        }
        items.value = dt;
    };

    const delete_row = (item) => {
        if (confirm("Are you sure want to delete selected row ?")) {
            items.value = items.value.filter((d) => d.id != item.id);
        }
    };
</script>
