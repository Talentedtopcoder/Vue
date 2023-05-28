<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Pages</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Privacy Policy</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div id="headerWrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-12 text-center">
                        <h2 class="main-heading">Privacy Policy</h2>
                    </div>
                </div>
            </div>
        </div>

        <div id="privacyWrapper" class="">
            <div class="privacy-container">
                <div class="privacyContent">
                    <div class="d-flex justify-content-between privacy-head">
                        <div class="privacyHeader">
                            <h1>Terms of Service</h1>
                            <p>Updated Sep 15, 2020</p>
                        </div>

                        <div class="get-privacy-terms align-self-center">
                            <button type="button" class="btn btn-secondary" @click="print()">
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
                                    class="feather feather-printer"
                                >
                                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                                    <rect x="6" y="14" width="12" height="8"></rect>
                                </svg>
                                Print
                            </button>
                        </div>
                    </div>

                    <div class="privacy-content-container">
                        <section>
                            <h5>Please read our policy carefully</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </section>

                        <h5 class="policy-info-ques">What personal data we collect and why we collect it</h5>

                        <section>
                            <h5>Media</h5>

                            <p>
                                If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the
                                website.
                            </p>
                        </section>

                        <section>
                            <h5>Cookies</h5>

                            <p>
                                If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave
                                another comment. These cookies will last for one year.
                            </p>

                            <p>
                                If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your
                                browser.
                            </p>

                            <p>
                                When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select
                                “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
                            </p>

                            <p>
                                If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1
                                day.
                            </p>
                        </section>

                        <section>
                            <h5>Embedded content from other websites.</h5>

                            <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>

                            <p>
                                These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded
                                content if you have an account and are logged in to that website.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import "../../assets/sass/pages/privacy/privacy.scss";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Privacy Policy" });

    const print = () => {
        window.print();
    };
</script>
