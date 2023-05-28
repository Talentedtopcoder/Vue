<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Clipboard</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#fclCopyInput" class="nav-link">Copy form Input</a>
                    <a href="#fclCopyTextarea" class="nav-link">Copy form Textarea</a>
                    <a href="#fclCoyParagraph" class="nav-link">Copy Text from Paragraph</a>
                    <a href="#fclAdvance" class="nav-link">Advanced</a>
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
                        <a target="_blank" href="https://www.npmjs.com/package/vue-clipboard3" class="text-info"> https://www.npmjs.com/package/vue-clipboard3 </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy>
                <div class="row layout-top-spacing">
                    <div id="fclCopyInput" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Copy from input</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body clipboard-copy-input">
                                <div class="clipboard">
                                    <form class="form-horizontal">
                                        <input class="form-control mb-4" v-model="message1" />
                                        <button type="button" class="btn btn-primary mb-1 mx-1" @click="copy(message1)">
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
                                                class="feather feather-copy me-1"
                                            >
                                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                            </svg>
                                            Copy from Input
                                        </button>
                                        <button type="button" class="btn btn-dark mb-1 mx-1" @click="copy(message1)" @blur="message1 = ''">
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
                                                class="feather feather-edit-2 me-1"
                                            >
                                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                            </svg>
                                            Cut from Input
                                        </button>
                                    </form>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Copy from input --&gt;
&lt;form class=&quot;form-horizontal&quot;&gt;
    &lt;input class=&quot;form-control mb-4&quot; v-model=&quot;message1&quot; /&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary mb-1 mx-1&quot; @click=&quot;copy(message1)&quot;&gt;
        &lt;svg&gt; ... &lt;/svg&gt;
        Copy from Input
    &lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-dark mb-1 mx-1&quot; @click=&quot;copy(message1)&quot; @blur=&quot;message1 = ''&quot;&gt;
        &lt;svg&gt; ... &lt;/svg&gt;
        Cut from Input
    &lt;/button&gt;
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
                    <div id="fclCopyTextarea" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Copy from Text Area</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body clipboard-copy-textarea">
                                <div class="clipboard">
                                    <form class="form-horizontal">
                                        <textarea class="form-control mb-4" rows="3" v-model="message2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</textarea>
                                        <button type="button" class="btn btn-primary mb-1 mx-1" @click="copy(message2)">
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
                                                class="feather feather-copy me-1"
                                            >
                                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                            </svg>
                                            Copy from Input
                                        </button>
                                        <button type="button" class="btn btn-dark mb-1 mx-1" @click="copy(message2)" @blur="message2 = ''">
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
                                                class="feather feather-edit-2 me-1"
                                            >
                                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                            </svg>
                                            Cut from Input
                                        </button>
                                    </form>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Copy from Text Area --&gt;
&lt;div class=&quot;clipboard&quot;&gt;
    &lt;form class=&quot;form-horizontal&quot;&gt;
        &lt;textarea class=&quot;form-control mb-4&quot; rows=&quot;3&quot; v-model=&quot;message2&quot;&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit...&lt;/textarea&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn btn-primary mb-1 mx-1&quot; @click=&quot;copy(message2)&quot;&gt;
            &lt;svg&gt; ... &lt;/svg&gt;Copy from Input
        &lt;/button&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn btn-dark mb-1 mx-1&quot; @click=&quot;copy(message2)&quot; @blur=&quot;message2 = ''&quot;&gt;
            &lt;svg&gt; ... &lt;/svg&gt;Cut from Input
        &lt;/button&gt;
    &lt;/form&gt;
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
                    <div id="fclCoyParagraph" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Copy Text from Paragraph</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body clipboard-copy-para">
                                <div class="clipboard copy-txt">
                                    <p class="otp-pass">Here is your OTP <span>22991</span>.</p>
                                    <p class="mb-4">Please do not share it to anyone</p>
                                    <button type="button" class="btn btn-primary mb-1" @click="copy('22991')">
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
                                            class="feather feather-copy me-1"
                                        >
                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                        </svg>
                                        Copy from Input
                                    </button>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Copy Text from Paragraph --&gt;
&lt;div class=&quot;clipboard copy-txt&quot;&gt;
    &lt;p class=&quot;otp-pass&quot;&gt;Here is your OTP &lt;span&gt;22991&lt;/span&gt;.&lt;/p&gt;
    &lt;p class=&quot;mb-4&quot;&gt;Please do not share it to anyone&lt;/p&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary mb-1&quot; @click=&quot;copy('22991')&quot;&gt;
        &lt;svg&gt; ... &lt;/svg&gt;
        Copy from Input
    &lt;/button&gt;
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
                    <div id="fclAdvance" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Copy Hidden Text (Advanced)</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body paragraph-advance">
                                <div class="clipboard copy-txt">
                                    <p class="mb-4">Link -> <span>http://www.admin-dashboard.com/code</span></p>
                                    <button type="button" class="btn btn-primary mb-1 mx-1" @click="copy('http://www.admin-dashboard.com/code')">
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
                                            class="feather feather-copy me-1"
                                        >
                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                        </svg>
                                        Copy Link
                                    </button>
                                    <button type="button" class="btn btn-dark mb-1 mx-1" @click="copy('2291')">
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
                                            class="feather feather-copy me-1"
                                        >
                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                        </svg>
                                        Copy Hidden Code
                                    </button>
                                </div>

                                <div class="code-section-container show-code">
                                    <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                    <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                        <highlight>
                                            <pre>
&lt;!-- Copy Hidden Text (Advanced) --&gt;
&lt;div class=&quot;clipboard copy-txt&quot;&gt;
    &lt;p class=&quot;mb-4&quot;&gt;Link -&gt; &lt;span&gt;http://www.admin-dashboard.com/code&lt;/span&gt;&lt;/p&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary mb-1 mx-1&quot; @click=&quot;copy('http://www.admin-dashboard.com/code')&quot;&gt;
        &lt;svg&gt; ... &lt;/svg&gt;Copy Link
    &lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-dark mb-1 mx-1&quot; @click=&quot;copy('2291')&quot;&gt;
        &lt;svg&gt; ... &lt;/svg&gt;Copy Hidden Code
    &lt;/button&gt;
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
    import "../../assets/sass/forms/custom-clipboard.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import useClipboard from "vue-clipboard3";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Clipboard" });

    const code_arr = ref([]);
    const message1 = ref("http://www.admin-dashboard.com");
    const message2 = ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit...");

    const { toClipboard } = useClipboard();
    const copy = async (msg) => {
        await toClipboard(msg);
        // this.showMessage('copied successfully.');
    };

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>
