<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Tooltips</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#tooltipDefault" class="nav-link">Default</a>
                    <a href="#tooltipDirections" class="nav-link">Directions</a>
                    <a href="#tooltipDismissible" class="nav-link">HTML</a>
                    <a href="#tooltipOptions" class="nav-link">Options</a>
                    <a href="#tooltipColors" class="nav-link">Colors</a>
                </div>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        Documentation: <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/tooltips" class="text-info"> https://getbootstrap.com/docs/5.0/components/tooltips </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="tooltipDefault" class="col-xl-12 col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Tooltips</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <a href="javascript:;" class="btn btn-primary mb-3 me-2" data-bs-toggle="tooltip" title="Tooltip using ANCHOR tag">Link</a>
                            <button type="button" class="btn btn-success mb-3 me-2" data-bs-toggle="tooltip" title="Tooltip using BUTTON tag">Button</button>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Tooltip --&gt;
&lt;a href=&quot;javascript:;&quot; class=&quot;btn btn-primary mb-3 me-2&quot; data-bs-toggle=&quot;tooltip&quot; title=&quot;Tooltip using ANCHOR tag&quot;&gt;Link&lt;/a&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-success mb-3 me-2&quot; data-bs-toggle=&quot;tooltip&quot; title=&quot;Tooltip using BUTTON tag&quot;&gt;Button&lt;/button&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tooltipDirections" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Placement</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body tooltip-section">
                            <div class="row">
                                <div class="col-lg-6">
                                    <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" class="btn btn-info mb-4" title="Tooltip on top">Tooltip on top</button>
                                </div>
                                <div class="col-lg-6">
                                    <button type="button" data-bs-toggle="tooltip" data-bs-placement="right" class="btn btn-danger mb-4" title="Tooltip on right">Tooltip on right</button>
                                </div>
                                <div class="col-lg-6">
                                    <button type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" class="btn btn-warning mb-4" title="Tooltip on bottom">Tooltip on bottom</button>
                                </div>
                                <div class="col-lg-6">
                                    <button type="button" data-bs-toggle="tooltip" data-bs-placement="left" class="btn btn-secondary mb-4" title="Tooltip on left">Tooltip on left</button>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- TOP --&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; class=&quot;btn btn-info mb-4&quot; title=&quot;Tooltip on top&quot;&gt;Tooltip on top&lt;/button&gt;

&lt;!-- RIGHT --&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;right&quot; class=&quot;btn btn-danger mb-4&quot; title=&quot;Tooltip on right&quot;&gt;Tooltip on right&lt;/button&gt;

&lt;!-- BOTTOM --&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;bottom&quot; class=&quot;btn btn-warning mb-4&quot; title=&quot;Tooltip on bottom&quot;&gt;Tooltip on bottom&lt;/button&gt;

&lt;!-- LEFT --&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;left&quot; class=&quot;btn btn-secondary mb-4&quot; title=&quot;Tooltip on left&quot;&gt;Tooltip on left&lt;/button&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tooltipDismissible" class="col-xl-12 col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>HTML</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-dark" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltip with HTML</button>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Dismissible --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-html=&quot;true&quot; title=&quot;&lt;em&gt;Tooltip&lt;/em&gt; &lt;u&gt;with&lt;/u&gt; &lt;b&gt;HTML&lt;/b&gt;&quot;&gt;Tooltip with HTML&lt;/button&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tooltipOptions" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Options</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body align-center basic-tooltip">
                            <div class="row">
                                <div class="col-lg-6 mb-4">
                                    <button type="button" data-bs-toggle="tooltip" data-bs-trigger="click" class="btn btn-primary mt-1" title="On Click">On Click</button>
                                </div>

                                <div class="col-lg-6 mb-4">
                                    <button type="button" data-bs-toggle="tooltip" data-bs-trigger="focus" class="btn btn-secondary mt-1" title="On Focus">On Focus</button>
                                </div>

                                <div class="col-lg-6 mb-4">
                                    <button type="button" data-bs-toggle="tooltip" data-bs-delay="1000" class="btn btn-info mt-1" title="Delay 1s">Delay</button>
                                </div>

                                <div class="col-lg-6 mb-4">
                                    <button type="button" data-bs-toggle="tooltip" data-bs-animation="false" class="btn btn-dark mt-1" title="Disable Animation">Disabled Animation</button>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- On Click --&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-trigger=&quot;click&quot; class=&quot;btn btn-primary mt-1&quot; title=&quot;On Click&quot;&gt;On Click&lt;/button&gt;

&lt;!-- On Focus --&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-trigger=&quot;focus&quot; class=&quot;btn btn-secondary mt-1&quot; title=&quot;On Focus&quot;&gt;On Focus&lt;/button&gt;

&lt;!-- Delay --&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-delay=&quot;1000&quot; class=&quot;btn btn-info mt-1&quot; title=&quot;Delay 1s&quot;&gt;Delay&lt;/button&gt;

&lt;!-- Disabled Animation --&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-animation=&quot;false&quot; class=&quot;btn btn-dark mt-1&quot; title=&quot;Disable Animation&quot;&gt;Disable Animation&lt;/button&gt;


</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tooltipColors" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Colors</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body align-center">
                            <button type="button" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary" class="btn btn-primary mx-1 my-1" title="Primary">Primary</button>
                            <button type="button" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-success" class="btn btn-success mx-1 my-1" title="Success">Success</button>
                            <button type="button" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-info" class="btn btn-info mx-1 my-1" title="Info">Info</button>
                            <button type="button" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-danger" class="btn btn-danger mx-1 my-1" title="Danger">Danger</button>
                            <button type="button" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-warning" class="btn btn-warning mx-1 my-1" title="Warning">Warning</button>
                            <button type="button" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-secondary" class="btn btn-secondary mx-1 my-1" title="Secondary">Secondary</button>
                            <button type="button" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" class="btn btn-dark mx-1 my-1" title="Dark">Dark</button>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Colors --&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-custom-class=&quot;tooltip-primary&quot; class=&quot;btn btn-primary mx-1 my-1&quot; title=&quot;Primary&quot;&gt;Primary&lt;/button&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-custom-class=&quot;tooltip-success&quot; class=&quot;btn btn-success mx-1 my-1&quot; title=&quot;Success&quot;&gt;Success&lt;/button&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-custom-class=&quot;tooltip-info&quot; class=&quot;btn btn-info mx-1 my-1&quot; title=&quot;Info&quot;&gt;Info&lt;/button&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-custom-class=&quot;tooltip-danger&quot; class=&quot;btn btn-danger mx-1 my-1&quot; title=&quot;Danger&quot;&gt;Danger&lt;/button&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-custom-class=&quot;tooltip-warning&quot; class=&quot;btn btn-warning mx-1 my-1&quot; title=&quot;Warning&quot;&gt;Warning&lt;/button&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-custom-class=&quot;tooltip-secondary&quot; class=&quot;btn btn-secondary mx-1 my-1&quot; title=&quot;Secondary&quot;&gt;Secondary&lt;/button&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-custom-class=&quot;tooltip-dark&quot; class=&quot;btn btn-dark mx-1 my-1&quot; title=&quot;Dark&quot;&gt;Dark&lt;/button&gt;
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
    import "../../assets/sass/elements/tooltip.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Tooltips" });

    const code_arr = ref([]);

    onMounted(() => {
        initTooltip();
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
</script>
