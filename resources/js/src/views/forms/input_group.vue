<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Input Group</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#basic" class="nav-link">Basic</a>
                    <a href="#sizes" class="nav-link">Sizes</a>
                    <a href="#multiple" class="nav-link">Multiple</a>
                    <a href="#Input_group_action" class="nav-link">Input group with action</a>
                </div>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        Documentation: <a target="_blank" href="https://getbootstrap.com/docs/5.0/forms/input-group" class="text-info"> https://getbootstrap.com/docs/5.0/forms/input-group </a>
                    </div>
                </div>
            </div>
            <div v-scroll-spy>
                <div class="row layout-top-spacing">
                    <div id="basic" class="col-lg-12 col-sm-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Default</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="input-group mb-4">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>

                                <div class="input-group mb-4">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span class="input-group-text" id="basic-addon2">@example.com</span>
                                </div>

                                <label for="basic-url" class="form-label">Your vanity URL</label>
                                <div class="input-group mb-5">
                                    <span class="input-group-text" id="basic-addon3">https://</span>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="example.com/users/" />
                                </div>

                                <div class="input-group mb-4">
                                    <span class="input-group-text">$</span>
                                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                    <span class="input-group-text">.00</span>
                                </div>

                                <div class="input-group">
                                    <span class="input-group-text">With textarea</span>
                                    <textarea class="form-control h-auto" aria-label="With textarea"></textarea>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Default --&gt;
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;basic-addon1&quot;&gt;@&lt;/span&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Username&quot; aria-label=&quot;Username&quot; aria-describedby=&quot;basic-addon1&quot; /&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Recipient's username&quot; aria-label=&quot;Recipient's username&quot; aria-describedby=&quot;basic-addon2&quot; /&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;basic-addon2&quot;&gt;@example.com&lt;/span&gt;
&lt;/div&gt;

&lt;label for=&quot;basic-url&quot; class=&quot;form-label&quot;&gt;Your vanity URL&lt;/label&gt;
&lt;div class=&quot;input-group mb-5&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;basic-addon3&quot;&gt;https://&lt;/span&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;basic-url&quot; aria-describedby=&quot;basic-addon3&quot; placeholder=&quot;example.com/users/&quot; /&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;$&lt;/span&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Amount (to the nearest dollar)&quot; /&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;.00&lt;/span&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group&quot;&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;With textarea&lt;/span&gt;
    &lt;textarea class=&quot;form-control h-auto&quot; aria-label=&quot;With textarea&quot;&gt;&lt;/textarea&gt;
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
                                        <h4>Simple Icon</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <p class="">Left</p>

                                <div class="input-group mb-4">
                                    <span class="input-group-text" id="basic-addon1">
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
                                    </span>
                                    <input type="text" class="form-control" placeholder="Notification" aria-label="notification" aria-describedby="basic-addon1" />
                                </div>

                                <p class="">Right</p>
                                <div class="input-group mb-4">
                                    <input type="text" class="form-control" placeholder="Notification" aria-label="notification" aria-describedby="basic-addon2" />
                                    <span class="input-group-text" id="basic-addon2">
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
                                    </span>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Simple Icons --&gt;
=========
  LEFT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;basic-addon1&quot;&gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/span&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Notification&quot; aria-label=&quot;notification&quot; aria-describedby=&quot;basic-addon1&quot; /&gt;
&lt;/div&gt;


=========
  RIGHT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Notification&quot; aria-label=&quot;notification&quot; aria-describedby=&quot;basic-addon2&quot; /&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;basic-addon2&quot;&gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/span&gt;
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
                                        <h4>Spinning Icon</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <p class="">Left</p>
                                <div class="input-group mb-4">
                                    <span class="input-group-text" id="basic-addon3">
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
                                            class="feather feather-loader spin"
                                        >
                                            <line x1="12" y1="2" x2="12" y2="6"></line>
                                            <line x1="12" y1="18" x2="12" y2="22"></line>
                                            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                                            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                                            <line x1="2" y1="12" x2="6" y2="12"></line>
                                            <line x1="18" y1="12" x2="22" y2="12"></line>
                                            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                                            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                                        </svg>
                                    </span>
                                    <input type="text" class="form-control" placeholder="Spinners" aria-label="spinners" aria-describedby="basic-addon3" />
                                </div>

                                <p class="">Right</p>
                                <div class="input-group mb-4">
                                    <input type="text" class="form-control" placeholder="Spinners" aria-label="spinners" aria-describedby="basic-addon4" />
                                    <span class="input-group-text" id="basic-addon4">
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
                                            class="feather feather-loader spin"
                                        >
                                            <line x1="12" y1="2" x2="12" y2="6"></line>
                                            <line x1="12" y1="18" x2="12" y2="22"></line>
                                            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                                            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                                            <line x1="2" y1="12" x2="6" y2="12"></line>
                                            <line x1="18" y1="12" x2="22" y2="12"></line>
                                            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                                            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                                        </svg>
                                    </span>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Spinning Icons --&gt;
=========
  LEFT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;basic-addon3&quot;&gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/span&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Spinners&quot; aria-label=&quot;spinners&quot; aria-describedby=&quot;basic-addon3&quot; /&gt;
&lt;/div&gt;

=========
  RIGHT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Spinners&quot; aria-label=&quot;spinners&quot; aria-describedby=&quot;basic-addon4&quot; /&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;basic-addon4&quot;&gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/span&gt;
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
                                        <h4>Dropdown Icon</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <p class="">Left</p>
                                <div class="input-group mb-4">
                                    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                        <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                        <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Dropdown" aria-label="dropdown" />
                                </div>

                                <p class="">Right</p>
                                <div class="input-group mb-4">
                                    <input type="text" class="form-control" placeholder="Dropdown" aria-label="dropdown" />
                                    <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                        <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                        <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Dropdown icon --&gt;
=========
  LEFT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;button class=&quot;btn btn-primary dropdown-toggle&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
    &lt;div class=&quot;dropdown-menu&quot;&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Action&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Another action&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Something else here&lt;/a&gt;
        &lt;div role=&quot;separator&quot; class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Separated link&lt;/a&gt;
    &lt;/div&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Dropdown&quot; aria-label=&quot;dropdown&quot; /&gt;
&lt;/div&gt;

=========
  RIGHT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Dropdown&quot; aria-label=&quot;dropdown&quot; /&gt;
    &lt;button class=&quot;btn btn-success dropdown-toggle&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
    &lt;div class=&quot;dropdown-menu&quot;&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Action&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Another action&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Something else here&lt;/a&gt;
        &lt;div role=&quot;separator&quot; class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Separated link&lt;/a&gt;
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
                                        <h4>Checkboxes</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <p class="">Left</p>
                                <div class="input-group mb-4">
                                    <div class="input-group-text">
                                        <div class="checkbox-danger custom-control custom-checkbox">
                                            <input type="checkbox" id="chk_danger" class="custom-control-input" checked />
                                            <label class="custom-control-label" for="chk_danger"> </label>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Checkbox" aria-label="checkbox" />
                                </div>

                                <p class="">Right</p>
                                <div class="input-group mb-4">
                                    <input type="text" class="form-control" placeholder="Checkbox" aria-label="checkbox" />
                                    <div class="input-group-text">
                                        <div class="checkbox-warning custom-control custom-checkbox">
                                            <input type="checkbox" id="chk_warning" class="custom-control-input" checked />
                                            <label class="custom-control-label" for="chk_warning"> </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Checkbox --&gt;
=========
  LEFT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;div class=&quot;input-group-text&quot;&gt;
        &lt;div class=&quot;checkbox-danger custom-control custom-checkbox&quot;&gt;
            &lt;input type=&quot;checkbox&quot; id=&quot;chk_danger&quot; class=&quot;custom-control-input&quot; checked /&gt;
            &lt;label class=&quot;custom-control-label&quot; for=&quot;chk_danger&quot;&gt; &lt;/label&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Checkbox&quot; aria-label=&quot;checkbox&quot; /&gt;
&lt;/div&gt;

=========
  RIGHT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Checkbox&quot; aria-label=&quot;checkbox&quot; /&gt;
    &lt;div class=&quot;input-group-text&quot;&gt;
        &lt;div class=&quot;checkbox-warning custom-control custom-checkbox&quot;&gt;
            &lt;input type=&quot;checkbox&quot; id=&quot;chk_warning&quot; class=&quot;custom-control-input&quot; checked /&gt;
            &lt;label class=&quot;custom-control-label&quot; for=&quot;chk_warning&quot;&gt; &lt;/label&gt;
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
                                        <h4>Radios</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <p class="">Left</p>
                                <div class="input-group mb-4">
                                    <div class="input-group-text">
                                        <div class="radio-primary custom-control custom-radio">
                                            <input type="radio" id="rdo_primary" class="custom-control-input" name="custom-radio-1" />
                                            <label class="custom-control-label" for="rdo_primary"> </label>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Radio" aria-label="radio" />
                                </div>

                                <p class="">Right</p>
                                <div class="input-group mb-4">
                                    <input type="text" class="form-control" placeholder="Radio" aria-label="radio" />
                                    <div class="input-group-text">
                                        <div class="radio-success custom-control custom-radio">
                                            <input type="radio" id="rdo_success" class="custom-control-input" name="custom-radio-1" />
                                            <label class="custom-control-label" for="rdo_success"> </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Radios --&gt;
=========
  LEFT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;div class=&quot;input-group-text&quot;&gt;
        &lt;div class=&quot;radio-primary custom-control custom-radio&quot;&gt;
            &lt;input type=&quot;radio&quot; id=&quot;rdo_primary&quot; class=&quot;custom-control-input&quot; name=&quot;custom-radio-1&quot; /&gt;
            &lt;label class=&quot;custom-control-label&quot; for=&quot;rdo_primary&quot;&gt; &lt;/label&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Radio&quot; aria-label=&quot;radio&quot; /&gt;
&lt;/div&gt;

=========
  RIGHT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Radio&quot; aria-label=&quot;radio&quot; /&gt;
    &lt;div class=&quot;input-group-text&quot;&gt;
        &lt;div class=&quot;radio-success custom-control custom-radio&quot;&gt;
            &lt;input type=&quot;radio&quot; id=&quot;rdo_success&quot; class=&quot;custom-control-input&quot; name=&quot;custom-radio-1&quot; /&gt;
            &lt;label class=&quot;custom-control-label&quot; for=&quot;rdo_success&quot;&gt; &lt;/label&gt;
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
                                        <h4>Switch</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <p class="">Left</p>
                                <div class="input-group mb-4">
                                    <div class="input-group-text">
                                        <label class="switch s-primary mb-0">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Switch" aria-label="switch" />
                                </div>

                                <p class="">Right</p>
                                <div class="input-group mb-4">
                                    <input type="text" class="form-control" placeholder="Switch" aria-label="switch" />
                                    <div class="input-group-text">
                                        <label class="switch s-danger mb-0">
                                            <input type="checkbox" checked="" />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code7')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Switch --&gt;
=========
  LEFT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;div class=&quot;input-group-text&quot;&gt;
        &lt;label class=&quot;switch s-primary mb-0&quot;&gt;
            &lt;input type=&quot;checkbox&quot; checked /&gt;
            &lt;span class=&quot;slider round&quot;&gt;&lt;/span&gt;
        &lt;/label&gt;
    &lt;/div&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Switch&quot; aria-label=&quot;switch&quot; /&gt;
&lt;/div&gt;

=========
  RIGHT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Switch&quot; aria-label=&quot;switch&quot; /&gt;
    &lt;div class=&quot;input-group-text&quot;&gt;
        &lt;label class=&quot;switch s-danger mb-0&quot;&gt;
            &lt;input type=&quot;checkbox&quot; checked=&quot;&quot; /&gt;
            &lt;span class=&quot;slider round&quot;&gt;&lt;/span&gt;
        &lt;/label&gt;
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

                <div class="row layout-spacing">
                    <div id="sizes" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">Sizing</h4>
                        </div>
                    </div>

                    <div class="col-lg-12 col-sm-12 col-12 layout-spacing">
                        <div class="row">
                            <div class="col-md-12 mb-4">
                                <div class="statbox panel box box-shadow">
                                    <div class="panel-heading">
                                        <div class="row">
                                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                                <h4>Sizing</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                        <div class="input-group input-group-sm mb-4">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
                                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                        </div>

                                        <div class="input-group mb-4">
                                            <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                                            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                                        </div>

                                        <div class="input-group input-group-lg mb-4">
                                            <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
                                            <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                                        </div>

                                        <div class="code-section-container show-code">
                                            <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></button>

                                            <div v-if="code_arr.includes('code8')" class="code-section text-start">
                                                <highlight>
                                                    <pre>
&lt;!-- Sizing --&gt;
&lt;div class=&quot;input-group input-group-sm mb-4&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;inputGroup-sizing-sm&quot;&gt;Small&lt;/span&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Small&quot; aria-describedby=&quot;inputGroup-sizing-sm&quot; /&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;inputGroup-sizing-default&quot;&gt;Default&lt;/span&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Default&quot; aria-describedby=&quot;inputGroup-sizing-default&quot; /&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group input-group-lg mb-4&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;inputGroup-sizing-lg&quot;&gt;Large&lt;/span&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Large&quot; aria-describedby=&quot;inputGroup-sizing-sm&quot; /&gt;
&lt;/div&gt;
</pre
                                                    >
                                                </highlight>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="multiple" class="col-lg-12">
                                <div class="seperator-header">
                                    <h4 class="">Multiple Fields</h4>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="statbox panel box box-shadow">
                                    <div class="panel-heading">
                                        <div class="row">
                                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                                <h4>Multiple inputs</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                        <div class="input-group mb-4">
                                            <span class="input-group-text">First and last name</span>
                                            <input type="text" class="form-control" />
                                            <input type="text" class="form-control" />
                                        </div>

                                        <div class="code-section-container show-code">
                                            <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></button>

                                            <div v-if="code_arr.includes('code9')" class="code-section text-start">
                                                <highlight>
                                                    <pre>
&lt;!-- Multiple inputs --&gt;
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;First and last name&lt;/span&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; /&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; /&gt;
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

                <div class="row">
                    <div class="col-lg-12 col-sm-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Multiple addons</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <p class="">Left</p>
                                <div class="input-group mb-4">
                                    <span class="input-group-text">$</span>
                                    <span class="input-group-text">0.00</span>
                                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                </div>

                                <p class="">Right</p>
                                <div class="input-group mb-4">
                                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                    <span class="input-group-text">$</span>
                                    <span class="input-group-text">0.00</span>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code10')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code10')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Multiple addons --&gt;
=========
  LEFT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;$&lt;/span&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;0.00&lt;/span&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Amount (to the nearest dollar)&quot; /&gt;
&lt;/div&gt;

=========
  RIGHT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Amount (to the nearest dollar)&quot; /&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;$&lt;/span&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;0.00&lt;/span&gt;
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
                    <div id="Input_group_action" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">Input Group with Action</h4>
                        </div>
                    </div>

                    <div class="col-lg-12 col-sm-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Buttons with dropdowns</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <p class="">Left</p>
                                <div class="input-group mb-4">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                        <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                        <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                                </div>

                                <p class="">Right</p>
                                <div class="input-group mb-4">
                                    <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                        <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                        <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code11')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code11')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Buttons with dropdowns --&gt;
=========
  LEFT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;button class=&quot;btn btn-secondary dropdown-toggle&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;Dropdown&lt;/button&gt;
    &lt;div class=&quot;dropdown-menu&quot;&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Action&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Another action&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Something else here&lt;/a&gt;
        &lt;div role=&quot;separator&quot; class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Separated link&lt;/a&gt;
    &lt;/div&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Text input with dropdown button&quot; /&gt;
&lt;/div&gt;

=========
  RIGHT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Text input with dropdown button&quot; /&gt;
    &lt;button class=&quot;btn btn-secondary dropdown-toggle&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;Dropdown&lt;/button&gt;
    &lt;div class=&quot;dropdown-menu&quot;&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Action&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Another action&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Something else here&lt;/a&gt;
        &lt;div role=&quot;separator&quot; class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Separated link&lt;/a&gt;
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

                    <div class="col-lg-12 col-sm-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Segmented buttons</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <p class="">Left</p>
                                <div class="input-group mb-4">
                                    <button type="button" class="btn btn-info">Action</button>
                                    <button type="button" class="btn btn-outline-info dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                        <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                        <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" />
                                </div>

                                <p class="">Right</p>
                                <div class="input-group mb-4">
                                    <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" />
                                    <button type="button" class="btn btn-outline-info">Action</button>
                                    <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                        <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                        <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code12')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code12')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Segmented buttons --&gt;
=========
  LEFT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-info&quot;&gt;Action&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-outline-info dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
    &lt;div class=&quot;dropdown-menu&quot;&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Action&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Another action&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Something else here&lt;/a&gt;
        &lt;div role=&quot;separator&quot; class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Separated link&lt;/a&gt;
    &lt;/div&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Text input with segmented dropdown button&quot; /&gt;
&lt;/div&gt;

=========
  RIGHT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Text input with segmented dropdown button&quot; /&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-info&quot;&gt;Action&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-outline-info dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
    &lt;div class=&quot;dropdown-menu dropdown-menu-end&quot;&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Action&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Another action&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Something else here&lt;/a&gt;
        &lt;div role=&quot;separator&quot; class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Separated link&lt;/a&gt;
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

                    <div class="col-lg-12 col-sm-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Button addons</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <p class="">Left</p>
                                <div class="input-group mb-4">
                                    <button class="btn btn-primary" type="button">Button</button>
                                    <input type="text" class="form-control" placeholder="" aria-label="" />
                                </div>

                                <p class="">Right</p>
                                <div class="input-group mb-4">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" />
                                    <button class="btn btn-primary" type="button">Button</button>
                                </div>

                                <p class="">Left</p>
                                <div class="input-group mb-4">
                                    <button class="btn btn-outline-primary" type="button">Button</button>
                                    <button class="btn btn-outline-primary" type="button">Button</button>
                                    <input type="text" class="form-control" placeholder="" aria-label="" />
                                </div>

                                <p class="">Right</p>
                                <div class="input-group mb-4">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" />
                                    <button class="btn btn-outline-primary" type="button">Button</button>
                                    <button class="btn btn-outline-primary" type="button">Button</button>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code13')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code13')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Button addons --&gt;
=========
  LEFT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;button class=&quot;btn btn-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;&quot; aria-label=&quot;&quot; /&gt;
&lt;/div&gt;

=========
  RIGHT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Recipient's username&quot; aria-label=&quot;Recipient's username&quot; /&gt;
    &lt;button class=&quot;btn btn-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
&lt;/div&gt;

=========
  LEFT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;button class=&quot;btn btn-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
    &lt;button class=&quot;btn btn-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;&quot; aria-label=&quot;&quot; /&gt;
&lt;/div&gt;


=========
  RIGHT
=========
&lt;div class=&quot;input-group mb-4&quot;&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Recipient's username&quot; aria-label=&quot;Recipient's username&quot; /&gt;
    &lt;button class=&quot;btn btn-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
    &lt;button class=&quot;btn btn-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
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
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Input Group" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
