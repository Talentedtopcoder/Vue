<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Tree View</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#treeviewAnimated" class="nav-link">Animated</a>
                    <a href="#treeviewBasic" class="nav-link">Basic</a>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="treeviewAnimated" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Animated</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <ul class="file-tree">
                                <li class="file-tree-folder">
                                    CSS
                                    <ul>
                                        <li>style.css</li>
                                    </ul>
                                </li>
                                <li class="file-tree-folder open">
                                    Images
                                    <ul class="d-block">
                                        <li>profile.jpeg</li>
                                        <li>background.png</li>
                                        <li>gallery.jpg</li>
                                    </ul>
                                </li>
                                <li class="file-tree-folder">
                                    HTML
                                    <ul>
                                        <li class="file-tree-folder">
                                            PAGES
                                            <ul>
                                                <li>file name</li>
                                                <li>file name</li>
                                                <li>file name</li>
                                            </ul>
                                        </li>
                                        <li>file name</li>
                                        <li>file name</li>
                                    </ul>
                                </li>
                                <li>index.html</li>
                                <li>components.html</li>
                            </ul>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;ul class=&quot;file-tree&quot;&gt;
    &lt;li class=&quot;file-tree-folder&quot;&gt;
        CSS
        &lt;ul&gt;
            &lt;li&gt;style.css&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li class=&quot;file-tree-folder open&quot;&gt;
        Images
        &lt;ul class=&quot;d-block&quot;&gt;
            &lt;li&gt;profile.jpeg&lt;/li&gt;
            &lt;li&gt;background.png&lt;/li&gt;
            &lt;li&gt;gallery.jpg&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li class=&quot;file-tree-folder&quot;&gt;
        HTML
        &lt;ul&gt;
            &lt;li class=&quot;file-tree-folder&quot;&gt;
                PAGES
                &lt;ul&gt;
                    &lt;li&gt;file name&lt;/li&gt;
                    &lt;li&gt;file name&lt;/li&gt;
                    &lt;li&gt;file name&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/li&gt;
            &lt;li&gt;file name&lt;/li&gt;
            &lt;li&gt;file name&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;index.html&lt;/li&gt;
    &lt;li&gt;components.html&lt;/li&gt;
&lt;/ul&gt;

Javascript
=========
var folder = document.querySelectorAll('.file-tree li.file-tree-folder');
var file = document.querySelectorAll('.file-tree li');
var j; var k;

for (j = 0; j &lt; folder.length; j++) {
    folder[j].addEventListener(&quot;click&quot;, function (a) {
        if (this.children &amp;&amp; this.children.length) {
            this.children[0].parentNode.classList.toggle('open');
            this.children[0].classList.toggle('d-block');
        }
        a.stopPropagation();
    });
}
for (k = 0; k &lt; file.length; k++) {
    file[k].addEventListener(&quot;click&quot;, function (b) {
        b.stopPropagation();
    });
}

</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="treeviewBasic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <ul id="myUL">
                                <li>
                                    <span class="caret">Parent Node</span>
                                    <ul class="nested active">
                                        <li>
                                            <span class="caret caret-down">img</span>
                                            <ul class="nested"></ul>
                                        </li>
                                        <li>
                                            <span class="caret caret-down">css</span>
                                            <ul class="nested">
                                                <li>style.css</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span class="caret caret-down">js</span>
                                            <ul class="nested">
                                                <li>script.js</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span>index.html</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;ul id=&quot;myUL&quot;&gt;
    &lt;li&gt;
        &lt;span class=&quot;caret&quot;&gt;Parent Node&lt;/span&gt;
        &lt;ul class=&quot;nested active&quot;&gt;
            &lt;li&gt;
                &lt;span class=&quot;caret caret-down&quot;&gt;img&lt;/span&gt;
                &lt;ul class=&quot;nested&quot;&gt;&lt;/ul&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;span class=&quot;caret caret-down&quot;&gt;css&lt;/span&gt;
                &lt;ul class=&quot;nested&quot;&gt;
                    &lt;li&gt;style.css&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;span class=&quot;caret caret-down&quot;&gt;js&lt;/span&gt;
                &lt;ul class=&quot;nested&quot;&gt;
                    &lt;li&gt;script.js&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;span&gt;index.html&lt;/span&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
&lt;/ul&gt;

Javascript
=========
var toggler = document.getElementsByClassName(&quot;caret&quot;);
var i;

for (i = 0; i &lt; toggler.length; i++) {
    toggler[i].addEventListener(&quot;click&quot;, function () {
        this.parentElement.querySelector(&quot;.nested&quot;).classList.toggle(&quot;active&quot;);
        this.classList.toggle(&quot;caret-down&quot;);
    });
}

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
    import "../../assets/sass/elements/custom-tree_view.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Treeview" });

    const code_arr = ref([]);

    onMounted(() => {
        init_treeview();
    });

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };

    const init_treeview = () => {
        // basic
        var toggler = document.getElementsByClassName("caret");
        var i;

        for (i = 0; i < toggler.length; i++) {
            toggler[i].addEventListener("click", function () {
                this.parentElement.querySelector(".nested").classList.toggle("active");
                this.classList.toggle("caret-down");
            });
        }

        // animated
        var folder = document.querySelectorAll(".file-tree li.file-tree-folder");
        var file = document.querySelectorAll(".file-tree li");
        var j;
        var k;

        for (j = 0; j < folder.length; j++) {
            folder[j].addEventListener("click", function (a) {
                if (this.children && this.children.length) {
                    this.children[0].parentNode.classList.toggle("open");
                    this.children[0].classList.toggle("d-block");
                }
                a.stopPropagation();
            });
        }
        for (k = 0; k < file.length; k++) {
            file[k].addEventListener("click", function (b) {
                b.stopPropagation();
            });
        }
    };
</script>
