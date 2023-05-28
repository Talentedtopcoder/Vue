<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Date and Range Picker</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#date_time_picker" class="nav-link">Date Time Picker</a>
                    <a href="#js_range_slider" class="nav-link">JS Range Slider</a>
                    <a href="#noUi_sliders" class="nav-link">noUi Sliders</a>
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
                        <a target="_blank" href="https://www.npmjs.com/package/vue-flatpickr-component" class="text-info"> https://www.npmjs.com/package/vue-flatpickr-component </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy>
                <div class="row">
                    <div id="date_time_picker" class="col-lg-12 layout-top-spacing">
                        <div class="seperator-header">
                            <h4 class="">Date and Time Picker</h4>
                        </div>
                    </div>

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Basic</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="form-group mb-0">
                                    <flat-pickr v-model="date1" class="form-control flatpickr active"></flat-pickr>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Basic --&gt;
&lt;flat-pickr v-model=&quot;date1&quot; class=&quot;form-control flatpickr active&quot;&gt;&lt;/flat-pickr&gt;
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
                                        <h4>Date Time</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <p>Use <code>{enableTime: true, dateFormat: 'Y-m-d H:i'}</code> option to enable time support</p>
                                <div class="form-group mb-0">
                                    <flat-pickr v-model="date2" :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }" class="form-control flatpickr active"></flat-pickr>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Date Time --&gt;
&lt;flat-pickr v-model=&quot;date2&quot; :config=&quot;{enableTime: true, dateFormat: 'Y-m-d H:i'}&quot; class=&quot;form-control flatpickr active&quot;&gt;&lt;/flat-pickr&gt;
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
                                        <h4>Range Calendar</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <p>Use <code>{mode: 'range'}</code> select the date with range.</p>

                                <div class="form-group mb-0">
                                    <flat-pickr v-model="date3" :config="{ mode: 'range' }" class="form-control flatpickr active"></flat-pickr>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Range Calendar --&gt;
&lt;flat-pickr v-model=&quot;date3&quot; :config=&quot;{mode: 'range'}&quot; class=&quot;form-control flatpickr active&quot;&gt;&lt;/flat-pickr&gt;
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
                                        <h4>Preloading Time</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <p>Use <code>{noCalendar: true, enableTime: true, dateFormat: 'H:i'}</code> with Date Time options to disable calendar and show time picker only.</p>
                                <div class="form-group mb-0">
                                    <flat-pickr v-model="date4" :config="{ noCalendar: true, enableTime: true, dateFormat: 'H:i' }" class="form-control flatpickr active"></flat-pickr>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Preloading Time --&gt;
&lt;flat-pickr v-model=&quot;date4&quot; :config=&quot;{noCalendar: true, enableTime: true, dateFormat: 'H:i'}&quot; class=&quot;form-control flatpickr active&quot;&gt;&lt;/flat-pickr&gt;
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
                    <div id="js_range_slider" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">Javascript Range Slider</h4>
                        </div>
                    </div>

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Postion : Top-Left</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="custom-progress progress-up" style="width: 100%">
                                    <div class="range-count">
                                        <span class="range-count-number">{{ slider1 }}</span> <span class="range-count-unit">%</span>
                                    </div>
                                    <input type="range" v-model="slider1" :min="0" :max="100" class="progress-range-counter form-range" />
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Top-Left --&gt;
&lt;div class=&quot;custom-progress progress-up&quot; style=&quot;width: 100%&quot;&gt;
    &lt;div class=&quot;range-count&quot;&gt;
        &lt;span class=&quot;range-count-number&quot;&gt;{{ slider1 }}&lt;/span&gt; &lt;span class=&quot;range-count-unit&quot;&gt;%&lt;/span&gt;
    &lt;/div&gt;
    &lt;input type=&quot;range&quot; v-model=&quot;slider1&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;progress-range-counter form-range&quot; /&gt;
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
                                        <h4>Postion : Top-Right</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="custom-progress top-right progress-up" style="width: 100%">
                                    <div class="range-count">
                                        <span class="range-count-number">{{ slider2 }}</span> <span class="range-count-unit">%</span>
                                    </div>
                                    <input type="range" v-model="slider2" :min="0" :max="100" class="progress-range-counter form-range" />
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Top-Right --&gt;
&lt;div class=&quot;custom-progress top-right progress-up&quot; style=&quot;width: 100%&quot;&gt;
   &lt;div class=&quot;range-count&quot;&gt;
        &lt;span class=&quot;range-count-number&quot;&gt;{{ slider2 }}&lt;/span&gt; &lt;span class=&quot;range-count-unit&quot;&gt;%&lt;/span&gt;
    &lt;/div&gt;
    &lt;input type=&quot;range&quot; v-model=&quot;slider2&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;progress-range-counter form-range&quot; /&gt;
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
                                        <h4>Postion : Bottom-Left</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="custom-progress progress-down" style="width: 100%">
                                    <input type="range" v-model="slider3" :min="0" :max="100" class="progress-range-counter form-range" />
                                    <div class="range-count">
                                        <span class="range-count-number">{{ slider3 }}</span> <span class="range-count-unit">%</span>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code7')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Bottom-Left --&gt;
&lt;div class=&quot;custom-progress progress-down&quot; style=&quot;width: 100%&quot;&gt;
    &lt;input type=&quot;range&quot; v-model=&quot;slider3&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;progress-range-counter form-range&quot; /&gt;
   &lt;div class=&quot;range-count&quot;&gt;
        &lt;span class=&quot;range-count-number&quot;&gt;{{ slider3 }}&lt;/span&gt; &lt;span class=&quot;range-count-unit&quot;&gt;%&lt;/span&gt;
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
                                        <h4>Postion : Bottom-Right</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="custom-progress bottom-right progress-down" style="width: 100%">
                                    <input type="range" v-model="slider4" :min="0" :max="100" class="progress-range-counter form-range" />
                                    <div class="range-count">
                                        <span class="range-count-number">{{ slider4 }}</span> <span class="range-count-unit">%</span>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code8')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Bottom-Right --&gt;
&lt;div class=&quot;custom-progress bottom-right progress-down&quot; style=&quot;width: 100%&quot;&gt;
    &lt;input type=&quot;range&quot; v-model=&quot;slider4&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;progress-range-counter form-range&quot; /&gt;
   &lt;div class=&quot;range-count&quot;&gt;
        &lt;span class=&quot;range-count-number&quot;&gt;{{ slider4 }}&lt;/span&gt; &lt;span class=&quot;range-count-unit&quot;&gt;%&lt;/span&gt;
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

                <div class="row my-4">
                    <div class="col-12">
                        <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg>
                            Documentation:
                            <a target="_blank" href="https://www.npmjs.com/package/vue3-nouislider" class="text-info"> https://www.npmjs.com/package/vue3-nouislider </a>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div id="noUi_sliders" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">noUI Slider</h4>
                        </div>
                    </div>

                    <div class="col-lg-12 layout-spacing">
                        <div class="row">
                            <div class="col-lg-12 mb-4">
                                <div class="statbox panel box box-shadow">
                                    <div class="panel-heading">
                                        <div class="row">
                                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                                <h4 class="mb-4">Using HTML5 input elements</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-body align-center">
                                        <div class="container">
                                            <vue-nouislider
                                                :values="[noui_min1, noui_max1]"
                                                :config="{
                                                    range: { min: -20, max: 40 },
                                                    connect: true,
                                                    tooltips: true,
                                                }"
                                                :start="[noui_min1, noui_max1]"
                                                @update:values="noui_update1"
                                            ></vue-nouislider>
                                            <br />
                                            <div class="row mt-4 mb-4">
                                                <div class="col-lg-6 mb-3">
                                                    <select v-model="noui_min1" class="form-select w-100" @change="noui_change1(noui_min1, noui_max1)">
                                                        <option v-for="(i, index) in 61" :key="i" :value="index - 20">{{ index - 20 }}</option>
                                                    </select>
                                                </div>
                                                <div class="col-lg-6">
                                                    <input type="number" v-model="noui_max1" class="form-control" :min="-20" :max="40" step="1" @change="noui_change1(noui_min1, noui_max1)" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="code-section-container show-code">
                                            <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></button>

                                            <div v-if="code_arr.includes('code9')" class="code-section text-start">
                                                <highlight>
                                                    <pre>
&lt;!-- HTML5 input elements --&gt;
&lt;div class=&quot;container&quot;&gt;
    &lt;vue-nouislider
        :values=&quot;[noui_min1, noui_max1]&quot;
        :config=&quot;{
            range: { min: -20, max: 40 },
            connect: true,
            tooltips: true,
        }&quot;
        :start=&quot;[noui_min1, noui_max1]&quot;
        @update:values=&quot;noui_update1&quot;
    &gt;&lt;/vue-nouislider&gt;
    &lt;br /&gt;
    &lt;div class=&quot;row mt-4 mb-4&quot;&gt;
        &lt;div class=&quot;col-lg-6 mb-3&quot;&gt;
            &lt;select v-model=&quot;noui_min1&quot; class=&quot;form-select w-100&quot; @change=&quot;noui_change1(noui_min1, noui_max1)&quot;&gt;
                &lt;option v-for=&quot;(i, index) in 61&quot; :key=&quot;i&quot; :value=&quot;index - 20&quot;&gt;{{ index - 20 }}&lt;/option&gt;
            &lt;/select&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-lg-6&quot;&gt;
            &lt;input type=&quot;number&quot; v-model=&quot;noui_max1&quot; class=&quot;form-control&quot; :min=&quot;-20&quot; :max=&quot;40&quot; step=&quot;1&quot; @change=&quot;noui_change1(noui_min1, noui_max1)&quot; /&gt;
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

                            <div class="col-lg-12">
                                <div class="statbox panel box box-shadow">
                                    <div class="panel-heading">
                                        <div class="row">
                                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                                <h4 class="mb-4">Non linear slider</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-body align-center">
                                        <div class="container">
                                            <vue-nouislider
                                                :values="[noui_min2, noui_max2]"
                                                :config="{
                                                    range: { min: [0], '10%': [500, 500], '50%': [4000, 1000], max: [10000] },
                                                    connect: true,
                                                    tooltips: true,
                                                    behaviour: 'tap',
                                                }"
                                                :start="[noui_min2, noui_max2]"
                                                @update:values="noui_update2"
                                            ></vue-nouislider>

                                            <br />
                                            <div class="row mt-4 mb-4">
                                                <div class="col-lg-6">
                                                    <span class="example-val"
                                                        >{{ noui_min2 }} <span class="precentage-val">{{ noui_min2_perc }}%</span></span
                                                    >
                                                </div>
                                                <div class="col-lg-6 text-end">
                                                    <span class="example-val"
                                                        >{{ noui_max2 }} <span class="precentage-val">{{ noui_max2_perc }}%</span></span
                                                    >
                                                </div>
                                            </div>
                                        </div>

                                        <div class="code-section-container show-code">
                                            <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code10')"><span>Code</span></button>
                                            <div v-if="code_arr.includes('code10')" class="code-section text-start">
                                                <highlight>
                                                    <pre>
&lt;!-- Non linear slider --&gt;
&lt;div class=&quot;container&quot;&gt;
    &lt;vue-nouislider
        :values=&quot;[noui_min2, noui_max2]&quot;
        :config=&quot;{
            range: { min: [0], '10%': [500, 500], '50%': [4000, 1000], max: [10000] },
            connect: true,
            tooltips: true,
            behaviour: 'tap',
        }&quot;
        :start=&quot;[noui_min2, noui_max2]&quot;
        @update:values=&quot;noui_update2&quot;
    &gt;&lt;/vue-nouislider&gt;

    &lt;br /&gt;
    &lt;div class=&quot;row mt-4 mb-4&quot;&gt;
        &lt;div class=&quot;col-lg-6&quot;&gt;
            &lt;span class=&quot;example-val&quot;
                &gt;{{ noui_min2 }} &lt;span class=&quot;precentage-val&quot;&gt;{{ noui_min2_perc }}%&lt;/span&gt;&lt;/span
            &gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-lg-6 text-end&quot;&gt;
            &lt;span class=&quot;example-val&quot;
                &gt;{{ noui_max2 }} &lt;span class=&quot;precentage-val&quot;&gt;{{ noui_max2_perc }}%&lt;/span&gt;&lt;/span
            &gt;
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

                    <div class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4 class="mb-4">Locking sliders together</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body align-center">
                                <div class="container">
                                    <div class="row mb-4">
                                        <div class="col-lg-12 mb-5">
                                            <vue-nouislider
                                                :values="[noui_min3]"
                                                :config="{
                                                    range: { min: 50, max: 100 },
                                                    animate: false,
                                                    tooltips: true,
                                                }"
                                                :start="[noui_min3]"
                                                @update:values="noui_update3"
                                            ></vue-nouislider>
                                            <span class="example-val mt-4 d-inline-block">{{ noui_min3 }}</span>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="row mb-0">
                                        <div class="col-lg-12 mb-5">
                                            <vue-nouislider
                                                :values="[noui_min4]"
                                                :config="{
                                                    range: { min: 50, max: 100 },
                                                    animate: false,
                                                    tooltips: true,
                                                }"
                                                :start="[noui_min4]"
                                                @update:values="noui_update4"
                                            ></vue-nouislider>

                                            <span class="example-val mt-4 d-inline-block">{{ noui_min4 }}</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <button
                                                type="button"
                                                class="btn btn-primary my-4 float-end"
                                                @click="
                                                    is_lock = !is_lock;
                                                    set_locked_values();
                                                "
                                            >
                                                {{ is_lock ? "unlock" : "lock" }}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code11')"><span>Code</span></button>
                                    <div v-if="code_arr.includes('code11')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Locking sliders together --&gt;
&lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;row mb-4&quot;&gt;
        &lt;div class=&quot;col-lg-12 mb-5&quot;&gt;
            &lt;vue-nouislider
                :values=&quot;[noui_min3]&quot;
                :config=&quot;{
                    range: { min: 50, max: 100 },
                    animate: false,
                    tooltips: true,
                }&quot;
                :start=&quot;[noui_min3]&quot;
                @update:values=&quot;noui_update3&quot;
            &gt;&lt;/vue-nouislider&gt;
            &lt;span class=&quot;example-val mt-4 d-inline-block&quot;&gt;{{ noui_min3 }}&lt;/span&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;br /&gt;
    &lt;div class=&quot;row mb-0&quot;&gt;
        &lt;div class=&quot;col-lg-12 mb-5&quot;&gt;
            &lt;vue-nouislider
                :values=&quot;[noui_min4]&quot;
                :config=&quot;{
                    range: { min: 50, max: 100 },
                    animate: false,
                    tooltips: true,
                }&quot;
                :start=&quot;[noui_min4]&quot;
                @update:values=&quot;noui_update4&quot;
            &gt;&lt;/vue-nouislider&gt;

            &lt;span class=&quot;example-val mt-4 d-inline-block&quot;&gt;{{ noui_min4 }}&lt;/span&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-lg-12&quot;&gt;
            &lt;button
                type=&quot;button&quot;
                class=&quot;btn btn-primary my-4 float-end&quot;
                @click=&quot;
                    is_lock = !is_lock;
                    set_locked_values();
                &quot;
            &gt;
                {{ is_lock ? "unlock" : "lock" }}
            &lt;/button&gt;
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
    import { onMounted, ref } from "vue";

    import "../../assets/sass/scrollspyNav.scss";
    import highlight from "../../components/plugins/highlight.vue";

    //normal range slider
    import "../../assets/sass/forms/bootstrap-slider.css";

    //flatpickr
    import flatPickr from "vue-flatpickr-component";
    import "flatpickr/dist/flatpickr.css";
    import "../../assets/sass/forms/custom-flatpickr.css";

    // nouislider
    import "../../assets/sass/forms/custom-nouiSlider.css";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Date & Range Picker" });

    const code_arr = ref([]);
    const date1 = ref("2020-09-04");
    const date2 = ref("2020-09-19 12:00");
    const date3 = ref("");
    const date4 = ref("13:45");
    const slider1 = ref(0);
    const slider2 = ref(0);
    const slider3 = ref(0);
    const slider4 = ref(0);
    const noui_min1 = ref(10);
    const noui_max1 = ref(30);
    const noui_min2 = ref(500);
    const noui_max2 = ref(4000);
    const noui_min2_perc = ref(0);
    const noui_max2_perc = ref(0);
    const noui_min3 = ref(60);
    const noui_min4 = ref(80);
    const is_lock = ref(false);
    const locked_values = ref([60, 80]);

    onMounted(() => {
        noui_change1(noui_min1.value, noui_max1.value);
    });

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };

    const noui_change1 = (min, max) => {
        noui_min1.value = parseInt(min);
        noui_max1.value = parseInt(max);
    };
    const noui_update1 = (data) => {
        if (data) {
            noui_min1.value = Math.round(parseFloat(data[0]));
            noui_max1.value = parseFloat(data[1]);
        }
    };
    const noui_update2 = (data) => {
        if (data) {
            noui_min2.value = data[0];
            noui_max2.value = data[1];

            noui_min2_perc.value = parseFloat((noui_min2.value * 0.01).toFixed(2));
            noui_max2_perc.value = parseFloat((noui_max2.value * 0.01).toFixed(2));
        }
    };
    const noui_update3 = (data) => {
        if (data) {
            noui_min3.value = parseFloat(data[0]);
            noui_slide3();
        }
    };
    const noui_update4 = (data) => {
        if (data) {
            noui_min4.value = parseFloat(data[0]);
        }
    };
    const set_locked_values = () => {
        locked_values.value = [Number(noui_min3.value), Number(noui_min4.value)];
    };
    const noui_slide3 = () => {
        if (is_lock.value) {
            let val = JSON.parse(JSON.stringify(noui_min3.value));
            val -= locked_values.value[0] - locked_values.value[1];
            noui_min4.value = parseFloat(val.toFixed(2));
        }
    };
</script>
