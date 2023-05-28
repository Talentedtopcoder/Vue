<template>
    <div class="layout-px-spacing">
        <div class="maintanence text-center">
            <div class="container-fluid maintanence-content">
                <div class="">
                    <div class="maintanence-hero-img">
                        <img alt="logo" src="/assets/images/logo2.svg" />
                    </div>
                    <h1 class="error-title">Under Maintenance</h1>
                    <p class="error-text">Thank you for visiting us.</p>
                    <p class="text">
                        We are currently working on making some improvements <br />
                        to give you better user experience.
                    </p>
                    <p class="text">Please visit us again shortly.</p>
                    <router-link to="/" class="btn btn-info mt-4">Home</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import "../../assets/sass/pages/error/style-maintanence.scss";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Maintenence" });
</script>
