<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Jumbotron</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#jumbotronBasic" class="nav-link">Basic</a>
                    <a href="#jumbotronFluid" class="nav-link">Fluid</a>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="jumbotronBasic" class="col-xl-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Jumbotron</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="jumbotron">
                                        <h2 class="display-4 mb-5 mt-4 text-center">Hello, world!</h2>
                                        <p class="lead mt-3 mb-4">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                                        <hr class="my-4" />
                                        <p class="mb-5">It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                        <p class="lead">
                                            <button type="button" class="btn btn-dark">Learn more</button>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;jumbotron&quot;&gt;
    &lt;h2 class=&quot;display-4 mb-5 mt-4 text-center&quot;&gt;Hello, world!&lt;/h2&gt;
    &lt;p class=&quot;lead mt-3 mb-4&quot;&gt;This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.&lt;/p&gt;
    &lt;hr class=&quot;my-4&quot; /&gt;
    &lt;p class=&quot;mb-5&quot;&gt;It uses utility classes for typography and spacing to space content out within the larger container.&lt;/p&gt;
    &lt;p class=&quot;lead&quot;&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot;&gt;Learn more&lt;/button&gt;
    &lt;/p&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="jumbotronFluid" class="col-xl-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Jumbotron Fluid</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="jumbotron jumbotron-fluid">
                                        <div class="container">
                                            <h2 class="display-4 mb-5 mt-4 text-center">Fluid Jumbotron</h2>
                                            <p class="lead mt-3 mb-4">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                                            <br />
                                            <blockquote class="blockquote media-object">
                                                <div class="media">
                                                    <div class="media-aside align-self-start usr-img me-2">
                                                        <img class="rounded br-30" src="/assets/images/profile-16.jpeg" alt="pic1" />
                                                    </div>
                                                    <div class="media-body">
                                                        <p class="media-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                    </div>
                                                </div>
                                                <small class="text-end">Someone famous <cite title="Source Title">Source Title</cite></small>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;jumbotron jumbotron-fluid&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;h2 class=&quot;display-4 mb-5 mt-4 text-center&quot;&gt;Fluid Jumbotron&lt;/h2&gt;
        &lt;p class=&quot;lead mt-3 mb-4&quot;&gt;This is a modified jumbotron that occupies the entire horizontal space of its parent.&lt;/p&gt;
        &lt;br /&gt;
        &lt;blockquote class=&quot;blockquote media-object&quot;&gt;
            &lt;div class=&quot;media&quot;&gt;
                &lt;div class=&quot;media-aside align-self-start usr-img me-2&quot;&gt;
                    &lt;img class=&quot;rounded br-30&quot; src=&quot;/assets/images/profile-16.jpeg&quot; alt=&quot;pic1&quot; /&gt;
                &lt;/div&gt;
                &lt;div class=&quot;media-body&quot;&gt;
                    &lt;p class=&quot;media-text&quot;&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;small class=&quot;text-end&quot;&gt;Someone famous &lt;cite title=&quot;Source Title&quot;&gt;Source Title&lt;/cite&gt;&lt;/small&gt;
        &lt;/blockquote&gt;
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
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Jumbotron" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
