<template>
    <div class="container select2">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Select2</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#fs2Basic" class="nav-link">Basic</a>
                    <a href="#fs2Nested" class="nav-link">Nested</a>
                    <a href="#fs2DisablingOptions" class="nav-link">Disabling Options</a>
                    <a href="#fs2Placeholder" class="nav-link">Placeholder</a>
                    <a href="#fs2Tagging" class="nav-link">Tagging</a>
                    <a href="#fs2LimitTagging" class="nav-link">Limit Tagging</a>
                </div>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        Documentation: <a target="_blank" href="https://www.npmjs.com/package/vue-multiselect" class="text-info"> https://www.npmjs.com/package/vue-multiselect </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="fs2Basic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <multiselect v-model="inputs['input1']" :options="options1" :searchable="true" :preselect-first="true" selected-label="" select-label="" deselect-label=""></multiselect>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- basic --&gt;
&lt;multiselect v-model=&quot;inputs['input1']&quot; :options=&quot;options1&quot; :searchable=&quot;true&quot; :preselect-first=&quot;true&quot; selected-label=&quot;&quot; select-label=&quot;&quot; deselect-label=&quot;&quot;&gt;&lt;/multiselect&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="fs2Nested" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Nested</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <multiselect
                                v-model="value"
                                :options="options2"
                                group-values="list"
                                group-label="group_name"
                                placeholder="Select Option"
                                track-by="name"
                                label="name"
                                :preselect-first="true"
                                selected-label=""
                                select-label=""
                                deselect-label=""
                            ></multiselect>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Nested --&gt;
&lt;multiselect v-model=&quot;value&quot; :options=&quot;options2&quot; group-values=&quot;list&quot; group-label=&quot;group_name&quot; placeholder=&quot;Select Option&quot; track-by=&quot;name&quot; label=&quot;name&quot; :preselect-first=&quot;true&quot; selected-label=&quot;&quot; select-label=&quot;&quot; deselect-label=&quot;&quot;&gt;&lt;/multiselect&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="fs2DisablingOptions" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Disabling options</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <multiselect v-model="inputs['input2']" :options="options3" :searchable="true" track-by="name" label="name" :preselect-first="true" selected-label="" select-label="" deselect-label=""></multiselect>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Disabling options --&gt;
&lt;multiselect v-model=&quot;inputs['input2']&quot; :options=&quot;options3&quot; :searchable=&quot;true&quot; track-by=&quot;name&quot; label=&quot;name&quot; :preselect-first=&quot;true&quot; selected-label=&quot;&quot; select-label=&quot;&quot; deselect-label=&quot;&quot;&gt;&lt;/multiselect&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="fs2Placeholder" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Placeholder</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <multiselect v-model="inputs['input3']" :options="options1" :searchable="true" placeholder="Choose..." selected-label="" select-label="" deselect-label=""></multiselect>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Placeholder --&gt;
&lt;multiselect v-model=&quot;inputs['input3']&quot; :options=&quot;options1&quot; :searchable=&quot;true&quot; placeholder=&quot;Choose...&quot; selected-label=&quot;&quot; select-label=&quot;&quot; deselect-label=&quot;&quot;&gt;&lt;/multiselect&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="fs2Tagging" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Tagging with multi-value select boxes</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <multiselect
                                v-model="inputs['input4']"
                                :options="options4"
                                :multiple="true"
                                :taggable="true"
                                :searchable="true"
                                placeholder="Choose..."
                                selected-label=""
                                select-label=""
                                deselect-label=""
                                @tag="addTag"
                            ></multiselect>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Tagging with multi-value select boxes --&gt;
&lt;multiselect v-model=&quot;inputs['input4']&quot; :options=&quot;options4&quot; :multiple=&quot;true&quot; :taggable=&quot;true&quot; :searchable=&quot;true&quot; placeholder=&quot;Choose...&quot; selected-label=&quot;&quot; select-label=&quot;&quot; deselect-label=&quot;&quot; @tag=&quot;addTag&quot;&gt;&lt;/multiselect&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="fs2LimitTagging" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Limiting the number of Tagging</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <multiselect
                                v-model="inputs['input5']"
                                :options="options5"
                                :multiple="true"
                                :max="2"
                                :taggable="true"
                                :searchable="true"
                                placeholder="Choose..."
                                selected-label=""
                                select-label=""
                                deselect-label=""
                                @tag="addTag1"
                            >
                                <template slot="maxElements"> Maximum selection limit is 2. </template>
                            </multiselect>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Limiting the number of Tagging --&gt;
&lt;multiselect v-model=&quot;inputs['input5']&quot; :options=&quot;options5&quot; :multiple=&quot;true&quot; :max=&quot;2&quot; :taggable=&quot;true&quot; :searchable=&quot;true&quot; placeholder=&quot;Choose...&quot; selected-label=&quot;&quot; select-label=&quot;&quot; deselect-label=&quot;&quot; @tag=&quot;addTag1&quot;&gt;
    &lt;template slot=&quot;maxElements&quot;&gt;
        Maximum selection limit is 2.
    &lt;/template&gt;
&lt;/multiselect&gt;
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
<style>
    .select2 .multiselect__option--highlight {
        background: #fff;
        color: #4361ee;
    }
    .select2 .multiselect__option--selected {
        background-color: rgba(27, 85, 226, 0.23921568627450981);
        color: #4361ee;
        font-weight: normal;
    }
    .select2 .multiselect__option--disabled {
        background: inherit !important;
    }
    .select2 .multiselect__tag {
        color: #000;
        background: #e4e4e4;
    }
    .select2 .multiselect__tag-icon:after {
        color: #000 !important;
    }
    .select2 .multiselect__tag-icon:focus,
    .select2 .multiselect__tag-icon:hover {
        background: inherit;
    }
</style>

<script setup>
    import { ref } from "vue";
    import "../../assets/sass/scrollspyNav.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import Multiselect from "@suadelabs/vue3-multiselect";
    import "@suadelabs/vue3-multiselect/dist/vue3-multiselect.css";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Vue Multiselect" });

    const code_arr = ref([]);
    const options1 = ref(["orange", "white", "purple"]);
    const inputs = ref({
        input1: [],
        input2: [],
        input3: [],
        input4: [],
        input5: [],
    });
    const options2 = ref([
        {
            group_name: "Group 1",
            list: [{ name: "orange" }, { name: "white" }, { name: "purple" }],
        },
        {
            group_name: "Group 2",
            list: [{ name: "red" }, { name: "green" }, { name: "yellow" }],
        },
        {
            group_name: "Group 3",
            list: [{ name: "aqua" }, { name: "black" }, { name: "blue" }],
        },
    ]);
    const options3 = ref([{ name: "orange" }, { name: "white", $isDisabled: true }, { name: "purple" }]);
    const value = ref({ name: "orange" });
    const options4 = ref(["orange", "white", "purple"]);
    const options5 = ref(["orange", "white", "purple"]);

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };

    const addTag = (newTag) => {
        options4.value.push(newTag);
        inputs.value["input4"].push(newTag);
    };

    const addTag1 = (tag) => {
        options5.value.push(newTag);
        inputs.value["input5"].push(newTag);
    };
</script>
