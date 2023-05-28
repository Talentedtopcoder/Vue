<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Input Mask</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#basic" class="nav-link">Basic</a>
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
                        <a target="_blank" href="https://www.npmjs.com/package/v-mask" class="text-info"> https://www.npmjs.com/package/v-mask </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="basic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Static Mask Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <p class="">Input mask are use with <code>input</code> tags.</p>
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label for="static-mask1">v-maska="'##-#######'" (99-9999999)</label>
                                        <input type="text" id="static-mask1" class="form-control" v-maska="'##-#######'" placeholder="__-_______" />
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label for="static-mask2">v-maska="'AA-####'" (aa-9999)</label>
                                        <input type="text" id="static-mask2" class="form-control" v-maska="'AA-####'" placeholder="__-____" />
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- static mask basic --&gt;
&lt;input type=&quot;text&quot; id=&quot;static-mask1&quot; class=&quot;form-control&quot; v-maska=&quot;'##-#######'&quot; placeholder=&quot;__-_______&quot; /&gt;

&lt;input type=&quot;text&quot; id=&quot;static-mask2&quot; class=&quot;form-control&quot; v-maska=&quot;'AA-####'&quot; placeholder=&quot;__-____&quot; /&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Alternate masks</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label for="alternate-masks1">v-maska="'##.#'" (99.9)</label>
                                        <input type="text" id="alternate-masks1" class="form-control" v-maska="'##.#'" placeholder="__._" />
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label for="alternate-masks2">v-maska="'##.##'" (99.99)</label>
                                        <input type="text" id="alternate-masks2" class="form-control" v-maska="'##.##'" placeholder="__.__" />
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>
                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Alternate masks --&gt;
&lt;input type=&quot;text&quot; id=&quot;alternate-masks1&quot; class=&quot;form-control&quot; v-maska=&quot;'##.#'&quot; placeholder=&quot;__._&quot; /&gt;

&lt;input type=&quot;text&quot; id=&quot;alternate-mask1&quot; class=&quot;form-control&quot; v-maska=&quot;'##.##'&quot; placeholder=&quot;__.__&quot; /&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Dynamic Syntax</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-xl-4">
                                    <div class="form-group">
                                        <label for="dynamic-syntax-1">v-maska="'#-AAA###'" (9-a{1,3}9{1,3})</label>
                                        <input type="text" id="dynamic-syntax-1" class="form-control" v-maska="'#-AAA###'" placeholder="_-__" />
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="form-group">
                                        <label for="dynamic-syntax-2">v-maska="'AA-####'" (aa-9{1,4})</label>
                                        <input type="text" id="dynamic-syntax-2" class="form-control" v-maska="'AA-####'" placeholder="__-____" />
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="form-group">
                                        <label for="dynamic-syntax-3">v-maska="'AA-##'" (aa-9{1,2})</label>
                                        <input type="text" id="dynamic-syntax-3" class="form-control" v-maska="'AA-##'" placeholder="__-__" />
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Dynamic Syntax --&gt;
&lt;input type=&quot;text&quot; id=&quot;dynamic-syntax-1&quot; class=&quot;form-control&quot; v-maska=&quot;'#-AAA###'&quot; placeholder=&quot;_-__&quot; /&gt;

&lt;input type=&quot;text&quot; id=&quot;dynamic-syntax-2&quot; class=&quot;form-control&quot; v-maska=&quot;'AA-####'&quot; placeholder=&quot;__-____&quot; /&gt;

&lt;input type=&quot;text&quot; id=&quot;dynamic-syntax-3&quot; class=&quot;form-control&quot; v-maska=&quot;'AA-##'&quot; placeholder=&quot;__-__&quot; /&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Date</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-xl-4">
                                    <div class="form-group">
                                        <label for="date">v-maska="'##/##/####'" (dd/mm/yyyy)</label>
                                        <input type="text" id="date" class="form-control" v-maska="'##/##/####'" placeholder="__/__/____" />
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="form-group">
                                        <label for="date2">v-maska="'##-##-####'" (99-99-9999)</label>
                                        <input type="text" id="date2" class="form-control" v-maska="'##-##-####'" placeholder="__-__-____" />
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="form-group">
                                        <label for="date3">v-maska="'## December, ####'" (99 December, 9999)</label>
                                        <input type="text" id="date3" class="form-control" v-maska="'## December, ####'" placeholder="__ December, ____" />
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Date --&gt;
&lt;input type=&quot;text&quot; id=&quot;date&quot; class=&quot;form-control&quot; v-maska=&quot;'##/##/####'&quot; placeholder=&quot;__/__/____&quot; /&gt;

&lt;input type=&quot;text&quot; id=&quot;date2&quot; class=&quot;form-control&quot; v-maska=&quot;'##-##-####'&quot; placeholder=&quot;__-__-____&quot; /&gt;

&lt;input type=&quot;text&quot; id=&quot;date3&quot; class=&quot;form-control&quot; v-maska=&quot;'## December, ####'&quot; placeholder=&quot;__ December, ____&quot; /&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>IP</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <label for="ip-add">v-maska="'###.###.###.###'" (192.198.1.1)</label>
                            <input type="text" id="ip-add" class="form-control" v-maska="'###.###.###.###'" placeholder="___.___.___.___" />

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- IP --&gt;
&lt;input type=&quot;text&quot; id=&quot;ip-add&quot; class=&quot;form-control&quot; v-maska=&quot;'###.###.###.###'&quot; placeholder=&quot;___.___.___.___&quot; /&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Phone</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <label for="ph-number">v-maska="'(###) ###-####'" ((999) 999-9999)</label>
                            <input type="text" id="ph-number" class="form-control" v-maska="'(###) ###-####'" placeholder="(___) ___-____" />

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Phone --&gt;
&lt;input type=&quot;text&quot; id=&quot;ph-number&quot; class=&quot;form-control&quot; v-maska=&quot;'(###) ###-####'&quot; placeholder=&quot;(___) ___-____&quot; /&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Currency</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <label for="currency">$999,9999,999.99</label>
                            <input type="text" id="currency" class="form-control" v-maska="'$###,####,###.##'" placeholder="$___,____,___.__" />

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></button>
                                <div v-if="code_arr.includes('code7')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Currency --&gt;
&lt;input type=&quot;text&quot; id=&quot;currency&quot; class=&quot;form-control&quot; v-maska=&quot;'$###,####,###.##'&quot; placeholder=&quot;$___,____,___.__&quot; /&gt;
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
    useMeta({ title: "Input Mask" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
