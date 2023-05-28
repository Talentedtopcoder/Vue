<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Drag and Drop</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-12">
                <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                    Documentation:
                    <a target="_blank" href="https://www.npmjs.com/package/vue-draggable-next" class="text-info"> https://www.npmjs.com/package/vue-draggable-next </a>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12 layout-spacing layout-top-spacing">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Vue Draggable</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="parent ex-1">
                            <div class="row">
                                <div class="col-sm-6">
                                    <draggable class="drag-drop dragula" group="default" ghost-class="gu-transit" drag-class="el-drag-ex-1" :animation="200">
                                        <div class="media d-md-flex d-block text-sm-start text-center">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/profile-2.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-xl-flex d-block justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Need to be approved</h6>
                                                        <p class="">Kelly Young</p>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="btn btn-secondary btn-sm" size="sm">View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-md-flex d-block text-sm-start text-center">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/profile-3.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-xl-flex d-block justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Meeting with client</h6>
                                                        <p class="">Andy King</p>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="btn btn-secondary btn-sm">View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-md-flex d-block text-sm-start text-center">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/profile-4.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-xl-flex d-block justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Project Detail</h6>
                                                        <p class="">Judy Holmes</p>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="btn btn-secondary btn-sm">View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-md-flex d-block text-sm-start text-center">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/profile-5.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-xl-flex d-block justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Edited Post Apporval</h6>
                                                        <p class="">Vincent Carpenter</p>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="btn btn-secondary btn-sm">View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-md-flex d-block text-sm-start text-center">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/profile-6.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-xl-flex d-block justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Project Lead Pickup</h6>
                                                        <p class="">Mary McDonald</p>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="btn btn-secondary btn-sm">View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </draggable>
                                </div>

                                <div class="col-sm-6">
                                    <draggable class="drag-drop" group="default" ghost-class="gu-transit" drag-class="el-drag-ex-1" :animation="200">
                                        <div class="media d-md-flex d-block text-sm-start text-center">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/profile-7.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-xl-flex d-block justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Need to be approved</h6>
                                                        <p class="">Shaun Park</p>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="btn btn-secondary btn-sm">View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-md-flex d-block text-sm-start text-center">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/profile-8.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-xl-flex d-block justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Meeting with client</h6>
                                                        <p class="">Roxanne</p>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="btn btn-secondary btn-sm">View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-md-flex d-block text-sm-start text-center">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/profile-9.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-xl-flex d-block justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Project Detail</h6>
                                                        <p class="">Lisa Doe</p>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="btn btn-secondary btn-sm">View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-md-flex d-block text-sm-start text-center">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/profile-10.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-xl-flex d-block justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Edited Post Apporval</h6>
                                                        <p class="">Kristen Beck</p>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="btn btn-secondary btn-sm">View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-md-flex d-block text-sm-start text-center">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/profile-11.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-xl-flex d-block justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Project Lead Pickup</h6>
                                                        <p class="">Alma Clarke</p>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="btn btn-secondary btn-sm">View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </draggable>
                                </div>
                            </div>
                        </div>

                        <div class="code-section-container show-code">
                            <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                            <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                <highlight>
                                    <pre>
&lt;!-- Vue Draggable --&gt;
&lt;div class=&quot;parent ex-1&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-sm-6&quot;&gt;
            &lt;draggable class=&quot;drag-drop dragula&quot; group=&quot;default&quot; ghost-class=&quot;gu-transit&quot; drag-class=&quot;el-drag-ex-1&quot; :animation=&quot;200&quot;&gt;
                &lt;div class=&quot;media d-md-flex d-block text-sm-start text-center&quot;&gt;
                    &lt;div class=&quot;media-aside align-self-start&quot;&gt;
                        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-2.jpeg&quot; class=&quot;img-fluid&quot; /&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;media-body&quot;&gt;
                        &lt;div class=&quot;d-xl-flex d-block justify-content-between&quot;&gt;
                            &lt;div class=&quot;&quot;&gt;
                                &lt;h6 class=&quot;&quot;&gt;Need to be approved&lt;/h6&gt;
                                &lt;p class=&quot;&quot;&gt;Kelly Young&lt;/p&gt;
                            &lt;/div&gt;
                            &lt;div&gt;
                                &lt;button type=&quot;button&quot; class=&quot;btn btn-secondary btn-sm&quot; size=&quot;sm&quot;&gt;View&lt;/button&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;

                &lt;div class=&quot;media d-md-flex d-block text-sm-start text-center&quot;&gt;
                    &lt;div class=&quot;media-aside align-self-start&quot;&gt;
                        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-3.jpeg&quot; class=&quot;img-fluid&quot; /&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;media-body&quot;&gt;
                        &lt;div class=&quot;d-xl-flex d-block justify-content-between&quot;&gt;
                            &lt;div class=&quot;&quot;&gt;
                                &lt;h6 class=&quot;&quot;&gt;Meeting with client&lt;/h6&gt;
                                &lt;p class=&quot;&quot;&gt;Andy King&lt;/p&gt;
                            &lt;/div&gt;
                            &lt;div&gt;
                                &lt;button type=&quot;button&quot; class=&quot;btn btn-secondary btn-sm&quot;&gt;View&lt;/button&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/draggable&gt;
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

            <div class="col-lg-12 layout-spacing">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Icon Change</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="parent ex-2">
                            <div class="row">
                                <div class="col-md-6 left">
                                    <draggable class="drag-drop" group="icon_change" ghost-class="gu-transit" drag-class="el-drag-ex-2" :animation="200">
                                        <div class="media d-block d-sm-flex">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/profile-16.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-flex justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Lisa Doe</h6>
                                                        <p class="">New post is written by Andy.</p>
                                                    </div>
                                                    <div class="icons">
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
                                                            class="feather feather-star f-icon-line"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
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
                                                            class="feather feather-heart f-icon-fill"
                                                        >
                                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-block d-sm-flex">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/drag-4.jpg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-flex justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Shaun Park</h6>
                                                        <p class="">New project meeting.</p>
                                                    </div>
                                                    <div class="icons">
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
                                                            class="feather feather-star f-icon-line"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
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
                                                            class="feather feather-heart f-icon-fill"
                                                        >
                                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-block d-sm-flex">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/profile-26.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-flex justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Andy King</h6>
                                                        <p class="">Get new project details from Shaun</p>
                                                    </div>
                                                    <div class="icons">
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
                                                            class="feather feather-star f-icon-line"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
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
                                                            class="feather feather-heart f-icon-fill"
                                                        >
                                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-block d-sm-flex">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/g-7.png" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-flex justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Judy Holmes</h6>
                                                        <p class="">A post is edited by Mary.</p>
                                                    </div>
                                                    <div class="icons">
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
                                                            class="feather feather-star f-icon-line"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
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
                                                            class="feather feather-heart f-icon-fill"
                                                        >
                                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-block d-sm-flex">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/drag-2.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-flex justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Alma Clarke</h6>
                                                        <p class="">Pick up Lisa Doe from the airport.</p>
                                                    </div>
                                                    <div class="icons">
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
                                                            class="feather feather-star f-icon-line"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
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
                                                            class="feather feather-heart f-icon-fill"
                                                        >
                                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </draggable>
                                </div>

                                <div class="col-md-6 right">
                                    <draggable class="drag-drop" group="icon_change" ghost-class="gu-transit" drag-class="el-drag-ex-2" :animation="200">
                                        <div class="media d-block d-sm-flex">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/p7.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-flex justify-content-between">
                                                    <div class="">
                                                        <h6 class="">John Doe</h6>
                                                        <p class="">New post is written by Andy.</p>
                                                    </div>
                                                    <div class="icons">
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
                                                            class="feather feather-star f-icon-line"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
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
                                                            class="feather feather-heart f-icon-fill"
                                                        >
                                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-block d-sm-flex">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/drag-1.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-flex justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Linda Nelson</h6>
                                                        <p class="">New project meeting.</p>
                                                    </div>
                                                    <div class="icons">
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
                                                            class="feather feather-star f-icon-line"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
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
                                                            class="feather feather-heart f-icon-fill"
                                                        >
                                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-block d-sm-flex">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/g-8.png" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-flex justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Angie Young</h6>
                                                        <p class="">Get new project details from Shaun</p>
                                                    </div>
                                                    <div class="icons">
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
                                                            class="feather feather-star f-icon-line"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
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
                                                            class="feather feather-heart f-icon-fill"
                                                        >
                                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-block d-sm-flex">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/p9.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-flex justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Amy Diaz</h6>
                                                        <p class="">A post is edited by Mary.</p>
                                                    </div>
                                                    <div class="icons">
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
                                                            class="feather feather-star f-icon-line"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
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
                                                            class="feather feather-heart f-icon-fill"
                                                        >
                                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-block d-sm-flex">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/p6.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <div class="d-flex justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Lila Perry</h6>
                                                        <p class="">Pick up Lisa Doe from the airport.</p>
                                                    </div>
                                                    <div class="icons">
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
                                                            class="feather feather-star f-icon-line"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
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
                                                            class="feather feather-heart f-icon-fill"
                                                        >
                                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </draggable>
                                </div>
                            </div>
                        </div>

                        <div class="code-section-container show-code">
                            <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                            <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                <highlight>
                                    <pre>
&lt;!-- Icon change --&gt;
&lt;div class=&quot;parent ex-2&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-md-6 left&quot;&gt;
            &lt;draggable class=&quot;drag-drop&quot; group=&quot;icon_change&quot; ghost-class=&quot;gu-transit&quot; drag-class=&quot;el-drag-ex-2&quot; :animation=&quot;200&quot;&gt;
                &lt;div class=&quot;media d-block d-sm-flex&quot;&gt;
                    &lt;div class=&quot;media-aside align-self-start&quot;&gt;
                        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-16.jpeg&quot; class=&quot;img-fluid&quot; /&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;media-body&quot;&gt;
                        &lt;div class=&quot;d-flex justify-content-between&quot;&gt;
                            &lt;div class=&quot;&quot;&gt;
                                &lt;h6 class=&quot;&quot;&gt;Lisa Doe&lt;/h6&gt;
                                &lt;p class=&quot;&quot;&gt;New post is written by Andy.&lt;/p&gt;
                            &lt;/div&gt;
                            &lt;div class=&quot;icons&quot;&gt;
                                &lt;svg&gt; ... &lt;/svg&gt;
                                &lt;svg&gt; ... &lt;/svg&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;

                &lt;div class=&quot;media d-block d-sm-flex&quot;&gt;
                    &lt;div class=&quot;media-aside align-self-start&quot;&gt;
                        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/drag-4.jpg&quot; class=&quot;img-fluid&quot; /&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;media-body&quot;&gt;
                        &lt;div class=&quot;d-flex justify-content-between&quot;&gt;
                            &lt;div class=&quot;&quot;&gt;
                                &lt;h6 class=&quot;&quot;&gt;Shaun Park&lt;/h6&gt;
                                &lt;p class=&quot;&quot;&gt;New project meeting.&lt;/p&gt;
                            &lt;/div&gt;
                            &lt;div class=&quot;icons&quot;&gt;
                                &lt;svg&gt; ... &lt;/svg&gt;
                                &lt;svg&gt; ... &lt;/svg&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/draggable&gt;
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

            <div class="col-lg-12 layout-spacing">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Delete User</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="parent ex-3">
                            <div class="row">
                                <div class="col-md-6">
                                    <draggable id="left-rm-spill" class="drag-drop" group="delete_user" :removeOnSpill="true" ghost-class="gu-transit" drag-class="el-drag-ex-3" :animation="200">
                                        <div class="media d-block d-sm-flex text-sm-start text-center">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/delete-user-15.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <h5 class=""><span class="usr-commented">Alma Clarke</span> commented on Irene Collins's <span class="comment-topic">Status</span></h5>
                                                <p class="meta-time">18 min ago</p>
                                            </div>
                                        </div>

                                        <div class="media d-block d-sm-flex text-sm-start text-center">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/delete-user-4.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <h5 class=""><span class="usr-commented">Susan Phillips</span> commented on Vincent Carpenter's <span class="comment-topic">Status</span></h5>
                                                <p class="meta-time">18 min ago</p>
                                            </div>
                                        </div>

                                        <div class="media d-block d-sm-flex text-sm-start text-center">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/delete-user-11.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <h5 class=""><span class="usr-commented">Linda Nelson</span> commented on James Taylor's <span class="comment-topic">Status</span></h5>
                                                <p class="meta-time">18 min ago</p>
                                            </div>
                                        </div>
                                    </draggable>
                                </div>

                                <div class="col-md-6">
                                    <draggable id="right-rm-spill" class="drag-drop" group="delete_user" :removeOnSpill="true" ghost-class="gu-transit" drag-class="el-drag-ex-3" :animation="200">
                                        <div class="media d-block d-sm-flex text-sm-start text-center">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/delete-user-12.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <h5 class=""><span class="usr-commented">Grace Roberts</span> commented on Amy Diaz's <span class="comment-topic">Status</span></h5>
                                                <p class="meta-time">18 min ago</p>
                                            </div>
                                        </div>

                                        <div class="media d-block d-sm-flex text-sm-start text-center">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/delete-user-16.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <h5 class=""><span class="usr-commented">Mary Mcdonald</span> commented on Judy Holmes's <span class="comment-topic">Status</span></h5>
                                                <p class="meta-time">18 min ago</p>
                                            </div>
                                        </div>

                                        <div class="media d-block d-sm-flex text-sm-start text-center">
                                            <div class="media-aside align-self-start">
                                                <img alt="avatar" src="/assets/images/delete-user-17.jpeg" class="img-fluid" />
                                            </div>
                                            <div class="media-body">
                                                <h5 class=""><span class="usr-commented">Oscar Garner</span> commented on Justin Cross's <span class="comment-topic">Status</span></h5>
                                                <p class="meta-time">18 min ago</p>
                                            </div>
                                        </div>
                                    </draggable>
                                </div>
                            </div>
                        </div>

                        <div class="code-section-container show-code">
                            <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                            <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                <highlight>
                                    <pre>
&lt;!-- Delete User --&gt;
&lt;div class=&quot;parent ex-3&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-md-6&quot;&gt;
            &lt;draggable id=&quot;left-rm-spill&quot; class=&quot;drag-drop&quot; group=&quot;delete_user&quot; :removeOnSpill=&quot;true&quot; ghost-class=&quot;gu-transit&quot; drag-class=&quot;el-drag-ex-3&quot; :animation=&quot;200&quot;&gt;
                &lt;div class=&quot;media d-block d-sm-flex text-sm-start text-center&quot;&gt;
                    &lt;div class=&quot;media-aside align-self-start&quot;&gt;
                        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/delete-user-15.jpeg&quot; class=&quot;img-fluid&quot; /&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;media-body&quot;&gt;
                        &lt;h5 class=&quot;&quot;&gt;&lt;span class=&quot;usr-commented&quot;&gt;Alma Clarke&lt;/span&gt; commented on Irene Collins's &lt;span class=&quot;comment-topic&quot;&gt;Status&lt;/span&gt;&lt;/h5&gt;
                        &lt;p class=&quot;meta-time&quot;&gt;18 min ago&lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;

                &lt;div class=&quot;media d-block d-sm-flex text-sm-start text-center&quot;&gt;
                    &lt;div class=&quot;media-aside align-self-start&quot;&gt;
                        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/delete-user-4.jpeg&quot; class=&quot;img-fluid&quot; /&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;media-body&quot;&gt;
                        &lt;h5 class=&quot;&quot;&gt;&lt;span class=&quot;usr-commented&quot;&gt;Susan Phillips&lt;/span&gt; commented on Vincent Carpenter's &lt;span class=&quot;comment-topic&quot;&gt;Status&lt;/span&gt;&lt;/h5&gt;
                        &lt;p class=&quot;meta-time&quot;&gt;18 min ago&lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/draggable&gt;
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

            <div class="col-lg-12 layout-spacing">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>News Feeds</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="parent ex-4">
                            <div class="row">
                                <div class="col-md-6">
                                    <draggable id="left-rollbacks" class="drag-drop" group="news_feed" ghost-class="gu-transit" drag-class="el-drag-ex-4" :animation="200">
                                        <div class="card post text-post" style="">
                                            <div class="card-body">
                                                <div class="media user-meta d-sm-flex d-block text-sm-start text-center">
                                                    <div class="media-aside align-self-start">
                                                        <img alt="avatar" src="/assets/images/dragp-1.jpeg" class="img-fluid" />
                                                    </div>
                                                    <div class="media-body">
                                                        <h5 class="">Linda Nelson</h5>
                                                        <p class="meta-time">11 hours ago</p>
                                                    </div>
                                                </div>

                                                <div class="post-content text-sm-start text-center">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                                </div>
                                                <div class="row people-liked-post">
                                                    <div class="col-sm-5 text-sm-start text-center">
                                                        <ul class="list-inline people-liked-img">
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="/assets/images/profile-6.jpeg" class="" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="/assets/images/profile-7.jpeg" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="/assets/images/profile-8.jpeg" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="/assets/images/profile-10.jpeg" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-7 text-sm-end text-center">
                                                        <div class="people-liked-post-name">
                                                            <span><a href="">Vincent, Mary</a> and 19 other like this</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card post text-post" style="">
                                            <div class="card-body">
                                                <div class="media user-meta d-sm-flex d-block text-sm-start text-center">
                                                    <div class="media-aside align-self-start">
                                                        <img alt="avatar" src="/assets/images/dragp-7.jpeg" class="img-fluid" />
                                                    </div>
                                                    <div class="media-body">
                                                        <h5 class="">Irene Collins</h5>
                                                        <p class="meta-time">11 hours ago</p>
                                                    </div>
                                                </div>

                                                <div class="post-content">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                                </div>
                                                <div class="row people-liked-post">
                                                    <div class="col-sm-5 text-sm-start text-center">
                                                        <ul class="list-inline people-liked-img">
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="/assets/images/profile-6.jpeg" class="" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="/assets/images/profile-7.jpeg" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="/assets/images/profile-8.jpeg" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="/assets/images/profile-10.jpeg" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-7 text-sm-end text-center">
                                                        <div class="people-liked-post-name">
                                                            <span><a href="">Vincent, Mary</a> and 19 other like this</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </draggable>
                                </div>

                                <div class="col-md-6">
                                    <draggable id="right-rollbacks" class="drag-drop" group="news_feed" ghost-class="gu-transit" drag-class="el-drag-ex-4" :animation="200">
                                        <div class="card post text-post" style="">
                                            <div class="card-body">
                                                <div class="media user-meta d-sm-flex d-block text-sm-start text-center">
                                                    <div class="media-aside align-self-start">
                                                        <img alt="avatar" src="/assets/images/dragp-4.jpeg" class="img-fluid" />
                                                    </div>
                                                    <div class="media-body">
                                                        <h5 class="">Dale Butler</h5>
                                                        <p class="meta-time">11 hours ago</p>
                                                    </div>
                                                </div>

                                                <div class="post-content">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                                </div>
                                                <div class="row people-liked-post">
                                                    <div class="col-sm-5 text-sm-start text-center">
                                                        <ul class="list-inline people-liked-img">
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="/assets/images/profile-6.jpeg" class="" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="/assets/images/profile-7.jpeg" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="/assets/images/profile-8.jpeg" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="/assets/images/profile-10.jpeg" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-7 text-sm-end text-center">
                                                        <div class="people-liked-post-name">
                                                            <span><a href="">Vincent, Mary</a> and 19 other like this</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card post text-post" style="">
                                            <div class="card-body">
                                                <div class="media user-meta d-sm-flex d-block text-sm-start text-center">
                                                    <div class="media-aside align-self-start">
                                                        <img alt="avatar" src="/assets/images/dragp-6.jpeg" class="img-fluid" />
                                                    </div>
                                                    <div class="media-body">
                                                        <h5 class="">Iris Hubbard</h5>
                                                        <p class="meta-time">11 hours ago</p>
                                                    </div>
                                                </div>

                                                <div class="post-content">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                                </div>
                                                <div class="row people-liked-post">
                                                    <div class="col-sm-5 text-sm-start text-center">
                                                        <ul class="list-inline people-liked-img">
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="/assets/images/profile-6.jpeg" class="" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="/assets/images/profile-7.jpeg" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="/assets/images/profile-8.jpeg" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="/assets/images/profile-10.jpeg" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-7 text-sm-end text-center">
                                                        <div class="people-liked-post-name">
                                                            <span><a href="">Vincent, Mary</a> and 19 other like this</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </draggable>
                                </div>
                            </div>
                        </div>

                        <div class="code-section-container show-code">
                            <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                            <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                <highlight>
                                    <pre>
&lt;!-- News Feed --&gt;
&lt;div class=&quot;parent ex-4&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-md-6&quot;&gt;
            &lt;draggable id=&quot;left-rollbacks&quot; class=&quot;drag-drop&quot; group=&quot;news_feed&quot; ghost-class=&quot;gu-transit&quot; drag-class=&quot;el-drag-ex-4&quot; :animation=&quot;200&quot;&gt;
                &lt;div class=&quot;card post text-post&quot; style=&quot;&quot;&gt;
                    &lt;div class=&quot;card-body&quot;&gt;
                        &lt;div class=&quot;media user-meta d-sm-flex d-block text-sm-start text-center&quot;&gt;
                            &lt;div class=&quot;media-aside align-self-start&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/dragp-1.jpeg&quot; class=&quot;img-fluid&quot; /&gt;
                            &lt;/div&gt;
                            &lt;div class=&quot;media-body&quot;&gt;
                                &lt;h5 class=&quot;&quot;&gt;Linda Nelson&lt;/h5&gt;
                                &lt;p class=&quot;meta-time&quot;&gt;11 hours ago&lt;/p&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;

                        &lt;div class=&quot;post-content text-sm-start text-center&quot;&gt;
                            &lt;p&gt;
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation.
                            &lt;/p&gt;
                        &lt;/div&gt;
                        &lt;div class=&quot;row people-liked-post&quot;&gt;
                            &lt;div class=&quot;col-sm-5 text-sm-start text-center&quot;&gt;
                                &lt;ul class=&quot;list-inline people-liked-img&quot;&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-6.jpeg&quot; class=&quot;&quot; /&gt;
                                    &lt;/li&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-7.jpeg&quot; /&gt;
                                    &lt;/li&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-8.jpeg&quot; /&gt;
                                    &lt;/li&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-10.jpeg&quot; /&gt;
                                    &lt;/li&gt;
                                &lt;/ul&gt;
                            &lt;/div&gt;
                            &lt;div class=&quot;col-sm-7 text-sm-end text-center&quot;&gt;
                                &lt;div class=&quot;people-liked-post-name&quot;&gt;
                                    &lt;span&gt;&lt;a href=&quot;&quot;&gt;Vincent, Mary&lt;/a&gt; and 19 other like this&lt;/span&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/draggable&gt;
        &lt;/div&gt;

        &lt;div class=&quot;col-md-6&quot;&gt;
            &lt;draggable id=&quot;right-rollbacks&quot; class=&quot;drag-drop&quot; group=&quot;news_feed&quot; ghost-class=&quot;gu-transit&quot; drag-class=&quot;el-drag-ex-4&quot; :animation=&quot;200&quot;&gt;
                &lt;div class=&quot;card post text-post&quot; style=&quot;&quot;&gt;
                    &lt;div class=&quot;card-body&quot;&gt;
                        &lt;div class=&quot;media user-meta d-sm-flex d-block text-sm-start text-center&quot;&gt;
                            &lt;div class=&quot;media-aside align-self-start&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/dragp-4.jpeg&quot; class=&quot;img-fluid&quot; /&gt;
                            &lt;/div&gt;
                            &lt;div class=&quot;media-body&quot;&gt;
                                &lt;h5 class=&quot;&quot;&gt;Dale Butler&lt;/h5&gt;
                                &lt;p class=&quot;meta-time&quot;&gt;11 hours ago&lt;/p&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;

                        &lt;div class=&quot;post-content&quot;&gt;
                            &lt;p&gt;
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation.
                            &lt;/p&gt;
                        &lt;/div&gt;
                        &lt;div class=&quot;row people-liked-post&quot;&gt;
                            &lt;div class=&quot;col-sm-5 text-sm-start text-center&quot;&gt;
                                &lt;ul class=&quot;list-inline people-liked-img&quot;&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-6.jpeg&quot; class=&quot;&quot; /&gt;
                                    &lt;/li&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-7.jpeg&quot; /&gt;
                                    &lt;/li&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-8.jpeg&quot; /&gt;
                                    &lt;/li&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-10.jpeg&quot; /&gt;
                                    &lt;/li&gt;
                                &lt;/ul&gt;
                            &lt;/div&gt;
                            &lt;div class=&quot;col-sm-7 text-sm-end text-center&quot;&gt;
                                &lt;div class=&quot;people-liked-post-name&quot;&gt;
                                    &lt;span&gt;&lt;a href=&quot;&quot;&gt;Vincent, Mary&lt;/a&gt; and 19 other like this&lt;/span&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;

                &lt;div class=&quot;card post text-post&quot; style=&quot;&quot;&gt;
                    &lt;div class=&quot;card-body&quot;&gt;
                        &lt;div class=&quot;media user-meta d-sm-flex d-block text-sm-start text-center&quot;&gt;
                            &lt;div class=&quot;media-aside align-self-start&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/dragp-6.jpeg&quot; class=&quot;img-fluid&quot; /&gt;
                            &lt;/div&gt;
                            &lt;div class=&quot;media-body&quot;&gt;
                                &lt;h5 class=&quot;&quot;&gt;Iris Hubbard&lt;/h5&gt;
                                &lt;p class=&quot;meta-time&quot;&gt;11 hours ago&lt;/p&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;

                        &lt;div class=&quot;post-content&quot;&gt;
                            &lt;p&gt;
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation.
                            &lt;/p&gt;
                        &lt;/div&gt;
                        &lt;div class=&quot;row people-liked-post&quot;&gt;
                            &lt;div class=&quot;col-sm-5 text-sm-start text-center&quot;&gt;
                                &lt;ul class=&quot;list-inline people-liked-img&quot;&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-6.jpeg&quot; class=&quot;&quot; /&gt;
                                    &lt;/li&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-7.jpeg&quot; /&gt;
                                    &lt;/li&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-8.jpeg&quot; /&gt;
                                    &lt;/li&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-10.jpeg&quot; /&gt;
                                    &lt;/li&gt;
                                &lt;/ul&gt;
                            &lt;/div&gt;
                            &lt;div class=&quot;col-sm-7 text-sm-end text-center&quot;&gt;
                                &lt;div class=&quot;people-liked-post-name&quot;&gt;
                                    &lt;span&gt;&lt;a href=&quot;&quot;&gt;Vincent, Mary&lt;/a&gt; and 19 other like this&lt;/span&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/draggable&gt;
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

            <div class="col-lg-12 layout-spacing">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Drag Handler</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="parent ex-5">
                            <div class="row">
                                <div class="col-md-6">
                                    <draggable id="left-lovehandles" class="drag-drop" group="drag_handle" handle=".handle" ghost-class="gu-transit" drag-class="el-drag-ex-5" :animation="200">
                                        <div class="media d-block d-xl-flex">
                                            <div class="media-aside align-self-start">
                                                <ul class="list-inline people-liked-img text-center text-sm-start ms-2">
                                                    <li class="list-inline-item badge-notify me-0">
                                                        <div class="notification">
                                                            <span class="badge badge-primary">5</span>
                                                        </div>
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-6.jpeg" class="" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-7.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-8.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-10.jpeg" />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="media-body">
                                                <div class="d-sm-flex d-block justify-content-between text-sm-start text-center">
                                                    <div class="">
                                                        <h5 class="">Engineering & Security</h5>
                                                    </div>
                                                    <div>
                                                        <span class="handle">+</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-block d-xl-flex">
                                            <div class="media-aside align-self-start">
                                                <ul class="list-inline people-liked-img text-center text-sm-start ms-2">
                                                    <li class="list-inline-item badge-notify me-0">
                                                        <div class="notification">
                                                            <span class="badge badge-secondary">5</span>
                                                        </div>
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-6.jpeg" class="" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-7.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-8.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-10.jpeg" />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="media-body">
                                                <div class="d-sm-flex d-block justify-content-between text-sm-start text-center">
                                                    <div class="">
                                                        <h5 class="">Front Office</h5>
                                                    </div>
                                                    <div>
                                                        <span class="handle">+</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-block d-xl-flex">
                                            <div class="media-aside align-self-start">
                                                <ul class="list-inline people-liked-img text-center text-sm-start ms-2">
                                                    <li class="list-inline-item badge-notify me-0">
                                                        <div class="notification">
                                                            <span class="badge badge-success">2</span>
                                                        </div>
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-6.jpeg" class="" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-7.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-8.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-10.jpeg" />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="media-body">
                                                <div class="d-sm-flex d-block justify-content-between text-sm-start text-center">
                                                    <div class="">
                                                        <h5 class="">Logistics</h5>
                                                    </div>
                                                    <div>
                                                        <span class="handle">+</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </draggable>
                                </div>

                                <div class="col-md-6">
                                    <draggable id="right-lovehandles" class="drag-drop" group="drag_handle" handle=".handle" ghost-class="gu-transit" drag-class="el-drag-ex-5" :animation="200">
                                        <div class="media d-block d-xl-flex">
                                            <div class="media-aside align-self-start">
                                                <ul class="list-inline people-liked-img text-center text-sm-start ms-2">
                                                    <li class="list-inline-item badge-notify me-0">
                                                        <div class="notification">
                                                            <span class="badge badge-info">5</span>
                                                        </div>
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-6.jpeg" class="" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-7.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-8.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-10.jpeg" />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="media-body">
                                                <div class="d-sm-flex d-block justify-content-between text-sm-start text-center">
                                                    <div class="">
                                                        <h5 class="">Marketing & Sales</h5>
                                                    </div>
                                                    <div>
                                                        <span class="handle">+</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-block d-xl-flex">
                                            <div class="media-aside align-self-start">
                                                <ul class="list-inline people-liked-img text-center text-sm-start ms-2">
                                                    <li class="list-inline-item badge-notify me-0">
                                                        <div class="notification">
                                                            <span class="badge badge-danger">9</span>
                                                        </div>
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-6.jpeg" class="" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-7.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-8.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-10.jpeg" />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="media-body">
                                                <div class="d-sm-flex d-block justify-content-between text-sm-start text-center">
                                                    <div class="">
                                                        <h5 class="">Admin</h5>
                                                    </div>
                                                    <div>
                                                        <span class="handle">+</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="media d-block d-xl-flex">
                                            <div class="media-aside align-self-start">
                                                <ul class="list-inline people-liked-img text-center text-sm-start ms-2">
                                                    <li class="list-inline-item badge-notify me-0">
                                                        <div class="notification">
                                                            <span class="badge badge-primary">8</span>
                                                        </div>
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-6.jpeg" class="" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-7.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-8.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="/assets/images/profile-10.jpeg" />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="media-body">
                                                <div class="d-sm-flex d-block justify-content-between text-sm-start text-center">
                                                    <div class="">
                                                        <h5 class="">HR</h5>
                                                    </div>
                                                    <div>
                                                        <span class="handle">+</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </draggable>
                                </div>
                            </div>
                        </div>

                        <div class="code-section-container show-code">
                            <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                            <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                <highlight>
                                    <pre>
&lt;!-- Drag Handler --&gt;
&lt;div class=&quot;parent ex-5&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-md-6&quot;&gt;
            &lt;draggable id=&quot;left-lovehandles&quot; class=&quot;drag-drop&quot; group=&quot;drag_handle&quot; handle=&quot;.handle&quot; ghost-class=&quot;gu-transit&quot; drag-class=&quot;el-drag-ex-5&quot; :animation=&quot;200&quot;&gt;
                &lt;div class=&quot;media d-block d-xl-flex&quot;&gt;
                    &lt;div class=&quot;media-aside align-self-start&quot;&gt;
                        &lt;ul class=&quot;list-inline people-liked-img text-center text-sm-start ms-2&quot;&gt;
                            &lt;li class=&quot;list-inline-item badge-notify me-0&quot;&gt;
                                &lt;div class=&quot;notification&quot;&gt;
                                    &lt;span class=&quot;badge badge-primary&quot;&gt;5&lt;/span&gt;
                                &lt;/div&gt;
                            &lt;/li&gt;
                            &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-6.jpeg&quot; class=&quot;&quot; /&gt;
                            &lt;/li&gt;
                            &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-7.jpeg&quot; /&gt;
                            &lt;/li&gt;
                            &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-8.jpeg&quot; /&gt;
                            &lt;/li&gt;
                            &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-10.jpeg&quot; /&gt;
                            &lt;/li&gt;
                        &lt;/ul&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;media-body&quot;&gt;
                        &lt;div class=&quot;d-sm-flex d-block justify-content-between text-sm-start text-center&quot;&gt;
                            &lt;div class=&quot;&quot;&gt;
                                &lt;h5 class=&quot;&quot;&gt;Engineering &amp; Security&lt;/h5&gt;
                            &lt;/div&gt;
                            &lt;div&gt;
                                &lt;span class=&quot;handle&quot;&gt;+&lt;/span&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/draggable&gt;
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
</template>
<style scoped>
    .panel {
        padding: 0;
    }
</style>

<script setup>
    import { ref } from "vue";
    import "../assets/sass/scrollspyNav.scss";
    import "../assets/sass/drag-drop/drag-drop.css";
    import { VueDraggableNext as draggable } from "vue-draggable-next";

    import highlight from "../components/plugins/highlight.vue";

    import { useMeta } from "../composables/use-meta";
    useMeta({ title: "Drag & Drop" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
