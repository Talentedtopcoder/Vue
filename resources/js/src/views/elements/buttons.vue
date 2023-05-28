<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Buttons</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#buttonsDefault" class="nav-link">Default</a>
                    <a href="#buttonsRounded" class="nav-link">Rounded</a>
                    <a href="#buttonsSolid" class="nav-link">Solid</a>
                    <a href="#buttonsOutline" class="nav-link">Outline</a>
                    <a href="#buttonsSizes" class="nav-link">Sizes</a>
                    <a href="#buttonsIcons" class="nav-link">Icons</a>
                    <a href="#buttonsBlock" class="nav-link">Block</a>
                </div>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        Documentation: <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/buttons" class="text-info"> https://getbootstrap.com/docs/5.0/components/buttons </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="buttonsDefault" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Default</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">
                                <div class="col-lg-6">
                                    <button type="button" class="btn btn-primary mb-2">Primary</button>
                                </div>

                                <div class="col-lg-6">
                                    <button type="button" class="btn btn-outline-primary mb-2">Primary</button>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary mb-2&quot;&gt;Primary&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-primary mb-2&quot;&gt;Primary&lt;/button&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="buttonsRounded" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Rounded</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">
                                <div class="col-lg-6">
                                    <button type="button" class="btn btn-primary rounded-pill mb-2">Primary</button>
                                </div>

                                <div class="col-lg-6">
                                    <button type="button" class="btn btn-outline-primary rounded-pill mb-2">Primary</button>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary rounded-pill mb-2&quot;&gt;Primary&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-primary rounded-pill mb-2&quot;&gt;Primary&lt;/button&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="buttonsSolid" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Solid</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <button type="button" class="btn btn-primary mb-2 me-1">Primary</button>
                            <button type="button" class="btn btn-info mb-2 me-1">Info</button>
                            <button type="button" class="btn btn-success mb-2 me-1">Success</button>
                            <button type="button" class="btn btn-warning mb-2 me-1">Warning</button>
                            <button type="button" class="btn btn-danger mb-2 me-1">Danger</button>
                            <button type="button" class="btn btn-secondary mb-2 me-1">Secondary</button>
                            <button type="button" class="btn btn-dark mb-2">Dark</button>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>

&lt;!-- Primary --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary mb-2 me-1&quot;&gt;Primary&lt;/button&gt;

&lt;!-- Info --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-info mb-2 me-1&quot;&gt;Info&lt;/button&gt;

&lt;!-- Success --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-success mb-2 me-1&quot;&gt;Success&lt;/button&gt;

&lt;!-- Warning --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-warning mb-2 me-1&quot;&gt;Warning&lt;/button&gt;

&lt;!-- Danger --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-danger mb-2 me-1&quot;&gt;Danger&lt;/button&gt;

&lt;!-- Secondary --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary mb-2 me-1&quot;&gt;Secondary&lt;/button&gt;

&lt;!-- Dark --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-dark mb-2 me-1&quot;&gt;Dark&lt;/button&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="buttonsOutline" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Outline</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <button type="button" class="btn btn-outline-primary mb-2 me-1">Primary</button>
                            <button type="button" class="btn btn-outline-info mb-2 me-1">Info</button>
                            <button type="button" class="btn btn-outline-success mb-2 me-1">Success</button>
                            <button type="button" class="btn btn-outline-warning mb-2 me-1">Warning</button>
                            <button type="button" class="btn btn-outline-danger mb-2 me-1">Danger</button>
                            <button type="button" class="btn btn-outline-secondary mb-2 me-1">Secondary</button>
                            <button type="button" class="btn btn-outline-dark mb-2">Dark</button>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>

&lt;!-- Primary --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-primary mb-2 me-1&quot;&gt;Primary&lt;/button&gt;

&lt;!-- Info --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-info mb-2 me-1&quot;&gt;Info&lt;/button&gt;

&lt;!-- Success --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-success mb-2 me-1&quot;&gt;Success&lt;/button&gt;

&lt;!-- Warning --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-warning mb-2 me-1&quot;&gt;Warning&lt;/button&gt;

&lt;!-- Danger --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-danger mb-2 me-1&quot;&gt;Danger&lt;/button&gt;

&lt;!-- Secondary --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-secondary mb-2 me-1&quot;&gt;Secondary&lt;/button&gt;

&lt;!-- Dark --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-dark mb-2 me-1&quot;&gt;Dark&lt;/button&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="buttonsSizes" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Button Sizes</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary btn-lg mb-4 me-2">Large button</button>
                            <button type="button" class="btn btn-secondary mb-4 me-2">Default button</button>
                            <button type="button" class="btn btn-warning btn-sm mb-4 me-2">Small button</button>
                            <button type="button" class="btn btn-primary btn-sm mb-4 me-2" disabled>Disabled Button</button>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-lg mb-4 me-2&quot;&gt;Large button&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary mb-4 me-2&quot;&gt;Default button&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-warning btn-sm mb-4 me-2&quot;&gt;Small button&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-sm mb-4 me-2&quot; disabled&gt;Disabled Button&lt;/button&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="buttonsIcons" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Button with Icons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary mb-2 me-2">
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
                                    class="feather feather-settings me-1"
                                >
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <path
                                        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                                    ></path>
                                </svg>
                                Left
                            </button>
                            <button type="button" class="btn btn-warning rounded-pill mb-2 me-2">
                                Right
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
                                    class="feather feather-edit-2 ms-1"
                                >
                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                </svg>
                            </button>
                            <button type="button" class="btn btn-danger mb-2 me-2">
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
                                    class="feather feather-download"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </button>
                            <button type="button" class="btn btn-dark mb-2 me-2 rounded-circle">
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
                                    class="feather feather-sun"
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
                            </button>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary mb-2 me-2&quot;&gt;
    &lt;svg&gt; ... &lt;/svg&gt;
    Left
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-warning rounded-pill mb-2 me-2&quot;&gt;
    Right
    &lt;svg&gt; ... &lt;/svg&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-danger mb-2 me-2&quot;&gt;
    &lt;svg&gt; ... &lt;/svg&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-dark mb-2 me-2 rounded-circle&quot;&gt;
    &lt;svg&gt; ... &lt;/svg&gt;
&lt;/button&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="buttonsBlock" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Block Buttons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary w-100 mb-4 me-2">Button</button>
                            <button type="submit" class="btn btn-info w-100 mb-4 me-2">Button</button>
                            <a href="javascript:;" class="btn btn-success w-100 mb-4 me-2">Button</a>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></button>
                                <div v-if="code_arr.includes('code7')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary w-100 mb-4 me-2&quot;&gt;Button&lt;/button&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-info w-100 mb-4 me-2&quot;&gt;Button&lt;/button&gt;
&lt;a href=&quot;javascript:;&quot; class=&quot;btn btn-success w-100 mb-4 me-2&quot;&gt;Button&lt;/a&gt;
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
    useMeta({ title: "Buttons" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
