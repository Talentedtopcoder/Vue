<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Cards</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#card_1" class="nav-link">Card 1</a>
                    <a href="#card_2" class="nav-link">Card 2</a>
                    <a href="#card_3" class="nav-link">Card 3</a>
                    <a href="#card_4" class="nav-link">Card 4</a>
                    <a href="#card_5" class="nav-link">Card 5</a>
                    <a href="#card_6" class="nav-link">Card 6</a>
                    <a href="#card_7" class="nav-link">Card 7</a>
                    <a href="#card_8" class="nav-link">Card 8</a>
                    <a href="#card_9" class="nav-link">Card 9</a>
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
                        <a target="_blank" href="https://getbootstrap.com/docs/5.0/components/card" class="text-info"> https://getbootstrap.com/docs/5.0/components/card </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row">
                <div id="card_1" class="col-lg-12 layout-spacing layout-top-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Card 1</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="card component-card_1">
                                <div class="card-body">
                                    <div class="icon-svg">
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
                                            class="feather feather-droplet"
                                        >
                                            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                                        </svg>
                                    </div>
                                    <h5 class="card-title">Simple</h5>
                                    <p class="card-text">Mauris nisi felis, placerat in volutpat id, varius et sapien.</p>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;card component-card_1&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
        &lt;div class=&quot;icon-svg&quot;&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
        &lt;/div&gt;
        &lt;h5 class=&quot;card-title&quot;&gt;Simple&lt;/h5&gt;
        &lt;p class=&quot;card-text&quot;&gt;Mauris nisi felis, placerat in volutpat id, varius et sapien.&lt;/p&gt;
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

                <div id="card_2" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Card 2</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="card component-card_2">
                                <img src="/assets/images/grid-blog-style-3.jpg" class="card-img-top" alt="widget-card-2" />
                                <div class="card-body">
                                    <h5 class="card-title">CLI Based</h5>
                                    <p class="card-text">Etiam sed augue ac justo tincidunt posuere. Vivamus euismod eros, nec risus malesuada.</p>
                                    <a href="#" class="btn btn-primary">Explore More</a>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;card component-card_2&quot;&gt;
    &lt;img src=&quot;/assets/images/grid-blog-style-3.jpg&quot; class=&quot;card-img-top&quot; alt=&quot;widget-card-2&quot; /&gt;
    &lt;div class=&quot;card-body&quot;&gt;
        &lt;h5 class=&quot;card-title&quot;&gt;CLI Based&lt;/h5&gt;
        &lt;p class=&quot;card-text&quot;&gt;Etiam sed augue ac justo tincidunt posuere. Vivamus euismod eros, nec risus malesuada.&lt;/p&gt;
        &lt;a href=&quot;#&quot; class=&quot;btn btn-primary&quot;&gt;Explore More&lt;/a&gt;
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

                <div id="card_3" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Card 3</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="card component-card_3">
                                <div class="card-body">
                                    <img src="/assets/images/profile-7.jpeg" class="card-img-top" alt="..." />
                                    <h5 class="card-user_name">Luke Ivory</h5>
                                    <p class="card-user_occupation">Manager</p>
                                    <div class="card-star_rating">
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
                                            class="feather feather-star fill"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
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
                                            class="feather feather-star fill"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
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
                                            class="feather feather-star fill"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
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
                                            class="feather feather-star fill"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
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
                                            class="feather feather-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    </div>
                                    <p class="card-text">Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta placerat. Vestibulum in ultricies.</p>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;card component-card_3&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
        &lt;img src=&quot;/assets/images/profile-7.jpeg&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot; /&gt;
        &lt;h5 class=&quot;card-user_name&quot;&gt;Luke Ivory&lt;/h5&gt;
        &lt;p class=&quot;card-user_occupation&quot;&gt;Manager&lt;/p&gt;
        &lt;div class=&quot;card-star_rating&quot;&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
        &lt;/div&gt;
        &lt;p class=&quot;card-text&quot;&gt;Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta placerat. Vestibulum in ultricies.&lt;/p&gt;
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

                <div id="card_4" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Card 4</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="card component-card_4">
                                <div class="card-body">
                                    <div class="user-profile">
                                        <img src="/assets/images/profile-7.jpeg" class="" alt="..." />
                                    </div>
                                    <div class="user-info">
                                        <h5 class="card-user_name">Luke Ivory</h5>
                                        <p class="card-user_occupation">Manager</p>
                                        <div class="card-star_rating">
                                            <span class="badge badge-primary">4.5</span>
                                        </div>
                                        <p class="card-text">Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta placerat. Vestibulum in ultricies.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;card component-card_4&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
        &lt;div class=&quot;user-profile&quot;&gt;
            &lt;img src=&quot;/assets/images/profile-7.jpeg&quot; class=&quot;&quot; alt=&quot;...&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;user-info&quot;&gt;
            &lt;h5 class=&quot;card-user_name&quot;&gt;Luke Ivory&lt;/h5&gt;
            &lt;p class=&quot;card-user_occupation&quot;&gt;Manager&lt;/p&gt;
            &lt;div class=&quot;card-star_rating&quot;&gt;
                &lt;span class=&quot;badge badge-primary&quot;&gt;4.5&lt;/span&gt;
            &lt;/div&gt;
            &lt;p class=&quot;card-text&quot;&gt;Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta placerat. Vestibulum in ultricies.&lt;/p&gt;
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

                <div id="card_5" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Card 5</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="card component-card_5">
                                <div class="card-body">
                                    <p class="card-text">Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta placerat. Vestibulum in ultricies.</p>
                                    <div class="user-info">
                                        <img src="/assets/images/profile-7.jpeg" class="card-img-top" alt="..." />
                                        <div class="media-body">
                                            <h5 class="card-user_name">Luke Ivory</h5>
                                            <p class="card-user_occupation">Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;card component-card_5&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
        &lt;p class=&quot;card-text&quot;&gt;Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta placerat. Vestibulum in ultricies.&lt;/p&gt;
        &lt;div class=&quot;user-info&quot;&gt;
            &lt;img src=&quot;/assets/images/profile-7.jpeg&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot; /&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;card-user_name&quot;&gt;Luke Ivory&lt;/h5&gt;
                &lt;p class=&quot;card-user_occupation&quot;&gt;Manager&lt;/p&gt;
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

                <div id="card_6" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Card 6</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="card component-card_6">
                                <div class="card-body">
                                    <p class="card-text">Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta placerat. Vestibulum in ultricies.</p>
                                    <div class="user-info">
                                        <div class="media-body">
                                            <h5 class="card-user_name">Luke Ivory</h5>
                                            <p class="card-user_occupation">Manager</p>
                                        </div>
                                    </div>
                                    <div class="card-star_rating">
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
                                            class="feather feather-star fill"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
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
                                            class="feather feather-star fill"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
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
                                            class="feather feather-star fill"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
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
                                            class="feather feather-star fill"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
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
                                            class="feather feather-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;card component-card_6&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
        &lt;p class=&quot;card-text&quot;&gt;Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta placerat. Vestibulum in ultricies.&lt;/p&gt;
        &lt;div class=&quot;user-info&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;card-user_name&quot;&gt;Luke Ivory&lt;/h5&gt;
                &lt;p class=&quot;card-user_occupation&quot;&gt;Manager&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;card-star_rating&quot;&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
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

                <div id="card_7" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Card 7</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="card component-card_7">
                                <div class="card-body">
                                    <h5 class="card-text">Rating</h5>
                                    <h6 class="rating-count">(4.3)</h6>
                                    <div class="rating-stars">
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
                                            class="feather feather-star fill"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
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
                                            class="feather feather-star fill"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
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
                                            class="feather feather-star fill"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
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
                                            class="feather feather-star fill"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
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
                                            class="feather feather-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="r-rating-num">(94)</span>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code7')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;card component-card_7&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
        &lt;h5 class=&quot;card-text&quot;&gt;Rating&lt;/h5&gt;
        &lt;h6 class=&quot;rating-count&quot;&gt;(4.3)&lt;/h6&gt;
        &lt;div class=&quot;rating-stars&quot;&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
            &lt;svg&gt; ... &lt;/svg&gt;
            &lt;span class=&quot;r-rating-num&quot;&gt;(94)&lt;/span&gt;
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

                <div id="card_8" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Card 8</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="card component-card_8">
                                <div class="card-body">
                                    <div class="progress-order">
                                        <div class="progress-order-header">
                                            <div class="row">
                                                <div class="col-md-6 col-sm-6 col-12">
                                                    <h6>Placed Order</h6>
                                                </div>
                                                <div class="col-md-6 ps-0 col-sm-6 col-12 text-end">
                                                    <span class="badge badge-info">IN PROGRESS</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="progress-order-body">
                                            <div class="row mt-4">
                                                <div class="col-md-12">
                                                    <ul class="list-inline badge-collapsed-img mb-0 mb-3">
                                                        <li class="list-inline-item chat-online-usr">
                                                            <img alt="avatar" src="/assets/images/profile-2.jpeg" class="ms-0" />
                                                        </li>
                                                        <li class="list-inline-item chat-online-usr">
                                                            <img alt="avatar" src="/assets/images/profile-3.jpeg" />
                                                        </li>
                                                        <li class="list-inline-item chat-online-usr">
                                                            <img alt="avatar" src="/assets/images/profile-4.jpeg" />
                                                        </li>
                                                        <li class="list-inline-item chat-online-usr">
                                                            <img alt="avatar" src="/assets/images/profile-5.jpeg" />
                                                        </li>
                                                        <li class="list-inline-item badge-notify me-0">
                                                            <div class="notification">
                                                                <span class="badge badge-info rounded-pill">+5 more</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-12 text-end">
                                                    <span class="p-o-percentage me-4">60%</span>
                                                    <div class="progress p-o-progress mt-2">
                                                        <div class="progress-bar bg-primary" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code8')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;card component-card_8&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
        &lt;div class=&quot;progress-order&quot;&gt;
            &lt;div class=&quot;progress-order-header&quot;&gt;
                &lt;div class=&quot;row&quot;&gt;
                    &lt;div class=&quot;col-md-6 col-sm-6 col-12&quot;&gt;
                        &lt;h6&gt;Placed Order&lt;/h6&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;col-md-6 ps-0 col-sm-6 col-12 text-end&quot;&gt;
                        &lt;span class=&quot;badge badge-info&quot;&gt;IN PROGRESS&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div class=&quot;progress-order-body&quot;&gt;
                &lt;div class=&quot;row mt-4&quot;&gt;
                    &lt;div class=&quot;col-md-12&quot;&gt;
                        &lt;ul class=&quot;list-inline badge-collapsed-img mb-0 mb-3&quot;&gt;
                            &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-2.jpeg&quot; class=&quot;ms-0&quot; /&gt;
                            &lt;/li&gt;
                            &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-3.jpeg&quot; /&gt;
                            &lt;/li&gt;
                            &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-4.jpeg&quot; /&gt;
                            &lt;/li&gt;
                            &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-5.jpeg&quot; /&gt;
                            &lt;/li&gt;
                            &lt;li class=&quot;list-inline-item badge-notify me-0&quot;&gt;
                                &lt;div class=&quot;notification&quot;&gt;
                                    &lt;span class=&quot;badge badge-info rounded-pill&quot;&gt;+5 more&lt;/span&gt;
                                &lt;/div&gt;
                            &lt;/li&gt;
                        &lt;/ul&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;col-md-12 text-end&quot;&gt;
                        &lt;span class=&quot;p-o-percentage me-4&quot;&gt;60%&lt;/span&gt;
                        &lt;div class=&quot;progress p-o-progress mt-2&quot;&gt;
                            &lt;div class=&quot;progress-bar bg-primary&quot; role=&quot;progressbar&quot; style=&quot;width: 60%&quot; aria-valuenow=&quot;60&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
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

                <div id="card_9" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Card 9</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="card component-card_9">
                                <img src="/assets/images/grid-blog-style-3.jpg" class="card-img-top" alt="widget-card-2" />
                                <div class="card-body">
                                    <p class="meta-date">25 Sep 2020</p>

                                    <h5 class="card-title">How to Start a Blog in 5 Easy Steps.</h5>
                                    <p class="card-text">Vestibulum vestibulum tortor ut eros tincidunt, ut rutrum elit volutpat.</p>

                                    <div class="meta-info">
                                        <div class="meta-user">
                                            <div class="avatar avatar-sm">
                                                <span class="avatar-title rounded-circle">AG</span>
                                            </div>
                                            <div class="user-name">Luke Ivory</div>
                                        </div>

                                        <div class="meta-action">
                                            <div class="meta-likes">
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
                                                    class="feather feather-heart"
                                                >
                                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                </svg>
                                                51
                                            </div>

                                            <div class="meta-view">
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
                                                    class="feather feather-eye"
                                                >
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                                250
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn-default toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code9')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;card component-card_9&quot;&gt;
    &lt;img src=&quot;/assets/images/grid-blog-style-3.jpg&quot; class=&quot;card-img-top&quot; alt=&quot;widget-card-2&quot; /&gt;
    &lt;div class=&quot;card-body&quot;&gt;
        &lt;p class=&quot;meta-date&quot;&gt;25 Sep 2020&lt;/p&gt;

        &lt;h5 class=&quot;card-title&quot;&gt;How to Start a Blog in 5 Easy Steps.&lt;/h5&gt;
        &lt;p class=&quot;card-text&quot;&gt;Vestibulum vestibulum tortor ut eros tincidunt, ut rutrum elit volutpat.&lt;/p&gt;

        &lt;div class=&quot;meta-info&quot;&gt;
            &lt;div class=&quot;meta-user&quot;&gt;
                &lt;div class=&quot;avatar avatar-sm&quot;&gt;
                    &lt;span class=&quot;avatar-title rounded-circle&quot;&gt;AG&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class=&quot;user-name&quot;&gt;Luke Ivory&lt;/div&gt;
            &lt;/div&gt;

            &lt;div class=&quot;meta-action&quot;&gt;
                &lt;div class=&quot;meta-likes&quot;&gt;
                    &lt;svg&gt; ... &lt;/svg&gt;
                    51
                &lt;/div&gt;

                &lt;div class=&quot;meta-view&quot;&gt;
                    &lt;svg&gt; ... &lt;/svg&gt;
                    250
                &lt;/div&gt;
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
    import "../../assets/sass/components/cards/card.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Cards" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
