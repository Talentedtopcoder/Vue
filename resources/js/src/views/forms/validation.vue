<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Validation</span></li>
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
                    <a href="#email" class="nav-link">Email</a>
                    <a href="#select" class="nav-link">Select</a>
                    <a href="#custom_styles" class="nav-link">Custom Styles</a>
                    <a href="#browser_default" class="nav-link">Browser Default</a>
                    <a href="#tooltips" class="nav-link">Tooltips</a>
                </div>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        Documentation: <a target="_blank" href="https://getbootstrap.com/docs/5.0/forms/validation" class="text-info"> https://getbootstrap.com/docs/5.0/forms/validation </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="basic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form novalidate class="simple-example" @submit.stop.prevent="submit_form1">
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label for="fullName">Full Name</label>
                                        <input v-model="form1.name" id="fullName" type="text" class="form-control" :class="[is_submit_form1 ? (form1.name ? 'is-valid' : 'is-invalid') : '']" />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please fill the name</div>
                                    </div>
                                </div>
                                <button type="submit" class="btn mt-2 btn-primary">Submit form</button>
                            </form>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>
                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Basic --&gt;
&lt;form novalidate class=&quot;simple-example&quot; @submit.stop.prevent=&quot;submit_form1&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-md-12 form-group&quot;&gt;
            &lt;label for=&quot;fullName&quot;&gt;Full Name&lt;/label&gt;
            &lt;input v-model=&quot;form1.name&quot; id=&quot;fullName&quot; type=&quot;text&quot; class=&quot;form-control&quot; :class=&quot;[is_submit_form1 ? (form1.name ? 'is-valid' : 'is-invalid') : '']&quot; /&gt;
            &lt;div class=&quot;valid-feedback&quot;&gt;Looks good!&lt;/div&gt;
            &lt;div class=&quot;invalid-feedback&quot;&gt;Please fill the name&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;button type=&quot;submit&quot; class=&quot;btn mt-2 btn-primary&quot;&gt;Submit form&lt;/button&gt;
&lt;/form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="email" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Email</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form class="email" novalidate @submit.stop.prevent="submit_form2">
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label for="e_mail">Email</label>
                                        <input v-model="form2.email" type="email" class="form-control" id="e_mail" :class="[is_submit_form2 ? (form2.email && email_validate(form2.email) ? 'is-valid' : 'is-invalid') : '']" />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please fill the Email</div>
                                    </div>
                                </div>
                                <button class="btn btn-primary form-group mt-2" type="submit">Submit form</button>
                            </form>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Email --&gt;
&lt;form class=&quot;email&quot; novalidate @submit.stop.prevent=&quot;submit_form2&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-md-12 form-group&quot;&gt;
            &lt;label for=&quot;e_mail&quot;&gt;Email&lt;/label&gt;
            &lt;input
                v-model=&quot;form2.email&quot;
                type=&quot;email&quot;
                class=&quot;form-control&quot;
                id=&quot;e_mail&quot;
                :class=&quot;[is_submit_form2 ? (form2.email &amp;&amp; email_validate(form2.email) ? 'is-valid' : 'is-invalid') : '']&quot;
            /&gt;
            &lt;div class=&quot;valid-feedback&quot;&gt;Looks good!&lt;/div&gt;
            &lt;div class=&quot;invalid-feedback&quot;&gt;Please fill the Email&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;button class=&quot;btn btn-primary form-group mt-2&quot; type=&quot;submit&quot;&gt;Submit form&lt;/button&gt;
&lt;/form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="select" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Select</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form class="select" novalidate @submit.stop.prevent="submit_form3">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div id="select_menu" class="form-group form-group">
                                            <select v-model="form3.select" class="form-select" :class="[is_submit_form3 ? (form3.select ? 'is-valid' : 'is-invalid') : '']">
                                                <option value="">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <div class="valid-feedback">Example valid custom select feedback</div>
                                            <div class="invalid-feedback">Please Select the field</div>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-primary mt-2" type="submit">Submit form</button>
                            </form>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Select --&gt;
&lt;form class=&quot;select&quot; novalidate @submit.stop.prevent=&quot;submit_form3&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-md-12&quot;&gt;
            &lt;div id=&quot;select_menu&quot; class=&quot;form-group form-group&quot;&gt;
                &lt;select v-model=&quot;form3.select&quot; class=&quot;form-select&quot; :class=&quot;[is_submit_form3 ? (form3.select ? 'is-valid' : 'is-invalid') : '']&quot;&gt;
                    &lt;option value=&quot;&quot;&gt;Open this select menu&lt;/option&gt;
                    &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
                    &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
                    &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
                &lt;/select&gt;
                &lt;div class=&quot;valid-feedback&quot;&gt;Example valid custom select feedback&lt;/div&gt;
                &lt;div class=&quot;invalid-feedback&quot;&gt;Please Select the field&lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;button class=&quot;btn btn-primary mt-2&quot; type=&quot;submit&quot;&gt;Submit form&lt;/button&gt;
&lt;/form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="custom_styles" class="col-lg-12 layout-spacing col-md-12">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Custom styles</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form class="needs-validation" novalidate @submit.stop.prevent="submit_form4">
                                <div class="row">
                                    <div class="col-md-4 form-group">
                                        <label for="validationCustom01">First name</label>
                                        <input type="text" v-model="form4.first_name" class="form-control" :class="[is_submit_form4 ? (form4.first_name ? 'is-valid' : 'is-invalid') : '']" id="validationCustom01" placeholder="First name" />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please fill the first name</div>
                                    </div>
                                    <div class="col-md-4 form-group">
                                        <label for="validationCustom02">Last name</label>
                                        <input type="text" v-model="form4.last_name" class="form-control" :class="[is_submit_form4 ? (form4.last_name ? 'is-valid' : 'is-invalid') : '']" id="validationCustom02" placeholder="Last name" />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please fill the last name</div>
                                    </div>
                                    <div class="col-md-4 form-group">
                                        <label for="validationCustomUsername">Username</label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                                            <input
                                                type="text"
                                                v-model="form4.username"
                                                class="form-control"
                                                :class="[is_submit_form4 ? (form4.username ? 'is-valid' : 'is-invalid') : '']"
                                                id="validationCustomUsername"
                                                placeholder="Username"
                                                aria-describedby="inputGroupPrepend"
                                            />
                                            <div class="valid-feedback">Looks good!</div>
                                            <div class="invalid-feedback">Please choose a username.</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <label for="validationCustom03">City</label>
                                        <input type="text" v-model="form4.city" class="form-control" :class="[is_submit_form4 ? (form4.city ? 'is-valid' : 'is-invalid') : '']" id="validationCustom03" placeholder="City" />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please provide a valid city.</div>
                                    </div>
                                    <div class="col-md-3 form-group">
                                        <label for="validationCustom04">State</label>
                                        <input type="text" v-model="form4.state" class="form-control" :class="[is_submit_form4 ? (form4.state ? 'is-valid' : 'is-invalid') : '']" id="validationCustom04" placeholder="State" />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please provide a valid state.</div>
                                    </div>
                                    <div class="col-md-3 form-group">
                                        <label for="validationCustom05">Zip</label>
                                        <input type="text" v-model="form4.zip" class="form-control" :class="[is_submit_form4 ? (form4.zip ? 'is-valid' : 'is-invalid') : '']" id="validationCustom05" placeholder="Zip" />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please provide a valid zip.</div>
                                    </div>
                                </div>
                                <div class="form-group form-group">
                                    <div class="form-check ps-0">
                                        <div class="custom-control custom-checkbox checkbox-success">
                                            <input type="checkbox" v-model="form4.is_terms" class="custom-control-input" :class="[is_submit_form4 ? (form4.is_terms ? 'is-valid' : 'is-invalid') : '']" id="invalidCheck" />
                                            <label class="custom-control-label" for="invalidCheck">Agree to terms and conditions</label>
                                            <div class="invalid-feedback">You must agree before submitting.</div>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-primary mt-3" type="submit">Submit form</button>
                            </form>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>
                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Custom --&gt;
&lt;form class=&quot;needs-validation&quot; novalidate @submit.stop.prevent=&quot;submit_form4&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-md-4 form-group&quot;&gt;
            &lt;label for=&quot;validationCustom01&quot;&gt;First name&lt;/label&gt;
            &lt;input
                type=&quot;text&quot;
                v-model=&quot;form4.first_name&quot;
                class=&quot;form-control&quot;
                :class=&quot;[is_submit_form4 ? (form4.first_name ? 'is-valid' : 'is-invalid') : '']&quot;
                id=&quot;validationCustom01&quot;
                placeholder=&quot;First name&quot;
            /&gt;
            &lt;div class=&quot;valid-feedback&quot;&gt;Looks good!&lt;/div&gt;
            &lt;div class=&quot;invalid-feedback&quot;&gt;Please fill the first name&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-4 form-group&quot;&gt;
            &lt;label for=&quot;validationCustom02&quot;&gt;Last name&lt;/label&gt;
            &lt;input
                type=&quot;text&quot;
                v-model=&quot;form4.last_name&quot;
                class=&quot;form-control&quot;
                :class=&quot;[is_submit_form4 ? (form4.last_name ? 'is-valid' : 'is-invalid') : '']&quot;
                id=&quot;validationCustom02&quot;
                placeholder=&quot;Last name&quot;
            /&gt;
            &lt;div class=&quot;valid-feedback&quot;&gt;Looks good!&lt;/div&gt;
            &lt;div class=&quot;invalid-feedback&quot;&gt;Please fill the last name&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-4 form-group&quot;&gt;
            &lt;label for=&quot;validationCustomUsername&quot;&gt;Username&lt;/label&gt;
            &lt;div class=&quot;input-group&quot;&gt;
                &lt;span class=&quot;input-group-text&quot; id=&quot;inputGroupPrepend&quot;&gt;@&lt;/span&gt;
                &lt;input
                    type=&quot;text&quot;
                    v-model=&quot;form4.username&quot;
                    class=&quot;form-control&quot;
                    :class=&quot;[is_submit_form4 ? (form4.username ? 'is-valid' : 'is-invalid') : '']&quot;
                    id=&quot;validationCustomUsername&quot;
                    placeholder=&quot;Username&quot;
                    aria-describedby=&quot;inputGroupPrepend&quot;
                /&gt;
                &lt;div class=&quot;valid-feedback&quot;&gt;Looks good!&lt;/div&gt;
                &lt;div class=&quot;invalid-feedback&quot;&gt;Please choose a username.&lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-md-6 form-group&quot;&gt;
            &lt;label for=&quot;validationCustom03&quot;&gt;City&lt;/label&gt;
            &lt;input
                type=&quot;text&quot;
                v-model=&quot;form4.city&quot;
                class=&quot;form-control&quot;
                :class=&quot;[is_submit_form4 ? (form4.city ? 'is-valid' : 'is-invalid') : '']&quot;
                id=&quot;validationCustom03&quot;
                placeholder=&quot;City&quot;
            /&gt;
            &lt;div class=&quot;valid-feedback&quot;&gt;Looks good!&lt;/div&gt;
            &lt;div class=&quot;invalid-feedback&quot;&gt;Please provide a valid city.&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-3 form-group&quot;&gt;
            &lt;label for=&quot;validationCustom04&quot;&gt;State&lt;/label&gt;
            &lt;input
                type=&quot;text&quot;
                v-model=&quot;form4.state&quot;
                class=&quot;form-control&quot;
                :class=&quot;[is_submit_form4 ? (form4.state ? 'is-valid' : 'is-invalid') : '']&quot;
                id=&quot;validationCustom04&quot;
                placeholder=&quot;State&quot;
            /&gt;
            &lt;div class=&quot;valid-feedback&quot;&gt;Looks good!&lt;/div&gt;
            &lt;div class=&quot;invalid-feedback&quot;&gt;Please provide a valid state.&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-3 form-group&quot;&gt;
            &lt;label for=&quot;validationCustom05&quot;&gt;Zip&lt;/label&gt;
            &lt;input
                type=&quot;text&quot;
                v-model=&quot;form4.zip&quot;
                class=&quot;form-control&quot;
                :class=&quot;[is_submit_form4 ? (form4.zip ? 'is-valid' : 'is-invalid') : '']&quot;
                id=&quot;validationCustom05&quot;
                placeholder=&quot;Zip&quot;
            /&gt;
            &lt;div class=&quot;valid-feedback&quot;&gt;Looks good!&lt;/div&gt;
            &lt;div class=&quot;invalid-feedback&quot;&gt;Please provide a valid zip.&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group form-group&quot;&gt;
        &lt;div class=&quot;form-check ps-0&quot;&gt;
            &lt;div class=&quot;custom-control custom-checkbox checkbox-success&quot;&gt;
                &lt;input
                    type=&quot;checkbox&quot;
                    v-model=&quot;form4.is_terms&quot;
                    class=&quot;custom-control-input&quot;
                    :class=&quot;[is_submit_form4 ? (form4.is_terms ? 'is-valid' : 'is-invalid') : '']&quot;
                    id=&quot;invalidCheck&quot;
                /&gt;
                &lt;label class=&quot;custom-control-label&quot; for=&quot;invalidCheck&quot;&gt;Agree to terms and conditions&lt;/label&gt;
                &lt;div class=&quot;invalid-feedback&quot;&gt;You must agree before submitting.&lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;button class=&quot;btn btn-primary mt-3&quot; type=&quot;submit&quot;&gt;Submit form&lt;/button&gt;
&lt;/form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="browser_default" class="col-lg-12 layout-spacing col-md-12">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Browser defaults</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form @submit.stop.prevent="submit_form5">
                                <div class="row">
                                    <div class="col-md-4 form-group">
                                        <label for="validationDefault01">First name</label>
                                        <input type="text" v-model="form5.first_name" class="form-control" id="validationDefault01" placeholder="First name" required />
                                    </div>
                                    <div class="col-md-4 form-group">
                                        <label for="validationDefault02">Last name</label>
                                        <input type="text" v-model="form5.last_name" class="form-control" id="validationDefault02" placeholder="Last name" required />
                                    </div>
                                    <div class="col-md-4 form-group">
                                        <label for="validationDefaultUsername">Username</label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="inputGroupPrepend2">@</span>
                                            <input type="text" v-model="form5.username" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <label for="validationDefault03">City</label>
                                        <input type="text" v-model="form5.city" class="form-control" id="validationDefault03" placeholder="City" required />
                                    </div>
                                    <div class="col-md-3 form-group">
                                        <label for="validationDefault04">State</label>
                                        <input type="text" v-model="form5.state" class="form-control" id="validationDefault04" placeholder="State" required />
                                    </div>
                                    <div class="col-md-3 form-group">
                                        <label for="validationDefault05">Zip</label>
                                        <input type="text" v-model="form5.zip" class="form-control" id="validationDefault05" placeholder="Zip" required />
                                    </div>
                                </div>
                                <div class="form-group form-group">
                                    <div class="custom-control custom-checkbox checkbox-primary">
                                        <input type="checkbox" v-model="form5.is_terms" class="custom-control-input" id="invalidCheck2" required />
                                        <label class="custom-control-label" for="invalidCheck2">Agree to terms and conditions</label>
                                        <div class="invalid-feedback">Agree to terms and conditions</div>
                                    </div>
                                </div>
                                <button class="btn btn-primary mt-3" type="submit">Submit form</button>
                            </form>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Browser defaults --&gt;
&lt;form @submit.stop.prevent=&quot;submit_form5&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-md-4 form-group&quot;&gt;
            &lt;label for=&quot;validationDefault01&quot;&gt;First name&lt;/label&gt;
            &lt;input type=&quot;text&quot; v-model=&quot;form5.first_name&quot; class=&quot;form-control&quot; id=&quot;validationDefault01&quot; placeholder=&quot;First name&quot; required /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-4 form-group&quot;&gt;
            &lt;label for=&quot;validationDefault02&quot;&gt;Last name&lt;/label&gt;
            &lt;input type=&quot;text&quot; v-model=&quot;form5.last_name&quot; class=&quot;form-control&quot; id=&quot;validationDefault02&quot; placeholder=&quot;Last name&quot; required /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-4 form-group&quot;&gt;
            &lt;label for=&quot;validationDefaultUsername&quot;&gt;Username&lt;/label&gt;
            &lt;div class=&quot;input-group&quot;&gt;
                &lt;span class=&quot;input-group-text&quot; id=&quot;inputGroupPrepend2&quot;&gt;@&lt;/span&gt;
                &lt;input
                    type=&quot;text&quot;
                    v-model=&quot;form5.username&quot;
                    class=&quot;form-control&quot;
                    id=&quot;validationDefaultUsername&quot;
                    placeholder=&quot;Username&quot;
                    aria-describedby=&quot;inputGroupPrepend2&quot;
                    required
                /&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-md-6 form-group&quot;&gt;
            &lt;label for=&quot;validationDefault03&quot;&gt;City&lt;/label&gt;
            &lt;input type=&quot;text&quot; v-model=&quot;form5.city&quot; class=&quot;form-control&quot; id=&quot;validationDefault03&quot; placeholder=&quot;City&quot; required /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-3 form-group&quot;&gt;
            &lt;label for=&quot;validationDefault04&quot;&gt;State&lt;/label&gt;
            &lt;input type=&quot;text&quot; v-model=&quot;form5.state&quot; class=&quot;form-control&quot; id=&quot;validationDefault04&quot; placeholder=&quot;State&quot; required /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-3 form-group&quot;&gt;
            &lt;label for=&quot;validationDefault05&quot;&gt;Zip&lt;/label&gt;
            &lt;input type=&quot;text&quot; v-model=&quot;form5.zip&quot; class=&quot;form-control&quot; id=&quot;validationDefault05&quot; placeholder=&quot;Zip&quot; required /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group form-group&quot;&gt;
        &lt;div class=&quot;custom-control custom-checkbox checkbox-primary&quot;&gt;
            &lt;input type=&quot;checkbox&quot; v-model=&quot;form5.is_terms&quot; class=&quot;custom-control-input&quot; id=&quot;invalidCheck2&quot; required /&gt;
            &lt;label class=&quot;custom-control-label&quot; for=&quot;invalidCheck2&quot;&gt;Agree to terms and conditions&lt;/label&gt;
            &lt;div class=&quot;invalid-feedback&quot;&gt;Agree to terms and conditions&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;button class=&quot;btn btn-primary mt-3&quot; type=&quot;submit&quot;&gt;Submit form&lt;/button&gt;
&lt;/form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tooltips" class="col-lg-12 layout-spacing col-md-12">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Tooltips</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form class="needs-validation" novalidate @submit.stop.prevent="submit_form6">
                                <div class="row">
                                    <div class="col-md-4 mb-5 position-relative">
                                        <label for="validationTooltip01">First name</label>
                                        <input type="text" v-model="form6.first_name" class="form-control" :class="[is_submit_form6 ? (form6.first_name ? 'is-valid' : 'is-invalid') : '']" id="validationTooltip01" placeholder="First name" />
                                        <div class="valid-tooltip">Looks good!</div>
                                        <div class="invalid-tooltip">Please fill the first name</div>
                                    </div>
                                    <div class="col-md-4 mb-5 position-relative">
                                        <label for="validationTooltip02">Last name</label>
                                        <input type="text" v-model="form6.last_name" class="form-control" :class="[is_submit_form6 ? (form6.last_name ? 'is-valid' : 'is-invalid') : '']" id="validationTooltip02" placeholder="Last name" />
                                        <div class="valid-tooltip">Looks good!</div>
                                        <div class="invalid-tooltip">Please fill the last name</div>
                                    </div>
                                    <div class="col-md-4 mb-5 position-relative">
                                        <label for="validationTooltipUsername">Username</label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                            <input
                                                type="text"
                                                v-model="form6.username"
                                                class="form-control"
                                                :class="[is_submit_form6 ? (form6.username ? 'is-valid' : 'is-invalid') : '']"
                                                id="validationTooltipUsername"
                                                placeholder="Username"
                                                aria-describedby="validationTooltipUsernamePrepend"
                                            />
                                            <div class="valid-tooltip">Looks good!</div>
                                            <div class="invalid-tooltip">Please choose a unique and valid username.</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-5 position-relative">
                                        <label for="validationTooltip03">City</label>
                                        <input type="text" v-model="form6.city" :class="[is_submit_form6 ? (form6.city ? 'is-valid' : 'is-invalid') : '']" class="form-control" id="validationTooltip03" placeholder="City" />
                                        <div class="valid-tooltip">Looks good!</div>
                                        <div class="invalid-tooltip">Please provide a valid city.</div>
                                    </div>
                                    <div class="col-md-3 mb-5 position-relative">
                                        <label for="validationTooltip04">State</label>
                                        <input type="text" v-model="form6.state" :class="[is_submit_form6 ? (form6.state ? 'is-valid' : 'is-invalid') : '']" class="form-control" id="validationTooltip04" placeholder="State" />
                                        <div class="valid-tooltip">Looks good!</div>
                                        <div class="invalid-tooltip">Please provide a valid state.</div>
                                    </div>
                                    <div class="col-md-3 mb-5 position-relative">
                                        <label for="validationTooltip05">Zip</label>
                                        <input type="text" v-model="form6.zip" :class="[is_submit_form6 ? (form6.zip ? 'is-valid' : 'is-invalid') : '']" class="form-control" id="validationTooltip05" placeholder="Zip" />
                                        <div class="valid-tooltip">Looks good!</div>
                                        <div class="invalid-tooltip">Please provide a valid zip.</div>
                                    </div>
                                </div>
                                <div class="form-group form-group position-relative">
                                    <div class="custom-control custom-checkbox checkbox-success">
                                        <input type="checkbox" v-model="form6.is_terms" class="custom-control-input" id="invalidCheck3" :class="[is_submit_form6 ? (form6.is_terms ? 'is-valid' : 'is-invalid') : '']" />
                                        <label class="custom-control-label" for="invalidCheck3">Agree to terms and conditions</label>
                                        <div class="invalid-tooltip">Agree to terms and conditions</div>
                                    </div>
                                </div>
                                <button class="btn btn-primary mt-2" type="submit">Submit form</button>
                            </form>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>
                                <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- tooltips --&gt;
&lt;form class=&quot;needs-validation&quot; novalidate @submit.stop.prevent=&quot;submit_form6&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-md-4 mb-5 position-relative&quot;&gt;
            &lt;label for=&quot;validationTooltip01&quot;&gt;First name&lt;/label&gt;
            &lt;input
                type=&quot;text&quot;
                v-model=&quot;form6.first_name&quot;
                class=&quot;form-control&quot;
                :class=&quot;[is_submit_form6 ? (form6.first_name ? 'is-valid' : 'is-invalid') : '']&quot;
                id=&quot;validationTooltip01&quot;
                placeholder=&quot;First name&quot;
            /&gt;
            &lt;div class=&quot;valid-tooltip&quot;&gt;Looks good!&lt;/div&gt;
            &lt;div class=&quot;invalid-tooltip&quot;&gt;Please fill the first name&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-4 mb-5 position-relative&quot;&gt;
            &lt;label for=&quot;validationTooltip02&quot;&gt;Last name&lt;/label&gt;
            &lt;input
                type=&quot;text&quot;
                v-model=&quot;form6.last_name&quot;
                class=&quot;form-control&quot;
                :class=&quot;[is_submit_form6 ? (form6.last_name ? 'is-valid' : 'is-invalid') : '']&quot;
                id=&quot;validationTooltip02&quot;
                placeholder=&quot;Last name&quot;
            /&gt;
            &lt;div class=&quot;valid-tooltip&quot;&gt;Looks good!&lt;/div&gt;
            &lt;div class=&quot;invalid-tooltip&quot;&gt;Please fill the last name&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-4 mb-5 position-relative&quot;&gt;
            &lt;label for=&quot;validationTooltipUsername&quot;&gt;Username&lt;/label&gt;
            &lt;div class=&quot;input-group&quot;&gt;
                &lt;span class=&quot;input-group-text&quot; id=&quot;validationTooltipUsernamePrepend&quot;&gt;@&lt;/span&gt;
                &lt;input
                    type=&quot;text&quot;
                    v-model=&quot;form6.username&quot;
                    class=&quot;form-control&quot;
                    :class=&quot;[is_submit_form6 ? (form6.username ? 'is-valid' : 'is-invalid') : '']&quot;
                    id=&quot;validationTooltipUsername&quot;
                    placeholder=&quot;Username&quot;
                    aria-describedby=&quot;validationTooltipUsernamePrepend&quot;
                /&gt;
                &lt;div class=&quot;valid-tooltip&quot;&gt;Looks good!&lt;/div&gt;
                &lt;div class=&quot;invalid-tooltip&quot;&gt;Please choose a unique and valid username.&lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-md-6 mb-5 position-relative&quot;&gt;
            &lt;label for=&quot;validationTooltip03&quot;&gt;City&lt;/label&gt;
            &lt;input
                type=&quot;text&quot;
                v-model=&quot;form6.city&quot;
                :class=&quot;[is_submit_form6 ? (form6.city ? 'is-valid' : 'is-invalid') : '']&quot;
                class=&quot;form-control&quot;
                id=&quot;validationTooltip03&quot;
                placeholder=&quot;City&quot;
            /&gt;
            &lt;div class=&quot;valid-tooltip&quot;&gt;Looks good!&lt;/div&gt;
            &lt;div class=&quot;invalid-tooltip&quot;&gt;Please provide a valid city.&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-3 mb-5 position-relative&quot;&gt;
            &lt;label for=&quot;validationTooltip04&quot;&gt;State&lt;/label&gt;
            &lt;input
                type=&quot;text&quot;
                v-model=&quot;form6.state&quot;
                :class=&quot;[is_submit_form6 ? (form6.state ? 'is-valid' : 'is-invalid') : '']&quot;
                class=&quot;form-control&quot;
                id=&quot;validationTooltip04&quot;
                placeholder=&quot;State&quot;
            /&gt;
            &lt;div class=&quot;valid-tooltip&quot;&gt;Looks good!&lt;/div&gt;
            &lt;div class=&quot;invalid-tooltip&quot;&gt;Please provide a valid state.&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-3 mb-5 position-relative&quot;&gt;
            &lt;label for=&quot;validationTooltip05&quot;&gt;Zip&lt;/label&gt;
            &lt;input
                type=&quot;text&quot;
                v-model=&quot;form6.zip&quot;
                :class=&quot;[is_submit_form6 ? (form6.zip ? 'is-valid' : 'is-invalid') : '']&quot;
                class=&quot;form-control&quot;
                id=&quot;validationTooltip05&quot;
                placeholder=&quot;Zip&quot;
            /&gt;
            &lt;div class=&quot;valid-tooltip&quot;&gt;Looks good!&lt;/div&gt;
            &lt;div class=&quot;invalid-tooltip&quot;&gt;Please provide a valid zip.&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group form-group position-relative&quot;&gt;
        &lt;div class=&quot;custom-control custom-checkbox checkbox-primary&quot;&gt;
            &lt;input
                type=&quot;checkbox&quot;
                v-model=&quot;form6.is_terms&quot;
                class=&quot;custom-control-input&quot;
                id=&quot;invalidCheck3&quot;
                :class=&quot;[is_submit_form6 ? (form6.is_terms ? 'is-valid' : 'is-invalid') : '']&quot;
            /&gt;
            &lt;label class=&quot;custom-control-label&quot; for=&quot;invalidCheck3&quot;&gt;Agree to terms and conditions&lt;/label&gt;
            &lt;div class=&quot;invalid-tooltip&quot;&gt;Agree to terms and conditions&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;button class=&quot;btn btn-primary mt-2&quot; type=&quot;submit&quot;&gt;Submit form&lt;/button&gt;
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
    useMeta({ title: "Form Validation" });

    const code_arr = ref([]);
    const form1 = ref({ name: "" });
    const is_submit_form1 = ref(false);
    const form2 = ref({ email: "" });
    const is_submit_form2 = ref(false);
    const form3 = ref({ select: "" });
    const is_submit_form3 = ref(false);
    const form4 = ref({ first_name: "Shaun", last_name: "Park", username: "", city: "", state: "", zip: "", is_terms: false });
    const is_submit_form4 = ref(false);
    const form5 = ref({ first_name: "Shaun", last_name: "Park", username: "", city: "", state: "", zip: "", is_terms: false });
    const is_submit_form5 = ref(false);
    const form6 = ref({ first_name: "Shaun", last_name: "Park", username: "", city: "", state: "", zip: "", is_terms: false });
    const is_submit_form6 = ref(false);

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
    const email_validate = (email) => {
        const regexp = /^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/;
        return regexp.test(email);
    };
    const submit_form1 = () => {
        is_submit_form1.value = true;
        if (form1.value.name) {
            //form validated success
            showMessage("Form submitted successfully.");
        }
    };
    const submit_form2 = () => {
        is_submit_form2.value = true;
        if (email_validate(form2.value.email)) {
            //form validated success
            showMessage("Form submitted successfully.");
        }
    };
    const submit_form3 = () => {
        is_submit_form3.value = true;
        if (form3.value.select) {
            //form validated success
            showMessage("Form submitted successfully.");
        }
    };
    const submit_form4 = () => {
        is_submit_form4.value = true;
        if (form4.value.first_name && form4.value.last_name && form4.value.username && form4.value.city && form4.value.state && form4.value.zip && form4.value.is_terms) {
            //form validated success
            showMessage("Form submitted successfully.");
        }
    };
    const submit_form5 = () => {
        is_submit_form5.value = true;
        if (form5.value.first_name && form5.value.last_name && form5.value.username && form5.value.city && form5.value.state && form5.value.zip && form5.value.is_terms) {
            //form validated success
            showMessage("Form submitted successfully.");
        }
    };
    const submit_form6 = () => {
        is_submit_form6.value = true;
        if (form6.value.first_name && form6.value.last_name && form6.value.username && form6.value.city && form6.value.state && form6.value.zip && form6.value.is_terms) {
            //form validated success
            showMessage("Form submitted successfully.");
        }
    };

    const showMessage = (msg = "", type = "success") => {
        const toast = window.Swal.mixin({ toast: true, position: "top", showConfirmButton: false, timer: 3000 });
        toast.fire({ icon: type, title: msg, padding: "10px 20px" });
    };
</script>
