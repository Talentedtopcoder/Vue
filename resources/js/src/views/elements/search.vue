<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Search</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#searchLive" class="nav-link">Live</a>
                    <a href="#searchOverlay" class="nav-link">Overlay</a>
                    <a href="#searchBoxed" class="nav-link">Boxed</a>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="searchLive" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Live Search</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center tags-content">
                            <div class="row">
                                <div class="col-lg-8 col-md-8 col-sm-9 filtered-list-search-live mx-auto">
                                    <form class="form-inline my-2 my-lg-0 justify-content-center" @submit.prevent="search">
                                        <div class="w-100">
                                            <input v-model="search_text" class="form-control w-100 product-search br-30" placeholder="Search Attendees..." @keyup="search" />
                                            <button type="submit" class="btn btn-primary">
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
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-lg-12">
                                    <div class="searchable-container-live">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="searchable-items">
                                                    <template v-if="search_items.length">
                                                        <div v-for="(item, index) in search_items" class="items" :key="index">
                                                            <div class="user-profile">
                                                                <img :src="'/assets/images/' + item.thumb" alt="avatar" />
                                                            </div>
                                                            <div class="user-name">
                                                                <p class="">{{ item.name }}</p>
                                                            </div>
                                                            <div class="user-email">
                                                                <p>{{ item.email }}</p>
                                                            </div>
                                                            <div class="user-status">
                                                                <span :class="item.status_class">{{ item.status }}</span>
                                                            </div>
                                                            <div class="action-btn">
                                                                <p>
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
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </template>
                                                    <template v-else> No data found. </template>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;form class=&quot;form-inline my-2 my-lg-0 justify-content-center&quot; @submit.prevent=&quot;search&quot;&gt;
    &lt;div class=&quot;w-100&quot;&gt;
        &lt;input v-model=&quot;search_text&quot; class=&quot;form-control w-100 product-search br-30&quot; placeholder=&quot;Search Attendees...&quot; @keyup=&quot;search&quot; /&gt;
        &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
        &lt;/button&gt;
    &lt;/div&gt;
&lt;/form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="searchOverlay" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Overlay</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center tags-content">
                            <div class="demo-search-overlay" :class="{ show: is_show_search_overlay }" @click="is_show_search_overlay = !is_show_search_overlay"></div>

                            <div class="full-search search-form-overlay" :class="{ 'input-focused': is_show_search_overlay }" @click="is_show_search_overlay = !is_show_search_overlay">
                                <form class="form-inline form-inline search mt-lg-0">
                                    <span @click="$event.stopPropagation()">
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
                                    </span>
                                    <div class="search-bar">
                                        <input class="form-control search-form-control ms-lg-auto" placeholder="Search..." @click="$event.stopPropagation()" />
                                    </div>
                                </form>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;demo-search-overlay&quot; :class=&quot;{ show: is_show_search_overlay }&quot; @click=&quot;is_show_search_overlay = !is_show_search_overlay&quot;&gt;&lt;/div&gt;

&lt;div class=&quot;full-search search-form-overlay&quot; :class=&quot;{ 'input-focused': is_show_search_overlay }&quot; @click=&quot;is_show_search_overlay = !is_show_search_overlay&quot;&gt;
    &lt;form class=&quot;form-inline form-inline search mt-lg-0&quot;&gt;
        &lt;span @click=&quot;$event.stopPropagation()&quot;&gt;
            &lt;svg
                xmlns=&quot;http://www.w3.org/2000/svg&quot;
                width=&quot;24&quot;
                height=&quot;24&quot;
                viewBox=&quot;0 0 24 24&quot;
                fill=&quot;none&quot;
                stroke=&quot;currentColor&quot;
                stroke-width=&quot;2&quot;
                stroke-linecap=&quot;round&quot;
                stroke-linejoin=&quot;round&quot;
                class=&quot;feather feather-search&quot;
            &gt;
                &lt;circle cx=&quot;11&quot; cy=&quot;11&quot; r=&quot;8&quot;&gt;&lt;/circle&gt;
                &lt;line x1=&quot;21&quot; y1=&quot;21&quot; x2=&quot;16.65&quot; y2=&quot;16.65&quot;&gt;&lt;/line&gt;
            &lt;/svg&gt;
        &lt;/span&gt;
        &lt;div class=&quot;search-bar&quot;&gt;
            &lt;input class=&quot;form-control search-form-control ms-lg-auto&quot; placeholder=&quot;Search...&quot; @click=&quot;$event.stopPropagation()&quot; /&gt;
        &lt;/div&gt;
    &lt;/form&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="searchBoxed" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Search Box</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center tags-content">
                            <div class="input-group search-input-group-style input-group mb-3">
                                <span class="input-group-text">
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
                                </span>
                                <input placeholder="Let's find your question in fast way" class="form-control" />
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;input-group search-input-group-style input-group mb-3&quot;&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/span&gt;
    &lt;input placeholder=&quot;Let's find your question in fast way&quot; class=&quot;form-control&quot; /&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from "vue";

    import "../../assets/sass/scrollspyNav.scss";
    import "../../assets/sass/elements/search.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Search" });

    const code_arr = ref([]);
    const all_items = ref([]);
    const search_items = ref([]);
    const search_text = ref("");
    const is_show_search_overlay = ref(false);

    onMounted(() => {
        all_items.value = [
            { thumb: "profile-5.jpeg", name: "Alan Green", email: "alan@mail.com", status: "Active", status_class: "badge badge-primary" },
            { thumb: "profile-11.jpeg", name: "Linda Nelson", email: "Linda@mail.com", status: "Busy", status_class: "badge badge-danger" },
            { thumb: "profile-12.jpeg", name: "Lila Perry", email: "Lila@mail.com", status: "Closed", status_class: "badge badge-warning" },
            { thumb: "profile-3.jpeg", name: "Andy King", email: "Andy@mail.com", status: "Active", status_class: "badge badge-primary" },
            { thumb: "profile-15.jpeg", name: "Jesse Cory", email: "Jesse@mail.com", status: "Busy", status_class: "badge badge-danger" },
        ];
        search_items.value = all_items.value;
    });

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };

    const initTooltip = () => {
        setTimeout(() => {
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map((tooltipTriggerEl) => {
                return new window.bootstrap.Tooltip(tooltipTriggerEl);
            });
        });
    };

    const search = () => {
        let value = search_text.value ? search_text.value.toLowerCase() : search_text.value;
        search_items.value = all_items.value.filter((d) => {
            return d.name.toLowerCase().includes(value) || d.email.toLowerCase().includes(value) || d.status.toLowerCase().includes(value);
        });
    };
</script>
