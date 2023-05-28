<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Alerts</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#alertDefault" class="nav-link">Default</a>
                    <a href="#alertOutline" class="nav-link">Outline</a>
                    <a href="#alertSolid" class="nav-link">Solid</a>
                    <a href="#alertIcon" class="nav-link">Icon</a>
                    <a href="#alertArrowed" class="nav-link">Arrowed</a>
                    <a href="#alertCustom" class="nav-link">Custom</a>
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
                        <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/alerts" class="text-info"> https://getbootstrap.com/docs/5.0/components/alerts </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="alertDefault" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Default Alerts</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="alert alert-light-primary alert-dismissible border-0 mb-4" role="alert">
                                <strong>Primary!</strong> Lorem Ipsum is simply dummy text of the printing.
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">×</button>
                            </div>
                            <div class="alert alert-light-warning alert-dismissible border-0 mb-4" role="alert">
                                <strong>Warning!</strong> Lorem Ipsum is simply dummy text of the printing.
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">×</button>
                            </div>
                            <div class="alert alert-light-success alert-dismissible border-0 mb-4" role="alert">
                                <strong>Success!</strong> Lorem Ipsum is simply dummy text of the printing.
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">×</button>
                            </div>
                            <div class="alert alert-light-info alert-dismissible border-0 mb-4" role="alert">
                                <strong>Info!</strong> Lorem Ipsum is simply dummy text of the printing.
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">×</button>
                            </div>
                            <div class="alert alert-light-dark alert-dismissible border-0 mb-4" role="alert">
                                <strong>Dark!</strong> Lorem Ipsum is simply dummy text of the printing.
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">×</button>
                            </div>
                            <div class="alert alert-light-danger alert-dismissible border-0 mb-4" role="alert">
                                <strong>Danger!</strong> Lorem Ipsum is simply dummy text of the printing.
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">×</button>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Default --&gt;
&lt;div class=&quot;alert alert-light-primary alert-dismissible border-0 mb-4&quot; role=&quot;alert&quot;&gt;
    &lt;strong&gt;Primary!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
    &lt;button type=&quot;button&quot; class=&quot;close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&times;&lt;/button&gt;
&lt;/div&gt;

&lt;div class=&quot;alert alert-light-warning alert-dismissible border-0 mb-4&quot; role=&quot;alert&quot;&gt;
    &lt;strong&gt;Warning!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
    &lt;button type=&quot;button&quot; class=&quot;close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&times;&lt;/button&gt;
&lt;/div&gt;

&lt;div class=&quot;alert alert-light-success alert-dismissible border-0 mb-4&quot; role=&quot;alert&quot;&gt;
    &lt;strong&gt;Success!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
    &lt;button type=&quot;button&quot; class=&quot;close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&times;&lt;/button&gt;
&lt;/div&gt;

&lt;div class=&quot;alert alert-light-info alert-dismissible border-0 mb-4&quot; role=&quot;alert&quot;&gt;
    &lt;strong&gt;Info!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
    &lt;button type=&quot;button&quot; class=&quot;close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&times;&lt;/button&gt;
&lt;/div&gt;

&lt;div class=&quot;alert alert-light-dark alert-dismissible border-0 mb-4&quot; role=&quot;alert&quot;&gt;
    &lt;strong&gt;Dark!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
    &lt;button type=&quot;button&quot; class=&quot;close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&times;&lt;/button&gt;
&lt;/div&gt;

&lt;div class=&quot;alert alert-light-danger alert-dismissible border-0 mb-4&quot; role=&quot;alert&quot;&gt;
    &lt;strong&gt;Danger!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
    &lt;button type=&quot;button&quot; class=&quot;close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&times;&lt;/button&gt;
&lt;/div&gt;
 </pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="alertOutline" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Outline Alerts</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="alert alert-outline-primary alert-dismissible mb-4" role="alert">
                                <strong>Primary!</strong> Lorem Ipsum is simply dummy text of the printing.
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">×</button>
                            </div>
                            <div class="alert alert-outline-danger alert-dismissible mb-4" role="alert">
                                <strong>Danger!</strong> Lorem Ipsum is simply dummy text of the printing.
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">×</button>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Outline --&gt;
&lt;div class=&quot;alert alert-outline-primary alert-dismissible mb-4&quot; role=&quot;alert&quot;&gt;
    &lt;strong&gt;Primary!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
    &lt;button type=&quot;button&quot; class=&quot;close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&times;&lt;/button&gt;
&lt;/div&gt;

&lt;div class=&quot;alert alert-outline-danger alert-dismissible mb-4&quot; role=&quot;alert&quot;&gt;
    &lt;strong&gt;Danger!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
    &lt;button type=&quot;button&quot; class=&quot;close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&times;&lt;/button&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="alertSolid" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Solid Alerts</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="alert alert-primary alert-dismissible mb-4" role="alert">
                                <strong>Primary!</strong> Lorem Ipsum is simply dummy text of the printing.
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">×</button>
                            </div>
                            <div class="alert alert-warning alert-dismissible mb-4" role="alert">
                                <strong>Warning!</strong> Lorem Ipsum is simply dummy text of the printing.
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">×</button>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Solid --&gt;
&lt;div class=&quot;alert alert-primary alert-dismissible mb-4&quot; role=&quot;alert&quot;&gt;
    &lt;strong&gt;Primary!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
    &lt;button type=&quot;button&quot; class=&quot;close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&times;&lt;/button&gt;
&lt;/div&gt;

&lt;div class=&quot;alert alert-warning alert-dismissible mb-4&quot; role=&quot;alert&quot;&gt;
    &lt;strong&gt;Warning!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
    &lt;button type=&quot;button&quot; class=&quot;close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&times;&lt;/button&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="alertIcon" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Alerts with icon</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="alert alert-icon-left alert-dismissible alert-light-success mb-4" role="alert">
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
                                    class="feather feather-alert-triangle"
                                >
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                    <line x1="12" y1="9" x2="12" y2="13"></line>
                                    <line x1="12" y1="17" x2="12" y2="17"></line>
                                </svg>
                                <strong>Warning!</strong> Lorem Ipsum is simply dummy printing.
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">×</button>
                            </div>

                            <div class="alert alert-icon-right alert-dismissible alert-light-dark mb-4" role="alert">
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
                                    class="feather feather-settings"
                                >
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <path
                                        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                                    ></path>
                                </svg>
                                <strong>Warning!</strong> Lorem Ipsum is simply dummy printing.
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">×</button>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- With Icons --&gt;
&lt;div class=&quot;alert alert-icon-left alert-dismissible alert-light-success mb-4&quot; role=&quot;alert&quot;&gt;
    &lt;svg&gt; ... &lt;/svg&gt;
    &lt;strong&gt;Warning!&lt;/strong&gt; Lorem Ipsum is simply dummy printing.
    &lt;button type=&quot;button&quot; class=&quot;close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&times;&lt;/button&gt;
&lt;/div&gt;

&lt;div class=&quot;alert alert-icon-right alert-dismissible alert-light-dark mb-4&quot; role=&quot;alert&quot;&gt;
    &lt;strong&gt;Warning!&lt;/strong&gt; Lorem Ipsum is simply dummy printing.
    &lt;svg&gt; ... &lt;/svg&gt;
    &lt;button type=&quot;button&quot; class=&quot;close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&times;&lt;/button&gt;
&lt;/div&gt;
 </pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="alertArrowed" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Arrowed Alerts</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="alert alert-arrow-left alert-icon-left alert-light-primary alert-dismissible mb-4" role="alert">
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">×</button>
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
                                    class="feather feather-bell"
                                >
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                </svg>
                                <strong>Warning!</strong> Lorem Ipsum is simply dummy printing.
                            </div>

                            <div class="alert alert-arrow-right alert-icon-right alert-light-danger alert-dismissible mb-4" role="alert">
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">×</button>
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
                                    class="feather feather-alert-circle"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line x1="12" y1="16" x2="12" y2="16"></line>
                                </svg>
                                <strong>Warning!</strong> Lorem Ipsum is simply dummy printing.
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Arrowed Alerts --&gt;
&lt;div class=&quot;alert alert-arrow-left alert-icon-left alert-light-primary alert-dismissible mb-4&quot; role=&quot;alert&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&times;&lt;/button&gt;
    &lt;svg&gt; ... &lt;/svg&gt;
    &lt;strong&gt;Warning!&lt;/strong&gt; Lorem Ipsum is simply dummy printing.
&lt;/div&gt;

&lt;div class=&quot;alert alert-arrow-right alert-icon-right alert-light-danger alert-dismissible mb-4&quot; role=&quot;alert&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&times;&lt;/button&gt;
    &lt;svg&gt; ... &lt;/svg&gt;
    &lt;strong&gt;Warning!&lt;/strong&gt; Lorem Ipsum is simply dummy printing.
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="alertCustom" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Custom Alerts</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="alert custom-alert-1 mb-4 alert-dismissible" role="alert">
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">×</button>
                                <div class="media mb-0">
                                    <div class="media-aside align-self-start">
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
                                            class="feather feather-alert-triangle"
                                        >
                                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                            <line x1="12" y1="9" x2="12" y2="13"></line>
                                            <line x1="12" y1="17" x2="12" y2="17"></line>
                                        </svg>
                                    </div>
                                    <div class="media-body">
                                        <div class="alert-text ms-2"><strong>Warning! </strong><span> Lorem Ipsum is simply dummy text of the printing.</span></div>
                                        <div class="alert-btn"><button type="button" class="btn btn-dismiss btn-default">Accept</button></div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button variant="default" class="toggle-code-snippet mb-3" @click="toggleCode('code6')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-start mb-5">
                                    <highlight>
                                        <pre>
&lt;!-- Custom --&gt;
&lt;div class=&quot;alert custom-alert-1 mb-4 alert-dismissible&quot; role=&quot;alert&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&times;&lt;/button&gt;
    &lt;div class=&quot;media&quot;&gt;
        &lt;div class=&quot;media-aside align-self-start&quot;&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
        &lt;/div&gt;
        &lt;div class=&quot;media-body&quot;&gt;
            &lt;div class=&quot;alert-text ms-2&quot;&gt;&lt;strong&gt;Warning! &lt;/strong&gt;&lt;span&gt; Lorem Ipsum is simply dummy text of the printing.&lt;/span&gt;&lt;/div&gt;
            &lt;div class=&quot;alert-btn&quot;&gt;&lt;button type=&quot;button&quot; class=&quot;btn btn-dismiss btn-default&quot;&gt;Accept&lt;/button&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>

                            <div class="alert alert-gradient alert-dismissible mb-4" role="alert">
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">×</button>

                                <strong>New!</strong> Alert with gradient.
                            </div>

                            <div class="code-section-container show-code">
                                <button variant="default" class="toggle-code-snippet mb-3" @click="toggleCode('code7')"><span>Code</span></button>
                                <div v-if="code_arr.includes('code7')" class="code-section text-start mb-5">
                                    <highlight>
                                        <pre>
&lt;!-- Gradient --&gt;
&lt;div class=&quot;alert alert-gradient alert-dismissible mb-4&quot; role=&quot;alert&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&times;&lt;/button&gt;

    &lt;strong&gt;New!&lt;/strong&gt; Alert with gradient.
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>

                            <div class="alert alert-background alert-dismissible mb-4" role="alert">
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">×</button>
                                <strong>New!</strong> Alert with background image.
                            </div>

                            <div class="code-section-container show-code">
                                <button variant="default" class="toggle-code-snippet mb-3" @click="toggleCode('code8')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code8')" class="code-section text-start mb-5">
                                    <highlight>
                                        <pre>
&lt;!-- Background --&gt;
&lt;div class=&quot;alert alert-background alert-dismissible mb-4&quot; role=&quot;alert&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&times;&lt;/button&gt;
    &lt;strong&gt;New!&lt;/strong&gt; Alert with background image.
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
    useMeta({ title: "Alerts" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
