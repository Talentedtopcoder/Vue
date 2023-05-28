<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Progress Bar</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#progressBarBasic" class="nav-link">Basic</a>
                    <a href="#progressBarGradient" class="nav-link">Gradient</a>
                    <a href="#progressBarStriped" class="nav-link">Striped</a>
                    <a href="#progressBarAnimated" class="nav-link">Animated</a>
                    <a href="#progressBarLabeled" class="nav-link">Labeled</a>
                    <a href="#progressBarStacked" class="nav-link">Stacked</a>
                    <a href="#progressBarSizes" class="nav-link">Sizes</a>
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
                        <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/progress" class="text-info"> https://getbootstrap.com/docs/5.0/components/progress </a>
                    </div>
                </div>
            </div>
            <div v-scroll-spy class="row layout-top-spacing">
                <div id="progressBarBasic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" class="progress-bar bg-primary" style="width: 20%"></div>
                            </div>
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="30" class="progress-bar bg-info" style="width: 30%"></div>
                            </div>
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" class="progress-bar bg-success" style="width: 50%"></div>
                            </div>
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="60" class="progress-bar bg-warning" style="width: 60%"></div>
                            </div>
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="70" class="progress-bar bg-danger" style="width: 70%"></div>
                            </div>
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80" class="progress-bar bg-secondary" style="width: 80%"></div>
                            </div>
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="90" class="progress-bar bg-dark" style="width: 90%"></div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>

&lt;!-- Primary --&gt;
&lt;div class=&quot;progress br-30&quot; min=&quot;0&quot;&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;20&quot; class=&quot;progress-bar bg-primary&quot; style=&quot;width: 20%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Info --&gt;
&lt;div class=&quot;progress br-30&quot; min=&quot;0&quot;&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;30&quot; class=&quot;progress-bar bg-info&quot; style=&quot;width: 30%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Success --&gt;
&lt;div class=&quot;progress br-30&quot; min=&quot;0&quot;&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;50&quot; class=&quot;progress-bar bg-success&quot; style=&quot;width: 50%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Warning --&gt;
&lt;div class=&quot;progress br-30&quot; min=&quot;0&quot;&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;60&quot; class=&quot;progress-bar bg-warning&quot; style=&quot;width: 60%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Danger --&gt;
&lt;div class=&quot;progress br-30&quot; min=&quot;0&quot;&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;70&quot; class=&quot;progress-bar bg-danger&quot; style=&quot;width: 70%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Secondary --&gt;
&lt;div class=&quot;progress br-30&quot; min=&quot;0&quot;&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;80&quot; class=&quot;progress-bar bg-secondary&quot; style=&quot;width: 80%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Dark --&gt;
&lt;div class=&quot;progress br-30&quot; min=&quot;0&quot;&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;90&quot; class=&quot;progress-bar bg-dark&quot; style=&quot;width: 90%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="progressBarGradient" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Gradient</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" class="progress-bar bg-gradient-primary" style="width: 20%"></div>
                            </div>
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="30" class="progress-bar bg-gradient-info" style="width: 30%"></div>
                            </div>
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" class="progress-bar bg-gradient-success" style="width: 50%"></div>
                            </div>
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="60" class="progress-bar bg-gradient-warning" style="width: 60%"></div>
                            </div>
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="70" class="progress-bar bg-gradient-danger" style="width: 70%"></div>
                            </div>
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80" class="progress-bar bg-gradient-secondary" style="width: 80%"></div>
                            </div>
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="90" class="progress-bar bg-gradient-dark" style="width: 90%"></div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Primary --&gt;
&lt;div class=&quot;progress br-30&quot; min=&quot;0&quot;&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;20&quot; class=&quot;progress-bar bg-gradient-primary&quot; style=&quot;width: 20%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Info --&gt;
&lt;div class=&quot;progress br-30&quot; min=&quot;0&quot;&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;20&quot; class=&quot;progress-bar bg-gradient-info&quot; style=&quot;width: 20%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Success --&gt;
&lt;div class=&quot;progress br-30&quot; min=&quot;0&quot;&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;20&quot; class=&quot;progress-bar bg-gradient-success&quot; style=&quot;width: 20%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Warning --&gt;
&lt;div class=&quot;progress br-30&quot; min=&quot;0&quot;&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;20&quot; class=&quot;progress-bar bg-gradient-warning&quot; style=&quot;width: 20%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Danger --&gt;
&lt;div class=&quot;progress br-30&quot; min=&quot;0&quot;&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;20&quot; class=&quot;progress-bar bg-gradient-danger&quot; style=&quot;width: 20%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Secondary --&gt;
&lt;div class=&quot;progress br-30&quot; min=&quot;0&quot;&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;20&quot; class=&quot;progress-bar bg-gradient-secondary&quot; style=&quot;width: 20%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Dark --&gt;
&lt;div class=&quot;progress br-30&quot; min=&quot;0&quot;&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;20&quot; class=&quot;progress-bar bg-gradient-dark&quot; style=&quot;width: 20%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="progressBarStriped" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Striped</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" class="progress-bar bg-primary progress-bar-striped" style="width: 20%"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="progressBarAnimated" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Animated</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" class="progress-bar bg-primary progress-bar-striped progress-bar-animated" style="width: 50%"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="progressBarLabeled" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Labels</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80" class="progress-bar bg-info" style="width: 80%">80%</div>
                            </div>
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="90" class="progress-bar bg-danger" style="width: 90%">
                                    <div class="progress-title"><span>PHP</span><span>90%</span></div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Labels --&gt;
&lt;div class=&quot;progress br-30&quot; min=&quot;0&quot;&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;80&quot; class=&quot;progress-bar bg-info&quot; style=&quot;width: 80%&quot;&gt;80%&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;progress br-30&quot; min=&quot;0&quot;&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;90&quot; class=&quot;progress-bar bg-danger&quot; style=&quot;width: 90%&quot;&gt;
        &lt;div class=&quot;progress-title&quot;&gt;&lt;span&gt;PHP&lt;/span&gt;&lt;span&gt;90%&lt;/span&gt;&lt;/div&gt;
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

                <div id="progressBarStacked" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Stacked</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <h6>Basic</h6>
                            <div class="progress progress-bar-stack br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="15" class="progress-bar bg-success" style="width: 15%"></div>
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="30" class="progress-bar bg-warning" style="width: 30%"></div>
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" class="progress-bar bg-danger" style="width: 20%"></div>
                            </div>
                            <h6>Striped</h6>
                            <div class="progress progress-bar-stack br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="15" class="progress-bar bg-primary progress-bar-striped" style="width: 15%"></div>
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="30" class="progress-bar bg-success progress-bar-striped" style="width: 30%"></div>
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" class="progress-bar bg-info progress-bar-striped" style="width: 20%"></div>
                            </div>
                            <h6>Animated</h6>
                            <div class="progress progress-bar-stack br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="15" class="progress-bar bg-info progress-bar-striped progress-bar-animated" style="width: 15%"></div>
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="30" class="progress-bar bg-secondary progress-bar-striped progress-bar-animated" style="width: 30%"></div>
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" class="progress-bar bg-primary progress-bar-striped progress-bar-animated" style="width: 20%"></div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Basic --&gt;
&lt;div class=&quot;progress progress-bar-stack br-30&quot; min=&quot;0&quot;&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;15&quot; class=&quot;progress-bar bg-success&quot; style=&quot;width: 15%&quot;&gt;&lt;/div&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;30&quot; class=&quot;progress-bar bg-warning&quot; style=&quot;width: 30%&quot;&gt;&lt;/div&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;20&quot; class=&quot;progress-bar bg-danger&quot; style=&quot;width: 20%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;!-- Striped --&gt;
&lt;div class=&quot;progress progress-bar-stack br-30&quot; min=&quot;0&quot;&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;15&quot; class=&quot;progress-bar bg-primary progress-bar-striped&quot; style=&quot;width: 15%&quot;&gt;&lt;/div&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;30&quot; class=&quot;progress-bar bg-success progress-bar-striped&quot; style=&quot;width: 30%&quot;&gt;&lt;/div&gt;
    &lt;div role=&quot;progressbar&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; aria-valuenow=&quot;20&quot; class=&quot;progress-bar bg-info progress-bar-striped&quot; style=&quot;width: 20%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;!-- Animated --&gt;
&lt;div class=&quot;progress progress-bar-stack br-30&quot; min=&quot;0&quot;&gt;
    &lt;div
        role=&quot;progressbar&quot;
        aria-valuemin=&quot;0&quot;
        aria-valuemax=&quot;100&quot;
        aria-valuenow=&quot;15&quot;
        class=&quot;progress-bar bg-info progress-bar-striped progress-bar-animated&quot;
        style=&quot;width: 15%&quot;
    &gt;&lt;/div&gt;
    &lt;div
        role=&quot;progressbar&quot;
        aria-valuemin=&quot;0&quot;
        aria-valuemax=&quot;100&quot;
        aria-valuenow=&quot;30&quot;
        class=&quot;progress-bar bg-secondary progress-bar-striped progress-bar-animated&quot;
        style=&quot;width: 30%&quot;
    &gt;&lt;/div&gt;
    &lt;div
        role=&quot;progressbar&quot;
        aria-valuemin=&quot;0&quot;
        aria-valuemax=&quot;100&quot;
        aria-valuenow=&quot;20&quot;
        class=&quot;progress-bar bg-primary progress-bar-striped progress-bar-animated&quot;
        style=&quot;width: 20%&quot;
    &gt;&lt;/div&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="progressBarSizes" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Progress Bars Different Sizes</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <span><code>Default Progress Bar Size</code></span>
                            <div class="progress br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" class="progress-bar bg-primary" style="width: 20%"></div>
                            </div>
                            <span>Class: <code>.progress-sm</code></span>
                            <div class="progress progress-sm br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" class="progress-bar bg-success" style="width: 40%"></div>
                            </div>
                            <span>Class: <code>.progress-md</code></span>
                            <div class="progress progress-md br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="60" class="progress-bar bg-warning" style="width: 60%"></div>
                            </div>
                            <span>Class: <code>.progress-lg</code></span>
                            <div class="progress progress-lg br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80" class="progress-bar bg-info" style="width: 80%"></div>
                            </div>
                            <span>Class: <code>.progress-xl</code></span>
                            <div class="progress progress-xl br-30" min="0">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="90" class="progress-bar bg-danger" style="width: 90%"></div>
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
    useMeta({ title: "Progress Bar" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
