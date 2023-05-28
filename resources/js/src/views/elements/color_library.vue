<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Color Library</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#colorLibMain" class="nav-link">Main</a>
                    <a href="#colorLibMore" class="nav-link">More</a>
                </div>
            </div>

            <div v-scroll-spy>
                <div>
                    <div class="row layout-top-spacing">
                        <div id="colorLibMain" class="col-lg-12">
                            <div class="seperator-header">
                                <h4 class="">Main Colors</h4>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col layout-spacing">
                            <div class="color-box">
                                <span class="cl-example" style="background-color: #4361ee"></span>
                                <div class="cl-info">
                                    <h5 class="cl-title">Primary</h5>
                                    <span>#4361ee</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col layout-spacing">
                            <div class="color-box">
                                <span class="cl-example" style="background-color: #2196f3"></span>
                                <div class="cl-info">
                                    <h5 class="cl-title">Info</h5>
                                    <span>#2196f3</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col layout-spacing">
                            <div class="color-box">
                                <span class="cl-example" style="background-color: #1abc9c"></span>
                                <div class="cl-info">
                                    <h5 class="cl-title">Success</h5>
                                    <span>#1abc9c</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col layout-spacing">
                            <div class="color-box">
                                <span class="cl-example" style="background-color: #e2a03f"></span>
                                <div class="cl-info">
                                    <h5 class="cl-title">Warning</h5>
                                    <span>#e2a03f</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col layout-spacing">
                            <div class="color-box">
                                <span class="cl-example" style="background-color: #e7515a"></span>
                                <div class="cl-info">
                                    <h5 class="cl-title">Danger</h5>
                                    <span>#e7515a</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col layout-spacing">
                            <div class="color-box">
                                <span class="cl-example" style="background-color: #805dca"></span>
                                <div class="cl-info">
                                    <h5 class="cl-title">Secondry</h5>
                                    <span>#805dca</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col layout-spacing">
                            <div class="color-box">
                                <span class="cl-example" style="background-color: #3b3f5c"></span>
                                <div class="cl-info">
                                    <h5 class="cl-title">Dark</h5>
                                    <span>#3b3f5c</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col layout-spacing">
                            <div class="color-box">
                                <span class="cl-example" style="background-color: #eaf1ff"></span>
                                <div class="cl-info">
                                    <h5 class="cl-title">Primary-Light</h5>
                                    <span>#eaf1ff</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col layout-spacing">
                            <div class="color-box">
                                <span class="cl-example" style="background-color: #e7f7ff"></span>
                                <div class="cl-info">
                                    <h5 class="cl-title">Info-Light</h5>
                                    <span>#e7f7ff</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col layout-spacing">
                            <div class="color-box">
                                <span class="cl-example" style="background-color: #ddf5f0"></span>
                                <div class="cl-info">
                                    <h5 class="cl-title">Success-Light</h5>
                                    <span>#ddf5f0</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col layout-spacing">
                            <div class="color-box">
                                <span class="cl-example" style="background-color: #fff9ed"></span>
                                <div class="cl-info">
                                    <h5 class="cl-title">Warning-Light</h5>
                                    <span>#fff9ed</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col layout-spacing">
                            <div class="color-box">
                                <span class="cl-example" style="background-color: #fff5f5"></span>
                                <div class="cl-info">
                                    <h5 class="cl-title">Danger-Light</h5>
                                    <span>#fff5f5</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col layout-spacing">
                            <div class="color-box">
                                <span class="cl-example" style="background-color: #f3effc"></span>
                                <div class="cl-info">
                                    <h5 class="cl-title">Secondry-Light</h5>
                                    <span>#f3effc</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col layout-spacing">
                            <div class="color-box">
                                <span class="cl-example" style="background-color: #e3e4eb"></span>
                                <div class="cl-info">
                                    <h5 class="cl-title">Dark-Light</h5>
                                    <span>#e3e4eb</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div id="colorLibMore" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">More Colors</h4>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #fafafa"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#fafafa</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #f1f2f3"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#f1f2f3</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #ebedf2"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#ebedf2</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #e0e6ed"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#e0e6ed</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #bfc9d4"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#bfc9d4</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #d3d3d3"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#d3d3d3</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #888ea8"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#888ea8</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #506690"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#506690</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #607d8b"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#607d8b</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #555555"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#555555</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #515365"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#515365</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #1b2e4b"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#1b2e4b</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #191e3a"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#191e3a</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #0e1726"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#0e1726</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #060818"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#060818</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #25d5e4"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#25d5e4</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #009688"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#009688</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #ffbb44"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#ffbb44</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #e95f2b"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#e95f2b</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col layout-spacing">
                        <div class="color-box">
                            <span class="cl-example" style="background-color: #f8538d"></span>
                            <div class="cl-info">
                                <h5 class="cl-title">#f8538d</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import "../../assets/sass/scrollspyNav.scss";
    import "../../assets/sass/elements/color_library.css";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Color Library" });
</script>
