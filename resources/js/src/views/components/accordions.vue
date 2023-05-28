<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components </a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Accordions</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div id="navSection" class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#accordionBasic" class="nav-link">Basic</a>
                    <a href="#accordionWithout-spacing" class="nav-link">Without Spacing</a>
                    <a href="#accordionIcons" class="nav-link">Icons</a>
                    <a href="#accordionNo-icons" class="nav-link">No Icons</a>
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
                        <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/accordion" class="text-info"> https://getbootstrap.com/docs/5.0/components/accordion </a>
                    </div>
                </div>
            </div>
            <div v-scroll-spy class="row layout-top-spacing">
                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div id="accordionBasic" class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div id="toggleAccordion" class="accordion">
                                <div class="card">
                                    <header class="card-header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div class="collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#headingOne1" aria-expanded="true" aria-controls="headingOne1">
                                                Collapsible Group Item #1
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    </header>
                                    <div id="headingOne1" class="collapse" aria-labelledby="headingOne1" data-bs-parent="#toggleAccordion">
                                        <div class="card-body">
                                            <p class="">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                            </p>

                                            <p class="">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <header class="card-header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div class="" role="menu" data-bs-toggle="collapse" data-bs-target="#headingTwo1" aria-expanded="true" aria-controls="headingTwo1">
                                                Collapsible Group Item #2
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    </header>
                                    <div id="headingTwo1" class="collapse show" aria-labelledby="headingTwo1" data-bs-parent="#toggleAccordion">
                                        <div class="card-body">
                                            <ul class="list-unstyled">
                                                <li><a href="javascript:void(0);" class="">Apple</a></li>
                                                <li><a href="javascript:void(0);" class="">Orange</a></li>
                                                <li><a href="javascript:void(0);" class="">Banana</a></li>
                                                <li><a href="javascript:void(0);" class="">list</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <header class="card-header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div class="collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#headingThree1" aria-expanded="true" aria-controls="headingThree1">
                                                Collapsible Group Item #3
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    </header>
                                    <div id="headingThree1" class="collapse" aria-labelledby="headingThree1" data-bs-parent="#toggleAccordion">
                                        <div class="card-body">
                                            <p>
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                                                cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </p>

                                            <button type="button" class="btn btn-primary mt-4">Accept</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div id=&quot;toggleAccordion&quot; class=&quot;accordion&quot;&gt;
    &lt;div class=&quot;card&quot;&gt;
        &lt;header class=&quot;card-header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div class=&quot;collapsed&quot; role=&quot;menu&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#headingOne1&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;headingOne1&quot;&gt;
                    Collapsible Group Item #1
                    &lt;div class=&quot;icons&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/header&gt;
        &lt;div id=&quot;headingOne1&quot; class=&quot;collapse&quot; aria-labelledby=&quot;headingOne1&quot; data-bs-parent=&quot;#toggleAccordion&quot;&gt;
            &lt;div class=&quot;card-body&quot;&gt;
                &lt;p class=&quot;&quot;&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                &lt;/p&gt;

                &lt;p class=&quot;&quot;&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                &lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;card&quot;&gt;
        &lt;header class=&quot;card-header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div class=&quot;&quot; role=&quot;menu&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#headingTwo1&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;headingTwo1&quot;&gt;
                    Collapsible Group Item #2
                    &lt;div class=&quot;icons&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/header&gt;
        &lt;div id=&quot;headingTwo1&quot; class=&quot;collapse show&quot; aria-labelledby=&quot;headingTwo1&quot; data-bs-parent=&quot;#toggleAccordion&quot;&gt;
            &lt;div class=&quot;card-body&quot;&gt;
                &lt;ul class=&quot;list-unstyled&quot;&gt;
                    &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;Apple&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;Orange&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;Banana&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;list&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;card&quot;&gt;
        &lt;header class=&quot;card-header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div class=&quot;collapsed&quot; role=&quot;menu&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#headingThree1&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;headingThree1&quot;&gt;
                    Collapsible Group Item #3
                    &lt;div class=&quot;icons&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/header&gt;
        &lt;div id=&quot;headingThree1&quot; class=&quot;collapse&quot; aria-labelledby=&quot;headingThree1&quot; data-bs-parent=&quot;#toggleAccordion&quot;&gt;
            &lt;div class=&quot;card-body&quot;&gt;
                &lt;p&gt;
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                    brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                &lt;/p&gt;

                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary mt-4&quot;&gt;Accept&lt;/button&gt;
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

                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div id="accordionWithout-spacing" class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Without Spacing</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body icon-accordion-content">
                            <div id="withoutSpacing" class="accordion no-outer-spacing">
                                <div class="card">
                                    <header class="card-header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div class="collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#headingOne2" aria-expanded="true" aria-controls="headingOne2">
                                                Collapsible Group Item #1
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    </header>
                                    <div id="headingOne2" class="collapse" aria-labelledby="headingOne2" data-bs-parent="#withoutSpacing">
                                        <div class="card-body">
                                            <p class="">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                            </p>

                                            <p class="">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <header class="card-header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div class="collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#headingTwo2" aria-expanded="true" aria-controls="headingTwo2">
                                                Collapsible Group Item #2
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    </header>
                                    <div id="headingTwo2" class="collapse" aria-labelledby="headingTwo2" data-bs-parent="#withoutSpacing">
                                        <div class="card-body">
                                            <ul class="list-unstyled">
                                                <li><a href="javascript:void(0);" class="">Apple</a></li>
                                                <li><a href="javascript:void(0);" class="">Orange</a></li>
                                                <li><a href="javascript:void(0);" class="">Banana</a></li>
                                                <li><a href="javascript:void(0);" class="">list</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <header class="card-header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div class="" role="menu" data-bs-toggle="collapse" data-bs-target="#headingThree2" aria-expanded="true" aria-controls="headingThree2">
                                                Collapsible Group Item #3
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    </header>
                                    <div id="headingThree2" class="collapse show" aria-labelledby="headingThree2" data-bs-parent="#withoutSpacing">
                                        <div class="card-body">
                                            <p>
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                                                cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </p>

                                            <button type="button" class="btn btn-primary mt-4">Accept</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div id=&quot;withoutSpacing&quot; class=&quot;accordion no-outer-spacing&quot;&gt;
    &lt;div class=&quot;card&quot;&gt;
        &lt;header class=&quot;card-header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div class=&quot;collapsed&quot; role=&quot;menu&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#headingOne2&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;headingOne2&quot;&gt;
                    Collapsible Group Item #1
                    &lt;div class=&quot;icons&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/header&gt;
        &lt;div id=&quot;headingOne2&quot; class=&quot;collapse&quot; aria-labelledby=&quot;headingOne2&quot; data-bs-parent=&quot;#withoutSpacing&quot;&gt;
            &lt;div class=&quot;card-body&quot;&gt;
                &lt;p class=&quot;&quot;&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                &lt;/p&gt;

                &lt;p class=&quot;&quot;&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                &lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;card&quot;&gt;
        &lt;header class=&quot;card-header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div class=&quot;collapsed&quot; role=&quot;menu&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#headingTwo2&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;headingTwo2&quot;&gt;
                    Collapsible Group Item #2
                    &lt;div class=&quot;icons&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/header&gt;
        &lt;div id=&quot;headingTwo2&quot; class=&quot;collapse&quot; aria-labelledby=&quot;headingTwo2&quot; data-bs-parent=&quot;#withoutSpacing&quot;&gt;
            &lt;div class=&quot;card-body&quot;&gt;
                &lt;ul class=&quot;list-unstyled&quot;&gt;
                    &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;Apple&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;Orange&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;Banana&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;list&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;card&quot;&gt;
        &lt;header class=&quot;card-header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div class=&quot;&quot; role=&quot;menu&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#headingThree2&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;headingThree2&quot;&gt;
                    Collapsible Group Item #3
                    &lt;div class=&quot;icons&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/header&gt;
        &lt;div id=&quot;headingThree2&quot; class=&quot;collapse show&quot; aria-labelledby=&quot;headingThree2&quot; data-bs-parent=&quot;#withoutSpacing&quot;&gt;
            &lt;div class=&quot;card-body&quot;&gt;
                &lt;p&gt;
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                    brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                &lt;/p&gt;

                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary mt-4&quot;&gt;Accept&lt;/button&gt;
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

                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div id="accordionIcons" class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Icons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div id="iconsAccordion" class="accordion accordion-icons">
                                <div class="card">
                                    <header class="card-header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div class="collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#headingOne3" aria-expanded="true" aria-controls="headingOne3">
                                                <div class="accordion-icon">
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
                                                        class="feather feather-airplay"
                                                    >
                                                        <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                                                        <polygon points="12 15 17 21 7 21 12 15"></polygon>
                                                    </svg>
                                                </div>
                                                Collapsible Group Item #1
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    </header>
                                    <div id="headingOne3" class="collapse" aria-labelledby="headingOne3" data-bs-parent="#iconsAccordion">
                                        <div class="card-body">
                                            <p class="">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                            </p>

                                            <p class="">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <header class="card-header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div class="collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#headingTwo3" aria-expanded="true" aria-controls="headingTwo3">
                                                <div class="accordion-icon">
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
                                                        class="feather feather-box"
                                                    >
                                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                                    </svg>
                                                </div>
                                                Collapsible Group Item #2
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    </header>
                                    <div id="headingTwo3" class="collapse" aria-labelledby="headingTwo3" data-bs-parent="#iconsAccordion">
                                        <div class="card-body">
                                            <ul class="list-unstyled">
                                                <li><a href="javascript:void(0);" class="">Apple</a></li>
                                                <li><a href="javascript:void(0);" class="">Orange</a></li>
                                                <li><a href="javascript:void(0);" class="">Banana</a></li>
                                                <li><a href="javascript:void(0);" class="">list</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <header class="card-header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div class="" role="menu" data-bs-toggle="collapse" data-bs-target="#headingThree3" aria-expanded="true" aria-controls="headingThree3">
                                                <div class="accordion-icon">
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
                                                        class="feather feather-layout"
                                                    >
                                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                        <line x1="3" y1="9" x2="21" y2="9"></line>
                                                        <line x1="9" y1="21" x2="9" y2="9"></line>
                                                    </svg>
                                                </div>
                                                Collapsible Group Item #3
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    </header>
                                    <div id="headingThree3" class="collapse show" aria-labelledby="headingThree3" data-bs-parent="#iconsAccordion">
                                        <div class="card-body">
                                            <p>
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                                                cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </p>

                                            <button type="button" class="btn btn-primary mt-4">Accept</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div id=&quot;iconsAccordion&quot; class=&quot;accordion accordion-icons&quot;&gt;
    &lt;div class=&quot;card&quot;&gt;
        &lt;header class=&quot;card-header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div class=&quot;collapsed&quot; role=&quot;menu&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#headingOne3&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;headingOne3&quot;&gt;
                    &lt;div class=&quot;accordion-icon&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                    &lt;/div&gt;
                    Collapsible Group Item #1
                    &lt;div class=&quot;icons&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/header&gt;
        &lt;div id=&quot;headingOne3&quot; class=&quot;collapse&quot; aria-labelledby=&quot;headingOne3&quot; data-bs-parent=&quot;#iconsAccordion&quot;&gt;
            &lt;div class=&quot;card-body&quot;&gt;
                &lt;p class=&quot;&quot;&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                &lt;/p&gt;

                &lt;p class=&quot;&quot;&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                &lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;card&quot;&gt;
        &lt;header class=&quot;card-header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div class=&quot;collapsed&quot; role=&quot;menu&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#headingTwo3&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;headingTwo3&quot;&gt;
                    &lt;div class=&quot;accordion-icon&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                    &lt;/div&gt;
                    Collapsible Group Item #2
                    &lt;div class=&quot;icons&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/header&gt;
        &lt;div id=&quot;headingTwo3&quot; class=&quot;collapse&quot; aria-labelledby=&quot;headingTwo3&quot; data-bs-parent=&quot;#iconsAccordion&quot;&gt;
            &lt;div class=&quot;card-body&quot;&gt;
                &lt;ul class=&quot;list-unstyled&quot;&gt;
                    &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;Apple&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;Orange&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;Banana&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;list&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;card&quot;&gt;
        &lt;header class=&quot;card-header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div class=&quot;&quot; role=&quot;menu&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#headingThree3&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;headingThree3&quot;&gt;
                    &lt;div class=&quot;accordion-icon&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                    &lt;/div&gt;
                    Collapsible Group Item #3
                    &lt;div class=&quot;icons&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/header&gt;
        &lt;div id=&quot;headingThree3&quot; class=&quot;collapse show&quot; aria-labelledby=&quot;headingThree3&quot; data-bs-parent=&quot;#iconsAccordion&quot;&gt;
            &lt;div class=&quot;card-body&quot;&gt;
                &lt;p&gt;
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                    brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                &lt;/p&gt;

                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary mt-4&quot;&gt;Accept&lt;/button&gt;
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

                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div id="accordionNo-icons" class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>No Icons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body creative3-accordion-content">
                            <div id="noIconsAccordion" class="no-icons">
                                <div class="card">
                                    <header class="card-header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div class="" role="menu" data-bs-toggle="collapse" data-bs-target="#headingOne4" aria-expanded="true" aria-controls="headingOne4">Collapsible Group Item #1</div>
                                        </section>
                                    </header>
                                    <div id="headingOne4" class="collapse show" aria-labelledby="headingOne4" data-bs-parent="#noIconsAccordion">
                                        <div class="card-body">
                                            <p class="">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                            </p>

                                            <p class="">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <header class="card-header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div class="collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#headingTwo4" aria-expanded="true" aria-controls="headingTwo4">Collapsible Group Item #2</div>
                                        </section>
                                    </header>
                                    <div id="headingTwo4" class="collapse" aria-labelledby="headingTwo4" data-bs-parent="#noIconsAccordion">
                                        <div class="card-body">
                                            <ul class="list-unstyled">
                                                <li><a href="javascript:void(0);" class="">Apple</a></li>
                                                <li><a href="javascript:void(0);" class="">Orange</a></li>
                                                <li><a href="javascript:void(0);" class="">Banana</a></li>
                                                <li><a href="javascript:void(0);" class="">list</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <header class="card-header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div class="collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#headingThree4" aria-expanded="true" aria-controls="headingThree4">Collapsible Group Item #3</div>
                                        </section>
                                    </header>
                                    <div id="headingThree4" class="collapse" aria-labelledby="headingThree4" data-bs-parent="#noIconsAccordion">
                                        <div class="card-body">
                                            <p>
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                                                cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                                                accusamus labore sustainable VHS.
                                            </p>

                                            <button type="button" class="btn btn-primary mt-4">Accept</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div id=&quot;noIconsAccordion&quot; class=&quot;no-icons&quot;&gt;
    &lt;div class=&quot;card&quot;&gt;
        &lt;header class=&quot;card-header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div class=&quot;&quot; role=&quot;menu&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#headingOne4&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;headingOne4&quot;&gt;
                    Collapsible Group Item #1
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/header&gt;
        &lt;div id=&quot;headingOne4&quot; class=&quot;collapse show&quot; aria-labelledby=&quot;headingOne4&quot; data-bs-parent=&quot;#noIconsAccordion&quot;&gt;
            &lt;div class=&quot;card-body&quot;&gt;
                &lt;p class=&quot;&quot;&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                &lt;/p&gt;

                &lt;p class=&quot;&quot;&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                &lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;card&quot;&gt;
        &lt;header class=&quot;card-header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div class=&quot;collapsed&quot; role=&quot;menu&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#headingTwo4&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;headingTwo4&quot;&gt;
                    Collapsible Group Item #2
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/header&gt;
        &lt;div id=&quot;headingTwo4&quot; class=&quot;collapse&quot; aria-labelledby=&quot;headingTwo4&quot; data-bs-parent=&quot;#noIconsAccordion&quot;&gt;
            &lt;div class=&quot;card-body&quot;&gt;
                &lt;ul class=&quot;list-unstyled&quot;&gt;
                    &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;Apple&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;Orange&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;Banana&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;list&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;card&quot;&gt;
        &lt;header class=&quot;card-header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div class=&quot;collapsed&quot; role=&quot;menu&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#headingThree4&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;headingThree4&quot;&gt;
                    Collapsible Group Item #3
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/header&gt;
        &lt;div id=&quot;headingThree4&quot; class=&quot;collapse&quot; aria-labelledby=&quot;headingThree4&quot; data-bs-parent=&quot;#noIconsAccordion&quot;&gt;
            &lt;div class=&quot;card-body&quot;&gt;
                &lt;p&gt;
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                    brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                &lt;/p&gt;

                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary mt-4&quot;&gt;Accept&lt;/button&gt;
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
    import "../../assets/sass/components/tabs-accordian/custom-accordions.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Accordions" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
