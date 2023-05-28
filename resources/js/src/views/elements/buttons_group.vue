<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Button Groups</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#btnGroupHorizontal" class="nav-link">Horizontal</a>
                    <a href="#btnGroupInput-group" class="nav-link">Input Group</a>
                    <a href="#btnGroupVertical" class="nav-link">Vertical</a>
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
                        <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/button-group" class="text-info"> https://getbootstrap.com/docs/5.0/components/button-group </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="btnGroupHorizontal" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Horizontal</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-dark">Left</button>
                                <button type="button" class="btn btn-dark">Middle</button>
                                <button type="button" class="btn btn-dark">Right</button>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Horizontal --&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot;&gt;Left&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot;&gt;Middle&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot;&gt;Right&lt;/button&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="btnGroupInput-group" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Input Group</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="btn-toolbar justify-content-between me-2" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group mb-2" role="group" aria-label="First group">
                                    <button type="button" class="btn btn-dark">1</button>
                                    <button type="button" class="btn btn-dark">2</button>
                                    <button type="button" class="btn btn-dark">3</button>
                                    <button type="button" class="btn btn-dark">4</button>
                                </div>
                                <div class="input-group mb-2">
                                    <div class="input-group-text" id="btnGroupAddon2">@</div>
                                    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2" />
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;btn-group mb-2&quot; role=&quot;group&quot; aria-label=&quot;First group&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot;&gt;1&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot;&gt;2&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot;&gt;3&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot;&gt;4&lt;/button&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group mb-2&quot;&gt;
    &lt;div class=&quot;input-group-text&quot; id=&quot;btnGroupAddon2&quot;&gt;@&lt;/div&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Input group example&quot; aria-label=&quot;Input group example&quot; aria-describedby=&quot;btnGroupAddon2&quot; /&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="btnGroupVertical" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Vertical</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                                <button type="button" class="btn btn-dark">Button</button>
                                <div class="btn-group" role="group">
                                    <div class="btn-group dropdown custom-dropdown">
                                        <button id="btnGroupVerticalDrop1" type="button" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown
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
                                                class="feather feather-chevron-down"
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
                                            <a class="dropdown-item" href="#">Dropdown link</a>
                                            <a class="dropdown-item" href="#">Dropdown link</a>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-dark">Button</button>
                                <button type="button" class="btn btn-dark">Button</button>
                                <div class="btn-group" role="group">
                                    <div class="btn-group dropdown custom-dropdown">
                                        <button id="btnGroupVerticalDrop2" type="button" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown
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
                                                class="feather feather-chevron-down"
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop2">
                                            <a class="dropdown-item" href="#">Dropdown link</a>
                                            <a class="dropdown-item" href="#">Dropdown link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Vertical --&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot;&gt;
        &lt;div class=&quot;btn-group dropdown custom-dropdown&quot;&gt;
            &lt;button id=&quot;btnGroupVerticalDrop1&quot; type=&quot;button&quot; class=&quot;btn btn-dark dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
                Dropdown
                &lt;svg&gt; ... &lt;/svg&gt;
            &lt;/button&gt;
            &lt;div class=&quot;dropdown-menu&quot; aria-labelledby=&quot;btnGroupVerticalDrop1&quot;&gt;
                &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Dropdown link&lt;/a&gt;
                &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Dropdown link&lt;/a&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot;&gt;Button&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot;&gt;Button&lt;/button&gt;
    &lt;div class=&quot;btn-group&quot; role=&quot;group&quot;&gt;
        &lt;div class=&quot;btn-group dropdown custom-dropdown&quot;&gt;
            &lt;button id=&quot;btnGroupVerticalDrop2&quot; type=&quot;button&quot; class=&quot;btn btn-dark dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
                Dropdown
                &lt;svg&gt; ... &lt;/svg&gt;
            &lt;/button&gt;
            &lt;div class=&quot;dropdown-menu&quot; aria-labelledby=&quot;btnGroupVerticalDrop2&quot;&gt;
                &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Dropdown link&lt;/a&gt;
                &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Dropdown link&lt;/a&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
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
    import { ref } from "vue";
    import "../../assets/sass/scrollspyNav.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Button Group" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
