<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Layouts</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#flStackForm" class="nav-link">Stack Forms</a>
                    <a href="#flHorizontalForm" class="nav-link">Horizontal form</a>
                    <a href="#flRegistrationForm" class="nav-link">Registration Forms</a>
                    <a href="#flLoginForm" class="nav-link">Login Form</a>
                    <a href="#flFormsGrid" class="nav-link">Forms Grid</a>
                    <a href="#flInlineForm" class="nav-link">Inline forms</a>
                    <a href="#flAutoSizing" class="nav-link">Auto-sizing</a>
                    <a href="#flActionButtons" class="nav-link">Actions Buttons</a>
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
                        <a target="_blank" href="https://getbootstrap.com/docs/5.0/forms/layout" class="text-info"> https://getbootstrap.com/docs/5.0/forms/layout </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row">
                <div id="flStackForm" class="col-lg-12 layout-spacing layout-top-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Stack Forms</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form>
                                <div class="form-group mb-3">
                                    <input type="email" class="form-control" id="sEmail" aria-describedby="emailHelp1" placeholder="Email address" />
                                    <small id="emailHelp1" class="block text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="sPassword" placeholder="Password" />
                                </div>
                                <div>
                                    <div class="custom-control custom-checkbox checkbox-primary">
                                        <input type="checkbox" class="custom-control-input" id="sChkbox" />
                                        <label class="custom-control-label" for="sChkbox">Subscribe to weekly newsletter</label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary mt-4">Submit</button>
                            </form>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Stack Forms --&gt;
&lt;form&gt;
    &lt;div class=&quot;form-group mb-3&quot;&gt;
        &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;sEmail&quot; aria-describedby=&quot;emailHelp1&quot; placeholder=&quot;Email address&quot; /&gt;
        &lt;small id=&quot;emailHelp1&quot; class=&quot;block text-muted&quot;&gt;We'll never share your email with anyone else.&lt;/small&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group&quot;&gt;
        &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;sPassword&quot; placeholder=&quot;Password&quot; /&gt;
    &lt;/div&gt;
    &lt;div&gt;
        &lt;div class=&quot;custom-control custom-checkbox checkbox-primary&quot;&gt;
            &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;sChkbox&quot; /&gt;
            &lt;label class=&quot;custom-control-label&quot; for=&quot;sChkbox&quot;&gt;Subscribe to weekly newsletter&lt;/label&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary mt-4&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="flHorizontalForm" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Horizontal form</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form>
                                <div class="form-group row">
                                    <label for="hEmail" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Email</label>
                                    <div class="col-xl-10 col-lg-9 col-sm-10">
                                        <input type="email" class="form-control" id="hEmail" placeholder="" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Password</label>
                                    <div class="col-xl-10 col-lg-9 col-sm-10">
                                        <input type="password" class="form-control" id="hPassword" placeholder="" />
                                    </div>
                                </div>
                                <fieldset class="form-group">
                                    <div class="row">
                                        <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Choose Segements</label>
                                        <div class="col-xl-10 col-lg-9 col-sm-10">
                                            <div class="radio-classic radio-primary custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="hRadio1" name="classicRadio" />
                                                <label class="custom-control-label" for="hRadio1"> Segements 1 </label>
                                            </div>
                                            <div class="radio-classic radio-primary custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="hRadio2" name="classicRadio" />
                                                <label class="custom-control-label" for="hRadio2"> Segements 2 </label>
                                            </div>
                                            <div class="radio-classic radio-primary custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="hRadio3" name="classicRadio" disabled />
                                                <label class="custom-control-label" for="hRadio3"> Segements 3 ( disabled ) </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <div class="form-group row">
                                    <div class="col-sm-2">Apply</div>
                                    <div class="col-sm-10">
                                        <div class="custom-control custom-checkbox checkbox-primary">
                                            <input type="checkbox" class="custom-control-input" id="hChkbox" />
                                            <label class="custom-control-label" for="hChkbox">Terms Conditions</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-10">
                                        <button type="submit" class="btn btn-primary mt-3">Lets Go</button>
                                    </div>
                                </div>
                            </form>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Horizontal Form --&gt;
&lt;form&gt;
    &lt;div class=&quot;form-group mb-3&quot;&gt;
        &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;sEmail&quot; aria-describedby=&quot;emailHelp1&quot; placeholder=&quot;Email address&quot; /&gt;
        &lt;small id=&quot;emailHelp1&quot; clas&lt;form&gt;
    &lt;div class=&quot;form-group row&quot;&gt;
        &lt;label for=&quot;hEmail&quot; class=&quot;col-xl-2 col-sm-3 col-sm-2 col-form-label&quot;&gt;Email&lt;/label&gt;
        &lt;div class=&quot;col-xl-10 col-lg-9 col-sm-10&quot;&gt;
            &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;hEmail&quot; placeholder=&quot;&quot; /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group row&quot;&gt;
        &lt;label for=&quot;hPassword&quot; class=&quot;col-xl-2 col-sm-3 col-sm-2 col-form-label&quot;&gt;Password&lt;/label&gt;
        &lt;div class=&quot;col-xl-10 col-lg-9 col-sm-10&quot;&gt;
            &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;hPassword&quot; placeholder=&quot;&quot; /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;fieldset class=&quot;form-group&quot;&gt;
        &lt;div class=&quot;row&quot;&gt;
            &lt;label class=&quot;col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0&quot;&gt;Choose Segements&lt;/label&gt;
            &lt;div class=&quot;col-xl-10 col-lg-9 col-sm-10&quot;&gt;
                &lt;div class=&quot;radio-classic radio-primary custom-control custom-radio&quot;&gt;
                    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;hRadio1&quot; name=&quot;classicRadio&quot; /&gt;
                    &lt;label class=&quot;custom-control-label&quot; for=&quot;hRadio1&quot;&gt; Segements 1 &lt;/label&gt;
                &lt;/div&gt;
                &lt;div class=&quot;radio-classic radio-primary custom-control custom-radio&quot;&gt;
                    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;hRadio2&quot; name=&quot;classicRadio&quot; /&gt;
                    &lt;label class=&quot;custom-control-label&quot; for=&quot;hRadio2&quot;&gt; Segements 2 &lt;/label&gt;
                &lt;/div&gt;
                &lt;div class=&quot;radio-classic radio-primary custom-control custom-radio&quot;&gt;
                    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;hRadio3&quot; name=&quot;classicRadio&quot; disabled /&gt;
                    &lt;label class=&quot;custom-control-label&quot; for=&quot;hRadio3&quot;&gt; Segements 3 ( disabled ) &lt;/label&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/fieldset&gt;
    &lt;div class=&quot;form-group row&quot;&gt;
        &lt;div class=&quot;col-sm-2&quot;&gt;Apply&lt;/div&gt;
        &lt;div class=&quot;col-sm-10&quot;&gt;
            &lt;div class=&quot;custom-control custom-checkbox checkbox-primary&quot;&gt;
                &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;hChkbox&quot; /&gt;
                &lt;label class=&quot;custom-control-label&quot; for=&quot;hChkbox&quot;&gt;Terms Conditions&lt;/label&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group row&quot;&gt;
        &lt;div class=&quot;col-sm-10&quot;&gt;
            &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary mt-3&quot;&gt;Lets Go&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/form&gt;s=&quot;block text-muted&quot;&gt;We'll never share your email with anyone else.&lt;/small&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group&quot;&gt;
        &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;sPassword&quot; placeholder=&quot;Password&quot; /&gt;
    &lt;/div&gt;
    &lt;div&gt;
        &lt;div class=&quot;custom-control custom-checkbox checkbox-primary&quot;&gt;
            &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;sChkbox&quot; /&gt;
            &lt;label class=&quot;custom-control-label&quot; for=&quot;sChkbox&quot;&gt;Subscribe to weekly newsletter&lt;/label&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary mt-4&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="flRegistrationForm" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Registration Forms</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="rEmail" placeholder="Email address *" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="rPassword" placeholder="Password *" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="rConfirmPassword" placeholder="Confirm Password *" />
                                </div>
                                <small id="emailHelp2" class="block text-muted">*Required Fields</small>
                                <div class="form-group ps-0 mt-3">
                                    <div class="custom-control custom-checkbox checkbox-primary">
                                        <input type="checkbox" class="custom-control-input" id="rChkbox" />
                                        <label class="custom-control-label" for="rChkbox">Subscribe to weekly newsletter</label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary mt-3">Submit</button>
                            </form>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Registration Form --&gt;
&lt;form&gt;
    &lt;div class=&quot;form-group&quot;&gt;
        &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;rEmail&quot; placeholder=&quot;Email address *&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group&quot;&gt;
        &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;rPassword&quot; placeholder=&quot;Password *&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group&quot;&gt;
        &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;rConfirmPassword&quot; placeholder=&quot;Confirm Password *&quot; /&gt;
    &lt;/div&gt;
    &lt;small id=&quot;emailHelp2&quot; class=&quot;block text-muted&quot;&gt;*Required Fields&lt;/small&gt;
    &lt;div class=&quot;form-group ps-0 mt-3&quot;&gt;
        &lt;div class=&quot;custom-control custom-checkbox checkbox-primary&quot;&gt;
            &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;rChkbox&quot; /&gt;
            &lt;label class=&quot;custom-control-label&quot; for=&quot;rChkbox&quot;&gt;Subscribe to weekly newsletter&lt;/label&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary mt-3&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="flLoginForm" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Login Form</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="lFullName" placeholder="Full Name *" />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="lEmail" placeholder="Email address *" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="lPassword" placeholder="Password *" />
                                </div>
                                <small id="emailHelp" class="d-block text-muted">*Required Fields</small>
                                <button type="submit" class="btn btn-primary mt-4">Submit</button>
                            </form>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Login Form --&gt;
&lt;form&gt;
    &lt;div class=&quot;form-group&quot;&gt;
        &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;lFullName&quot; placeholder=&quot;Full Name *&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group&quot;&gt;
        &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;lEmail&quot; placeholder=&quot;Email address *&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group&quot;&gt;
        &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;lPassword&quot; placeholder=&quot;Password *&quot; /&gt;
    &lt;/div&gt;
    &lt;small id=&quot;emailHelp&quot; class=&quot;d-block text-muted&quot;&gt;*Required Fields&lt;/small&gt;
    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary mt-4&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="flFormsGrid" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Forms Grid</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Email</label>
                                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputPassword4">Password</label>
                                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress2">Address 2</label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="inputCity">City</label>
                                        <input type="text" class="form-control" id="inputCity" />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputState">State</label>
                                        <select id="inputState" class="form-select">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label for="inputZip">Zip</label>
                                        <input type="text" class="form-control" id="inputZip" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-check ps-0">
                                        <div class="custom-control custom-checkbox checkbox-primary">
                                            <input type="checkbox" class="custom-control-input" id="gridCheck" />
                                            <label class="custom-control-label" for="gridCheck">Check me out</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary mt-3">Sign in</button>
                            </form>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Forms grid --&gt;
&lt;form&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;form-group col-md-6&quot;&gt;
            &lt;label for=&quot;inputEmail4&quot;&gt;Email&lt;/label&gt;
            &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;inputEmail4&quot; placeholder=&quot;Email&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;form-group col-md-6&quot;&gt;
            &lt;label for=&quot;inputPassword4&quot;&gt;Password&lt;/label&gt;
            &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;inputPassword4&quot; placeholder=&quot;Password&quot; /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group&quot;&gt;
        &lt;label for=&quot;inputAddress&quot;&gt;Address&lt;/label&gt;
        &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputAddress&quot; placeholder=&quot;1234 Main St&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group&quot;&gt;
        &lt;label for=&quot;inputAddress2&quot;&gt;Address 2&lt;/label&gt;
        &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputAddress2&quot; placeholder=&quot;Apartment, studio, or floor&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;form-group col-md-6&quot;&gt;
            &lt;label for=&quot;inputCity&quot;&gt;City&lt;/label&gt;
            &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputCity&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;form-group col-md-4&quot;&gt;
            &lt;label for=&quot;inputState&quot;&gt;State&lt;/label&gt;
            &lt;select id=&quot;inputState&quot; class=&quot;form-select&quot;&gt;
                &lt;option selected&gt;Choose...&lt;/option&gt;
                &lt;option&gt;...&lt;/option&gt;
            &lt;/select&gt;
        &lt;/div&gt;
        &lt;div class=&quot;form-group col-md-2&quot;&gt;
            &lt;label for=&quot;inputZip&quot;&gt;Zip&lt;/label&gt;
            &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputZip&quot; /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group&quot;&gt;
        &lt;div class=&quot;form-check ps-0&quot;&gt;
            &lt;div class=&quot;custom-control custom-checkbox checkbox-primary&quot;&gt;
                &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;gridCheck&quot; /&gt;
                &lt;label class=&quot;custom-control-label&quot; for=&quot;gridCheck&quot;&gt;Check me out&lt;/label&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary mt-3&quot;&gt;Sign in&lt;/button&gt;
&lt;/form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="flInlineForm" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Inline forms</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form class="row align-items-center justify-content-center">
                                <div class="col-12 col-sm-auto">
                                    <label class="sr-only" for="inlineFormInputName2">Name</label>
                                    <input type="text" class="form-control mb-2 me-sm-2" id="inlineFormInputName2" placeholder="Jane Doe" />
                                </div>
                                <div class="col-12 col-sm-auto">
                                    <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
                                    <div class="input-group mb-2 me-sm-2">
                                        <div class="input-group-text">@</div>
                                        <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
                                    </div>
                                </div>
                                <div class="col-12 col-sm-auto mb-2 me-sm-2">
                                    <div class="custom-control custom-checkbox checkbox-primary">
                                        <input type="checkbox" class="custom-control-input" id="inlineFormCheck" />
                                        <label class="custom-control-label" for="inlineFormCheck">Remember me</label>
                                    </div>
                                </div>
                                <div class="col-12 text-center">
                                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                                </div>
                            </form>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>
                                <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Inline Forms --&gt;
&lt;form class=&quot;row align-items-center justify-content-center&quot;&gt;
    &lt;div class=&quot;col-12 col-sm-auto&quot;&gt;
        &lt;label class=&quot;sr-only&quot; for=&quot;inlineFormInputName2&quot;&gt;Name&lt;/label&gt;
        &lt;input type=&quot;text&quot; class=&quot;form-control mb-2 me-sm-2&quot; id=&quot;inlineFormInputName2&quot; placeholder=&quot;Jane Doe&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-12 col-sm-auto&quot;&gt;
        &lt;label class=&quot;sr-only&quot; for=&quot;inlineFormInputGroupUsername2&quot;&gt;Username&lt;/label&gt;
        &lt;div class=&quot;input-group mb-2 me-sm-2&quot;&gt;
            &lt;div class=&quot;input-group-text&quot;&gt;@&lt;/div&gt;
            &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inlineFormInputGroupUsername2&quot; placeholder=&quot;Username&quot; /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-12 col-sm-auto mb-2 me-sm-2&quot;&gt;
        &lt;div class=&quot;custom-control custom-checkbox checkbox-primary&quot;&gt;
            &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;inlineFormCheck&quot; /&gt;
            &lt;label class=&quot;custom-control-label&quot; for=&quot;inlineFormCheck&quot;&gt;Remember me&lt;/label&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-12 text-center&quot;&gt;
        &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary mb-2&quot;&gt;Submit&lt;/button&gt;
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

                <div id="flAutoSizing" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Auto-sizing</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form>
                                <div class="row align-items-center justify-content-center">
                                    <div class="col-auto">
                                        <label class="sr-only" for="inlineFormInput">Name</label>
                                        <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe" />
                                    </div>
                                    <div class="col-auto">
                                        <label class="sr-only" for="inlineFormInputGroup">Username</label>
                                        <div class="input-group mb-2">
                                            <div class="input-group-text">@</div>
                                            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="form-check mb-2 ps-0">
                                            <div class="custom-control custom-checkbox checkbox-primary">
                                                <input type="checkbox" class="custom-control-input" id="autoSizingCheck" />
                                                <label class="custom-control-label" for="autoSizingCheck">Remember me</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></button>
                                <div v-if="code_arr.includes('code7')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Auto-sizing --&gt;
&lt;form&gt;
    &lt;div class=&quot;row align-items-center justify-content-center&quot;&gt;
        &lt;div class=&quot;col-auto&quot;&gt;
            &lt;label class=&quot;sr-only&quot; for=&quot;inlineFormInput&quot;&gt;Name&lt;/label&gt;
            &lt;input type=&quot;text&quot; class=&quot;form-control mb-2&quot; id=&quot;inlineFormInput&quot; placeholder=&quot;Jane Doe&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-auto&quot;&gt;
            &lt;label class=&quot;sr-only&quot; for=&quot;inlineFormInputGroup&quot;&gt;Username&lt;/label&gt;
            &lt;div class=&quot;input-group mb-2&quot;&gt;
                &lt;div class=&quot;input-group-text&quot;&gt;@&lt;/div&gt;
                &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inlineFormInputGroup&quot; placeholder=&quot;Username&quot; /&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-auto&quot;&gt;
            &lt;div class=&quot;form-check mb-2 ps-0&quot;&gt;
                &lt;div class=&quot;custom-control custom-checkbox checkbox-primary&quot;&gt;
                    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;autoSizingCheck&quot; /&gt;
                    &lt;label class=&quot;custom-control-label&quot; for=&quot;autoSizingCheck&quot;&gt;Remember me&lt;/label&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-auto&quot;&gt;
            &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
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

                <div id="flActionButtons" class="col-lg-12">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Actions Buttons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form class="form-vertical" action="#">
                                <div class="form-group">
                                    <label class="control-label">First Name:</label>
                                    <input type="text" name="first_name" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Email:</label>
                                    <div class="input-group">
                                        <div class="input-group-text">@</div>
                                        <input type="text" name="email" class="form-control" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Website:</label>
                                    <input type="text" name="website" value="https://" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Password:</label>
                                    <div class="input-group">
                                        <input type="password" name="pass" class="form-control" />
                                        <span class="input-group-addon"><i class="icon-user"></i></span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Confirm Password:</label>
                                    <div class="input-group">
                                        <input type="password" name="cpass" class="form-control" />
                                        <span class="input-group-addon"><i class="icon-user"></i></span>
                                    </div>
                                </div>
                                <input type="submit" value="Submit" class="btn btn-primary mt-3" />
                            </form>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></button>
                                <div v-if="code_arr.includes('code8')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Actions buttons --&gt;
&lt;form class=&quot;form-vertical&quot; action=&quot;#&quot;&gt;
    &lt;div class=&quot;form-group&quot;&gt;
        &lt;label class=&quot;control-label&quot;&gt;First Name:&lt;/label&gt;
        &lt;input type=&quot;text&quot; name=&quot;first_name&quot; class=&quot;form-control&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group&quot;&gt;
        &lt;label class=&quot;control-label&quot;&gt;Email:&lt;/label&gt;
        &lt;div class=&quot;input-group&quot;&gt;
            &lt;div class=&quot;input-group-text&quot;&gt;@&lt;/div&gt;
            &lt;input type=&quot;text&quot; name=&quot;email&quot; class=&quot;form-control&quot; /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group&quot;&gt;
        &lt;label class=&quot;control-label&quot;&gt;Website:&lt;/label&gt;
        &lt;input type=&quot;text&quot; name=&quot;website&quot; value=&quot;https://&quot; class=&quot;form-control&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group&quot;&gt;
        &lt;label class=&quot;control-label&quot;&gt;Password:&lt;/label&gt;
        &lt;div class=&quot;input-group&quot;&gt;
            &lt;input type=&quot;password&quot; name=&quot;pass&quot; class=&quot;form-control&quot; /&gt;
            &lt;span class=&quot;input-group-addon&quot;&gt;&lt;i class=&quot;icon-user&quot;&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group&quot;&gt;
        &lt;label class=&quot;control-label&quot;&gt;Confirm Password:&lt;/label&gt;
        &lt;div class=&quot;input-group&quot;&gt;
            &lt;input type=&quot;password&quot; name=&quot;cpass&quot; class=&quot;form-control&quot; /&gt;
            &lt;span class=&quot;input-group-addon&quot;&gt;&lt;i class=&quot;icon-user&quot;&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;input type=&quot;submit&quot; value=&quot;Submit&quot; class=&quot;btn btn-primary mt-3&quot; /&gt;
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
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import "../../assets/sass/scrollspyNav.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Form Layouts" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
