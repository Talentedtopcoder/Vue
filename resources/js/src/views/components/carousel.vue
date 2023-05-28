<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Carousel</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#custom_carousel" class="nav-link">Custom Carousel</a>
                    <a href="#slides_only" class="nav-link">Slides only</a>
                    <a href="#with_controls" class="nav-link">With controls</a>
                    <a href="#with_indicators" class="nav-link">With indicators</a>
                    <a href="#with_captions" class="nav-link">With captions</a>
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
                        <a target="_blank" href="https://bootstrap-vue.org/docs/components/carousel" class="text-info"> https://bootstrap-vue.org/docs/components/carousel </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="custom_carousel" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Custom Carousel</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body style-custom-1">
                            <div class="container" style="max-width: 928px">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 p-0">
                                        <div id="style1" class="carousel slide style-custom-1" data-bs-ride="carousel">
                                            <ol class="carousel-indicators">
                                                <li data-bs-target="#style1" data-bs-slide-to="0" class="active"></li>
                                                <li data-bs-target="#style1" data-bs-slide-to="1"></li>
                                                <li data-bs-target="#style1" data-bs-slide-to="2"></li>
                                            </ol>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img class="d-block w-100 slide-image" src="/assets/images/1.jpeg" alt="First slide" />
                                                    <div class="carousel-caption">
                                                        <span class="badge">Lifestyle</span>
                                                        <h3>How To Make More Blog By Doing Less</h3>
                                                        <div class="media">
                                                            <img src="/assets/images/profile-6.jpeg" class="" alt="avatar" />
                                                            <div class="media-body">
                                                                <h6 class="user-name">User name</h6>
                                                                <p class="meta-time">
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
                                                                        class="feather feather-calendar"
                                                                    >
                                                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                                                    </svg>
                                                                    May, 14 2020
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100 slide-image" src="/assets/images/3.jpeg" alt="Second slide" />
                                                    <div class="carousel-caption">
                                                        <span class="badge">Lifestyle</span>
                                                        <h3>How To Make Blog</h3>
                                                        <div class="media">
                                                            <img src="/assets/images/profile-6.jpeg" class="" alt="avatar" />
                                                            <div class="media-body">
                                                                <h6 class="user-name">User name</h6>
                                                                <p class="meta-time">
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
                                                                        class="feather feather-calendar"
                                                                    >
                                                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                                                    </svg>
                                                                    May, 14 2020
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100 slide-image" src="/assets/images/2.jpg" alt="Third slide" />
                                                    <div class="carousel-caption">
                                                        <span class="badge">Lifestyle</span>
                                                        <h3>Best Blog Android Apps</h3>
                                                        <div class="media">
                                                            <img src="/assets/images/profile-6.jpeg" class="" alt="avatar" />
                                                            <div class="media-body">
                                                                <h6 class="user-name">User name</h6>
                                                                <p class="meta-time">
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
                                                                        class="feather feather-calendar"
                                                                    >
                                                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                                                    </svg>
                                                                    May, 14 2020
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a class="carousel-control-prev" href="#style1" role="button" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next" href="#style1" role="button" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div id=&quot;style1&quot; class=&quot;carousel slide style-custom-1&quot; data-bs-ride=&quot;carousel&quot;&gt;
    &lt;ol class=&quot;carousel-indicators&quot;&gt;
        &lt;li data-bs-target=&quot;#style1&quot; data-bs-slide-to=&quot;0&quot; class=&quot;active&quot;&gt;&lt;/li&gt;
        &lt;li data-bs-target=&quot;#style1&quot; data-bs-slide-to=&quot;1&quot;&gt;&lt;/li&gt;
        &lt;li data-bs-target=&quot;#style1&quot; data-bs-slide-to=&quot;2&quot;&gt;&lt;/li&gt;
    &lt;/ol&gt;
    &lt;div class=&quot;carousel-inner&quot;&gt;
        &lt;div class=&quot;carousel-item active&quot;&gt;
            &lt;img class=&quot;d-block w-100 slide-image&quot; src=&quot;/assets/images/1.jpeg&quot; alt=&quot;First slide&quot; /&gt;
            &lt;div class=&quot;carousel-caption&quot;&gt;
                &lt;span class=&quot;badge&quot;&gt;Lifestyle&lt;/span&gt;
                &lt;h3&gt;How To Make More Blog By Doing Less&lt;/h3&gt;
                &lt;div class=&quot;media&quot;&gt;
                    &lt;img src=&quot;/assets/images/profile-6.jpeg&quot; class=&quot;&quot; alt=&quot;avatar&quot; /&gt;
                    &lt;div class=&quot;media-body&quot;&gt;
                        &lt;h6 class=&quot;user-name&quot;&gt;User name&lt;/h6&gt;
                        &lt;p class=&quot;meta-time&quot;&gt;
                            &lt;svg&gt; ... &lt;/svg&gt;
                            May, 14 2020
                        &lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;carousel-item&quot;&gt;
            &lt;img class=&quot;d-block w-100 slide-image&quot; src=&quot;/assets/images/3.jpeg&quot; alt=&quot;Second slide&quot; /&gt;
            &lt;div class=&quot;carousel-caption&quot;&gt;
                &lt;span class=&quot;badge&quot;&gt;Lifestyle&lt;/span&gt;
                &lt;h3&gt;How To Make Blog&lt;/h3&gt;
                &lt;div class=&quot;media&quot;&gt;
                    &lt;img src=&quot;/assets/images/profile-6.jpeg&quot; class=&quot;&quot; alt=&quot;avatar&quot; /&gt;
                    &lt;div class=&quot;media-body&quot;&gt;
                        &lt;h6 class=&quot;user-name&quot;&gt;User name&lt;/h6&gt;
                        &lt;p class=&quot;meta-time&quot;&gt;
                            &lt;svg&gt; ... &lt;/svg&gt;
                            May, 14 2020
                        &lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;carousel-item&quot;&gt;
            &lt;img class=&quot;d-block w-100 slide-image&quot; src=&quot;/assets/images/2.jpg&quot; alt=&quot;Third slide&quot; /&gt;
            &lt;div class=&quot;carousel-caption&quot;&gt;
                &lt;span class=&quot;badge&quot;&gt;Lifestyle&lt;/span&gt;
                &lt;h3&gt;Best Blog Android Apps&lt;/h3&gt;
                &lt;div class=&quot;media&quot;&gt;
                    &lt;img src=&quot;/assets/images/profile-6.jpeg&quot; class=&quot;&quot; alt=&quot;avatar&quot; /&gt;
                    &lt;div class=&quot;media-body&quot;&gt;
                        &lt;h6 class=&quot;user-name&quot;&gt;User name&lt;/h6&gt;
                        &lt;p class=&quot;meta-time&quot;&gt;
                            &lt;svg&gt; ... &lt;/svg&gt;
                            May, 14 2020
                        &lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;a class=&quot;carousel-control-prev&quot; href=&quot;#style1&quot; role=&quot;button&quot; data-bs-slide=&quot;prev&quot;&gt;
        &lt;span class=&quot;carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
        &lt;span class=&quot;sr-only&quot;&gt;Previous&lt;/span&gt;
    &lt;/a&gt;
    &lt;a class=&quot;carousel-control-next&quot; href=&quot;#style1&quot; role=&quot;button&quot; data-bs-slide=&quot;next&quot;&gt;
        &lt;span class=&quot;carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
        &lt;span class=&quot;sr-only&quot;&gt;Next&lt;/span&gt;
    &lt;/a&gt;
&lt;/div&gt;
    </pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="slides_only" class="col-lg-12 col-md-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Slides only</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src="/assets/images/1.jpeg" alt="First slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="/assets/images/2.jpg" alt="Second slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="/assets/images/3.jpeg" alt="Third slide" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div id=&quot;carouselExampleSlidesOnly&quot; class=&quot;carousel slide&quot; data-bs-ride=&quot;carousel&quot;&gt;
    &lt;div class=&quot;carousel-inner&quot;&gt;
        &lt;div class=&quot;carousel-item active&quot;&gt;
            &lt;img class=&quot;d-block w-100&quot; src=&quot;/assets/images/1.jpeg&quot; alt=&quot;First slide&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;carousel-item&quot;&gt;
            &lt;img class=&quot;d-block w-100&quot; src=&quot;/assets/images/2.jpg&quot; alt=&quot;Second slide&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;carousel-item&quot;&gt;
            &lt;img class=&quot;d-block w-100&quot; src=&quot;/assets/images/3.jpeg&quot; alt=&quot;Third slide&quot; /&gt;
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
                <div id="with_controls" class="col-lg-12 col-md-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>With controls</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src="/assets/images/3.jpeg" alt="First slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="/assets/images/2.jpg" alt="Second slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="/assets/images/1.jpeg" alt="Third slide" />
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div id=&quot;carouselExampleControls&quot; class=&quot;carousel slide&quot; data-bs-ride=&quot;carousel&quot;&gt;
    &lt;div class=&quot;carousel-inner&quot;&gt;
        &lt;div class=&quot;carousel-item active&quot;&gt;
            &lt;img class=&quot;d-block w-100&quot; src=&quot;/assets/images/3.jpeg&quot; alt=&quot;First slide&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;carousel-item&quot;&gt;
            &lt;img class=&quot;d-block w-100&quot; src=&quot;/assets/images/2.jpg&quot; alt=&quot;Second slide&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;carousel-item&quot;&gt;
            &lt;img class=&quot;d-block w-100&quot; src=&quot;/assets/images/1.jpeg&quot; alt=&quot;Third slide&quot; /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;a class=&quot;carousel-control-prev&quot; href=&quot;#carouselExampleControls&quot; role=&quot;button&quot; data-bs-slide=&quot;prev&quot;&gt;
        &lt;span class=&quot;carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
        &lt;span class=&quot;sr-only&quot;&gt;Previous&lt;/span&gt;
    &lt;/a&gt;
    &lt;a class=&quot;carousel-control-next&quot; href=&quot;#carouselExampleControls&quot; role=&quot;button&quot; data-bs-slide=&quot;next&quot;&gt;
        &lt;span class=&quot;carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
        &lt;span class=&quot;sr-only&quot;&gt;Next&lt;/span&gt;
    &lt;/a&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="with_indicators" class="col-lg-12 col-md-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>With indicators</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active m"></li>
                                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src="/assets/images/2.jpg" alt="First slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="/assets/images/1.jpeg" alt="Second slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="/assets/images/3.jpeg" alt="Third slide" />
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div id=&quot;carouselExampleIndicators&quot; class=&quot;carousel slide&quot; data-bs-ride=&quot;carousel&quot;&gt;
    &lt;ol class=&quot;carousel-indicators&quot;&gt;
        &lt;li data-bs-target=&quot;#carouselExampleIndicators&quot; data-bs-slide-to=&quot;0&quot; class=&quot;active m&quot;&gt;&lt;/li&gt;
        &lt;li data-bs-target=&quot;#carouselExampleIndicators&quot; data-bs-slide-to=&quot;1&quot;&gt;&lt;/li&gt;
        &lt;li data-bs-target=&quot;#carouselExampleIndicators&quot; data-bs-slide-to=&quot;2&quot;&gt;&lt;/li&gt;
    &lt;/ol&gt;
    &lt;div class=&quot;carousel-inner&quot;&gt;
        &lt;div class=&quot;carousel-item active&quot;&gt;
            &lt;img class=&quot;d-block w-100&quot; src=&quot;/assets/images/2.jpg&quot; alt=&quot;First slide&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;carousel-item&quot;&gt;
            &lt;img class=&quot;d-block w-100&quot; src=&quot;/assets/images/1.jpeg&quot; alt=&quot;Second slide&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;carousel-item&quot;&gt;
            &lt;img class=&quot;d-block w-100&quot; src=&quot;/assets/images/3.jpeg&quot; alt=&quot;Third slide&quot; /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;a class=&quot;carousel-control-prev&quot; href=&quot;#carouselExampleIndicators&quot; role=&quot;button&quot; data-bs-slide=&quot;prev&quot;&gt;
        &lt;span class=&quot;carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
        &lt;span class=&quot;sr-only&quot;&gt;Previous&lt;/span&gt;
    &lt;/a&gt;
    &lt;a class=&quot;carousel-control-next&quot; href=&quot;#carouselExampleIndicators&quot; role=&quot;button&quot; data-bs-slide=&quot;next&quot;&gt;
        &lt;span class=&quot;carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
        &lt;span class=&quot;sr-only&quot;&gt;Next&lt;/span&gt;
    &lt;/a&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="with_captions" class="col-lg-12 col-md-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>With captions</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
                                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src="/assets/images/1.jpeg" alt="First slide" />
                                                <div class="carousel-caption d-none d-sm-block">
                                                    <h3>First slide</h3>
                                                    <h5>Lorem ipsum dolor sit amet, dolore magna aliqua.</h5>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="/assets/images/3.jpeg" alt="Second slide" />
                                                <div class="carousel-caption d-none d-sm-block">
                                                    <h3>Second slide</h3>
                                                    <h5>Lorem ipsum dolor sit amet, dolore magna aliqua.</h5>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="/assets/images/2.jpg" alt="Third slide" />
                                                <div class="carousel-caption d-none d-sm-block">
                                                    <h3>Third slide</h3>
                                                    <h5>Lorem ipsum dolor sit amet, dolore magna aliqua.</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div id=&quot;carouselExampleCaptions&quot; class=&quot;carousel slide&quot; data-bs-ride=&quot;carousel&quot;&gt;
    &lt;ol class=&quot;carousel-indicators&quot;&gt;
        &lt;li data-bs-target=&quot;#carouselExampleCaptions&quot; data-bs-slide-to=&quot;0&quot; class=&quot;active&quot;&gt;&lt;/li&gt;
        &lt;li data-bs-target=&quot;#carouselExampleCaptions&quot; data-bs-slide-to=&quot;1&quot;&gt;&lt;/li&gt;
        &lt;li data-bs-target=&quot;#carouselExampleCaptions&quot; data-bs-slide-to=&quot;2&quot;&gt;&lt;/li&gt;
    &lt;/ol&gt;
    &lt;div class=&quot;carousel-inner&quot;&gt;
        &lt;div class=&quot;carousel-item active&quot;&gt;
            &lt;img class=&quot;d-block w-100&quot; src=&quot;/assets/images/1.jpeg&quot; alt=&quot;First slide&quot; /&gt;
            &lt;div class=&quot;carousel-caption d-none d-sm-block&quot;&gt;
                &lt;h3&gt;First slide&lt;/h3&gt;
                &lt;h5&gt;Lorem ipsum dolor sit amet, dolore magna aliqua.&lt;/h5&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;carousel-item&quot;&gt;
            &lt;img class=&quot;d-block w-100&quot; src=&quot;/assets/images/3.jpeg&quot; alt=&quot;Second slide&quot; /&gt;
            &lt;div class=&quot;carousel-caption d-none d-sm-block&quot;&gt;
                &lt;h3&gt;Second slide&lt;/h3&gt;
                &lt;h5&gt;Lorem ipsum dolor sit amet, dolore magna aliqua.&lt;/h5&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;carousel-item&quot;&gt;
            &lt;img class=&quot;d-block w-100&quot; src=&quot;/assets/images/2.jpg&quot; alt=&quot;Third slide&quot; /&gt;
            &lt;div class=&quot;carousel-caption d-none d-sm-block&quot;&gt;
                &lt;h3&gt;Third slide&lt;/h3&gt;
                &lt;h5&gt;Lorem ipsum dolor sit amet, dolore magna aliqua.&lt;/h5&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;a class=&quot;carousel-control-prev&quot; href=&quot;#carouselExampleCaptions&quot; role=&quot;button&quot; data-bs-slide=&quot;prev&quot;&gt;
        &lt;span class=&quot;carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
        &lt;span class=&quot;sr-only&quot;&gt;Previous&lt;/span&gt;
    &lt;/a&gt;
    &lt;a class=&quot;carousel-control-next&quot; href=&quot;#carouselExampleCaptions&quot; role=&quot;button&quot; data-bs-slide=&quot;next&quot;&gt;
        &lt;span class=&quot;carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
        &lt;span class=&quot;sr-only&quot;&gt;Next&lt;/span&gt;
    &lt;/a&gt;
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
    import "../../assets/sass/components/custom-carousel.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Carousel" });

    const code_arr = ref([]);
    const slide1 = ref(0);
    const slide2 = ref(0);
    const slide3 = ref(0);
    const slide4 = ref(0);
    const slide5 = ref(0);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
