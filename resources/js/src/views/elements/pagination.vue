<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Pagination</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#paginationDefault" class="nav-link">Default</a>
                    <a href="#paginationSolid" class="nav-link">Solid</a>
                    <a href="#paginationIcons" class="nav-link">Icons</a>
                    <a href="#paginationIconsRounded" class="nav-link">Icons and Rounded</a>
                    <a href="#paginationNo-spacing" class="nav-link">No Spacing</a>
                </div>
            </div>

            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        Documentation: <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/pagination" class="text-info"> https://getbootstrap.com/docs/5.0/components/pagination </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="paginationDefault" class="col-xl-12 col-sm-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Default</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="paginating-container pagination-default flex-column align-items-center">
                                <ul role="menubar" aria-disabled="false" aria-label="Pagination" class="pagination mb-4 b-pagination">
                                    <li role="presentation" class="page-item"><button role="menuitem" type="button" tabindex="-1" aria-label="Go to first page" class="page-link">First</button></li>
                                    <li role="presentation" class="page-item"><button role="menuitem" type="button" tabindex="-1" aria-label="Go to previous page" class="page-link">Prev</button></li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 1" aria-checked="false" aria-posinset="1" aria-setsize="3" tabindex="-1" class="page-link">1</button>
                                    </li>
                                    <li role="presentation" class="page-item active">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 2" aria-checked="true" aria-posinset="2" aria-setsize="3" tabindex="0" class="page-link">2</button>
                                    </li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 3" aria-checked="false" aria-posinset="3" aria-setsize="3" tabindex="-1" class="page-link">3</button>
                                    </li>
                                    <li role="presentation" class="page-item"><button role="menuitem" type="button" tabindex="-1" aria-label="Go to next page" class="page-link">Next</button></li>
                                    <li role="presentation" class="page-item"><button role="menuitem" type="button" tabindex="-1" aria-label="Go to last page" class="page-link">Last</button></li>
                                </ul>

                                <ul role="menubar" aria-disabled="false" aria-label="Pagination" class="pagination b-pagination">
                                    <li role="presentation" class="page-item"><button role="menuitem" type="button" tabindex="-1" aria-label="Go to previous page" class="page-link">Prev</button></li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 1" aria-checked="false" aria-posinset="1" aria-setsize="3" tabindex="-1" class="page-link">1</button>
                                    </li>
                                    <li role="presentation" class="page-item active">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 2" aria-checked="true" aria-posinset="2" aria-setsize="3" tabindex="0" class="page-link">2</button>
                                    </li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 3" aria-checked="false" aria-posinset="3" aria-setsize="3" tabindex="-1" class="page-link">3</button>
                                    </li>
                                    <li role="presentation" class="page-item"><button role="menuitem" type="button" tabindex="-1" aria-label="Go to next page" class="page-link">Next</button></li>
                                </ul>
                            </div>

                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;paginating-container pagination-default flex-column align-items-center&quot;&gt;
    &lt;ul role=&quot;menubar&quot; aria-disabled=&quot;false&quot; aria-label=&quot;Pagination&quot; class=&quot;pagination mb-4 b-pagination&quot;&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;&lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to first page&quot; class=&quot;page-link&quot;&gt;First&lt;/button&gt;&lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;&lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to previous page&quot; class=&quot;page-link&quot;&gt;Prev&lt;/button&gt;&lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 1&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;1&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                1
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item active&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 2&quot; aria-checked=&quot;true&quot; aria-posinset=&quot;2&quot; aria-setsize=&quot;3&quot; tabindex=&quot;0&quot; class=&quot;page-link&quot;&gt;
                2
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 3&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;3&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                3
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;&lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to next page&quot; class=&quot;page-link&quot;&gt;Next&lt;/button&gt;&lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;&lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to last page&quot; class=&quot;page-link&quot;&gt;Last&lt;/button&gt;&lt;/li&gt;
    &lt;/ul&gt;

    &lt;ul role=&quot;menubar&quot; aria-disabled=&quot;false&quot; aria-label=&quot;Pagination&quot; class=&quot;pagination b-pagination&quot;&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;&lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to previous page&quot; class=&quot;page-link&quot;&gt;Prev&lt;/button&gt;&lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 1&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;1&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                1
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item active&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 2&quot; aria-checked=&quot;true&quot; aria-posinset=&quot;2&quot; aria-setsize=&quot;3&quot; tabindex=&quot;0&quot; class=&quot;page-link&quot;&gt;
                2
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 3&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;3&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                3
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;&lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to next page&quot; class=&quot;page-link&quot;&gt;Next&lt;/button&gt;&lt;/li&gt;
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

                <div id="paginationSolid" class="col-xl-12 col-sm-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Solid</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="paginating-container pagination-solid flex-column align-items-center">
                                <ul role="menubar" aria-disabled="false" aria-label="Pagination" class="pagination mb-4 b-pagination">
                                    <li role="presentation" class="page-item first">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to first page" class="page-link">First</button>
                                    </li>
                                    <li role="presentation" class="page-item prev">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to previous page" class="page-link">Prev</button>
                                    </li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 1" aria-checked="false" aria-posinset="1" aria-setsize="3" tabindex="-1" class="page-link">1</button>
                                    </li>
                                    <li role="presentation" class="page-item active">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 2" aria-checked="true" aria-posinset="2" aria-setsize="3" tabindex="0" class="page-link">2</button>
                                    </li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 3" aria-checked="false" aria-posinset="3" aria-setsize="3" tabindex="-1" class="page-link">3</button>
                                    </li>
                                    <li role="presentation" class="page-item next"><button role="menuitem" type="button" tabindex="-1" aria-label="Go to next page" class="page-link">Next</button></li>
                                    <li role="presentation" class="page-item last"><button role="menuitem" type="button" tabindex="-1" aria-label="Go to last page" class="page-link">Last</button></li>
                                </ul>
                                <ul role="menubar" aria-disabled="false" aria-label="Pagination" class="pagination b-pagination">
                                    <li role="presentation" class="page-item prev">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to previous page" class="page-link">Prev</button>
                                    </li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 1" aria-checked="false" aria-posinset="1" aria-setsize="3" tabindex="-1" class="page-link">1</button>
                                    </li>
                                    <li role="presentation" class="page-item active">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 2" aria-checked="true" aria-posinset="2" aria-setsize="3" tabindex="0" class="page-link">2</button>
                                    </li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 3" aria-checked="false" aria-posinset="3" aria-setsize="3" tabindex="-1" class="page-link">3</button>
                                    </li>
                                    <li role="presentation" class="page-item next"><button role="menuitem" type="button" tabindex="-1" aria-label="Go to next page" class="page-link">Next</button></li>
                                </ul>
                            </div>

                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;paginating-container pagination-solid flex-column align-items-center&quot;&gt;
    &lt;ul role=&quot;menubar&quot; aria-disabled=&quot;false&quot; aria-label=&quot;Pagination&quot; class=&quot;pagination mb-4 b-pagination&quot;&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item first&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to first page&quot; class=&quot;page-link&quot;&gt;First&lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item prev&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to previous page&quot; class=&quot;page-link&quot;&gt;Prev&lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 1&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;1&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                1
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item active&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 2&quot; aria-checked=&quot;true&quot; aria-posinset=&quot;2&quot; aria-setsize=&quot;3&quot; tabindex=&quot;0&quot; class=&quot;page-link&quot;&gt;
                2
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 3&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;3&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                3
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item next&quot;&gt;&lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to next page&quot; class=&quot;page-link&quot;&gt;Next&lt;/button&gt;&lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item last&quot;&gt;&lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to last page&quot; class=&quot;page-link&quot;&gt;Last&lt;/button&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;ul role=&quot;menubar&quot; aria-disabled=&quot;false&quot; aria-label=&quot;Pagination&quot; class=&quot;pagination b-pagination&quot;&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item prev&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to previous page&quot; class=&quot;page-link&quot;&gt;Prev&lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 1&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;1&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                1
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item active&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 2&quot; aria-checked=&quot;true&quot; aria-posinset=&quot;2&quot; aria-setsize=&quot;3&quot; tabindex=&quot;0&quot; class=&quot;page-link&quot;&gt;
                2
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 3&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;3&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                3
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item next&quot;&gt;&lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to next page&quot; class=&quot;page-link&quot;&gt;Next&lt;/button&gt;&lt;/li&gt;
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

                <div id="paginationIcons" class="col-xl-12 col-sm-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>With Icons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="paginating-container pagination-solid flex-column align-items-center">
                                <ul role="menubar" aria-disabled="false" aria-label="Pagination" class="pagination mb-4 b-pagination">
                                    <li role="presentation" class="page-item first">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to first page" class="page-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li role="presentation" class="page-item prev">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to previous page" class="page-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 1" aria-checked="false" aria-posinset="1" aria-setsize="3" tabindex="-1" class="page-link">1</button>
                                    </li>
                                    <li role="presentation" class="page-item active">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 2" aria-checked="true" aria-posinset="2" aria-setsize="3" tabindex="0" class="page-link">2</button>
                                    </li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 3" aria-checked="false" aria-posinset="3" aria-setsize="3" tabindex="-1" class="page-link">3</button>
                                    </li>
                                    <li role="presentation" class="page-item next">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to next page" class="page-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li role="presentation" class="page-item last">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to last page" class="page-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </li>
                                </ul>

                                <ul role="menubar" aria-disabled="false" aria-label="Pagination" class="pagination b-pagination">
                                    <li role="presentation" class="page-item prev">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to previous page" class="page-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 1" aria-checked="false" aria-posinset="1" aria-setsize="3" tabindex="-1" class="page-link">1</button>
                                    </li>
                                    <li role="presentation" class="page-item active">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 2" aria-checked="true" aria-posinset="2" aria-setsize="3" tabindex="0" class="page-link">2</button>
                                    </li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 3" aria-checked="false" aria-posinset="3" aria-setsize="3" tabindex="-1" class="page-link">3</button>
                                    </li>
                                    <li role="presentation" class="page-item next">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to next page" class="page-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;paginating-container pagination-solid flex-column align-items-center&quot;&gt;
    &lt;ul role=&quot;menubar&quot; aria-disabled=&quot;false&quot; aria-label=&quot;Pagination&quot; class=&quot;pagination mb-4 b-pagination&quot;&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item first&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to first page&quot; class=&quot;page-link&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M11 19l-7-7 7-7m8 14l-7-7 7-7&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item prev&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to previous page&quot; class=&quot;page-link&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M15 19l-7-7 7-7&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 1&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;1&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                1
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item active&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 2&quot; aria-checked=&quot;true&quot; aria-posinset=&quot;2&quot; aria-setsize=&quot;3&quot; tabindex=&quot;0&quot; class=&quot;page-link&quot;&gt;
                2
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 3&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;3&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                3
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item next&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to next page&quot; class=&quot;page-link&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 5l7 7-7 7&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item last&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to last page&quot; class=&quot;page-link&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M13 5l7 7-7 7M5 5l7 7-7 7&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
            &lt;/button&gt;
        &lt;/li&gt;
    &lt;/ul&gt;

    &lt;ul role=&quot;menubar&quot; aria-disabled=&quot;false&quot; aria-label=&quot;Pagination&quot; class=&quot;pagination b-pagination&quot;&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item prev&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to previous page&quot; class=&quot;page-link&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M15 19l-7-7 7-7&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 1&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;1&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                1
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item active&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 2&quot; aria-checked=&quot;true&quot; aria-posinset=&quot;2&quot; aria-setsize=&quot;3&quot; tabindex=&quot;0&quot; class=&quot;page-link&quot;&gt;
                2
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 3&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;3&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                3
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item next&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to next page&quot; class=&quot;page-link&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 5l7 7-7 7&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
            &lt;/button&gt;
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

                <div id="paginationIconsRounded" class="col-xl-12 col-sm-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>With Icons and Rounded</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="paginating-container pagination-solid flex-column align-items-center">
                                <ul role="menubar" aria-disabled="false" aria-label="Pagination" class="pagination mb-4 rounded b-pagination">
                                    <li role="presentation" class="page-item first">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to first page" class="page-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li role="presentation" class="page-item prev">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to previous page" class="page-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 1" aria-checked="false" aria-posinset="1" aria-setsize="3" tabindex="-1" class="page-link">1</button>
                                    </li>
                                    <li role="presentation" class="page-item active">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 2" aria-checked="true" aria-posinset="2" aria-setsize="3" tabindex="0" class="page-link">2</button>
                                    </li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 3" aria-checked="false" aria-posinset="3" aria-setsize="3" tabindex="-1" class="page-link">3</button>
                                    </li>
                                    <li role="presentation" class="page-item next">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to next page" class="page-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li role="presentation" class="page-item last">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to last page" class="page-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                                <ul role="menubar" aria-disabled="false" aria-label="Pagination" class="pagination rounded b-pagination">
                                    <li role="presentation" class="page-item prev">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to previous page" class="page-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 1" aria-checked="false" aria-posinset="1" aria-setsize="3" tabindex="-1" class="page-link">1</button>
                                    </li>
                                    <li role="presentation" class="page-item active">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 2" aria-checked="true" aria-posinset="2" aria-setsize="3" tabindex="0" class="page-link">2</button>
                                    </li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 3" aria-checked="false" aria-posinset="3" aria-setsize="3" tabindex="-1" class="page-link">3</button>
                                    </li>
                                    <li role="presentation" class="page-item next">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to next page" class="page-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;paginating-container pagination-solid flex-column align-items-center&quot;&gt;
    &lt;ul role=&quot;menubar&quot; aria-disabled=&quot;false&quot; aria-label=&quot;Pagination&quot; class=&quot;pagination mb-4 rounded b-pagination&quot;&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item first&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to first page&quot; class=&quot;page-link&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M11 19l-7-7 7-7m8 14l-7-7 7-7&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item prev&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to previous page&quot; class=&quot;page-link&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M15 19l-7-7 7-7&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 1&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;1&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                1
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item active&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 2&quot; aria-checked=&quot;true&quot; aria-posinset=&quot;2&quot; aria-setsize=&quot;3&quot; tabindex=&quot;0&quot; class=&quot;page-link&quot;&gt;
                2
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 3&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;3&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                3
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item next&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to next page&quot; class=&quot;page-link&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 5l7 7-7 7&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item last&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to last page&quot; class=&quot;page-link&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M13 5l7 7-7 7M5 5l7 7-7 7&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
            &lt;/button&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
    &lt;ul role=&quot;menubar&quot; aria-disabled=&quot;false&quot; aria-label=&quot;Pagination&quot; class=&quot;pagination rounded b-pagination&quot;&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item prev&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to previous page&quot; class=&quot;page-link&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M15 19l-7-7 7-7&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 1&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;1&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                1
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item active&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 2&quot; aria-checked=&quot;true&quot; aria-posinset=&quot;2&quot; aria-setsize=&quot;3&quot; tabindex=&quot;0&quot; class=&quot;page-link&quot;&gt;
                2
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 3&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;3&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                3
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item next&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to next page&quot; class=&quot;page-link&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 5l7 7-7 7&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
            &lt;/button&gt;
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

                <div id="paginationNo-spacing" class="col-xl-12 col-sm-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>No Spacing</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="paginating-container pagination-no_spacing flex-column align-items-center">
                                <ul role="menubar" aria-disabled="false" aria-label="Pagination" class="pagination mb-4 b-pagination">
                                    <li role="presentation" class="page-item first">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to first page" class="page-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li role="presentation" class="page-item prev">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to previous page" class="page-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 1" aria-checked="false" aria-posinset="1" aria-setsize="3" tabindex="-1" class="page-link">1</button>
                                    </li>
                                    <li role="presentation" class="page-item active">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 2" aria-checked="true" aria-posinset="2" aria-setsize="3" tabindex="0" class="page-link">2</button>
                                    </li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 3" aria-checked="false" aria-posinset="3" aria-setsize="3" tabindex="-1" class="page-link">3</button>
                                    </li>
                                    <li role="presentation" class="page-item next">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to next page" class="page-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li role="presentation" class="page-item last">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to last page" class="page-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </li>
                                </ul>

                                <ul role="menubar" aria-disabled="false" aria-label="Pagination" class="pagination b-pagination">
                                    <li role="presentation" class="page-item prev">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to previous page" class="page-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 1" aria-checked="false" aria-posinset="1" aria-setsize="3" tabindex="-1" class="page-link">1</button>
                                    </li>
                                    <li role="presentation" class="page-item active">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 2" aria-checked="true" aria-posinset="2" aria-setsize="3" tabindex="0" class="page-link">2</button>
                                    </li>
                                    <li role="presentation" class="page-item">
                                        <button role="menuitemradio" type="button" aria-label="Go to page 3" aria-checked="false" aria-posinset="3" aria-setsize="3" tabindex="-1" class="page-link">3</button>
                                    </li>
                                    <li role="presentation" class="page-item next">
                                        <button role="menuitem" type="button" tabindex="-1" aria-label="Go to next page" class="page-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;paginating-container pagination-no_spacing flex-column align-items-center&quot;&gt;
    &lt;ul role=&quot;menubar&quot; aria-disabled=&quot;false&quot; aria-label=&quot;Pagination&quot; class=&quot;pagination mb-4 b-pagination&quot;&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item first&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to first page&quot; class=&quot;page-link&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M11 19l-7-7 7-7m8 14l-7-7 7-7&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item prev&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to previous page&quot; class=&quot;page-link&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M15 19l-7-7 7-7&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 1&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;1&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                1
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item active&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 2&quot; aria-checked=&quot;true&quot; aria-posinset=&quot;2&quot; aria-setsize=&quot;3&quot; tabindex=&quot;0&quot; class=&quot;page-link&quot;&gt;
                2
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 3&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;3&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                3
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item next&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to next page&quot; class=&quot;page-link&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 5l7 7-7 7&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item last&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to last page&quot; class=&quot;page-link&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M13 5l7 7-7 7M5 5l7 7-7 7&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
            &lt;/button&gt;
        &lt;/li&gt;
    &lt;/ul&gt;

    &lt;ul role=&quot;menubar&quot; aria-disabled=&quot;false&quot; aria-label=&quot;Pagination&quot; class=&quot;pagination b-pagination&quot;&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item prev&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to previous page&quot; class=&quot;page-link&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M15 19l-7-7 7-7&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 1&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;1&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                1
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item active&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 2&quot; aria-checked=&quot;true&quot; aria-posinset=&quot;2&quot; aria-setsize=&quot;3&quot; tabindex=&quot;0&quot; class=&quot;page-link&quot;&gt;
                2
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item&quot;&gt;
            &lt;button role=&quot;menuitemradio&quot; type=&quot;button&quot; aria-label=&quot;Go to page 3&quot; aria-checked=&quot;false&quot; aria-posinset=&quot;3&quot; aria-setsize=&quot;3&quot; tabindex=&quot;-1&quot; class=&quot;page-link&quot;&gt;
                3
            &lt;/button&gt;
        &lt;/li&gt;
        &lt;li role=&quot;presentation&quot; class=&quot;page-item next&quot;&gt;
            &lt;button role=&quot;menuitem&quot; type=&quot;button&quot; tabindex=&quot;-1&quot; aria-label=&quot;Go to next page&quot; class=&quot;page-link&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 5l7 7-7 7&quot;&gt;&lt;/path&gt;
                &lt;/svg&gt;
            &lt;/button&gt;
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
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import "../../assets/sass/scrollspyNav.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Pagination" });

    const code_arr = ref([]);
    const rows = ref(9);
    const perPage = ref(3);
    const currentPage = ref(2);

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
