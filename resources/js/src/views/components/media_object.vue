<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Media Object</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#mediaObjectSimple" class="nav-link">Simple</a>
                    <a href="#mediaObjectOrder" class="nav-link">Order</a>
                    <a href="#mediaObjectAlignment" class="nav-link">Alignment</a>
                    <a href="#mediaObjectList" class="nav-link">List</a>
                    <a href="#mediaObjectNesting" class="nav-link">Nesting</a>
                    <a href="#mediaObjectNotationText" class="nav-link">Notation Text</a>
                    <a href="#mediaObjectNotationIcon" class="nav-link">Notation Icon</a>
                    <a href="#mediaObjectBadge" class="nav-link">Badge</a>
                    <a href="#mediaObjectDropdown" class="nav-link">Dropdown</a>
                    <a href="#mediaObjectIcon" class="nav-link">Labels</a>
                    <a href="#mediaObjectCheckbox" class="nav-link">Checkbox</a>
                    <a href="#mediaObjectRadio" class="nav-link">Radio</a>
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
                        <a target="_blank" href="https://getbootstrap.com/docs/5.0/utilities/flex/?#media-object" class="text-info"> https://getbootstrap.com/docs/5.0/utilities/flex/?#media-object </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy>
                <div class="row layout-top-spacing">
                    <div id="mediaObjectSimple" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Simple</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="media">
                                    <div class="media-aside align-self-start">
                                        <img class="rounded" src="/assets/images/profile-4.jpeg" alt="pic1" />
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">Heading</h4>
                                        <p class="media-text">
                                            Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;media&quot;&gt;
    &lt;div class=&quot;media-aside align-self-start&quot;&gt;
        &lt;img class=&quot;rounded&quot; src=&quot;/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;media-body&quot;&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;
            Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum,
            rutrum neque eu, gravida neque.
        &lt;/p&gt;
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
                    <div id="mediaObjectOrder" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Order</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="media">
                                    <div class="media-body">
                                        <h4 class="media-heading">Heading</h4>
                                        <p class="media-text">
                                            Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus.
                                        </p>
                                    </div>
                                    <div class="media-aside media-aside-right align-self-start">
                                        <img class="rounded" src="/assets/images/profile-4.jpeg" alt="pic1" />
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;media&quot;&gt;
    &lt;div class=&quot;media-body&quot;&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;
            Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean
            dignissim sed ante eget dapibus.
        &lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;media-aside media-aside-right align-self-start&quot;&gt;
        &lt;img class=&quot;rounded&quot; src=&quot;/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot; /&gt;
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
                    <div id="mediaObjectAlignment" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Top-aligned media</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="media">
                                    <div class="media-aside align-self-start">
                                        <img class="rounded" src="/assets/images/profile-4.jpeg" alt="pic1" />
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">Heading</h4>
                                        <p class="media-text">
                                            Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus.Sed dapibus nulla elementum, rutrum neque eu, gravida neque.
                                            Pellentesque pellentesque sed magna vitae porttitor. Integer quis urna eget ligula commodo venenatis in et ligula.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;media&quot;&gt;
    &lt;div class=&quot;media-aside align-self-start&quot;&gt;
        &lt;img class=&quot;rounded&quot; src=&quot;/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;media-body&quot;&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;
            Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus.Sed dapibus nulla elementum,
            rutrum neque eu, gravida neque. Pellentesque pellentesque sed magna vitae porttitor. Integer quis urna eget ligula commodo venenatis in et ligula.
        &lt;/p&gt;
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
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Center-aligned media</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="media">
                                    <div class="media-aside align-self-center">
                                        <img class="rounded" src="/assets/images/profile-4.jpeg" alt="pic1" />
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">Heading</h4>
                                        <p class="media-text">
                                            Pellentesque pellentesque sed magna vitae porttitor. Integer quis urna eget ligula commodo venenatis in et ligula. Integer eget lorem sodales, sodales dui vel, mattis erat. Sed dapibus nulla
                                            elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;media&quot;&gt;
    &lt;div class=&quot;media-aside align-self-center&quot;&gt;
        &lt;img class=&quot;rounded&quot; src=&quot;/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;media-body&quot;&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;
            Pellentesque pellentesque sed magna vitae porttitor. Integer quis urna eget ligula commodo venenatis in et ligula. Integer eget lorem sodales, sodales dui
            vel, mattis erat. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id
            sollicitudin viverra.
        &lt;/p&gt;
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
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Bottom-aligned media</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="media">
                                    <div class="media-aside align-self-end">
                                        <img class="rounded" src="/assets/images/profile-4.jpeg" alt="pic1" />
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">Heading</h4>
                                        <p class="media-text">
                                            Pellentesque pellentesque sed magna vitae porttitor. Integer quis urna eget ligula commodo venenatis in et ligula. Integer eget lorem sodales, sodales dui vel, mattis erat. Sed dapibus nulla
                                            elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;media&quot;&gt;
    &lt;div class=&quot;media-aside align-self-end&quot;&gt;
        &lt;img class=&quot;rounded&quot; src=&quot;/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;media-body&quot;&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;
            Pellentesque pellentesque sed magna vitae porttitor. Integer quis urna eget ligula commodo venenatis in et ligula. Integer eget lorem sodales, sodales dui
            vel, mattis erat. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id
            sollicitudin viverra.
        &lt;/p&gt;
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
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Right Aligned</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body media-right-aligned">
                                <div class="media">
                                    <div class="media-body text-end">
                                        <h4 class="media-heading">Heading</h4>
                                        <p class="media-text">
                                            Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque.
                                        </p>
                                    </div>
                                    <div class="media-aside media-aside-right align-self-start">
                                        <img class="rounded" src="/assets/images/profile-4.jpeg" alt="pic1" />
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;media&quot;&gt;
    &lt;div class=&quot;media-body text-end&quot;&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;
            Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum,
            rutrum neque eu, gravida neque.
        &lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;media-aside media-aside-right align-self-start&quot;&gt;
        &lt;img class=&quot;rounded&quot; src=&quot;/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot; /&gt;
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
                    <div id="mediaObjectList" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Media list</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <ul class="nav list-unstyled">
                                    <li class="media">
                                        <div class="media-aside align-self-start">
                                            <img class="rounded" src="/assets/images/profile-3.jpeg" alt="pic1" />
                                        </div>
                                        <div class="media-body">
                                            <h4 class="media-heading">Heading</h4>
                                            <p class="media-text">
                                                Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus.
                                            </p>
                                        </div>
                                    </li>
                                    <li class="media">
                                        <div class="media-aside align-self-start">
                                            <img class="rounded" src="/assets/images/profile-4.jpeg" alt="pic1" />
                                        </div>
                                        <div class="media-body">
                                            <h4 class="media-heading">Heading</h4>
                                            <p class="media-text">
                                                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque.
                                            </p>
                                        </div>
                                    </li>
                                    <li class="media">
                                        <div class="media-aside align-self-start">
                                            <img class="rounded" src="/assets/images/profile-5.jpeg" alt="pic1" />
                                        </div>
                                        <div class="media-body">
                                            <h4 class="media-heading">Heading</h4>
                                            <p class="media-text">
                                                Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra.
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                                <div class="code-section-container show-code">
                                    <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code7')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;ul class=&quot;nav list-unstyled&quot;&gt;
    &lt;li class=&quot;media&quot;&gt;
        &lt;div class=&quot;media-aside align-self-start&quot;&gt;
            &lt;img class=&quot;rounded&quot; src=&quot;/assets/images/profile-3.jpeg&quot; alt=&quot;pic1&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;media-body&quot;&gt;
            &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
            &lt;p class=&quot;media-text&quot;&gt;
                Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra.
                Aenean dignissim sed ante eget dapibus.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/li&gt;
    &lt;li class=&quot;media&quot;&gt;
        &lt;div class=&quot;media-aside align-self-start&quot;&gt;
            &lt;img class=&quot;rounded&quot; src=&quot;/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;media-body&quot;&gt;
            &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
            &lt;p class=&quot;media-text&quot;&gt;
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla
                elementum, rutrum neque eu, gravida neque.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/li&gt;
    &lt;li class=&quot;media&quot;&gt;
        &lt;div class=&quot;media-aside align-self-start&quot;&gt;
            &lt;img class=&quot;rounded&quot; src=&quot;/assets/images/profile-5.jpeg&quot; alt=&quot;pic1&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;media-body&quot;&gt;
            &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
            &lt;p class=&quot;media-text&quot;&gt;
                Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris
                fermentum mi id sollicitudin viverra.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/li&gt;
&lt;/ul&gt;
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
                    <div id="mediaObjectNesting" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Nesting</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body nesting">
                                <div class="media">
                                    <div class="media-aside align-self-start"><img src="/assets/images/profile-3.jpeg" alt="pic1" class="meta-usr-img rounded" /></div>
                                    <div class="media-body">
                                        <h4 class="media-heading">Heading</h4>
                                        <p class="media-text">
                                            Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus.
                                        </p>
                                        <div class="media mt-4">
                                            <div class="media-aside align-self-start"><img src="/assets/images/profile-4.jpeg" alt="pic2" class="rounded" /></div>
                                            <div class="media-body">
                                                <h4 class="media-heading">Heading</h4>
                                                <p class="media-text">
                                                    Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code8')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;media&quot;&gt;
    &lt;div class=&quot;media-aside align-self-start&quot;&gt;&lt;img src=&quot;/assets/images/profile-3.jpeg&quot; alt=&quot;pic1&quot; class=&quot;meta-usr-img rounded&quot; /&gt;&lt;/div&gt;
    &lt;div class=&quot;media-body&quot;&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;
            Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean
            dignissim sed ante eget dapibus.
        &lt;/p&gt;
        &lt;div class=&quot;media mt-4&quot;&gt;
            &lt;div class=&quot;media-aside align-self-start&quot;&gt;&lt;img src=&quot;/assets/images/profile-4.jpeg&quot; alt=&quot;pic2&quot; class=&quot;rounded&quot; /&gt;&lt;/div&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
                &lt;p class=&quot;media-text&quot;&gt;
                    Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare.
                    Mauris fermentum mi id sollicitudin viverra.
                &lt;/p&gt;
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

                <div class="row">
                    <div id="mediaObjectNotationText" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Notation Text</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body notation-text">
                                <div class="media">
                                    <div class="media-aside align-self-start"><img src="/assets/images/profile-4.jpeg" alt="pic1" class="meta-usr-img rounded" /></div>
                                    <div class="media-body">
                                        <h4 class="media-heading">Heading</h4>
                                        <p class="media-text">
                                            Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque.
                                        </p>
                                        <div class="media-notation"><a href="javascript:void(0);"> Reply </a><a href="javascript:void(0);"> Edit </a><a href="javascript:void(0);"> Delete </a></div>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code9')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;media&quot;&gt;
    &lt;div class=&quot;media-aside align-self-start&quot;&gt;&lt;img src=&quot;/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot; class=&quot;meta-usr-img rounded&quot; /&gt;&lt;/div&gt;
    &lt;div class=&quot;media-body&quot;&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;
            Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum,
            rutrum neque eu, gravida neque.
        &lt;/p&gt;
        &lt;div class=&quot;media-notation&quot;&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt; Reply &lt;/a&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt; Edit &lt;/a&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt; Delete &lt;/a&gt;&lt;/div&gt;
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
                    <div id="mediaObjectNotationIcon" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Notation Text with Icon</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body notation-text-icon">
                                <div class="media">
                                    <div class="media-aside align-self-start">
                                        <img class="rounded" src="/assets/images/profile-4.jpeg" alt="pic1" />
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">Heading</h4>
                                        <p class="media-text">
                                            Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus.
                                        </p>
                                        <div class="media-notation">
                                            <a href="javascript:void(0);" class=""
                                                ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="feather feather-message-square"
                                                >
                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                </svg>
                                                Reply
                                            </a>
                                            <a href="javascript:void(0);" class=""
                                                ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="feather feather-edit-2"
                                                >
                                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                                </svg>
                                                Edit
                                            </a>
                                            <a href="javascript:void(0);" class=""
                                                ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="feather feather-trash-2"
                                                >
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code10')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code10')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;media&quot;&gt;
    &lt;div class=&quot;media-aside align-self-start&quot;&gt;
        &lt;img class=&quot;rounded&quot; src=&quot;/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;media-body&quot;&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;
            Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean
            dignissim sed ante eget dapibus.
        &lt;/p&gt;
        &lt;div class=&quot;media-notation&quot;&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Reply
            &lt;/a&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Edit
            &lt;/a&gt;
            &lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;
                &lt;svg&gt; ... &lt;/svg&gt;
                Delete
            &lt;/a&gt;
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

                <div class="row">
                    <div id="mediaObjectBadge" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Badge</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body m-o-label">
                                <div class="media">
                                    <div class="media-aside align-self-start">
                                        <img class="rounded" src="/assets/images/profile-4.jpeg" alt="pic1" />
                                    </div>

                                    <div class="media-body">
                                        <h4 class="media-heading"><span class="media-title"> Heading</span><span class="badge badge-primary">Web Designer</span></h4>
                                        <p class="media-text">
                                            Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code11')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code11')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;media&quot;&gt;
    &lt;div class=&quot;media-aside align-self-start&quot;&gt;
        &lt;img class=&quot;rounded&quot; src=&quot;/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot; /&gt;
    &lt;/div&gt;

    &lt;div class=&quot;media-body&quot;&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;&lt;span class=&quot;media-title&quot;&gt; Heading&lt;/span&gt;&lt;span class=&quot;badge badge-primary&quot;&gt;Web Designer&lt;/span&gt;&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;
            Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean
            dignissim sed ante eget dapibus.
        &lt;/p&gt;
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
                    <div id="mediaObjectDropdown" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Dropdown List</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body m-o-dropdown-list">
                                <div class="media">
                                    <div class="media-aside align-self-start">
                                        <img class="rounded" src="/assets/images/profile-4.jpeg" alt="pic1" />
                                    </div>

                                    <div class="media-body">
                                        <h4 class="media-heading">
                                            <span class="media-title"> Heading</span>
                                            <div class="nav dropdown-list">
                                                <div class="nav-item dropdown">
                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                                            class="feather feather-more-horizontal"
                                                        >
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="19" cy="12" r="1"></circle>
                                                            <circle cx="5" cy="12" r="1"></circle>
                                                        </svg>
                                                    </a>

                                                    <span class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
                                                        <a class="dropdown-item" href="javascript:void(0);"
                                                            ><span>Start chat</span>
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
                                                                class="feather feather-message-circle"
                                                            >
                                                                <path
                                                                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                                                                ></path>
                                                            </svg>
                                                        </a>
                                                        <a class="dropdown-item" href="javascript:void(0);"
                                                            ><span>Make a call</span>
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
                                                                class="feather feather-phone"
                                                            >
                                                                <path
                                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                                                ></path>
                                                            </svg>
                                                        </a>
                                                        <a class="dropdown-item" href="javascript:void(0);"
                                                            ><span>Statistics</span>
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
                                                                class="feather feather-bar-chart-2"
                                                            >
                                                                <line x1="18" y1="20" x2="18" y2="10"></line>
                                                                <line x1="12" y1="20" x2="12" y2="4"></line>
                                                                <line x1="6" y1="20" x2="6" y2="14"></line>
                                                            </svg>
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </h4>
                                        <p class="media-text">
                                            Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code12')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code12')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;media&quot;&gt;
    &lt;div class=&quot;media-aside align-self-start&quot;&gt;
        &lt;img class=&quot;rounded&quot; src=&quot;/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot; /&gt;
    &lt;/div&gt;

    &lt;div class=&quot;media-body&quot;&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;
            &lt;span class=&quot;media-title&quot;&gt; Heading&lt;/span&gt;
            &lt;div class=&quot;nav dropdown-list&quot;&gt;
                &lt;div class=&quot;nav-item dropdown&quot;&gt;
                    &lt;a href=&quot;javascript:void(0);&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
                        &lt;svg&gt; ... &lt;/svg&gt;
                    &lt;/a&gt;

                    &lt;span class=&quot;dropdown-menu dropdown-menu-end&quot; aria-labelledby=&quot;dropdownMenuButton2&quot;&gt;
                        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;
                            &lt;span&gt;Start chat&lt;/span&gt;
                            &lt;svg&gt; ... &lt;/svg&gt;
                            &lt;/a&gt;
                        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot; &gt;
                            &lt;span&gt;Make a call&lt;/span&gt;
                            &lt;svg&gt; ... &lt;/svg&gt;
                        &lt;/a&gt;
                        &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;
                            &lt;span&gt;Statistics&lt;/span&gt;
                            &lt;svg&gt; ... &lt;/svg&gt;
                        &lt;/a&gt;
                    &lt;/span&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;
            Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean
            dignissim sed ante eget dapibus.
        &lt;/p&gt;
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
                    <div id="mediaObjectIcon" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Labels</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body m-o-label-icon">
                                <div class="media">
                                    <div class="media-aside align-self-center">
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
                                            class="feather feather-x-circle label-icon label-danger"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                        </svg>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading"><span class="media-title"> Heading</span></h4>
                                        <p class="media-text">
                                            Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra.
                                        </p>
                                    </div>
                                </div>

                                <div class="media">
                                    <div class="media-aside align-self-center">
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
                                            class="feather feather-alert-triangle label-icon label-warning"
                                        >
                                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                            <line x1="12" y1="9" x2="12" y2="13"></line>
                                            <line x1="12" y1="17" x2="12" y2="17"></line>
                                        </svg>
                                    </div>
                                    <div class="media-body mb-2">
                                        <h4 class="media-heading"><span class="media-title"> Heading</span></h4>
                                        <p class="media-text">
                                            Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code13')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code13')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;media&quot;&gt;
    &lt;div class=&quot;media-aside align-self-center&quot;&gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/div&gt;
    &lt;div class=&quot;media-body&quot;&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;&lt;span class=&quot;media-title&quot;&gt; Heading&lt;/span&gt;&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;
            Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris
            fermentum mi id sollicitudin viverra.
        &lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;media&quot;&gt;
    &lt;div class=&quot;media-aside align-self-center&quot;&gt;
        &lt;svg&gt; ... &lt;/svg&gt;
    &lt;/div&gt;
    &lt;div class=&quot;media-body mb-2&quot;&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;&lt;span class=&quot;media-title&quot;&gt; Heading&lt;/span&gt;&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;
            Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum,
            rutrum neque eu, gravida neque.
        &lt;/p&gt;
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
                    <div id="mediaObjectCheckbox" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Checkbox</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body m-o-chkbox">
                                <div class="media">
                                    <div class="media-aside align-self-start">
                                        <div class="checkbox-dark custom-control custom-checkbox"><input type="checkbox" checked class="custom-control-input" id="chk1" /><label class="custom-control-label" for="chk1"></label></div>
                                    </div>

                                    <div class="media-body">
                                        <h4 class="media-heading"><span class="media-title"> Heading</span></h4>
                                        <p class="media-text">
                                            Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra.
                                        </p>
                                    </div>
                                </div>

                                <div class="media">
                                    <div class="media-aside align-self-start">
                                        <div class="checkbox-dark custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="chk2" /><label class="custom-control-label" for="chk2"></label></div>
                                    </div>

                                    <div class="media-body">
                                        <h4 class="media-heading"><span class="media-title"> Heading</span></h4>
                                        <p class="media-text">
                                            Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code14')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code14')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;media&quot;&gt;
    &lt;div class=&quot;media-aside align-self-start&quot;&gt;
        &lt;div class=&quot;checkbox-dark custom-control custom-checkbox&quot;&gt;
            &lt;input type=&quot;checkbox&quot; checked class=&quot;custom-control-input&quot; id=&quot;chk1&quot; /&gt;&lt;label class=&quot;custom-control-label&quot; for=&quot;chk1&quot;&gt;&lt;/label&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;media-body&quot;&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;&lt;span class=&quot;media-title&quot;&gt; Heading&lt;/span&gt;&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;
            Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris
            fermentum mi id sollicitudin viverra.
        &lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;media&quot;&gt;
    &lt;div class=&quot;media-aside align-self-start&quot;&gt;
        &lt;div class=&quot;checkbox-dark custom-control custom-checkbox&quot;&gt;
            &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;chk2&quot; /&gt;&lt;label class=&quot;custom-control-label&quot; for=&quot;chk2&quot;&gt;&lt;/label&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;media-body&quot;&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;&lt;span class=&quot;media-title&quot;&gt; Heading&lt;/span&gt;&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;
            Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum,
            rutrum neque eu, gravida neque.
        &lt;/p&gt;
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
                    <div id="mediaObjectRadio" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Radio</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body m-o-radio">
                                <div class="media">
                                    <div class="media-aside align-self-start">
                                        <div class="radio-classic radio-dark custom-control custom-radio">
                                            <input type="radio" checked name="custom-radio-1" class="custom-control-input" value="radio-1" id="rdo1" /><label class="custom-control-label" for="rdo1"></label>
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading"><span class="media-title"> Heading</span></h4>
                                        <p class="media-text">
                                            Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque.
                                        </p>
                                    </div>
                                </div>

                                <div class="media">
                                    <div class="media-aside align-self-start">
                                        <div class="radio-classic radio-dark custom-control custom-radio">
                                            <input type="radio" name="custom-radio-1" class="custom-control-input" value="radio-2" id="rdo2" /><label class="custom-control-label" for="rdo2"></label>
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading"><span class="media-title"> Heading</span></h4>
                                        <p class="media-text">
                                            Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra.
                                        </p>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code15')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code15')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;div class=&quot;media&quot;&gt;
    &lt;div class=&quot;media-aside align-self-start&quot;&gt;
        &lt;div class=&quot;radio-classic radio-dark custom-control custom-radio&quot;&gt;
            &lt;input type=&quot;radio&quot; checked name=&quot;custom-radio-1&quot; class=&quot;custom-control-input&quot; value=&quot;radio-1&quot; id=&quot;rdo1&quot; /&gt;&lt;label
                class=&quot;custom-control-label&quot;
                for=&quot;rdo1&quot;
            &gt;&lt;/label&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;media-body&quot;&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;&lt;span class=&quot;media-title&quot;&gt; Heading&lt;/span&gt;&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;
            Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum,
            rutrum neque eu, gravida neque.
        &lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;media&quot;&gt;
    &lt;div class=&quot;media-aside align-self-start&quot;&gt;
        &lt;div class=&quot;radio-classic radio-dark custom-control custom-radio&quot;&gt;
            &lt;input type=&quot;radio&quot; name=&quot;custom-radio-1&quot; class=&quot;custom-control-input&quot; value=&quot;radio-2&quot; id=&quot;rdo2&quot; /&gt;&lt;label class=&quot;custom-control-label&quot; for=&quot;rdo2&quot;&gt;&lt;/label&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;media-body&quot;&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;&lt;span class=&quot;media-title&quot;&gt; Heading&lt;/span&gt;&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;
            Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris
            fermentum mi id sollicitudin viverra.
        &lt;/p&gt;
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
    import { ref } from "vue";
    import "../../assets/sass/scrollspyNav.scss";
    import "../../assets/sass/components/custom-media_object.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Media Object" });

    const code_arr = ref([]);
    const chk_demo = ref(["checkbox-1"]);
    const rdo_demo = ref("radio-1");

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
