<template>
    <div>
        <!--  BEGIN NAVBAR  -->
        <div class="header-container fixed-top">
            <header class="header navbar navbar-expand-sm">
                <ul class="navbar-item theme-brand flex-row text-center">
                    <li class="nav-item theme-logo">
                        <router-link to="/">
                            <img src="/assets/images/logo.svg" class="navbar-logo" alt="logo" />
                        </router-link>
                    </li>
                    <li class="nav-item theme-text">
                        <router-link to="/" class="nav-link"> CORK </router-link>
                    </li>
                </ul>
                <div class="d-none horizontal-menu">
                    <a href="javascript:void(0);" class="sidebarCollapse" data-placement="bottom" @click="$store.commit('toggleSideBar', !$store.state.is_show_sidebar)">
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
                            class="feather feather-menu"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </a>
                </div>
                <ul class="navbar-item flex-row ms-md-0 ms-auto">
                    <li class="nav-item align-self-center search-animated" :class="{ 'show-search': $store.state.is_show_search }">
                        <svg
                            @click="$store.commit('toggleSearch', !$store.state.is_show_search)"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-search toggle-search"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <form class="form-inline search-full form-inline search" :class="{ 'input-focused': $store.state.is_show_search }">
                            <div class="search-bar">
                                <input type="text" class="form-control search-form-control ms-lg-auto" placeholder="Search..." />
                            </div>
                        </form>
                    </li>
                </ul>

                <div class="navbar-item flex-row ms-md-auto">
                    <div class="dark-mode d-flex align-items-center">
                        <a v-if="$store.state.dark_mode == 'light'" href="javascript:;" class="d-flex align-items-center" @click="toggleMode('dark')">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-sun"
                            >
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                            <span class="ms-2">Light</span>
                        </a>
                        <a v-if="$store.state.dark_mode == 'dark'" href="javascript:;" class="d-flex align-items-center" @click="toggleMode('system')">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-moon"
                            >
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                            <span class="ms-2">Dark</span>
                        </a>
                        <a v-if="$store.state.dark_mode == 'system'" href="javascript:;" class="d-flex align-items-center" @click="toggleMode('light')">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-airplay"
                            >
                                <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                                <polygon points="12 15 17 21 7 21 12 15"></polygon>
                            </svg>
                            <span class="ms-2">System</span>
                        </a>
                    </div>

                    <div class="dropdown nav-item language-dropdown btn-group">
                        <a href="javascript:;" id="ddllang" data-bs-toggle="dropdown" aria-expanded="false" class="btn dropdown-toggle btn-icon-only nav-link">
                            <img v-if="selectedLang" :src="`/assets/images/flags/${selectedLang.code}.png`" class="flag-width" alt="flag" />
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="ddllang">
                            <perfect-scrollbar>
                                <li v-for="item in countryList" :key="item.code">
                                    <a href="javascript:;" class="dropdown-item d-flex align-items-center" :class="{ active: i18n.locale === item.code }" @click.prevent="changeLanguage(item)">
                                        <img :src="`/assets/images/flags/${item.code}.png`" class="flag-width" alt="" /> <span>{{ item.name }}</span>
                                    </a>
                                </li>
                            </perfect-scrollbar>
                        </ul>
                    </div>

                    <div class="dropdown nav-item message-dropdown btn-group">
                        <a href="javascript:;" id="ddlmsg" data-bs-toggle="dropdown" aria-expanded="false" class="btn dropdown-toggle btn-icon-only nav-link">
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
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right m-0" aria-labelledby="ddlmsg">
                            <li role="presentation">
                                <a role="menuitem" href="#" target="_self" class="dropdown-item">
                                    <div class="media media">
                                        <div class="media-aside align-self-start">
                                            <div class="avatar avatar-xl"><span class="avatar-title rounded-circle">KY</span></div>
                                        </div>
                                        <div class="media-body">
                                            <h5 class="usr-name">Kara Young</h5>
                                            <p class="msg-title">ACCOUNT UPDATE</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="#" target="_self" class="dropdown-item">
                                    <div class="media media">
                                        <div class="media-aside align-self-start">
                                            <img src="/assets/images/profile-15.jpeg" alt="avatar" />
                                        </div>
                                        <div class="media-body">
                                            <h5 class="usr-name">Daisy Anderson</h5>
                                            <p class="msg-title">ACCOUNT UPDATE</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li role="presentation">
                                <a role="menuitem" href="#" target="_self" class="dropdown-item">
                                    <div class="media media">
                                        <div class="media-aside align-self-start">
                                            <div class="avatar avatar-xl"><span class="avatar-title rounded-circle">OG</span></div>
                                        </div>
                                        <div class="media-body">
                                            <h5 class="usr-name">Oscar Garner</h5>
                                            <p class="msg-title">ACCOUNT UPDATE</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="dropdown nav-item notification-dropdown btn-group">
                        <a href="javascript:;" id="ddlnotify" data-bs-toggle="dropdown" aria-expanded="false" class="btn dropdown-toggle btn-icon-only nav-link">
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
                                class="feather feather-bell"
                            >
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg>
                            <span class="badge badge-success"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right m-0" aria-labelledby="ddlnotify">
                            <li role="presentation">
                                <a href="javascript:;" class="dropdown-item">
                                    <div class="media server-log">
                                        <div class="media-aside align-self-start">
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
                                        <div class="media-body">
                                            <div class="data-info">
                                                <h6 class="">Server Rebooted</h6>
                                                <p class="">45 min ago</p>
                                            </div>

                                            <div class="icon-status">
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
                                                    class="feather feather-x"
                                                >
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li role="presentation"><hr role="separator" aria-orientation="horizontal" size="0" class="dropdown-divider" /></li>
                            <li role="presentation">
                                <a href="javascript:;" class="dropdown-item">
                                    <div class="media">
                                        <div class="media-aside align-self-start">
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
                                                class="feather feather-heart"
                                            >
                                                <path
                                                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div class="media-body">
                                            <div class="data-info">
                                                <h6>Licence Expiring Soon</h6>
                                                <p>8 hrs ago</p>
                                            </div>
                                            <div class="icon-status">
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
                                                    class="feather feather-x"
                                                >
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li role="presentation"><hr role="separator" aria-orientation="horizontal" size="0" class="dropdown-divider" /></li>
                            <li role="presentation">
                                <a href="javascript:;" class="dropdown-item">
                                    <div class="media file-upload">
                                        <div class="media-aside align-self-start">
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
                                                class="feather feather-file-text"
                                            >
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                <polyline points="10 9 9 9 8 9"></polyline>
                                            </svg>
                                        </div>
                                        <div class="media-body">
                                            <div class="data-info">
                                                <h6>Kelly Portfolio.pdf</h6>
                                                <p>670 kb</p>
                                            </div>
                                            <div class="icon-status">
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
                                        </div></div
                                ></a>
                            </li>
                        </ul>
                    </div>

                    <div class="dropdown nav-item user-profile-dropdown btn-group">
                        <a href="javascript:;" id="ddluser" data-bs-toggle="dropdown" aria-expanded="false" class="btn dropdown-toggle btn-icon-only user nav-link">
                            <img src="/assets/images/profile-16.jpeg" alt="avatar" />
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right m-0" aria-labelledby="ddluser">
                            <li role="presentation">
                                <router-link to="/users/profile" class="dropdown-item">
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
                                        class="feather feather-user"
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    Profile
                                </router-link>
                            </li>
                            <li role="presentation">
                                <router-link to="/apps/mailbox" class="dropdown-item">
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
                                        class="feather feather-inbox"
                                    >
                                        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                                    </svg>
                                    Inbox
                                </router-link>
                            </li>
                            <li role="presentation">
                                <router-link to="/auth/lockscreen" class="dropdown-item">
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
                                    Lock Screen
                                </router-link>
                            </li>
                            <li role="presentation">
                                <router-link to="/auth/login" class="dropdown-item">
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
                                        class="feather feather-log-out"
                                    >
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                        <polyline points="16 17 21 12 16 7"></polyline>
                                        <line x1="21" y1="12" x2="9" y2="12"></line>
                                    </svg>
                                    Sign Out
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
        <!--  END NAVBAR  -->
        <!--  BEGIN NAVBAR  -->
        <div class="sub-header-container">
            <header class="header navbar navbar-expand-sm">
                <a href="javascript:void(0);" class="sidebarCollapse" data-placement="bottom" @click="$store.commit('toggleSideBar', !$store.state.is_show_sidebar)">
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
                        class="feather feather-menu"
                    >
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </a>

                <!-- Portal vue/Teleport for Breadcrumb -->
                <div id="breadcrumb" class="vue-portal-target"></div>
            </header>
        </div>
        <!--  END NAVBAR  -->
        <!--  BEGIN TOPBAR  -->
        <div class="topbar-nav header navbar" role="banner">
            <nav class="topbar">
                <ul class="list-unstyled menu-categories" id="topAccordion">
                    <li class="menu single-menu">
                        <a href="javascript:;" class="dropdown-toggle autodroprown">
                            <div class="">
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
                                    class="feather feather-home"
                                >
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                                <span>{{ $t('dashboard') }}</span>
                            </div>
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
                        <ul class="collapse submenu list-unstyled">
                            <li>
                                <router-link to="/"> {{ $t('sales') }} </router-link>
                            </li>
                            <li>
                                <router-link to="/index2">{{ $t('analytics') }}</router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="menu single-menu">
                        <a href="javascript:;" class="dropdown-toggle">
                            <div class="">
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
                                    class="feather feather-cpu"
                                >
                                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                                    <rect x="9" y="9" width="6" height="6"></rect>
                                    <line x1="9" y1="1" x2="9" y2="4"></line>
                                    <line x1="15" y1="1" x2="15" y2="4"></line>
                                    <line x1="9" y1="20" x2="9" y2="23"></line>
                                    <line x1="15" y1="20" x2="15" y2="23"></line>
                                    <line x1="20" y1="9" x2="23" y2="9"></line>
                                    <line x1="20" y1="14" x2="23" y2="14"></line>
                                    <line x1="1" y1="9" x2="4" y2="9"></line>
                                    <line x1="1" y1="14" x2="4" y2="14"></line>
                                </svg>
                                <span>{{ $t('apps') }}</span>
                            </div>
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
                        <ul class="collapse submenu list-unstyled">
                            <li><router-link to="/apps/chat">Chat</router-link></li>
                            <li><router-link to="/apps/mailbox">Mailbox</router-link></li>
                            <li><router-link to="/apps/todo-list">Todo List</router-link></li>
                            <li><router-link to="/apps/notes">Notes</router-link></li>
                            <li><router-link to="/apps/scrumboard">Scrumboard</router-link></li>
                            <li><router-link to="/apps/contacts">Contacts</router-link></li>

                            <li class="sub-sub-submenu-list">
                                <a href="javascript:;">
                                    Invoice
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
                                        class="feather feather-chevron-right"
                                    >
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </a>
                                <ul class="collapse list-unstyled sub-submenu">
                                    <li><router-link to="/apps/invoice/list">List</router-link></li>
                                    <li><router-link to="/apps/invoice/preview">Preview</router-link></li>
                                    <li><router-link to="/apps/invoice/add">Add</router-link></li>
                                    <li><router-link to="/apps/invoice/edit">Edit</router-link></li>
                                </ul>
                            </li>
                            <li><router-link to="/apps/calendar">Calendar</router-link></li>
                        </ul>
                    </li>

                    <li class="menu single-menu">
                        <a href="javascript:;" class="dropdown-toggle">
                            <div class="">
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
                                    class="feather feather-box"
                                >
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                </svg>
                                <span>{{ $t('components') }}</span>
                            </div>
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
                        <ul class="collapse submenu list-unstyled">
                            <li><router-link to="/components/tabs">Tabs</router-link></li>
                            <li><router-link to="/components/accordions">Accordions</router-link></li>
                            <li><router-link to="/components/modals">Modals</router-link></li>
                            <li><router-link to="/components/cards">Cards</router-link></li>
                            <li><router-link to="/components/carousel">Carousel</router-link></li>
                            <li><router-link to="/components/countdown">Countdown</router-link></li>
                            <li><router-link to="/components/counter">Counter</router-link></li>
                            <li><router-link to="/components/sweetalert">Sweet Alerts</router-link></li>
                            <li><router-link to="/components/timeline">Timeline</router-link></li>
                            <li><router-link to="/components/notifications">Notifications</router-link></li>
                            <li><router-link to="/components/media-object">Media Object</router-link></li>
                            <li><router-link to="/components/list-group">List Group</router-link></li>
                            <li><router-link to="/components/pricing-table">Pricing Tables</router-link></li>
                            <li><router-link to="/components/lightbox"> Lightbox </router-link></li>
                        </ul>
                    </li>

                    <li class="menu single-menu">
                        <a href="javascript:;" class="dropdown-toggle">
                            <div class="">
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
                                    class="feather feather-zap"
                                >
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                </svg>
                                <span>{{ $t('ui_kit') }}</span>
                            </div>
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
                        <ul class="collapse submenu list-unstyled">
                            <li><router-link to="/elements/alerts">Alerts</router-link></li>
                            <li><router-link to="/elements/avatar">Avatar</router-link></li>
                            <li><router-link to="/elements/badges">Badges</router-link></li>
                            <li><router-link to="/elements/breadcrumbs">Breadcrumbs</router-link></li>
                            <li><router-link to="/elements/buttons">Buttons</router-link></li>
                            <li><router-link to="/elements/buttons-group">Button Groups</router-link></li>
                            <li><router-link to="/elements/color-library">Color Library</router-link></li>
                            <li><router-link to="/elements/dropdown">Dropdown</router-link></li>
                            <li><router-link to="/elements/infobox">Infobox</router-link></li>
                            <li><router-link to="/elements/jumbotron">Jumbotron</router-link></li>
                            <li><router-link to="/elements/loader">Loader</router-link></li>
                            <li><router-link to="/elements/pagination">Pagination</router-link></li>
                            <li><router-link to="/elements/popovers">Popovers</router-link></li>
                            <li><router-link to="/elements/progress-bar">Progress Bar</router-link></li>
                            <li><router-link to="/elements/search">Search</router-link></li>
                            <li><router-link to="/elements/tooltips">Tooltips</router-link></li>
                            <li><router-link to="/elements/treeview">Treeview</router-link></li>
                            <li><router-link to="/elements/typography">Typography</router-link></li>
                        </ul>
                    </li>

                    <li class="menu single-menu">
                        <a href="javascript:;" class="dropdown-toggle">
                            <div class="">
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
                                    class="feather feather-layout"
                                >
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="3" y1="9" x2="21" y2="9"></line>
                                    <line x1="9" y1="21" x2="9" y2="9"></line>
                                </svg>
                                <span>{{ $t('tables') }}</span>
                            </div>
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
                        <ul class="collapse submenu list-unstyled">
                            <li><router-link to="/tables/basic">Basic</router-link></li>
                            <li class="sub-sub-submenu-list">
                                <a href="javascript:;" class="dropdown-toggle">
                                    DataTables
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
                                        class="feather feather-chevron-right"
                                    >
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </a>
                                <ul class="collapse list-unstyled sub-submenu">
                                    <li class="sub-sub-sub-submenu-list">
                                        <a href="javascript:;" class="dropdown-toggle">
                                            vue3-datatable
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
                                                class="feather feather-chevron-right"
                                            >
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </a>
                                        <ul class="collapse list-unstyled sub-sub-submenu">
                                            <li><router-link to="/tables/vue3-datatable/basic">Basic</router-link></li>
                                            <li><router-link to="/tables/vue3-datatable/advance">Advanced</router-link></li>
                                            <li><router-link to="/tables/vue3-datatable/order-sorting">Order Sorting</router-link></li>
                                            <li><router-link to="/tables/vue3-datatable/alt-pagination">Alt. Pagination</router-link></li>
                                            <li><router-link to="/tables/vue3-datatable/search">Search</router-link></li>
                                            <li><router-link to="/tables/vue3-datatable/checkbox">Checkbox</router-link></li>
                                            <li><router-link to="/tables/vue3-datatable/slot">Slot</router-link></li>
                                            <li><router-link to="/tables/vue3-datatable/column-filter">Column Filter</router-link></li>
                                            <li><router-link to="/tables/vue3-datatable/actions">Actions</router-link></li>
                                            <li><router-link to="/tables/vue3-datatable/sticky-header">Sticky Header</router-link></li>
                                            <li><router-link to="/tables/vue3-datatable/column-chooser">Column Chooser</router-link></li>
                                        </ul>
                                    </li>
                                    <li class="sub-sub-sub-submenu-list">
                                        <a href="javascript:;" class="dropdown-toggle">
                                            v3-table
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
                                                class="feather feather-chevron-right"
                                            >
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </a>
                                        <ul class="collapse list-unstyled sub-sub-submenu">
                                            <li><router-link to="/tables/v3-table/basic">Basic</router-link></li>
                                            <li><router-link to="/tables/v3-table/striped">Striped Table</router-link></li>
                                            <li><router-link to="/tables/v3-table/order-sorting">Order Sorting</router-link></li>
                                            <li><router-link to="/tables/v3-table/multi-column">Multi Column</router-link></li>
                                            <li><router-link to="/tables/v3-table/multiple-tables">Multiple Tables</router-link></li>
                                            <li><router-link to="/tables/v3-table/alt-pagination">Alt. Pagination</router-link></li>
                                            <li><router-link to="/tables/v3-table/custom">Custom</router-link></li>
                                            <li><router-link to="/tables/v3-table/range-search">Range Search</router-link></li>
                                            <li><router-link to="/tables/v3-table/export">Export</router-link></li>
                                            <li><router-link to="/tables/v3-table/live-dom-ordering">Live DOM ordering</router-link></li>
                                            <li><router-link to="/tables/v3-table/miscellaneous">Miscellaneous</router-link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="menu single-menu">
                        <a href="javascript:;" class="dropdown-toggle">
                            <div class="">
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
                                    class="feather feather-clipboard"
                                >
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                                </svg>
                                <span>{{ $t('forms') }}</span>
                            </div>
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
                        <ul class="collapse submenu list-unstyled">
                            <li><router-link to="/forms/basic">Basic</router-link></li>
                            <li><router-link to="/forms/input-group">Input Group</router-link></li>
                            <li><router-link to="/forms/layouts">Layouts</router-link></li>
                            <li><router-link to="/forms/validation">Validation</router-link></li>
                            <li><router-link to="/forms/input-mask">Input Mask</router-link></li>
                            <li><router-link to="/forms/select2">Select2</router-link></li>
                            <li><router-link to="/forms/touchspin">TouchSpin</router-link></li>
                            <li><router-link to="/forms/checkbox-radio">Checkbox &amp; Radio</router-link></li>
                            <li><router-link to="/forms/switches">Switches</router-link></li>
                            <li><router-link to="/forms/wizards">Wizards</router-link></li>
                            <li><router-link to="/forms/file-upload">File Upload</router-link></li>
                            <li><router-link to="/forms/quill-editor">Quill Editor</router-link></li>
                            <li><router-link to="/forms/markdown-editor">Markdown Editor</router-link></li>
                            <li><router-link to="/forms/date-picker">Date &amp; Range Picker </router-link></li>
                            <li><router-link to="/forms/clipboard">Clipboard</router-link></li>
                        </ul>
                    </li>

                    <li class="menu single-menu">
                        <a href="javascript:;" class="dropdown-toggle">
                            <div class="">
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
                                <span>{{ $t('pages') }}</span>
                            </div>
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
                        <ul class="collapse submenu list-unstyled">
                            <li><router-link to="/pages/helpdesk">Helpdesk</router-link></li>
                            <li><router-link to="/pages/contact-us">Contact Form</router-link></li>
                            <li><router-link to="/pages/faq">FAQ</router-link></li>
                            <li><router-link to="/pages/faq2">FAQ 2</router-link></li>
                            <li><router-link to="/pages/privacy-policy">Privacy Policy</router-link></li>
                            <li><a target="_blank" href="/pages/coming-soon">Coming Soon</a></li>
                            <li><router-link to="/pages/blank-page">Blank Page</router-link></li>
                            <li><router-link to="/pages/sample">Sample Page</router-link></li>

                            <li><router-link to="/users/profile">Profile</router-link></li>
                            <li><router-link to="/users/account-setting">Account Settings</router-link></li>
                            <li class="sub-sub-submenu-list">
                                <a href="javascript:;" class="dropdown-toggle">
                                    Error
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
                                        class="feather feather-chevron-right"
                                    >
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </a>
                                <ul class="collapse list-unstyled sub-submenu">
                                    <li><a target="_blank" href="/pages/error404">404</a></li>
                                    <li><a target="_blank" href="/pages/error500">500</a></li>
                                    <li><a target="_blank" href="/pages/error503">503</a></li>
                                    <li><a target="_blank" href="/pages/maintenence">Maintanence</a></li>
                                </ul>
                            </li>
                            <li class="sub-sub-submenu-list">
                                <a href="javascript:;" class="dropdown-toggle">
                                    Login
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
                                        class="feather feather-chevron-right"
                                    >
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </a>
                                <ul class="collapse list-unstyled sub-submenu">
                                    <li><a target="_blank" href="/auth/login">Login Cover</a></li>
                                    <li><a target="_blank" href="/auth/login-boxed">Login Boxed</a></li>
                                </ul>
                            </li>
                            <li class="sub-sub-submenu-list">
                                <a href="javascript:;" class="dropdown-toggle">
                                    Register
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
                                        class="feather feather-chevron-right"
                                    >
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </a>
                                <ul class="collapse list-unstyled sub-submenu">
                                    <li><a target="_blank" href="/auth/register">Register Cover</a></li>
                                    <li><a target="_blank" href="/auth/register-boxed">Register Boxed</a></li>
                                </ul>
                            </li>

                            <li class="sub-sub-submenu-list">
                                <a href="javascript:;" class="dropdown-toggle">
                                    Password Recovery
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
                                        class="feather feather-chevron-right"
                                    >
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </a>
                                <ul class="collapse list-unstyled sub-submenu">
                                    <li><a target="_blank" href="/auth/pass-recovery">Recover ID Cover</a></li>
                                    <li><a target="_blank" href="/auth/pass-recovery-boxed">Recover ID Boxed</a></li>
                                </ul>
                            </li>

                            <li class="sub-sub-submenu-list">
                                <a href="javascript:;" class="dropdown-toggle">
                                    Lockscreen
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
                                        class="feather feather-chevron-right"
                                    >
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </a>
                                <ul class="collapse list-unstyled sub-submenu">
                                    <li><a target="_blank" href="/auth/lockscreen">Unlock Cover</a></li>
                                    <li><a target="_blank" href="/auth/lockscreen-boxed">Unlock Boxed</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="menu single-menu">
                        <a href="javascript:;" class="dropdown-toggle">
                            <div class="">
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
                                    class="feather feather-plus-circle"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="16"></line>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                                <span>{{ $t('more') }}</span>
                            </div>
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
                        <ul class="collapse submenu list-unstyled">
                            <li><router-link to="/dragndrop">Drag and Drop</router-link></li>
                            <li><router-link to="/widgets">Widgets</router-link></li>
                            <li><router-link to="/charts/apex-chart">Charts</router-link></li>
                            <li><router-link to="/font-icons">Font Icons</router-link></li>
                            <li>
                                <a target="_blank" href="https://cork-vue.sbthemes.com"> Documentation </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
        <!--  END TOPBAR  -->
    </div>
</template>

<script setup>
    import { onMounted, ref, reactive } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useStore } from 'vuex';
    const store = useStore();

    const selectedLang = ref(null);
    const countryList = ref(store.state.countryList);

    const i18n = reactive(useI18n());

    onMounted(() => {
        selectedLang.value = window.$appSetting.toggleLanguage();
        toggleMode();
    });

    const toggleMode = (mode) => {
        window.$appSetting.toggleMode(mode);
    };

    const changeLanguage = (item) => {
        selectedLang.value = item;
        i18n.locale = item.code;
        window.$appSetting.toggleLanguage(item);
    };
</script>
