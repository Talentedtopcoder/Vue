<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Checkbox and Radio</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#checkbox" class="nav-link">Checkbox</a>
                    <a href="#radio" class="nav-link">Radio</a>
                </div>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        Documentation: <a target="_blank" href="https://getbootstrap.com/docs/5.0/forms/checks-radios" class="text-info"> https://getbootstrap.com/docs/5.0/forms/checks-radios </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="checkbox" class="col-lg-12">
                    <div class="seperator-header">
                        <h4 class="">Checkbox</h4>
                    </div>
                </div>

                <div class="col-lg-12 layout-spacing">
                    <div class="row">
                        <!-- Background -->
                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Default</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.checkbox-*</code> class to change different colors.</p>

                                    <div class="checkbox-default custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chk_default" />
                                        <label class="custom-control-label" for="chk_default"> Default </label>
                                    </div>
                                    <div class="checkbox-primary custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chk_primary" />
                                        <label class="custom-control-label" for="chk_primary"> Primary </label>
                                    </div>
                                    <div class="checkbox-success custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chk_success" />
                                        <label class="custom-control-label" for="chk_success"> Success </label>
                                    </div>
                                    <div class="checkbox-info custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chk_info" />
                                        <label class="custom-control-label" for="chk_info"> Info </label>
                                    </div>
                                    <div class="checkbox-warning custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chk_warning" />
                                        <label class="custom-control-label" for="chk_warning"> Warning </label>
                                    </div>
                                    <div class="checkbox-danger custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chk_danger" />
                                        <label class="custom-control-label" for="chk_danger"> Danger </label>
                                    </div>
                                    <div class="checkbox-secondary custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chk_secondary" />
                                        <label class="custom-control-label" for="chk_secondary"> Secondary </label>
                                    </div>
                                    <div class="checkbox-dark custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chk_dark" />
                                        <label class="custom-control-label" for="chk_dark"> Dark </label>
                                    </div>

                                    <div class="code-section-container show-code">
                                        <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                        <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                            <highlight>
                                                <pre>
&lt;!-- checkbox --&gt;
&lt;div class=&quot;checkbox-default custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chk_default&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chk_default&quot;&gt; Default &lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;checkbox-primary custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chk_primary&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chk_primary&quot;&gt; Primary &lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;checkbox-success custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chk_success&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chk_success&quot;&gt; Success &lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;checkbox-info custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chk_info&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chk_info&quot;&gt; Info &lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;checkbox-warning custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chk_warning&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chk_warning&quot;&gt; Warning &lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;checkbox-danger custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chk_danger&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chk_danger&quot;&gt; Danger &lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;checkbox-secondary custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chk_secondary&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chk_secondary&quot;&gt; Secondary &lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;checkbox-dark custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chk_dark&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chk_dark&quot;&gt; Dark &lt;/label&gt;
&lt;/div&gt;
</pre
                                                >
                                            </highlight>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Default Rounded</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.rounded</code> class to create checkboxes rounded.</p>

                                    <div class="checkbox-default custom-control custom-checkbox rounded">
                                        <input type="checkbox" class="custom-control-input" id="chkrd_default" />
                                        <label class="custom-control-label" for="chkrd_default"> Default </label>
                                    </div>
                                    <div class="checkbox-primary custom-control custom-checkbox rounded">
                                        <input type="checkbox" class="custom-control-input" id="chkrd_primary" />
                                        <label class="custom-control-label" for="chkrd_primary"> Primary </label>
                                    </div>
                                    <div class="checkbox-success custom-control custom-checkbox rounded">
                                        <input type="checkbox" class="custom-control-input" id="chkrd_success" />
                                        <label class="custom-control-label" for="chkrd_success"> Success </label>
                                    </div>
                                    <div class="checkbox-info custom-control custom-checkbox rounded">
                                        <input type="checkbox" class="custom-control-input" id="chkrd_info" />
                                        <label class="custom-control-label" for="chkrd_info"> Info </label>
                                    </div>
                                    <div class="checkbox-warning custom-control custom-checkbox rounded">
                                        <input type="checkbox" class="custom-control-input" id="chkrd_warning" />
                                        <label class="custom-control-label" for="chkrd_warning"> Warning </label>
                                    </div>
                                    <div class="checkbox-danger custom-control custom-checkbox rounded">
                                        <input type="checkbox" class="custom-control-input" id="chkrd_danger" />
                                        <label class="custom-control-label" for="chkrd_danger"> Danger </label>
                                    </div>
                                    <div class="checkbox-secondary custom-control custom-checkbox rounded">
                                        <input type="checkbox" class="custom-control-input" id="chkrd_secondary" />
                                        <label class="custom-control-label" for="chkrd_secondary"> Secondary </label>
                                    </div>
                                    <div class="checkbox-dark custom-control custom-checkbox rounded">
                                        <input type="checkbox" class="custom-control-input" id="chkrd_dark" />
                                        <label class="custom-control-label" for="chkrd_dark"> Dark </label>
                                    </div>

                                    <div class="code-section-container show-code">
                                        <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                        <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                            <highlight>
                                                <pre>
&lt;!-- checkbox rounded --&gt;
&lt;div class=&quot;checkbox-default custom-control custom-checkbox rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkrd_default&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkrd_default&quot;&gt; Default &lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;checkbox-primary custom-control custom-checkbox rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkrd_primary&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkrd_primary&quot;&gt; Primary &lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;checkbox-success custom-control custom-checkbox rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkrd_success&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkrd_success&quot;&gt; Success &lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;checkbox-info custom-control custom-checkbox rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkrd_info&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkrd_info&quot;&gt; Info &lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;checkbox-warning custom-control custom-checkbox rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkrd_warning&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkrd_warning&quot;&gt; Warning &lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;checkbox-danger custom-control custom-checkbox rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkrd_danger&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkrd_danger&quot;&gt; Danger &lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;checkbox-secondary custom-control custom-checkbox rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkrd_secondary&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkrd_secondary&quot;&gt; Secondary &lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;checkbox-dark custom-control custom-checkbox rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkrd_dark&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkrd_dark&quot;&gt; Dark &lt;/label&gt;
&lt;/div&gt;
</pre
                                                >
                                            </highlight>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Outline</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.checkbox-outline-*</code> class to create checkboxes outlined and change different colors.</p>

                                    <div class="checkbox-outline-default custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkout_default" />
                                        <label class="custom-control-label" for="chkout_default"> Default </label>
                                    </div>
                                    <div class="checkbox-outline-primary custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkout_primary" />
                                        <label class="custom-control-label" for="chkout_primary"> Primary </label>
                                    </div>
                                    <div class="checkbox-outline-success custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkout_success" />
                                        <label class="custom-control-label" for="chkout_success"> Success </label>
                                    </div>
                                    <div class="checkbox-outline-info custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkout_info" />
                                        <label class="custom-control-label" for="chkout_info"> Info </label>
                                    </div>
                                    <div class="checkbox-outline-warning custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkout_warning" />
                                        <label class="custom-control-label" for="chkout_warning"> Warning </label>
                                    </div>
                                    <div class="checkbox-outline-danger custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkout_danger" />
                                        <label class="custom-control-label" for="chkout_danger"> Danger </label>
                                    </div>
                                    <div class="checkbox-outline-secondary custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkout_secondary" />
                                        <label class="custom-control-label" for="chkout_secondary"> Secondary </label>
                                    </div>
                                    <div class="checkbox-outline-dark custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="chkout_dark" />
                                        <label class="custom-control-label" for="chkout_dark"> Dark </label>
                                    </div>

                                    <div class="code-section-container show-code">
                                        <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                        <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                            <highlight>
                                                <pre>
&lt;!-- checkbox outline --&gt;
&lt;div class=&quot;checkbox-outline-default custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkout_default&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkout_default&quot;&gt; Default &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-primary custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkout_primary&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkout_primary&quot;&gt; Primary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-success custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkout_success&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkout_success&quot;&gt; Success &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-info custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkout_info&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkout_info&quot;&gt; Info &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-warning custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkout_warning&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkout_warning&quot;&gt; Warning &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-danger custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkout_danger&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkout_danger&quot;&gt; Danger &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-secondary custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkout_secondary&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkout_secondary&quot;&gt; Secondary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-dark custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkout_dark&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkout_dark&quot;&gt; Dark &lt;/label&gt;
&lt;/div&gt;
</pre
                                                >
                                            </highlight>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Outline Rounded</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.rounded</code> class to create checkboxes rounded.</p>

                                    <div class="checkbox-outline-default custom-control custom-checkbox rounded">
                                        <input type="checkbox" class="custom-control-input" id="chkoutrd_default" />
                                        <label class="custom-control-label" for="chkoutrd_default"> Default </label>
                                    </div>
                                    <div class="checkbox-outline-primary custom-control custom-checkbox rounded">
                                        <input type="checkbox" class="custom-control-input" id="chkoutrd_primary" />
                                        <label class="custom-control-label" for="chkoutrd_primary"> Primary </label>
                                    </div>
                                    <div class="checkbox-outline-success custom-control custom-checkbox rounded">
                                        <input type="checkbox" class="custom-control-input" id="chkoutrd_success" />
                                        <label class="custom-control-label" for="chkoutrd_success"> Success </label>
                                    </div>
                                    <div class="checkbox-outline-info custom-control custom-checkbox rounded">
                                        <input type="checkbox" class="custom-control-input" id="chkoutrd_info" />
                                        <label class="custom-control-label" for="chkoutrd_info"> Info </label>
                                    </div>
                                    <div class="checkbox-outline-warning custom-control custom-checkbox rounded">
                                        <input type="checkbox" class="custom-control-input" id="chkoutrd_warning" />
                                        <label class="custom-control-label" for="chkoutrd_warning"> Warning </label>
                                    </div>
                                    <div class="checkbox-outline-danger custom-control custom-checkbox rounded">
                                        <input type="checkbox" class="custom-control-input" id="chkoutrd_danger" />
                                        <label class="custom-control-label" for="chkoutrd_danger"> Danger </label>
                                    </div>
                                    <div class="checkbox-outline-secondary custom-control custom-checkbox rounded">
                                        <input type="checkbox" class="custom-control-input" id="chkoutrd_secondary" />
                                        <label class="custom-control-label" for="chkoutrd_secondary"> Secondary </label>
                                    </div>
                                    <div class="checkbox-outline-dark custom-control custom-checkbox rounded">
                                        <input type="checkbox" class="custom-control-input" id="chkoutrd_dark" />
                                        <label class="custom-control-label" for="chkoutrd_dark"> Dark </label>
                                    </div>

                                    <div class="code-section-container show-code">
                                        <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                        <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                            <highlight>
                                                <pre>
&lt;!-- checkbox outline rounded --&gt;
&lt;div class=&quot;checkbox-outline-default custom-control custom-checkbox rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkoutrd_default&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkoutrd_default&quot;&gt; Default &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-primary custom-control custom-checkbox rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkoutrd_primary&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkoutrd_primary&quot;&gt; Primary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-success custom-control custom-checkbox rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkoutrd_success&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkoutrd_success&quot;&gt; Success &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-info custom-control custom-checkbox rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkoutrd_info&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkoutrd_info&quot;&gt; Info &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-warning custom-control custom-checkbox rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkoutrd_warning&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkoutrd_warning&quot;&gt; Warning &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-danger custom-control custom-checkbox rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkoutrd_danger&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkoutrd_danger&quot;&gt; Danger &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-secondary custom-control custom-checkbox rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkoutrd_secondary&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkoutrd_secondary&quot;&gt; Secondary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-dark custom-control custom-checkbox rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkoutrd_dark&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkoutrd_dark&quot;&gt; Dark &lt;/label&gt;
&lt;/div&gt;
</pre
                                                >
                                            </highlight>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Default Text Color</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.text-color</code> class to make text colored as checkbox.</p>

                                    <div class="row">
                                        <div class="col-md-6 col-6">
                                            <div class="checkbox-default custom-control custom-checkbox text-color">
                                                <input type="checkbox" class="custom-control-input" id="chktc_default" />
                                                <label class="custom-control-label" for="chktc_default"> Default </label>
                                            </div>
                                            <div class="checkbox-primary custom-control custom-checkbox text-color">
                                                <input type="checkbox" class="custom-control-input" id="chktc_primary" />
                                                <label class="custom-control-label" for="chktc_primary"> Primary </label>
                                            </div>
                                            <div class="checkbox-success custom-control custom-checkbox text-color">
                                                <input type="checkbox" class="custom-control-input" id="chktc_success" />
                                                <label class="custom-control-label" for="chktc_success"> Success </label>
                                            </div>
                                            <div class="checkbox-info custom-control custom-checkbox text-color">
                                                <input type="checkbox" class="custom-control-input" id="chktc_info" />
                                                <label class="custom-control-label" for="chktc_info"> info </label>
                                            </div>
                                            <div class="checkbox-warning custom-control custom-checkbox text-color">
                                                <input type="checkbox" class="custom-control-input" id="chktc_warning" />
                                                <label class="custom-control-label" for="chktc_warning"> Warning </label>
                                            </div>
                                            <div class="checkbox-danger custom-control custom-checkbox text-color">
                                                <input type="checkbox" class="custom-control-input" id="chktc_danger" />
                                                <label class="custom-control-label" for="chktc_danger"> Danger </label>
                                            </div>
                                            <div class="checkbox-secondary custom-control custom-checkbox text-color">
                                                <input type="checkbox" class="custom-control-input" id="chktc_secondary" />
                                                <label class="custom-control-label" for="chktc_secondary"> Secondary </label>
                                            </div>
                                            <div class="checkbox-dark custom-control custom-checkbox text-color">
                                                <input type="checkbox" class="custom-control-input" id="chktc_dark" />
                                                <label class="custom-control-label" for="chktc_dark"> Dark </label>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-6">
                                            <div class="checkbox-outline-default custom-control custom-checkbox text-color">
                                                <input type="checkbox" class="custom-control-input" id="chkouttc_default" />
                                                <label class="custom-control-label" for="chkouttc_default"> Default </label>
                                            </div>
                                            <div class="checkbox-outline-primary custom-control custom-checkbox text-color">
                                                <input type="checkbox" class="custom-control-input" id="chkouttc_primary" />
                                                <label class="custom-control-label" for="chkouttc_primary"> Primary </label>
                                            </div>
                                            <div class="checkbox-outline-success custom-control custom-checkbox text-color">
                                                <input type="checkbox" class="custom-control-input" id="chkouttc_success" />
                                                <label class="custom-control-label" for="chkouttc_success"> Success </label>
                                            </div>
                                            <div class="checkbox-outline-info custom-control custom-checkbox text-color">
                                                <input type="checkbox" class="custom-control-input" id="chkouttc_info" />
                                                <label class="custom-control-label" for="chkouttc_info"> Info </label>
                                            </div>
                                            <div class="checkbox-outline-warning custom-control custom-checkbox text-color">
                                                <input type="checkbox" class="custom-control-input" id="chkouttc_warning" />
                                                <label class="custom-control-label" for="chkouttc_warning"> Warning </label>
                                            </div>
                                            <div class="checkbox-outline-danger custom-control custom-checkbox text-color">
                                                <input type="checkbox" class="custom-control-input" id="chkouttc_danger" />
                                                <label class="custom-control-label" for="chkouttc_danger"> Danger </label>
                                            </div>
                                            <div class="checkbox-outline-secondary custom-control custom-checkbox text-color">
                                                <input type="checkbox" class="custom-control-input" id="chkouttc_secondary" />
                                                <label class="custom-control-label" for="chkouttc_secondary"> Secondary </label>
                                            </div>
                                            <div class="checkbox-outline-dark custom-control custom-checkbox text-color">
                                                <input type="checkbox" class="custom-control-input" id="chkouttc_dark" />
                                                <label class="custom-control-label" for="chkouttc_dark"> Dark </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="code-section-container show-code">
                                        <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                        <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                            <highlight>
                                                <pre>
&lt;!-- Default Text Color --&gt;
&lt;div class=&quot;checkbox-default custom-control custom-checkbox text-color&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chktc_default&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chktc_default&quot;&gt; Default &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-primary custom-control custom-checkbox text-color&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chktc_primary&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chktc_primary&quot;&gt; Primary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-success custom-control custom-checkbox text-color&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chktc_success&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chktc_success&quot;&gt; Success &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-info custom-control custom-checkbox text-color&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chktc_info&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chktc_info&quot;&gt; info &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-warning custom-control custom-checkbox text-color&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chktc_warning&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chktc_warning&quot;&gt; Warning &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-danger custom-control custom-checkbox text-color&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chktc_danger&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chktc_danger&quot;&gt; Danger &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-secondary custom-control custom-checkbox text-color&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chktc_secondary&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chktc_secondary&quot;&gt; Secondary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-dark custom-control custom-checkbox text-color&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chktc_dark&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chktc_dark&quot;&gt; Dark &lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;checkbox-outline-default custom-control custom-checkbox text-color&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkouttc_default&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkouttc_default&quot;&gt; Default &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-Primary custom-control custom-checkbox text-color&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkouttc_primary&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkouttc_primary&quot;&gt; Primary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-success custom-control custom-checkbox text-color&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkouttc_success&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkouttc_success&quot;&gt; Success &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-info custom-control custom-checkbox text-color&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkouttc_info&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkouttc_info&quot;&gt; Info &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-warning custom-control custom-checkbox text-color&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkouttc_warning&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkouttc_warning&quot;&gt; Warning &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-danger custom-control custom-checkbox text-color&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkouttc_danger&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkouttc_danger&quot;&gt; Danger &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-secondary custom-control custom-checkbox text-color&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkouttc_secondary&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkouttc_secondary&quot;&gt; Secondary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-dark custom-control custom-checkbox text-color&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkouttc_dark&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkouttc_dark&quot;&gt; Dark &lt;/label&gt;
&lt;/div&gt;
</pre
                                                >
                                            </highlight>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Rounded Text Color</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.text-color</code> class to make text colored as checkbox.</p>

                                    <div class="row">
                                        <div class="col-md-6 col-6">
                                            <div class="checkbox-default custom-control custom-checkbox text-color rounded">
                                                <input type="checkbox" class="custom-control-input" id="chktcrd_default" />
                                                <label class="custom-control-label" for="chktcrd_default"> Default </label>
                                            </div>
                                            <div class="checkbox-primary custom-control custom-checkbox text-color rounded">
                                                <input type="checkbox" class="custom-control-input" id="chktcrd_primary" />
                                                <label class="custom-control-label" for="chktcrd_primary"> Primary </label>
                                            </div>
                                            <div class="checkbox-success custom-control custom-checkbox text-color rounded">
                                                <input type="checkbox" class="custom-control-input" id="chktcrd_success" />
                                                <label class="custom-control-label" for="chktcrd_success"> Success </label>
                                            </div>
                                            <div class="checkbox-info custom-control custom-checkbox text-color rounded">
                                                <input type="checkbox" class="custom-control-input" id="chktcrd_info" />
                                                <label class="custom-control-label" for="chktcrd_info"> info </label>
                                            </div>
                                            <div class="checkbox-warning custom-control custom-checkbox text-color rounded">
                                                <input type="checkbox" class="custom-control-input" id="chktcrd_warning" />
                                                <label class="custom-control-label" for="chktcrd_warning"> Warning </label>
                                            </div>
                                            <div class="checkbox-danger custom-control custom-checkbox text-color rounded">
                                                <input type="checkbox" class="custom-control-input" id="chktcrd_danger" />
                                                <label class="custom-control-label" for="chktcrd_danger"> Danger </label>
                                            </div>
                                            <div class="checkbox-secondary custom-control custom-checkbox text-color rounded">
                                                <input type="checkbox" class="custom-control-input" id="chktcrd_secondary" />
                                                <label class="custom-control-label" for="chktcrd_secondary"> Secondary </label>
                                            </div>
                                            <div class="checkbox-dark custom-control custom-checkbox text-color rounded">
                                                <input type="checkbox" class="custom-control-input" id="chktcrd_dark" />
                                                <label class="custom-control-label" for="chktcrd_dark"> Dark </label>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-6">
                                            <div class="checkbox-outline-default custom-control custom-checkbox text-color rounded">
                                                <input type="checkbox" class="custom-control-input" id="chkouttcrd_default" />
                                                <label class="custom-control-label" for="chkouttcrd_default"> Default </label>
                                            </div>
                                            <div class="checkbox-outline-primary custom-control custom-checkbox text-color rounded">
                                                <input type="checkbox" class="custom-control-input" id="chkouttcrd_primary" />
                                                <label class="custom-control-label" for="chkouttcrd_primary"> Primary </label>
                                            </div>
                                            <div class="checkbox-outline-success custom-control custom-checkbox text-color rounded">
                                                <input type="checkbox" class="custom-control-input" id="chkouttcrd_success" />
                                                <label class="custom-control-label" for="chkouttcrd_success"> Success </label>
                                            </div>
                                            <div class="checkbox-outline-info custom-control custom-checkbox text-color rounded">
                                                <input type="checkbox" class="custom-control-input" id="chkouttcrd_info" />
                                                <label class="custom-control-label" for="chkouttcrd_info"> Info </label>
                                            </div>
                                            <div class="checkbox-outline-warning custom-control custom-checkbox text-color rounded">
                                                <input type="checkbox" class="custom-control-input" id="chkouttcrd_warning" />
                                                <label class="custom-control-label" for="chkouttcrd_warning"> Warning </label>
                                            </div>
                                            <div class="checkbox-outline-danger custom-control custom-checkbox text-color rounded">
                                                <input type="checkbox" class="custom-control-input" id="chkouttcrd_danger" />
                                                <label class="custom-control-label" for="chkouttcrd_danger"> Danger </label>
                                            </div>
                                            <div class="checkbox-outline-secondary custom-control custom-checkbox text-color rounded">
                                                <input type="checkbox" class="custom-control-input" id="chkouttcrd_secondary" />
                                                <label class="custom-control-label" for="chkouttcrd_secondary"> Secondary </label>
                                            </div>
                                            <div class="checkbox-outline-dark custom-control custom-checkbox text-color rounded">
                                                <input type="checkbox" class="custom-control-input" id="chkouttcrd_dark" />
                                                <label class="custom-control-label" for="chkouttcrd_dark"> Dark </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="code-section-container show-code">
                                        <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>
                                        <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                            <highlight>
                                                <pre>
&lt;!-- Rounded Text Color --&gt;
&lt;div class=&quot;checkbox-default custom-control custom-checkbox text-color rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chktcrd_default&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chktcrd_default&quot;&gt; Default &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-primary custom-control custom-checkbox text-color rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chktcrd_primary&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chktcrd_primary&quot;&gt; Primary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-success custom-control custom-checkbox text-color rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chktcrd_success&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chktcrd_success&quot;&gt; Success &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-info custom-control custom-checkbox text-color rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chktcrd_info&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chktcrd_info&quot;&gt; info &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-warning custom-control custom-checkbox text-color rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chktcrd_warning&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chktcrd_warning&quot;&gt; Warning &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-danger custom-control custom-checkbox text-color rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chktcrd_danger&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chktcrd_danger&quot;&gt; Danger &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-secondary custom-control custom-checkbox text-color rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chktcrd_secondary&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chktcrd_secondary&quot;&gt; Secondary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-dark custom-control custom-checkbox text-color rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chktcrd_dark&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chktcrd_dark&quot;&gt; Dark &lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;checkbox-outline-default custom-control custom-checkbox text-color rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkouttcrd_default&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkouttcrd_default&quot;&gt; Default &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-primary custom-control custom-checkbox text-color rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkouttcrd_primary&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkouttcrd_primary&quot;&gt; Primary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-success custom-control custom-checkbox text-color rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkouttcrd_success&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkouttcrd_success&quot;&gt; Success &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-info custom-control custom-checkbox text-color rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkouttcrd_info&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkouttcrd_info&quot;&gt; Info &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-warning custom-control custom-checkbox text-color rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkouttcrd_warning&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkouttcrd_warning&quot;&gt; Warning &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-danger custom-control custom-checkbox text-color rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkouttcrd_danger&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkouttcrd_danger&quot;&gt; Danger &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-secondary custom-control custom-checkbox text-color rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkouttcrd_secondary&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkouttcrd_secondary&quot;&gt; Secondary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox-outline-dark custom-control custom-checkbox text-color rounded&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chkouttcrd_dark&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chkouttcrd_dark&quot;&gt; Dark &lt;/label&gt;
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

                    <div class="row layout-top-spacing">
                        <div id="radio" class="col-lg-12">
                            <div class="seperator-header">
                                <h4 class="">Radio</h4>
                            </div>
                        </div>

                        <!-- Background -->
                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Default</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.radio-*</code> class to change different colors.</p>

                                    <div class="radio-default custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdo_default" name="custom-radio-1" />
                                        <label class="custom-control-label" for="rdo_default"> Default </label>
                                    </div>
                                    <div class="radio-primary custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdo_primary" name="custom-radio-1" />
                                        <label class="custom-control-label" for="rdo_primary"> Primary </label>
                                    </div>
                                    <div class="radio-success custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdo_success" name="custom-radio-1" />
                                        <label class="custom-control-label" for="rdo_success"> Success </label>
                                    </div>
                                    <div class="radio-info custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdo_info" name="custom-radio-1" />
                                        <label class="custom-control-label" for="rdo_info"> Info </label>
                                    </div>
                                    <div class="radio-warning custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdo_warning" name="custom-radio-1" />
                                        <label class="custom-control-label" for="rdo_warning"> Warning </label>
                                    </div>
                                    <div class="radio-danger custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdo_danger" name="custom-radio-1" />
                                        <label class="custom-control-label" for="rdo_danger"> Danger </label>
                                    </div>
                                    <div class="radio-secondary custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdo_secondary" name="custom-radio-1" />
                                        <label class="custom-control-label" for="rdo_secondary"> Secondary </label>
                                    </div>
                                    <div class="radio-dark custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdo_dark" name="custom-radio-1" />
                                        <label class="custom-control-label" for="rdo_dark"> Dark </label>
                                    </div>

                                    <div class="code-section-container show-code">
                                        <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></button>

                                        <div v-if="code_arr.includes('code7')" class="code-section text-start">
                                            <highlight>
                                                <pre>
&lt;!-- Default --&gt;
&lt;div class=&quot;radio-default custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdo_default&quot; name=&quot;custom-radio-1&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdo_default&quot;&gt; Default &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-primary custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdo_primary&quot; name=&quot;custom-radio-1&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdo_primary&quot;&gt; Primary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-success custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdo_success&quot; name=&quot;custom-radio-1&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdo_success&quot;&gt; Success &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-info custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdo_info&quot; name=&quot;custom-radio-1&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdo_info&quot;&gt; Info &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-warning custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdo_warning&quot; name=&quot;custom-radio-1&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdo_warning&quot;&gt; Warning &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-danger custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdo_danger&quot; name=&quot;custom-radio-1&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdo_danger&quot;&gt; Danger &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-secondary custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdo_secondary&quot; name=&quot;custom-radio-1&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdo_secondary&quot;&gt; Secondary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-dark custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdo_dark&quot; name=&quot;custom-radio-1&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdo_dark&quot;&gt; Dark &lt;/label&gt;
&lt;/div&gt;
</pre
                                                >
                                            </highlight>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Classic</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.radio-classic</code> class to make classic.</p>

                                    <div class="radio-classic radio-default custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdocls_default" name="custom-radio-2" />
                                        <label class="custom-control-label" for="rdocls_default"> Default </label>
                                    </div>
                                    <div class="radio-classic radio-primary custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdocls_primary" name="custom-radio-2" />
                                        <label class="custom-control-label" for="rdocls_primary"> Primary </label>
                                    </div>
                                    <div class="radio-classic radio-success custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdocls_success" name="custom-radio-2" />
                                        <label class="custom-control-label" for="rdocls_success"> Success </label>
                                    </div>
                                    <div class="radio-classic radio-info custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdocls_info" name="custom-radio-2" />
                                        <label class="custom-control-label" for="rdocls_info"> Info </label>
                                    </div>
                                    <div class="radio-classic radio-warning custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdocls_warning" name="custom-radio-2" />
                                        <label class="custom-control-label" for="rdocls_warning"> Warning </label>
                                    </div>
                                    <div class="radio-classic radio-danger custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdocls_danger" name="custom-radio-2" />
                                        <label class="custom-control-label" for="rdocls_danger"> Danger </label>
                                    </div>
                                    <div class="radio-classic radio-secondary custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdocls_secondary" name="custom-radio-2" />
                                        <label class="custom-control-label" for="rdocls_secondary"> Secondary </label>
                                    </div>
                                    <div class="radio-classic radio-dark custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdocls_dark" name="custom-radio-2" />
                                        <label class="custom-control-label" for="rdocls_dark"> Dark </label>
                                    </div>

                                    <div class="code-section-container show-code">
                                        <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></button>
                                        <div v-if="code_arr.includes('code8')" class="code-section text-start">
                                            <highlight>
                                                <pre>
&lt;!-- Classic --&gt;
&lt;div class=&quot;radio-classic radio-default custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdocls_default&quot; name=&quot;custom-radio-2&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdocls_default&quot;&gt; Default &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-classic radio-primary custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdocls_primary&quot; name=&quot;custom-radio-2&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdocls_primary&quot;&gt; Primary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-classic radio-success custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdocls_success&quot; name=&quot;custom-radio-2&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdocls_success&quot;&gt; Success &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-classic radio-info custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdocls_info&quot; name=&quot;custom-radio-2&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdocls_info&quot;&gt; Info &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-classic radio-warning custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdocls_warning&quot; name=&quot;custom-radio-2&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdocls_warning&quot;&gt; Warning &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-classic radio-danger custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdocls_danger&quot; name=&quot;custom-radio-2&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdocls_danger&quot;&gt; Danger &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-classic radio-secondary custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdocls_secondary&quot; name=&quot;custom-radio-2&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdocls_secondary&quot;&gt; Secondary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-classic radio-dark custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdocls_dark&quot; name=&quot;custom-radio-2&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdocls_dark&quot;&gt; Dark &lt;/label&gt;
&lt;/div&gt;
</pre
                                                >
                                            </highlight>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Square</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.square-radio</code> class to make squares.</p>

                                    <div class="square-radio radio-default custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdosq_default" name="custom-radio-3" />
                                        <label class="custom-control-label" for="rdosq_default"> Default </label>
                                    </div>
                                    <div class="square-radio radio-primary custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdosq_primary" name="custom-radio-3" />
                                        <label class="custom-control-label" for="rdosq_primary"> Primary </label>
                                    </div>
                                    <div class="square-radio radio-success custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdosq_success" name="custom-radio-3" />
                                        <label class="custom-control-label" for="rdosq_success"> Success </label>
                                    </div>
                                    <div class="square-radio radio-info custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdosq_info" name="custom-radio-3" />
                                        <label class="custom-control-label" for="rdosq_info"> Info </label>
                                    </div>
                                    <div class="square-radio radio-warning custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdosq_warning" name="custom-radio-3" />
                                        <label class="custom-control-label" for="rdosq_warning"> Warning </label>
                                    </div>
                                    <div class="square-radio radio-danger custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdosq_danger" name="custom-radio-3" />
                                        <label class="custom-control-label" for="rdosq_danger"> Danger </label>
                                    </div>
                                    <div class="square-radio radio-secondary custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdosq_secondary" name="custom-radio-3" />
                                        <label class="custom-control-label" for="rdosq_secondary"> Secondary </label>
                                    </div>
                                    <div class="square-radio radio-dark custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdosq_dark" name="custom-radio-3" />
                                        <label class="custom-control-label" for="rdosq_dark"> Dark </label>
                                    </div>

                                    <div class="code-section-container show-code">
                                        <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></button>
                                        <div v-if="code_arr.includes('code9')" class="code-section text-start">
                                            <highlight>
                                                <pre>
&lt;!-- square --&gt;
&lt;div class=&quot;square-radio radio-default custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdosq_default&quot; name=&quot;custom-radio-3&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdosq_default&quot;&gt; Default &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;square-radio radio-primary custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdosq_primary&quot; name=&quot;custom-radio-3&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdosq_primary&quot;&gt; Primary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;square-radio radio-success custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdosq_success&quot; name=&quot;custom-radio-3&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdosq_success&quot;&gt; Success &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;square-radio radio-info custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdosq_info&quot; name=&quot;custom-radio-3&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdosq_info&quot;&gt; Info &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;square-radio radio-warning custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdosq_warning&quot; name=&quot;custom-radio-3&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdosq_warning&quot;&gt; Warning &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;square-radio radio-danger custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdosq_danger&quot; name=&quot;custom-radio-3&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdosq_danger&quot;&gt; Danger &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;square-radio radio-secondary custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdosq_secondary&quot; name=&quot;custom-radio-3&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdosq_secondary&quot;&gt; Secondary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;square-radio radio-dark custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdosq_dark&quot; name=&quot;custom-radio-3&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdosq_dark&quot;&gt; Dark &lt;/label&gt;
&lt;/div&gt;
</pre
                                                >
                                            </highlight>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Default Text Color</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.text-color</code> class to make text colored as checkbox.</p>

                                    <div class="text-color radio-default custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdotc_default" name="custom-radio-4" />
                                        <label class="custom-control-label" for="rdotc_default"> Default </label>
                                    </div>
                                    <div class="text-color radio-primary custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdotc_primary" name="custom-radio-4" />
                                        <label class="custom-control-label" for="rdotc_primary"> Primary </label>
                                    </div>
                                    <div class="text-color radio-success custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdotc_success" name="custom-radio-4" />
                                        <label class="custom-control-label" for="rdotc_success"> Success </label>
                                    </div>
                                    <div class="text-color radio-info custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdotc_info" name="custom-radio-4" />
                                        <label class="custom-control-label" for="rdotc_info"> Info </label>
                                    </div>
                                    <div class="text-color radio-warning custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdotc_warning" name="custom-radio-4" />
                                        <label class="custom-control-label" for="rdotc_warning"> Warning </label>
                                    </div>
                                    <div class="text-color radio-danger custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdotc_danger" name="custom-radio-4" />
                                        <label class="custom-control-label" for="rdotc_danger"> Danger </label>
                                    </div>
                                    <div class="text-color radio-secondary custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdotc_secondary" name="custom-radio-4" />
                                        <label class="custom-control-label" for="rdotc_secondary"> Secondary </label>
                                    </div>
                                    <div class="text-color radio-dark custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdotc_dark" name="custom-radio-4" />
                                        <label class="custom-control-label" for="rdotc_dark"> Dark </label>
                                    </div>

                                    <div class="code-section-container show-code">
                                        <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code10')"><span>Code</span></button>

                                        <div v-if="code_arr.includes('code10')" class="code-section text-start">
                                            <highlight>
                                                <pre>
&lt;!-- Default text color --&gt;
&lt;div class=&quot;text-color radio-default custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdotc_default&quot; name=&quot;custom-radio-4&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdotc_default&quot;&gt; Default &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;text-color radio-primary custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdotc_primary&quot; name=&quot;custom-radio-4&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdotc_primary&quot;&gt; Primary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;text-color radio-success custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdotc_success&quot; name=&quot;custom-radio-4&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdotc_success&quot;&gt; Success &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;text-color radio-info custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdotc_info&quot; name=&quot;custom-radio-4&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdotc_info&quot;&gt; Info &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;text-color radio-warning custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdotc_warning&quot; name=&quot;custom-radio-4&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdotc_warning&quot;&gt; Warning &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;text-color radio-danger custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdotc_danger&quot; name=&quot;custom-radio-4&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdotc_danger&quot;&gt; Danger &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;text-color radio-secondary custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdotc_secondary&quot; name=&quot;custom-radio-4&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdotc_secondary&quot;&gt; Secondary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;text-color radio-dark custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdotc_dark&quot; name=&quot;custom-radio-4&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdotc_dark&quot;&gt; Dark &lt;/label&gt;
&lt;/div&gt;
</pre
                                                >
                                            </highlight>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Classic Text Color</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.radio-classic.text-color</code> class to make text colored as checkbox..</p>

                                    <div class="radio-classic text-color radio-default custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdoclstc_default" name="custom-radio-5" />
                                        <label class="custom-control-label" for="rdoclstc_default"> Default </label>
                                    </div>
                                    <div class="radio-classic text-color radio-primary custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdoclstc_primary" name="custom-radio-5" />
                                        <label class="custom-control-label" for="rdoclstc_primary"> Primary </label>
                                    </div>
                                    <div class="radio-classic text-color radio-success custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdoclstc_success" name="custom-radio-5" />
                                        <label class="custom-control-label" for="rdoclstc_success"> Success </label>
                                    </div>
                                    <div class="radio-classic text-color radio-info custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdoclstc_info" name="custom-radio-5" />
                                        <label class="custom-control-label" for="rdoclstc_info"> Info </label>
                                    </div>
                                    <div class="radio-classic text-color radio-warning custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdoclstc_warning" name="custom-radio-5" />
                                        <label class="custom-control-label" for="rdoclstc_warning"> Warning </label>
                                    </div>
                                    <div class="radio-classic text-color radio-danger custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdoclstc_danger" name="custom-radio-5" />
                                        <label class="custom-control-label" for="rdoclstc_danger"> Danger </label>
                                    </div>
                                    <div class="radio-classic text-color radio-secondary custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdoclstc_secondary" name="custom-radio-5" />
                                        <label class="custom-control-label" for="rdoclstc_secondary"> Secondary </label>
                                    </div>
                                    <div class="radio-classic text-color radio-dark custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdoclstc_dark" name="custom-radio-5" />
                                        <label class="custom-control-label" for="rdoclstc_dark"> Dark </label>
                                    </div>

                                    <div class="code-section-container show-code">
                                        <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code11')"><span>Code</span></button>

                                        <div v-if="code_arr.includes('code11')" class="code-section text-start">
                                            <highlight>
                                                <pre>
&lt;!-- Classic text color --&gt;
&lt;div class=&quot;radio-classic text-color radio-default custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdoclstc_default&quot; name=&quot;custom-radio-5&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdoclstc_default&quot;&gt; Default &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-classic text-color radio-primary custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdoclstc_primary&quot; name=&quot;custom-radio-5&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdoclstc_primary&quot;&gt; Primary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-classic text-color radio-success custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdoclstc_success&quot; name=&quot;custom-radio-5&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdoclstc_success&quot;&gt; Success &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-classic text-color radio-info custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdoclstc_info&quot; name=&quot;custom-radio-5&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdoclstc_info&quot;&gt; Info &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-classic text-color radio-warning custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdoclstc_warning&quot; name=&quot;custom-radio-5&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdoclstc_warning&quot;&gt; Warning &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-classic text-color radio-danger custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdoclstc_danger&quot; name=&quot;custom-radio-5&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdoclstc_danger&quot;&gt; Danger &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-classic text-color radio-secondary custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdoclstc_secondary&quot; name=&quot;custom-radio-5&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdoclstc_secondary&quot;&gt; Secondary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio-classic text-color radio-dark custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdoclstc_dark&quot; name=&quot;custom-radio-5&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdoclstc_dark&quot;&gt; Dark &lt;/label&gt;
&lt;/div&gt;
</pre
                                                >
                                            </highlight>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Square Text Color</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.square-radio.text-color</code> class to make text colored as checkbox.</p>

                                    <div class="square-radio text-color radio-default custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdosqtc_default" name="custom-radio-6" />
                                        <label class="custom-control-label" for="rdosqtc_default"> Default </label>
                                    </div>
                                    <div class="square-radio text-color radio-primary custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdosqtc_primary" name="custom-radio-6" />
                                        <label class="custom-control-label" for="rdosqtc_primary"> Primary </label>
                                    </div>
                                    <div class="square-radio text-color radio-success custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdosqtc_success" name="custom-radio-6" />
                                        <label class="custom-control-label" for="rdosqtc_success"> Success </label>
                                    </div>
                                    <div class="square-radio text-color radio-info custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdosqtc_info" name="custom-radio-6" />
                                        <label class="custom-control-label" for="rdosqtc_info"> Info </label>
                                    </div>
                                    <div class="square-radio text-color radio-warning custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdosqtc_warning" name="custom-radio-6" />
                                        <label class="custom-control-label" for="rdosqtc_warning"> Warning </label>
                                    </div>
                                    <div class="square-radio text-color radio-danger custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdosqtc_danger" name="custom-radio-6" />
                                        <label class="custom-control-label" for="rdosqtc_danger"> Danger </label>
                                    </div>
                                    <div class="square-radio text-color radio-secondary custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdosqtc_secondary" name="custom-radio-6" />
                                        <label class="custom-control-label" for="rdosqtc_secondary"> Secondary </label>
                                    </div>
                                    <div class="square-radio text-color radio-dark custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="rdosqtc_dark" name="custom-radio-6" />
                                        <label class="custom-control-label" for="rdosqtc_dark"> Dark </label>
                                    </div>

                                    <div class="code-section-container show-code">
                                        <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code12')"><span>Code</span></button>

                                        <div v-if="code_arr.includes('code12')" class="code-section text-start">
                                            <highlight>
                                                <pre>
&lt;!-- Square text color --&gt;
&lt;div class=&quot;square-radio text-color radio-default custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdosqtc_default&quot; name=&quot;custom-radio-6&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdosqtc_default&quot;&gt; Default &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;square-radio text-color radio-primary custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdosqtc_primary&quot; name=&quot;custom-radio-6&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdosqtc_primary&quot;&gt; Primary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;square-radio text-color radio-success custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdosqtc_success&quot; name=&quot;custom-radio-6&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdosqtc_success&quot;&gt; Success &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;square-radio text-color radio-info custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdosqtc_info&quot; name=&quot;custom-radio-6&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdosqtc_info&quot;&gt; Info &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;square-radio text-color radio-warning custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdosqtc_warning&quot; name=&quot;custom-radio-6&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdosqtc_warning&quot;&gt; Warning &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;square-radio text-color radio-danger custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdosqtc_danger&quot; name=&quot;custom-radio-6&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdosqtc_danger&quot;&gt; Danger &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;square-radio text-color radio-secondary custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdosqtc_secondary&quot; name=&quot;custom-radio-6&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdosqtc_secondary&quot;&gt; Secondary &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;square-radio text-color radio-dark custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;rdosqtc_dark&quot; name=&quot;custom-radio-6&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdosqtc_dark&quot;&gt; Dark &lt;/label&gt;
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
        </div>
    </div>
</template>

<style scoped>
    .custom-checkbox,
    .custom-radio {
        margin-bottom: 0.5rem;
    }
</style>

<script setup>
    import { ref } from "vue";
    import "../../assets/sass/scrollspyNav.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Checkbox and Radio" });

    const code_arr = ref([]);
    const radio_1 = ref("radio-2");
    const radio_2 = ref("radio-2");
    const radio_3 = ref("radio-2");
    const radio_4 = ref("radio-2");
    const radio_5 = ref("radio-2");
    const radio_6 = ref("radio-2");

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
