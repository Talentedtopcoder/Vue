<template>
    <div class="container touchspin">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Touchspin</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#fbtBasic" class="nav-link">Basic</a>
                    <a href="#fbtSize" class="nav-link">Size</a>
                    <a href="#fbtInline" class="nav-link">Inline Buttons</a>
                    <a href="#fbtVerticalBtns" class="nav-link">Vertical Buttons</a>
                    <a href="#fbtChangeBtnClass" class="nav-link">Change Button Class</a>
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
                        <a target="_blank" href="https://www.npmjs.com/package/vue3-number-spinner" class="text-info"> https://www.npmjs.com/package/vue3-number-spinner </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy>
                <div class="row layout-top-spacing">
                    <div id="fbtBasic" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Button Spin</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="mb-4">
                                    <div class="input-group">
                                        <button
                                            type="button"
                                            class="btn btn-primary"
                                            @click="
                                                () => {
                                                    value1--;
                                                }
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                focusable="false"
                                                role="img"
                                                aria-label="dash"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                class="bi-dash b-icon bi"
                                            >
                                                <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path></g>
                                            </svg>
                                        </button>
                                        <number-spinner v-model="value1" :min="0" class="form-control" :vertical="true" :max="100" />

                                        <button
                                            type="button"
                                            class="btn btn-primary"
                                            @click="
                                                () => {
                                                    value1++;
                                                }
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                focusable="false"
                                                role="img"
                                                aria-label="plus"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                class="bi-plus b-icon bi"
                                            >
                                                <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Button spin --&gt;
&lt;div class=&quot;input-group&quot;&gt;
    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-primary&quot;
        @click=&quot;() =&gt; {value1--;}&quot;
    &gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
    &lt;number-spinner v-model=&quot;value1&quot; :min=&quot;0&quot; class=&quot;form-control&quot; :vertical=&quot;true&quot; :max=&quot;100&quot; /&gt;

    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-primary&quot;
        @click=&quot;() =&gt; {value1++;}&quot;
    &gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
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
                                        <h4>Spin button with step of 5</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="input-group">
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        @click="
                                            () => {
                                                value2 = value2 - 5;
                                            }
                                        "
                                    >
                                        <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="dash" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-dash b-icon bi">
                                            <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path></g>
                                        </svg>
                                    </button>
                                    <number-spinner v-model="value2" :min="0" class="form-control" :step="5" :max="50" />

                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        @click="
                                            () => {
                                                value2 = value2 + 5;
                                            }
                                        "
                                    >
                                        <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="plus" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
                                            <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)">
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Spin button with step of 5 --&gt;
&lt;div class=&quot;input-group&quot;&gt;
    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-primary&quot;
        @click=&quot;() =&gt; {value2 = value2 - 5;}&quot;
    &gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
    &lt;number-spinner v-model=&quot;value2&quot; :min=&quot;0&quot; class=&quot;form-control&quot; :step=&quot;5&quot; :max=&quot;50&quot; /&gt;

    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-primary&quot;
        @click=&quot;() =&gt; {value2 = value2 + 5;}&quot;
    &gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
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
                                        <h4>Wrapping value spin button</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="input-group">
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        @click="
                                            () => {
                                                value3 = value3 - 1;
                                            }
                                        "
                                    >
                                        <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="dash" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-dash b-icon bi">
                                            <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path></g>
                                        </svg>
                                    </button>
                                    <number-spinner v-model="value3" :min="0" class="form-control" :vertical="true" :circular="true" :max="25" />

                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        @click="
                                            () => {
                                                value3 = value3 + 1;
                                            }
                                        "
                                    >
                                        <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="plus" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
                                            <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)">
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Wrapping value spin button --&gt;
&lt;div class=&quot;input-group&quot;&gt;
    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-primary&quot;
        @click=&quot;() =&gt; {value3--;}&quot;
    &gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
    &lt;number-spinner v-model=&quot;value3&quot; :min=&quot;0&quot; class=&quot;form-control&quot; :vertical=&quot;true&quot; :circular=&quot;true&quot; :max=&quot;25&quot; /&gt;

    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-primary&quot;
        @click=&quot;() =&gt; {value3++;}&quot;
    &gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
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
                    <div id="fbtSize" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Spin button with size</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="mb-4">
                                    <h6>Small size</h6>
                                    <div class="input-group input-group-sm">
                                        <button
                                            type="button"
                                            class="btn btn-primary btn-sm"
                                            @click="
                                                () => {
                                                    value4--;
                                                }
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                focusable="false"
                                                role="img"
                                                aria-label="dash"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                class="bi-dash b-icon bi"
                                            >
                                                <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path></g>
                                            </svg>
                                        </button>
                                        <number-spinner v-model="value4" :min="0" class="form-control form-control-sm touchspin" :vertical="true" :max="100" />

                                        <button
                                            type="button"
                                            class="btn btn-primary btn-sm"
                                            @click="
                                                () => {
                                                    value4++;
                                                }
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                focusable="false"
                                                role="img"
                                                aria-label="plus"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                class="bi-plus b-icon bi"
                                            >
                                                <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <h6>Default size</h6>
                                    <div class="input-group">
                                        <button
                                            type="button"
                                            class="btn btn-primary"
                                            @click="
                                                () => {
                                                    value5--;
                                                }
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                focusable="false"
                                                role="img"
                                                aria-label="dash"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                class="bi-dash b-icon bi"
                                            >
                                                <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path></g>
                                            </svg>
                                        </button>
                                        <number-spinner v-model="value5" :min="0" class="form-control" :vertical="true" :max="100" />

                                        <button
                                            type="button"
                                            class="btn btn-primary"
                                            @click="
                                                () => {
                                                    value5++;
                                                }
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                focusable="false"
                                                role="img"
                                                aria-label="plus"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                class="bi-plus b-icon bi"
                                            >
                                                <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <h6>Large size</h6>
                                    <div class="input-group input-group-lg">
                                        <button
                                            type="button"
                                            class="btn btn-primary btn-lg"
                                            @click="
                                                () => {
                                                    value6--;
                                                }
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                focusable="false"
                                                role="img"
                                                aria-label="dash"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                class="bi-dash b-icon bi"
                                            >
                                                <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path></g>
                                            </svg>
                                        </button>
                                        <number-spinner v-model="value6" :min="0" class="form-control form-control-lg touchspin" :vertical="true" :max="100" />

                                        <button
                                            type="button"
                                            class="btn btn-primary btn-lg"
                                            @click="
                                                () => {
                                                    value6++;
                                                }
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                focusable="false"
                                                role="img"
                                                aria-label="plus"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                class="bi-plus b-icon bi"
                                            >
                                                <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Spin button with size --&gt;
===Small size===
&lt;div class=&quot;input-group input-group-sm&quot;&gt;
    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-primary btn-sm&quot;
        @click=&quot;() =&gt; {value4--;}&quot;
    &gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
    &lt;number-spinner v-model=&quot;value4&quot; :min=&quot;0&quot; class=&quot;form-control form-control-sm touchspin&quot; :vertical=&quot;true&quot; :max=&quot;100&quot; /&gt;

    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-primary btn-sm&quot;
        @click=&quot;() =&gt; {value4++;}&quot;
    &gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
&lt;/div&gt;

===Default size===
&lt;div class=&quot;input-group&quot;&gt;
    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-primary&quot;
        @click=&quot;() =&gt; {value5--;}&quot;
    &gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
    &lt;number-spinner v-model=&quot;value5&quot; :min=&quot;0&quot; class=&quot;form-control touchspin&quot; :vertical=&quot;true&quot; :max=&quot;100&quot; /&gt;

    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-primary&quot;
        @click=&quot;() =&gt; {value5++;}&quot;
    &gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
&lt;/div&gt;

===Large size===
&lt;div class=&quot;input-group input-group-lg&quot;&gt;
    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-primary btn-lg&quot;
        @click=&quot;() =&gt; {value6--;}&quot;
    &gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
    &lt;number-spinner v-model=&quot;value6&quot; :min=&quot;0&quot; class=&quot;form-control form-control-lg touchspin&quot; :vertical=&quot;true&quot; :max=&quot;100&quot; /&gt;

    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-primary btn-lg&quot;
        @click=&quot;() =&gt; {value6++;}&quot;
    &gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
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
                    <div id="fbtInline" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Inline spin button</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="mb-4">
                                    <div class="input-group" style="width: fit-content">
                                        <button
                                            type="button"
                                            class="btn btn-primary"
                                            @click="
                                                () => {
                                                    value7--;
                                                }
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                focusable="false"
                                                role="img"
                                                aria-label="dash"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                class="bi-dash b-icon bi"
                                            >
                                                <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path></g>
                                            </svg>
                                        </button>
                                        <number-spinner v-model="value7" :min="0" class="form-control" style="max-width: 75px" :vertical="true" :max="100" />

                                        <button
                                            type="button"
                                            class="btn btn-primary"
                                            @click="
                                                () => {
                                                    value7++;
                                                }
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                focusable="false"
                                                role="img"
                                                aria-label="plus"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                class="bi-plus b-icon bi"
                                            >
                                                <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>
                                    <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Inline Spin button --&gt;
&lt;div class=&quot;input-group&quot; style=&quot;width: fit-content&quot;&gt;
    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-primary&quot;
        @click=&quot;() =&gt; {value7--;}&quot;
    &gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;

    &lt;number-spinner v-model=&quot;value7&quot; :min=&quot;0&quot; class=&quot;form-control&quot; style=&quot;max-width: 75px&quot; :vertical=&quot;true&quot; :max=&quot;100&quot; /&gt;

    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-primary&quot;
        @click=&quot;() =&gt; {value7++;}&quot;
    &gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
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
                    <div id="fbtVerticalBtns" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Vertical spin button</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="mb-4 vertical-spin">
                                    <div class="input-group">
                                        <button
                                            type="button"
                                            class="btn btn-primary top-minus-btn"
                                            @click="
                                                () => {
                                                    value8--;
                                                }
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                focusable="false"
                                                role="img"
                                                aria-label="dash"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                class="bi-dash b-icon bi"
                                            >
                                                <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path></g>
                                            </svg>
                                        </button>
                                        <number-spinner v-model="value8" :min="0" class="form-control" :vertical="true" :max="100" />

                                        <button
                                            type="button"
                                            class="btn btn-primary bottom-plus-btn"
                                            @click="
                                                () => {
                                                    value8++;
                                                }
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                focusable="false"
                                                role="img"
                                                aria-label="plus"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                class="bi-plus b-icon bi"
                                            >
                                                <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Vertical Spin button --&gt;
&lt;div class=&quot;mb-4 vertical-spin&quot;&gt;
    &lt;div class=&quot;input-group&quot;&gt;
        &lt;button
            type=&quot;button&quot;
            class=&quot;btn btn-primary top-minus-btn&quot;
            @click=&quot;() =&gt; {value8--;}&quot;
        &gt;
            &lt;svg&gt; ... &lt;/svg&gt;
        &lt;/button&gt;
        &lt;number-spinner v-model=&quot;value8&quot; :min=&quot;0&quot; class=&quot;form-control&quot; :vertical=&quot;true&quot; :max=&quot;100&quot; /&gt;

        &lt;button
            type=&quot;button&quot;
            class=&quot;btn btn-primary bottom-plus-btn&quot;
            @click=&quot;() =&gt; {value8++;}&quot;
        &gt;
            &lt;svg&gt; ... &lt;/svg&gt;
        &lt;/button&gt;
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
                    <div class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Text with spin button</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="mb-4">
                                    <div class="input-group">
                                        <button
                                            type="button"
                                            class="btn btn-primary"
                                            @click="
                                                () => {
                                                    value9--;
                                                }
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                focusable="false"
                                                role="img"
                                                aria-label="dash"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                class="bi-dash b-icon bi"
                                            >
                                                <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path></g>
                                            </svg>
                                        </button>
                                        <number-spinner v-model="value9" :min="0" class="form-control" :vertical="true" :format="dayFormatter" :circular="true" :max="6" />

                                        <button
                                            type="button"
                                            class="btn btn-primary"
                                            @click="
                                                () => {
                                                    value9++;
                                                }
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                focusable="false"
                                                role="img"
                                                aria-label="plus"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                class="bi-plus b-icon bi"
                                            >
                                                <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code7')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Text with spin button --&gt;
&lt;div class=&quot;input-group&quot;&gt;
    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-primary&quot;
        @click=&quot;() =&gt; {value9--;}&quot;
    &gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;

    &lt;number-spinner v-model=&quot;value9&quot; :min=&quot;0&quot; class=&quot;form-control&quot; :vertical=&quot;true&quot; :format=&quot;dayFormatter&quot; :circular=&quot;true&quot; :max=&quot;6&quot; /&gt;

    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-primary&quot;
        @click=&quot;() =&gt; {value9++;}&quot;
    &gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
&lt;/div&gt;

&lt;!-- JS --&gt;

const days = ref(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);

const dayFormatter = (value) =&gt; {
    return days.value[value];
};
</pre
                                            >
                                        </highlight>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="fbtChangeBtnClass" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Change button class</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body spin-color">
                                <div class="mb-4">
                                    <div class="input-group">
                                        <button
                                            type="button"
                                            class="btn btn-warning"
                                            @click="
                                                () => {
                                                    value10--;
                                                }
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                focusable="false"
                                                role="img"
                                                aria-label="dash"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                class="bi-dash b-icon bi"
                                            >
                                                <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path></g>
                                            </svg>
                                        </button>
                                        <number-spinner v-model="value10" :min="0" class="form-control" :vertical="true" :circular="true" :max="25" />

                                        <button
                                            type="button"
                                            class="btn btn-danger"
                                            @click="
                                                () => {
                                                    value10++;
                                                }
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                focusable="false"
                                                role="img"
                                                aria-label="plus"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                class="bi-plus b-icon bi"
                                            >
                                                <g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code8')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Change button class --&gt;
&lt;div class=&quot;input-group&quot;&gt;
    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-warning&quot;
        @click=&quot;() =&gt; {value10--;}&quot;
    &gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;

    &lt;number-spinner v-model=&quot;value10&quot; :min=&quot;0&quot; class=&quot;form-control&quot; :vertical=&quot;true&quot; :circular=&quot;true&quot; :max=&quot;25&quot; /&gt;

    &lt;button
        type=&quot;button&quot;
        class=&quot;btn btn-danger&quot;
        @click=&quot;() =&gt; {value10++;}&quot;
    &gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/button&gt;
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
<style>
    .touchspin .form-control:disabled,
    .touchspin .form-control[readonly] {
        background: #fff !important;
        text-align: center;
        color: #3b3f5c;
        cursor: text !important;
    }
    .dark .touchspin .form-control:disabled,
    .dark .touchspin .form-control[readonly] {
        border: 1px solid #1b2e4b;
        color: #009688 !important;
        background: #1b2e4b !important;
    }

    .touchspin .btn {
        padding: 6px 12px;
    }

    .touchspin .vertical-spin {
        width: fit-content;
    }

    .touchspin .vertical-spin .input-group {
        flex-direction: column;
    }

    .touchspin .vertical-spin .btn {
        padding: 6px 10px;
        max-width: 45px;
    }
    .touchspin .vertical-spin .btn.top-minus-btn {
        border-top-right-radius: 4px !important;
        border-bottom-left-radius: 0px;
    }
    .touchspin .vertical-spin .btn.bottom-plus-btn {
        border-top-right-radius: 0px;
        border-bottom-left-radius: 4px !important;
    }

    .touchspin .vertical-spin .input-group .form-control {
        width: 45px;
        padding: 8px 0;
    }
</style>

<script setup>
    import { ref } from "vue";
    import "../../assets/sass/scrollspyNav.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { NumberSpinner } from "vue3-number-spinner";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Touchspin" });

    const code_arr = ref([]);
    const value = ref(0);
    const value1 = ref(55);
    const value2 = ref(0);
    const value3 = ref(0);
    const value4 = ref(0);
    const value5 = ref(0);
    const value6 = ref(0);
    const value7 = ref(0);
    const value8 = ref(0);
    const value9 = ref(0);
    const value10 = ref(0);
    const days = ref(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };

    const dayFormatter = (value) => {
        return days.value[value];
    };
</script>
