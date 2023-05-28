<template>
    <div>
        <div class="overlay-setting" :class="{ show: isOpen }" @click="isOpen = !isOpen"></div>

        <div class="app-settings" :class="{ active: isOpen }">
            <a href="javascript:;" id="settingbutton" class="setting" @click="isOpen = !isOpen">
                <h5 class="mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path
                            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                        ></path>
                    </svg>
                </h5>
            </a>
            <perfect-scrollbar class="sidbarchat p-3" tag="div">
                <a class="btn-close" href="javascript:;" @click="isOpen = !isOpen"> </a>
                <div class="text-center">
                    <img src="/assets/images/features_overview.svg" alt="..." class="img-fluid" />
                </div>
                <h5 class="mb-0 text-center">TEMPLATE CUSTOMIZER</h5>
                <p class="text-center">Set preferences that will be cookied for your live preview demonstration.</p>
                <hr />

                <h6 class="mb-1">Color Scheme</h6>
                <p class="small text-muted mb-3">Overall light or dark presentation.</p>
                <div class="btn-group-toggle row mb-4 mx-0">
                    <div class="text-color radio-primary col-6 ps-0 mb-3 custom-control custom-radio">
                        <input type="radio" id="light_mode" v-model="$store.state.dark_mode" class="custom-control-input" value="light" @change="setTemplateStyle" />
                        <label class="custom-control-label" for="light_mode">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-sun me-2"
                            >
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                            Light Mode
                        </label>
                    </div>
                    <div class="text-color radio-primary col-6 ps-0 mb-3 custom-control custom-radio">
                        <input type="radio" id="dark_mode" v-model="$store.state.dark_mode" class="custom-control-input" value="dark" @change="setTemplateStyle" />
                        <label class="custom-control-label" for="dark_mode">
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
                                class="feather feather-moon me-2"
                            >
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                            Dark Mode
                        </label>
                    </div>
                    <div class="text-color radio-primary col-12 ps-0 custom-control custom-radio">
                        <input type="radio" id="system_mode" v-model="$store.state.dark_mode" class="custom-control-input" value="system" @change="setTemplateStyle" />
                        <label class="custom-control-label" for="system_mode">
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
                                class="feather feather-airplay me-2"
                            >
                                <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                                <polygon points="12 15 17 21 7 21 12 15"></polygon>
                            </svg>
                            System
                        </label>
                    </div>
                </div>
                <h6 class="mb-1">Navigation Position</h6>
                <p class="small text-muted mb-3">Select the primary navigation paradigm for your app.</p>
                <div class="btn-group-toggle row mb-4 mx-0">
                    <div class="text-color radio-primary col-6 ps-0 mb-3 custom-control custom-radio">
                        <input type="radio" id="horizontal" v-model="$store.state.menu_style" class="custom-control-input" value="horizontal" @change="setMenuStyle" />
                        <label class="custom-control-label" for="horizontal">Horizontal</label>
                    </div>
                    <div class="text-color radio-primary col-6 ps-0 mb-3 custom-control custom-radio">
                        <input type="radio" id="vertical" v-model="$store.state.menu_style" class="custom-control-input" value="vertical" @change="setMenuStyle" />
                        <label class="custom-control-label" for="vertical">Vertical</label>
                    </div>
                    <div class="text-color radio-primary col-12 ps-0 mb-3 custom-control custom-radio">
                        <input type="radio" id="collapsible" v-model="$store.state.menu_style" class="custom-control-input" value="collapsible-vertical" @change="setMenuStyle" />
                        <label class="custom-control-label" for="collapsible">Collapsible Vertical</label>
                    </div>
                </div>
                <h6 class="mb-1">Layout Style</h6>
                <p class="small text-muted mb-3">Select the primary Layout Style for your app.</p>
                <div class="btn-group-toggle row mx-0">
                    <div class="text-color radio-primary col-3 ps-0 mb-3 custom-control custom-radio">
                        <input type="radio" id="boxed" v-model="$store.state.layout_style" class="custom-control-input" value="boxed-layout" @change="setLayoutStyle" />
                        <label class="custom-control-label" for="boxed">Box</label>
                    </div>
                    <div class="text-color radio-primary col-5 ps-0 mb-3 custom-control custom-radio">
                        <input type="radio" id="largeboxed" v-model="$store.state.layout_style" class="custom-control-input" value="large-boxed-layout" @change="setLayoutStyle" />
                        <label class="custom-control-label" for="largeboxed">Large box</label>
                    </div>
                    <div class="text-color radio-primary col-4 ps-0 mb-3 custom-control custom-radio">
                        <input type="radio" id="full" v-model="$store.state.layout_style" class="custom-control-input" value="full" @change="setLayoutStyle" />
                        <label class="custom-control-label" for="full">Full</label>
                    </div>
                </div>
            </perfect-scrollbar>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from "vue";

    import { useStore } from "vuex";
    const store = useStore();

    const isOpen = ref(null);
    onMounted(() => {
        setTemplateStyle();
        setMenuStyle();
        setLayoutStyle();
    });

    const setTemplateStyle = () => {
        store.commit("toggleDarkMode", store.state.dark_mode);
    };

    const setMenuStyle = () => {
        store.commit("toggleMenuStyle", store.state.menu_style);
    };

    const setLayoutStyle = () => {
        store.commit("toggleLayoutStyle", store.state.layout_style);
    };
</script>
