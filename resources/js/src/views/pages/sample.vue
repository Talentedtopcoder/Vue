<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Pages</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Sample Page</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12 col-12 layout-spacing">
                <div class="panel br-4">
                    <div class="panel-body">
                        <h6>Kick Start you new project with ease!</h6>
                        <p class="mb-0 mt-3">
                            With CORK starter kit, you can begin your work without any hassle. The starter page is highly optimized which gives you freedom to start with minimal code and add only the desired components and plugins required
                            for your project.
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div class="card b-l-card-1 h-100">
                    <img src="/assets/images/grid-blog-style-1.jpg" alt="Card image cap" class="card-img" />
                    <div class="card-body">
                        <strong class="card-category">Trends</strong>
                        <h5 class="card-title mt-2">Trending Style</h5>
                        <p class="card-text meta-info meta-time mb-2"><small class="">3 mins ago</small></p>
                        <p class="card-text mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

                        <button class="btn btn-outline-warning mt-2">Read More</button>
                    </div>
                </div>
            </div>

            <div class="col-xl-8 col-lg-6 col-md-6 col-sm-12 col-12" style="margin-bottom: 24px">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Form controls</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label class="col-form-label pt-0" for="email">Email</label>
                                    <div>
                                        <input type="email" id="email" class="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="col-form-label pt-0" for="password">Password</label>
                                    <div>
                                        <input type="password" id="password" class="form-control" placeholder="Password" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-form-label pt-0" for="address">Address</label>
                                <div>
                                    <input type="text" id="address" class="form-control" placeholder="1234 Main St" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-form-label pt-0" for="address2">Address 2</label>
                                <div>
                                    <input type="text" id="address2" class="form-control" placeholder="Apartment, studio, or floor" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label class="col-form-label pt-0" for="city">City</label>
                                    <div>
                                        <input type="text" id="city" class="form-control" placeholder="City" />
                                    </div>
                                </div>
                                <div class="form-group col-md-4">
                                    <label class="col-form-label pt-0" for="state">State</label>
                                    <div>
                                        <select id="state" class="form-select w-100" value="">
                                            <option value="">Choose...</option>
                                            <option value="...">...</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label class="col-form-label pt-0" for="zip">Zip</label>
                                    <div>
                                        <input type="text" id="zip" class="form-control" placeholder="Zip" />
                                    </div>
                                </div>
                            </div>

                            <div class="checkbox-primary custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" value="true" id="chkCheckout" />
                                <label class="custom-control-label" for="chkCheckout"> Check me out</label>
                            </div>

                            <button type="submit" class="btn btn-primary mt-3">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-lg-12 col-md-12 layout-spacing">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Table with Footer</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table role="table" class="table b-table table-bordered" id="__BVID__345">
                                <thead role="rowgroup" class="">
                                    <tr role="row" class="">
                                        <th role="columnheader" scope="col" class="">Name</th>
                                        <th role="columnheader" scope="col" class="">Date</th>
                                        <th role="columnheader" scope="col" class="">Sale</th>
                                        <th role="columnheader" scope="col" class="text-center">Status</th>
                                        <th role="columnheader" scope="col" class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody role="rowgroup">
                                    <tr v-for="item in table_1" :key="item.name" role="row" class="">
                                        <td role="cell" class="">{{ item.name }}</td>
                                        <td role="cell" class="">{{ item.date }}</td>
                                        <td role="cell" class="">{{ item.sale }}</td>
                                        <td role="cell" class="">
                                            <span class="badge" :class="`badge-${item.status_class}`">{{ item.status }}</span>
                                        </td>
                                        <td role="cell" class="text-center">
                                            <div class="dropdown b-dropdown custom-dropdown btn-group" id="__BVID__464">
                                                <a aria-haspopup="true" aria-expanded="false" href="javascript:;" target="_self" class="btn dropdown-toggle btn-icon-only" data-bs-toggle="dropdown" boundary="body" id="ddlcustom">
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
                                                        class="feather feather-more-horizontal"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </a>
                                                <ul role="menu" tabindex="-1" class="dropdown-menu dropdown-menu-right" aria-labelledby="ddlcustom" style="">
                                                    <li role="presentation"><a role="menuitem" href="javascript:" target="_self" class="dropdown-item">Download</a></li>
                                                    <li role="presentation"><a role="menuitem" href="javascript:" target="_self" class="dropdown-item">Share</a></li>
                                                    <li role="presentation"><a role="menuitem" href="javascript:" target="_self" class="dropdown-item">Edit</a></li>
                                                    <li role="presentation"><a role="menuitem" href="javascript:" target="_self" class="dropdown-item">Delete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from "vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Sample" });

    const table_1 = ref([]);

    onMounted(() => {
        init_tables();
    });

    const init_tables = () => {
        table_1.value = [
            {
                thumb: "boy.png",
                name: "Shaun Park",
                "first name": "John",
                "last name": "Doe",
                email: "johndoe@yahoo.com",
                date: "10/08/2020",
                sale: "320",
                sales: "29.56",
                status: "Complete",
                status_class: "success",
                register: "5 min ago",
                position: "Developer",
                office: "London",
            },
            {
                thumb: "girl-1.png",
                name: "Alma Clarke",
                "first name": "Andy",
                "last name": "King",
                email: "andyking@gmail.com",
                date: "11/08/2020",
                sale: "420",
                sales: "19.15",
                status: "Pending",
                status_class: "secondary",
                register: "10 min ago",
                position: "Designer",
                office: "New York",
            },
            {
                thumb: "girl-2.png",
                name: "Xavier",
                "first name": "Lisa",
                "last name": "Doe",
                email: "lisadoe@yahoo.com",
                date: "12/08/2020",
                sale: "130",
                sales: "39.00",
                status: "In progress",
                status_class: "info",
                register: "1 hour ago",
                position: "Accountant",
                office: "Amazon",
            },
            {
                thumb: "boy-2.png",
                name: "Vincent Carpenter",
                "first name": "Vincent",
                "last name": "Carpenter",
                email: "vinnyc@yahoo.com",
                date: "13/08/2020",
                sale: "260",
                sales: "88.03",
                status: "Canceled",
                status_class: "danger",
                register: "1 day ago",
                position: "Data Scientist",
                office: "Canada",
            },
            {
                thumb: "boy.png",
                name: "Amy Diaz",
                "first name": "Amy",
                "last name": "Diaz",
                email: "amydiaz@yahoo.com",
                date: "10/08/2020",
                sale: "320",
                sales: "29.56",
                status: "Complete",
                status_class: "success",
                register: "5 min ago",
            },
            {
                thumb: "girl-1.png",
                name: "Nia Hillyer",
                "first name": "Nia",
                "last name": "Hillyer",
                email: "niahill@gmail.com",
                date: "11/08/2020",
                sale: "420",
                sales: "19.15",
                status: "Pending",
                status_class: "secondary",
                register: "10 min ago",
            },
            {
                thumb: "girl-2.png",
                name: "Marry",
                "first name": "Marry",
                "last name": "McDonald",
                email: "marryMcD@yahoo.com",
                date: "12/08/2020",
                sale: "130",
                sales: "39.00",
                status: "In progress",
                status_class: "info",
                register: "1 hour ago",
            },
            {
                thumb: "boy-2.png",
                name: "Shaun Park",
                "first name": "Shaun",
                "last name": "Park",
                email: "park@yahoo.com",
                date: "13/08/2020",
                sale: "260",
                sales: "88.03",
                status: "Canceled",
                status_class: "danger",
                register: "1 day ago",
            },
        ];
    };

    const random_class = (index) => {
        if (index == 0) {
            return "default";
        } else if (index == 1) {
            return "primary";
        } else if (index == 2) {
            return "secondary";
        } else if (index == 3) {
            return "success";
        } else if (index == 4) {
            return "dark";
        } else if (index == 5) {
            return "danger";
        } else if (index == 6) {
            return "info";
        } else if (index == 7) {
            return "warning";
        }
        return "dark";
    };
</script>
