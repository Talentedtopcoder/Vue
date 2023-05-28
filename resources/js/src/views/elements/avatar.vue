<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Avatar</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#avatarBasic" class="nav-link">Basic</a>
                    <a href="#avatarIndicators" class="nav-link">Indicators</a>
                    <a href="#avatarShapes" class="nav-link">Shapes</a>
                    <a href="#avatarInitials" class="nav-link">Initials</a>
                    <a href="#avatarGroup" class="nav-link">Group</a>
                    <a href="#avatarAnimate" class="nav-link">Animate</a>
                    <a href="#avatarTooltip" class="nav-link">Tooltip</a>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="avatarBasic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Avatar</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body image-style-content text-center">
                            <div class="avatar avatar-xl me-1">
                                <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                            </div>
                            <div class="avatar avatar-lg me-1">
                                <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                            </div>
                            <div class="avatar me-1">
                                <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                            </div>
                            <div class="avatar avatar-sm me-1">
                                <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Default --&gt;
&lt;div class=&quot;avatar avatar-xl me-1&quot;&gt;
    &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
&lt;/div&gt;

&lt;div class=&quot;avatar avatar-lg me-1&quot;&gt;
    &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
&lt;/div&gt;

&lt;div class=&quot;avatar me-1&quot;&gt;
    &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
&lt;/div&gt;

&lt;div class=&quot;avatar avatar-sm me-1&quot;&gt;
    &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="avatarIndicators" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Indicators</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body image-style-content text-center">
                            <div class="avatar avatar-xl avatar-indicators avatar-danger me-1">
                                <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                            </div>
                            <div class="avatar avatar-lg avatar-indicators avatar-success me-1">
                                <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                            </div>
                            <div class="avatar avatar-indicators avatar-dark me-1">
                                <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                            </div>
                            <div class="avatar avatar-sm avatar-indicators avatar-info me-1">
                                <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Indicators --&gt;
&lt;div class=&quot;avatar avatar-xl avatar-indicators avatar-danger me-1&quot;&gt;
    &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
&lt;/div&gt;
&lt;div class=&quot;avatar avatar-lg avatar-indicators avatar-success me-1&quot;&gt;
    &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
&lt;/div&gt;
&lt;div class=&quot;avatar avatar-indicators avatar-dark me-1&quot;&gt;
    &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
&lt;/div&gt;
&lt;div class=&quot;avatar avatar-sm avatar-indicators avatar-info me-1&quot;&gt;
    &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="avatarShapes" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Shapes</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body image-style-content text-center">
                            <div class="avatar avatar-xl me-1">
                                <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded" />
                            </div>
                            <div class="avatar avatar-xl me-1">
                                <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                            </div>

                            <div class="avatar avatar-lg me-1">
                                <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded" />
                            </div>
                            <div class="avatar avatar-lg me-1">
                                <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Shapes --&gt;
&lt;div class=&quot;avatar avatar-xl me-1&quot;&gt;
    &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded&quot; /&gt;
&lt;/div&gt;
&lt;div class=&quot;avatar avatar-xl me-1&quot;&gt;
    &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
&lt;/div&gt;

&lt;div class=&quot;avatar avatar-lg me-1&quot;&gt;
    &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded&quot; /&gt;
&lt;/div&gt;
&lt;div class=&quot;avatar avatar-lg me-1&quot;&gt;
    &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="avatarInitials" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Initials</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body image-style-content text-center">
                            <div class="avatar avatar-xl avatar-success me-1">
                                <span class="avatar-title rounded-circle">AG</span>
                            </div>
                            <div class="avatar avatar-lg avatar-secondary me-1">
                                <span class="avatar-title rounded-circle">AG</span>
                            </div>
                            <div class="avatar avatar-info me-1">
                                <span class="avatar-title rounded-circle">AG</span>
                            </div>
                            <div class="avatar avatar-sm avatar-danger me-1">
                                <span class="avatar-title rounded-circle">AG</span>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Initials --&gt;
&lt;div class=&quot;avatar avatar-xl avatar-success me-1&quot;&gt;
    &lt;span class=&quot;avatar-title rounded-circle&quot;&gt;AG&lt;/span&gt;
&lt;/div&gt;
&lt;div class=&quot;avatar avatar-lg avatar-secondary me-1&quot;&gt;
    &lt;span class=&quot;avatar-title rounded-circle&quot;&gt;AG&lt;/span&gt;
&lt;/div&gt;
&lt;div class=&quot;avatar avatar-info me-1&quot;&gt;
    &lt;span class=&quot;avatar-title rounded-circle&quot;&gt;AG&lt;/span&gt;
&lt;/div&gt;
&lt;div class=&quot;avatar avatar-sm avatar-danger me-1&quot;&gt;
    &lt;span class=&quot;avatar-title rounded-circle&quot;&gt;AG&lt;/span&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="avatarGroup" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Group</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body image-style-content text-center">
                            <div class="d-sm-flex d-block align-items-center justify-content-center">
                                <div class="avatar--group me-4">
                                    <div class="avatar avatar-lg">
                                        <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                                    </div>
                                    <div class="avatar avatar-lg">
                                        <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                                    </div>
                                    <div class="avatar avatar-lg">
                                        <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                                    </div>
                                    <div class="avatar avatar-lg avatar-secondary">
                                        <span class="avatar-title rounded-circle">AG</span>
                                    </div>
                                </div>

                                <div class="avatar--group">
                                    <div class="avatar avatar-md">
                                        <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                                    </div>
                                    <div class="avatar avatar-md">
                                        <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                                    </div>
                                    <div class="avatar avatar-md">
                                        <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                                    </div>
                                    <div class="avatar avatar-md avatar-secondary">
                                        <span class="avatar-title rounded-circle">AG</span>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Group --&gt;
&lt;div class=&quot;avatar--group me-4&quot;&gt;
    &lt;div class=&quot;avatar avatar-lg&quot;&gt;
        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;avatar avatar-lg&quot;&gt;
        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;avatar avatar-lg&quot;&gt;
        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;avatar avatar-lg avatar-secondary&quot;&gt;
        &lt;span class=&quot;avatar-title rounded-circle&quot;&gt;AG&lt;/span&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;avatar--group&quot;&gt;
    &lt;div class=&quot;avatar avatar-md&quot;&gt;
        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;avatar avatar-md&quot;&gt;
        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;avatar avatar-md&quot;&gt;
        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;avatar avatar-md avatar-secondary&quot;&gt;
        &lt;span class=&quot;avatar-title rounded-circle&quot;&gt;AG&lt;/span&gt;
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

                <div id="avatarAnimate" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Animate Y-axis</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body image-style-content text-center">
                            <div class="d-flex justify-content-center">
                                <div class="avatar--group">
                                    <div class="avatar translateY-axis">
                                        <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                                    </div>
                                    <div class="avatar translateY-axis">
                                        <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                                    </div>
                                    <div class="avatar translateY-axis">
                                        <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                                    </div>
                                    <div class="avatar translateY-axis avatar-secondary">
                                        <span class="avatar-title rounded-circle">AG</span>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Animate --&gt;
&lt;div class=&quot;avatar--group&quot;&gt;
    &lt;div class=&quot;avatar translateY-axis&quot;&gt;
        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;avatar translateY-axis&quot;&gt;
        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;avatar translateY-axis&quot;&gt;
        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;avatar translateY-axis avatar-secondary&quot;&gt;
        &lt;span class=&quot;avatar-title rounded-circle&quot;&gt;AG&lt;/span&gt;
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
                                    <h4>Animate X-axis</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body image-style-content text-center">
                            <div class="d-flex justify-content-center">
                                <div class="avatar--group">
                                    <div class="avatar translateX-axis">
                                        <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                                    </div>
                                    <div class="avatar translateX-axis">
                                        <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                                    </div>
                                    <div class="avatar translateX-axis">
                                        <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" />
                                    </div>
                                    <div class="avatar translateX-axis avatar-secondary">
                                        <span class="avatar-title rounded-circle">AG</span>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code7')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Animate --&gt;
&lt;div class=&quot;avatar--group&quot;&gt;
    &lt;div class=&quot;avatar translateX-axis&quot;&gt;
        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;avatar translateX-axis&quot;&gt;
        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;avatar translateX-axis&quot;&gt;
        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;avatar translateX-axis avatar-secondary&quot;&gt;
        &lt;span class=&quot;avatar-title rounded-circle&quot;&gt;AG&lt;/span&gt;
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

                <div id="avatarTooltip" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Tooltip</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body image-style-content text-center">
                            <div class="d-flex justify-content-center">
                                <div class="avatar--group">
                                    <div class="avatar">
                                        <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Judy Holmes" />
                                    </div>
                                    <div class="avatar">
                                        <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" data-bs-toggle="tooltip" title="Judy Holmes" />
                                    </div>
                                    <div class="avatar">
                                        <img alt="avatar" src="/assets/images/profile-12.jpeg" class="rounded-circle" data-bs-toggle="tooltip" title="Judy Holmes" />
                                    </div>
                                    <div class="avatar">
                                        <span class="avatar-title rounded-circle" data-bs-toggle="tooltip" title="Alan Green">AG</span>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code8')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;!-- Tooltip --&gt;
&lt;div class=&quot;avatar--group&quot;&gt;
    &lt;div class=&quot;avatar&quot;&gt;
        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Judy Holmes&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;avatar&quot;&gt;
        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; data-bs-toggle=&quot;tooltip&quot; title=&quot;Judy Holmes&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;avatar&quot;&gt;
        &lt;img alt=&quot;avatar&quot; src=&quot;/assets/images/profile-12.jpeg&quot; class=&quot;rounded-circle&quot; data-bs-toggle=&quot;tooltip&quot; title=&quot;Judy Holmes&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;avatar&quot;&gt;
        &lt;span class=&quot;avatar-title rounded-circle&quot; data-bs-toggle=&quot;tooltip&quot; title=&quot;Alan Green&quot;&gt;AG&lt;/span&gt;
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
    import { onMounted, ref } from "vue";

    import "../../assets/sass/scrollspyNav.scss";
    import "../../assets/sass/elements/avatar.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Avtar" });

    const code_arr = ref([]);

    onMounted(() => {
        initTooltip();
    });

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };

    const initTooltip = () => {
        setTimeout(() => {
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map((tooltipTriggerEl) => {
                return new window.bootstrap.Tooltip(tooltipTriggerEl);
            });
        });
    };
</script>
