<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Breadcrumbs</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#breadcrumbDefault" class="nav-link">Default</a>
                    <a href="#breadcrumbBasic" class="nav-link">Basic</a>
                    <a href="#breadcrumbArrowed" class="nav-link">Arrowed</a>
                    <a href="#breadcrumbDotted" class="nav-link">Dotted</a>
                    <a href="#breadcrumbWith-icon" class="nav-link">With Icon</a>
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
                        <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/breadcrumb" class="text-info"> https://getbootstrap.com/docs/5.0/components/breadcrumb </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="breadcrumbDefault" class="col-xl-12 col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Default</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <nav class="breadcrumb-one" aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="#home">
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
                                                class="feather feather-home"
                                            >
                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="breadcrumb-item"><a href="#Components">Components</a></li>
                                    <li class="breadcrumb-item active"><a href="#UIKit">UI Kit</a></li>
                                </ol>
                            </nav>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;ol class=&quot;breadcrumb&quot;&gt;
    &lt;li class=&quot;breadcrumb-item&quot;&gt;
        &lt;a href=&quot;#home&quot;&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class=&quot;breadcrumb-item&quot;&gt;&lt;a href=&quot;#Components&quot;&gt;Components&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;breadcrumb-item active&quot;&gt;&lt;a href=&quot;#UIKit&quot;&gt;UI Kit&lt;/a&gt;&lt;/li&gt;
&lt;/ol&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="breadcrumbBasic" class="col-xl-12 col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <nav class="breadcrumb-one" aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#Components">Components</a></li>
                                    <li class="breadcrumb-item active"><a href="#UIKit">UI Kit</a></li>
                                </ol>
                            </nav>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;ol class=&quot;breadcrumb&quot;&gt;
    &lt;li class=&quot;breadcrumb-item&quot;&gt;&lt;a href=&quot;#Components&quot;&gt;Components&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;breadcrumb-item active&quot;&gt;&lt;a href=&quot;#UIKit&quot;&gt;UI Kit&lt;/a&gt;&lt;/li&gt;
&lt;/ol&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="breadcrumbArrowed" class="col-xl-12 col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Arrowed</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <nav class="breadcrumb-two" aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#Home">Home</a></li>
                                    <li class="breadcrumb-item active"><a href="#Components">Components</a></li>
                                    <li class="breadcrumb-item"><a href="#UIKit">UI Kit</a></li>
                                </ol>
                            </nav>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;ol class=&quot;breadcrumb&quot;&gt;
    &lt;li class=&quot;breadcrumb-item&quot;&gt;&lt;a href=&quot;#Home&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;breadcrumb-item active&quot;&gt;&lt;a href=&quot;#Components&quot;&gt;Components&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;breadcrumb-item&quot;&gt;&lt;a href=&quot;#UIKit&quot;&gt;UI Kit&lt;/a&gt;&lt;/li&gt;
&lt;/ol&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="breadcrumbDotted" class="col-xl-12 col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Dotted Seperators</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="breadcrumb-five">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item mb-2"><a href="#Home">Home</a></li>
                                    <li class="breadcrumb-item mb-2 active"><a href="#Components">Components</a></li>
                                    <li class="breadcrumb-item mb-2"><a href="#UIKit">UI Kit</a></li>
                                </ol>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;ol class=&quot;breadcrumb&quot;&gt;
    &lt;li class=&quot;breadcrumb-item mb-2&quot;&gt;&lt;a href=&quot;#Home&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;breadcrumb-item mb-2 active&quot;&gt;&lt;a href=&quot;#Components&quot;&gt;Components&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;breadcrumb-item mb-2&quot;&gt;&lt;a href=&quot;#UIKit&quot;&gt;UI Kit&lt;/a&gt;&lt;/li&gt;
&lt;/ol&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="breadcrumbWith-icon" class="col-xl-12 col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>With Icons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="breadcrumb-four">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="#Home"
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
                                                class="feather feather-home"
                                            >
                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="breadcrumb-item active">
                                        <a href="#Components">
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
                                                class="feather feather-box"
                                            >
                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                            </svg>
                                            <span>Components</span></a
                                        >
                                    </li>
                                    <li class="breadcrumb-item">
                                        <a href="#UIKit">
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
                                                class="feather feather-cpu"
                                            >
                                                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                                                <rect x="9" y="9" width="6" height="6"></rect>
                                                <line x1="9" y1="1" x2="9" y2="4"></line>
                                                <line x1="15" y1="1" x2="15" y2="4"></line>
                                                <line x1="9" y1="20" x2="9" y2="23"></line>
                                                <line x1="15" y1="20" x2="15" y2="23"></line>
                                                <line x1="20" y1="9" x2="23" y2="9"></line>
                                                <line x1="20" y1="14" x2="23" y2="14"></line>
                                                <line x1="1" y1="9" x2="4" y2="9"></line>
                                                <line x1="1" y1="14" x2="4" y2="14"></line>
                                            </svg>
                                            <span>UI Kit</span></a
                                        >
                                    </li>
                                </ol>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;ol class=&quot;breadcrumb&quot;&gt;
    &lt;li class=&quot;breadcrumb-item&quot;&gt;
        &lt;a href=&quot;#Home&quot;&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class=&quot;breadcrumb-item active&quot;&gt;
        &lt;a href=&quot;#Components&quot;&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
            &lt;span&gt;Components&lt;/span&gt;&lt;/a
        &gt;
    &lt;/li&gt;
    &lt;li class=&quot;breadcrumb-item&quot;&gt;
        &lt;a href=&quot;#UIKit&quot;&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
            &lt;span&gt;UI Kit&lt;/span&gt;&lt;/a
        &gt;
    &lt;/li&gt;
&lt;/ol&gt;
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
    import "../../assets/sass/elements/breadcrumb.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Breadcrumbs" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
