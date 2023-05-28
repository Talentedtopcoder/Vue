<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>List Group</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#listGroupBasic" class="nav-link">Basic</a>
                    <a href="#listGroupLinks" class="nav-link">Links</a>
                    <a href="#listGroupIcons" class="nav-link">Icons</a>
                    <a href="#listGroupImages" class="nav-link">Images</a>
                    <a href="#listGroupTask" class="nav-link">Task</a>
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
                        <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/list-group" class="text-info"> https://getbootstrap.com/docs/5.0/components/list-group </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row layout-spacing layout-top-spacing">
                <div id="listGroupBasic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <ul class="list-group">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item active">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Morbi leo risus</li>
                                <li class="list-group-item">Porta ac consectetur ac</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-deafult toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;ul class=&quot;list-group&quot;&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Cras justo odio&lt;/li&gt;
    &lt;li class=&quot;list-group-item active&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Morbi leo risus&lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Porta ac consectetur ac&lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Vestibulum at eros&lt;/li&gt;
&lt;/ul&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="listGroupLinks" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Links</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="list-group">
                                <a href="javascript:void(0);" class="list-group-item list-group-item-action">Cras justo odio</a>
                                <a href="javascript:void(0);" class="list-group-item list-group-item-action active">Dapibus ac facilisis in</a>
                                <a href="javascript:void(0);" class="list-group-item list-group-item-action">Morbi leo risus</a>
                                <a href="javascript:void(0);" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                                <a href="javascript:void(0);" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-deafult toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;list-group&quot;&gt;
    &lt;a href=&quot;javascript:void(0);&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;Cras justo odio&lt;/a&gt;
    &lt;a href=&quot;javascript:void(0);&quot; class=&quot;list-group-item list-group-item-action active&quot;&gt;Dapibus ac facilisis in&lt;/a&gt;
    &lt;a href=&quot;javascript:void(0);&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;Morbi leo risus&lt;/a&gt;
    &lt;a href=&quot;javascript:void(0);&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;Porta ac consectetur ac&lt;/a&gt;
    &lt;a href=&quot;javascript:void(0);&quot; class=&quot;list-group-item list-group-item-action disabled&quot;&gt;Vestibulum at eros&lt;/a&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="listGroupIcons" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Icons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <ul class="list-group list-group-icons-meta">
                                <li class="list-group-item list-group-item-action">
                                    <div class="media mb-0">
                                        <div class="d-flex me-3">
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
                                                class="feather feather-mail"
                                            >
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                        </div>
                                        <div class="media-body">
                                            <h6 class="tx-inverse">Messages</h6>
                                            <p class="mg-b-0">4 New Messages</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item list-group-item-action active">
                                    <div class="media mb-0">
                                        <div class="d-flex me-3">
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
                                                class="feather feather-map-pin"
                                            >
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                        </div>
                                        <div class="media-body">
                                            <h6 class="tx-inverse">Locations</h6>
                                            <p class="mg-b-0">25 New Travel Locations</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item list-group-item-action">
                                    <div class="media mb-0">
                                        <div class="d-flex me-3">
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
                                                class="feather feather-droplet"
                                            >
                                                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                                            </svg>
                                        </div>
                                        <div class="media-body">
                                            <h6 class="tx-inverse">Flexible</h6>
                                            <p class="mg-b-0">Customization Flexibility</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-deafult toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;ul class=&quot;list-group list-group-icons-meta&quot;&gt;
    &lt;li class=&quot;list-group-item list-group-item-action&quot;&gt;
        &lt;div class=&quot;media mb-0&quot;&gt;
            &lt;div class=&quot;d-flex me-3&quot;&gt;
                &lt;svg&gt; ... &lt;/svg&gt;
            &lt;/div&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h6 class=&quot;tx-inverse&quot;&gt;Messages&lt;/h6&gt;
                &lt;p class=&quot;mg-b-0&quot;&gt;4 New Messages&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/li&gt;
    &lt;li class=&quot;list-group-item list-group-item-action active&quot;&gt;
        &lt;div class=&quot;media mb-0&quot;&gt;
            &lt;div class=&quot;d-flex me-3&quot;&gt;
                &lt;svg&gt; ... &lt;/svg&gt;cle cx=&quot;12&quot; cy=&quot;10&quot; r=&quot;3&quot;&gt;&lt;/circle&gt;
                &lt;/svg&gt;
            &lt;/div&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h6 class=&quot;tx-inverse&quot;&gt;Locations&lt;/h6&gt;
                &lt;p class=&quot;mg-b-0&quot;&gt;25 New Travel Locations&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/li&gt;
    &lt;li class=&quot;list-group-item list-group-item-action&quot;&gt;
        &lt;div class=&quot;media mb-0&quot;&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
            &lt;/div&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h6 class=&quot;tx-inverse&quot;&gt;Flexible&lt;/h6&gt;
                &lt;p class=&quot;mg-b-0&quot;&gt;Customization Flexibility&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/li&gt;
&lt;/ul&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="listGroupImages" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Images</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <ul class="list-group list-group-media">
                                <li class="list-group-item list-group-item-action">
                                    <div class="media mb-0">
                                        <div class="me-3">
                                            <img alt="avatar" src="/assets/images/profile-1.jpeg" class="img-fluid rounded-circle" />
                                        </div>
                                        <div class="media-body">
                                            <h6 class="tx-inverse">Luke Ivory</h6>
                                            <p class="mg-b-0">Project Lead</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item list-group-item-action active">
                                    <div class="media mb-0">
                                        <div class="me-3">
                                            <img alt="avatar" src="/assets/images/profile-2.jpeg" class="img-fluid rounded-circle" />
                                        </div>
                                        <div class="media-body">
                                            <h6 class="tx-inverse">Sonia Shaw</h6>
                                            <p class="mg-b-0">Web Designer</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item list-group-item-action">
                                    <div class="media mb-0">
                                        <div class="me-3">
                                            <img alt="avatar" src="/assets/images/profile-3.jpeg" class="img-fluid rounded-circle" />
                                        </div>
                                        <div class="media-body">
                                            <h6 class="tx-inverse">Dale Butler</h6>
                                            <p class="mg-b-0">Developer</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-deafult toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;ul class=&quot;list-group list-group-media&quot;&gt;
    &lt;li class=&quot;list-group-item list-group-item-action&quot;&gt;
        &lt;div class=&quot;media mb-0&quot;&gt;
            &lt;div class=&quot;me-3&quot;&gt;
                &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-1.jpeg&quot; class=&quot;img-fluid rounded-circle&quot; /&gt;
            &lt;/div&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h6 class=&quot;tx-inverse&quot;&gt;Luke Ivory&lt;/h6&gt;
                &lt;p class=&quot;mg-b-0&quot;&gt;Project Lead&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/li&gt;
    &lt;li class=&quot;list-group-item list-group-item-action active&quot;&gt;
        &lt;div class=&quot;media mb-0&quot;&gt;
            &lt;div class=&quot;me-3&quot;&gt;
                &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-2.jpeg&quot; class=&quot;img-fluid rounded-circle&quot; /&gt;
            &lt;/div&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h6 class=&quot;tx-inverse&quot;&gt;Sonia Shaw&lt;/h6&gt;
                &lt;p class=&quot;mg-b-0&quot;&gt;Web Designer&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/li&gt;
    &lt;li class=&quot;list-group-item list-group-item-action&quot;&gt;
        &lt;div class=&quot;media mb-0&quot;&gt;
            &lt;div class=&quot;me-3&quot;&gt;
                &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-3.jpeg&quot; class=&quot;img-fluid rounded-circle&quot; /&gt;
            &lt;/div&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h6 class=&quot;tx-inverse&quot;&gt;Dale Butler&lt;/h6&gt;
                &lt;p class=&quot;mg-b-0&quot;&gt;Developer&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/li&gt;
&lt;/ul&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="listGroupTask" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Task</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <ul class="list-group task-list-group">
                                <li class="list-group-item list-group-item-action">
                                    <div class="checkbox-primary custom-control custom-checkbox">
                                        <input id="chk1" type="checkbox" class="custom-control-input" />
                                        <label class="custom-control-label" for="chk1">
                                            <div class="d-inline-flex">
                                                <span class="ms-2"> List groups are a flexible and powerful component for displaying simple. </span>
                                                <span class="ms-3"><span class="badge badge-secondary">Project</span></span>
                                            </div>
                                        </label>
                                    </div>
                                </li>
                                <li class="list-group-item list-group-item-action active">
                                    <div class="checkbox-primary custom-control custom-checkbox">
                                        <input id="chk2" type="checkbox" class="custom-control-input" />
                                        <label class="custom-control-label" for="chk2">
                                            <div class="d-inline-flex">
                                                <span class="ms-2"> List groups are a flexible and powerful component for displaying simple. </span>
                                                <span class="ms-3"><span class="badge badge-primary">Urgent</span></span>
                                            </div>
                                        </label>
                                    </div>
                                </li>
                                <li class="list-group-item list-group-item-action">
                                    <div class="checkbox-primary custom-control custom-checkbox">
                                        <input id="chk3" type="checkbox" class="custom-control-input" />
                                        <label class="custom-control-label" for="chk3">
                                            <div class="d-inline-flex">
                                                <span class="ms-2"> List groups are a flexible and powerful component for displaying simple. </span>
                                                <span class="ms-3"><span class="badge badge-success">Success</span></span>
                                            </div>
                                        </label>
                                    </div>
                                </li>
                            </ul>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-deafult toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;ul class=&quot;list-group task-list-group&quot;&gt;
    &lt;li class=&quot;list-group-item list-group-item-action&quot;&gt;
        &lt;div class=&quot;checkbox-primary custom-control custom-checkbox&quot;&gt;
            &lt;input id=&quot;chk1&quot; type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; /&gt;
            &lt;label class=&quot;custom-control-label&quot; for=&quot;chk1&quot;&gt;
                &lt;div class=&quot;d-inline-flex&quot;&gt;
                    &lt;span class=&quot;ms-2&quot;&gt; List groups are a flexible and powerful component for displaying simple. &lt;/span&gt;
                    &lt;span class=&quot;ms-3&quot;&gt;&lt;span class=&quot;badge badge-secondary&quot;&gt;Project&lt;/span&gt;&lt;/span&gt;
                &lt;/div&gt;
            &lt;/label&gt;
        &lt;/div&gt;
    &lt;/li&gt;
    &lt;li class=&quot;list-group-item list-group-item-action active&quot;&gt;
        &lt;div class=&quot;checkbox-primary custom-control custom-checkbox&quot;&gt;
            &lt;input id=&quot;chk2&quot; type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; /&gt;
            &lt;label class=&quot;custom-control-label&quot; for=&quot;chk2&quot;&gt;
                &lt;div class=&quot;d-inline-flex&quot;&gt;
                    &lt;span class=&quot;ms-2&quot;&gt; List groups are a flexible and powerful component for displaying simple. &lt;/span&gt;
                    &lt;span class=&quot;ms-3&quot;&gt;&lt;span class=&quot;badge badge-primary&quot;&gt;Urgent&lt;/span&gt;&lt;/span&gt;
                &lt;/div&gt;
            &lt;/label&gt;
        &lt;/div&gt;
    &lt;/li&gt;
    &lt;li class=&quot;list-group-item list-group-item-action&quot;&gt;
        &lt;div class=&quot;checkbox-primary custom-control custom-checkbox&quot;&gt;
            &lt;input id=&quot;chk3&quot; type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; /&gt;
            &lt;label class=&quot;custom-control-label&quot; for=&quot;chk3&quot;&gt;
                &lt;div class=&quot;d-inline-flex&quot;&gt;
                    &lt;span class=&quot;ms-2&quot;&gt; List groups are a flexible and powerful component for displaying simple. &lt;/span&gt;
                    &lt;span class=&quot;ms-3&quot;&gt;&lt;span class=&quot;badge badge-success&quot;&gt;Success&lt;/span&gt;&lt;/span&gt;
                &lt;/div&gt;
            &lt;/label&gt;
        &lt;/div&gt;
    &lt;/li&gt;
&lt;/ul&gt;
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
    import "../../assets/sass/components/custom-list-group.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "List Group" });

    const code_arr = ref([]);
    const chk_demo = ref([]);

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
