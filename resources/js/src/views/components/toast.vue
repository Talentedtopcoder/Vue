<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Notifications</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#toastBasic" class="nav-link">Basic</a>
                    <a href="#toastTopLeft" class="nav-link">Top Left</a>
                    <a href="#toastTopCenter" class="nav-link">Top Center</a>
                    <a href="#toastTopRight" class="nav-link">Top Right</a>
                    <a href="#toastBottomLeft" class="nav-link">Bottom Left</a>
                    <a href="#toastBottomCenter" class="nav-link">Bottom Center</a>
                    <a href="#toastBottomRight" class="nav-link">Bottom Right</a>
                    <a href="#toastNoAction" class="nav-link">No Action</a>
                    <a href="#toastActionText" class="nav-link">Action Text</a>
                    <a href="#toastTextColor" class="nav-link">Text Color</a>

                    <a href="#toastClickCallback" class="nav-link">Click Callback</a>
                    <a href="#toastDuration" class="nav-link">Duration</a>
                    <a href="#toastBackgroundColor" class="nav-link">Background Color</a>
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
                        <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/toasts" class="text-info"> https://getbootstrap.com/docs/5.0/components/toasts </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row layout-spacing layout-top-spacing">
                <div id="toastBasic" class="col-lg-12 col-12 position-relative layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <button type="button" class="btn btn-primary" @click="toastBasic.show()">Open Toast</button>

                            <div style="position: absolute; top: 0; right: 0; z-index: 9999; margin-left: 20px; margin-right: 20px">
                                <div ref="toastBasic" class="toast toast-primary" role="alert" aria-live="assertive" aria-atomic="true">
                                    <div class="toast-header">
                                        <strong class="me-auto">Bootstrap</strong>
                                        <small class="me-2">just now</small>
                                        <a href="javascript:;" data-bs-dismiss="toast" aria-label="Close" class="close">×</a>
                                    </div>
                                    <div class="toast-body toast-primary">Hello, world! This is a toast message.</div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; @click=&quot;toastBasic.show()&quot;&gt;Open Toast&lt;/button&gt;

&lt;div style=&quot;position: absolute; top: 0; right: 0; z-index: 9999; margin-left: 20px; margin-right: 20px&quot;&gt;
    &lt;div ref=&quot;toastBasic&quot; class=&quot;toast toast-primary&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
        &lt;div class=&quot;toast-header&quot;&gt;
            &lt;strong class=&quot;me-auto&quot;&gt;Bootstrap&lt;/strong&gt;
            &lt;small class=&quot;me-2&quot;&gt;just now&lt;/small&gt;
            &lt;a href=&quot;javascript:;&quot; data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot; class=&quot;close&quot;&gt;&times;&lt;/a&gt;
        &lt;/div&gt;
        &lt;div class=&quot;toast-body toast-primary&quot;&gt;Hello, world! This is a toast message.&lt;/div&gt;
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

                <div id="toastTopLeft" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Top Left</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-success" @click="toastTopLeft.show()">Top Left</button>

                            <div ref="toastTopLeft" class="toast position-fixed top-0 start-0 m-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-body toast-dark d-flex justify-content-between">
                                    Example notification text.
                                    <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast">DISMISS</a>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-success&quot; @click=&quot;toastTopLeft.show()&quot;&gt;Top Left&lt;/button&gt;

&lt;div ref=&quot;toastTopLeft&quot; class=&quot;toast position-fixed top-0 start-0 m-2&quot; style=&quot;z-index: 1080&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
    &lt;div class=&quot;toast-body toast-dark d-flex justify-content-between&quot;&gt;
        Example notification text.
        &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ms-2&quot; data-bs-dismiss=&quot;toast&quot;&gt;DISMISS&lt;/a&gt;
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

                <div id="toastTopCenter" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Top Center</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-info" @click="toastTopCenter.show()">Top Center</button>

                            <div ref="toastTopCenter" class="toast position-fixed top-0 mx-auto my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-body toast-dark d-flex justify-content-between">
                                    Example notification text.
                                    <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast">DISMISS</a>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-info&quot; @click=&quot;toastTopCenter.show()&quot;&gt;Top Center&lt;/button&gt;

&lt;div ref=&quot;toastTopCenter&quot; class=&quot;toast position-fixed top-0 mx-auto my-2&quot; style=&quot;z-index: 1080&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
    &lt;div class=&quot;toast-body toast-dark d-flex justify-content-between&quot;&gt;
        Example notification text.
        &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ms-2&quot; data-bs-dismiss=&quot;toast&quot;&gt;DISMISS&lt;/a&gt;
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

                <div id="toastTopRight" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Top Right</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-danger" @click="toastTopRight.show()">Top Right</button>

                            <div ref="toastTopRight" class="toast position-fixed top-0 end-0 m-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-body toast-dark d-flex justify-content-between">
                                    Example notification text.
                                    <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast">DISMISS</a>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-danger&quot; @click=&quot;toastTopRight.show()&quot;&gt;Top Right&lt;/button&gt;

&lt;div ref=&quot;toastTopRight&quot; class=&quot;toast position-fixed top-0 end-0 m-2&quot; style=&quot;z-index: 1080&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
    &lt;div class=&quot;toast-body toast-dark d-flex justify-content-between&quot;&gt;
        Example notification text.
        &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ms-2&quot; data-bs-dismiss=&quot;toast&quot;&gt;DISMISS&lt;/a&gt;
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

                <div id="toastBottomLeft" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Bottom Left</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-warning" @click="toastBottomLeft.show()">Bottom Left</button>

                            <div ref="toastBottomLeft" class="toast position-fixed bottom-0 start-0 m-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-body toast-dark d-flex justify-content-between">
                                    Example notification text.
                                    <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast">DISMISS</a>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-warning&quot; @click=&quot;toastBottomLeft.show()&quot;&gt;Bottom Left&lt;/button&gt;

&lt;div ref=&quot;toastBottomLeft&quot; class=&quot;toast position-fixed bottom-0 start-0 m-2&quot; style=&quot;z-index: 1080&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
    &lt;div class=&quot;toast-body toast-dark d-flex justify-content-between&quot;&gt;
        Example notification text.
        &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ms-2&quot; data-bs-dismiss=&quot;toast&quot;&gt;DISMISS&lt;/a&gt;
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

                <div id="toastBottomCenter" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Bottom Center</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-secondary" @click="toastBottomCenter.show()">Bottom Center</button>

                            <div ref="toastBottomCenter" class="toast position-fixed bottom-0 mx-auto my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-body toast-dark d-flex justify-content-between">
                                    Example notification text.
                                    <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast">DISMISS</a>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary&quot; @click=&quot;toastBottomCenter.show()&quot;&gt;Bottom Center&lt;/button&gt;

&lt;div ref=&quot;toastBottomCenter&quot; class=&quot;toast position-fixed bottom-0 mx-auto my-2&quot; style=&quot;z-index: 1080&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
    &lt;div class=&quot;toast-body toast-dark d-flex justify-content-between&quot;&gt;
        Example notification text.
        &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ms-2&quot; data-bs-dismiss=&quot;toast&quot;&gt;DISMISS&lt;/a&gt;
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

                <div id="toastBottomRight" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Bottom Right</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-dark" @click="toastBottomRight.show()">Bottom Right</button>

                            <div ref="toastBottomRight" class="toast position-fixed bottom-0 end-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-body toast-dark d-flex justify-content-between">
                                    Example notification text.
                                    <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast">DISMISS</a>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code7')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot; @click=&quot;toastBottomRight.show()&quot;&gt;Bottom Right&lt;/button&gt;

&lt;div ref=&quot;toastBottomRight&quot; class=&quot;toast position-fixed bottom-0 end-0 my-2&quot; style=&quot;z-index: 1080&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
    &lt;div class=&quot;toast-body toast-dark d-flex justify-content-between&quot;&gt;
        Example notification text.
        &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ms-2&quot; data-bs-dismiss=&quot;toast&quot;&gt;DISMISS&lt;/a&gt;
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

                <div id="toastNoAction" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>No Action</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-warning" @click="toastNoAction.show()">No Action</button>

                            <div ref="toastNoAction" class="toast position-fixed bottom-0 start-0 m-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-body toast-dark d-flex justify-content-between">Example notification text.</div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code8')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-warning&quot; @click=&quot;toastNoAction.show()&quot;&gt;No Action&lt;/button&gt;

&lt;div ref=&quot;toastNoAction&quot; class=&quot;toast position-fixed bottom-0 start-0 m-2&quot; style=&quot;z-index: 1080&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
    &lt;div class=&quot;toast-body toast-dark d-flex justify-content-between&quot;&gt;Example notification text.&lt;/div&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="toastActionText" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Action Text</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary" @click="toastActionText.show()">Action Text</button>

                            <div ref="toastActionText" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-body toast-dark d-flex justify-content-between">
                                    Example notification text.
                                    <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast">THANKS!</a>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code9')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; @click=&quot;toastActionText.show()&quot;&gt;Action Text&lt;/button&gt;

&lt;div ref=&quot;toastActionText&quot; class=&quot;toast position-fixed bottom-0 start-0 my-2&quot; style=&quot;z-index: 1080&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
    &lt;div class=&quot;toast-body toast-dark d-flex justify-content-between&quot;&gt;
        Example notification text.
        &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ms-2&quot; data-bs-dismiss=&quot;toast&quot;&gt;THANKS!&lt;/a&gt;
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

                <div id="toastTextColor" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Text Color</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-danger" @click="toastTextColor.show()">Text Color</button>

                            <div ref="toastTextColor" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-body toast-dark d-flex justify-content-between">
                                    Example notification text.
                                    <a href="javascript:;" class="text-warning ms-2" data-bs-dismiss="toast">DISMISS</a>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code10')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code10')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-danger&quot; @click=&quot;toastTextColor.show()&quot;&gt;Text Color&lt;/button&gt;

&lt;div ref=&quot;toastTextColor&quot; class=&quot;toast position-fixed bottom-0 start-0 my-2&quot; style=&quot;z-index: 1080&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
    &lt;div class=&quot;toast-body toast-dark d-flex justify-content-between&quot;&gt;
        Example notification text.
        &lt;a href=&quot;javascript:;&quot; class=&quot;text-warning ms-2&quot; data-bs-dismiss=&quot;toast&quot;&gt;DISMISS&lt;/a&gt;
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

                <div id="toastClickCallback" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Click Callback</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-info" @click="toastClickCallback.show()">Click Callback</button>

                            <div ref="toastClickCallback" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-body toast-dark d-flex justify-content-between">
                                    Custom callback when action button is clicked.
                                    <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast" @click="toastClickCallback1.show()">DISMISS</a>
                                </div>
                            </div>
                            <!-- callback  toast-->
                            <div ref="toastClickCallback1" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-body toast-dark d-flex justify-content-between">
                                    Thanks for clicking the Dismiss button!
                                    <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast">DISMISS</a>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code11')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code11')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-info&quot; @click=&quot;toastClickCallback.show()&quot;&gt;Click Callback&lt;/button&gt;

&lt;div ref=&quot;toastClickCallback&quot; class=&quot;toast position-fixed bottom-0 start-0 my-2&quot; style=&quot;z-index: 1080&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
    &lt;div class=&quot;toast-body toast-dark d-flex justify-content-between&quot;&gt;
        Custom callback when action button is clicked.
        &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ms-2&quot; data-bs-dismiss=&quot;toast&quot; @click=&quot;toastClickCallback1.show()&quot;&gt;DISMISS&lt;/a&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;!-- callback  toast--&gt;
&lt;div ref=&quot;toastClickCallback1&quot; class=&quot;toast position-fixed bottom-0 start-0 my-2&quot; style=&quot;z-index: 1080&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
    &lt;div class=&quot;toast-body toast-dark d-flex justify-content-between&quot;&gt;
        Thanks for clicking the Dismiss button!
        &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ms-2&quot; data-bs-dismiss=&quot;toast&quot;&gt;DISMISS&lt;/a&gt;
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

                <div id="toastDuration" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Duration</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-dark" @click="toastDuration.show()">Duration</button>

                            <div ref="toastDuration" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
                                <div class="toast-body toast-dark d-flex justify-content-between">
                                    Example notification text.
                                    <a href="javascript:;" class="text-success ms-2" data-bs-dismiss="toast">DISMISS</a>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code12')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code12')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot; @click=&quot;toastDuration.show()&quot;&gt;Duration&lt;/button&gt;

&lt;div
    ref=&quot;toastDuration&quot;
    class=&quot;toast position-fixed bottom-0 start-0 my-2&quot;
    style=&quot;z-index: 1080&quot;
    role=&quot;alert&quot;
    aria-live=&quot;assertive&quot;
    aria-atomic=&quot;true&quot;
    data-bs-delay=&quot;5000&quot;
&gt;
    &lt;div class=&quot;toast-body toast-dark d-flex justify-content-between&quot;&gt;
        Example notification text.
        &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ms-2&quot; data-bs-dismiss=&quot;toast&quot;&gt;DISMISS&lt;/a&gt;
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

                <div id="toastBackgroundColor" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Background Color</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <!-- Primary -->
                            <button type="button" class="btn btn-primary mb-2 mx-1" @click="toastPrimary.show()">Primary</button>
                            <div ref="toastPrimary" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
                                <div class="toast-body toast-primary d-flex justify-content-between">
                                    Primary
                                    <a href="javascript:;" class="text-white ms-2" data-bs-dismiss="toast">DISMISS</a>
                                </div>
                            </div>

                            <!-- Info -->
                            <button type="button" class="btn btn-info mb-2 mx-1" @click="toastInfo.show()">Info</button>
                            <div ref="toastInfo" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
                                <div class="toast-body toast-info d-flex justify-content-between">
                                    Info
                                    <a href="javascript:;" class="text-white ms-2" data-bs-dismiss="toast">DISMISS</a>
                                </div>
                            </div>

                            <!-- Success -->
                            <button type="button" class="btn btn-success mb-2 mx-1" @click="toastSuccess.show()">Success</button>
                            <div ref="toastSuccess" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
                                <div class="toast-body toast-success d-flex justify-content-between">
                                    Success
                                    <a href="javascript:;" class="text-white ms-2" data-bs-dismiss="toast">DISMISS</a>
                                </div>
                            </div>

                            <!-- Warning -->
                            <button type="button" class="btn btn-warning mb-2 mx-1" @click="toastWarning.show()">Warning</button>
                            <div ref="toastWarning" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
                                <div class="toast-body toast-warning d-flex justify-content-between">
                                    Warning
                                    <a href="javascript:;" class="text-white ms-2" data-bs-dismiss="toast">DISMISS</a>
                                </div>
                            </div>

                            <!-- Danger -->
                            <button type="button" class="btn btn-danger mb-2 mx-1" @click="toastDanger.show()">Danger</button>
                            <div ref="toastDanger" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
                                <div class="toast-body toast-danger d-flex justify-content-between">
                                    Danger
                                    <a href="javascript:;" class="text-white ms-2" data-bs-dismiss="toast">DISMISS</a>
                                </div>
                            </div>

                            <!-- Dark -->
                            <button type="button" class="btn btn-dark mb-2 mx-1" @click="toastDark.show()">Dark</button>
                            <div ref="toastDark" class="toast position-fixed bottom-0 start-0 my-2" style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
                                <div class="toast-body toast-dark d-flex justify-content-between">
                                    Dark
                                    <a href="javascript:;" class="text-white ms-2" data-bs-dismiss="toast">DISMISS</a>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code13')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code13')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Primary --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary mb-2 mx-1&quot; @click=&quot;toastPrimary.show()&quot;&gt;Primary&lt;/button&gt;
&lt;div ref=&quot;toastPrimary&quot; class=&quot;toast position-fixed bottom-0 start-0 my-2&quot; style=&quot;z-index: 1080&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot; data-bs-delay=&quot;5000&quot;&gt;
    &lt;div class=&quot;toast-body toast-primary d-flex justify-content-between&quot;&gt;
        Primary
        &lt;a href=&quot;javascript:;&quot; class=&quot;text-white ms-2&quot; data-bs-dismiss=&quot;toast&quot;&gt;DISMISS&lt;/a&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Info --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-info mb-2 mx-1&quot; @click=&quot;toastInfo.show()&quot;&gt;Info&lt;/button&gt;
&lt;div ref=&quot;toastInfo&quot; class=&quot;toast position-fixed bottom-0 start-0 my-2&quot; style=&quot;z-index: 1080&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot; data-bs-delay=&quot;5000&quot;&gt;
    &lt;div class=&quot;toast-body toast-info d-flex justify-content-between&quot;&gt;
        Info
        &lt;a href=&quot;javascript:;&quot; class=&quot;text-white ms-2&quot; data-bs-dismiss=&quot;toast&quot;&gt;DISMISS&lt;/a&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Success --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-success mb-2 mx-1&quot; @click=&quot;toastSuccess.show()&quot;&gt;Success&lt;/button&gt;
&lt;div ref=&quot;toastSuccess&quot; class=&quot;toast position-fixed bottom-0 start-0 my-2&quot; style=&quot;z-index: 1080&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot; data-bs-delay=&quot;5000&quot;&gt;
    &lt;div class=&quot;toast-body toast-success d-flex justify-content-between&quot;&gt;
        Success
        &lt;a href=&quot;javascript:;&quot; class=&quot;text-white ms-2&quot; data-bs-dismiss=&quot;toast&quot;&gt;DISMISS&lt;/a&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Warning --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-warning mb-2 mx-1&quot; @click=&quot;toastWarning.show()&quot;&gt;Warning&lt;/button&gt;
&lt;div ref=&quot;toastWarning&quot; class=&quot;toast position-fixed bottom-0 start-0 my-2&quot; style=&quot;z-index: 1080&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot; data-bs-delay=&quot;5000&quot;&gt;
    &lt;div class=&quot;toast-body toast-warning d-flex justify-content-between&quot;&gt;
        Warning
        &lt;a href=&quot;javascript:;&quot; class=&quot;text-white ms-2&quot; data-bs-dismiss=&quot;toast&quot;&gt;DISMISS&lt;/a&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Danger --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-danger mb-2 mx-1&quot; @click=&quot;toastDanger.show()&quot;&gt;Danger&lt;/button&gt;
&lt;div ref=&quot;toastDanger&quot; class=&quot;toast position-fixed bottom-0 start-0 my-2&quot; style=&quot;z-index: 1080&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot; data-bs-delay=&quot;5000&quot;&gt;
    &lt;div class=&quot;toast-body toast-danger d-flex justify-content-between&quot;&gt;
        Danger
        &lt;a href=&quot;javascript:;&quot; class=&quot;text-white ms-2&quot; data-bs-dismiss=&quot;toast&quot;&gt;DISMISS&lt;/a&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Dark --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-dark mb-2 mx-1&quot; @click=&quot;toastDark.show()&quot;&gt;Dark&lt;/button&gt;
&lt;div ref=&quot;toastDark&quot; class=&quot;toast position-fixed bottom-0 start-0 my-2&quot; style=&quot;z-index: 1080&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot; data-bs-delay=&quot;5000&quot;&gt;
    &lt;div class=&quot;toast-body toast-dark d-flex justify-content-between&quot;&gt;
        Dark
        &lt;a href=&quot;javascript:;&quot; class=&quot;text-white ms-2&quot; data-bs-dismiss=&quot;toast&quot;&gt;DISMISS&lt;/a&gt;
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
    import { onMounted, ref } from "vue";
    import "../../assets/sass/scrollspyNav.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Notifications" });

    const code_arr = ref([]);
    let toastBasic = ref(null);
    let toastTopLeft = ref(null);
    let toastTopCenter = ref(null);
    let toastTopRight = ref(null);
    let toastBottomLeft = ref(null);
    let toastBottomCenter = ref(null);
    let toastBottomRight = ref(null);
    let toastNoAction = ref(null);
    let toastActionText = ref(null);
    let toastTextColor = ref(null);
    let toastClickCallback = ref(null);
    let toastClickCallback1 = ref(null);
    let toastDuration = ref(null);
    let toastPrimary = ref(null);
    let toastInfo = ref(null);
    let toastSuccess = ref(null);
    let toastWarning = ref(null);
    let toastDanger = ref(null);
    let toastDark = ref(null);

    onMounted(() => {
        initToast();
    });

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };

    const initToast = () => {
        toastBasic.value = new window.bootstrap.Toast(toastBasic.value);
        toastTopLeft.value = new window.bootstrap.Toast(toastTopLeft.value);
        toastTopCenter.value = new window.bootstrap.Toast(toastTopCenter.value);
        toastTopRight.value = new window.bootstrap.Toast(toastTopRight.value);
        toastBottomLeft.value = new window.bootstrap.Toast(toastBottomLeft.value);
        toastBottomCenter.value = new window.bootstrap.Toast(toastBottomCenter.value);
        toastBottomRight.value = new window.bootstrap.Toast(toastBottomRight.value);
        toastNoAction.value = new window.bootstrap.Toast(toastNoAction.value);
        toastActionText.value = new window.bootstrap.Toast(toastActionText.value);
        toastTextColor.value = new window.bootstrap.Toast(toastTextColor.value);
        toastClickCallback.value = new window.bootstrap.Toast(toastClickCallback.value);
        toastClickCallback1.value = new window.bootstrap.Toast(toastClickCallback1.value);
        toastDuration.value = new window.bootstrap.Toast(toastDuration.value);
        toastPrimary.value = new window.bootstrap.Toast(toastPrimary.value);
        toastInfo.value = new window.bootstrap.Toast(toastInfo.value);
        toastSuccess.value = new window.bootstrap.Toast(toastSuccess.value);
        toastWarning.value = new window.bootstrap.Toast(toastWarning.value);
        toastDanger.value = new window.bootstrap.Toast(toastDanger.value);
        toastDark.value = new window.bootstrap.Toast(toastDark.value);
    };
</script>
