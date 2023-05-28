<template>
    <div class="layout-px-spacing app-contacts">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Contacts</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-spacing layout-top-spacing" id="cancel-row">
            <div class="col-lg-12">
                <div class="panel-body searchable-container" :class="[grid_type]">
                    <div class="row">
                        <div class="col-xl-4 col-lg-5 col-md-5 col-sm-7 filtered-list-search layout-spacing align-self-center">
                            <form class="form-inline my-2 my-lg-0">
                                <div class="">
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
                                        class="feather feather-search"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                    <input type="text" v-model.trim="search_user" class="product-search form-control" v-on:keyup="search_contacts()" placeholder="Search Contacts..." />
                                </div>
                            </form>
                        </div>

                        <div class="col-xl-8 col-lg-7 col-md-7 col-sm-5 text-sm-end text-center layout-spacing align-self-center">
                            <div class="d-flex justify-content-sm-end justify-content-center">
                                <a href="javascript:;" @click="edit_user">
                                    <svg
                                        id="btn-add-contact"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-user-plus"
                                    >
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="8.5" cy="7" r="4"></circle>
                                        <line x1="20" y1="8" x2="20" y2="14"></line>
                                        <line x1="23" y1="11" x2="17" y2="11"></line>
                                    </svg>
                                </a>

                                <div class="switch align-self-center">
                                    <a href="javascript:;" @click="grid_type = 'list'">
                                        <svg
                                            :class="{ 'active-view': grid_type == 'list' }"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-list view-list me-1"
                                        >
                                            <line x1="8" y1="6" x2="21" y2="6"></line>
                                            <line x1="8" y1="12" x2="21" y2="12"></line>
                                            <line x1="8" y1="18" x2="21" y2="18"></line>
                                            <line x1="3" y1="6" x2="3" y2="6"></line>
                                            <line x1="3" y1="12" x2="3" y2="12"></line>
                                            <line x1="3" y1="18" x2="3" y2="18"></line>
                                        </svg>
                                    </a>
                                    <a href="javascript:;" @click="grid_type = 'grid'">
                                        <svg
                                            :class="{ 'active-view': grid_type == 'grid' }"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-grid view-grid"
                                        >
                                            <rect x="3" y="3" width="7" height="7"></rect>
                                            <rect x="14" y="3" width="7" height="7"></rect>
                                            <rect x="14" y="14" width="7" height="7"></rect>
                                            <rect x="3" y="14" width="7" height="7"></rect>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="searchable-items" :class="[grid_type]">
                        <div class="items items-header-section">
                            <div class="item-content">
                                <div class="">
                                    <div class="checkbox-primary custom-control custom-checkbox d-inline-block">
                                        <input id="chkALl" type="checkbox" :checked="check_all_checkbox" class="custom-control-input" @change="check_all($event.target.checked)" />
                                        <label class="custom-control-label" for="chkALl"> </label>
                                    </div>

                                    <h4>Name</h4>
                                </div>
                                <div class="user-email">
                                    <h4>Email</h4>
                                </div>
                                <div class="user-location">
                                    <h4 style="margin-left: 0">Location</h4>
                                </div>
                                <div class="user-phone">
                                    <h4 style="margin-left: 3px">Phone</h4>
                                </div>
                                <div class="action-btn">
                                    <a href="javascript:;" @click="delete_selected()">
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
                                            class="feather feather-trash-2 delete-multiple"
                                        >
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div v-for="(user, index) in filterd_contacts_list" class="items" :key="index">
                            <div class="item-content">
                                <div class="user-profile">
                                    <div class="checkbox-primary custom-control custom-checkbox" @click.stop="$event.stopPropagation()">
                                        <input type="checkbox" :id="`chk-${user.id}`" v-model="ids" class="custom-control-input" :value="user.id" />
                                        <label class="custom-control-label" :for="`chk-${user.id}`"></label>
                                    </div>

                                    <img :src="`/assets/images/${user.path}`" alt="avatar" />
                                    <div class="user-meta-info">
                                        <p class="user-name">{{ user.name }}</p>
                                        <p class="user-work">{{ user.role }}</p>
                                    </div>
                                </div>
                                <div class="user-email">
                                    <p class="info-title">Email:</p>
                                    <p class="usr-email-addr">{{ user.email }}</p>
                                </div>
                                <div class="user-location">
                                    <p class="info-title">Location:</p>
                                    <p class="usr-location">{{ user.location }}</p>
                                </div>
                                <div class="user-phone">
                                    <p class="info-title">Phone:</p>
                                    <p class="usr-ph-no">{{ user.phone }}</p>
                                </div>
                                <div class="action-btn">
                                    <a href="javascript:;" class="me-1" @click="edit_user(user)">
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
                                            class="feather feather-edit-2 edit"
                                        >
                                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                        </svg>
                                    </a>
                                    <a href="javascript:;" @click="delete_user(user)">
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
                                            class="feather feather-user-minus delete"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="8.5" cy="7" r="4"></circle>
                                            <line x1="23" y1="11" x2="17" y2="11"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Modal -->
                    <div id="addContactModal" class="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-md modal-dialog-centered">
                            <div class="modal-content mailbox-popup">
                                <div class="modal-header">
                                    <h5 class="modal-title">{{ params.id ? "Update User" : "Add User" }}</h5>
                                    <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="add-contact-box">
                                        <div class="add-contact-content">
                                            <form id="addContactModalTitle">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group mb-4">
                                                            <label>Name</label>
                                                            <input type="text" v-model="params.name" class="form-control" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group mb-4">
                                                            <label>Email</label>
                                                            <input type="text" v-model="params.email" class="form-control" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group mb-4">
                                                            <label>Occupation</label>
                                                            <input type="text" v-model="params.role" class="form-control" placeholder="Occupation" />
                                                        </div>
                                                    </div>

                                                    <div class="col-md-6">
                                                        <div class="form-group mb-4">
                                                            <label>Phone</label>
                                                            <input type="text" v-model="params.phone" class="form-control" placeholder="Phone" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group mb-0">
                                                            <label>Location</label>
                                                            <input type="text" v-model="params.location" class="form-control" placeholder="Location" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                    <button type="button" class="btn btn-primary" @click="save_user()">{{ params.id ? "Update" : "Add" }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .searchable-container .switch {
        width: auto;
        height: auto;
    }
    .searchable-container .searchable-items.grid .items .user-profile .custom-checkbox {
        display: none !important;
    }
</style>

<script setup>
    import { computed, onMounted, ref } from "vue";
    import "../../assets/sass/apps/contacts.scss";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Contact Profile" });

    let addContactModal = ref(null);
    const params = ref({ id: null, name: "", email: "", role: "", phone: "", location: "" });
    const contacts_list = ref([]);
    const filterd_contacts_list = ref([]);
    const search_user = ref("");
    const ids = ref([]);
    const grid_type = ref("list");

    onMounted(() => {
        initPopup();
        bind_contacts();
    });

    const check_all_checkbox = computed(() => {
        if (contacts_list.value.length && ids.value.length == contacts_list.value.length) {
            return true;
        } else {
            return false;
        }
    });

    const initPopup = () => {
        addContactModal = new window.bootstrap.Modal(document.getElementById("addContactModal"));
    };

    const bind_contacts = () => {
        contacts_list.value = [
            { id: 1, path: "profile-5.jpeg", name: "Alan Green", role: "Web Developer", email: "alan@mail.com", location: "Boston, USA", phone: "+1 (070) 123-4567" },
            { id: 2, path: "profile-11.jpeg", name: "Linda Nelson", role: "Web Designer", email: "linda@mail.com", location: "Sydney, Australia", phone: "+1 (070) 123-4567" },
            { id: 3, path: "profile-12.jpeg", name: "Lila Perry", role: "UX/UI Designer", email: "lila@mail.com", location: "Miami, USA", phone: "+1 (070) 123-4567" },
            { id: 4, path: "profile-3.jpeg", name: "Andy King", role: "Project Lead", email: "andy@mail.com", location: "Tokyo, Japan", phone: "+1 (070) 123-4567" },
            { id: 5, path: "profile-15.jpeg", name: "Jesse Cory", role: "Web Developer", email: "jesse@mail.com", location: "Edinburgh, UK", phone: "+1 (070) 123-4567" },
            { id: 6, path: "profile-7.jpeg", name: "Xavier", role: "UX/UI Designer", email: "xavier@mail.com", location: "New York, USA", phone: "+1 (070) 123-4567" },
            { id: 7, path: "profile-18.jpeg", name: "Susan", role: "Project Manager", email: "susan@mail.com", location: "Miami, USA", phone: "+1 (070) 123-4567" },
            { id: 8, path: "profile-29.jpeg", name: "raci Lopez", role: "Web Developer", email: "traci@mail.com", location: "Edinburgh, UK", phone: "+1 (070) 123-4567" },
        ];
        search_contacts();
    };

    const search_contacts = () => {
        filterd_contacts_list.value = contacts_list.value.filter((d) => d.name.toLowerCase().includes(search_user.value));
    };

    const edit_user = (user) => {
        params.value = { id: null, name: "", email: "", role: "", phone: "", location: "" };
        if (user) {
            params.value = JSON.parse(JSON.stringify(user));
        }

        addContactModal.show();
    };

    const save_user = () => {
        if (!params.value.name) {
            showMessage("Name is required.", "error");
            return true;
        }
        if (!params.value.email) {
            showMessage("Email is required.", "error");
            return true;
        }
        if (!params.value.phone) {
            showMessage("Phone is required.", "error");
            return true;
        }

        if (params.value.id) {
            //update user
            let user = contacts_list.value.find((d) => d.id == params.value.id);
            user.name = params.value.name;
            user.email = params.value.email;
            user.role = params.value.role;
            user.phone = params.value.phone;
            user.location = params.value.location;
        } else {
            //add user
            let max_user_id = contacts_list.value.reduce((max, character) => (character.id > max ? character.id : max), contacts_list.value[0].id);
            if (!max_user_id) {
                max_user_id = 0;
            }
            let user = {
                id: max_user_id + 1,
                path: "profile-30.png",
                name: params.value.name,
                email: params.value.email,
                role: params.value.role,
                phone: params.value.phone,
                location: params.value.location,
            };
            contacts_list.value.splice(0, 0, user);
            search_contacts();
        }

        showMessage("User saved successfully.");
        addContactModal.hide();
    };

    const delete_user = (user) => {
        contacts_list.value = contacts_list.value.filter((d) => d.id != user.id);
        ids.value = ids.value.filter((d) => d != user.id);
        search_contacts();
        showMessage("User deleted successfully.");
    };

    const delete_selected = () => {
        if (!ids.value.length) {
            showMessage("Please select atleast one user.", "info");
            return false;
        }

        contacts_list.value = contacts_list.value.filter((d) => !ids.value.includes(d.id));
        clear_selection();
        search_contacts();

        showMessage("Users deleted successfully.");
    };

    const check_all = (is_checked) => {
        if (is_checked) {
            ids.value = contacts_list.value.map((d) => {
                return d.id;
            });
        } else {
            clear_selection();
        }
    };

    const clear_selection = () => {
        ids.value = [];
    };

    const showMessage = (msg = "", type = "success") => {
        const toast = window.Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: "10px 20px",
        });
    };
</script>
