<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Tabs</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div id="navSection" class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#tabsSimple" class="nav-link">Simple</a>
                    <a href="#tabsIcons" class="nav-link">Icons</a>
                    <a href="#tabsBordered" class="nav-link">Bordered</a>
                    <a href="#tabsLine" class="nav-link">Line</a>
                    <a href="#tabsAlignments" class="nav-link">Alignments</a>
                    <a href="#tabsWithIcons" class="nav-link">With Icons</a>
                    <a href="#tabsVerticalWithIcon" class="nav-link">Vertical With Icon</a>
                    <a href="#tabsVertical" class="nav-link">Vertical</a>
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
                        <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/navs-tabs/#tabs" class="text-info"> https://getbootstrap.com/docs/5.0/components/navs-tabs/#tabs </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="layout-top-spacing">
                <div class="row">
                    <div id="tabsSimple" class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Simple Tabs</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body simple-tab tabs">
                                <ul class="nav nav-tabs mb-3 mt-3" id="simpletab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="simpletabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <h4 class="mb-4">We move your world!</h4>
                                        <p class="mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="media">
                                            <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                            <div class="media-body">
                                                <h5 class="mt-0 mb-3">Media heading</h5>
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                        <p class="">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body simple-tab tabs&quot;&gt;
    &lt;ul class=&quot;nav nav-tabs mb-3 mt-3&quot; id=&quot;simpletab&quot; role=&quot;tablist&quot;&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link active&quot; id=&quot;home-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#home&quot; role=&quot;tab&quot; aria-controls=&quot;home&quot; aria-selected=&quot;true&quot;&gt;Home&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link&quot; id=&quot;profile-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#profile&quot; role=&quot;tab&quot; aria-controls=&quot;profile&quot; aria-selected=&quot;false&quot;&gt;Profile&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link&quot; id=&quot;contact-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#contact&quot; role=&quot;tab&quot; aria-controls=&quot;contact&quot; aria-selected=&quot;false&quot;&gt;Contact&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
    &lt;div class=&quot;tab-content&quot; id=&quot;simpletabContent&quot;&gt;
        &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;home-tab&quot;&gt;
            &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
            &lt;p class=&quot;mb-4&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;

            &lt;p&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;profile-tab&quot;&gt;
            &lt;div class=&quot;media&quot;&gt;
                &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                &lt;div class=&quot;media-body&quot;&gt;
                    &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;contact&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;contact-tab&quot;&gt;
            &lt;p class=&quot;&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            &lt;/p&gt;
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

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Simple Pills</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body simple-pills tabs">
                                <ul class="nav nav-pills mb-3 mt-3" id="pills-tab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-bs-toggle="pill" href="#pills-profile" role="button" aria-haspopup="true" aria-expanded="false">Profile</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <h4 class="mb-4">We move your world!</h4>
                                        <p class="mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <div class="media">
                                            <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                            <div class="media-body">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                        <p class="dropcap dc-outline-primary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body simple-pills tabs&quot;&gt;
    &lt;ul class=&quot;nav nav-pills mb-3 mt-3&quot; id=&quot;pills-tab&quot; role=&quot;tablist&quot;&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link active&quot; id=&quot;pills-home-tab&quot; data-bs-toggle=&quot;pill&quot; href=&quot;#pills-home&quot; role=&quot;tab&quot; aria-controls=&quot;pills-home&quot; aria-selected=&quot;true&quot;&gt;Home&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link&quot; data-bs-toggle=&quot;pill&quot; href=&quot;#pills-profile&quot; role=&quot;button&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;Profile&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link&quot; id=&quot;pills-contact-tab&quot; data-bs-toggle=&quot;pill&quot; href=&quot;#pills-contact&quot; role=&quot;tab&quot; aria-controls=&quot;pills-contact&quot; aria-selected=&quot;false&quot;&gt;Contact&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
    &lt;div class=&quot;tab-content&quot; id=&quot;pills-tabContent&quot;&gt;
        &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;pills-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;pills-home-tab&quot;&gt;
            &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
            &lt;p class=&quot;mb-4&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;

            &lt;p&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;pills-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;pills-profile-tab&quot;&gt;
            &lt;div class=&quot;media&quot;&gt;
                &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                &lt;div class=&quot;media-body&quot;&gt;
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;pills-contact&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;pills-contact-tab&quot;&gt;
            &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            &lt;/p&gt;
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

                <div class="row">
                    <div id="tabsIcons" class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Icon Tabs</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body icon-tab tabs">
                                <ul class="nav nav-tabs mb-3 mt-3" id="iconTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="icon-home-tab" data-bs-toggle="tab" href="#icon-home" role="tab" aria-controls="icon-home" aria-selected="true"
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
                                            Home</a
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-bs-toggle="tab" href="#icon-profile" role="button" aria-haspopup="true" aria-expanded="false">
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
                                            Profile
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="icon-contact-tab" data-bs-toggle="tab" href="#icon-contact" role="tab" aria-controls="icon-contact" aria-selected="false"
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
                                                class="feather feather-phone"
                                            >
                                                <path
                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                                ></path>
                                            </svg>
                                            Contact</a
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
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
                                            Disabled</a
                                        >
                                    </li>
                                </ul>
                                <div class="tab-content" id="iconTabContent-1">
                                    <div class="tab-pane fade show active" id="icon-home" role="tabpanel" aria-labelledby="icon-home-tab">
                                        <h4 class="mb-4">We move your world!</h4>
                                        <p class="mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="icon-profile" role="tabpanel">
                                        <div class="media">
                                            <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                            <div class="media-body">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="icon-contact" role="tabpanel" aria-labelledby="icon-contact-tab">
                                        <p class="dropcap dc-outline-primary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body icon-tab tabs&quot;&gt;
    &lt;ul class=&quot;nav nav-tabs mb-3 mt-3&quot; id=&quot;iconTab&quot; role=&quot;tablist&quot;&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link active&quot; id=&quot;icon-home-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#icon-home&quot; role=&quot;tab&quot; aria-controls=&quot;icon-home&quot; aria-selected=&quot;true&quot;
                &gt;&lt;svg&gt; ... &lt;/svg&gt;
                Home&lt;/a
            &gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#icon-profile&quot; role=&quot;button&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Profile
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link&quot; id=&quot;icon-contact-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#icon-contact&quot; role=&quot;tab&quot; aria-controls=&quot;icon-contact&quot; aria-selected=&quot;false&quot;
                &gt;&lt;svg&gt; ... &lt;/svg&gt;
                Contact&lt;/a
            &gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Disabled&lt;/a
            &gt;
        &lt;/li&gt;
    &lt;/ul&gt;
    &lt;div class=&quot;tab-content&quot; id=&quot;iconTabContent-1&quot;&gt;
        &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;icon-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;icon-home-tab&quot;&gt;
            &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
            &lt;p class=&quot;mb-4&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;

            &lt;p&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;icon-profile&quot; role=&quot;tabpanel&quot;&gt;
            &lt;div class=&quot;media&quot;&gt;
                &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                &lt;div class=&quot;media-body&quot;&gt;
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;icon-contact&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;icon-contact-tab&quot;&gt;
            &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            &lt;/p&gt;
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

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Icon Pills</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body icon-pill tabs">
                                <ul class="nav nav-pills mb-3 mt-3" id="icon-pills-tab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="icon-pills-home-tab" data-bs-toggle="pill" href="#icon-pills-home" role="tab" aria-controls="icon-pills-home" aria-selected="true">
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
                                            Home</a
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-bs-toggle="pill" href="#icon-pills-profile" role="button" aria-haspopup="true" aria-expanded="false">
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
                                            Profile
                                        </a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" id="icon-pills-contact-tab" data-bs-toggle="pill" href="#icon-pills-contact" role="tab" aria-controls="icon-pills-contact" aria-selected="false">
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
                                                class="feather feather-phone"
                                            >
                                                <path
                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                                ></path>
                                            </svg>
                                            Contact</a
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
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
                                            Disabled
                                        </a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="icon-pills-tabContent">
                                    <div class="tab-pane fade show active" id="icon-pills-home" role="tabpanel" aria-labelledby="icon-pills-home-tab">
                                        <h4 class="mb-4">We move your world!</h4>
                                        <p class="mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="icon-pills-profile" role="tabpanel" aria-labelledby="icon-pills-profile-tab1">
                                        <div class="media">
                                            <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                            <div class="media-body">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="icon-pills-profile2" role="tabpanel" aria-labelledby="icon-pills-profile-tab2">
                                        <p class="">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                            anim id est laborum.
                                        </p>
                                    </div>

                                    <div class="tab-pane fade" id="icon-pills-contact" role="tabpanel" aria-labelledby="icon-pills-contact-tab">
                                        <p class="dropcap dc-outline-primary">
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body icon-pill tabs&quot;&gt;
    &lt;ul class=&quot;nav nav-pills mb-3 mt-3&quot; id=&quot;icon-pills-tab&quot; role=&quot;tablist&quot;&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link active&quot; id=&quot;icon-pills-home-tab&quot; data-bs-toggle=&quot;pill&quot; href=&quot;#icon-pills-home&quot; role=&quot;tab&quot; aria-controls=&quot;icon-pills-home&quot; aria-selected=&quot;true&quot;&gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Home&lt;/a
            &gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link&quot; data-bs-toggle=&quot;pill&quot; href=&quot;#icon-pills-profile&quot; role=&quot;button&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Profile
            &lt;/a&gt;
        &lt;/li&gt;

        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link&quot;
                id=&quot;icon-pills-contact-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#icon-pills-contact&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;icon-pills-contact&quot;
                aria-selected=&quot;false&quot;
            &gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Contact&lt;/a
            &gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Disabled
            &lt;/a&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
    &lt;div class=&quot;tab-content&quot; id=&quot;icon-pills-tabContent&quot;&gt;
        &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;icon-pills-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;icon-pills-home-tab&quot;&gt;
            &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
            &lt;p class=&quot;mb-4&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;

            &lt;p&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;icon-pills-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;icon-pills-profile-tab1&quot;&gt;
            &lt;div class=&quot;media&quot;&gt;
                &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                &lt;div class=&quot;media-body&quot;&gt;
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class=&quot;tab-pane fade&quot; id=&quot;icon-pills-profile2&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;icon-pills-profile-tab2&quot;&gt;
            &lt;p class=&quot;&quot;&gt;
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            &lt;/p&gt;
        &lt;/div&gt;

        &lt;div class=&quot;tab-pane fade&quot; id=&quot;icon-pills-contact&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;icon-pills-contact-tab&quot;&gt;
            &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            &lt;/p&gt;
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

                <div class="row">
                    <div id="tabsBordered" class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Vertical Bordered</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body vertical-border-pill tabs">
                                <div class="row mb-4 mt-3">
                                    <div class="col-sm-3 col-12">
                                        <div class="nav flex-column nav-pills mb-sm-0 mb-3 text-center mx-auto" id="v-border-pills-tab" role="tablist" aria-orientation="vertical">
                                            <a class="nav-link active" id="v-border-pills-home-tab" data-bs-toggle="pill" href="#v-border-pills-home" role="tab" aria-controls="v-border-pills-home" aria-selected="true">Home</a>
                                            <a class="nav-link text-center" id="v-border-pills-profile-tab" data-bs-toggle="pill" href="#v-border-pills-profile" role="tab" aria-controls="v-border-pills-profile" aria-selected="false"
                                                >Profile</a
                                            >
                                            <a class="nav-link text-center" id="v-border-pills-messages-tab" data-bs-toggle="pill" href="#v-border-pills-messages" role="tab" aria-controls="v-border-pills-messages" aria-selected="false"
                                                >Messages</a
                                            >
                                            <a class="nav-link text-center" id="v-border-pills-settings-tab" data-bs-toggle="pill" href="#v-border-pills-settings" role="tab" aria-controls="v-border-pills-settings" aria-selected="false"
                                                >Settings</a
                                            >
                                        </div>
                                    </div>

                                    <div class="col-sm-9 col-12">
                                        <div class="tab-content" id="v-border-pills-tabContent">
                                            <div class="tab-pane fade show active" id="v-border-pills-home" role="tabpanel" aria-labelledby="v-border-pills-home-tab">
                                                <h4 class="mb-4">We move your world!</h4>
                                                <p class="mb-4">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>

                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                            </div>
                                            <div class="tab-pane fade" id="v-border-pills-profile" role="tabpanel" aria-labelledby="v-border-pills-profile-tab">
                                                <div class="media">
                                                    <img class="me-3 rounded-circle" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                                    <div class="media-body">
                                                        <h5 class="mt-0 mb-3">Media heading</h5>
                                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                                                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="v-border-pills-messages" role="tabpanel" aria-labelledby="v-border-pills-messages-tab">
                                                <p class="dropcap dc-outline-primary">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            </div>

                                            <div class="tab-pane fade" id="v-border-pills-settings" role="tabpanel" aria-labelledby="v-border-pills-settings-tab">
                                                <blockquote class="blockquote">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body vertical-border-pill tabs&quot;&gt;
    &lt;div class=&quot;col-sm-3 col-12&quot;&gt;
        &lt;div class=&quot;nav flex-column nav-pills mb-sm-0 mb-3 text-center mx-auto&quot; id=&quot;v-border-pills-tab&quot; role=&quot;tablist&quot; aria-orientation=&quot;vertical&quot;&gt;
            &lt;a
                class=&quot;nav-link active&quot;
                id=&quot;v-border-pills-home-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#v-border-pills-home&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;v-border-pills-home&quot;
                aria-selected=&quot;true&quot;
                &gt;Home&lt;/a
            &gt;
            &lt;a
                class=&quot;nav-link text-center&quot;
                id=&quot;v-border-pills-profile-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#v-border-pills-profile&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;v-border-pills-profile&quot;
                aria-selected=&quot;false&quot;
                &gt;Profile&lt;/a
            &gt;
            &lt;a
                class=&quot;nav-link text-center&quot;
                id=&quot;v-border-pills-messages-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#v-border-pills-messages&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;v-border-pills-messages&quot;
                aria-selected=&quot;false&quot;
                &gt;Messages&lt;/a
            &gt;
            &lt;a
                class=&quot;nav-link text-center&quot;
                id=&quot;v-border-pills-settings-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#v-border-pills-settings&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;v-border-pills-settings&quot;
                aria-selected=&quot;false&quot;
                &gt;Settings&lt;/a
            &gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;col-sm-9 col-12&quot;&gt;
        &lt;div class=&quot;tab-content&quot; id=&quot;v-border-pills-tabContent&quot;&gt;
            &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;v-border-pills-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-border-pills-home-tab&quot;&gt;
                &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
                &lt;p class=&quot;mb-4&quot;&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                &lt;/p&gt;

                &lt;p&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;tab-pane fade&quot; id=&quot;v-border-pills-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-border-pills-profile-tab&quot;&gt;
                &lt;div class=&quot;media&quot;&gt;
                    &lt;img class=&quot;me-3 rounded-circle&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                    &lt;div class=&quot;media-body&quot;&gt;
                        &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;tab-pane fade&quot; id=&quot;v-border-pills-messages&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-border-pills-messages-tab&quot;&gt;
                &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                &lt;/p&gt;
            &lt;/div&gt;

            &lt;div class=&quot;tab-pane fade&quot; id=&quot;v-border-pills-settings&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-border-pills-settings-tab&quot;&gt;
                &lt;blockquote class=&quot;blockquote&quot;&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                &lt;/blockquote&gt;
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

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Border Tabs</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body border-tab tabs">
                                <ul class="nav nav-tabs mt-3" id="border-tabs" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="border-home-tab" data-bs-toggle="tab" href="#border-home" role="tab" aria-controls="border-home" aria-selected="true"
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
                                            Home</a
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="border-profile-tab" data-bs-toggle="tab" href="#border-profile" role="tab" aria-controls="border-profile" aria-selected="false"
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
                                                class="feather feather-user"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                            Profile
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="border-contact-tab" data-bs-toggle="tab" href="#border-contact" role="tab" aria-controls="border-contact" aria-selected="false"
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
                                                class="feather feather-phone"
                                            >
                                                <path
                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                                ></path>
                                            </svg>
                                            Contact</a
                                        >
                                    </li>
                                </ul>
                                <div class="tab-content mb-4" id="border-tabsContent">
                                    <div class="tab-pane fade show active" id="border-home" role="tabpanel" aria-labelledby="border-home-tab">
                                        <h4 class="mb-4">We move your world!</h4>
                                        <p class="mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="border-profile" role="tabpanel" aria-labelledby="border-profile-tab">
                                        <div class="media">
                                            <img class="meta-usr-img me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                            <div class="media-body">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="border-contact" role="tabpanel" aria-labelledby="border-contact-tab">
                                        <p class="dropcap dc-outline-primary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                        <highlight>
                                            <pre>

&lt;div class=&quot;panel-body border-tab tabs&quot;&gt;
    &lt;ul class=&quot;nav nav-tabs mt-3&quot; id=&quot;border-tabs&quot; role=&quot;tablist&quot;&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link active&quot; id=&quot;border-home-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#border-home&quot; role=&quot;tab&quot; aria-controls=&quot;border-home&quot; aria-selected=&quot;true&quot;
                &gt;&lt;svg&gt; ... &lt;/svg&gt;
                Home
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link&quot; id=&quot;border-profile-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#border-profile&quot; role=&quot;tab&quot; aria-controls=&quot;border-profile&quot; aria-selected=&quot;false&quot;
                &gt;&lt;svg&gt; ... &lt;/svg&gt;
                Profile
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link&quot; id=&quot;border-contact-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#border-contact&quot; role=&quot;tab&quot; aria-controls=&quot;border-contact&quot; aria-selected=&quot;false&quot;
                &gt;&lt;svg&gt; ... &lt;/svg&gt;
                Contact
            &lt;/a&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
    &lt;div class=&quot;tab-content mb-4&quot; id=&quot;border-tabsContent&quot;&gt;
        &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;border-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;border-home-tab&quot;&gt;
            &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
            &lt;p class=&quot;mb-4&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;

            &lt;p&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;border-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;border-profile-tab&quot;&gt;
            &lt;div class=&quot;media&quot;&gt;
                &lt;img class=&quot;meta-usr-img me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                &lt;div class=&quot;media-body&quot;&gt;
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;border-contact&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;border-contact-tab&quot;&gt;
            &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            &lt;/p&gt;
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

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Border Top</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body border-top-tab tabs">
                                <ul class="nav nav-tabs mb-3 mt-3" id="borderTop" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="border-top-home-tab" data-bs-toggle="tab" href="#border-top-home" role="tab" aria-controls="border-top-home" aria-selected="true">
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
                                            Home</a
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="border-top-profile-tab" data-bs-toggle="tab" href="#border-top-profile" role="tab" aria-controls="border-top-profile" aria-selected="false">
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
                                            Profile</a
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="border-top-contact-tab" data-bs-toggle="tab" href="#border-top-contact" role="tab" aria-controls="border-top-contact" aria-selected="false">
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
                                                class="feather feather-phone"
                                            >
                                                <path
                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                                ></path>
                                            </svg>
                                            Contact</a
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="border-top-setting-tab" data-bs-toggle="tab" href="#border-top-setting" role="tab" aria-controls="border-top-setting" aria-selected="false">
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
                                            Settings</a
                                        >
                                    </li>
                                </ul>
                                <div class="tab-content" id="borderTopContent">
                                    <div class="tab-pane fade show active" id="border-top-home" role="tabpanel" aria-labelledby="border-top-home-tab">
                                        <h4 class="mb-4">We move your world!</h4>
                                        <p class="mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="border-top-profile" role="tabpanel" aria-labelledby="border-top-profile-tab">
                                        <div class="media">
                                            <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                            <div class="media-body">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="border-top-contact" role="tabpanel" aria-labelledby="border-top-contact-tab">
                                        <p class="dropcap dc-outline-primary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="border-top-setting" role="tabpanel" aria-labelledby="border-top-setting-tab">
                                        <blockquote class="blockquote">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo
                                        </blockquote>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code7')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body border-top-tab tabs&quot;&gt;
    &lt;ul class=&quot;nav nav-tabs mb-3 mt-3&quot; id=&quot;borderTop&quot; role=&quot;tablist&quot;&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link active&quot; id=&quot;border-top-home-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#border-top-home&quot; role=&quot;tab&quot; aria-controls=&quot;border-top-home&quot; aria-selected=&quot;true&quot;&gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Home
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link&quot; id=&quot;border-top-profile-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#border-top-profile&quot; role=&quot;tab&quot; aria-controls=&quot;border-top-profile&quot; aria-selected=&quot;false&quot;&gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Profile
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link&quot; id=&quot;border-top-contact-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#border-top-contact&quot; role=&quot;tab&quot; aria-controls=&quot;border-top-contact&quot; aria-selected=&quot;false&quot;&gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Contact
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link&quot; id=&quot;border-top-setting-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#border-top-setting&quot; role=&quot;tab&quot; aria-controls=&quot;border-top-setting&quot; aria-selected=&quot;false&quot;&gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Settings
            &lt;/a&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
    &lt;div class=&quot;tab-content&quot; id=&quot;borderTopContent&quot;&gt;
        &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;border-top-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;border-top-home-tab&quot;&gt;
            &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
            &lt;p class=&quot;mb-4&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;

            &lt;p&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;border-top-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;border-top-profile-tab&quot;&gt;
            &lt;div class=&quot;media&quot;&gt;
                &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                &lt;div class=&quot;media-body&quot;&gt;
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;border-top-contact&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;border-top-contact-tab&quot;&gt;
            &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;border-top-setting&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;border-top-setting-tab&quot;&gt;
            &lt;blockquote class=&quot;blockquote&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            &lt;/blockquote&gt;
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

                <div class="row">
                    <div id="tabsLine" class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Line</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body underline-content tabs">
                                <ul class="nav nav-tabs mb-3" id="lineTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="underline-home-tab" data-bs-toggle="tab" href="#underline-home" role="tab" aria-controls="underline-home" aria-selected="true">
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
                                            Home</a
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="underline-profile-tab" data-bs-toggle="tab" href="#underline-profile" role="tab" aria-controls="underline-profile" aria-selected="false"
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
                                                class="feather feather-user"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                            Profile</a
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="underline-contact-tab" data-bs-toggle="tab" href="#underline-contact" role="tab" aria-controls="underline-contact" aria-selected="false"
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
                                                class="feather feather-phone"
                                            >
                                                <path
                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                                ></path>
                                            </svg>
                                            Contact</a
                                        >
                                    </li>
                                </ul>

                                <div class="tab-content" id="lineTabContent-3">
                                    <div class="tab-pane fade show active" id="underline-home" role="tabpanel" aria-labelledby="underline-home-tab">
                                        <p class="mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="underline-profile" role="tabpanel" aria-labelledby="underline-profile-tab">
                                        <div class="media">
                                            <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                            <div class="media-body">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="underline-contact" role="tabpanel" aria-labelledby="underline-contact-tab">
                                        <p class="dropcap dc-outline-primary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code8')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body underline-content tabs&quot;&gt;
    &lt;ul class=&quot;nav nav-tabs mb-3&quot; id=&quot;lineTab&quot; role=&quot;tablist&quot;&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link active&quot; id=&quot;underline-home-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#underline-home&quot; role=&quot;tab&quot; aria-controls=&quot;underline-home&quot; aria-selected=&quot;true&quot;&gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Home
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link&quot; id=&quot;underline-profile-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#underline-profile&quot; role=&quot;tab&quot; aria-controls=&quot;underline-profile&quot; aria-selected=&quot;false&quot;
                &gt;&lt;svg&gt; ... &lt;/svg&gt;
                Profile
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link&quot; id=&quot;underline-contact-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#underline-contact&quot; role=&quot;tab&quot; aria-controls=&quot;underline-contact&quot; aria-selected=&quot;false&quot;
                &gt;&lt;svg&gt; ... &lt;/svg&gt;
                Contact
            &lt;/a&gt;
        &lt;/li&gt;
    &lt;/ul&gt;

    &lt;div class=&quot;tab-content&quot; id=&quot;lineTabContent-3&quot;&gt;
        &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;underline-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;underline-home-tab&quot;&gt;
            &lt;p class=&quot;mb-4&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;

            &lt;p&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;underline-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;underline-profile-tab&quot;&gt;
            &lt;div class=&quot;media&quot;&gt;
                &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                &lt;div class=&quot;media-body&quot;&gt;
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;underline-contact&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;underline-contact-tab&quot;&gt;
            &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            &lt;/p&gt;
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

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Animated Line</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body animated-underline-content tabs">
                                <ul class="nav nav-tabs mb-3" id="lineTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="underline-home-anim-tab" data-bs-toggle="tab" href="#underline-home-anim" role="tab" aria-controls="underline-home" aria-selected="true"
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
                                            Home</a
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="underline-profile-anim-tab" data-bs-toggle="tab" href="#underline-profile-anim" role="tab" aria-controls="underline-profile" aria-selected="false">
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
                                            Profile</a
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="underline-contact-anim-tab" data-bs-toggle="tab" href="#underline-contact-anim" role="tab" aria-controls="underline-contact" aria-selected="false"
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
                                                class="feather feather-phone"
                                            >
                                                <path
                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                                ></path>
                                            </svg>
                                            Contact</a
                                        >
                                    </li>
                                </ul>

                                <div class="tab-content" id="lineTabContent-3">
                                    <div class="tab-pane fade show active" id="underline-home-anim" role="tabpanel" aria-labelledby="underline-home-anim-tab">
                                        <p class="mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="underline-profile-anim" role="tabpanel" aria-labelledby="underline-profile-anim-tab">
                                        <div class="media">
                                            <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                            <div class="media-body">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="underline-contact-anim" role="tabpanel" aria-labelledby="underline-contact-anim-tab">
                                        <p class="dropcap dc-outline-primary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code9')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body animated-underline-content tabs&quot;&gt;
    &lt;ul class=&quot;nav nav-tabs mb-3&quot; id=&quot;lineTab&quot; role=&quot;tablist&quot;&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link active&quot;
                id=&quot;underline-home-anim-tab&quot;
                data-bs-toggle=&quot;tab&quot;
                href=&quot;#underline-home-anim&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;underline-home&quot;
                aria-selected=&quot;true&quot;
                &gt;&lt;svg&gt; ... &lt;/svg&gt;
                Home
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link&quot;
                id=&quot;underline-profile-anim-tab&quot;
                data-bs-toggle=&quot;tab&quot;
                href=&quot;#underline-profile-anim&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;underline-profile&quot;
                aria-selected=&quot;false&quot;
            &gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Profile
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link&quot;
                id=&quot;underline-contact-anim-tab&quot;
                data-bs-toggle=&quot;tab&quot;
                href=&quot;#underline-contact-anim&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;underline-contact&quot;
                aria-selected=&quot;false&quot;
                &gt;&lt;svg&gt; ... &lt;/svg&gt;
                Contact
            &lt;/a&gt;
        &lt;/li&gt;
    &lt;/ul&gt;

    &lt;div class=&quot;tab-content&quot; id=&quot;lineTabContent-3&quot;&gt;
        &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;underline-home-anim&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;underline-home-anim-tab&quot;&gt;
            &lt;p class=&quot;mb-4&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;

            &lt;p&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;underline-profile-anim&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;underline-profile-anim-tab&quot;&gt;
            &lt;div class=&quot;media&quot;&gt;
                &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                &lt;div class=&quot;media-body&quot;&gt;
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;underline-contact-anim&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;underline-contact-anim-tab&quot;&gt;
            &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            &lt;/p&gt;
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

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Vertical Line Tab</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body vertical-line-pill tabs">
                                <div class="row mb-4 mt-3">
                                    <div class="col-sm-3 col-12">
                                        <div class="nav flex-column nav-pills mb-sm-0 mb-3 text-center mx-auto" id="v-line-pills-tab" role="tablist" aria-orientation="vertical">
                                            <a class="nav-link active mb-3" id="v-line-pills-home-tab" data-bs-toggle="pill" href="#v-line-pills-home" role="tab" aria-controls="v-line-pills-home" aria-selected="true">Home</a>
                                            <a class="nav-link mb-3 text-center" id="v-line-pills-profile-tab" data-bs-toggle="pill" href="#v-line-pills-profile" role="tab" aria-controls="v-line-pills-profile" aria-selected="false"
                                                >Profile</a
                                            >
                                            <a class="nav-link mb-3 text-center" id="v-line-pills-messages-tab" data-bs-toggle="pill" href="#v-line-pills-messages" role="tab" aria-controls="v-line-pills-messages" aria-selected="false"
                                                >Messages</a
                                            >
                                            <a class="nav-link text-center" id="v-line-pills-settings-tab" data-bs-toggle="pill" href="#v-line-pills-settings" role="tab" aria-controls="v-line-pills-settings" aria-selected="false"
                                                >Settings</a
                                            >
                                        </div>
                                    </div>

                                    <div class="col-sm-9 col-12">
                                        <div class="tab-content" id="v-line-pills-tabContent">
                                            <div class="tab-pane fade show active" id="v-line-pills-home" role="tabpanel" aria-labelledby="v-line-pills-home-tab">
                                                <h4 class="mb-4">We move your world!</h4>
                                                <p class="mb-4">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>

                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                            </div>
                                            <div class="tab-pane fade" id="v-line-pills-profile" role="tabpanel" aria-labelledby="v-line-pills-profile-tab">
                                                <div class="media">
                                                    <img class="me-3 rounded-circle" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                                    <div class="media-body">
                                                        <h5 class="mt-0">Media heading</h5>
                                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                                                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="v-line-pills-messages" role="tabpanel" aria-labelledby="v-line-pills-messages-tab">
                                                <p class="dropcap dc-outline-primary">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            </div>
                                            <div class="tab-pane fade" id="v-line-pills-settings" role="tabpanel" aria-labelledby="v-line-pills-settings-tab">
                                                <blockquote class="blockquote">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code10')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code10')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body vertical-line-pill tabs&quot;&gt;
    &lt;div class=&quot;col-sm-3 col-12&quot;&gt;
        &lt;div class=&quot;nav flex-column nav-pills mb-sm-0 mb-3 text-center mx-auto&quot; id=&quot;v-line-pills-tab&quot; role=&quot;tablist&quot; aria-orientation=&quot;vertical&quot;&gt;
            &lt;a
                class=&quot;nav-link active mb-3&quot;
                id=&quot;v-line-pills-home-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#v-line-pills-home&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;v-line-pills-home&quot;
                aria-selected=&quot;true&quot;
                &gt;Home&lt;/a
            &gt;
            &lt;a
                class=&quot;nav-link mb-3 text-center&quot;
                id=&quot;v-line-pills-profile-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#v-line-pills-profile&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;v-line-pills-profile&quot;
                aria-selected=&quot;false&quot;
                &gt;Profile&lt;/a
            &gt;
            &lt;a
                class=&quot;nav-link mb-3 text-center&quot;
                id=&quot;v-line-pills-messages-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#v-line-pills-messages&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;v-line-pills-messages&quot;
                aria-selected=&quot;false&quot;
                &gt;Messages&lt;/a
            &gt;
            &lt;a
                class=&quot;nav-link text-center&quot;
                id=&quot;v-line-pills-settings-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#v-line-pills-settings&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;v-line-pills-settings&quot;
                aria-selected=&quot;false&quot;
                &gt;Settings&lt;/a
            &gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;col-sm-9 col-12&quot;&gt;
        &lt;div class=&quot;tab-content&quot; id=&quot;v-line-pills-tabContent&quot;&gt;
            &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;v-line-pills-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-line-pills-home-tab&quot;&gt;
                &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
                &lt;p class=&quot;mb-4&quot;&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                &lt;/p&gt;

                &lt;p&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;tab-pane fade&quot; id=&quot;v-line-pills-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-line-pills-profile-tab&quot;&gt;
                &lt;div class=&quot;media&quot;&gt;
                    &lt;img class=&quot;me-3 rounded-circle&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                    &lt;div class=&quot;media-body&quot;&gt;
                        &lt;h5 class=&quot;mt-0&quot;&gt;Media heading&lt;/h5&gt;
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;tab-pane fade&quot; id=&quot;v-line-pills-messages&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-line-pills-messages-tab&quot;&gt;
                &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;tab-pane fade&quot; id=&quot;v-line-pills-settings&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-line-pills-settings-tab&quot;&gt;
                &lt;blockquote class=&quot;blockquote&quot;&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                &lt;/blockquote&gt;
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

                <div class="row">
                    <div id="tabsAlignments" class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4 class="justify-tab">Justify Tabs</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body justify-tab tabs">
                                <ul class="nav nav-tabs mb-3 mt-3 nav-fill" id="justifyTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="justify-home-tab" data-bs-toggle="tab" href="#justify-home" role="tab" aria-controls="justify-home" aria-selected="true">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="justify-profile-tab" data-bs-toggle="tab" href="#justify-profile" role="tab" aria-controls="justify-profile" aria-selected="false">Profile</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="justify-contact-tab" data-bs-toggle="tab" href="#justify-contact" role="tab" aria-controls="justify-contact" aria-selected="false">Contact</a>
                                    </li>
                                </ul>

                                <div class="tab-content" id="justifyTabContent">
                                    <div class="tab-pane fade show active" id="justify-home" role="tabpanel" aria-labelledby="justify-home-tab">
                                        <p class="mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="justify-profile" role="tabpanel" aria-labelledby="justify-profile-tab">
                                        <div class="media">
                                            <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                            <div class="media-body">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="justify-contact" role="tabpanel" aria-labelledby="justify-contact-tab">
                                        <p class="dropcap dc-outline-primary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code11')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code11')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body justify-tab tabs&quot;&gt;
    &lt;ul class=&quot;nav nav-tabs mb-3 mt-3 nav-fill&quot; id=&quot;justifyTab&quot; role=&quot;tablist&quot;&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link active&quot; id=&quot;justify-home-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#justify-home&quot; role=&quot;tab&quot; aria-controls=&quot;justify-home&quot; aria-selected=&quot;true&quot;&gt;Home&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link&quot; id=&quot;justify-profile-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#justify-profile&quot; role=&quot;tab&quot; aria-controls=&quot;justify-profile&quot; aria-selected=&quot;false&quot;
                &gt;Profile&lt;/a
            &gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a class=&quot;nav-link&quot; id=&quot;justify-contact-tab&quot; data-bs-toggle=&quot;tab&quot; href=&quot;#justify-contact&quot; role=&quot;tab&quot; aria-controls=&quot;justify-contact&quot; aria-selected=&quot;false&quot;
                &gt;Contact&lt;/a
            &gt;
        &lt;/li&gt;
    &lt;/ul&gt;

    &lt;div class=&quot;tab-content&quot; id=&quot;justifyTabContent&quot;&gt;
        &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;justify-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;justify-home-tab&quot;&gt;
            &lt;p class=&quot;mb-4&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;

            &lt;p&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;justify-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;justify-profile-tab&quot;&gt;
            &lt;div class=&quot;media&quot;&gt;
                &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                &lt;div class=&quot;media-body&quot;&gt;
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;justify-contact&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;justify-contact-tab&quot;&gt;
            &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            &lt;/p&gt;
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

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Justify Pills</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body justify-pill tabs">
                                <ul class="nav nav-pills mb-3 mt-3 nav-fill" id="justify-pills-tab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="justify-pills-home-tab" data-bs-toggle="pill" href="#justify-pills-home" role="tab" aria-controls="justify-pills-home" aria-selected="true">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="justify-pills-profile-tab" data-bs-toggle="pill" href="#justify-pills-profile" role="tab" aria-controls="justify-pills-profile" aria-selected="false">Profile</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="justify-pills-contact-tab" data-bs-toggle="pill" href="#justify-pills-contact" role="tab" aria-controls="justify-pills-contact" aria-selected="false">Contact</a>
                                    </li>
                                </ul>

                                <div class="tab-content" id="justify-pills-tabContent">
                                    <div class="tab-pane fade show active" id="justify-pills-home" role="tabpanel" aria-labelledby="justify-pills-home-tab">
                                        <p class="mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="justify-pills-profile" role="tabpanel" aria-labelledby="justify-pills-profile-tab">
                                        <div class="media">
                                            <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                            <div class="media-body">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="justify-pills-contact" role="tabpanel" aria-labelledby="justify-pills-contact-tab">
                                        <p class="dropcap dc-outline-primary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code12')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code12')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body justify-pill tabs&quot;&gt;
    &lt;ul class=&quot;nav nav-pills mb-3 mt-3 nav-fill&quot; id=&quot;justify-pills-tab&quot; role=&quot;tablist&quot;&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link active&quot;
                id=&quot;justify-pills-home-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#justify-pills-home&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;justify-pills-home&quot;
                aria-selected=&quot;true&quot;
                &gt;Home&lt;/a
            &gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link&quot;
                id=&quot;justify-pills-profile-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#justify-pills-profile&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;justify-pills-profile&quot;
                aria-selected=&quot;false&quot;
                &gt;Profile&lt;/a
            &gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link&quot;
                id=&quot;justify-pills-contact-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#justify-pills-contact&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;justify-pills-contact&quot;
                aria-selected=&quot;false&quot;
                &gt;Contact&lt;/a
            &gt;
        &lt;/li&gt;
    &lt;/ul&gt;

    &lt;div class=&quot;tab-content&quot; id=&quot;justify-pills-tabContent&quot;&gt;
        &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;justify-pills-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;justify-pills-home-tab&quot;&gt;
            &lt;p class=&quot;mb-4&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;

            &lt;p&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;justify-pills-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;justify-pills-profile-tab&quot;&gt;
            &lt;div class=&quot;media&quot;&gt;
                &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                &lt;div class=&quot;media-body&quot;&gt;
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;justify-pills-contact&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;justify-pills-contact-tab&quot;&gt;
            &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            &lt;/p&gt;
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

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Justify Center Tabs</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body tab-justify-centered tabs">
                                <ul class="nav nav-tabs mb-3 mt-3 justify-content-center" id="justifyCenterTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="justify-center-home-tab" data-bs-toggle="tab" href="#justify-center-home" role="tab" aria-controls="justify-center-home" aria-selected="true">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="justify-center-profile-tab" data-bs-toggle="tab" href="#justify-center-profile" role="tab" aria-controls="justify-center-profile" aria-selected="false">Profile</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="justify-center-contact-tab" data-bs-toggle="tab" href="#justify-center-contact" role="tab" aria-controls="justify-center-contact" aria-selected="false">Contact</a>
                                    </li>
                                </ul>

                                <div class="tab-content" id="justifyCenterTabContent">
                                    <div class="tab-pane fade show active" id="justify-center-home" role="tabpanel" aria-labelledby="justify-center-home-tab">
                                        <p class="mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="justify-center-profile" role="tabpanel" aria-labelledby="justify-center-profile-tab">
                                        <div class="media">
                                            <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                            <div class="media-body">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="justify-center-contact" role="tabpanel" aria-labelledby="justify-center-contact-tab">
                                        <p class="dropcap dc-outline-primary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code13')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code13')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body tab-justify-centered tabs&quot;&gt;
    &lt;ul class=&quot;nav nav-tabs mb-3 mt-3 justify-content-center&quot; id=&quot;justifyCenterTab&quot; role=&quot;tablist&quot;&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link active&quot;
                id=&quot;justify-center-home-tab&quot;
                data-bs-toggle=&quot;tab&quot;
                href=&quot;#justify-center-home&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;justify-center-home&quot;
                aria-selected=&quot;true&quot;
                &gt;Home&lt;/a
            &gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link&quot;
                id=&quot;justify-center-profile-tab&quot;
                data-bs-toggle=&quot;tab&quot;
                href=&quot;#justify-center-profile&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;justify-center-profile&quot;
                aria-selected=&quot;false&quot;
                &gt;Profile&lt;/a
            &gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link&quot;
                id=&quot;justify-center-contact-tab&quot;
                data-bs-toggle=&quot;tab&quot;
                href=&quot;#justify-center-contact&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;justify-center-contact&quot;
                aria-selected=&quot;false&quot;
                &gt;Contact&lt;/a
            &gt;
        &lt;/li&gt;
    &lt;/ul&gt;

    &lt;div class=&quot;tab-content&quot; id=&quot;justifyCenterTabContent&quot;&gt;
        &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;justify-center-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;justify-center-home-tab&quot;&gt;
            &lt;p class=&quot;mb-4&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;

            &lt;p&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;justify-center-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;justify-center-profile-tab&quot;&gt;
            &lt;div class=&quot;media&quot;&gt;
                &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                &lt;div class=&quot;media-body&quot;&gt;
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;justify-center-contact&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;justify-center-contact-tab&quot;&gt;
            &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            &lt;/p&gt;
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

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Justify Center Pills</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body pill-justify-centered tabs">
                                <ul class="nav nav-pills mb-3 mt-3 justify-content-center" id="justify-center-pills-tab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="justify-center-pills-home-tab" data-bs-toggle="pill" href="#justify-center-pills-home" role="tab" aria-controls="justify-center-pills-home" aria-selected="true">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="justify-center-pills-profile-tab" data-bs-toggle="pill" href="#justify-center-pills-profile" role="tab" aria-controls="justify-center-pills-profile" aria-selected="false"
                                            >Profile</a
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="justify-center-pills-contact-tab" data-bs-toggle="pill" href="#justify-center-pills-contact" role="tab" aria-controls="justify-center-pills-contact" aria-selected="false"
                                            >Contact</a
                                        >
                                    </li>
                                </ul>

                                <div class="tab-content" id="justify-center-pills-tabContent">
                                    <div class="tab-pane fade show active" id="justify-center-pills-home" role="tabpanel" aria-labelledby="justify-center-pills-home-tab">
                                        <p class="mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="justify-center-pills-profile" role="tabpanel" aria-labelledby="justify-center-pills-profile-tab">
                                        <div class="media">
                                            <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                            <div class="media-body">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="justify-center-pills-contact" role="tabpanel" aria-labelledby="justify-center-pills-contact-tab">
                                        <p class="dropcap dc-outline-primary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code14')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code14')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body pill-justify-centered tabs&quot;&gt;
    &lt;ul class=&quot;nav nav-pills mb-3 mt-3 justify-content-center&quot; id=&quot;justify-center-pills-tab&quot; role=&quot;tablist&quot;&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link active&quot;
                id=&quot;justify-center-pills-home-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#justify-center-pills-home&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;justify-center-pills-home&quot;
                aria-selected=&quot;true&quot;
                &gt;Home&lt;/a
            &gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link&quot;
                id=&quot;justify-center-pills-profile-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#justify-center-pills-profile&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;justify-center-pills-profile&quot;
                aria-selected=&quot;false&quot;
                &gt;Profile&lt;/a
            &gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link&quot;
                id=&quot;justify-center-pills-contact-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#justify-center-pills-contact&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;justify-center-pills-contact&quot;
                aria-selected=&quot;false&quot;
                &gt;Contact&lt;/a
            &gt;
        &lt;/li&gt;
    &lt;/ul&gt;

    &lt;div class=&quot;tab-content&quot; id=&quot;justify-center-pills-tabContent&quot;&gt;
        &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;justify-center-pills-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;justify-center-pills-home-tab&quot;&gt;
            &lt;p class=&quot;mb-4&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;

            &lt;p&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;justify-center-pills-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;justify-center-pills-profile-tab&quot;&gt;
            &lt;div class=&quot;media&quot;&gt;
                &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                &lt;div class=&quot;media-body&quot;&gt;
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;justify-center-pills-contact&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;justify-center-pills-contact-tab&quot;&gt;
            &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            &lt;/p&gt;
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

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Justify Right Tabs</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body tab-justify-right tabs">
                                <ul class="nav nav-tabs mb-3 mt-3 justify-content-end" id="justifyRightTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="justify-right-home-tab" data-bs-toggle="tab" href="#justify-right-home" role="tab" aria-controls="justify-right-home" aria-selected="true">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="justify-right-profile-tab" data-bs-toggle="tab" href="#justify-right-profile" role="tab" aria-controls="justify-right-profile" aria-selected="false">Profile</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="justify-right-contact-tab" data-bs-toggle="tab" href="#justify-right-contact" role="tab" aria-controls="justify-right-contact" aria-selected="false">Contact</a>
                                    </li>
                                </ul>

                                <div class="tab-content" id="justifyRightTabContent">
                                    <div class="tab-pane fade show active" id="justify-right-home" role="tabpanel" aria-labelledby="justify-right-home-tab">
                                        <p class="mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="justify-right-profile" role="tabpanel" aria-labelledby="justify-right-profile-tab">
                                        <div class="media">
                                            <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                            <div class="media-body">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="justify-right-contact" role="tabpanel" aria-labelledby="justify-right-contact-tab">
                                        <p class="dropcap dc-outline-primary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code15')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code15')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body tab-justify-right tabs&quot;&gt;
    &lt;ul class=&quot;nav nav-tabs mb-3 mt-3 justify-content-end&quot; id=&quot;justifyRightTab&quot; role=&quot;tablist&quot;&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link active&quot;
                id=&quot;justify-right-home-tab&quot;
                data-bs-toggle=&quot;tab&quot;
                href=&quot;#justify-right-home&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;justify-right-home&quot;
                aria-selected=&quot;true&quot;
                &gt;Home&lt;/a
            &gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link&quot;
                id=&quot;justify-right-profile-tab&quot;
                data-bs-toggle=&quot;tab&quot;
                href=&quot;#justify-right-profile&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;justify-right-profile&quot;
                aria-selected=&quot;false&quot;
                &gt;Profile&lt;/a
            &gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link&quot;
                id=&quot;justify-right-contact-tab&quot;
                data-bs-toggle=&quot;tab&quot;
                href=&quot;#justify-right-contact&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;justify-right-contact&quot;
                aria-selected=&quot;false&quot;
                &gt;Contact&lt;/a
            &gt;
        &lt;/li&gt;
    &lt;/ul&gt;

    &lt;div class=&quot;tab-content&quot; id=&quot;justifyRightTabContent&quot;&gt;
        &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;justify-right-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;justify-right-home-tab&quot;&gt;
            &lt;p class=&quot;mb-4&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;

            &lt;p&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;justify-right-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;justify-right-profile-tab&quot;&gt;
            &lt;div class=&quot;media&quot;&gt;
                &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                &lt;div class=&quot;media-body&quot;&gt;
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;justify-right-contact&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;justify-right-contact-tab&quot;&gt;
            &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            &lt;/p&gt;
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

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Justify Right Pills</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body pill-justify-right tabs">
                                <ul class="nav nav-pills mb-3 mt-3 justify-content-end" id="justify-right-pills-tab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="justify-right-pills-home-tab" data-bs-toggle="pill" href="#justify-right-pills-home" role="tab" aria-controls="justify-right-pills-home" aria-selected="true">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="justify-right-pills-profile-tab" data-bs-toggle="pill" href="#justify-right-pills-profile" role="tab" aria-controls="justify-right-pills-profile" aria-selected="false"
                                            >Profile</a
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="justify-right-pills-contact-tab" data-bs-toggle="pill" href="#justify-right-pills-contact" role="tab" aria-controls="justify-right-pills-contact" aria-selected="false"
                                            >Contact</a
                                        >
                                    </li>
                                </ul>

                                <div class="tab-content" id="justify-right-pills-tabContent">
                                    <div class="tab-pane fade show active" id="justify-right-pills-home" role="tabpanel" aria-labelledby="justify-right-pills-home-tab">
                                        <p class="mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="justify-right-pills-profile" role="tabpanel" aria-labelledby="justify-right-pills-profile-tab">
                                        <div class="media">
                                            <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                            <div class="media-body">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="justify-right-pills-contact" role="tabpanel" aria-labelledby="justify-right-pills-contact-tab">
                                        <p class="dropcap dc-outline-primary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code16')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code16')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body pill-justify-right tabs&quot;&gt;
    &lt;ul class=&quot;nav nav-pills mb-3 mt-3 justify-content-end&quot; id=&quot;justify-right-pills-tab&quot; role=&quot;tablist&quot;&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link active&quot;
                id=&quot;justify-right-pills-home-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#justify-right-pills-home&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;justify-right-pills-home&quot;
                aria-selected=&quot;true&quot;
                &gt;Home&lt;/a
            &gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link&quot;
                id=&quot;justify-right-pills-profile-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#justify-right-pills-profile&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;justify-right-pills-profile&quot;
                aria-selected=&quot;false&quot;
                &gt;Profile&lt;/a
            &gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a
                class=&quot;nav-link&quot;
                id=&quot;justify-right-pills-contact-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#justify-right-pills-contact&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;justify-right-pills-contact&quot;
                aria-selected=&quot;false&quot;
                &gt;Contact&lt;/a
            &gt;
        &lt;/li&gt;
    &lt;/ul&gt;

    &lt;div class=&quot;tab-content&quot; id=&quot;justify-right-pills-tabContent&quot;&gt;
        &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;justify-right-pills-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;justify-right-pills-home-tab&quot;&gt;
            &lt;p class=&quot;mb-4&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;
            &lt;p&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;justify-right-pills-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;justify-right-pills-profile-tab&quot;&gt;
            &lt;div class=&quot;media&quot;&gt;
                &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                &lt;div class=&quot;media-body&quot;&gt;
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;justify-right-pills-contact&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;justify-right-pills-contact-tab&quot;&gt;
            &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            &lt;/p&gt;
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

                <div class="row">
                    <div id="tabsWithIcons" class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Pills with Icon</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body rounded-pills-icon tabs">
                                <ul class="nav nav-pills mb-4 mt-3 justify-content-center" id="rounded-pills-icon-tab" role="tablist">
                                    <li class="nav-item ms-2 me-2">
                                        <a
                                            class="nav-link mb-2 active text-center"
                                            id="rounded-pills-icon-home-tab"
                                            data-bs-toggle="pill"
                                            href="#rounded-pills-icon-home"
                                            role="tab"
                                            aria-controls="rounded-pills-icon-home"
                                            aria-selected="true"
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
                                            Home</a
                                        >
                                    </li>
                                    <li class="nav-item ms-2 me-2">
                                        <a
                                            class="nav-link mb-2 text-center"
                                            id="rounded-pills-icon-profile-tab"
                                            data-bs-toggle="pill"
                                            href="#rounded-pills-icon-profile"
                                            role="tab"
                                            aria-controls="rounded-pills-icon-profile"
                                            aria-selected="false"
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
                                                class="feather feather-user"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                            Profile</a
                                        >
                                    </li>
                                    <li class="nav-item ms-2 me-2">
                                        <a
                                            class="nav-link mb-2 text-center"
                                            id="rounded-pills-icon-contact-tab"
                                            data-bs-toggle="pill"
                                            href="#rounded-pills-icon-contact"
                                            role="tab"
                                            aria-controls="rounded-pills-icon-contact"
                                            aria-selected="false"
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
                                                class="feather feather-phone"
                                            >
                                                <path
                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                                ></path>
                                            </svg>
                                            Contact</a
                                        >
                                    </li>

                                    <li class="nav-item ms-2 me-2">
                                        <a
                                            class="nav-link mb-2 text-center"
                                            id="rounded-pills-icon-settings-tab"
                                            data-bs-toggle="pill"
                                            href="#rounded-pills-icon-settings"
                                            role="tab"
                                            aria-controls="rounded-pills-icon-settings"
                                            aria-selected="false"
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
                                                class="feather feather-settings"
                                            >
                                                <circle cx="12" cy="12" r="3"></circle>
                                                <path
                                                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                                                ></path>
                                            </svg>
                                            Settings</a
                                        >
                                    </li>
                                </ul>
                                <div class="tab-content" id="rounded-pills-icon-tabContent">
                                    <div class="tab-pane fade show active" id="rounded-pills-icon-home" role="tabpanel" aria-labelledby="rounded-pills-icon-home-tab">
                                        <p class="mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="rounded-pills-icon-profile" role="tabpanel" aria-labelledby="rounded-pills-icon-profile-tab">
                                        <div class="media">
                                            <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                            <div class="media-body">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="rounded-pills-icon-contact" role="tabpanel" aria-labelledby="rounded-pills-icon-contact-tab">
                                        <p class="dropcap dc-outline-primary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="rounded-pills-icon-settings" role="tabpanel" aria-labelledby="rounded-pills-icon-settings-tab">
                                        <blockquote class="blockquote">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo
                                        </blockquote>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code17')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code17')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body rounded-pills-icon tabs&quot;&gt;
    &lt;ul class=&quot;nav nav-pills mb-4 mt-3 justify-content-center&quot; id=&quot;rounded-pills-icon-tab&quot; role=&quot;tablist&quot;&gt;
        &lt;li class=&quot;nav-item ms-2 me-2&quot;&gt;
            &lt;a
                class=&quot;nav-link mb-2 active text-center&quot;
                id=&quot;rounded-pills-icon-home-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#rounded-pills-icon-home&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;rounded-pills-icon-home&quot;
                aria-selected=&quot;true&quot;
                &gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Home
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item ms-2 me-2&quot;&gt;
            &lt;a
                class=&quot;nav-link mb-2 text-center&quot;
                id=&quot;rounded-pills-icon-profile-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#rounded-pills-icon-profile&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;rounded-pills-icon-profile&quot;
                aria-selected=&quot;false&quot;
                &gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Profile
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item ms-2 me-2&quot;&gt;
            &lt;a
                class=&quot;nav-link mb-2 text-center&quot;
                id=&quot;rounded-pills-icon-contact-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#rounded-pills-icon-contact&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;rounded-pills-icon-contact&quot;
                aria-selected=&quot;false&quot;
                &gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Contact
            &lt;/a&gt;
        &lt;/li&gt;

        &lt;li class=&quot;nav-item ms-2 me-2&quot;&gt;
            &lt;a
                class=&quot;nav-link mb-2 text-center&quot;
                id=&quot;rounded-pills-icon-settings-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#rounded-pills-icon-settings&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;rounded-pills-icon-settings&quot;
                aria-selected=&quot;false&quot;
                &gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Settings
            &lt;/a&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
    &lt;div class=&quot;tab-content&quot; id=&quot;rounded-pills-icon-tabContent&quot;&gt;
        &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;rounded-pills-icon-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;rounded-pills-icon-home-tab&quot;&gt;
            &lt;p class=&quot;mb-4&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;

            &lt;p&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;rounded-pills-icon-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;rounded-pills-icon-profile-tab&quot;&gt;
            &lt;div class=&quot;media&quot;&gt;
                &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                &lt;div class=&quot;media-body&quot;&gt;
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;rounded-pills-icon-contact&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;rounded-pills-icon-contact-tab&quot;&gt;
            &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;rounded-pills-icon-settings&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;rounded-pills-icon-settings-tab&quot;&gt;
            &lt;blockquote class=&quot;blockquote&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            &lt;/blockquote&gt;
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

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Circle with Icon</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body rounded-circle-pills-icon tabs">
                                <ul class="nav nav-pills mb-4 mt-3 justify-content-center" id="rounded-circle-pills-icon-tab" role="tablist">
                                    <li class="nav-item me-2">
                                        <a
                                            class="nav-link mb-1 rounded-circle active"
                                            id="rounded-circle-pills-icon-home-tab"
                                            data-bs-toggle="pill"
                                            href="#rounded-circle-pills-icon-home"
                                            role="tab"
                                            aria-controls="rounded-circle-pills-icon-home"
                                            aria-selected="true"
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
                                    <li class="nav-item ms-2 me-2">
                                        <a
                                            class="nav-link mb-1 rounded-circle"
                                            id="rounded-circle-pills-icon-profile-tab"
                                            data-bs-toggle="pill"
                                            href="#rounded-circle-pills-icon-profile"
                                            role="tab"
                                            aria-controls="rounded-circle-pills-icon-profile"
                                            aria-selected="false"
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
                                                class="feather feather-user"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="nav-item ms-2 me-2">
                                        <a
                                            class="nav-link mb-1 rounded-circle"
                                            id="rounded-circle-pills-icon-contact-tab"
                                            data-bs-toggle="pill"
                                            href="#rounded-circle-pills-icon-contact"
                                            role="tab"
                                            aria-controls="rounded-circle-pills-icon-contact"
                                            aria-selected="false"
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
                                                class="feather feather-phone"
                                            >
                                                <path
                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                                ></path>
                                            </svg>
                                        </a>
                                    </li>

                                    <li class="nav-item ms-2 me-2">
                                        <a
                                            class="nav-link mb-1 rounded-circle"
                                            id="rounded-circle-pills-icon-settings-tab"
                                            data-bs-toggle="pill"
                                            href="#rounded-circle-pills-icon-settings"
                                            role="tab"
                                            aria-controls="rounded-circle-pills-icon-settings"
                                            aria-selected="false"
                                        >
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
                                        </a>
                                    </li>
                                </ul>

                                <div class="tab-content" id="rounded-circle-pills-icon-tabContent">
                                    <div class="tab-pane fade show active" id="rounded-circle-pills-icon-home" role="tabpanel" aria-labelledby="rounded-circle-pills-icon-home-tab">
                                        <p class="mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="rounded-circle-pills-icon-profile" role="tabpanel" aria-labelledby="rounded-circle-pills-icon-profile-tab">
                                        <div class="media">
                                            <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                            <div class="media-body">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="rounded-circle-pills-icon-contact" role="tabpanel" aria-labelledby="rounded-circle-pills-icon-contact-tab">
                                        <p class="dropcap dc-outline-primary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="rounded-circle-pills-icon-settings" role="tabpanel" aria-labelledby="rounded-pills-icon-settings-tab">
                                        <blockquote class="blockquote">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo
                                        </blockquote>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code18')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code18')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body rounded-circle-pills-icon tabs&quot;&gt;
    &lt;ul class=&quot;nav nav-pills mb-4 mt-3 justify-content-center&quot; id=&quot;rounded-circle-pills-icon-tab&quot; role=&quot;tablist&quot;&gt;
        &lt;li class=&quot;nav-item me-2&quot;&gt;
            &lt;a
                class=&quot;nav-link mb-1 rounded-circle active&quot;
                id=&quot;rounded-circle-pills-icon-home-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#rounded-circle-pills-icon-home&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;rounded-circle-pills-icon-home&quot;
                aria-selected=&quot;true&quot;
            &gt;
                &lt;svg&gt; ... &lt;/svg&gt;
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item ms-2 me-2&quot;&gt;
            &lt;a
                class=&quot;nav-link mb-1 rounded-circle&quot;
                id=&quot;rounded-circle-pills-icon-profile-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#rounded-circle-pills-icon-profile&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;rounded-circle-pills-icon-profile&quot;
                aria-selected=&quot;false&quot;
            &gt;
                &lt;svg&gt; ... &lt;/svg&gt;
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item ms-2 me-2&quot;&gt;
            &lt;a
                class=&quot;nav-link mb-1 rounded-circle&quot;
                id=&quot;rounded-circle-pills-icon-contact-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#rounded-circle-pills-icon-contact&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;rounded-circle-pills-icon-contact&quot;
                aria-selected=&quot;false&quot;
            &gt;
                &lt;svg&gt; ... &lt;/svg&gt;
            &lt;/a&gt;
        &lt;/li&gt;

        &lt;li class=&quot;nav-item ms-2 me-2&quot;&gt;
            &lt;a
                class=&quot;nav-link mb-1 rounded-circle&quot;
                id=&quot;rounded-circle-pills-icon-settings-tab&quot;
                data-bs-toggle=&quot;pill&quot;
                href=&quot;#rounded-circle-pills-icon-settings&quot;
                role=&quot;tab&quot;
                aria-controls=&quot;rounded-circle-pills-icon-settings&quot;
                aria-selected=&quot;false&quot;
            &gt;
                &lt;svg&gt; ... &lt;/svg&gt;
            &lt;/a&gt;
        &lt;/li&gt;
    &lt;/ul&gt;

    &lt;div class=&quot;tab-content&quot; id=&quot;rounded-circle-pills-icon-tabContent&quot;&gt;
        &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;rounded-circle-pills-icon-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;rounded-circle-pills-icon-home-tab&quot;&gt;
            &lt;p class=&quot;mb-4&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;

            &lt;p&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;rounded-circle-pills-icon-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;rounded-circle-pills-icon-profile-tab&quot;&gt;
            &lt;div class=&quot;media&quot;&gt;
                &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                &lt;div class=&quot;media-body&quot;&gt;
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;rounded-circle-pills-icon-contact&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;rounded-circle-pills-icon-contact-tab&quot;&gt;
            &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;rounded-circle-pills-icon-settings&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;rounded-pills-icon-settings-tab&quot;&gt;
            &lt;blockquote class=&quot;blockquote&quot;&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            &lt;/blockquote&gt;
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

                <div class="row">
                    <div id="tabsVerticalWithIcon" class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Vertical Rounded With Icon</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body rounded-vertical-pills-icon tabs">
                                <div class="row mb-4 mt-3">
                                    <div class="col-sm-4 col-12">
                                        <ul class="nav flex-column nav-pills mb-sm-0 mb-3" id="rounded-vertical-pills-tab" role="tablist" aria-orientation="vertical">
                                            <li>
                                                <a
                                                    class="nav-link mb-2 active mx-auto"
                                                    id="rounded-vertical-pills-home-tab"
                                                    data-bs-toggle="pill"
                                                    href="#rounded-vertical-pills-home"
                                                    role="tab"
                                                    aria-controls="rounded-vertical-pills-home"
                                                    aria-selected="true"
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
                                                    Home</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    class="nav-link mb-2 mx-auto"
                                                    id="rounded-vertical-pills-profile-tab"
                                                    data-bs-toggle="pill"
                                                    href="#rounded-vertical-pills-profile"
                                                    role="tab"
                                                    aria-controls="rounded-vertical-pills-profile"
                                                    aria-selected="false"
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
                                                        class="feather feather-user"
                                                    >
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </svg>
                                                    Profile</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    class="nav-link mb-2 mx-auto"
                                                    id="rounded-vertical-pills-messages-tab"
                                                    data-bs-toggle="pill"
                                                    href="#rounded-vertical-pills-messages"
                                                    role="tab"
                                                    aria-controls="rounded-vertical-pills-messages"
                                                    aria-selected="false"
                                                >
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
                                                    Messages</a
                                                >
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-sm-8 col-12">
                                        <div class="tab-content" id="rounded-vertical-pills-tabContent">
                                            <div class="tab-pane fade show active" id="rounded-vertical-pills-home" role="tabpanel" aria-labelledby="rounded-vertical-pills-home-tab">
                                                <h4 class="mb-4">We move your world!</h4>
                                                <p class="mb-4">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>

                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                            </div>
                                            <div class="tab-pane fade" id="rounded-vertical-pills-profile" role="tabpanel" aria-labelledby="rounded-vertical-pills-profile-tab">
                                                <div class="media mt-4 mb-3 me-2">
                                                    <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                                    <div class="media-body">
                                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                                                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="rounded-vertical-pills-messages" role="tabpanel" aria-labelledby="rounded-vertical-pills-messages-tab">
                                                <p class="dropcap dc-outline-primary">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code19')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code19')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body rounded-vertical-pills-icon tabs&quot;&gt;
    &lt;div class=&quot;row mb-4 mt-3&quot;&gt;
        &lt;div class=&quot;col-sm-4 col-12&quot;&gt;
            &lt;div class=&quot;nav flex-column nav-pills mb-sm-0 mb-3&quot; id=&quot;rounded-vertical-pills-tab&quot; role=&quot;tablist&quot; aria-orientation=&quot;vertical&quot;&gt;
                &lt;a
                    class=&quot;nav-link mb-2 active mx-auto&quot;
                    id=&quot;rounded-vertical-pills-home-tab&quot;
                    data-bs-toggle=&quot;pill&quot;
                    href=&quot;#rounded-vertical-pills-home&quot;
                    role=&quot;tab&quot;
                    aria-controls=&quot;rounded-vertical-pills-home&quot;
                    aria-selected=&quot;true&quot;
                    &gt;
                    &lt;svg&gt; ... &lt;/svg&gt;
                    Home
                &lt;/a&gt;
                &lt;a
                    class=&quot;nav-link mb-2 mx-auto&quot;
                    id=&quot;rounded-vertical-pills-profile-tab&quot;
                    data-bs-toggle=&quot;pill&quot;
                    href=&quot;#rounded-vertical-pills-profile&quot;
                    role=&quot;tab&quot;
                    aria-controls=&quot;rounded-vertical-pills-profile&quot;
                    aria-selected=&quot;false&quot;
                    &gt;
                    &lt;svg&gt; ... &lt;/svg&gt;
                    Profile
                &lt;/a&gt;
                &lt;a
                    class=&quot;nav-link mb-2 mx-auto&quot;
                    id=&quot;rounded-vertical-pills-messages-tab&quot;
                    data-bs-toggle=&quot;pill&quot;
                    href=&quot;#rounded-vertical-pills-messages&quot;
                    role=&quot;tab&quot;
                    aria-controls=&quot;rounded-vertical-pills-messages&quot;
                    aria-selected=&quot;false&quot;
                &gt;
                    &lt;svg&gt; ... &lt;/svg&gt;
                    Messages
                &lt;/a&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class=&quot;col-sm-8 col-12&quot;&gt;
            &lt;div class=&quot;tab-content&quot; id=&quot;rounded-vertical-pills-tabContent&quot;&gt;
                &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;rounded-vertical-pills-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;rounded-vertical-pills-home-tab&quot;&gt;
                    &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
                    &lt;p class=&quot;mb-4&quot;&gt;
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    &lt;/p&gt;

                    &lt;p&gt;
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    &lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=&quot;tab-pane fade&quot; id=&quot;rounded-vertical-pills-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;rounded-vertical-pills-profile-tab&quot;&gt;
                    &lt;div class=&quot;media mt-4 mb-3 me-2&quot;&gt;
                        &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                        &lt;div class=&quot;media-body&quot;&gt;
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                            viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class=&quot;tab-pane fade&quot; id=&quot;rounded-vertical-pills-messages&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;rounded-vertical-pills-messages-tab&quot;&gt;
                    &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    &lt;/p&gt;
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

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Vertical Circle With Icon</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body rounded-circle-vertical-pills-icon tabs">
                                <div class="row mb-4 mt-3">
                                    <div class="col-sm-4 col-12">
                                        <ul class="nav flex-column nav-pills" id="rounded-circle-vertical-pills-tab" role="tablist" aria-orientation="vertical">
                                            <li>
                                                <a
                                                    class="nav-link rounded-circle mb-3 mx-auto active"
                                                    id="rounded-circle-vertical-pills-home-tab"
                                                    data-bs-toggle="pill"
                                                    href="#rounded-circle-vertical-pills-home"
                                                    role="tab"
                                                    aria-controls="rounded-circle-vertical-pills-home"
                                                    aria-selected="true"
                                                >
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
                                            <li>
                                                <a
                                                    class="nav-link rounded-circle mb-3 mx-auto"
                                                    id="rounded-circle-vertical-pills-profile-tab"
                                                    data-bs-toggle="pill"
                                                    href="#rounded-circle-vertical-pills-profile"
                                                    role="tab"
                                                    aria-controls="rounded-circle-vertical-pills-profile"
                                                    aria-selected="false"
                                                >
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
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    class="nav-link rounded-circle mb-3 mx-auto"
                                                    id="rounded-circle-vertical-pills-messages-tab"
                                                    data-bs-toggle="pill"
                                                    href="#rounded-circle-vertical-pills-messages"
                                                    role="tab"
                                                    aria-controls="rounded-circle-vertical-pills-messages"
                                                    aria-selected="false"
                                                >
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
                                                        class="feather feather-phone"
                                                    >
                                                        <path
                                                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                                        ></path>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-sm-8 col-12">
                                        <div class="tab-content" id="rounded-circle-vertical-pills-tabContent">
                                            <div class="tab-pane fade show active" id="rounded-circle-vertical-pills-home" role="tabpanel" aria-labelledby="rounded-circle-vertical-pills-home-tab">
                                                <h4 class="mb-4">We move your world!</h4>
                                                <p class="mb-4">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>

                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                            </div>
                                            <div class="tab-pane fade" id="rounded-circle-vertical-pills-profile" role="tabpanel" aria-labelledby="rounded-circle-vertical-pills-profile-tab">
                                                <div class="media mt-4 mb-3 me-2">
                                                    <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                                    <div class="media-body">
                                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                                                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="rounded-circle-vertical-pills-messages" role="tabpanel" aria-labelledby="rounded-circle-vertical-pills-messages-tab">
                                                <p class="dropcap dc-outline-primary">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code20')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code20')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body rounded-circle-vertical-pills-icon tabs&quot;&gt;
    &lt;div class=&quot;row mb-4 mt-3&quot;&gt;
        &lt;div class=&quot;col-sm-4 col-12&quot;&gt;
            &lt;div class=&quot;nav flex-column nav-pills&quot; id=&quot;rounded-circle-vertical-pills-tab&quot; role=&quot;tablist&quot; aria-orientation=&quot;vertical&quot;&gt;
                &lt;a
                    class=&quot;nav-link rounded-circle mb-3 mx-auto active&quot;
                    id=&quot;rounded-circle-vertical-pills-home-tab&quot;
                    data-bs-toggle=&quot;pill&quot;
                    href=&quot;#rounded-circle-vertical-pills-home&quot;
                    role=&quot;tab&quot;
                    aria-controls=&quot;rounded-circle-vertical-pills-home&quot;
                    aria-selected=&quot;true&quot;
                &gt;
                    &lt;svg&gt; ... &lt;/svg&gt;
                &lt;/a&gt;
                &lt;a
                    class=&quot;nav-link rounded-circle mb-3 mx-auto&quot;
                    id=&quot;rounded-circle-vertical-pills-profile-tab&quot;
                    data-bs-toggle=&quot;pill&quot;
                    href=&quot;#rounded-circle-vertical-pills-profile&quot;
                    role=&quot;tab&quot;
                    aria-controls=&quot;rounded-circle-vertical-pills-profile&quot;
                    aria-selected=&quot;false&quot;
                &gt;
                    &lt;svg&gt; ... &lt;/svg&gt;
                &lt;/a&gt;
                &lt;a
                    class=&quot;nav-link rounded-circle mb-3 mx-auto&quot;
                    id=&quot;rounded-circle-vertical-pills-messages-tab&quot;
                    data-bs-toggle=&quot;pill&quot;
                    href=&quot;#rounded-circle-vertical-pills-messages&quot;
                    role=&quot;tab&quot;
                    aria-controls=&quot;rounded-circle-vertical-pills-messages&quot;
                    aria-selected=&quot;false&quot;
                &gt;
                    &lt;svg&gt; ... &lt;/svg&gt;
                &lt;/a&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class=&quot;col-sm-8 col-12&quot;&gt;
            &lt;div class=&quot;tab-content&quot; id=&quot;rounded-circle-vertical-pills-tabContent&quot;&gt;
                &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;rounded-circle-vertical-pills-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;rounded-circle-vertical-pills-home-tab&quot;&gt;
                    &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
                    &lt;p class=&quot;mb-4&quot;&gt;
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    &lt;/p&gt;

                    &lt;p&gt;
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    &lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=&quot;tab-pane fade&quot; id=&quot;rounded-circle-vertical-pills-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;rounded-circle-vertical-pills-profile-tab&quot;&gt;
                    &lt;div class=&quot;media mt-4 mb-3 me-2&quot;&gt;
                        &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                        &lt;div class=&quot;media-body&quot;&gt;
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                            viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class=&quot;tab-pane fade&quot; id=&quot;rounded-circle-vertical-pills-messages&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;rounded-circle-vertical-pills-messages-tab&quot;&gt;
                    &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    &lt;/p&gt;
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

                <div class="row">
                    <div id="tabsVertical" class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Vertical Pills</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body vertical-pill tabs">
                                <div class="row mb-4 mt-3">
                                    <div class="col-sm-3 col-12">
                                        <div class="nav flex-column nav-pills mb-sm-0 mb-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <a class="nav-link active mb-2" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                                            <a class="nav-link mb-2" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                                            <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Text</a>
                                            <a class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                                        </div>
                                    </div>

                                    <div class="col-sm-9 col-12">
                                        <div class="tab-content" id="v-pills-tabContent">
                                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                <h4 class="mb-4">We move your world!</h4>
                                                <p class="mb-4">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>

                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                            </div>
                                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                                <div class="media">
                                                    <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                                    <div class="media-body">
                                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                                                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                                <p class="dropcap dc-outline-primary">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            </div>
                                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                                <blockquote class="blockquote">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code21')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code21')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body vertical-pill tabs&quot;&gt;
    &lt;div class=&quot;row mb-4 mt-3&quot;&gt;
        &lt;div class=&quot;col-sm-3 col-12&quot;&gt;
            &lt;div class=&quot;nav flex-column nav-pills mb-sm-0 mb-3&quot; id=&quot;v-pills-tab&quot; role=&quot;tablist&quot; aria-orientation=&quot;vertical&quot;&gt;
                &lt;a class=&quot;nav-link active mb-2&quot; id=&quot;v-pills-home-tab&quot; data-bs-toggle=&quot;pill&quot; href=&quot;#v-pills-home&quot; role=&quot;tab&quot; aria-controls=&quot;v-pills-home&quot; aria-selected=&quot;true&quot;
                    &gt;Home&lt;/a
                &gt;
                &lt;a class=&quot;nav-link mb-2&quot; id=&quot;v-pills-profile-tab&quot; data-bs-toggle=&quot;pill&quot; href=&quot;#v-pills-profile&quot; role=&quot;tab&quot; aria-controls=&quot;v-pills-profile&quot; aria-selected=&quot;false&quot;
                    &gt;Profile&lt;/a
                &gt;
                &lt;a
                    class=&quot;nav-link mb-2&quot;
                    id=&quot;v-pills-messages-tab&quot;
                    data-bs-toggle=&quot;pill&quot;
                    href=&quot;#v-pills-messages&quot;
                    role=&quot;tab&quot;
                    aria-controls=&quot;v-pills-messages&quot;
                    aria-selected=&quot;false&quot;
                    &gt;Text&lt;/a
                &gt;
                &lt;a class=&quot;nav-link&quot; id=&quot;v-pills-settings-tab&quot; data-bs-toggle=&quot;pill&quot; href=&quot;#v-pills-settings&quot; role=&quot;tab&quot; aria-controls=&quot;v-pills-settings&quot; aria-selected=&quot;false&quot;
                    &gt;Settings&lt;/a
                &gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class=&quot;col-sm-9 col-12&quot;&gt;
            &lt;div class=&quot;tab-content&quot; id=&quot;v-pills-tabContent&quot;&gt;
                &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;v-pills-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-pills-home-tab&quot;&gt;
                    &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
                    &lt;p class=&quot;mb-4&quot;&gt;
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    &lt;/p&gt;

                    &lt;p&gt;
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    &lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=&quot;tab-pane fade&quot; id=&quot;v-pills-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-pills-profile-tab&quot;&gt;
                    &lt;div class=&quot;media&quot;&gt;
                        &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                        &lt;div class=&quot;media-body&quot;&gt;
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                            viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class=&quot;tab-pane fade&quot; id=&quot;v-pills-messages&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-pills-messages-tab&quot;&gt;
                    &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    &lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=&quot;tab-pane fade&quot; id=&quot;v-pills-settings&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-pills-settings-tab&quot;&gt;
                    &lt;blockquote class=&quot;blockquote&quot;&gt;
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    &lt;/blockquote&gt;
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

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Justify Vertical Pills Right</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body vertical-pill-right tabs">
                                <div class="row mb-4 mt-3">
                                    <div class="col-sm-9 col-12 order-sm-0 order-1">
                                        <div class="tab-content" id="v-right-pills-tabContent">
                                            <div class="tab-pane fade show active" id="v-right-pills-home" role="tabpanel" aria-labelledby="v-right-pills-home-tab">
                                                <h4 class="mb-4">We move your world!</h4>
                                                <p class="mb-4">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>

                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                            </div>
                                            <div class="tab-pane fade" id="v-right-pills-profile" role="tabpanel" aria-labelledby="v-right-pills-profile-tab">
                                                <div class="media">
                                                    <img class="me-3" src="/assets/images/profile-32.jpeg" alt="Generic placeholder image" />
                                                    <div class="media-body">
                                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                                                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="v-right-pills-messages" role="tabpanel" aria-labelledby="v-right-pills-messages-tab">
                                                <p class="dropcap dc-outline-primary">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            </div>
                                            <div class="tab-pane fade" id="v-right-pills-settings" role="tabpanel" aria-labelledby="v-right-pills-settings-tab">
                                                <blockquote class="blockquote">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-3 col-12">
                                        <div class="nav flex-column nav-pills mb-sm-0 mb-3" id="v-right-pills-tab" role="tablist" aria-orientation="vertical">
                                            <a class="nav-link active mb-2" id="v-right-pills-home-tab" data-bs-toggle="pill" href="#v-right-pills-home" role="tab" aria-controls="v-right-pills-home" aria-selected="true">Home</a>
                                            <a class="nav-link mb-2" id="v-right-pills-profile-tab" data-bs-toggle="pill" href="#v-right-pills-profile" role="tab" aria-controls="v-right-pills-profile" aria-selected="false">Profile</a>
                                            <a class="nav-link mb-2" id="v-right-pills-messages-tab" data-bs-toggle="pill" href="#v-right-pills-messages" role="tab" aria-controls="v-right-pills-messages" aria-selected="false">Text</a>
                                            <a class="nav-link" id="v-right-pills-settings-tab" data-bs-toggle="pill" href="#v-right-pills-settings" role="tab" aria-controls="v-right-pills-settings" aria-selected="false">Settings</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code22')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code22')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;panel-body vertical-pill-right tabs&quot;&gt;
    &lt;div class=&quot;row mb-4 mt-3&quot;&gt;
        &lt;div class=&quot;col-sm-9 col-12 order-sm-0 order-1&quot;&gt;
            &lt;div class=&quot;tab-content&quot; id=&quot;v-right-pills-tabContent&quot;&gt;
                &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;v-right-pills-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-right-pills-home-tab&quot;&gt;
                    &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
                    &lt;p class=&quot;mb-4&quot;&gt;
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    &lt;/p&gt;

                    &lt;p&gt;
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    &lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=&quot;tab-pane fade&quot; id=&quot;v-right-pills-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-right-pills-profile-tab&quot;&gt;
                    &lt;div class=&quot;media&quot;&gt;
                        &lt;img class=&quot;me-3&quot; src=&quot;/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot; /&gt;
                        &lt;div class=&quot;media-body&quot;&gt;
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                            viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class=&quot;tab-pane fade&quot; id=&quot;v-right-pills-messages&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-right-pills-messages-tab&quot;&gt;
                    &lt;p class=&quot;dropcap dc-outline-primary&quot;&gt;
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    &lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=&quot;tab-pane fade&quot; id=&quot;v-right-pills-settings&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-right-pills-settings-tab&quot;&gt;
                    &lt;blockquote class=&quot;blockquote&quot;&gt;
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    &lt;/blockquote&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class=&quot;col-sm-3 col-12&quot;&gt;
            &lt;div class=&quot;nav flex-column nav-pills mb-sm-0 mb-3&quot; id=&quot;v-right-pills-tab&quot; role=&quot;tablist&quot; aria-orientation=&quot;vertical&quot;&gt;
                &lt;a
                    class=&quot;nav-link active mb-2&quot;
                    id=&quot;v-right-pills-home-tab&quot;
                    data-bs-toggle=&quot;pill&quot;
                    href=&quot;#v-right-pills-home&quot;
                    role=&quot;tab&quot;
                    aria-controls=&quot;v-right-pills-home&quot;
                    aria-selected=&quot;true&quot;
                    &gt;Home&lt;/a
                &gt;
                &lt;a
                    class=&quot;nav-link mb-2&quot;
                    id=&quot;v-right-pills-profile-tab&quot;
                    data-bs-toggle=&quot;pill&quot;
                    href=&quot;#v-right-pills-profile&quot;
                    role=&quot;tab&quot;
                    aria-controls=&quot;v-right-pills-profile&quot;
                    aria-selected=&quot;false&quot;
                    &gt;Profile&lt;/a
                &gt;
                &lt;a
                    class=&quot;nav-link mb-2&quot;
                    id=&quot;v-right-pills-messages-tab&quot;
                    data-bs-toggle=&quot;pill&quot;
                    href=&quot;#v-right-pills-messages&quot;
                    role=&quot;tab&quot;
                    aria-controls=&quot;v-right-pills-messages&quot;
                    aria-selected=&quot;false&quot;
                    &gt;Text&lt;/a
                &gt;
                &lt;a
                    class=&quot;nav-link&quot;
                    id=&quot;v-right-pills-settings-tab&quot;
                    data-bs-toggle=&quot;pill&quot;
                    href=&quot;#v-right-pills-settings&quot;
                    role=&quot;tab&quot;
                    aria-controls=&quot;v-right-pills-settings&quot;
                    aria-selected=&quot;false&quot;
                    &gt;Settings&lt;/a
                &gt;
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
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import "../../assets/sass/scrollspyNav.scss";
    import "../../assets/sass/components/tabs-accordian/custom-tabs.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Tabs" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
