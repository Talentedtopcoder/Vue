<template>
    <div class="layout-px-spacing dash_2">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Dashboard</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Sales</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>

            <ul class="navbar-nav flex-row ms-auto">
                <li class="nav-item more-dropdown">
                    <div class="dropdown custom-dropdown-icon">
                        <a href="javascript:;" class="nav-link dropdown-toggle" id="ddlSettings" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>Settings</span>
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
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlSettings">
                            <li><a class="dropdown-item" data-value="Settings" href="javascript:void(0);">Settings</a></li>
                            <li><a class="dropdown-item" data-value="Mail" href="javascript:void(0);">Mail</a></li>
                            <li><a class="dropdown-item" data-value="Print" href="javascript:void(0);">Print</a></li>
                            <li><a class="dropdown-item" data-value="Download" href="javascript:void(0);">Download</a></li>
                            <li><a class="dropdown-item" data-value="Share" href="javascript:void(0);">Share</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-statistics">
                    <div class="widget-heading">
                        <h5>Statistics</h5>
                        <div class="task-action">
                            <div class="dropdown btn-group">
                                <a href="javascript:;" id="ddlStatistics" class="btn dropdown-toggle btn-icon-only" data-bs-toggle="dropdown" aria-expanded="false">
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
                                        class="feather feather-more-horizontal"
                                    >
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlStatistics">
                                    <li><a href="javascript:;" class="dropdown-item">View</a></li>
                                    <li><a href="javascript:;" class="dropdown-item">Download</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="widget-content">
                        <div class="row">
                            <div class="col-6">
                                <div class="w-detail">
                                    <p class="w-title">Total Visits</p>
                                    <p class="w-stats">423,964</p>
                                </div>
                                <apex-chart v-if="total_visit_options" height="58" type="line" :options="total_visit_options" :series="total_visit_series"></apex-chart>
                            </div>
                            <div class="col-6">
                                <div class="w-detail">
                                    <p class="w-title">Paid Visits</p>
                                    <p class="w-stats">7,929</p>
                                </div>
                                <apex-chart v-if="paid_visit_options" height="58" type="line" :options="paid_visit_options" :series="paid_visit_series"></apex-chart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-expenses">
                    <div class="widget-heading">
                        <h5>Expenses</h5>
                        <div class="task-action">
                            <div class="dropdown btn-group">
                                <a href="javascript:;" id="ddlExpenses" class="btn dropdown-toggle btn-icon-only" data-bs-toggle="dropdown" aria-expanded="false">
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
                                        class="feather feather-more-horizontal"
                                    >
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlExpenses">
                                    <li><a href="javascript:;" class="dropdown-item">This Week</a></li>
                                    <li><a href="javascript:;" class="dropdown-item">Last Week</a></li>
                                    <li><a href="javascript:;" class="dropdown-item">Last Month</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="widget-content">
                        <p class="value">
                            $ 45,141
                            <span>this week </span>
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
                                class="feather feather-trending-up"
                            >
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                <polyline points="17 6 23 6 23 12"></polyline>
                            </svg>
                        </p>
                        <div class="w-progress-stats">
                            <div class="progress">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="57" class="progress-bar bg-gradient-secondary" style="width: 57%"></div>
                            </div>
                            <div class="w-icon">57%</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-total-balance">
                    <div class="widget-content">
                        <div class="account-box">
                            <div class="info">
                                <div class="inv-title">
                                    <h5>Total Balance</h5>
                                </div>
                                <div class="inv-balance-info">
                                    <p class="inv-balance">$ 41,741.42</p>
                                    <span class="inv-stats balance-credited">+ 2453</span>
                                </div>
                            </div>
                            <div class="acc-action">
                                <div>
                                    <a href="javascript:void(0);"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-plus"
                                        >
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                        </svg>
                                    </a>
                                    <a href="javascript:void(0);"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-credit-card"
                                        >
                                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                            <line x1="1" y1="10" x2="23" y2="10"></line>
                                        </svg>
                                    </a>
                                </div>
                                <a href="javascript:void(0);">Upgrade</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-unique-visitors">
                    <div class="widget-heading">
                        <h5>Unique Visitors</h5>
                        <div class="task-action">
                            <div class="dropdown btn-group">
                                <a href="javascript:;" id="ddlVisitors" class="btn dropdown-toggle btn-icon-only" data-bs-toggle="dropdown" aria-expanded="false">
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
                                        class="feather feather-more-horizontal"
                                    >
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlVisitors">
                                    <li><a href="javascript:;" class="dropdown-item">View</a></li>
                                    <li><a href="javascript:;" class="dropdown-item">Update</a></li>
                                    <li><a href="javascript:;" class="dropdown-item">Download</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="widget-content">
                        <apex-chart v-if="unique_visitor_options" height="350" type="bar" :options="unique_visitor_options" :series="unique_visitor_series"></apex-chart>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-active-log">
                    <div class="widget-heading">
                        <h5>Activity Log</h5>
                        <div class="task-action">
                            <div class="dropdown btn-group">
                                <a href="javascript:;" id="ddlActivity" class="btn dropdown-toggle btn-icon-only" data-bs-toggle="dropdown" aria-expanded="false">
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
                                        class="feather feather-more-horizontal"
                                    >
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlActivity">
                                    <li><a href="javascript:;" class="dropdown-item">View All</a></li>
                                    <li><a href="javascript:;" class="dropdown-item">Mark as Read</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="widget-content">
                        <div class="w-shadow-top"></div>
                        <perfect-scrollbar class="mt-container mx-auto">
                            <div class="timeline-line">
                                <div class="item-timeline">
                                    <div class="t-dot">
                                        <div class="t-secondary">
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
                                                class="feather feather-plus"
                                            >
                                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="t-content">
                                        <div class="t-uppercontent">
                                            <h5>
                                                New project created : <a href="javscript:void(0);"><span>[Cork Admin Template]</span></a>
                                            </h5>
                                        </div>
                                        <p>27 Feb, 2020</p>
                                    </div>
                                </div>
                                <div class="item-timeline">
                                    <div class="t-dot">
                                        <div class="t-success">
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
                                                class="feather feather-mail"
                                            >
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="t-content">
                                        <div class="t-uppercontent">
                                            <h5>Mail sent to <a href="javascript:void(0);">HR</a> and <a href="javascript:void(0);">Admin</a></h5>
                                        </div>
                                        <p>28 Feb, 2020</p>
                                    </div>
                                </div>
                                <div class="item-timeline">
                                    <div class="t-dot">
                                        <div class="t-primary">
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
                                                class="feather feather-check"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="t-content">
                                        <div class="t-uppercontent">
                                            <h5>Server Logs Updated</h5>
                                        </div>
                                        <p>27 Feb, 2020</p>
                                    </div>
                                </div>
                                <div class="item-timeline">
                                    <div class="t-dot">
                                        <div class="t-danger">
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
                                                class="feather feather-check"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="t-content">
                                        <div class="t-uppercontent">
                                            <h5>
                                                Task Completed : <a href="javscript:void(0);"><span>[Backup Files EOD]</span></a>
                                            </h5>
                                        </div>
                                        <p>01 Mar, 2020</p>
                                    </div>
                                </div>
                                <div class="item-timeline">
                                    <div class="t-dot">
                                        <div class="t-warning">
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
                                                class="feather feather-file"
                                            >
                                                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                                <polyline points="13 2 13 9 20 9"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="t-content">
                                        <div class="t-uppercontent">
                                            <h5>Documents Submitted from <a href="javascript:void(0);">Sara</a></h5>
                                            <span></span>
                                        </div>
                                        <p>10 Mar, 2020</p>
                                    </div>
                                </div>
                                <div class="item-timeline">
                                    <div class="t-dot">
                                        <div class="t-dark">
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
                                                class="feather feather-server"
                                            >
                                                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                                                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                                <line x1="6" y1="6" x2="6" y2="6"></line>
                                                <line x1="6" y1="18" x2="6" y2="18"></line>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="t-content">
                                        <div class="t-uppercontent">
                                            <h5>Server rebooted successfully</h5>
                                            <span></span>
                                        </div>
                                        <p>06 Apr, 2020</p>
                                    </div>
                                </div>
                            </div>
                        </perfect-scrollbar>
                        <div class="w-shadow-bottom"></div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-visitor-by-browser">
                    <div class="widget-heading">
                        <h5>Visitors by Browser</h5>
                    </div>
                    <div class="widget-content">
                        <div class="browser-list">
                            <div class="w-icon icon-fill-primary">
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
                                    class="feather feather-chrome"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <line x1="21.17" y1="8" x2="12" y2="8"></line>
                                    <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                                    <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
                                </svg>
                            </div>
                            <div class="w-browser-details">
                                <div class="w-browser-info">
                                    <h6>Chrome</h6>
                                    <p class="browser-count">65%</p>
                                </div>
                                <div class="w-browser-stats">
                                    <div class="progress">
                                        <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="65" class="progress-bar bg-gradient-primary" style="width: 65%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="browser-list">
                            <div class="w-icon icon-fill-danger">
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
                                    class="feather feather-compass"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                                </svg>
                            </div>
                            <div class="w-browser-details">
                                <div class="w-browser-info">
                                    <h6>Safari</h6>
                                    <p class="browser-count">25%</p>
                                </div>

                                <div class="w-browser-stats">
                                    <div class="progress">
                                        <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="35" class="progress-bar bg-gradient-danger" style="width: 35%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="browser-list">
                            <div class="w-icon icon-fill-warning">
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
                                    class="feather feather-globe"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                            </div>
                            <div class="w-browser-details">
                                <div class="w-browser-info">
                                    <h6>Others</h6>
                                    <p class="browser-count">15%</p>
                                </div>
                                <div class="w-browser-stats">
                                    <div class="progress">
                                        <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="15" class="progress-bar bg-gradient-warning" style="width: 15%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="row widget-statistic">
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing">
                        <div class="widget">
                            <div class="widget-heading">
                                <div class="w-title">
                                    <div class="w-icon icon-fill-primary">
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
                                            class="feather feather-users"
                                        >
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="w-value">31.6K</p>
                                        <h5>Followers</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-content">
                                <div class="w-chart">
                                    <apex-chart v-if="followers_options" height="160" type="area" :options="followers_options" :series="followers_series"></apex-chart>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing">
                        <div class="widget">
                            <div class="widget-heading">
                                <div class="w-title">
                                    <div class="w-icon icon-fill-danger">
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
                                            class="feather feather-link"
                                        >
                                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="w-value">1,900</p>
                                        <h5>Referral</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-content">
                                <div class="w-chart">
                                    <apex-chart v-if="referral_options" height="160" type="area" :options="referral_options" :series="referral_series"></apex-chart>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing">
                        <div class="widget">
                            <div class="widget-heading">
                                <div class="w-title">
                                    <div class="w-icon icon-fill-success">
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
                                            class="feather feather-message-circle"
                                        >
                                            <path
                                                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="w-value">18.2%</p>
                                        <h5>Engagement</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-content">
                                <div class="w-chart">
                                    <apex-chart v-if="engagement_options" height="160" type="area" :options="engagement_options" :series="engagement_series"></apex-chart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-card-one">
                    <div class="widget-heading">
                        <div class="media">
                            <div class="media-aside align-self-start">
                                <div class="w-img"><img src="/assets/images/profile-19.jpeg" alt="avatar" /></div>
                            </div>
                            <div class="media-body">
                                <h6>Jimmy Turner</h6>
                                <p class="meta-date-time">Monday, Nov 18</p>
                            </div>
                        </div>
                    </div>
                    <div class="widget-content">
                        <p>"Duis aute irure dolor" in reprehenderit in voluptate velit esse cillum "dolore eu fugiat" nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

                        <div class="w-action">
                            <div class="card-like">
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
                                    class="feather feather-thumbs-up"
                                >
                                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                </svg>
                                <span>551 Likes</span>
                            </div>

                            <div class="read-more">
                                <a href="javascript:void(0);"
                                    >Read More
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
                                        class="feather feather-chevrons-right"
                                    >
                                        <polyline points="13 17 18 12 13 7"></polyline>
                                        <polyline points="6 17 11 12 6 7"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-card-two">
                    <div class="widget-heading">
                        <div class="media">
                            <div class="media-aside align-self-start">
                                <div class="w-img">
                                    <img src="/assets/images/g-8.png" alt="avatar" />
                                </div>
                            </div>
                            <div class="media-body">
                                <h6>Dev Summit - New York</h6>
                                <p class="meta-date-time">Bronx, NY</p>
                            </div>
                        </div>
                    </div>
                    <div class="widget-content">
                        <h5>4 Members Going</h5>
                        <div class="img-group">
                            <img src="/assets/images/profile-19.jpeg" alt="avatar" />
                            <img src="/assets/images/profile-6.jpeg" alt="avatar" />
                            <img src="/assets/images/profile-8.jpeg" alt="avatar" />
                            <img src="/assets/images/profile-3.jpeg" alt="avatar" />
                        </div>
                        <a href="javascript:;" class="btn btn-secondary">View Details</a>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-card-three">
                    <div class="widget-heading">
                        <a href="javascript:void(0)" class="task-info">
                            <div class="usr-avatar">
                                <span>FD</span>
                            </div>
                            <div class="w-title">
                                <h5>Figma Design</h5>
                                <span>Design Reset</span>
                            </div>
                        </a>
                        <div class="task-action">
                            <div class="dropdown btn-group">
                                <a href="javascript:;" id="ddlDesign" class="btn dropdown-toggle btn-icon-only" data-bs-toggle="dropdown" aria-expanded="false">
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
                                        class="feather feather-more-horizontal"
                                    >
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlDesign">
                                    <li><a href="javascript:;" class="dropdown-item">View Project</a></li>
                                    <li><a href="javascript:;" class="dropdown-item">Edit Project</a></li>
                                    <li><a href="javascript:;" class="dropdown-item">Mark as Done</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="widget-content">
                        <p>Doloribus nisi vel suscipit modi, optio ex repudiandae voluptatibus officiis commodi. Nesciunt quas aut neque incidunt!</p>
                        <div class="progress-data">
                            <div class="progress-info">
                                <div class="task-count">
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
                                        class="feather feather-check-square"
                                    >
                                        <polyline points="9 11 12 14 22 4"></polyline>
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                                    </svg>
                                    <p>5 Tasks</p>
                                </div>
                                <div class="progress-stats"><p>86.2%</p></div>
                            </div>

                            <div class="progress"><div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="65" class="progress-bar bg-primary" style="width: 65%"></div></div>
                        </div>

                        <div class="meta-info">
                            <div class="due-time">
                                <p>
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
                                        class="feather feather-clock"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    3 Days Left
                                </p>
                            </div>

                            <div class="avatar--group">
                                <span class="b-avatar avatar more-group badge-default rounded">
                                    <span class="b-avatar-custom"><span class="avatar-title">+6</span></span>
                                </span>
                                <span class="b-avatar avatar badge-default rounded">
                                    <span class="b-avatar-img"><img src="/assets/images/profile-8.jpeg" alt="avatar" /></span>
                                </span>
                                <span class="b-avatar avatar badge-default rounded">
                                    <span class="b-avatar-img"><img src="/assets/images/profile-12.jpeg" alt="avatar" /></span>
                                </span>
                                <span class="b-avatar avatar badge-default rounded">
                                    <span class="b-avatar-img"><img src="/assets/images/profile-19.jpeg" alt="avatar" /></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import "../assets/sass/widgets/widgets.scss";
    import { computed, ref } from "vue";
    import { useStore } from "vuex";
    import ApexChart from "vue3-apexcharts";

    import { useMeta } from "../composables/use-meta";
    useMeta({ title: "Widgets" });

    const store = useStore();

    //Statistics
    const total_visit_series = ref([{ data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25] }]);
    const total_visit_options = computed(() => {
        const is_dark = store.state.is_dark_mode;
        return {
            chart: { sparkline: { enabled: true }, dropShadow: { enabled: true, top: 3, left: 1, blur: 3, color: "#009688", opacity: 0.7 } },
            stroke: { curve: "smooth", width: 2 },
            markers: { size: 0 },
            colors: ["#009688"],
            grid: { padding: { top: 0, bottom: 0, left: 0 } },
            tooltip: {
                theme: is_dark ? "dark" : "light",
                x: { show: false },
                y: {
                    title: {
                        formatter: function formatter() {
                            return "";
                        },
                    },
                },
            },
            responsive: [{ breakPoint: 576, options: { chart: { height: 95 }, grid: { padding: { top: 45, bottom: 0, left: 0 } } } }],
        };
    });

    const paid_visit_series = ref([{ data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69] }]);
    const paid_visit_options = computed(() => {
        const is_dark = store.state.is_dark_mode;
        return {
            chart: { sparkline: { enabled: true }, dropShadow: { enabled: true, top: 1, left: 1, blur: 2, color: "#e2a03f", opacity: 0.7 } },
            stroke: { curve: "smooth", width: 2 },
            markers: { size: 0 },
            colors: ["#e2a03f"],
            grid: { padding: { top: 0, bottom: 0, left: 0 } },
            tooltip: {
                theme: is_dark ? "dark" : "light",
                x: { show: false },
                y: {
                    title: {
                        formatter: function formatter() {
                            return "";
                        },
                    },
                },
            },
            responsive: [{ breakPoint: 576, options: { chart: { height: 95 }, grid: { padding: { top: 35, bottom: 0, left: 0 } } } }],
        };
    });

    //unique visitors
    const unique_visitor_series = ref([
        { name: "Direct", data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63] },
        { name: "Organic", data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70] },
    ]);
    const unique_visitor_options = computed(() => {
        const is_dark = store.state.is_dark_mode;
        return {
            chart: { toolbar: { show: false } },
            dataLabels: { enabled: false },
            stroke: { show: true, width: 2, colors: ["transparent"] },
            colors: ["#5c1ac3", "#ffbb44"],
            dropShadow: { enabled: true, opacity: 0.3, blur: 1, left: 1, top: 1, color: "#515365" },
            plotOptions: { bar: { horizontal: false, columnWidth: "55%", borderRadius: 10 } },
            legend: { position: "bottom", horizontalAlign: "center", fontSize: "14px", markers: { width: 12, height: 12 }, itemMargin: { horizontal: 0, vertical: 8 } },
            grid: { borderColor: is_dark ? "#191e3a" : "#e0e6ed" },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                axisBorder: { show: true, color: is_dark ? "#3b3f5c" : "#e0e6ed" },
            },
            yaxis: {
                tickAmount: 6,
            },
            fill: {
                type: "gradient",
                gradient: { shade: is_dark ? "dark" : "light", type: "vertical", shadeIntensity: 0.3, inverseColors: false, opacityFrom: 1, opacityTo: 0.8, stops: [0, 100] },
            },
            tooltip: {
                theme: is_dark ? "dark" : "light",
                y: {
                    formatter: function (val) {
                        return val;
                    },
                },
            },
        };
    });

    //Followers
    const followers_series = ref([{ name: "Sales", data: [38, 60, 38, 52, 36, 40, 28] }]);
    const followers_options = computed(() => {
        const is_dark = store.state.is_dark_mode;
        let option = {
            chart: { sparkline: { enabled: true } },
            stroke: { curve: "smooth", width: 2 },
            colors: ["#4361ee"],
            yaxis: { min: 0, show: false },
            tooltip: { theme: is_dark ? "dark" : "light", x: { show: false } },
        };
        if (is_dark) {
            option["fill"] = { type: "gradient", gradient: { type: "vertical", shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.3, opacityTo: 0.05, stops: [100, 100] } };
        }
        return option;
    });

    //Referral
    const referral_series = ref([{ name: "Sales", data: [60, 28, 52, 38, 40, 36, 38] }]);
    const referral_options = computed(() => {
        const is_dark = store.state.is_dark_mode;
        let option = {
            chart: { sparkline: { enabled: true } },
            stroke: { curve: "smooth", width: 2 },
            colors: ["#e7515a"],
            yaxis: { min: 0, show: false },
            tooltip: { theme: is_dark ? "dark" : "light", x: { show: false } },
        };
        if (is_dark) {
            option["fill"] = { type: "gradient", gradient: { type: "vertical", shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.3, opacityTo: 0.05, stops: [100, 100] } };
        }
        return option;
    });

    //Engagement
    const engagement_series = ref([{ name: "Sales", data: [28, 50, 36, 60, 38, 52, 38] }]);
    const engagement_options = computed(() => {
        const is_dark = store.state.is_dark_mode;
        let option = {
            chart: { sparkline: { enabled: true } },
            stroke: { curve: "smooth", width: 2 },
            colors: ["#1abc9c"],
            yaxis: { min: 0, show: false },
            tooltip: { theme: is_dark ? "dark" : "light", x: { show: false } },
        };
        if (is_dark) {
            option["fill"] = { type: "gradient", gradient: { type: "vertical", shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.3, opacityTo: 0.05, stops: [100, 100] } };
        }
        return option;
    });
</script>
