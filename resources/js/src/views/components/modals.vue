<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components </a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Modals</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#modalBasic" class="nav-link">Basic</a>
                    <a href="#modalVerticallyCentered" class="nav-link">Vertically Centered</a>
                    <a href="#modalRemoveAnimation" class="nav-link">Remove animation</a>
                    <a href="#modalOptionalSizes" class="nav-link">Optional sizes</a>
                    <a href="#modalVideo" class="nav-link">Video</a>
                    <a href="#modalAnimationStyleModal" class="nav-link">Animation Style Modal</a>
                    <a href="#modalCustom" class="nav-link">Custom</a>
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
                        <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/modal" class="text-info"> https://getbootstrap.com/docs/5.0/components/modal </a>
                    </div>
                </div>
            </div>
            <div v-scroll-spy class="row layout-top-spacing">
                <div id="modalBasic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <!-- Button trigger modal -->
                            <div class="text-center">
                                <button type="button" class="btn btn-primary mb-2 me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch modal</button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p class="modal-text">
                                                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                                mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                            <button type="button" class="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Button trigger modal --&gt;
&lt;div class=&quot;text-center&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary mb-2 me-2&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#exampleModal&quot;&gt;Launch modal&lt;/button&gt;
&lt;/div&gt;
&lt;!-- Modal --&gt;
&lt;div class=&quot;modal fade&quot; id=&quot;exampleModal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;exampleModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header&quot;&gt;
                &lt;h5 class=&quot;modal-title&quot; id=&quot;exampleModalLabel&quot;&gt;Modal title&lt;/h5&gt;
                &lt;button type=&quot;button&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot; class=&quot;btn-close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;p class=&quot;modal-text&quot;&gt;
                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;
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

                <div id="modalVerticallyCentered" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Vertically centered</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="text-center">
                                <!-- Button trigger modal -->
                                <button type="button" class="btn btn-primary mb-2 me-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Launch modal</button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Vertically Aligned</h5>
                                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <h4 class="modal-heading mb-4 mt-2">Aligned Center</h4>
                                            <p class="modal-text">
                                                In hac habitasse platea dictumst. Proin sollicitudin et lacus in tincidunt. Integer nisl ex, sollicitudin eget nulla nec, pharetra lacinia nisl. Aenean nec nunc ex. Integer varius neque at
                                                dolor scelerisque porttitor.
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                            <button type="button" class="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;text-center&quot;&gt;
    &lt;!-- Button trigger modal --&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary mb-2 me-2&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#exampleModalCenter&quot;&gt;Launch modal&lt;/button&gt;
&lt;/div&gt;
&lt;!-- Modal --&gt;
&lt;div class=&quot;modal fade&quot; id=&quot;exampleModalCenter&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;exampleModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog modal-dialog-centered&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header&quot;&gt;
                &lt;h5 class=&quot;modal-title&quot; id=&quot;exampleModalLabel&quot;&gt;Vertically Aligned&lt;/h5&gt;
                &lt;button type=&quot;button&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot; class=&quot;btn-close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;h4 class=&quot;modal-heading mb-4 mt-2&quot;&gt;Aligned Center&lt;/h4&gt;
                &lt;p class=&quot;modal-text&quot;&gt;
                    In hac habitasse platea dictumst. Proin sollicitudin et lacus in tincidunt. Integer nisl ex, sollicitudin eget nulla nec, pharetra lacinia nisl. Aenean
                    nec nunc ex. Integer varius neque at dolor scelerisque porttitor.
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;
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

                <div id="modalRemoveAnimation" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Remove animation</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="text-center">
                                <button type="button" class="btn btn-primary mb-2 me-2" data-bs-toggle="modal" data-bs-target="#exampleModalRemoveAnimation">Launch modal</button>
                            </div>
                            <div class="modal" id="exampleModalRemoveAnimation" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">No Animations</h5>
                                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p class="modal-text">
                                                Proin sollicitudin et lacus in tincidunt. Integer nisl ex, sollicitudin eget nulla nec, pharetra lacinia nisl. Aenean nec nunc ex. Integer varius neque at dolor scelerisque porttitor.
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                            <button type="button" class="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;text-center&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary mb-2 me-2&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#exampleModalRemoveAnimation&quot;&gt;Launch modal&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;modal&quot; id=&quot;exampleModalRemoveAnimation&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;exampleModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header&quot;&gt;
                &lt;h5 class=&quot;modal-title&quot; id=&quot;exampleModalLabel&quot;&gt;No Animations&lt;/h5&gt;
                &lt;button type=&quot;button&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot; class=&quot;btn-close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;p class=&quot;modal-text&quot;&gt;
                    Proin sollicitudin et lacus in tincidunt. Integer nisl ex, sollicitudin eget nulla nec, pharetra lacinia nisl. Aenean nec nunc ex. Integer varius neque
                    at dolor scelerisque porttitor.
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;
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

                <div id="modalOptionalSizes" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Optional sizes</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="text-center">
                                <!-- xtra Large modal -->
                                <button type="button" class="btn btn-primary mb-2 me-2" data-bs-toggle="modal" data-bs-target="#modalxl">Extra large</button>
                                <!-- Lage modal -->
                                <button type="button" class="btn btn-primary mb-2 me-2" data-bs-toggle="modal" data-bs-target="#modallg">Large</button>
                                <!-- Small modal -->
                                <button type="button" class="btn btn-primary mb-2 me-2" data-bs-toggle="modal" data-bs-target="#modalsm">Small</button>
                            </div>

                            <!-- xtra Large modal -->
                            <div class="modal fade" id="modalxl" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-xl" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Extra Large</h5>
                                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p class="modal-text">
                                                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                                mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                            <button type="button" class="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Lage modal -->
                            <div class="modal fade" id="modallg" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Large</h5>
                                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p class="modal-text">
                                                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                                mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                            <button type="button" class="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Small modal -->
                            <div class="modal fade" id="modalsm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-sm" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Small</h5>
                                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p class="modal-text">
                                                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                                mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                            <button type="button" class="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;text-center&quot;&gt;
    &lt;!-- xtra Large modal --&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary mb-2 me-2&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#modalxl&quot;&gt;Extra large&lt;/button&gt;
    &lt;!-- Lage modal --&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary mb-2 me-2&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#modallg&quot;&gt;Large&lt;/button&gt;
    &lt;!-- Small modal --&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary mb-2 me-2&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#modalsm&quot;&gt;Small&lt;/button&gt;
&lt;/div&gt;

&lt;!-- xtra Large modal --&gt;
&lt;div class=&quot;modal fade&quot; id=&quot;modalxl&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;exampleModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog modal-xl&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header&quot;&gt;
                &lt;h5 class=&quot;modal-title&quot; id=&quot;exampleModalLabel&quot;&gt;Extra Large&lt;/h5&gt;
                &lt;button type=&quot;button&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot; class=&quot;btn-close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;p class=&quot;modal-text&quot;&gt;
                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;!-- Lage modal --&gt;
&lt;div class=&quot;modal fade&quot; id=&quot;modallg&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;exampleModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog modal-lg&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header&quot;&gt;
                &lt;h5 class=&quot;modal-title&quot; id=&quot;exampleModalLabel&quot;&gt;Large&lt;/h5&gt;
                &lt;button type=&quot;button&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot; class=&quot;btn-close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;p class=&quot;modal-text&quot;&gt;
                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;!-- Small modal --&gt;
&lt;div class=&quot;modal fade&quot; id=&quot;modalsm&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;exampleModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog modal-sm&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header&quot;&gt;
                &lt;h5 class=&quot;modal-title&quot; id=&quot;exampleModalLabel&quot;&gt;Small&lt;/h5&gt;
                &lt;button type=&quot;button&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot; class=&quot;btn-close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;p class=&quot;modal-text&quot;&gt;
                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;
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

                <div id="modalVideo" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Video</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center modal-video">
                            <button type="button" class="btn btn-primary mb-2 me-2" data-bs-toggle="modal" data-bs-target="#modalYoutube">Play Youtube</button>
                            <!-- Modal -->
                            <div class="modal fade" id="modalYoutube" tabindex="-1" role="dialog" aria-labelledby="modalYoutubeLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header p-0 border-0" id="modalYoutubeLabel">
                                            <button type="button" class="btn-close ms-auto mb-1" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body p-0">
                                            <div class="video-container">
                                                <iframe src="https://www.youtube.com/embed/YE7VzlLtp-4" width="560" height="315" allow="encrypted-media" style="border: 0px"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button type="button" class="btn btn-primary mb-2 me-2" data-bs-toggle="modal" data-bs-target="#modalVimeo">Play Vimeo</button>
                            <!-- Modal -->
                            <div class="modal fade" id="modalVimeo" tabindex="-1" role="dialog" aria-labelledby="modalVimeoLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header p-0 border-0" id="modalVimeoLabel">
                                            <button type="button" class="btn-close ms-auto mb-1" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body p-0">
                                            <div class="video-container">
                                                <iframe src="https://player.vimeo.com/video/1084537" width="560" height="315" allow="encrypted-media" style="border: 0px"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
===========
  Youtube
===========

&lt;button type=&quot;button&quot; class=&quot;btn btn-primary mb-2 me-2&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#modalYoutube&quot;&gt;Play Youtube&lt;/button&gt;
&lt;!-- Modal --&gt;
&lt;div class=&quot;modal fade&quot; id=&quot;modalYoutube&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;modalYoutubeLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog modal-lg&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header p-0 border-0&quot; id=&quot;modalYoutubeLabel&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn-close ms-auto mb-1&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body p-0&quot;&gt;
                &lt;div class=&quot;video-container&quot;&gt;
                    &lt;iframe src=&quot;https://www.youtube.com/embed/YE7VzlLtp-4&quot; width=&quot;560&quot; height=&quot;315&quot; allow=&quot;encrypted-media&quot; style=&quot;border: 0px&quot;&gt;&lt;/iframe&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

===========
  Vimeo
===========

&lt;button type=&quot;button&quot; class=&quot;btn btn-primary mb-2 me-2&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#modalVimeo&quot;&gt;Play Vimeo&lt;/button&gt;
&lt;!-- Modal --&gt;
&lt;div class=&quot;modal fade&quot; id=&quot;modalVimeo&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;modalVimeoLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog modal-lg&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header p-0 border-0&quot; id=&quot;modalVimeoLabel&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn-close ms-auto mb-1&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body p-0&quot;&gt;
                &lt;div class=&quot;video-container&quot;&gt;
                    &lt;iframe src=&quot;https://player.vimeo.com/video/1084537&quot; width=&quot;560&quot; height=&quot;315&quot; allow=&quot;encrypted-media&quot; style=&quot;border: 0px&quot;&gt;&lt;/iframe&gt;
                &lt;/div&gt;
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

                <div id="modalAnimationStyleModal" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Animation Style Modal</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="row">
                                <div class="col-lg-6">
                                    <p class="mb-2 mt-3"><code>.fadeInDown</code></p>
                                    <!-- Fade in down modal -->
                                    <button type="button" class="btn btn-primary mb-2 me-2" data-bs-toggle="modal" data-bs-target="#fadeinModal">FadeIn</button>
                                </div>
                                <div class="col-lg-6">
                                    <p class="mb-2 mt-3"><code>.slideInDown</code></p>
                                    <!-- Slide in down modal -->
                                    <button type="button" class="btn btn-info mb-2 me-2" data-bs-toggle="modal" data-bs-target="#slidedownModal">SlideIn Down</button>
                                </div>
                                <div class="col-lg-6">
                                    <p class="mb-2 mt-3"><code>.fadeInUp</code></p>
                                    <!-- Fade in up modal -->
                                    <button type="button" class="btn btn-success mb-2 me-2" data-bs-toggle="modal" data-bs-target="#fadeupModal">FadeIn Up</button>
                                </div>
                                <div class="col-lg-6">
                                    <p class="mb-2 mt-3"><code>.slideInUp</code></p>
                                    <!-- Slide in up modal -->
                                    <button type="button" class="btn btn-warning mb-2 me-2" data-bs-toggle="modal" data-bs-target="#slideupModal">SlideIn Up</button>
                                </div>
                                <div class="col-lg-6">
                                    <p class="mb-2 mt-3"><code>.fadeInLeft</code></p>
                                    <!-- Fade in left modal -->
                                    <button type="button" class="btn btn-secondary mb-2 me-2" data-bs-toggle="modal" data-bs-target="#fadeleftModal">FadeIn Left</button>
                                </div>
                                <div class="col-lg-6">
                                    <p class="mb-2 mt-3"><code>.rotateInDownLeft</code></p>
                                    <!-- Rotate in right modal -->
                                    <button type="button" class="btn btn-info mb-2 me-2" data-bs-toggle="modal" data-bs-target="#rotateleftModal">RotateIn Left</button>
                                </div>
                                <div class="col-lg-6">
                                    <p class="mb-2 mt-3"><code>.fadeInRight</code></p>
                                    <!-- Fade in right modal -->
                                    <button type="button" class="btn btn-dark mb-2 me-2" data-bs-toggle="modal" data-bs-target="#faderightModal">FadeIn Right</button>
                                </div>
                                <div class="col-lg-6">
                                    <p class="mb-2 mt-3"><code>.zoomInUp</code></p>
                                    <!-- Zoom in up modal -->
                                    <button type="button" class="btn btn-danger mb-2 me-2" data-bs-toggle="modal" data-bs-target="#zoomupModal">ZoomIn Up</button>
                                </div>
                            </div>
                            <!-- Fade in down modal -->
                            <div class="modal animated fadeInDown" id="fadeinModal" tabindex="-1" role="dialog" aria-labelledby="fadeinModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="fadeinModalLabel">Modal title</h5>
                                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p class="modal-text">
                                                Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida
                                                quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                            <button type="button" class="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Slide in down modal -->
                            <div class="modal animated slideInDown" id="slidedownModal" tabindex="-1" role="dialog" aria-labelledby="slidedownModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="slidedownModalLabel">Modal title</h5>
                                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p class="modal-text">
                                                Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida
                                                quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                            <button type="button" class="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Slide in up modal -->
                            <div class="modal animated slideInUp" id="slideupModal" tabindex="-1" role="dialog" aria-labelledby="slideupModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="slideupModalLabel">Modal title</h5>
                                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p class="modal-text">
                                                Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida
                                                quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                            <button type="button" class="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Fade in up modal -->
                            <div class="modal animated fadeInUp" id="fadeupModal" tabindex="-1" role="dialog" aria-labelledby="fadeupModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="fadeupModalLabel">Modal title</h5>
                                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p class="modal-text">
                                                Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida
                                                quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                            <button type="button" class="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Rotate in right modal -->
                            <div class="modal animated rotateInDownLeft" id="rotateleftModal" tabindex="-1" role="dialog" aria-labelledby="rotateleftModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="rotateleftModalLabel">Modal title</h5>
                                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p class="modal-text">
                                                Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida
                                                quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                            <button type="button" class="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Fade in left modal -->
                            <div class="modal animated fadeInLeft" id="fadeleftModal" tabindex="-1" role="dialog" aria-labelledby="fadeleftModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="fadeleftModalLabel">Modal title</h5>
                                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p class="modal-text">
                                                Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida
                                                quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                            <button type="button" class="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Zoom in up modal -->
                            <div class="modal animated zoomInUp" id="zoomupModal" tabindex="-1" role="dialog" aria-labelledby="zoomupModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="zoomupModalLabel">Modal title</h5>
                                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p class="modal-text">
                                                Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida
                                                quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                            <button type="button" class="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Fade in right modal -->
                            <div class="modal animated fadeInRight" id="faderightModal" tabindex="-1" role="dialog" aria-labelledby="faderightModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="faderightModalLabel">Modal title</h5>
                                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p class="modal-text">
                                                Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida
                                                quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                            <button type="button" class="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Fade in down modal --&gt;
&lt;div class=&quot;modal animated fadeInDown&quot; id=&quot;fadeinModal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;fadeinModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header&quot;&gt;
                &lt;h5 class=&quot;modal-title&quot; id=&quot;fadeinModalLabel&quot;&gt;Modal title&lt;/h5&gt;
                &lt;button type=&quot;button&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot; class=&quot;btn-close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;p class=&quot;modal-text&quot;&gt;
                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin
                    luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;!-- Slide in down modal --&gt;
&lt;div class=&quot;modal animated slideInDown&quot; id=&quot;slidedownModal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;slidedownModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header&quot;&gt;
                &lt;h5 class=&quot;modal-title&quot; id=&quot;slidedownModalLabel&quot;&gt;Modal title&lt;/h5&gt;
                &lt;button type=&quot;button&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot; class=&quot;btn-close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;p class=&quot;modal-text&quot;&gt;
                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin
                    luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;!-- Slide in up modal --&gt;
&lt;div class=&quot;modal animated slideInUp&quot; id=&quot;slideupModal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;slideupModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header&quot;&gt;
                &lt;h5 class=&quot;modal-title&quot; id=&quot;slideupModalLabel&quot;&gt;Modal title&lt;/h5&gt;
                &lt;button type=&quot;button&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot; class=&quot;btn-close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;p class=&quot;modal-text&quot;&gt;
                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin
                    luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;!-- Fade in up modal --&gt;
&lt;div class=&quot;modal animated fadeInUp&quot; id=&quot;fadeupModal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;fadeupModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header&quot;&gt;
                &lt;h5 class=&quot;modal-title&quot; id=&quot;fadeupModalLabel&quot;&gt;Modal title&lt;/h5&gt;
                &lt;button type=&quot;button&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot; class=&quot;btn-close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;p class=&quot;modal-text&quot;&gt;
                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin
                    luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;!-- Rotate in right modal --&gt;
&lt;div class=&quot;modal animated rotateInDownLeft&quot; id=&quot;rotateleftModal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;rotateleftModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header&quot;&gt;
                &lt;h5 class=&quot;modal-title&quot; id=&quot;rotateleftModalLabel&quot;&gt;Modal title&lt;/h5&gt;
                &lt;button type=&quot;button&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot; class=&quot;btn-close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;p class=&quot;modal-text&quot;&gt;
                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin
                    luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;!-- Fade in left modal --&gt;
&lt;div class=&quot;modal animated fadeInLeft&quot; id=&quot;fadeleftModal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;fadeleftModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header&quot;&gt;
                &lt;h5 class=&quot;modal-title&quot; id=&quot;fadeleftModalLabel&quot;&gt;Modal title&lt;/h5&gt;
                &lt;button type=&quot;button&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot; class=&quot;btn-close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;p class=&quot;modal-text&quot;&gt;
                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin
                    luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;!-- Zoom in up modal --&gt;
&lt;div class=&quot;modal animated zoomInUp&quot; id=&quot;zoomupModal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;zoomupModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header&quot;&gt;
                &lt;h5 class=&quot;modal-title&quot; id=&quot;zoomupModalLabel&quot;&gt;Modal title&lt;/h5&gt;
                &lt;button type=&quot;button&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot; class=&quot;btn-close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;p class=&quot;modal-text&quot;&gt;
                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin
                    luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;!-- Fade in right modal --&gt;
&lt;div class=&quot;modal animated fadeInRight&quot; id=&quot;faderightModal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;faderightModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header&quot;&gt;
                &lt;h5 class=&quot;modal-title&quot; id=&quot;faderightModalLabel&quot;&gt;Modal title&lt;/h5&gt;
                &lt;button type=&quot;button&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot; class=&quot;btn-close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;p class=&quot;modal-text&quot;&gt;
                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin
                    luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;
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

                <div id="modalCustom" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Custom</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center advance-content signinModal-content">
                            <p class="mb-4">More Custom Modals.</p>

                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-warning mb-2 me-2" data-bs-toggle="modal" data-bs-target="#standardModal">Standard</button>

                            <!-- Standard Modal -->
                            <div class="modal fade modal-notification" id="standardModal" tabindex="-1" role="dialog" aria-labelledby="standardModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <div class="icon-content">
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
                                            </div>
                                            <p class="modal-text">
                                                Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat auctor turpis, vitae dictum augue efficitur vitae.
                                                Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare tempor orci id rutrum.
                                            </p>
                                        </div>
                                        <div class="modal-footer justify-content-between">
                                            <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                            <button type="button" class="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-info mb-2 me-2" data-bs-toggle="modal" data-bs-target="#tabsModal">Tabs</button>

                            <!-- Tabs Modal -->
                            <div class="modal fade" id="tabsModal" tabindex="-1" role="dialog" aria-labelledby="tabsModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <ul class="nav nav-tabs mb-3" id="simpletab" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="simpletabContent">
                                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                    <p class="modal-text">
                                                        Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat auctor turpis, vitae dictum augue efficitur vitae.
                                                        Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare tempor orci id rutrum.
                                                    </p>
                                                </div>
                                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                    <p class="modal-text">
                                                        Fusce ac fringilla ex. Sed ligula ipsum, fringilla ut orci nec, suscipit commodo felis. Sed imperdiet eros dignissim, vehicula erat vel, rutrum lorem. In porttitor id ante nec laoreet.
                                                        Etiam quis sapien ac nunc ullamcorper elementum. Fusce ullamcorper ante convallis nisl eleifend, sit amet dapibus urna eleifend.
                                                    </p>
                                                </div>
                                                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                                    <p class="modal-text">
                                                        Pellentesque semper tortor id ligula ultrices suscipit. Donec viverra vulputate lectus non consectetur. Donec ac interdum lacus. Donec euismod nisi at justo molestie elementum. Vivamus
                                                        vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                            <button type="button" class="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-danger mb-2 me-2" data-bs-toggle="modal" data-bs-target="#profileModal">Profile</button>

                            <!-- Profile Modal -->
                            <div class="modal fade profile-modal" id="profileModal" tabindex="-1" role="dialog" aria-labelledby="profileModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-sm" role="document">
                                    <div class="modal-content">
                                        <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>

                                        <div class="modal-body">
                                            <div class="modal-profile mt-4 mb-5">
                                                <img alt="avatar" src="/assets/images/profile-2.jpeg" class="rounded-circle" />
                                            </div>
                                            <p class="mt-2">Click on view to access your profile.</p>
                                        </div>
                                        <div class="modal-footer justify-content-center mb-4">
                                            <button type="button" class="btn btn-default">View</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-dark mb-2 me-2" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>

                            <!-- Login Modal -->
                            <div class="modal fade login-modal" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-sm" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header" id="loginModalLabel">
                                            <h4 class="modal-title">Login</h4>
                                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form class="mt-0">
                                                <div class="form-group">
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
                                                        class="feather feather-user"
                                                    >
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </svg>
                                                    <input type="email" class="form-control mb-2" placeholder="Email" />
                                                </div>
                                                <div class="form-group">
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
                                                        class="feather feather-lock"
                                                    >
                                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                                    </svg>
                                                    <input type="password" class="form-control mb-4" placeholder="Password" />
                                                </div>
                                                <div class="form-group">
                                                    <button type="button" block class="btn btn-primary w-100" data-dismiss="modal" data-bs-dismiss="modal">Login</button>
                                                </div>
                                            </form>

                                            <div class="division">
                                                <span>OR</span>
                                            </div>

                                            <div class="social">
                                                <a href="javascript:void(0);" class="btn social-fb mx-1"
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
                                                        class="feather feather-facebook"
                                                    >
                                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                                    </svg>
                                                    <span class="brand-name">Facebook</span></a
                                                >
                                                <a href="javascript:void(0);" class="btn social-github"
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
                                                        class="feather feather-github"
                                                    >
                                                        <path
                                                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                                        ></path>
                                                    </svg>
                                                    <span class="brand-name">Github</span></a
                                                >
                                            </div>
                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <div class="forgot login-footer">
                                                <span>Looking to <a href="javascript:void(0);">create an account</a>?</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-secondary mb-2 me-2" data-bs-toggle="modal" data-bs-target="#registerModal">Register</button>

                            <!-- Register Modal -->
                            <div class="modal fade register-modal" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-sm" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header" id="registerModalLabel">
                                            <h4 class="modal-title">Register</h4>
                                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form class="mt-0">
                                                <div class="form-group">
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
                                                        class="feather feather-user"
                                                    >
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </svg>
                                                    <input type="text" class="form-control mb-2" placeholder="Username" />
                                                </div>
                                                <div class="form-group">
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
                                                        class="feather feather-at-sign"
                                                    >
                                                        <circle cx="12" cy="12" r="4"></circle>
                                                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                                                    </svg>
                                                    <input type="email" class="form-control mb-2" placeholder="Email" />
                                                </div>
                                                <div class="form-group">
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
                                                        class="feather feather-lock"
                                                    >
                                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                                    </svg>
                                                    <input type="password" class="form-control mb-4" placeholder="Password" />
                                                </div>
                                                <div class="form-group">
                                                    <button type="button" class="btn btn-primary w-100" data-dismiss="modal" data-bs-dismiss="modal">Register</button>
                                                </div>
                                            </form>

                                            <div class="division">
                                                <span>OR</span>
                                            </div>

                                            <div class="social">
                                                <a href="javascript:void(0);" class="btn social-fb mx-1"
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
                                                        class="feather feather-facebook"
                                                    >
                                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                                    </svg>
                                                    <span class="brand-name">Facebook</span></a
                                                >
                                                <a href="javascript:void(0);" class="btn social-github"
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
                                                        class="feather feather-github"
                                                    >
                                                        <path
                                                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                                        ></path>
                                                    </svg>
                                                    <span class="brand-name">Github</span></a
                                                >
                                            </div>
                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <div class="forgot login-footer">
                                                <span>Already have <a href="javascript:void(0);">Login</a>?</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-success mb-2 me-2" data-bs-toggle="modal" data-bs-target="#sliderModal">Slider</button>

                            <!-- Slider Modal -->
                            <div class="modal fade" id="sliderModal" tabindex="-1" role="dialog" aria-labelledby="sliderModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <button type="button" class="btn-close" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div class="modal-body p-0">
                                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                                <ol class="carousel-indicators">
                                                    <li role="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></li>
                                                    <li role="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></li>
                                                    <li role="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></li>
                                                </ol>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <img class="d-block w-100" src="/assets/images/slider-1.jpeg" alt="First slide" />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img class="d-block w-100" src="/assets/images/slider-2.jpeg" alt="First slide" />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img class="d-block w-100" src="/assets/images/slider-3.jpeg" alt="First slide" />
                                                    </div>
                                                </div>
                                                <a class="carousel-control-prev" role="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                    <span class="flaticon-left-arrow-1 carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="carousel-control-prev-text"> Previous</span>
                                                </a>
                                                <a class="carousel-control-next" role="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                    <span class="carousel-control-next-text"> Next</span>
                                                    <span class="flaticon-right-arrow-1 carousel-control-next-icon" aria-hidden="true"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code7')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Standard Modal --&gt;
&lt;div class=&quot;modal fade modal-notification&quot; id=&quot;standardModal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;standardModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;div class=&quot;icon-content&quot;&gt;
                    &lt;svg&gt; ... &lt;/svg&gt;
                &lt;/div&gt;
                &lt;p class=&quot;modal-text&quot;&gt;
                    Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat auctor turpis,
                    vitae dictum augue efficitur vitae. Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare tempor orci id rutrum.
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer justify-content-between&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;!-- Tabs Modal --&gt;
&lt;div class=&quot;modal fade&quot; id=&quot;tabsModal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;tabsModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header&quot;&gt;
                &lt;h5 class=&quot;modal-title&quot; id=&quot;exampleModalLabel&quot;&gt;Modal title&lt;/h5&gt;
                &lt;button type=&quot;button&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot; class=&quot;btn-close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;ul class=&quot;nav nav-tabs mb-3&quot; id=&quot;simpletab&quot; role=&quot;tablist&quot;&gt;
                    &lt;li class=&quot;nav-item&quot;&gt;
                        &lt;a class=&quot;nav-link active&quot; id=&quot;home-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#home&quot; role=&quot;tab&quot; aria-controls=&quot;home&quot; aria-selected=&quot;true&quot;&gt;Home&lt;/a&gt;
                    &lt;/li&gt;
                    &lt;li class=&quot;nav-item&quot;&gt;
                        &lt;a class=&quot;nav-link&quot; id=&quot;profile-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#profile&quot; role=&quot;tab&quot; aria-controls=&quot;profile&quot; aria-selected=&quot;false&quot;&gt;Profile&lt;/a&gt;
                    &lt;/li&gt;
                    &lt;li class=&quot;nav-item&quot;&gt;
                        &lt;a class=&quot;nav-link&quot; id=&quot;contact-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#contact&quot; role=&quot;tab&quot; aria-controls=&quot;contact&quot; aria-selected=&quot;false&quot;&gt;Contact&lt;/a&gt;
                    &lt;/li&gt;
                &lt;/ul&gt;
                &lt;div class=&quot;tab-content&quot; id=&quot;simpletabContent&quot;&gt;
                    &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;home-tab&quot;&gt;
                        &lt;p class=&quot;modal-text&quot;&gt;
                            Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat auctor
                            turpis, vitae dictum augue efficitur vitae. Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare tempor orci id rutrum.
                        &lt;/p&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;tab-pane fade&quot; id=&quot;profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;profile-tab&quot;&gt;
                        &lt;p class=&quot;modal-text&quot;&gt;
                            Fusce ac fringilla ex. Sed ligula ipsum, fringilla ut orci nec, suscipit commodo felis. Sed imperdiet eros dignissim, vehicula erat vel, rutrum
                            lorem. In porttitor id ante nec laoreet. Etiam quis sapien ac nunc ullamcorper elementum. Fusce ullamcorper ante convallis nisl eleifend, sit
                            amet dapibus urna eleifend.
                        &lt;/p&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;tab-pane fade&quot; id=&quot;contact&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;contact-tab&quot;&gt;
                        &lt;p class=&quot;modal-text&quot;&gt;
                            Pellentesque semper tortor id ligula ultrices suscipit. Donec viverra vulputate lectus non consectetur. Donec ac interdum lacus. Donec euismod
                            nisi at justo molestie elementum. Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus.
                        &lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;!-- Profile Modal --&gt;
&lt;div class=&quot;modal fade profile-modal&quot; id=&quot;profileModal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;profileModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog modal-sm&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;button type=&quot;button&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot; class=&quot;btn-close&quot;&gt;&lt;/button&gt;

            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;div class=&quot;modal-profile mt-4 mb-5&quot;&gt;
                    &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-2.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
                &lt;/div&gt;
                &lt;p class=&quot;mt-2&quot;&gt;Click on view to access your profile.&lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer justify-content-center mb-4&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot;&gt;View&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;!-- Login Modal --&gt;
&lt;div class=&quot;modal fade login-modal&quot; id=&quot;loginModal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;loginModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog modal-sm&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header&quot; id=&quot;loginModalLabel&quot;&gt;
                &lt;h4 class=&quot;modal-title&quot;&gt;Login&lt;/h4&gt;
                &lt;button type=&quot;button&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot; class=&quot;btn-close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;form class=&quot;mt-0&quot;&gt;
                    &lt;div class=&quot;form-group&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                        &lt;input type=&quot;email&quot; class=&quot;form-control mb-2&quot; placeholder=&quot;Email&quot; /&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;form-group&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                        &lt;input type=&quot;password&quot; class=&quot;form-control mb-4&quot; placeholder=&quot;Password&quot; /&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;form-group&quot;&gt;
                        &lt;button type=&quot;button&quot; block class=&quot;btn btn-primary w-100&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;Login&lt;/button&gt;
                    &lt;/div&gt;
                &lt;/form&gt;

                &lt;div class=&quot;division&quot;&gt;
                    &lt;span&gt;OR&lt;/span&gt;
                &lt;/div&gt;

                &lt;div class=&quot;social&quot;&gt;
                    &lt;a href=&quot;javascript:void(0);&quot; class=&quot;btn social-fb mx-1&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                        &lt;span class=&quot;brand-name&quot;&gt;Facebook&lt;/span&gt;&lt;/a
                    &gt;
                    &lt;a href=&quot;javascript:void(0);&quot; class=&quot;btn social-github&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                        &lt;span class=&quot;brand-name&quot;&gt;Github&lt;/span&gt;&lt;/a
                    &gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer justify-content-center&quot;&gt;
                &lt;div class=&quot;forgot login-footer&quot;&gt;
                    &lt;span&gt;Looking to &lt;a href=&quot;javascript:void(0);&quot;&gt;create an account&lt;/a&gt;?&lt;/span&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;!-- Register Modal --&gt;
&lt;div class=&quot;modal fade register-modal&quot; id=&quot;registerModal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;registerModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog modal-sm&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;div class=&quot;modal-header&quot; id=&quot;registerModalLabel&quot;&gt;
                &lt;h4 class=&quot;modal-title&quot;&gt;Register&lt;/h4&gt;
                &lt;button type=&quot;button&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot; class=&quot;btn-close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-body&quot;&gt;
                &lt;form class=&quot;mt-0&quot;&gt;
                    &lt;div class=&quot;form-group&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                        &lt;input type=&quot;text&quot; class=&quot;form-control mb-2&quot; placeholder=&quot;Username&quot; /&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;form-group&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                        &lt;input type=&quot;email&quot; class=&quot;form-control mb-2&quot; placeholder=&quot;Email&quot; /&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;form-group&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                        &lt;input type=&quot;password&quot; class=&quot;form-control mb-4&quot; placeholder=&quot;Password&quot; /&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;form-group&quot;&gt;
                        &lt;button type=&quot;button&quot; class=&quot;btn btn-primary w-100&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;Register&lt;/button&gt;
                    &lt;/div&gt;
                &lt;/form&gt;

                &lt;div class=&quot;division&quot;&gt;
                    &lt;span&gt;OR&lt;/span&gt;
                &lt;/div&gt;

                &lt;div class=&quot;social&quot;&gt;
                    &lt;a href=&quot;javascript:void(0);&quot; class=&quot;btn social-fb mx-1&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                        &lt;span class=&quot;brand-name&quot;&gt;Facebook&lt;/span&gt;&lt;/a
                    &gt;
                    &lt;a href=&quot;javascript:void(0);&quot; class=&quot;btn social-github&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                        &lt;span class=&quot;brand-name&quot;&gt;Github&lt;/span&gt;&lt;/a
                    &gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;modal-footer justify-content-center&quot;&gt;
                &lt;div class=&quot;forgot login-footer&quot;&gt;
                    &lt;span&gt;Already have &lt;a href=&quot;javascript:void(0);&quot;&gt;Login&lt;/a&gt;?&lt;/span&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;!-- Slider Modal --&gt;
&lt;div class=&quot;modal fade&quot; id=&quot;sliderModal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;sliderModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog modal-dialog-centered&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-dismiss=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
            &lt;div class=&quot;modal-body p-0&quot;&gt;
                &lt;div id=&quot;carouselExampleIndicators&quot; class=&quot;carousel slide&quot; data-bs-ride=&quot;carousel&quot;&gt;
                    &lt;ol class=&quot;carousel-indicators&quot;&gt;
                        &lt;li role=&quot;button&quot; data-bs-target=&quot;#carouselExampleIndicators&quot; data-bs-slide-to=&quot;0&quot; class=&quot;active&quot; aria-current=&quot;true&quot; aria-label=&quot;Slide 1&quot;&gt;&lt;/li&gt;
                        &lt;li role=&quot;button&quot; data-bs-target=&quot;#carouselExampleIndicators&quot; data-bs-slide-to=&quot;1&quot; aria-label=&quot;Slide 2&quot;&gt;&lt;/li&gt;
                        &lt;li role=&quot;button&quot; data-bs-target=&quot;#carouselExampleIndicators&quot; data-bs-slide-to=&quot;2&quot; aria-label=&quot;Slide 3&quot;&gt;&lt;/li&gt;
                    &lt;/ol&gt;
                    &lt;div class=&quot;carousel-inner&quot;&gt;
                        &lt;div class=&quot;carousel-item active&quot;&gt;
                            &lt;img class=&quot;d-block w-100&quot; src=&quot;/assets/images/slider-1.jpeg&quot; alt=&quot;First slide&quot; /&gt;
                        &lt;/div&gt;
                        &lt;div class=&quot;carousel-item&quot;&gt;
                            &lt;img class=&quot;d-block w-100&quot; src=&quot;/assets/images/slider-2.jpeg&quot; alt=&quot;First slide&quot; /&gt;
                        &lt;/div&gt;
                        &lt;div class=&quot;carousel-item&quot;&gt;
                            &lt;img class=&quot;d-block w-100&quot; src=&quot;/assets/images/slider-3.jpeg&quot; alt=&quot;First slide&quot; /&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;a class=&quot;carousel-control-prev&quot; role=&quot;button&quot; data-bs-target=&quot;#carouselExampleIndicators&quot; data-bs-slide=&quot;prev&quot;&gt;
                        &lt;span class=&quot;flaticon-left-arrow-1 carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
                        &lt;span class=&quot;carousel-control-prev-text&quot;&gt; Previous&lt;/span&gt;
                    &lt;/a&gt;
                    &lt;a class=&quot;carousel-control-next&quot; role=&quot;button&quot; data-bs-target=&quot;#carouselExampleIndicators&quot; data-bs-slide=&quot;next&quot;&gt;
                        &lt;span class=&quot;carousel-control-next-text&quot;&gt; Next&lt;/span&gt;
                        &lt;span class=&quot;flaticon-right-arrow-1 carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
                    &lt;/a&gt;
                &lt;/div&gt;
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
    useMeta({ title: "Modals" });

    const code_arr = ref([]);
    const slide = ref(0);
    const sliding = ref(null);

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
