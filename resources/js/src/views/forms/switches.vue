<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Switches</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#switch_icons" class="nav-link">Icons</a>
                    <a href="#switch_solid" class="nav-link">Solid</a>
                    <a href="#switch_outline" class="nav-link">Outline</a>
                </div>
            </div>

            <div v-scroll-spy>
                <div class="row layout-top-spacing">
                    <div id="switch_icons" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">Icons</h4>
                        </div>
                    </div>

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Default</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body text-center">
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-icons s-outline s-outline-default mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-icons s-outline s-outline-primary mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-icons s-outline s-outline-success mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-icons s-outline s-outline-warning mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-icons s-outline s-outline-danger mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-icons s-outline s-outline-secondary mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-icons s-outline s-outline-info mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-icons s-outline s-outline-dark mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Default --&gt;
&lt;label class=&quot;switch s-icons s-outline s-outline-default mb-4 me-2&quot;&gt;
    &lt;input type=&quot;checkbox&quot; checked /&gt;
    &lt;span class=&quot;slider&quot;&gt;&lt;/span&gt;
&lt;/label&gt;
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
                                        <h4>Rounded</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body text-center">
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-icons s-outline s-outline-default mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-icons s-outline s-outline-primary mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-icons s-outline s-outline-success mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-icons s-outline s-outline-warning mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-icons s-outline s-outline-danger mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-icons s-outline s-outline-secondary mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-icons s-outline s-outline-info mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-icons s-outline s-outline-dark mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Rounded --&gt;
&lt;label class=&quot;switch s-icons s-outline s-outline-default mb-4 me-2&quot;&gt;
    &lt;input type=&quot;checkbox&quot; checked /&gt;
    &lt;span class=&quot;slider round&quot;&gt;&lt;/span&gt;
&lt;/label&gt;
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
                    <div id="switch_solid" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">Solid</h4>
                        </div>
                    </div>

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Default</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body text-center">
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-default mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-primary mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-success mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-warning mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-danger mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-secondary mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-info mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-dark mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- solid default --&gt;
&lt;label class=&quot;switch s-default mb-4 me-2&quot;&gt;
    &lt;input type=&quot;checkbox&quot; checked /&gt;
    &lt;span class=&quot;slider&quot;&gt;&lt;/span&gt;
&lt;/label&gt;
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
                                        <h4>Rounded</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body text-center">
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-default mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-primary mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-success mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-warning mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-danger mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-secondary mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-info mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-dark mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- solid Rounded --&gt;
&lt;label class=&quot;switch s-default mb-4 me-2&quot;&gt;
    &lt;input type=&quot;checkbox&quot; checked /&gt;
    &lt;span class=&quot;slider round&quot;&gt;&lt;/span&gt;
&lt;/label&gt;
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
                    <div id="switch_outline" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">Outline</h4>
                        </div>
                    </div>

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Default</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body text-center">
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-outline s-outline-default mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-outline s-outline-primary mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-outline s-outline-success mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-outline s-outline-warning mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-outline s-outline-danger mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-outline s-outline-secondary mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-outline s-outline-info mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-outline s-outline-dark mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider"></span>
                                        </label>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Outline defaukt --&gt;
&lt;label class=&quot;switch s-outline s-outline-default mb-4 me-2&quot;&gt;
    &lt;input type=&quot;checkbox&quot; checked /&gt;
    &lt;span class=&quot;slider&quot;&gt;&lt;/span&gt;
&lt;/label&gt;
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
                                        <h4>Rounded</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body text-center">
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-outline s-outline-default mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-outline s-outline-primary mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-outline s-outline-success mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-outline s-outline-warning mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-outline s-outline-danger mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-outline s-outline-secondary mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-outline s-outline-info mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                                        <label class="switch s-outline s-outline-dark mb-4 me-2">
                                            <input type="checkbox" checked />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Outline defaukt --&gt;
&lt;label class=&quot;switch s-outline s-outline-default mb-4 me-2&quot;&gt;
    &lt;input type=&quot;checkbox&quot; checked /&gt;
    &lt;span class=&quot;slider round&quot;&gt;&lt;/span&gt;
&lt;/label&gt;
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
    import "../../assets/sass/forms/switches.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Switches" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
