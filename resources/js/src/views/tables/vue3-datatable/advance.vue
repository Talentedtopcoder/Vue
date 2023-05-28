<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="javascript:;">DataTables</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    <span>Advance</span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel br-6 p-0">
                    <div class="vue3-datatable">
                        <vue3-datatable :rows="rows" :columns="cols" :totalRows="rows?.length" :sortable="true" class="advanced-table text-nowrap">
                            <template #id="data">
                                <strong>#{{ data.value.id }}</strong>
                            </template>
                            <template #firstName="data">
                                <div class="d-flex align-items-center">
                                    <img width="40" :src="`/assets/images/profile-${data.value.id}.jpeg`" class="rounded-circle me-2" alt="user-profile" />
                                    <div class="fw-bold">{{ data.value.firstName + ' ' + data.value.lastName }}</div>
                                </div>
                            </template>
                            <template #email="data">
                                <a :href="`mailto:${data.value.email}`" class="text-primary hover:underline">{{ data.value.email }}</a>
                            </template>
                            <template #age="data">
                                <div class="progress-bar">
                                    <div class="progress-line" :style="`width:${data.value.age}%; background-color:${randomColor()}`"></div>
                                </div>
                            </template>
                            <template #rating="data">
                                <div class="d-flex text-warning">
                                    <div v-for="i in Math.floor(Math.random() * (5 - 1) + 1)" :key="i + data.value.id">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="#e2a03f"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-star f-icon-line"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    </div>
                                </div>
                            </template>
                            <template #status="data">
                                <span class="badge" :class="`badge-${data.value.status.color}`">{{ data.value.status.tooltip }}</span>
                            </template>
                            <template #country>
                                <div class="d-flex align-items-center">
                                    <img width="24" :src="`/assets/images/flags/${getCountry().code}.svg`" class="me-2" alt="user-profile" />
                                    <div class="fw-bold">{{ getCountry().name }}</div>
                                </div>
                            </template>
                            <template #series="data">
                                <div style="width: 150px">
                                    <apex-chart :key="data.value.id" height="30" type="line" :options="chart_options" :series="data.value.series"></apex-chart>
                                </div>
                            </template>
                        </vue3-datatable>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref, computed } from 'vue';
    import Vue3Datatable from '@bhplugin/vue3-datatable';
    import { useStore } from 'vuex';
    import ApexChart from 'vue3-apexcharts';

    import { useMeta } from '../../../composables/use-meta';
    useMeta({ title: 'Advance Table' });
    const store = useStore();

    const cols = ref([
        { field: 'id', title: 'ID', isUnique: true },
        { field: 'firstName', title: 'User' },
        { field: 'country', title: 'Country' },
        { field: 'email', title: 'Email' },
        { field: 'age', title: 'Progress' },
        { field: 'phone', title: 'Phone' },
        { field: 'rating', title: 'Rate', sort: false },
        { field: 'series', title: 'Progress', sort: false },
        { field: 'status', title: 'Status', sort: false },
    ]);
    const rows = ref([]);

    const chart_options = computed(() => {
        const is_dark = store.state.is_dark_mode;
        let option = {
            chart: { sparkline: { enabled: true } },
            stroke: { curve: 'smooth', width: 2 },
            markers: { size: [4, 7], strokeWidth: 0 },
            colors: [randomColor()],
            grid: { padding: { top: 5, bottom: 5 } },
            tooltip: {
                theme: is_dark ? 'dark' : 'light',
                x: { show: false },
                y: {
                    title: {
                        formatter: function formatter() {
                            return '';
                        },
                    },
                },
            },
        };
        return option;
    });

    const randomColor = () => {
        const color = ['#4361ee', '#2196f3', '#1abc9c', '#e2a03f', '#e7515a', '#805dca'];
        const random = Math.floor(Math.random() * color.length);
        return color[random];
    };

    const getCountry = () => {
        const countryList = [
            { code: 'AE', name: 'United Arab Emirates' },
            { code: 'AR', name: 'Argentina' },
            { code: 'AT', name: 'Austria' },
            { code: 'AU', name: 'Australia' },
            { code: 'BE', name: 'Belgium' },
            { code: 'BG', name: 'Bulgaria' },
            { code: 'BN', name: 'Brunei' },
            { code: 'BR', name: 'Brazil' },
            { code: 'BY', name: 'Belarus' },
            { code: 'CA', name: 'Canada' },
            { code: 'CH', name: 'Switzerland' },
            { code: 'CL', name: 'Chile' },
            { code: 'CN', name: 'China' },
            { code: 'CO', name: 'Colombia' },
            { code: 'CZ', name: 'Czech Republic' },
            { code: 'DE', name: 'Germany' },
            { code: 'DK', name: 'Denmark' },
            { code: 'DZ', name: 'Algeria' },
            { code: 'EC', name: 'Ecuador' },
            { code: 'EG', name: 'Egypt' },
            { code: 'ES', name: 'Spain' },
            { code: 'FI', name: 'Finland' },
            { code: 'FR', name: 'France' },
            { code: 'GB', name: 'United Kingdom' },
            { code: 'GR', name: 'Greece' },
            { code: 'HK', name: 'Hong Kong' },
            { code: 'HR', name: 'Croatia' },
            { code: 'HU', name: 'Hungary' },
            { code: 'ID', name: 'Indonesia' },
            { code: 'IE', name: 'Ireland' },
            { code: 'IL', name: 'Israel' },
            { code: 'IN', name: 'India' },
            { code: 'IT', name: 'Italy' },
            { code: 'JO', name: 'Jordan' },
            { code: 'JP', name: 'Japan' },
            { code: 'KE', name: 'Kenya' },
            { code: 'KH', name: 'Cambodia' },
            { code: 'KR', name: 'South Korea' },
            { code: 'KZ', name: 'Kazakhstan' },
            { code: 'LA', name: 'Laos' },
            { code: 'LK', name: 'Sri Lanka' },
            { code: 'MA', name: 'Morocco' },
            { code: 'MM', name: 'Myanmar' },
            { code: 'MO', name: 'Macau' },
            { code: 'MX', name: 'Mexico' },
            { code: 'MY', name: 'Malaysia' },
            { code: 'NG', name: 'Nigeria' },
            { code: 'NL', name: 'Netherlands' },
            { code: 'NO', name: 'Norway' },
            { code: 'NZ', name: 'New Zealand' },
            { code: 'PE', name: 'Peru' },
            { code: 'PH', name: 'Philippines' },
            { code: 'PK', name: 'Pakistan' },
            { code: 'PL', name: 'Poland' },
            { code: 'PT', name: 'Portugal' },
            { code: 'QA', name: 'Qatar' },
            { code: 'RO', name: 'Romania' },
            { code: 'RS', name: 'Serbia' },
            { code: 'RU', name: 'Russia' },
            { code: 'SA', name: 'Saudi Arabia' },
            { code: 'SE', name: 'Sweden' },
            { code: 'SG', name: 'Singapore' },
            { code: 'SK', name: 'Slovakia' },
            { code: 'TH', name: 'Thailand' },
            { code: 'TN', name: 'Tunisia' },
            { code: 'TR', name: 'Turkey' },
            { code: 'TW', name: 'Taiwan' },
            { code: 'UK', name: 'Ukraine' },
            { code: 'UG', name: 'Uganda' },
            { code: 'US', name: 'United States' },
            { code: 'VN', name: 'Vietnam' },
            { code: 'ZA', name: 'South Africa' },
            { code: 'BA', name: 'Bosnia and Herzegovina' },
            { code: 'BD', name: 'Bangladesh' },
            { code: 'EE', name: 'Estonia' },
            { code: 'IQ', name: 'Iraq' },
            { code: 'LU', name: 'Luxembourg' },
            { code: 'LV', name: 'Latvia' },
            { code: 'MK', name: 'North Macedonia' },
            { code: 'SI', name: 'Slovenia' },
            { code: 'PA', name: 'Panama' },
        ];
        const random = Math.floor(Math.random() * countryList.length);
        return countryList[random];
    };

    onMounted(() => {
        bind_data();
    });

    const bind_data = () => {
        rows.value = [
            {
                id: 1,
                firstName: 'Caroline',
                lastName: 'Jensen',
                email: 'carolinejensen@zidant.com',
                dob: '2004-05-28',
                address: { street: '529 Scholes Street', city: 'Temperanceville', zipcode: 5235, geo: { lat: 23.806115, lng: 164.677197 } },
                phone: '+1 (821) 447-3782',
                isActive: true,
                age: 55,
                company: 'POLARAX',
                status: { tooltip: 'Approved', color: 'primary' },
                series: [{ data: [21, 9, 36, 12, 44, 25, 59] }],
            },
            {
                id: 2,
                firstName: 'Celeste',
                lastName: 'Grant',
                email: 'celestegrant@polarax.com',
                dob: '1989-11-19',
                address: { street: '639 Kimball Street', city: 'Bascom', zipcode: 8907, geo: { lat: 65.954483, lng: 98.906478 } },
                phone: '+1 (838) 515-3408',
                isActive: false,
                age: 32,
                company: 'MANGLO',
                status: { tooltip: 'Closed', color: 'danger' },
                series: [{ data: [22, 19, 30, 47, 32, 44, 34] }],
            },
            {
                id: 3,
                firstName: 'Tillman',
                lastName: 'Forbes',
                email: 'tillmanforbes@manglo.com',
                dob: '2016-09-05',
                address: { street: '240 Vandalia Avenue', city: 'Thynedale', zipcode: 8994, geo: { lat: -34.949388, lng: -82.958111 } },
                phone: '+1 (969) 496-2892',
                isActive: false,
                age: 26,
                company: 'APPLIDECK',
                status: { tooltip: 'Suspended', color: 'warning' },
                series: [{ data: [91, 76, 85, 101, 98, 87, 105] }],
            },
            {
                id: 4,
                firstName: 'Daisy',
                lastName: 'Whitley',
                email: 'daisywhitley@applideck.com',
                dob: '1987-03-23',
                address: { street: '350 Pleasant Place', city: 'Idledale', zipcode: 9369, geo: { lat: -54.458809, lng: -127.476556 } },
                phone: '+1 (861) 564-2877',
                isActive: true,
                age: 85,
                company: 'VOLAX',
                status: { tooltip: 'Suspended', color: 'warning' },
                series: [{ data: [58, 44, 55, 57, 56, 61, 58] }],
            },
            {
                id: 5,
                firstName: 'Weber',
                lastName: 'Bowman',
                email: 'weberbowman@volax.com',
                dob: '1983-02-24',
                address: { street: '154 Conway Street', city: 'Broadlands', zipcode: 8131, geo: { lat: 54.501351, lng: -167.47138 } },
                phone: '+1 (962) 466-3483',
                isActive: false,
                age: 26,
                company: 'ORBAXTER',
                status: { tooltip: 'Closed', color: 'danger' },
                series: [{ data: [38, 60, 38, 52, 36, 40, 28] }],
            },
            {
                id: 6,
                firstName: 'Buckley',
                lastName: 'Townsend',
                email: 'buckleytownsend@orbaxter.com',
                dob: '2011-05-29',
                address: { street: '131 Guernsey Street', city: 'Vallonia', zipcode: 6779, geo: { lat: -2.681655, lng: 3.528942 } },
                phone: '+1 (884) 595-2643',
                isActive: true,
                age: 44,
                company: 'OPPORTECH',
                status: { tooltip: 'Approved', color: 'primary' },
                series: [{ data: [28, 50, 36, 60, 38, 52, 38] }],
            },
            {
                id: 7,
                firstName: 'Latoya',
                lastName: 'Bradshaw',
                email: 'latoyabradshaw@opportech.com',
                dob: '2010-11-23',
                address: { street: '668 Lenox Road', city: 'Lowgap', zipcode: 992, geo: { lat: 36.026423, lng: 130.412198 } },
                phone: '+1 (906) 474-3155',
                isActive: true,
                age: 100,
                company: 'GORGANIC',
                status: { tooltip: 'Suspended', color: 'warning' },
                series: [{ data: [41, 66, 25, 38, 52, 36, 40] }],
            },
            {
                id: 8,
                firstName: 'Kate',
                lastName: 'Lindsay',
                email: 'katelindsay@gorganic.com',
                dob: '1987-07-02',
                address: { street: '773 Harrison Avenue', city: 'Carlton', zipcode: 5909, geo: { lat: 42.464724, lng: -12.948403 } },
                phone: '+1 (930) 546-2952',
                isActive: true,
                age: 67,
                company: 'AVIT',
                status: { tooltip: 'Closed', color: 'danger' },
                series: [{ data: [91, 114, 94, 66, 70, 98, 87] }],
            },
            {
                id: 9,
                firstName: 'Marva',
                lastName: 'Sandoval',
                email: 'marvasandoval@avit.com',
                dob: '2010-11-02',
                address: { street: '200 Malta Street', city: 'Tuskahoma', zipcode: 1292, geo: { lat: -52.206169, lng: 74.19452 } },
                phone: '+1 (927) 566-3600',
                isActive: false,
                age: 28,
                company: 'QUILCH',
                status: { tooltip: 'Approved', color: 'primary' },
                series: [{ data: [63, 60, 66, 56, 63, 44, 25] }],
            },
            {
                id: 10,
                firstName: 'Decker',
                lastName: 'Russell',
                email: 'deckerrussell@quilch.com',
                dob: '1994-04-21',
                address: { street: '708 Bath Avenue', city: 'Coultervillle', zipcode: 1268, geo: { lat: -41.550295, lng: -146.598075 } },
                phone: '+1 (846) 535-3283',
                isActive: false,
                age: 27,
                company: 'MEMORA',
                status: { tooltip: 'Suspended', color: 'warning' },
                series: [{ data: [91, 76, 85, 101, 98, 87, 105] }],
            },
            {
                id: 11,
                firstName: 'Odom',
                lastName: 'Mills',
                email: 'odommills@memora.com',
                dob: '2010-01-24',
                address: { street: '907 Blake Avenue', city: 'Churchill', zipcode: 4400, geo: { lat: -56.061694, lng: -130.238523 } },
                phone: '+1 (995) 525-3402',
                isActive: true,
                age: 25,
                company: 'ZORROMOP',
                status: { tooltip: 'Approved', color: 'primary' },
                series: [{ data: [55, 41, 69, 76, 85, 101, 68] }],
            },
            {
                id: 12,
                firstName: 'Sellers',
                lastName: 'Walters',
                email: 'sellerswalters@zorromop.com',
                dob: '1975-11-12',
                address: { street: '978 Oakland Place', city: 'Gloucester', zipcode: 3802, geo: { lat: 11.732587, lng: 96.118099 } },
                phone: '+1 (830) 430-3157',
                isActive: true,
                age: 93,
                company: 'ORBOID',
                status: { tooltip: 'Closed', color: 'danger' },
                series: [{ data: [21, 9, 36, 12, 44, 25, 59] }],
            },
            {
                id: 13,
                firstName: 'Wendi',
                lastName: 'Powers',
                email: 'wendipowers@orboid.com',
                dob: '1979-06-02',
                address: { street: '376 Greenpoint Avenue', city: 'Elliott', zipcode: 9149, geo: { lat: -78.159578, lng: -9.835103 } },
                phone: '+1 (863) 457-2088',
                isActive: true,
                age: 52,
                company: 'SNORUS',
                status: { tooltip: 'Suspended', color: 'warning' },
                series: [{ data: [38, 60, 38, 52, 36, 40, 28] }],
            },
            {
                id: 14,
                firstName: 'Sophie',
                lastName: 'Horn',
                email: 'sophiehorn@snorus.com',
                dob: '2018-09-20',
                address: { street: '343 Doughty Street', city: 'Homestead', zipcode: 330, geo: { lat: 65.484087, lng: 137.413998 } },
                phone: '+1 (885) 418-3948',
                isActive: true,
                age: 24,
                company: 'XTH',
                status: { tooltip: 'Approved', color: 'primary' },
                series: [{ data: [60, 28, 52, 38, 40, 36, 38] }],
            },
            {
                id: 15,
                firstName: 'Levine',
                lastName: 'Rodriquez',
                email: 'levinerodriquez@xth.com',
                dob: '1973-02-08',
                address: { street: '643 Allen Avenue', city: 'Weedville', zipcode: 8931, geo: { lat: -63.185586, lng: 117.327808 } },
                phone: '+1 (999) 565-3239',
                isActive: true,
                age: 82,
                company: 'COMTRACT',
                status: { tooltip: 'Suspended', color: 'warning' },
                series: [{ data: [60, 28, 52, 38, 40, 36, 38] }],
            },
            {
                id: 16,
                firstName: 'Little',
                lastName: 'Hatfield',
                email: 'littlehatfield@comtract.com',
                dob: '2012-01-03',
                address: { street: '194 Anthony Street', city: 'Williston', zipcode: 7456, geo: { lat: 47.480837, lng: 6.085909 } },
                phone: '+1 (812) 488-3011',
                isActive: false,
                age: 33,
                company: 'ZIDANT',
                status: { tooltip: 'Suspended', color: 'warning' },
                series: [{ data: [58, 44, 55, 57, 56, 61, 58] }],
            },
            {
                id: 17,
                firstName: 'Larson',
                lastName: 'Kelly',
                email: 'larsonkelly@zidant.com',
                dob: '2010-06-14',
                address: { street: '978 Indiana Place', city: 'Innsbrook', zipcode: 639, geo: { lat: -71.766732, lng: 150.854345 } },
                phone: '+1 (892) 484-2162',
                isActive: true,
                age: 70,
                company: 'SUREPLEX',
                status: { tooltip: 'Suspended', color: 'warning' },
                series: [{ data: [55, 41, 69, 76, 85, 101, 68] }],
            },
            {
                id: 18,
                firstName: 'Kendra',
                lastName: 'Molina',
                email: 'kendramolina@sureplex.com',
                dob: '2002-07-19',
                address: { street: '567 Charles Place', city: 'Kimmell', zipcode: 1966, geo: { lat: 50.765816, lng: -117.106499 } },
                phone: '+1 (920) 528-3330',
                isActive: false,
                age: 31,
                company: 'DANJA',
                status: { tooltip: 'Approved', color: 'primary' },
                series: [{ data: [22, 19, 30, 47, 32, 44, 34] }],
            },
            {
                id: 19,
                firstName: 'Ebony',
                lastName: 'Livingston',
                email: 'ebonylivingston@danja.com',
                dob: '1994-10-18',
                address: { street: '284 Cass Place', city: 'Navarre', zipcode: 948, geo: { lat: 65.271256, lng: -83.064729 } },
                phone: '+1 (970) 591-3039',
                isActive: false,
                age: 33,
                company: 'EURON',
                status: { tooltip: 'Closed', color: 'danger' },
                series: [{ data: [28, 50, 36, 60, 38, 52, 38] }],
            },
            {
                id: 20,
                firstName: 'Kaufman',
                lastName: 'Rush',
                email: 'kaufmanrush@euron.com',
                dob: '2011-07-10',
                address: { street: '408 Kingsland Avenue', city: 'Beaulieu', zipcode: 7911, geo: { lat: 41.513153, lng: 54.821641 } },
                phone: '+1 (924) 463-2934',
                isActive: false,
                age: 40,
                company: 'ILLUMITY',
                status: { tooltip: 'Suspended', color: 'warning' },
                series: [{ data: [91, 114, 94, 66, 70, 98, 87] }],
            },
            {
                id: 21,
                firstName: 'Frank',
                lastName: 'Hays',
                email: 'frankhays@illumity.com',
                dob: '2005-06-15',
                address: { street: '973 Caton Place', city: 'Dargan', zipcode: 4104, geo: { lat: 63.314988, lng: -138.771323 } },
                phone: '+1 (930) 577-2670',
                isActive: false,
                age: 15,
                company: 'SYBIXTEX',
                status: { tooltip: 'Closed', color: 'danger' },
                series: [{ data: [63, 60, 66, 56, 63, 44, 25] }],
            },
        ];
    };
</script>
<style>
    .advanced-table .progress-bar {
        width: 80%;
        min-width: 120px;
        height: 8px;
        background-color: #ebedf2;
        border-radius: 9999px;
        display: flex;
    }

    .advanced-table .progress-line {
        height: 8px;
        border-radius: 9999px;
    }
</style>
