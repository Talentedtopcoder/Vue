<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Lightbox</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-12">
                <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                    Documentation:
                    <a target="_blank" href="https://www.npmjs.com/package/vue-easy-lightbox" class="text-info"> https://www.npmjs.com/package/vue-easy-lightbox </a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 layout-spacing layout-top-spacing">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Lightbox</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div>
                            <div class="radio-info mb-4 custom-control custom-radio">
                                <input v-model="allControls" type="radio" class="custom-control-input" :value="true" id="rdo1" @change="initData()" />
                                <label class="custom-control-label" for="rdo1"> All controls<br /><span>caption, slideshow, thumbnails and fullscreen buttons, tap to toggle controls</span></label>
                            </div>
                            <div class="radio-info mb-4 custom-control custom-radio">
                                <input v-model="allControls" type="radio" class="custom-control-input" :value="false" id="rdo2" @change="initData()" />
                                <label class="custom-control-label" for="rdo2"> Minimal<br /><span>no caption, no slideshow, no thumbnails, no fullscreen, tap to close</span></label>
                            </div>
                        </div>

                        <vue-easy-lightbox
                            :visible="visible"
                            :imgs="items"
                            :index="index"
                            scrollDisabled
                            moveDisabled
                            loop
                            :class="{ minimal: !allControls }"
                            @hide="
                                index = null;
                                visible = false;
                            "
                        ></vue-easy-lightbox>
                        <div class="demo-gallery">
                            <a
                                v-for="(item, i) in items"
                                :key="i"
                                href="javascript:;"
                                :class="`img-${i + 1}`"
                                @click="
                                    index = i;
                                    visible = true;
                                "
                            >
                                <img :src="item.src" alt="image-gallery" />
                            </a>
                        </div>

                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from "vue";
    import VueEasyLightbox from "vue-easy-lightbox";

    import "../../assets/sass/components/custom-lightbox.scss";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Lightbox" });

    const code_arr = ref([]);
    const index = ref(null);
    const allControls = ref(true);
    const visible = ref(false);
    const items = ref([]);

    onMounted(() => {
        initData();
    });

    const initData = () => {
        if (allControls.value) {
            items.value = [
                {
                    src: "/assets/images/lightbox-1.jpg",
                    title: "This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.",
                    description: "Photo: Samuel Rohl",
                },
                {
                    src: "/assets/images/lightbox-8.jpeg",
                    title: "This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.",
                    description: "Photo: Samuel Rohl",
                },
                {
                    src: "/assets/images/lightbox-3.jpeg",
                    title: "Dummy caption. It's Greek to you. Unless, of course, you're Greek, in which case, it really makes no sense.",
                    description: "Photo: Michael Hull",
                },
                {
                    src: "/assets/images/lightbox-2.jpeg",
                    thumb: "/assets/images/lightbox-2.jpeg",
                    title: "This is dummy caption.",
                    description: "Photo: Folkert Gorter",
                },
                {
                    src: "/assets/images/lightbox-14.jpeg",
                    title: "It's a dummy caption. He who searches for meaning here will be sorely disappointed.",
                    description: "Photo: Thomas Lefebvre",
                },
                {
                    src: "/assets/images/lightbox-15.jpeg",
                    title: "It's a dummy caption. He who searches for meaning here will be sorely disappointed.",
                    description: "Photo: Thomas Lefebvre",
                },
            ];
        } else {
            items.value = [
                { src: "/assets/images/lightbox-1.jpg" },
                { src: "/assets/images/lightbox-8.jpeg" },
                { src: "/assets/images/lightbox-3.jpeg" },
                { src: "/assets/images/lightbox-2.jpeg" },
                { src: "/assets/images/lightbox-14.jpeg" },
                { src: "/assets/images/lightbox-15.jpeg" },
            ];
        }
    };

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
