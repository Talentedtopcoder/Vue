<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Basic</span></li>
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
                    <a href="#form_grid_layouts" class="nav-link">Form Grid Layouts</a>
                    <a href="#helper_text" class="nav-link">Helper Text</a>
                    <a href="#form_sizing" class="nav-link">Sizing</a>
                    <a href="#readonly_input" class="nav-link">Readonly Input</a>
                    <a href="#html_custom_file_upload" class="nav-link">HTML Custom File Upload</a>
                    <a href="#disabled_form" class="nav-link">Disabled Fields</a>
                    <a href="#custom_bs_forms" class="nav-link">Custom Bootstrap Forms</a>
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
                        <a target="_blank" href="https://getbootstrap.com/docs/5.0/forms" class="text-info"> https://getbootstrap.com/docs/5.0/forms </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy>
                <div class="row layout-top-spacing">
                    <div id="basic" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Input Text</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-lg-6 col-12 mx-auto">
                                        <form>
                                            <div class="form-group">
                                                <p>Use input <code>type="text"</code>.</p>
                                                <input type="text" class="form-control" placeholder="Some Text..." required />
                                                <button type="submit" class="btn btn-primary mt-4">Submit</button>
                                            </div>
                                        </form>
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
                                        <h4>Input Password</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-lg-6 col-12 mx-auto">
                                        <form>
                                            <div class="form-group">
                                                <p>Use input <code>type="password"</code>.</p>
                                                <input type="password" class="form-control" placeholder="Password" required />
                                                <button type="submit" class="btn btn-primary mt-4">Submit</button>
                                            </div>
                                        </form>
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
                                        <h4>Input Email</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-lg-6 col-12 mx-auto">
                                        <form>
                                            <div>
                                                <p>Use input <code>type="email"</code>.</p>
                                                <input type="email" class="form-control" placeholder="email@mail.com" required />
                                                <button type="submit" class="btn btn-primary mt-4">Submit</button>
                                            </div>
                                        </form>
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
                                        <h4>Input Url</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-lg-6 col-12 mx-auto">
                                        <form>
                                            <div>
                                                <p>Use input <code>type="url"</code>.</p>
                                                <input type="url" class="form-control" placeholder="https://dummyurl.com" required />
                                                <button type="submit" class="btn btn-primary mt-4">Submit</button>
                                            </div>
                                        </form>
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
                                        <h4>Input Telephone</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-lg-6 col-12 mx-auto">
                                        <form>
                                            <div>
                                                <p>Use input <code>type="tel"</code>.</p>
                                                <input type="tel" class="form-control" placeholder="6-(666)-111-7777" required />
                                                <button type="submit" class="btn btn-primary mt-4">Submit</button>
                                            </div>
                                        </form>
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
                                        <h4>Input Search</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-lg-6 col-12 mx-auto">
                                        <form>
                                            <div>
                                                <p>Use input <code>type="search"</code>.</p>
                                                <input type="search" class="form-control" placeholder="Search..." required />
                                                <button type="submit" class="btn btn-primary mt-4">Submit</button>
                                            </div>
                                        </form>
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
                                        <h4>Input Range</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-lg-6 col-12 mx-auto">
                                        <form>
                                            <div>
                                                <p>Use input <code>type="range"</code>.</p>
                                                <input type="range" class="form-range" required />
                                            </div>
                                        </form>
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
                                        <h4>Input With Label</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-lg-6 col-12 mx-auto">
                                        <div class="form-group">
                                            <label for="fullname" class="col-form-label">Full Name</label>
                                            <div>
                                                <input id="fullname" type="text" value="Alan Green" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Input with label --&gt;
&lt;div class=&quot;form-group&quot;&gt;
    &lt;label for=&quot;fullname&quot; class=&quot;col-form-label&quot;&gt;Full Name&lt;/label&gt;
    &lt;div&gt;
        &lt;input id=&quot;fullname&quot; type=&quot;text&quot; value=&quot;Alan Green&quot; class=&quot;form-control&quot; /&gt;
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
                                        <h4>Form controls</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="email" class="col-form-label">Email address</label>
                                        <div>
                                            <input id="email" type="email" class="form-control" placeholder="name@example.com" />
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="select" class="col-form-label">Example select</label>
                                        <div>
                                            <select id="select" class="form-select">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="multiselect" class="col-form-label">Example multiple select</label>
                                        <div>
                                            <select id="multiselect" multiple class="form-select">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="textarea" class="col-form-label">Email textarea</label>
                                        <div>
                                            <textarea id="textarea" class="form-control" style="height: 95px"></textarea>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="file" class="col-form-label">Email file input</label>
                                        <div>
                                            <input id="file" type="file" class="form-control-file" />
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary my-4">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div id="form_grid_layouts" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">Form Grid Layouts</h4>
                        </div>
                    </div>

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Form grid</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form>
                                    <div class="row mb-4">
                                        <div class="col">
                                            <input class="form-control" placeholder="First name" />
                                        </div>
                                        <div class="col">
                                            <input class="form-control" placeholder="Last name" />
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>
                                    <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Form Grid --&gt;
&lt;form&gt;
    &lt;div class=&quot;row mb-4&quot;&gt;
        &lt;div class=&quot;col&quot;&gt;
            &lt;input class=&quot;form-control&quot; placeholder=&quot;First name&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col&quot;&gt;
            &lt;input class=&quot;form-control&quot; placeholder=&quot;Last name&quot; /&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
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
                                        <h4>Form row</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form>
                                    <div class="row mb-4">
                                        <div class="col-sm-6">
                                            <input class="form-control" placeholder="First name" />
                                        </div>
                                        <div class="col-sm-6">
                                            <input class="form-control" placeholder="Last name" />
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Form row --&gt;
&lt;form&gt;
    &lt;div class=&quot;row mb-4&quot;&gt;
        &lt;div class=&quot;col-sm-6&quot;&gt;
            &lt;input class=&quot;form-control&quot; placeholder=&quot;First name&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-sm-6&quot;&gt;
            &lt;input class=&quot;form-control&quot; placeholder=&quot;Last name&quot; /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
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
                                        <h4>Form groups</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form>
                                    <div class="mb-4">
                                        <label class="col-form-label" for="example_lable">Example label</label>
                                        <div>
                                            <input type="text" id="example_lable" class="form-control" placeholder="Example input" />
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <label class="col-form-label" for="another_lable">Another label</label>
                                        <div>
                                            <input type="text" id="another_lable" class="form-control" placeholder="Another input" />
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Form groups --&gt;
&lt;form&gt;
    &lt;div class=&quot;mb-4&quot;&gt;
        &lt;label class=&quot;col-form-label&quot; for=&quot;example_lable&quot;&gt;Example label&lt;/label&gt;
        &lt;div&gt;
            &lt;input type=&quot;text&quot; id=&quot;example_lable&quot; class=&quot;form-control&quot; placeholder=&quot;Example input&quot; /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;mb-4&quot;&gt;
        &lt;label class=&quot;col-form-label&quot; for=&quot;another_lable&quot;&gt;Another label&lt;/label&gt;
        &lt;div&gt;
            &lt;input type=&quot;text&quot; id=&quot;another_lable&quot; class=&quot;form-control&quot; placeholder=&quot;Another input&quot; /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
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
                                        <h4>Column sizing</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form>
                                    <div class="row mb-4">
                                        <div class="col-sm-7">
                                            <input class="form-control" placeholder="City" />
                                        </div>
                                        <div class="col-sm">
                                            <input class="form-control" placeholder="State" />
                                        </div>
                                        <div class="col-sm">
                                            <input class="form-control" placeholder="Zip" />
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Column sizing --&gt;
&lt;form&gt;
    &lt;div class=&quot;row mb-4&quot;&gt;
        &lt;div class=&quot;col-sm-7&quot;&gt;
            &lt;input class=&quot;form-control&quot; placeholder=&quot;City&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-sm&quot;&gt;
            &lt;input class=&quot;form-control&quot; placeholder=&quot;State&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-sm&quot;&gt;
            &lt;input class=&quot;form-control&quot; placeholder=&quot;Zip&quot; /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
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
                    <div id="helper_text" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">Helper Text</h4>
                        </div>
                    </div>

                    <div class="col-xl-12 col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Input with help text ( Default Left)</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-xl-7 mx-auto">
                                        <div>
                                            <p>Use <code>small</code> tag and <code>.text-muted</code> for helper text.</p>
                                            <input type="text" class="form-control" />
                                            <small id="sh-text1" class="block text-muted">I am the helper text.</small>
                                        </div>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Input with help text --&gt;
&lt;div&gt;
    &lt;p&gt;Use &lt;code&gt;small&lt;/code&gt; tag and &lt;code&gt;.text-muted&lt;/code&gt; for helper text.&lt;/p&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; /&gt;
    &lt;small id=&quot;sh-text1&quot; class=&quot;block text-muted&quot;&gt;I am the helper text.&lt;/small&gt;
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
                                        <h4>Input with badge help text (Default Left)</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-xl-7 mx-auto">
                                        <div>
                                            <p>Wrap the <code>small</code> tag inside the <code>span</code> tag with <code>.badge</code></p>
                                            <input type="text" class="form-control" />
                                            <div class="mt-1">
                                                <span class="badge badge-primary">
                                                    <small id="sh-text4" class="d-block mt-0">I am the helper text.</small>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code7')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Input with badge help text --&gt;
&lt;div&gt;
    &lt;p&gt;Wrap the &lt;code&gt;small&lt;/code&gt; tag inside the &lt;code&gt;span&lt;/code&gt; tag with &lt;code&gt;.badge&lt;/code&gt;&lt;/p&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; /&gt;
    &lt;div class=&quot;mt-1&quot;&gt;
        &lt;span class=&quot;badge badge-primary&quot;&gt;
            &lt;small id=&quot;sh-text4&quot; class=&quot;d-block mt-0&quot;&gt;I am the helper text.&lt;/small&gt;
        &lt;/span&gt;
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
                                        <h4>Input with block badge help text (Default Left)</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-xl-7 mx-auto">
                                        <div>
                                            <p>Use <code>.w-100</code> class to the <code>span</code> tag to make block.</p>
                                            <input class="form-control" />
                                            <div class="mt-1">
                                                <span class="badge badge-primary w-100">
                                                    <small id="sh-text7" class="d-block mt-0 text-start">I am the helper text.</small>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code8')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Input with block badge help text --&gt;
&lt;div&gt;
    &lt;p&gt;Use &lt;code&gt;.w-100&lt;/code&gt; class to the &lt;code&gt;span&lt;/code&gt; tag to make block.&lt;/p&gt;
    &lt;input class=&quot;form-control&quot; /&gt;
    &lt;div class=&quot;mt-1&quot;&gt;
        &lt;span class=&quot;badge badge-primary w-100&quot;&gt;
            &lt;small id=&quot;sh-text7&quot; class=&quot;d-block mt-0 text-start&quot;&gt;I am the helper text.&lt;/small&gt;
        &lt;/span&gt;
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
                                        <h4>Inline Help text</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form class="d-flex align-items-center mb-4">
                                    <div class="d-block text-start">
                                        <label class="col-form-label">Password</label>
                                        <div>
                                            <input type="password" class="form-control d-inline-block w-auto mt-2" />
                                            <small id="passwordHelpInline" class="text-muted"> Min 8-20 char </small>
                                        </div>
                                    </div>
                                </form>
                                <button type="submit" class="btn btn-primary">Submit</button>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code9')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Inline help text --&gt;
&lt;form class=&quot;d-flex align-items-center mb-4&quot;&gt;
    &lt;div class=&quot;d-block text-start&quot;&gt;
        &lt;label class=&quot;col-form-label&quot;&gt;Password&lt;/label&gt;
        &lt;div&gt;
            &lt;input type=&quot;password&quot; class=&quot;form-control d-inline-block w-auto mt-2&quot; /&gt;
            &lt;small id=&quot;passwordHelpInline&quot; class=&quot;text-muted&quot;&gt; Min 8-20 char &lt;/small&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/form&gt;
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
                    <div id="form_sizing" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">Sizing</h4>
                        </div>
                    </div>

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Input Fields</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-xl-4">
                                        <div>
                                            <label class="col-form-label">Large Input</label>
                                            <div>
                                                <input type="text" class="form-control form-control-lg" placeholder=".form-control-lg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4">
                                        <div>
                                            <label class="col-form-label">Default Input</label>
                                            <div>
                                                <input type="text" class="form-control" placeholder="Default input" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4">
                                        <div>
                                            <label class="col-form-label">Small Input</label>
                                            <div>
                                                <input type="text" class="form-control form-control-sm" placeholder=".form-control-sm" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code10')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code10')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Large Input --&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control form-control-lg&quot; placeholder=&quot;.form-control-lg&quot; /&gt;

&lt;!-- Default Input --&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Default input&quot; /&gt;

&lt;!-- Small Input --&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control form-control-sm&quot; placeholder=&quot;.form-control-sm&quot; /&gt;
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
                                        <h4>Select Field</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-xl-4 mb-xl-0 mb-2">
                                        <select class="form-select form-select-lg">
                                            <option value="Large select">Large select</option>
                                            <option value="One">One</option>
                                            <option value="Two">Two</option>
                                            <option value="Three">Three</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-4 mb-xl-0 mb-2">
                                        <select class="form-select">
                                            <option value="Default select">Default select</option>
                                            <option value="One">One</option>
                                            <option value="Two">Two</option>
                                            <option value="Three">Three</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-4 mb-xl-0 mb-2">
                                        <select class="form-select form-select-sm">
                                            <option value="Small select">Small select</option>
                                            <option value="One">One</option>
                                            <option value="Two">Two</option>
                                            <option value="Three">Three</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code11')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code11')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Large select --&gt;
&lt;select class=&quot;form-select form-select-lg&quot;&gt;
    &lt;option value=&quot;Large select&quot;&gt;Large select&lt;/option&gt;
    &lt;option value=&quot;One&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;Two&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;Three&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;

&lt;!-- Default select --&gt;
&lt;select class=&quot;form-select&quot;&gt;
    &lt;option value=&quot;Default select&quot;&gt;Default select&lt;/option&gt;
    &lt;option value=&quot;One&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;Two&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;Three&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;

&lt;!-- Small select --&gt;
&lt;select class=&quot;form-select form-select-sm&quot;&gt;
    &lt;option value=&quot;Small select&quot;&gt;Small select&lt;/option&gt;
    &lt;option value=&quot;One&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;Two&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;Three&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;
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
                                        <h4>Horizontal form label sizing</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form>
                                    <div class="row mb-4">
                                        <label class="col-sm-2 col-form-label col-form-label-sm" for="colFormLabelSm">Email</label>
                                        <div class="col-sm-10">
                                            <input type="email" id="colFormLabelSm" class="form-control form-control-sm" placeholder="col-form-label-sm" />
                                        </div>
                                    </div>
                                    <div class="row mb-4">
                                        <label class="col-sm-2 col-form-label col-form-label-sm" for="colFormLabelMd">Email</label>
                                        <div class="col-sm-10">
                                            <input type="email" id="colFormLabelMd" class="form-control" placeholder="col-form-label" />
                                        </div>
                                    </div>
                                    <div class="row mb-4">
                                        <label class="col-sm-2 col-form-label col-form-label-sm" for="colFormLabelLg">Email</label>
                                        <div class="col-sm-10">
                                            <input type="email" id="colFormLabelLg" class="form-control form-control-lg" placeholder="col-form-label-lg" />
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary mb-4">Submit</button>
                                </form>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code12')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code12')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Horizontal form label sizing --&gt;
&lt;form&gt;
    &lt;div class=&quot;row mb-4&quot;&gt;
        &lt;label class=&quot;col-sm-2 col-form-label col-form-label-sm&quot; for=&quot;colFormLabelSm&quot;&gt;Email&lt;/label&gt;
        &lt;div class=&quot;col-sm-10&quot;&gt;
            &lt;input type=&quot;email&quot; id=&quot;colFormLabelSm&quot; class=&quot;form-control form-control-sm&quot; placeholder=&quot;col-form-label-sm&quot; /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;row mb-4&quot;&gt;
        &lt;label class=&quot;col-sm-2 col-form-label col-form-label-sm&quot; for=&quot;colFormLabelMd&quot;&gt;Email&lt;/label&gt;
        &lt;div class=&quot;col-sm-10&quot;&gt;
            &lt;input type=&quot;email&quot; id=&quot;colFormLabelMd&quot; class=&quot;form-control&quot; placeholder=&quot;col-form-label&quot; /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;row mb-4&quot;&gt;
        &lt;label class=&quot;col-sm-2 col-form-label col-form-label-sm&quot; for=&quot;colFormLabelLg&quot;&gt;Email&lt;/label&gt;
        &lt;div class=&quot;col-sm-10&quot;&gt;
            &lt;input type=&quot;email&quot; id=&quot;colFormLabelLg&quot; class=&quot;form-control form-control-lg&quot; placeholder=&quot;col-form-label-lg&quot; /&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary mb-4&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
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
                    <div id="readonly_input" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">Readonly</h4>
                        </div>
                    </div>

                    <div class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Input Readonly</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <input type="text" class="form-control" placeholder="Readonly input here…" readonly />

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code13')"><span>Code</span></button>
                                    <div v-if="code_arr.includes('code13')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Readonly --&gt;
&lt;input placeholder=&quot;Readonly input here&hellip;&quot; readonly&gt;&lt;/input&gt;
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
                    <div id="html_custom_file_upload" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">HTML Custom File Upload</h4>
                        </div>
                    </div>

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>File Upload</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="custom-file mb-3">
                                    <input id="ufile" type="file" class="custom-file-input" />
                                    <label for="ufile" data-browse="Browse" class="custom-file-label">
                                        <span class="d-block form-file-text">No file chosen </span>
                                    </label>
                                </div>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code14')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code14')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- File Upload --&gt;
&lt;div class=&quot;custom-file mb-3&quot;&gt;
    &lt;input id=&quot;ufile&quot; type=&quot;file&quot; class=&quot;custom-file-input&quot; /&gt;
    &lt;label for=&quot;ufile&quot; data-browse=&quot;Browse&quot; class=&quot;custom-file-label&quot;&gt;
        &lt;span class=&quot;d-block form-file-text&quot;&gt;No file chosen &lt;/span&gt;
    &lt;/label&gt;
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
                    <div id="disabled_form" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">Disabled</h4>
                        </div>
                    </div>

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Disabled Fields</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form>
                                    <div class="mb-3">
                                        <label class="col-form-label">Disabled input</label>
                                        <div>
                                            <input type="text" class="form-control" placeholder="Disabled input" value="Disabled input" disabled />
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label">Disabled select menu </label>
                                        <div>
                                            <select class="form-select w-100" disabled>
                                                <option value="">Disabled select</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="checkbox-primary custom-control custom-checkbox">
                                            <input type="checkbox" disabled="disabled" class="custom-control-input" value="true" id="chkdisabled" />
                                            <label class="custom-control-label" for="chkdisabled">Can't check this</label>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary" disabled>Submit</button>
                                </form>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code15')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code15')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Disabled Fields --&gt;
&lt;form&gt;
    &lt;div class=&quot;mb-3&quot;&gt;
        &lt;label class=&quot;col-form-label&quot;&gt;Disabled input&lt;/label&gt;
        &lt;div&gt;
            &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Disabled input&quot; value=&quot;Disabled input&quot; disabled /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;mb-3&quot;&gt;
        &lt;label class=&quot;col-form-label&quot;&gt;Disabled select menu &lt;/label&gt;
        &lt;div&gt;
            &lt;select class=&quot;form-select w-100&quot; disabled&gt;
                &lt;option value=&quot;&quot;&gt;Disabled select&lt;/option&gt;
            &lt;/select&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;mb-3&quot;&gt;
        &lt;div class=&quot;checkbox-primary custom-control custom-checkbox&quot;&gt;
            &lt;input type=&quot;checkbox&quot; disabled=&quot;disabled&quot; class=&quot;custom-control-input&quot; value=&quot;true&quot; id=&quot;chkdisabled&quot; /&gt;
            &lt;label class=&quot;custom-control-label&quot; for=&quot;chkdisabled&quot;&gt;Can't check this&lt;/label&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot; disabled&gt;Submit&lt;/button&gt;
&lt;/form&gt;
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
                    <div id="custom_bs_forms" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">Custom</h4>
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
                                <div class="checkbox-primary custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" value="true" id="chk1" />
                                    <label class="custom-control-label" for="chk1">Check this custom checkbox</label>
                                </div>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code16')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code16')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Custom Checkboxes--&gt;
&lt;div class=&quot;checkbox-primary custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; value=&quot;true&quot; id=&quot;chk1&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chk1&quot;&gt;Check this custom checkbox&lt;/label&gt;
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
                                        <h4>Inline radio</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div role="radiogroup" tabindex="-1" class="bv-no-focus-ring">
                                    <div class="radio-classic radio-primary custom-control d-inline-flex custom-radio me-3">
                                        <input type="radio" class="custom-control-input" value="1" id="rdo1" name="rdoinline" />
                                        <label class="custom-control-label" for="rdo1">Toggle this custom radio</label>
                                    </div>
                                    <div class="radio-classic radio-primary custom-control d-inline-flex custom-radio me-3">
                                        <input type="radio" class="custom-control-input" value="2" id="rdo2" name="rdoinline" />
                                        <label class="custom-control-label" for="rdo2">Toggle this custom radio</label>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code17')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code17')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Inline radio --&gt;
&lt;div role=&quot;radiogroup&quot; tabindex=&quot;-1&quot; class=&quot;bv-no-focus-ring&quot;&gt;
    &lt;div class=&quot;radio-classic radio-primary custom-control d-inline-flex custom-radio me-3&quot;&gt;
        &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; value=&quot;1&quot; id=&quot;rdo1&quot; name=&quot;rdoinline&quot; /&gt;
        &lt;label class=&quot;custom-control-label&quot; for=&quot;rdo1&quot;&gt;Toggle this custom radio&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class=&quot;radio-classic radio-primary custom-control d-inline-flex custom-radio me-3&quot;&gt;
        &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; value=&quot;2&quot; id=&quot;rdo2&quot; name=&quot;rdoinline&quot; /&gt;
        &lt;label class=&quot;custom-control-label&quot; for=&quot;rdo2&quot;&gt;Toggle this custom radio&lt;/label&gt;
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
                                        <h4>Radio</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div>
                                    <div class="radio-classic radio-primary mb-3 custom-control custom-radio">
                                        <input type="radio" name="rdo_1" class="custom-control-input" value="1" id="rdo_1" />
                                        <label class="custom-control-label" for="rdo_1">Toggle this custom radio</label>
                                    </div>
                                    <div class="radio-classic radio-primary custom-control custom-radio">
                                        <input type="radio" name="rdo_1" class="custom-control-input" value="2" id="rdo_2" />
                                        <label class="custom-control-label" for="rdo_2">Or toggle this other custom radio</label>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code18')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code18')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- radio --&gt;
&lt;div&gt;
    &lt;div class=&quot;radio-classic radio-primary mb-3 custom-control custom-radio&quot;&gt;
        &lt;input type=&quot;radio&quot; name=&quot;rdo_1&quot; class=&quot;custom-control-input&quot; value=&quot;1&quot; id=&quot;rdo_1&quot; /&gt;
        &lt;label class=&quot;custom-control-label&quot; for=&quot;rdo_1&quot;&gt;Toggle this custom radio&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class=&quot;radio-classic radio-primary custom-control custom-radio&quot;&gt;
        &lt;input type=&quot;radio&quot; name=&quot;rdo_1&quot; class=&quot;custom-control-input&quot; value=&quot;2&quot; id=&quot;rdo_2&quot; /&gt;
        &lt;label class=&quot;custom-control-label&quot; for=&quot;rdo_2&quot;&gt;Or toggle this other custom radio&lt;/label&gt;
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
                                        <h4>Disabled</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="checkbox-primary mb-3 custom-control custom-checkbox">
                                    <input type="checkbox" disabled="disabled" class="custom-control-input" id="chk_dis_1" />
                                    <label class="custom-control-label" for="chk_dis_1">Check this custom checkbox</label>
                                </div>
                                <div class="radio-classic radio-primary mb-4 custom-control custom-radio">
                                    <input type="radio" disabled="disabled" class="custom-control-input" id="rdo_dis_1" />
                                    <label class="custom-control-label" for="rdo_dis_1">Toggle this custom radio</label>
                                </div>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code20')"><span>Code</span></button>
                                    <div v-if="code_arr.includes('code20')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Disabled --&gt;
&lt;div class=&quot;checkbox-primary mb-3 custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; disabled=&quot;disabled&quot; class=&quot;custom-control-input&quot; id=&quot;chk_dis_1&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;chk_dis_1&quot;&gt;Check this custom checkbox&lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;radio-classic radio-primary mb-4 custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; disabled=&quot;disabled&quot; class=&quot;custom-control-input&quot; id=&quot;rdo_dis_1&quot; /&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;rdo_dis_1&quot;&gt;Toggle this custom radio&lt;/label&gt;
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
                                        <h4>Select menu</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <select class="mb-4 form-select w-100">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code21')"><span>Code</span></button>
                                    <div v-if="code_arr.includes('code21')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Select menu --&gt;
&lt;select class=&quot;mb-4 form-select w-100&quot;&gt;
    &lt;option selected&gt;Open this select menu&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;
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
                                        <h4>Select menu sizing</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <select class="mb-4 form-select form-select-lg w-100">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                                <select class="mb-4 form-select form-select-sm w-100">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code22')"><span>Code</span></button>
                                    <div v-if="code_arr.includes('code22')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!--Large select menu --&gt;
&lt;select class=&quot;mb-4 form-select form-select-lg w-100&quot;&gt;
    &lt;option selected&gt;Open this select menu&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;

&lt;!--Small select menu --&gt;
&lt;select class=&quot;mb-4 form-select form-select-sm w-100&quot;&gt;
    &lt;option selected&gt;Open this select menu&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;
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
                                        <h4>Multi select</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <select multiple class="form-select w-100 h-auto">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code23')"><span>Code</span></button>
                                    <div v-if="code_arr.includes('code23')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Multi select --&gt;
&lt;select multiple class=&quot;form-select w-100 h-auto&quot;&gt;
    &lt;option selected&gt;Open this select menu&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;
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
                                        <h4>Select size</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <select class="form-select mb-4 w-100 h-auto" size="4">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="4">Four</option>
                                    <option value="5">Five</option>
                                </select>

                                <div class="code-section-container show-code">
                                    <button variant="default" class="toggle-code-snippet" @click="toggleCode('code24')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code24')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Select size --&gt;
&lt;select class=&quot;form-select mb-4 w-100 h-auto&quot; size=&quot;4&quot;&gt;
    &lt;option selected&gt;Open this select menu&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
    &lt;option value=&quot;4&quot;&gt;Four&lt;/option&gt;
    &lt;option value=&quot;5&quot;&gt;Five&lt;/option&gt;
&lt;/select&gt;
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
    useMeta({ title: "Forms" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
