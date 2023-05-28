<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Wizards</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#wizards_pills" class="nav-link">Pills</a>
                    <a href="#wizards_circle" class="nav-link">Circle</a>
                    <a href="#wizards_square" class="nav-link">Square</a>
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
                        <a target="_blank" href="https://www.npmjs.com/package/vue3-form-wizard" class="text-info"> https://www.npmjs.com/package/vue3-form-wizard </a>
                    </div>
                </div>
            </div>

            <div class="layout-top-spacing" v-scroll-spy>
                <div class="row">
                    <div id="wizards_pills" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">Pills</h4>
                        </div>
                    </div>

                    <div class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Text Only</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form-wizard shape="tab" title="" subtitle="" class="pills text-only" color="#4361ee">
                                    <tab-content title="1 Home">
                                        <p>Try the keyboard navigation by clicking arrow left or right!</p>
                                    </tab-content>
                                    <tab-content title="2 About">
                                        <p>Wonderful transition effects.</p>
                                    </tab-content>
                                    <tab-content title="3 Success">
                                        <p>The next and previous buttons help you to navigate through your content.</p>
                                    </tab-content>
                                </form-wizard>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Text only --&gt;
&lt;form-wizard shape=&quot;tab&quot; title=&quot;&quot; subtitle=&quot;&quot; class=&quot;pills text-only&quot; color=&quot;#4361ee&quot;&gt;
    &lt;tab-content title=&quot;1 Home&quot;&gt;
        &lt;p&gt;Try the keyboard navigation by clicking arrow left or right!&lt;/p&gt;
    &lt;/tab-content&gt;
    &lt;tab-content title=&quot;2 About&quot;&gt;
        &lt;p&gt;Wonderful transition effects.&lt;/p&gt;
    &lt;/tab-content&gt;
    &lt;tab-content title=&quot;3 Success&quot;&gt;
        &lt;p&gt;The next and previous buttons help you to navigate through your content.&lt;/p&gt;
    &lt;/tab-content&gt;
&lt;/form-wizard&gt;
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
                                        <h4>Icon Only</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form-wizard shape="tab" title="" subtitle="" class="pills" color="#4361ee">
                                    <tab-content title="" icon="far fa-list-alt">
                                        <p>Try the keyboard navigation by clicking arrow left or right!</p>
                                    </tab-content>
                                    <tab-content title="" icon="far fa-user">
                                        <p>Wonderful transition effects.</p>
                                    </tab-content>
                                    <tab-content title="" icon="far fa-thumbs-up">
                                        <p>The next and previous buttons help you to navigate through your content.</p>
                                    </tab-content>
                                </form-wizard>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Icon only --&gt;
&lt;form-wizard shape=&quot;tab&quot; title=&quot;&quot; subtitle=&quot;&quot; class=&quot;pills&quot; color=&quot;#4361ee&quot;&gt;
    &lt;tab-content title=&quot;&quot; icon=&quot;far fa-list-alt&quot;&gt;
        &lt;p&gt;Try the keyboard navigation by clicking arrow left or right!&lt;/p&gt;
    &lt;/tab-content&gt;
    &lt;tab-content title=&quot;&quot; icon=&quot;far fa-user&quot;&gt;
        &lt;p&gt;Wonderful transition effects.&lt;/p&gt;
    &lt;/tab-content&gt;
    &lt;tab-content title=&quot;&quot; icon=&quot;far fa-thumbs-up&quot;&gt;
        &lt;p&gt;The next and previous buttons help you to navigate through your content.&lt;/p&gt;
    &lt;/tab-content&gt;
&lt;/form-wizard&gt;
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
                                        <h4>Text & Icon</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form-wizard shape="tab" title="" subtitle="" class="pills" color="#4361ee">
                                    <tab-content title="Home" icon="far fa-list-alt">
                                        <p>Try the keyboard navigation by clicking arrow left or right!</p>
                                    </tab-content>
                                    <tab-content title="About" icon="far fa-user">
                                        <p>Wonderful transition effects.</p>
                                    </tab-content>
                                    <tab-content title="Success" icon="far fa-thumbs-up">
                                        <p>The next and previous buttons help you to navigate through your content.</p>
                                    </tab-content>
                                </form-wizard>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Text & Icon only --&gt;
&lt;form-wizard shape=&quot;tab&quot; title=&quot;&quot; subtitle=&quot;&quot; class=&quot;pills&quot; color=&quot;#4361ee&quot;&gt;
    &lt;tab-content title=&quot;Home&quot; icon=&quot;far fa-list-alt&quot;&gt;
        &lt;p&gt;Try the keyboard navigation by clicking arrow left or right!&lt;/p&gt;
    &lt;/tab-content&gt;
    &lt;tab-content title=&quot;About&quot; icon=&quot;far fa-user&quot;&gt;
        &lt;p&gt;Wonderful transition effects.&lt;/p&gt;
    &lt;/tab-content&gt;
    &lt;tab-content title=&quot;Success&quot; icon=&quot;far fa-thumbs-up&quot;&gt;
        &lt;p&gt;The next and previous buttons help you to navigate through your content.&lt;/p&gt;
    &lt;/tab-content&gt;
&lt;/form-wizard&gt;
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
                    <div id="wizards_circle" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">Circle</h4>
                        </div>
                    </div>

                    <div class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Icon Only</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form-wizard title="" subtitle="" class="circle" color="#4361ee">
                                    <tab-content title="" icon="far fa-list-alt">
                                        <p>Try the keyboard navigation by clicking arrow left or right!</p>
                                    </tab-content>
                                    <tab-content title="" icon="far fa-user">
                                        <p>Wonderful transition effects.</p>
                                    </tab-content>
                                    <tab-content title="" icon="far fa-thumbs-up">
                                        <p>The next and previous buttons help you to navigate through your content.</p>
                                    </tab-content>
                                </form-wizard>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Circle Icon only --&gt;
&lt;form-wizard title=&quot;&quot; subtitle=&quot;&quot; class=&quot;circle&quot; color=&quot;#4361ee&quot;&gt;
    &lt;tab-content title=&quot;&quot; icon=&quot;far fa-list-alt&quot;&gt;
        &lt;p&gt;Try the keyboard navigation by clicking arrow left or right!&lt;/p&gt;
    &lt;/tab-content&gt;
    &lt;tab-content title=&quot;&quot; icon=&quot;far fa-user&quot;&gt;
        &lt;p&gt;Wonderful transition effects.&lt;/p&gt;
    &lt;/tab-content&gt;
    &lt;tab-content title=&quot;&quot; icon=&quot;far fa-thumbs-up&quot;&gt;
        &lt;p&gt;The next and previous buttons help you to navigate through your content.&lt;/p&gt;
    &lt;/tab-content&gt;
&lt;/form-wizard&gt;
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
                                        <h4>Text & Icon</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form-wizard title="" subtitle="" class="circle" color="#4361ee">
                                    <tab-content title="Home" icon="far fa-list-alt">
                                        <p>Try the keyboard navigation by clicking arrow left or right!</p>
                                    </tab-content>
                                    <tab-content title="About" icon="far fa-user">
                                        <p>Wonderful transition effects.</p>
                                    </tab-content>
                                    <tab-content title="Success" icon="far fa-thumbs-up">
                                        <p>The next and previous buttons help you to navigate through your content.</p>
                                    </tab-content>
                                </form-wizard>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Text & Icon only --&gt;
&lt;form-wizard title=&quot;&quot; subtitle=&quot;&quot; class=&quot;circle&quot; color=&quot;#4361ee&quot;&gt;
    &lt;tab-content title=&quot;Home&quot; icon=&quot;far fa-list-alt&quot;&gt;
        &lt;p&gt;Try the keyboard navigation by clicking arrow left or right!&lt;/p&gt;
    &lt;/tab-content&gt;
    &lt;tab-content title=&quot;About&quot; icon=&quot;far fa-user&quot;&gt;
        &lt;p&gt;Wonderful transition effects.&lt;/p&gt;
    &lt;/tab-content&gt;
    &lt;tab-content title=&quot;Success&quot; icon=&quot;far fa-thumbs-up&quot;&gt;
        &lt;p&gt;The next and previous buttons help you to navigate through your content.&lt;/p&gt;
    &lt;/tab-content&gt;
&lt;/form-wizard&gt;
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
                    <div id="wizards_square" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">Square</h4>
                        </div>
                    </div>

                    <div class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Icon Only</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form-wizard shape="square" title="" subtitle="" class="square" color="#4361ee">
                                    <tab-content title="" icon="far fa-list-alt">
                                        <p>Try the keyboard navigation by clicking arrow left or right!</p>
                                    </tab-content>
                                    <tab-content title="" icon="far fa-user">
                                        <p>Wonderful transition effects.</p>
                                    </tab-content>
                                    <tab-content title="" icon="far fa-thumbs-up">
                                        <p>The next and previous buttons help you to navigate through your content.</p>
                                    </tab-content>
                                </form-wizard>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Icon only --&gt;
&lt;form-wizard shape=&quot;square&quot; title=&quot;&quot; subtitle=&quot;&quot; class=&quot;square&quot; color=&quot;#4361ee&quot;&gt;
    &lt;tab-content title=&quot;&quot; icon=&quot;far fa-list-alt&quot;&gt;
        &lt;p&gt;Try the keyboard navigation by clicking arrow left or right!&lt;/p&gt;
    &lt;/tab-content&gt;
    &lt;tab-content title=&quot;&quot; icon=&quot;far fa-user&quot;&gt;
        &lt;p&gt;Wonderful transition effects.&lt;/p&gt;
    &lt;/tab-content&gt;
    &lt;tab-content title=&quot;&quot; icon=&quot;far fa-thumbs-up&quot;&gt;
        &lt;p&gt;The next and previous buttons help you to navigate through your content.&lt;/p&gt;
    &lt;/tab-content&gt;
&lt;/form-wizard&gt;
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
                                        <h4>Text & Icon</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form-wizard shape="square" title="" subtitle="" class="square">
                                    <tab-content title="Home" icon="far fa-list-alt">
                                        <p>Try the keyboard navigation by clicking arrow left or right!</p>
                                    </tab-content>
                                    <tab-content title="About" icon="far fa-user">
                                        <p>Wonderful transition effects.</p>
                                    </tab-content>
                                    <tab-content title="Success" icon="far fa-thumbs-up">
                                        <p>The next and previous buttons help you to navigate through your content.</p>
                                    </tab-content>
                                </form-wizard>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code7')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Text & Icon only --&gt;
&lt;form-wizard shape=&quot;square&quot; title=&quot;&quot; subtitle=&quot;&quot; class=&quot;square&quot; color=&quot;#4361ee&quot;&gt;
    &lt;tab-content title=&quot;Home&quot; icon=&quot;far fa-list-alt&quot;&gt;
        &lt;p&gt;Try the keyboard navigation by clicking arrow left or right!&lt;/p&gt;
    &lt;/tab-content&gt;
    &lt;tab-content title=&quot;About&quot; icon=&quot;far fa-user&quot;&gt;
        &lt;p&gt;Wonderful transition effects.&lt;/p&gt;
    &lt;/tab-content&gt;
    &lt;tab-content title=&quot;Success&quot; icon=&quot;far fa-thumbs-up&quot;&gt;
        &lt;p&gt;The next and previous buttons help you to navigate through your content.&lt;/p&gt;
    &lt;/tab-content&gt;
&lt;/form-wizard&gt;
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
    .vue-form-wizard .navbar .navbar-nav > li > a.wizard-btn,
    .vue-form-wizard .wizard-btn {
        min-width: inherit;
    }
    .vue-form-wizard .navbar .navbar-nav > li > a.wizard-btn:hover,
    .vue-form-wizard .wizard-btn:hover {
        opacity: 0.8;
    }

    .vue-form-wizard.pills .wizard-nav li.active .wizard-icon-circle > div {
        border-radius: 20px;
    }
    .vue-form-wizard.pills.text-only .wizard-nav li .stepTitle {
        position: absolute;
        top: 9px;
        color: #3b3f5c !important;
    }
    .vue-form-wizard.pills.text-only .wizard-nav li .stepTitle.active {
        color: #fff !important;
    }
    .vue-form-wizard.pills.text-only .wizard-nav li .wizard-icon {
        display: none !important;
    }
    .vue-form-wizard .wizard-icon-circle.tab_shape {
        border-radius: 50px;
    }
    .vue-form-wizard.pills .wizard-navigation .wizard-progress-with-circle {
        height: 0px;
    }
</style>

<script setup>
    import { ref } from "vue";
    import "../../assets/sass/scrollspyNav.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import "../../assets/sass/font-icons/fontawesome/css/regular.css";
    import "../../assets/sass/font-icons/fontawesome/css/fontawesome.css";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Wizards" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
