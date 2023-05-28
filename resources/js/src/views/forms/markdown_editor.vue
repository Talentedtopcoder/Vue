<template>
    <div class="container markdown">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Markdown Editor</span></li>
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
                    <a href="#autosaving" class="nav-link">Autosaving</a>
                </div>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        Documentation: <a target="_blank" href="https://www.npmjs.com/package/vue-easymde" class="text-info"> https://www.npmjs.com/package/vue-easymde </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy>
                <div id="basic" class="row layout-spacing layout-top-spacing">
                    <div class="col-lg-12">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Basic</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <vue-easymde v-model="content1" ref="editor1" :highlight="true" :configs="{ spellChecker: false }" />

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Basic --&gt;
&lt;vue-easymde v-model=&quot;content1&quot; ref=&quot;editor1&quot; :highlight=&quot;true&quot; :configs=&quot;{spellChecker: false}&quot; /&gt;
</pre
                                            >
                                        </highlight>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="autosaving" class="row layout-spacing">
                    <div class="col-lg-12">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Autosaving</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <vue-easymde v-model="content2" id="editor2" :highlight="true" :configs="{ spellChecker: false, autosave: { enabled: true, uniqueId: 'editor2' } }" />

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Autosaving --&gt;
&lt;vue-easymde v-model=&quot;content2&quot; id=&quot;editor2&quot; :highlight=&quot;true&quot; :configs=&quot;{spellChecker: false, autosave: {enabled: true, uniqueId: 'editor2'} }&quot; /&gt;
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
    .vue-easymde .editor-toolbar {
        border: 1px solid #ddd;
        border-radius: 6px;
        opacity: 1;
    }
    .vue-easymde .CodeMirror {
        margin-top: 10px;
        border-radius: 6px;
    }
    .vue-easymde .editor-toolbar button {
        color: #4361ee !important;
    }
    .vue-easymde .editor-toolbar button.active,
    .vue-easymde .editor-toolbar button:hover {
        border-color: #4361ee !important;
        opacity: 0.6;
    }
    .vue-easymde .CodeMirror-fullscreen,
    .vue-easymde .editor-preview-side {
        z-index: 9999 !important;
        margin-top: 0 !important;
    }
</style>

<script setup>
    import { ref } from "vue";

    // import {VueEasymde} from "vue-easymde";
    // import "easymde/dist/easymde.min.css";

    import "../../assets/sass/scrollspyNav.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Markdown Editor" });

    const code_arr = ref([]);
    const content1 = ref(`# Basic Example
Go ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even[links](https://google.com). You can type the Markdown syntax, use the toolbar, or use shortcuts like 'cmd-b' or 'ctrl-b'.

## Lists
Unordered lists can be started using the toolbar or by typing '*', '-', or '+'. Ordered lists can be started by typing '1.'.

#### Unordered
* Lists are a piece of cake
* They even auto continue as you type
* A double enter will end them
* Tabs and shift - tabs work too

#### Ordered
1. Numbered lists...
2. ...work too!

## What about images?
![Yes](https://i.imgur.com/sZlktY7.png)
`);
    const content2 = ref(`
# Autosaving!

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

By default, it saves every 10 seconds, but this can be changed. When this textarea is included in a form, it will automatically forget the saved value when the form is submitted.
`);

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
