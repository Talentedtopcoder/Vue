<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Pages</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Contact Us</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="contact-us layout-top-spacing">
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-4 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        Documentation:
                        <a target="_blank" href="https://www.npmjs.com/package/vue3-google-map" class="text-info"> https://www.npmjs.com/package/vue3-google-map </a>
                    </div>
                </div>
            </div>

            <div class="cu-contact-section">
                <div id="basic_map1" class="overflow-hidden">
                    <GoogleMap api-key="YOUR_GOOGLE_MAPS_API_KEY" :center="myLatLng" :zoom="8" :minZoom="5" :maxZoom="8" :disableDefaultUI="true" style="width: 100%; height: 100%">
                        <Marker :key="index" v-for="(m, index) in markers" :options="{ position: myLatLng, icon: m.icon }" />
                    </GoogleMap>
                </div>
                <div class="contact-form">
                    <perfect-scrollbar tag="form">
                        <div class="cu-section-header">
                            <h4>Contact Us</h4>
                            <p>
                                Submit your queries and we will get back <br />
                                to you as soon as possible.
                            </p>
                        </div>

                        <h4>Send us a Message</h4>
                        <div class="row mb-4">
                            <div class="col-sm-12 col-12 input-fields">
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
                                    class="feather feather-user"
                                >
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <input type="text" placeholder="Name" class="form-control" />
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-sm-12 col-12 input-fields">
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
                                    class="feather feather-at-sign"
                                >
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                                </svg>
                                <input type="email" placeholder="Email" class="form-control" />
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-sm-12 col-12 input-fields">
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
                                    class="feather feather-phone"
                                >
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                    ></path>
                                </svg>
                                <input type="text" placeholder="Phone" class="form-control" />
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-sm-12 col-12">
                                <p class="">Preffered method of communication</p>
                            </div>
                            <div class="col-sm-12 col-12 input-fields">
                                <div role="radiogroup" class="bv-no-focus-ring">
                                    <div class="radio-primary custom-control custom-control-inline custom-radio">
                                        <input v-model="rdo_demo" type="radio" class="custom-control-input" value="email" id="rdoEmail" name="communication" />
                                        <label class="custom-control-label" for="rdoEmail"> Email </label>
                                    </div>
                                    <div class="radio-primary custom-control custom-control-inline custom-radio">
                                        <input v-model="rdo_demo" type="radio" class="custom-control-input" value="phone" id="rdoPhone" name="communication" />
                                        <label class="custom-control-label" for="rdoPhone"> Phone </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group input-fields">
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
                                        class="feather feather-mail"
                                    >
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    <textarea placeholder="Message" rows="4" class="form-control" style="height: 108px"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col text-sm-start text-center">
                                <button type="submit" class="btn btn-primary mt-4">Submit</button>
                            </div>
                        </div>
                    </perfect-scrollbar>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import "../../assets/sass/pages/contact_us.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { GoogleMap, Marker } from "vue3-google-map";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Contact Form" });

    const rdo_demo = ref("phone");
    const myLatLng = { lat: 48.864716, lng: 2.349014 };
    const markers = [
        {
            lat: 48.864716,
            lng: 2.349014,
            content: { content: "Hello World!" },
            icon: { url: "/assets/images/contact-us-map-pin.svg" },
        },
    ];
</script>
