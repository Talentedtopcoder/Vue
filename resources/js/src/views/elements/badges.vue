<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Badges</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#badgeOutline" class="nav-link">Outline</a>
                    <a href="#badgePills" class="nav-link">Pills</a>
                    <a href="#badgeClassic" class="nav-link">Classic</a>
                    <a href="#badgeWith-headings" class="active nav-link">With Headings</a>
                    <a href="#badgeCustom" class="active nav-link">Custom</a>
                </div>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        Documentation:
                        <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/badge" class="text-info"> https://getbootstrap.com/docs/5.0/components/badge </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="badgeDefault" class="col-lg-12 mx-auto layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Badges</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <span class="badge badge-primary me-1">Primary</span>
                            <span class="badge badge-info me-1">Info</span>
                            <span class="badge badge-success me-1">Success</span>
                            <span class="badge badge-secondary me-1">Secondary</span>
                            <span class="badge badge-warning me-1">Warning</span>
                            <span class="badge badge-danger me-1">Danger</span>
                            <span class="badge badge-dark me-1">Dark</span>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;span class=&quot;badge badge-primary me-1&quot;&gt;Primary&lt;/span&gt;
&lt;span class=&quot;badge badge-info me-1&quot;&gt;Info&lt;/span&gt;
&lt;span class=&quot;badge badge-success me-1&quot;&gt;Success&lt;/span&gt;
&lt;span class=&quot;badge badge-secondary me-1&quot;&gt;Secondary&lt;/span&gt;
&lt;span class=&quot;badge badge-warning me-1&quot;&gt;Warning&lt;/span&gt;
&lt;span class=&quot;badge badge-danger me-1&quot;&gt;Danger&lt;/span&gt;
&lt;span class=&quot;badge badge-dark me-1&quot;&gt;Dark&lt;/span&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="badgeOutline" class="col-lg-12 mx-auto layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Outline</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <span class="badge outline-badge-primary me-1">Primary</span>
                            <span class="badge outline-badge-info me-1">Info</span>
                            <span class="badge outline-badge-success me-1">Success</span>
                            <span class="badge outline-badge-secondary me-1">Secondary</span>
                            <span class="badge outline-badge-warning me-1">Warning</span>
                            <span class="badge outline-badge-danger me-1">Danger</span>
                            <span class="badge outline-badge-dark">Dark</span>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>
                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;span class=&quot;badge outline-badge-primary me-1&quot;&gt;Primary&lt;/span&gt;
&lt;span class=&quot;badge outline-badge-info me-1&quot;&gt;Info&lt;/span&gt;
&lt;span class=&quot;badge outline-badge-success me-1&quot;&gt;Success&lt;/span&gt;
&lt;span class=&quot;badge outline-badge-secondary me-1&quot;&gt;Secondary&lt;/span&gt;
&lt;span class=&quot;badge outline-badge-warning me-1&quot;&gt;Warning&lt;/span&gt;
&lt;span class=&quot;badge outline-badge-danger me-1&quot;&gt;Danger&lt;/span&gt;
&lt;span class=&quot;badge outline-badge-dark&quot;&gt;Dark&lt;/span&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="badgePills" class="col-lg-12 mx-auto layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Pills</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="row mb-4">
                                <div class="col-6">
                                    <span class="badge badge-pills badge-primary">Primary</span>
                                </div>
                                <div class="col-6">
                                    <span class="badge badge-pills outline-badge-primary">Primary</span>
                                </div>
                            </div>
                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></button>
                                <div v-if="code_arr.includes('code7')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;span class=&quot;badge badge-pills badge-primary&quot;&gt;Primary&lt;/span&gt;
&lt;span class=&quot;badge badge-pills outline-badge-primary&quot;&gt;Primary&lt;/span&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="badgeClassic" class="col-lg-12 mx-auto layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Classic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="row mb-4">
                                <div class="col-6">
                                    <span class="badge badge-primary badge-classic">Primary</span>
                                </div>
                                <div class="col-6">
                                    <span class="badge outline-badge-primary badge-classic">Primary</span>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>
                                <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;span class=&quot;badge badge-primary badge-classic&quot;&gt;Primary&lt;/span&gt;
&lt;span class=&quot;badge outline-badge-primary badge-classic&quot;&gt;Primary&lt;/span&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="badgeWith-headings" class="col-lg-12 mx-auto layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Badges with Heading</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <p class="mb-4">Badges scale to match the size of the immediate parent element by using relative font sizing and em units.</p>
                                </div>
                            </div>
                            <h1>Example heading <span class="badge badge-primary">Primary</span></h1>
                            <h2>Example heading <span class="badge badge-success">success</span></h2>
                            <h3>Example heading <span class="badge badge-info">info</span></h3>
                            <h4>Example heading <span class="badge badge-warning">warning</span></h4>
                            <h5>Example heading <span class="badge badge-danger">danger</span></h5>
                            <h6>Example heading <span class="badge badge-dark">dark</span></h6>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>
                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;h1&gt;Example heading &lt;span class=&quot;badge badge-primary&quot;&gt;Primary&lt;/span&gt;&lt;/h1&gt;
&lt;h2&gt;Example heading &lt;span class=&quot;badge badge-success&quot;&gt;success&lt;/span&gt;&lt;/h2&gt;
&lt;h3&gt;Example heading &lt;span class=&quot;badge badge-info&quot;&gt;info&lt;/span&gt;&lt;/h3&gt;
&lt;h4&gt;Example heading &lt;span class=&quot;badge badge-warning&quot;&gt;warning&lt;/span&gt;&lt;/h4&gt;
&lt;h5&gt;Example heading &lt;span class=&quot;badge badge-danger&quot;&gt;danger&lt;/span&gt;&lt;/h5&gt;
&lt;h6&gt;Example heading &lt;span class=&quot;badge badge-dark&quot;&gt;dark&lt;/span&gt;&lt;/h6&gt;
 </pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="badgeCustom" class="col-lg-12 mx-auto layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Custom Badges</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button class="btn btn-primary position-relative mt-3 mb-3 ms-2">
                                <span
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-facebook"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                    Facebook</span
                                >
                                <span class="badge badge-danger counter">9</span>
                            </button>

                            <button class="btn btn-info position-relative mt-3 mb-3 ms-2">
                                <span>Twitter</span>
                                <span class="badge badge-danger counter">4</span>
                            </button>

                            <button class="btn btn-secondary position-relative mt-3 mb-3 ms-2">
                                <span
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-settings"
                                    >
                                        <circle cx="12" cy="12" r="3"></circle>
                                        <path
                                            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                                        ></path>
                                    </svg>
                                </span>
                                <span class="badge badge-danger counter">8</span>
                            </button>

                            <button class="btn btn-dark mt-3 mb-3 ms-2">Notifications<span class="badge badge-light ms-2">4</span></button>

                            <span class="badge badge-warning badge-chip mt-3 mb-3 ms-2 position-relative">
                                <img src="/assets/images/delete-user-4.jpeg" alt="Person" width="96" height="96" />
                                <span class="text">John Doe</span>
                            </span>

                            <span class="badge badge-danger badge-chip mt-3 mb-3 ms-2">
                                <img src="/assets/images/delete-user-17.jpeg" alt="Person" width="96" height="96" />
                                <span class="text">John Doe</span>
                                <span class="closebtn ps-2">&times;</span>
                            </span>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>
                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button class=&quot;btn btn-primary position-relative mt-3 mb-3 ms-2&quot;&gt;
    &lt;span&gt;
        &lt;svg&gt; ... &lt;/svg&gt;
        Facebook
    &lt;/span&gt;
    &lt;span class=&quot;badge badge-danger counter&quot;&gt;9&lt;/span&gt;
&lt;/button&gt;

&lt;button class=&quot;btn btn-info position-relative mt-3 mb-3 ms-2&quot;&gt;
    &lt;span&gt;Twitter&lt;/span&gt;
    &lt;span class=&quot;badge badge-danger counter&quot;&gt;4&lt;/span&gt;
&lt;/button&gt;

&lt;button class=&quot;btn btn-secondary position-relative mt-3 mb-3 ms-2&quot;&gt;
    &lt;span&gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/span&gt;
    &lt;span class=&quot;badge badge-danger counter&quot;&gt;8&lt;/span&gt;
&lt;/button&gt;

&lt;button class=&quot;btn btn-dark mt-3 mb-3 ms-2&quot;&gt;Notifications&lt;span class=&quot;badge badge-light ms-2&quot;&gt;4&lt;/span&gt;&lt;/button&gt;

&lt;span class=&quot;badge badge-warning badge-chip mt-3 mb-3 ms-2 position-relative&quot;&gt;
    &lt;img src=&quot;/assets/images/delete-user-4.jpeg&quot; alt=&quot;Person&quot; width=&quot;96&quot; height=&quot;96&quot; /&gt;
    &lt;span class=&quot;text&quot;&gt;John Doe&lt;/span&gt;
&lt;/span&gt;

&lt;span class=&quot;badge badge-danger badge-chip mt-3 mb-3 ms-2&quot;&gt;
    &lt;img src=&quot;/assets/images/delete-user-17.jpeg&quot; alt=&quot;Person&quot; width=&quot;96&quot; height=&quot;96&quot; /&gt;
    &lt;span class=&quot;text&quot;&gt;John Doe&lt;/span&gt;
    &lt;span class=&quot;closebtn ps-2&quot;&gt;&amp;times;&lt;/span&gt;
&lt;/span&gt;
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
    import { ref } from "vue";
    import "../../assets/sass/scrollspyNav.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Badges" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
