<template>
    <div class="form full-form auth-cover">
        <div class="form-container">
            <div class="form-form">
                <div class="form-form-wrap">
                    <div class="form-container">
                        <div class="form-content">
                            <div class="d-flex user-meta">
                                <img src="/assets/images/profile-7.jpeg" class="usr-profile" alt="avatar" />
                                <div class="">
                                    <p class="">Shaun Park</p>
                                </div>
                            </div>

                            <form class="text-start">
                                <div class="form">
                                    <div id="password-field" class="field-wrapper input mb-2">
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
                                            class="feather feather-lock"
                                        >
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                        <input type="password" class="form-control" placeholder="Password" />
                                    </div>
                                    <div class="d-sm-flex justify-content-between">
                                        <div class="field-wrapper toggle-pass d-flex align-items-center">
                                            <p class="d-inline-block">Show Password</p>
                                            <label class="switch s-primary mx-2">
                                                <input type="checkbox" class="custom-control-input" checked="" />
                                                <span class="slider round"></span>
                                            </label>
                                        </div>
                                        <div class="field-wrapper">
                                            <button type="submit" class="btn btn-primary">Unlock</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <p class="terms-conditions">
                                © 2020 All Rights Reserved. <router-link to="/">CORK</router-link> is a product of Arrangic Solutions LLP. <a href="javascript:void(0);">Cookie Preferences</a>, <a href="javascript:void(0);">Privacy</a>, and
                                <a href="javascript:void(0);">Terms</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-image">
                <div class="l-image"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import "../../assets/sass/authentication/auth.scss";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Lockscreen Cover" });
</script>
