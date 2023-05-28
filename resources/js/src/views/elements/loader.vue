<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Loader</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#loaderWith-buttons" class="nav-link">With Buttons</a>
                    <a href="#loaderPositions" class="nav-link">Positions</a>
                    <a href="#loaderSizes" class="nav-link">Sizes</a>
                    <a href="#loaderColors" class="nav-link">Colors</a>
                    <a href="#loaderCustom" class="nav-link">Custom</a>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="loaderWith-buttons" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Loaders with Buttons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <button type="button" class="btn btn-info btn-lg mb-3 me-3">
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
                                    class="feather feather-loader spin me-2"
                                >
                                    <line x1="12" y1="2" x2="12" y2="6"></line>
                                    <line x1="12" y1="18" x2="12" y2="22"></line>
                                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                                    <line x1="2" y1="12" x2="6" y2="12"></line>
                                    <line x1="18" y1="12" x2="22" y2="12"></line>
                                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                                </svg>
                                Loading
                            </button>
                            <button type="button" class="btn btn-danger btn-lg mb-3 me-3"><span class="spinner-border text-white me-2 align-self-center loader-sm">Loading...</span> Loading</button>
                            <button type="button" class="btn btn-secondary btn-lg mb-3 me-3"><span class="spinner-grow text-white me-2 align-self-center loader-sm">Loading...</span> Loading</button>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-info btn-lg mb-3 me-3&quot;&gt;
    &lt;svg&gt; ... &lt;/svg&gt;
    Loading
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-danger btn-lg mb-3 me-3&quot;&gt;&lt;span class=&quot;spinner-border text-white me-2 align-self-center loader-sm&quot;&gt;Loading...&lt;/span&gt; Loading&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary btn-lg mb-3 me-3&quot;&gt;&lt;span class=&quot;spinner-grow text-white me-2 align-self-center loader-sm&quot;&gt;Loading...&lt;/span&gt; Loading&lt;/button&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="loaderPositions" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Position</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="row">
                                <div class="col-xl-6">
                                    <p class="">Default Button</p>
                                    <button type="button" class="btn btn-primary btn-lg mb-4 me-3">
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
                                            class="feather feather-loader spin me-2"
                                        >
                                            <line x1="12" y1="2" x2="12" y2="6"></line>
                                            <line x1="12" y1="18" x2="12" y2="22"></line>
                                            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                                            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                                            <line x1="2" y1="12" x2="6" y2="12"></line>
                                            <line x1="18" y1="12" x2="22" y2="12"></line>
                                            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                                            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                                        </svg>
                                        Loading
                                    </button>
                                </div>
                                <div class="col-xl-6">
                                    <p class="">Outline Button</p>
                                    <button type="button" class="btn btn-outline-primary btn-lg mb-4 me-3">
                                        Loading
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
                                            class="feather feather-loader spin ms-2"
                                        >
                                            <line x1="12" y1="2" x2="12" y2="6"></line>
                                            <line x1="12" y1="18" x2="12" y2="22"></line>
                                            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                                            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                                            <line x1="2" y1="12" x2="6" y2="12"></line>
                                            <line x1="18" y1="12" x2="22" y2="12"></line>
                                            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                                            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-lg mb-4 me-3&quot;&gt;
    &lt;svg&gt; ... &lt;/svg&gt;
    Loading
&lt;/button&gt;

&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-primary btn-lg mb-4 me-3&quot;&gt;
    Loading
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

                <div id="loaderSizes" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Sizes</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="d-flex justify-content-between mx-5 mt-3 mb-5">
                                <div class="spinner-border text-success align-self-center loader-lg">Loading...</div>
                                <div class="spinner-border text-success align-self-center">Loading...</div>
                                <div class="spinner-border text-success align-self-center loader-sm">Loading...</div>
                            </div>

                            <div class="d-flex justify-content-between mx-5 mt-3 mb-5">
                                <div class="spinner-border spinner-border-reverse align-self-center loader-lg text-secondary">Loading...</div>
                                <div class="spinner-border spinner-border-reverse align-self-center text-secondary">Loading...</div>
                                <div class="spinner-border spinner-border-reverse align-self-center loader-sm text-secondary">Loading...</div>
                            </div>

                            <div class="d-flex justify-content-between mx-5 mt-3">
                                <div class="spinner-grow text-info align-self-center loader-lg">Loading...</div>
                                <div class="spinner-grow text-info align-self-center">Loading...</div>
                                <div class="spinner-grow text-info align-self-center loader-sm">Loading...</div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;d-flex justify-content-between mx-5 mt-3 mb-5&quot;&gt;
    &lt;div class=&quot;spinner-border text-success align-self-center loader-lg&quot;&gt;Loading...&lt;/div&gt;
    &lt;div class=&quot;spinner-border text-success align-self-center&quot;&gt;Loading...&lt;/div&gt;
    &lt;div class=&quot;spinner-border text-success align-self-center loader-sm&quot;&gt;Loading...&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;d-flex justify-content-between mx-5 mt-3 mb-5&quot;&gt;
    &lt;div class=&quot;spinner-border spinner-border-reverse align-self-center loader-lg text-secondary&quot;&gt;Loading...&lt;/div&gt;
    &lt;div class=&quot;spinner-border spinner-border-reverse align-self-center text-secondary&quot;&gt;Loading...&lt;/div&gt;
    &lt;div class=&quot;spinner-border spinner-border-reverse align-self-center loader-sm text-secondary&quot;&gt;Loading...&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;d-flex justify-content-between mx-5 mt-3&quot;&gt;
    &lt;div class=&quot;spinner-grow text-info align-self-center loader-lg&quot;&gt;Loading...&lt;/div&gt;
    &lt;div class=&quot;spinner-grow text-info align-self-center&quot;&gt;Loading...&lt;/div&gt;
    &lt;div class=&quot;spinner-grow text-info align-self-center loader-sm&quot;&gt;Loading...&lt;/div&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="loaderColors" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Colors</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="d-flex justify-content-between mx-5 mt-3 mb-5">
                                <div class="spinner-border text-success align-self-center">Loading...</div>
                                <div class="spinner-border text-danger align-self-center">Loading...</div>
                                <div class="spinner-border text-warning align-self-center">Loading...</div>
                                <div class="spinner-border text-primary align-self-center">Loading...</div>
                            </div>

                            <div class="d-flex justify-content-between mx-5 mt-3 mb-5">
                                <div class="spinner-border spinner-border-reverse align-self-center text-dark">Loading...</div>
                                <div class="spinner-border spinner-border-reverse align-self-center text-secondary">Loading...</div>
                                <div class="spinner-border spinner-border-reverse align-self-center text-primary">Loading...</div>
                                <div class="spinner-border spinner-border-reverse align-self-center text-danger">Loading...</div>
                            </div>

                            <div class="d-flex justify-content-between mx-5 mt-3 mb-5">
                                <div class="spinner-grow text-info align-self-center">Loading...</div>
                                <div class="spinner-grow text-danger align-self-center">Loading...</div>
                                <div class="spinner-grow text-secondary align-self-center">Loading...</div>
                                <div class="spinner-grow text-warning align-self-center">Loading...</div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;d-flex justify-content-between mx-5 mt-3 mb-5&quot;&gt;
    &lt;div class=&quot;spinner-border text-success align-self-center&quot;&gt;Loading...&lt;/div&gt;
    &lt;div class=&quot;spinner-border text-danger align-self-center&quot;&gt;Loading...&lt;/div&gt;
    &lt;div class=&quot;spinner-border text-warning align-self-center&quot;&gt;Loading...&lt;/div&gt;
    &lt;div class=&quot;spinner-border text-primary align-self-center&quot;&gt;Loading...&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;d-flex justify-content-between mx-5 mt-3 mb-5&quot;&gt;
    &lt;div class=&quot;spinner-border spinner-border-reverse align-self-center text-dark&quot;&gt;Loading...&lt;/div&gt;
    &lt;div class=&quot;spinner-border spinner-border-reverse align-self-center text-secondary&quot;&gt;Loading...&lt;/div&gt;
    &lt;div class=&quot;spinner-border spinner-border-reverse align-self-center text-primary&quot;&gt;Loading...&lt;/div&gt;
    &lt;div class=&quot;spinner-border spinner-border-reverse align-self-center text-danger&quot;&gt;Loading...&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;d-flex justify-content-between mx-5 mt-3 mb-5&quot;&gt;
    &lt;div class=&quot;spinner-grow text-info align-self-center&quot;&gt;Loading...&lt;/div&gt;
    &lt;div class=&quot;spinner-grow text-danger align-self-center&quot;&gt;Loading...&lt;/div&gt;
    &lt;div class=&quot;spinner-grow text-secondary align-self-center&quot;&gt;Loading...&lt;/div&gt;
    &lt;div class=&quot;spinner-grow text-warning align-self-center&quot;&gt;Loading...&lt;/div&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="loaderCustom" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Custom</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-4">
                                    <div class="loader mx-auto"></div>
                                </div>
                                <div class="col-4">
                                    <div class="loader dual-loader mx-auto"></div>
                                </div>
                                <div class="col-4">
                                    <div class="loader multi-loader mx-auto"></div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;loader mx-auto&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;loader dual-loader mx-auto&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;loader multi-loader mx-auto&quot;&gt;&lt;/div&gt;
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
    useMeta({ title: "Loader" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
