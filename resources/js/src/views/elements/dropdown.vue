<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Dropdown</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#dropdownBasic" class="nav-link">Basic</a>
                    <a href="#dropdownDirections" class="nav-link">Directions</a>
                    <a href="#dropdownSizes" class="nav-link">Sizes</a>
                    <a href="#dropdownGrouped" class="nav-link">Grouped</a>
                    <a href="#dropdownSplit" class="nav-link">Split</a>
                    <a href="#dropdownCustom" class="nav-link">Custom</a>
                </div>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        Documentation: <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/dropdowns" class="text-info"> https://getbootstrap.com/docs/5.0/components/dropdowns </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="dropdownBasic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Dropdown</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="btn-group custom-dropdown mb-4 me-2" role="group">
                                                <button id="btndefault" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Action
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="btndefault">
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-home-fill-1 me-1"></i>Action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-gear-fill me-1"></i>Another action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-bell-fill-2 me-1"></i>Something else here</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-dots me-1"></i>Separated link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="btn-group custom-dropdown mb-4 me-2" role="group">
                                                <button id="btnOutline" type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Action
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="btnOutline">
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-home-fill-1 me-1"></i>Action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-gear-fill me-1"></i>Another action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-bell-fill-2 me-1"></i>Something else here</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-dots me-1"></i>Separated link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;btn-group custom-dropdown mb-4 me-2&quot; role=&quot;group&quot;&gt;
    &lt;button id=&quot;btndefault&quot; type=&quot;button&quot; class=&quot;btn btn-primary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
        Action
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
    &lt;ul class=&quot;dropdown-menu&quot; aria-labelledby=&quot;btndefault&quot;&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-home-fill-1 me-1&quot;&gt;&lt;/i&gt;Action&lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-gear-fill me-1&quot;&gt;&lt;/i&gt;Another action&lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-bell-fill-2 me-1&quot;&gt;&lt;/i&gt;Something else here&lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-dots me-1&quot;&gt;&lt;/i&gt;Separated link&lt;/a&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;

&lt;div class=&quot;btn-group custom-dropdown mb-4 me-2&quot; role=&quot;group&quot;&gt;
    &lt;button
        id=&quot;btnOutline&quot;
        type=&quot;button&quot;
        class=&quot;btn btn-outline-primary dropdown-toggle&quot;
        data-bs-toggle=&quot;dropdown&quot;
        aria-haspopup=&quot;true&quot;
        aria-expanded=&quot;false&quot;
    &gt;
        Action
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
    &lt;ul class=&quot;dropdown-menu&quot; aria-labelledby=&quot;btnOutline&quot;&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-home-fill-1 me-1&quot;&gt;&lt;/i&gt;Action&lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-gear-fill me-1&quot;&gt;&lt;/i&gt;Another action&lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-bell-fill-2 me-1&quot;&gt;&lt;/i&gt;Something else here&lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-dots me-1&quot;&gt;&lt;/i&gt;Separated link&lt;/a&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="dropdownDirections" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Dropup</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="btn-group custom-dropdown dropup mb-4 me-2" role="group">
                                                <button id="btnDropUp" type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Up
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
                                                        class="feather feather-chevron-up"
                                                    >
                                                        <polyline points="18 15 12 9 6 15"></polyline>
                                                    </svg>
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="btnDropUp">
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-home-fill-1 me-1"></i>Action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-gear-fill me-1"></i>Another action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-bell-fill-2 me-1"></i>Something else here</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-dots me-1"></i>Separated link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="btn-group custom-dropdown dropup mb-4 me-2" role="group">
                                                <button id="btnDropUpOutline" type="button" class="btn btn-outline-info dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Up
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
                                                        class="feather feather-chevron-up"
                                                    >
                                                        <polyline points="18 15 12 9 6 15"></polyline>
                                                    </svg>
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="btnDropUpOutline" style="will-change: transform">
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-home-fill-1 me-1"></i>Action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-gear-fill me-1"></i>Another action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-bell-fill-2 me-1"></i>Something else here</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-dots me-1"></i>Separated link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
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
                                    <h4>Dropright</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="btn-group custom-dropdown dropend mb-4 me-2" role="group">
                                                <button id="btnDropRight" type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Right
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
                                                        class="feather feather-chevron-right"
                                                    >
                                                        <polyline points="9 18 15 12 9 6"></polyline>
                                                    </svg>
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="btnDropRight">
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-home-fill-1 me-1"></i>Action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-gear-fill me-1"></i>Another action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-bell-fill-2 me-1"></i>Something else here</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-dots me-1"></i>Separated link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="btn-group custom-dropdown dropend mb-4 me-2" role="group">
                                                <button id="btnDropRightOutline" type="button" class="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Right
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
                                                        class="feather feather-chevron-right"
                                                    >
                                                        <polyline points="9 18 15 12 9 6"></polyline>
                                                    </svg>
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="btnDropRightOutline">
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-home-fill-1 me-1"></i>Action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-gear-fill me-1"></i>Another action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-bell-fill-2 me-1"></i>Something else here</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-dots me-1"></i>Separated link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
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
                                    <h4>Dropleft</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="btn-group custom-dropdown dropstart mb-4 me-2" role="group">
                                                <button id="btnDropLeft" type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                                        class="feather feather-chevron-left"
                                                    >
                                                        <polyline points="15 18 9 12 15 6"></polyline>
                                                    </svg>
                                                    Left
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="btnDropLeft">
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-home-fill-1 me-1"></i>Action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-gear-fill me-1"></i>Another action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-bell-fill-2 me-1"></i>Something else here</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-dots me-1"></i>Separated link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="btn-group custom-dropdown dropstart mb-4 me-2" role="group">
                                                <button id="btnDropLeftOutline" type="button" class="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                                        class="feather feather-chevron-left"
                                                    >
                                                        <polyline points="15 18 9 12 15 6"></polyline>
                                                    </svg>
                                                    Left
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="btnDropLeftOutline">
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-home-fill-1 me-1"></i>Action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-gear-fill me-1"></i>Another action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-bell-fill-2 me-1"></i>Something else here</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-dots me-1"></i>Separated link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="dropdownSizes" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Small Button</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="btn-group custom-dropdown mb-4 me-2">
                                                <button class="btn btn-dark btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Small button
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </button>
                                                <ul class="dropdown-menu" style="will-change: transform">
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-home-fill-1 me-1"></i>Action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-gear-fill me-1"></i>Another action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-bell-fill-2 me-1"></i>Something else here</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-dots me-1"></i>Separated link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="btn-group custom-dropdown mb-4 me-2">
                                                <button class="btn btn-outline-dark btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Small button
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-home-fill-1 me-1"></i>Action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-gear-fill me-1"></i>Another action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-bell-fill-2 me-1"></i>Something else here</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-dots me-1"></i>Separated link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
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
                                    <h4>Large Button</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="btn-group custom-dropdown mb-4 me-2 btn-group-lg">
                                                <button class="btn btn-success btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Large button
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-home-fill-1 me-1"></i>Action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-gear-fill me-1"></i>Another action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-bell-fill-2 me-1"></i>Something else here</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-dots me-1"></i>Separated link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="btn-group custom-dropdown mb-4 me-2 btn-group-lg">
                                                <button class="btn btn-outline-success btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Large button
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-home-fill-1 me-1"></i>Action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-gear-fill me-1"></i>Another action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-bell-fill-2 me-1"></i>Something else here</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-dots me-1"></i>Separated link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="dropdownGrouped" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Grouped Dropdown Buttons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="btn-group mb-4 me-2" role="group" aria-label="Button group with nested dropdown">
                                                <button type="button" class="btn btn-secondary">1</button>
                                                <button type="button" class="btn btn-secondary">2</button>
                                                <div class="btn-group custom-dropdown" role="group">
                                                    <button id="btnGroupDefault" type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Dropdown
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
                                                            class="feather feather-chevron-down"
                                                        >
                                                            <polyline points="6 9 12 15 18 9"></polyline>
                                                        </svg>
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="btnGroupDefault">
                                                        <li>
                                                            <a class="dropdown-item" href="javascript:void(0);">Dropdown link</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="javascript:void(0);">Dropdown link</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="btn-group custom-dropdown mb-4 me-2" role="group" aria-label="Button group with nested dropdown">
                                                <button type="button" class="btn btn-outline-secondary">1</button>
                                                <button type="button" class="btn btn-outline-secondary">2</button>
                                                <div class="btn-group" role="group">
                                                    <button id="btnGroupOutline" type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Dropdown
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
                                                            class="feather feather-chevron-down"
                                                        >
                                                            <polyline points="6 9 12 15 18 9"></polyline>
                                                        </svg>
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="btnGroupOutline">
                                                        <li>
                                                            <a class="dropdown-item" href="javascript:void(0);">Dropdown link</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="javascript:void(0);">Dropdown link</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="code-section-container show-code">
                                        <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                        <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                            <highlight>
                                                <pre>
&lt;div class=&quot;btn-group mb-4 me-2&quot; role=&quot;group&quot; aria-label=&quot;Button group with nested dropdown&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-secondary&quot;&gt;1&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-secondary&quot;&gt;2&lt;/button&gt;
    &lt;div class=&quot;btn-group custom-dropdown&quot; role=&quot;group&quot;&gt;
        &lt;button
            id=&quot;btnGroupDefault&quot;
            type=&quot;button&quot;
            class=&quot;btn btn-secondary dropdown-toggle&quot;
            data-bs-toggle=&quot;dropdown&quot;
            aria-haspopup=&quot;true&quot;
            aria-expanded=&quot;false&quot;
        &gt;
            Dropdown
            &lt;svg&gt; ... &lt;/svg&gt;
        &lt;/button&gt;
        &lt;ul class=&quot;dropdown-menu&quot; aria-labelledby=&quot;btnGroupDefault&quot;&gt;
            &lt;li&gt;
                &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Dropdown link&lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Dropdown link&lt;/a&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;btn-group custom-dropdown mb-4 me-2&quot; role=&quot;group&quot; aria-label=&quot;Button group with nested dropdown&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-outline-secondary&quot;&gt;1&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-outline-secondary&quot;&gt;2&lt;/button&gt;
    &lt;div class=&quot;btn-group&quot; role=&quot;group&quot;&gt;
        &lt;button
            id=&quot;btnGroupOutline&quot;
            type=&quot;button&quot;
            class=&quot;btn btn-outline-secondary dropdown-toggle&quot;
            data-bs-toggle=&quot;dropdown&quot;
            aria-haspopup=&quot;true&quot;
            aria-expanded=&quot;false&quot;
        &gt;
            Dropdown
            &lt;svg&gt; ... &lt;/svg&gt;
        &lt;/button&gt;
        &lt;ul class=&quot;dropdown-menu&quot; aria-labelledby=&quot;btnGroupOutline&quot;&gt;
            &lt;li&gt;
                &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Dropdown link&lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Dropdown link&lt;/a&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
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

                <div id="dropdownSplit" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Split</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="btn-group custom-dropdown mb-4 me-2">
                                                <button type="button" class="btn btn-primary">Action</button>
                                                <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span class="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <ul class="dropdown-menu" style="will-change: transform">
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-home-fill-1 me-1"></i>Action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-gear-fill me-1"></i>Another action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-bell-fill-2 me-1"></i>Something else here</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-dots me-1"></i>Separated link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="btn-group custom-dropdown mb-4 me-2">
                                                <button type="button" class="btn btn-outline-primary">Action</button>
                                                <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span class="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-home-fill-1 me-1"></i>Action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-gear-fill me-1"></i>Another action</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-bell-fill-2 me-1"></i>Something else here</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-dots me-1"></i>Separated link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;btn-group custom-dropdown mb-4 me-2&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Action&lt;/button&gt;
    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-primary dropdown-toggle dropdown-toggle-split&quot;
        data-bs-toggle=&quot;dropdown&quot;
        aria-haspopup=&quot;true&quot;
        aria-expanded=&quot;false&quot;
    &gt;
        &lt;span class=&quot;sr-only&quot;&gt;Toggle Dropdown&lt;/span&gt;
    &lt;/button&gt;
    &lt;ul class=&quot;dropdown-menu&quot; style=&quot;will-change: transform&quot;&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-home-fill-1 me-1&quot;&gt;&lt;/i&gt;Action&lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-gear-fill me-1&quot;&gt;&lt;/i&gt;Another action&lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-bell-fill-2 me-1&quot;&gt;&lt;/i&gt;Something else here&lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-dots me-1&quot;&gt;&lt;/i&gt;Separated link&lt;/a&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;

&lt;div class=&quot;btn-group custom-dropdown mb-4 me-2&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-outline-primary&quot;&gt;Action&lt;/button&gt;
    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-outline-primary dropdown-toggle dropdown-toggle-split&quot;
        data-bs-toggle=&quot;dropdown&quot;
        aria-haspopup=&quot;true&quot;
        aria-expanded=&quot;false&quot;
    &gt;
        &lt;span class=&quot;sr-only&quot;&gt;Toggle Dropdown&lt;/span&gt;
    &lt;/button&gt;
    &lt;ul class=&quot;dropdown-menu&quot;&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-home-fill-1 me-1&quot;&gt;&lt;/i&gt;Action&lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-gear-fill me-1&quot;&gt;&lt;/i&gt;Another action&lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-bell-fill-2 me-1&quot;&gt;&lt;/i&gt;Something else here&lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-dots me-1&quot;&gt;&lt;/i&gt;Separated link&lt;/a&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="dropdownCustom" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Custom Dropdown</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="row">
                                <div class="col-md-3 col-sm-3 col-3 mb-5">
                                    <div class="mb-4 me-2 custom-dropdown btn-group">
                                        <a class="btn dropdown-toggle btn-icon-only" href="#" role="button" id="pendingTask" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                style="width: 24px; height: 24px"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-more-vertical"
                                            >
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                            </svg>
                                        </a>

                                        <ul class="dropdown-menu" aria-labelledby="pendingTask">
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-home-fill-1 me-1"></i>Action</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-gear-fill me-1"></i>Another action</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-bell-fill-2 me-1"></i>Something else here</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-dots me-1"></i>Separated link</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-3 col-3 mb-5">
                                    <div class="mb-4 me-2 custom-dropdown btn-group">
                                        <a class="btn dropdown-toggle btn-icon-only" href="#" role="button" id="pendingTask" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                style="width: 24px; height: 24px"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-more-horizontal"
                                            >
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
                                                <circle cx="5" cy="12" r="1"></circle>
                                            </svg>
                                        </a>

                                        <ul class="dropdown-menu" aria-labelledby="pendingTask">
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-home-fill-1 me-1"></i>Action</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-gear-fill me-1"></i>Another action</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-bell-fill-2 me-1"></i>Something else here</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-dots me-1"></i>Separated link</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-md-3 col-sm-3 col-3 mb-5">
                                    <div class="mb-4 me-2 custom-dropdown btn-group">
                                        <a class="btn dropdown-toggle btn-icon-only" href="#" role="button" id="pendingTask" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                style="width: 24px; height: 24px"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-more-vertical"
                                            >
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                            </svg>
                                        </a>

                                        <ul class="dropdown-menu" aria-labelledby="pendingTask">
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-home-fill-1 me-1"></i>Action</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-gear-fill me-1"></i>Another action</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-bell-fill-2 me-1"></i>Something else here</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-dots me-1"></i>Separated link</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-md-3 col-sm-3 col-3 mb-5">
                                    <div class="mb-4 me-2 custom-dropdown btn-group">
                                        <a class="btn dropdown-toggle btn-icon-only" href="#" role="button" id="pendingTask" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                style="width: 24px; height: 24px"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-more-horizontal"
                                            >
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
                                                <circle cx="5" cy="12" r="1"></circle>
                                            </svg>
                                        </a>

                                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="pendingTask">
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-home-fill-1 me-1"></i>Action</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-gear-fill me-1"></i>Another action</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-bell-fill-2 me-1"></i>Something else here</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item"><i class="flaticon-dots me-1"></i>Separated link</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;mb-4 me-2 custom-dropdown btn-group&quot;&gt;
    &lt;a class=&quot;btn dropdown-toggle btn-icon-only&quot; href=&quot;#&quot; role=&quot;button&quot; id=&quot;pendingTask&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;true&quot;&gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/a&gt;

    &lt;ul class=&quot;dropdown-menu&quot; aria-labelledby=&quot;pendingTask&quot;&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-home-fill-1 me-1&quot;&gt;&lt;/i&gt;Action&lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-gear-fill me-1&quot;&gt;&lt;/i&gt;Another action&lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-bell-fill-2 me-1&quot;&gt;&lt;/i&gt;Something else here&lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;dropdown-item&quot;&gt;&lt;i class=&quot;flaticon-dots me-1&quot;&gt;&lt;/i&gt;Separated link&lt;/a&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
&lt;/b-dropdown&gt;
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
    useMeta({ title: "Dropdown" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
