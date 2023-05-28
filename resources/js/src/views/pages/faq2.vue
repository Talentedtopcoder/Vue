<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Pages</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>FAQ</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="faq">
            <div class="faq-layouting layout-spacing">
                <div class="fq-tab-section layout-top-spacing">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Frequently Asked <span>Questions</span></h2>

                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="accordion" id="simple_faq">
                                        <div class="card">
                                            <div class="card-header" role="tab">
                                                <div class="mb-0 collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#fqcollapseOne" aria-expanded="false" aria-controls="fqcollapseOne">
                                                    <span class="faq-q-title">Getting started</span>
                                                    <div class="icons">
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
                                                            class="feather feather-chevron-down"
                                                        >
                                                            <polyline points="6 9 12 15 18 9"></polyline>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="fqcollapseOne" class="collapse" aria-labelledby="fqcollapseOne" data-bs-parent="#simple_faq">
                                                <div class="card-body">
                                                    <p>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                        labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                        probably haven't heard of them accusamus labore sustainable VHS.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header" role="tab">
                                                <div class="mb-0 collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#fqcollapseTwo" aria-expanded="true" aria-controls="fqcollapseTwo">
                                                    <span class="faq-q-title">How can I unzip porduct files</span>
                                                    <div class="icons">
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
                                                            class="feather feather-chevron-down"
                                                        >
                                                            <polyline points="6 9 12 15 18 9"></polyline>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="fqcollapseTwo" class="collapse show" aria-labelledby="fqcollapseTwo" data-bs-parent="#simple_faq">
                                                <div class="card-body">
                                                    <p>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                        labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                        probably haven't heard of them accusamus labore sustainable VHS.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header" role="tab">
                                                <div class="mb-0 collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#fqcollapseThree" aria-expanded="false" aria-controls="fqcollapseThree">
                                                    <span class="faq-q-title">Sidebar not rendering CSS</span>
                                                    <div class="icons">
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
                                                            class="feather feather-chevron-down"
                                                        >
                                                            <polyline points="6 9 12 15 18 9"></polyline>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="fqcollapseThree" class="collapse" aria-labelledby="fqcollapseThree" data-bs-parent="#simple_faq">
                                                <div class="card-body">
                                                    <p>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                        labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                        probably haven't heard of them accusamus labore sustainable VHS.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header" role="tab">
                                                <div class="mb-0 collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#fqcollapseFour" aria-expanded="false" aria-controls="fqcollapseFour">
                                                    <span class="faq-q-title">Production Level Built</span>
                                                    <div class="icons">
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
                                                            class="feather feather-chevron-down"
                                                        >
                                                            <polyline points="6 9 12 15 18 9"></polyline>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="fqcollapseFour" class="collapse" aria-labelledby="fqcollapseFour" data-bs-parent="#simple_faq">
                                                <div class="card-body">
                                                    <p>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                        labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                        probably haven't heard of them accusamus labore sustainable VHS.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header" role="tab">
                                                <div class="mb-0 collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#fqcollapseFive" aria-expanded="false" aria-controls="fqcollapseFive">
                                                    <span class="faq-q-title">Compilation Issue</span>
                                                    <div class="icons">
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
                                                            class="feather feather-chevron-down"
                                                        >
                                                            <polyline points="6 9 12 15 18 9"></polyline>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="fqcollapseFive" class="collapse" aria-labelledby="fqcollapseFive" data-bs-parent="#simple_faq">
                                                <div class="card-body">
                                                    <p>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                        labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                        probably haven't heard of them accusamus labore sustainable VHS.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header" role="tab">
                                                <div class="mb-0 collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#fqcollapseSix" aria-expanded="false" aria-controls="fqcollapseSix">
                                                    <span class="faq-q-title">Getting started with starter kits</span>
                                                    <div class="icons">
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
                                                            class="feather feather-chevron-down"
                                                        >
                                                            <polyline points="6 9 12 15 18 9"></polyline>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="fqcollapseSix" class="collapse" aria-labelledby="fqcollapseSix" data-bs-parent="#simple_faq">
                                                <div class="card-body">
                                                    <p>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                        labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                        probably haven't heard of them accusamus labore sustainable VHS.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="accordion" id="simple_faq1">
                                        <div class="card">
                                            <div class="card-header" role="tab">
                                                <div class="mb-0 collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#fqcollapseOne1" aria-expanded="false" aria-controls="fqcollapseOne1">
                                                    <span class="faq-q-title">Are images are provided in the download version?</span>
                                                    <div class="icons">
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
                                                            class="feather feather-chevron-down"
                                                        >
                                                            <polyline points="6 9 12 15 18 9"></polyline>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="fqcollapseOne1" class="collapse" aria-labelledby="fqcollapseOne1" data-bs-parent="#simple_faq1">
                                                <div class="card-body">
                                                    <p>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                        labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                        probably haven't heard of them accusamus labore sustainable VHS.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header" role="tab">
                                                <div class="mb-0 collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#fqcollapseTwo2" aria-expanded="false" aria-controls="fqcollapseTwo2">
                                                    <span class="faq-q-title">How can I customize APPS sections?</span>
                                                    <div class="icons">
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
                                                            class="feather feather-chevron-down"
                                                        >
                                                            <polyline points="6 9 12 15 18 9"></polyline>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="fqcollapseTwo2" class="collapse" aria-labelledby="fqcollapseTwo2" data-bs-parent="#simple_faq1">
                                                <div class="card-body">
                                                    <p>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                        labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                        probably haven't heard of them accusamus labore sustainable VHS.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header" role="tab">
                                                <div class="mb-0 collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#fqcollapseThree3" aria-expanded="false" aria-controls="fqcollapseThree3">
                                                    <span class="faq-q-title">Getting started with multiple layouts</span>
                                                    <div class="icons">
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
                                                            class="feather feather-chevron-down"
                                                        >
                                                            <polyline points="6 9 12 15 18 9"></polyline>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="fqcollapseThree3" class="collapse" aria-labelledby="fqcollapseThree3" data-bs-parent="#simple_faq1">
                                                <div class="card-body">
                                                    <p>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                        labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                        probably haven't heard of them accusamus labore sustainable VHS.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header" role="tab">
                                                <div class="mb-0 collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#fqcollapseFour4" aria-expanded="false" aria-controls="fqcollapseFour4">
                                                    <span class="faq-q-title">How to use task managers?</span>
                                                    <div class="icons">
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
                                                            class="feather feather-chevron-down"
                                                        >
                                                            <polyline points="6 9 12 15 18 9"></polyline>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="fqcollapseFour4" class="collapse" aria-labelledby="fqcollapseFour4" data-bs-parent="#simple_faq1">
                                                <div class="card-body">
                                                    <p>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                        labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                        probably haven't heard of them accusamus labore sustainable VHS.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header" role="tab">
                                                <div class="mb-0 collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#fqcollapseFive5" aria-expanded="false" aria-controls="fqcollapseFive5">
                                                    <span class="faq-q-title">How to setup a vpn?</span>
                                                    <div class="icons">
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
                                                            class="feather feather-chevron-down"
                                                        >
                                                            <polyline points="6 9 12 15 18 9"></polyline>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="fqcollapseFive5" class="collapse" aria-labelledby="fqcollapseFive5" data-bs-parent="#simple_faq1">
                                                <div class="card-body">
                                                    <p>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                        labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                        probably haven't heard of them accusamus labore sustainable VHS.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header" role="tab">
                                                <div class="mb-0 collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#fqcollapseSix6" aria-expanded="true" aria-controls="fqcollapseSix6">
                                                    <span class="faq-q-title">Chrome vs Edge which is better!</span>
                                                    <div class="icons">
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
                                                            class="feather feather-chevron-down"
                                                        >
                                                            <polyline points="6 9 12 15 18 9"></polyline>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="fqcollapseSix6" class="collapse show" aria-labelledby="fqcollapseSix6" data-bs-parent="#simple_faq1">
                                                <div class="card-body">
                                                    <p>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                        labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                        probably haven't heard of them accusamus labore sustainable VHS.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
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
    import "../../assets/sass/pages/faq/faq2.scss";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "FAQ" });
</script>
