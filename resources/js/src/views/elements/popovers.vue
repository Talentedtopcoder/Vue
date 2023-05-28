<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Popovers</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#popoverDefault" class="nav-link">Default</a>
                    <a href="#popoverDirections" class="nav-link">Directions</a>
                    <a href="#popoverDismissible" class="nav-link">Dismissible</a>
                    <a href="#popoverOptions" class="nav-link">Options</a>
                    <a href="#popoverColors" class="nav-link">Colors</a>
                </div>
            </div>

            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        Documentation: <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/popovers" class="text-info"> https://getbootstrap.com/docs/5.0/components/popovers </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="popoverDefault" class="col-xl-12 col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Popover</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <a href="#" target="_self" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Tooltip using ANCHOR tag" class="btn btn-primary mb-3 me-2">Link</a>
                            <button type="button" data-bs-toggle="popover" data-bs-content="Tooltip using BUTTON tag" class="btn btn-success mb-3">Button</button>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;a href=&quot;#&quot; target=&quot;_self&quot; data-bs-toggle=&quot;popover&quot; data-bs-placement=&quot;left&quot; data-bs-content=&quot;Tooltip using ANCHOR tag&quot; class=&quot;btn btn-primary mb-3 me-2&quot;&gt;Link&lt;/a&gt;

&lt;button type=&quot;button&quot; data-bs-toggle=&quot;popover&quot; data-bs-content=&quot;Tooltip using BUTTON tag&quot; class=&quot;btn btn-success mb-3&quot;&gt;Button&lt;/button&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="popoverDirections" class="col-lg-12 layout-spacing">
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
                                    <button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Tooltip on top" class="btn btn-info mb-4 ms-2">Popover on top</button>
                                </div>
                                <div class="col-lg-6">
                                    <button type="button" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Tooltip on right" class="btn btn-danger mb-4 ms-2">Popover on right</button>
                                </div>
                                <div class="col-lg-6">
                                    <button type="button" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Tooltip on bottom" class="btn btn-warning mb-4 ms-2">Popover on bottom</button>
                                </div>
                                <div class="col-lg-6">
                                    <button type="button" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Tooltip on left" class="btn btn-secondary mb-4 ms-2">Popover on left</button>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- TOP --&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;popover&quot; data-bs-placement=&quot;top&quot; data-bs-content=&quot;Tooltip on top&quot; class=&quot;btn btn-info mb-4 ms-2&quot;&gt;Popover on top&lt;/button&gt;

&lt;!-- RIGHT --&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;popover&quot; data-bs-placement=&quot;right&quot; data-bs-content=&quot;Tooltip on right&quot; class=&quot;btn btn-danger mb-4 ms-2&quot;&gt;
    Popover on right
&lt;/button&gt;

&lt;!-- BOTTOM --&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;popover&quot; data-bs-placement=&quot;bottom&quot; data-bs-content=&quot;Tooltip on bottom&quot; class=&quot;btn btn-warning mb-4 ms-2&quot;&gt;
    Popover on bottom
&lt;/button&gt;

&lt;!-- LEFT --&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;popover&quot; data-bs-placement=&quot;left&quot; data-bs-content=&quot;Tooltip on left&quot; class=&quot;btn btn-secondary mb-4 ms-2&quot;&gt;
    Popover on left
&lt;/button&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="popoverDismissible" class="col-xl-12 col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Dismissible popover</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="left" data-bs-content="Lorem ipsum dolor sit." class="btn btn-dark mb-3">Popover on left</button>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;popover&quot; data-bs-trigger=&quot;focus&quot; data-bs-placement=&quot;left&quot; data-bs-content=&quot;Lorem ipsum dolor sit.&quot; class=&quot;btn btn-dark mb-3&quot;&gt;
    Popover on left
&lt;/button&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="popoverOptions" class="col-lg-12 layout-spacing">
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
                                    <button type="button" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="On Hover" class="btn btn-primary">On Hover</button>
                                </div>

                                <div class="col-lg-6 mb-4">
                                    <button type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="On Focus" class="btn btn-secondary">On Focus</button>
                                </div>

                                <div class="col-lg-6 mb-4">
                                    <button type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-delay="1000" data-bs-content="Delay 1s" class="btn btn-info">Delay</button>
                                </div>

                                <div class="col-lg-6 mb-4">
                                    <button type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-animation="false" data-bs-content="Disabled Animation" class="btn btn-dark">Disabled Animation</button>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- On Hover --&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;popover&quot; data-bs-trigger=&quot;hover&quot; data-bs-content=&quot;On Hover&quot; class=&quot;btn btn-primary&quot;&gt;On Hover&lt;/button&gt;

&lt;!-- On Focus --&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;popover&quot; data-bs-trigger=&quot;focus&quot; data-bs-content=&quot;On Focus&quot; class=&quot;btn btn-secondary&quot;&gt;On Focus&lt;/button&gt;

&lt;!-- Delay --&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;popover&quot; data-bs-trigger=&quot;focus&quot; data-bs-delay=&quot;1000&quot; data-bs-content=&quot;Delay 1s&quot; class=&quot;btn btn-info&quot;&gt;Delay&lt;/button&gt;

&lt;!-- Disabled Animation --&gt;
&lt;button type=&quot;button&quot; data-bs-toggle=&quot;popover&quot; data-bs-trigger=&quot;focus&quot; data-bs-animation=&quot;false&quot; data-bs-content=&quot;Disabled Animation&quot; class=&quot;btn btn-dark&quot;&gt;
    Disabled Animation
&lt;/button&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="popoverColors" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Colors</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body align-center">
                            <button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Primary" data-bs-content="Primary popover" data-bs-custom-class="popover-primary" class="btn btn-primary mb-2 mx-1">
                                Primary
                            </button>

                            <button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Success" data-bs-content="Success popover" data-bs-custom-class="popover-success" class="btn btn-success mb-2 mx-1">
                                Success
                            </button>
                            <button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Info" data-bs-content="Info popover" data-bs-custom-class="popover-info" class="btn btn-info mb-2 mx-1">Info</button>
                            <button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Danger" data-bs-content="Danger popover" data-bs-custom-class="popover-danger" class="btn btn-danger mb-2 mx-1">
                                Danger
                            </button>
                            <button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Warning" data-bs-content="Warning popover" data-bs-custom-class="popover-warning" class="btn btn-warning mb-2 mx-1">
                                Warning
                            </button>
                            <button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Secondary" data-bs-content="Secondary popover" data-bs-custom-class="popover-secondary" class="btn btn-secondary mb-2 mx-1">
                                Secondary
                            </button>
                            <button type="button" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Dark" data-bs-content="Dark popover" data-bs-custom-class="popover-dark" class="btn btn-dark mb-2 mx-1">Dark</button>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button
    type=&quot;button&quot;
    data-bs-toggle=&quot;popover&quot;
    data-bs-placement=&quot;top&quot;
    data-bs-title=&quot;Primary&quot;
    data-bs-content=&quot;Primary popover&quot;
    data-bs-custom-class=&quot;popover-primary&quot;
    class=&quot;btn btn-primary mb-2 mx-1&quot;
&gt;
    Primary
&lt;/button&gt;

&lt;button
    type=&quot;button&quot;
    data-bs-toggle=&quot;popover&quot;
    data-bs-placement=&quot;top&quot;
    data-bs-title=&quot;Success&quot;
    data-bs-content=&quot;Success popover&quot;
    data-bs-custom-class=&quot;popover-success&quot;
    class=&quot;btn btn-success mb-2 mx-1&quot;
&gt;
    Success
&lt;/button&gt;
&lt;button
    type=&quot;button&quot;
    data-bs-toggle=&quot;popover&quot;
    data-bs-placement=&quot;top&quot;
    data-bs-title=&quot;Info&quot;
    data-bs-content=&quot;Info popover&quot;
    data-bs-custom-class=&quot;popover-info&quot;
    class=&quot;btn btn-info mb-2 mx-1&quot;
&gt;
    Info
&lt;/button&gt;
&lt;button
    type=&quot;button&quot;
    data-bs-toggle=&quot;popover&quot;
    data-bs-placement=&quot;top&quot;
    data-bs-title=&quot;Danger&quot;
    data-bs-content=&quot;Danger popover&quot;
    data-bs-custom-class=&quot;popover-danger&quot;
    class=&quot;btn btn-danger mb-2 mx-1&quot;
&gt;
    Danger
&lt;/button&gt;
&lt;button
    type=&quot;button&quot;
    data-bs-toggle=&quot;popover&quot;
    data-bs-placement=&quot;top&quot;
    data-bs-title=&quot;Warning&quot;
    data-bs-content=&quot;Warning popover&quot;
    data-bs-custom-class=&quot;popover-warning&quot;
    class=&quot;btn btn-warning mb-2 mx-1&quot;
&gt;
    Warning
&lt;/button&gt;
&lt;button
    type=&quot;button&quot;
    data-bs-toggle=&quot;popover&quot;
    data-bs-placement=&quot;top&quot;
    data-bs-title=&quot;Secondary&quot;
    data-bs-content=&quot;Secondary popover&quot;
    data-bs-custom-class=&quot;popover-secondary&quot;
    class=&quot;btn btn-secondary mb-2 mx-1&quot;
&gt;
    Secondary
&lt;/button&gt;
&lt;button
    type=&quot;button&quot;
    data-bs-toggle=&quot;popover&quot;
    data-bs-placement=&quot;top&quot;
    data-bs-title=&quot;Dark&quot;
    data-bs-content=&quot;Dark popover&quot;
    data-bs-custom-class=&quot;popover-dark&quot;
    class=&quot;btn btn-dark mb-2 mx-1&quot;
&gt;
    Dark
&lt;/button&gt;
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
    import "../../assets/sass/elements/popover.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Popovers" });

    const code_arr = ref([]);

    onMounted(() => {
        initPopover();
    });

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };

    const initPopover = () => {
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        popoverTriggerList.map(function (popoverTriggerEl) {
            return new window.bootstrap.Popover(popoverTriggerEl);
        });
    };
</script>
