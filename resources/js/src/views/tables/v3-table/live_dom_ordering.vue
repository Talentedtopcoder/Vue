<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">DataTables</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Live Dom Ordering</span></li>
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
                            <template #age="props">
                                <input type="number" class="form-control form-control-sm" v-model="props.row.age" />
                            </template>
                            <template #position="props">
                                <input type="text" class="form-control form-control-sm" v-model="props.row.position" />
                            </template>
                            <template #office="props">
                                <select class="form-select form-select-sm" v-model="props.row.office">
                                    <option v-for="(option, i) in office_list" :key="i">
                                        {{ option }}
                                    </option>
                                </select>
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
    useMeta({ title: "Live Dom Ordering Table" });

    const columns = ref(["name", "age", "position", "office"]);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: "table table-hover",
        columnsClasses: { actions: "actions text-center" },
        sortable: [],
        pagination: { nav: "scroll", chunk: 5 },
        texts: {
            count: "Showing {from} to {to} of {count}",
            filter: "",
            filterPlaceholder: "Search...",
            limit: "Results:",
        },
        sortable: ["name", "age", "position", "office"],
        sortIcon: {
            base: "sort-icon-none",
            up: "sort-icon-asc",
            down: "sort-icon-desc",
        },
        resizableColumns: false,
    });
    const office_list = ref([]);

    onMounted(() => {
        bind_data();
    });

    const bind_data = () => {
        items.value = [
            { id: 1, name: "Tiger Nixon", position: "System Architect", office: "Edinburgh", age: 61 },
            { id: 2, name: "Garrett Winters", position: "Accountant", office: "Tokyo", age: 63 },
            { id: 3, name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: 66 },
            { id: 4, name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22 },
            { id: 5, name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33 },
            { id: 6, name: "Brielle Williamson", position: "Integration Specialist", office: "New York", age: 61 },
            { id: 7, name: "Herrod Chandler", position: "Sales Assistant", office: "San Francisco", age: 59 },
            { id: 8, name: "Rhona Davidson", position: "Integration Specialist", office: "Tokyo", age: 55 },
            { id: 9, name: "Colleen Hurst", position: "Javascript Developer", office: "San Francisco", age: 39 },
            { id: 10, name: "Sonya Frost", position: "Software Engineer", office: "Edinburgh", age: 23 },
            { id: 11, name: "Jena Gaines", position: "Office Manager", office: "London", age: 30 },
            { id: 12, name: "Quinn Flynn", position: "Support Lead", office: "Edinburgh", age: 22 },
            { id: 13, name: "Charde Marshall", position: "Regional Director", office: "San Francisco", age: 36 },
            { id: 14, name: "Haley Kennedy", position: "Senior Marketing Designer", office: "London", age: 43 },
            { id: 15, name: "Tatyana Fitzpatrick", position: "Regional Director", office: "London", age: 19 },
            { id: 16, name: "Michael Silva", position: "Marketing Designer", office: "London", age: 66 },
            { id: 17, name: "Paul Byrd", position: "Chief Financial Officer (CFO)", office: "New York", age: 64 },
            { id: 18, name: "Gloria Little", position: "Systems Administrator", office: "New York", age: 59 },
            { id: 19, name: "Bradley Greer", position: "Software Engineer", office: "London", age: 41 },
            { id: 20, name: "Dai Rios", position: "Personnel Lead", office: "Edinburgh", age: 35 },
            { id: 21, name: "Jenette Caldwell", position: "Development Lead", office: "New York", age: 61 },
            { id: 22, name: "Yuri Berry", position: "Chief Marketing Officer (CMO)", office: "New York", age: 40 },
            { id: 23, name: "Caesar Vance", position: "Pre-Sales Support", office: "New York", age: 21 },
            { id: 24, name: "Doris Wilder", position: "Sales Assistant", office: "Sidney", age: 23 },
            { id: 25, name: "Angelica Ramos", position: "Chief Executive Officer (CEO)", office: "London", age: 47 },
            { id: 26, name: "Gavin Joyce", position: "Developer", office: "Edinburgh", age: 42 },
            { id: 27, name: "Jennifer Chang", position: "Regional Director", office: "Singapore", age: 28 },
        ];

        office_list.value = [...new Map(items.value.map((item) => [item.office, item])).values()].map((d) => {
            return d.office;
        });
    };
</script>
