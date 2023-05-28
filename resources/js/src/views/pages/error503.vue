<template>
    <div class="layout-px-spacing">
        <div class="error503 text-center">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 me-auto mt-5 text-md-start text-center">
                        <a href="index.html" class="ms-md-5">
                            <img alt="image-503" src="/assets/images/logo2.svg" class="theme-logo" />
                        </a>
                    </div>
                </div>
            </div>

            <div class="container-fluid error-content">
                <div class="">
                    <h1 class="error-number">503</h1>
                    <p class="mini-text">Ooops!</p>
                    <p class="error-text">Service Unavailable!</p>
                    <a href="/" class="btn btn-secondary mt-5">Go Back</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import "../../assets/sass/pages/error/style-503.scss";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Error 503" });
</script>
