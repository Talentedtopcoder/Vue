<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">DataTables</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Multi Column</span></li>
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
                            <template #name="props">
                                <div class="d-flex">
                                    <div class="usr-img-frame me-2 rounded-circle">
                                        <img :src="'/assets/images/' + props.row.thumb" class="img-fluid rounded-circle" alt="avatar" />
                                    </div>
                                    <p class="align-self-center mb-0 admin-name">{{ props.row.name }}</p>
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

<script setup>
    import { onMounted, ref } from "vue";

    import { useMeta } from "../../../composables/use-meta";
    useMeta({ title: "Multi Column Ordering Table" });

    const columns = ref(["name", "position", "office", "age", "start_date", "salary"]);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: "table",
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
        items.value = [
            { id: 1, thumb: "boy.png", name: "Tiger", position: "System Architect", office: "Edinburgh", age: 61, start_date: "2011/04/25", salary: "320,800" },
            { id: 2, thumb: "boy-2.png", name: "Garrett", position: "Accountant", office: "Tokyo", age: 63, start_date: "2011/07/25", salary: "170,750" },
            { id: 3, thumb: "boy.png", name: "Ashton", position: "Junior Technical Author", office: "San Francisco", age: 66, start_date: "2009/01/12", salary: "86,000" },
            { id: 4, thumb: "boy-1.png", name: "Cedric", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, start_date: "2012/03/29", salary: "433,060" },
            { id: 5, thumb: "girl-1.png", name: "Airi", position: "Accountant", office: "Tokyo", age: 33, start_date: "2008/11/28", salary: "162,700" },
            { id: 6, thumb: "girl-2.png", name: "Brielle", position: "Integration Specialist", office: "New York", age: 61, start_date: "2012/12/02", salary: "372,000" },
            { id: 7, thumb: "boy.png", name: "Herrod", position: "Sales Assistant", office: "San Francisco", age: 59, start_date: "2012/08/06", salary: "137,500" },
            { id: 8, thumb: "girl-4.png", name: "Rhona", position: "Integration Specialist", office: "Tokyo", age: 55, start_date: "2010/10/14", salary: "327,900" },
            { id: 9, thumb: "girl-1.png", name: "Colleen", position: "Javascript Developer", office: "San Francisco", age: 39, start_date: "2009/09/15", salary: "205,500" },
            { id: 10, thumb: "girl-1.png", name: "Sonya", position: "Software Engineer", office: "Edinburgh", age: 23, start_date: "2008/12/13", salary: "103,600" },
            { id: 11, thumb: "girl-2.png", name: "Jena", position: "Office Manager", office: "London", age: 30, start_date: "2008/12/19", salary: "90,560" },
            { id: 12, thumb: "girl-3.png", name: "Quinn", position: "Support Lead", office: "Edinburgh", age: 22, start_date: "2013/03/03", salary: "342,000" },
            { id: 13, thumb: "boy.png", name: "Charde", position: "Regional Director", office: "San Francisco", age: 36, start_date: "2008/10/16", salary: "470,600" },
            { id: 14, thumb: "girl-4.png", name: "Haley", position: "Senior Marketing Designer", office: "London", age: 43, start_date: "2012/12/18", salary: "313,500" },
            { id: 15, thumb: "girl-2.png", name: "Tatyana", position: "Regional Director", office: "London", age: 19, start_date: "2010/03/17", salary: "385,750" },
            { id: 16, thumb: "boy.png", name: "Michael", position: "Marketing Designer", office: "London", age: 66, start_date: "2012/11/27", salary: "198,500" },
            { id: 17, thumb: "boy-2.png", name: "Paul", position: "Chief Financial Officer (CFO)", office: "New York", age: 64, start_date: "2010/06/09", salary: "725,000" },
            { id: 18, thumb: "girl-2.png", name: "Gloria", position: "Systems Administrator", office: "New York", age: 59, start_date: "2009/04/10", salary: "237,500" },
            { id: 19, thumb: "girl-3.png", name: "Bradley", position: "Software Engineer", office: "London", age: 41, start_date: "2012/10/13", salary: "132,000" },
            { id: 20, thumb: "girl-4.png", name: "Dai", position: "Personnel Lead", office: "Edinburgh", age: 35, start_date: "2012/09/26", salary: "217,500" },
            { id: 21, thumb: "girl-1.png", name: "Jenette", position: "Development Lead", office: "New York", age: 61, start_date: "2011/09/03", salary: "345,000" },
            { id: 22, thumb: "boy-1.png", name: "Yuri", position: "Chief Marketing Officer (CMO)", office: "New York", age: 40, start_date: "2009/06/25", salary: "675,000" },
            { id: 23, thumb: "boy-2.png", name: "Caesar", position: "Pre-Sales Support", office: "New York", age: 21, start_date: "2011/12/12", salary: "106,450" },
            { id: 24, thumb: "boy.png", name: "Doris", position: "Sales Assistant", office: "Sidney", age: 23, start_date: "2010/09/20", salary: "85,600" },
            { id: 25, thumb: "girl-2.png", name: "Angelica", position: "Chief Executive Officer (CEO)", office: "London", age: 47, start_date: "2009/10/09", salary: "1,200,000" },
            { id: 26, thumb: "boy.png", name: "Gavin", position: "Developer", office: "Edinburgh", age: 42, start_date: "2010/12/22", salary: "92,575" },
            { id: 27, thumb: "girl-3.png", name: "Jennifer", position: "Regional Director", office: "Singapore", age: 28, start_date: "2010/11/14", salary: "57,650" },
        ];
    };
</script>
