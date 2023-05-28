<template>
    <div class="layout-px-spacing mailbox">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Mailbox</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="row">
                    <div class="col-xl-12 col-md-12">
                        <div class="mail-box-container">
                            <div class="mail-overlay" :class="{ 'mail-overlay-show': is_show_mail_menu }" @click="is_show_mail_menu = false"></div>

                            <div class="tab-title" :class="{ 'mail-menu-show': is_show_mail_menu }">
                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-12 text-center mail-btn-container">
                                        <a data-bs-toggle="modal" data-bs-target="#composeMailModal" id="btn-compose-mail" class="btn btn-block" href="javascript:void(0);" @click="open_mail('add')">
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
                                        </a>
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-12 mail-categories-container">
                                        <perfect-scrollbar class="mail-sidebar-scroll">
                                            <ul class="nav nav-pills d-block" id="pills-tab" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions" :class="{ active: selected_tab == 'inbox' }" @click="tab_changed('inbox')">
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
                                                        <span class="nav-names">Inbox</span>
                                                        <span class="mail-badge badge">
                                                            {{ mail_list && mail_list.filter((d) => !d.type || d.type === "inbox").length }}
                                                        </span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions" :class="{ active: selected_tab == 'important' }" @click="tab_changed('important')">
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
                                                            class="feather feather-star"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
                                                        <span class="nav-names">Important</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions" :class="{ active: selected_tab == 'draft' }" @click="tab_changed('draft')">
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
                                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                            <polyline points="22,6 12,13 2,6" />
                                                        </svg>
                                                        <span class="nav-names">Draft</span>
                                                        <span class="mail-badge badge">
                                                            {{ mail_list && mail_list.filter((d) => d.type === "draft").length }}
                                                        </span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions" :class="{ active: selected_tab == 'sent_mail' }" @click="tab_changed('sent_mail')">
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
                                                            class="feather feather-send"
                                                        >
                                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                                        </svg>
                                                        <span class="nav-names"> Sent Mail</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions" :class="{ active: selected_tab == 'spam' }" @click="tab_changed('spam')">
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
                                                            class="feather feather-alert-circle"
                                                        >
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <line x1="12" y1="8" x2="12" y2="12"></line>
                                                            <line x1="12" y1="16" x2="12" y2="16"></line>
                                                        </svg>
                                                        <span class="nav-names">Spam</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions" :class="{ active: selected_tab == 'trash' }" @click="tab_changed('trash')">
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
                                                            class="feather feather-trash"
                                                        >
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                        </svg>
                                                        <span class="nav-names">Trash</span>
                                                    </a>
                                                </li>
                                            </ul>

                                            <p class="group-section">
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
                                                    class="feather feather-tag"
                                                >
                                                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                                    <line x1="7" y1="7" x2="7" y2="7"></line>
                                                </svg>
                                                Groups
                                            </p>

                                            <ul class="nav nav-pills d-block group-list" id="pills-tab2" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions g-dot-primary" :class="{ active: selected_tab == 'personal' }" @click="tab_changed('personal')">
                                                        <span>Personal</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions g-dot-warning" :class="{ active: selected_tab == 'work' }" @click="tab_changed('work')">
                                                        <span>Work</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions g-dot-success" :class="{ active: selected_tab == 'social' }" @click="tab_changed('social')">
                                                        <span>Social</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions g-dot-danger" :class="{ active: selected_tab == 'private' }" @click="tab_changed('private')">
                                                        <span>Private</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </perfect-scrollbar>
                                    </div>
                                </div>
                            </div>

                            <div id="mailbox-inbox" class="accordion mailbox-inbox">
                                <div class="search">
                                    <a @click="is_show_mail_menu = !is_show_mail_menu">
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
                                            class="feather feather-menu mail-menu d-lg-none"
                                        >
                                            <line x1="3" y1="12" x2="21" y2="12"></line>
                                            <line x1="3" y1="6" x2="21" y2="6"></line>
                                            <line x1="3" y1="18" x2="21" y2="18"></line>
                                        </svg>
                                    </a>
                                    <input type="text" v-model.trim="search_mail" class="input-search form-control" v-on:keyup="search_mails()" placeholder="Search Here..." />
                                </div>

                                <div v-if="!selected_mail" class="action-center">
                                    <div class="checkbox-primary new-control custom-control custom-checkbox">
                                        <input id="chkALl" type="checkbox" :checked="check_all_checkbox" class="custom-control-input" @change="check_all($event.target.checked)" />
                                        <label class="custom-control-label" for="chkALl">
                                            <span class="ms-2">Check All</span>
                                        </label>
                                    </div>

                                    <div>
                                        <template v-if="selected_tab != 'trash'">
                                            <div class="dropdown btn-group">
                                                <a href="javascript:;" id="ddlNotification" class="btn dropdown-toggle btn-icon-only" data-bs-toggle="dropdown" aria-expanded="false">
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
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Groups"
                                                    >
                                                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                                    </svg>
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-end d-icon-menu" aria-labelledby="ddlNotification">
                                                    <li>
                                                        <a href="javascript:;" class="dropdown-item label-group-item label-personal position-relative g-dot-primary" @click="set_group('personal')">Personal</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="dropdown-item label-group-item label-work position-relative g-dot-warning" @click="set_group('work')">Work</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="dropdown-item label-group-item label-social position-relative g-dot-success" @click="set_group('social')">Social</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="dropdown-item label-group-item label-private position-relative g-dot-danger" @click="set_group('private')">Private</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <a href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="Important" @click="set_important()">
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
                                                    class="feather feather-star action-important"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                            </a>
                                            <a href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="Spam" @click="set_spam()">
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
                                                    class="feather feather-alert-circle action-spam"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12" y2="16"></line>
                                                </svg>
                                            </a>

                                            <div class="dropdown btn-group">
                                                <a href="javascript:;" id="ddlMore" class="btn dropdown-toggle btn-icon-only" data-bs-toggle="dropdown" aria-expanded="false">
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
                                                        class="feather feather-more-vertical"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="12" cy="5" r="1"></circle>
                                                        <circle cx="12" cy="19" r="1"></circle>
                                                    </svg>
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlMore">
                                                    <li>
                                                        <a href="javascript:;" class="dropdown-item mark_as_read" @click="set_action('read')"
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
                                                                class="feather feather-book-open"
                                                            >
                                                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                                            </svg>
                                                            Mark as Read</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="dropdown-item action-mark_as_read" @click="set_action('unread')">
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
                                                                class="feather feather-book"
                                                            >
                                                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                                            </svg>
                                                            Mark as Unread</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="dropdown-item action-mark_as_read" @click="set_action('trash')">
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
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                data-original-title="Delete"
                                                                class="feather feather-trash-2"
                                                            >
                                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                                            </svg>
                                                            Trash</a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                        </template>
                                        <template v-else>
                                            <a href="javascript:;" @click="set_action('restore')">
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
                                                    class="feather feather-activity"
                                                >
                                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                                </svg>
                                            </a>
                                            <a href="javascript:;" @click="set_action('delete')">
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
                                                    class="feather feather-trash"
                                                >
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                </svg>
                                            </a>
                                        </template>
                                    </div>
                                </div>

                                <div v-show="!selected_mail" class="message-box">
                                    <perfect-scrollbar class="message-box-scroll" id="ct">
                                        <div v-for="(item, index) in filtered_mail_list" :key="item.id + '' + index" class="mail-item" :class="{ unread: item.is_unread }" @click="select_mail(item)">
                                            <div class="animated fadeInUp">
                                                <div class="mb-0">
                                                    <div class="mail-item-heading">
                                                        <div class="mail-item-inner">
                                                            <div class="d-flex">
                                                                <div>
                                                                    <div class="checkbox-primary new-control me-2 custom-control custom-checkbox" @click.stop="$event.stopPropagation()">
                                                                        <input type="checkbox" :id="`chk-${item.id}`" v-model="ids" class="custom-control-input" :value="item.id" />
                                                                        <label class="custom-control-label" :for="`chk-${item.id}`"></label>
                                                                    </div>
                                                                </div>
                                                                <div class="f-head">
                                                                    <img v-if="item.path" :src="`/assets/images/${item.path}`" class="user-profile" alt="avatar" />
                                                                    <div v-else-if="item.first_name" class="avatar avatar-sm">
                                                                        <span class="avatar-title rounded-circle">
                                                                            {{ item.first_name.charAt(0) + "" + item.last_name.charAt(0) }}
                                                                        </span>
                                                                    </div>
                                                                    <img v-else src="/assets/images/user-avtar.svg" class="user-profile" alt="avatar" />
                                                                </div>
                                                                <div class="f-body">
                                                                    <div class="meta-mail-time">
                                                                        <p v-if="item.first_name" class="user-email">{{ item.first_name + " " + item.last_name }}</p>
                                                                        <p v-else class="user-email">{{ item.email }}</p>
                                                                    </div>
                                                                    <div class="meta-title-tag">
                                                                        <p class="mail-content-excerpt">
                                                                            <svg
                                                                                v-if="item.attachments && item.attachments.length"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                stroke-width="2"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                class="feather feather-paperclip attachment-indicator"
                                                                            >
                                                                                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                                                                            </svg>
                                                                            <span class="mail-title">
                                                                                <template v-if="item.type == 'draft'"> Draft: </template>
                                                                                {{ item.title }} -
                                                                            </span>
                                                                            {{ item.display_description }}
                                                                        </p>
                                                                        <div class="tags">
                                                                            <span v-if="item.group == 'personal'" class="g-dot-primary d-inline-block"></span>
                                                                            <span v-if="item.group == 'work'" class="g-dot-warning d-inline-block"></span>
                                                                            <span v-if="item.group == 'social'" class="g-dot-success d-inline-block"></span>
                                                                            <span v-if="item.group == 'private'" class="g-dot-danger d-inline-block"></span>
                                                                        </div>
                                                                        <p class="meta-time align-self-center">{{ show_time(item) }}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div v-if="item.attachments && item.attachments.length" class="attachments">
                                                            <span v-for="(files, ind) in item.attachments" :key="'fl' + index + ind">{{ files.name }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </perfect-scrollbar>
                                </div>

                                <div v-if="selected_mail" class="content-box" :class="{ 'w-100 left-0': selected_mail }">
                                    <div class="d-flex msg-close">
                                        <a @click="select_mail()">
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
                                                class="feather feather-arrow-left close-message"
                                            >
                                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                                <polyline points="12 19 5 12 12 5"></polyline>
                                            </svg>
                                        </a>
                                        <h2 class="mail-title">{{ selected_mail.title }}</h2>
                                    </div>

                                    <perfect-scrollbar class="content-scroll">
                                        <div class="mail-content-container">
                                            <div class="d-flex justify-content-between mb-3">
                                                <div class="d-flex user-info">
                                                    <div class="f-head">
                                                        <img v-if="selected_mail.path" :src="`/assets/images/${selected_mail.path}`" class="user-profile" alt="avatar" />
                                                        <div v-else-if="selected_mail.first_name" class="avatar avatar-sm">
                                                            <span class="avatar-title rounded-circle">
                                                                {{ selected_mail.first_name.charAt(0) + "" + selected_mail.last_name.charAt(0) }}
                                                            </span>
                                                        </div>
                                                        <img v-else src="/assets/images/user-avtar.svg" class="user-profile" alt="avatar" />
                                                    </div>
                                                    <div class="f-body">
                                                        <div class="meta-title-tag">
                                                            <h4 v-if="selected_mail.first_name" class="mail-usr-name">{{ selected_mail.first_name + " " + selected_mail.last_name }}</h4>
                                                            <h4 v-else class="mail-usr-name">{{ selected_mail.email }}</h4>
                                                        </div>
                                                        <div class="meta-mail-time">
                                                            <p class="user-email">{{ selected_mail.email }}</p>
                                                            <p class="mail-content-meta-date current-recent-mail ms-1">{{ selected_mail.date }} -</p>
                                                            <p class="meta-time align-self-center ms-1">{{ selected_mail.time }}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="action-btns text-nowrap">
                                                    <a href="javascript:;" data-bs-toggle="tooltip" title="Reply" @click="open_mail('reply', selected_mail)">
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
                                                            class="feather feather-corner-up-left reply"
                                                        >
                                                            <polyline points="9 14 4 9 9 4"></polyline>
                                                            <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                                                        </svg>
                                                    </a>
                                                    <a href="javascript:;" data-bs-toggle="tooltip" title="Forward" @click="open_mail('forward', selected_mail)">
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
                                                            class="feather feather-corner-up-right forward"
                                                        >
                                                            <polyline points="15 14 20 9 15 4"></polyline>
                                                            <path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>

                                            <div v-html="selected_mail.description"></div>

                                            <p class="mt-4">Best Regards,</p>
                                            <p v-if="selected_mail.first_name">{{ selected_mail.first_name + " " + selected_mail.last_name }}</p>
                                            <p v-else>{{ selected_mail.email }}</p>

                                            <div v-if="selected_mail.attachments && selected_mail.attachments.length" class="attachments">
                                                <h6 class="attachments-section-title">Attachments</h6>
                                                <div v-for="(files, ind) in selected_mail.attachments" :key="'fle' + selected_mail.id + ind" class="attachment file-pdf file-folder file-img">
                                                    <div class="media">
                                                        <template v-if="files.type == 'image'">
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
                                                                class="feather feather-image"
                                                            >
                                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                                                <polyline points="21 15 16 10 5 21"></polyline>
                                                            </svg>
                                                        </template>
                                                        <template v-else-if="files.type == 'folder'">
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
                                                                class="feather feather-folder"
                                                            >
                                                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                                            </svg>
                                                        </template>
                                                        <template v-else-if="files.type == 'zip'">
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
                                                                class="feather feather-package"
                                                            >
                                                                <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                                            </svg>
                                                        </template>
                                                        <template v-else>
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
                                                        </template>
                                                        <div class="media-body">
                                                            <p class="file-name">{{ files.name }}</p>
                                                            <p class="file-size">{{ files.size }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </perfect-scrollbar>
                                </div>
                            </div>
                        </div>

                        <!-- Modal -->
                        <div id="composeMailModal" class="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-md modal-dialog-centered">
                                <div class="modal-content mailbox-popup">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Message</h5>
                                        <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="compose-box">
                                            <div class="compose-content">
                                                <form>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="d-flex mb-4 mail-form">
                                                                <select v-model="params.from" class="form-select">
                                                                    <option value="info@mail.com">Info &lt;info@mail.com&gt;</option>
                                                                    <option value="shaun@mail.com">Shaun Park &lt;shaun@mail.com&gt;</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="d-flex mb-4 mail-to">
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
                                                                <div class="flex-1">
                                                                    <input v-model="params.to" type="email" class="form-control" placeholder="To" />
                                                                    <span class="validation-text"></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="d-flex mb-4 mail-cc">
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
                                                                    class="feather feather-list"
                                                                >
                                                                    <line x1="8" y1="6" x2="21" y2="6"></line>
                                                                    <line x1="8" y1="12" x2="21" y2="12"></line>
                                                                    <line x1="8" y1="18" x2="21" y2="18"></line>
                                                                    <line x1="3" y1="6" x2="3" y2="6"></line>
                                                                    <line x1="3" y1="12" x2="3" y2="12"></line>
                                                                    <line x1="3" y1="18" x2="3" y2="18"></line>
                                                                </svg>
                                                                <div class="flex-1">
                                                                    <input type="text" v-model="params.cc" class="form-control" placeholder="Cc" />
                                                                    <span class="validation-text"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="d-flex mb-4 mail-subject">
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
                                                        <div class="w-100">
                                                            <input type="text" v-model="params.title" class="form-control" placeholder="Subject" />
                                                            <span class="validation-text"></span>
                                                        </div>
                                                    </div>

                                                    <div class="d-flex">
                                                        <input type="file" multiple="multiple" accept="image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx" class="form-control-file" />
                                                    </div>

                                                    <quill-editor ref="editor" v-model:value="params.description" :options="editor_options" style="min-height: 200px" @ready="quillEditorReady($event)"></quill-editor>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close">Discard</button>

                                        <button type="button" v-if="mail_popup_type == 'add' || mail_popup_type == 'draft'" class="btn btn-success" @click="save_mail('save')">Save</button>
                                        <button type="button" v-if="mail_popup_type == 'reply'" class="btn btn-success" @click="save_mail('save_reply')">Save Reply</button>
                                        <button type="button" v-if="mail_popup_type == 'forward'" class="btn btn-success" @click="save_mail('save_forward')">Save Fwd</button>

                                        <button type="button" v-if="mail_popup_type == 'reply'" class="btn btn-primary" @click="save_mail('reply')">Reply</button>
                                        <button type="button" v-if="mail_popup_type == 'forward'" class="btn btn-primary" @click="save_mail('forward')">Forward</button>
                                        <button type="button" v-if="mail_popup_type == 'add' || mail_popup_type == 'draft'" class="btn btn-primary" @click="save_mail('send')">Send</button>
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
<style>
    .ql-container,
    .ql-editor {
        min-height: inherit;
    }
    .ql-editor {
        max-height: 200px;
    }
    .ql-toolbar.ql-snow .ql-picker-label {
        border: 1px solid transparent;
        color: #4361ee;
    }
    .ql-snow .ql-stroke {
        fill: none;
        stroke: #4361ee;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
    }
    .ql-snow .ql-fill,
    .ql-snow .ql-stroke.ql-fill {
        fill: #4361ee;
    }
    .ql-toolbar.ql-snow {
        border: 1px solid #bfc9d4;
        box-sizing: border-box;
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        padding: 8px;
        border-radius: 6px;
    }
    .ql-container.ql-snow {
        border-top: 0px;
        margin-top: 10px;
        padding: 13px 0;
        border: 1px solid #bfc9d4 !important;
        border-radius: 6px;
    }
</style>
<script setup>
    import { computed, onMounted, ref } from "vue";
    import { quillEditor } from "vue3-quill";
    import "vue3-quill/lib/vue3-quill.css";

    import "../../assets/sass/apps/mailbox.scss";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Mailbox" });

    const default_data = { id: null, from: "info@mail.com", to: "", cc: "", title: "", file: null, description: "" };

    const is_show_mail_menu = ref(false);
    let mail_list = ref([]);
    const filtered_mail_list = ref([]);
    const search_mail = ref("");
    const selected_tab = ref("inbox");
    const selected_mail = ref(null);
    const params = ref(default_data);
    const mail_popup_type = ref(null);
    const ids = ref([]);
    const editor_options = ref({
        modules: {
            toolbar: [[{ header: [1, 2, false] }], ["bold", "italic", "underline"], ["image", "code-block"]],
        },
        placeholder: "Compose an epic...",
    });
    const quillEditorObj = ref(null);
    const composeMailModal = ref(null);

    // computed
    const check_all_checkbox = computed(() => {
        if (filtered_mail_list.value.length && ids.value.length == filtered_mail_list.value.length) {
            return true;
        } else {
            return false;
        }
    });

    onMounted(() => {
        initTooltip();
        initPopup();
        bind_mail_list();
    });

    const initTooltip = () => {
        setTimeout(() => {
            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map((tooltipTriggerEl) => {
                return new window.bootstrap.Tooltip(tooltipTriggerEl);
            });
        });
    };
    const initPopup = () => {
        composeMailModal.value = new window.bootstrap.Modal(document.getElementById("composeMailModal"));
    };
    const quillEditorReady = (quill) => {
        quillEditorObj.value = quill;
    };
    const bind_mail_list = () => {
        const c_dt = new Date();
        mail_list.value = [
            {
                id: 1,
                path: "profile-16.jpeg",
                first_name: "Laurie",
                last_name: "Fox",
                email: "laurieFox@mail.com",
                date: c_dt.getMonth() + 1 + "/" + c_dt.getDate() + "/" + c_dt.getFullYear(),
                time: "2:00 PM",
                title: "Promotion Page",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "inbox",
                is_important: false,
                group: "social",
                is_unread: false,
                attachments: [
                    { name: "Confirm File.txt", size: "450KB", type: "file" },
                    { name: "Important Docs.xml", size: "2.1MB", type: "file" },
                ],
                description: `
      <p class="mail-content"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
      <div class="gallery text-center">
          <img alt="image-gallery" src="/assets/images/scroll-6.jpeg" class="img-fluid mb-4 mt-4" style="width: 250px; height: 180px;">
          <img alt="image-gallery" src="/assets/images/scroll-7.jpeg" class="img-fluid mb-4 mt-4" style="width: 250px; height: 180px;">
          <img alt="image-gallery" src="/assets/images/scroll-8.jpeg" class="img-fluid mb-4 mt-4" style="width: 250px; height: 180px;">
      </div>
      <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      `,
            },
            {
                id: 2,
                path: "profile-19.jpeg",
                first_name: "Andy",
                last_name: "King",
                email: "kingAndy@mail.com",
                date: c_dt.getMonth() + 1 + "/" + c_dt.getDate() + "/" + c_dt.getFullYear(),
                time: "6:28 PM",
                title: "Hosting Payment Reminder",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "inbox",
                is_important: false,
                group: "",
                is_unread: false,
                description: `
      <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
      <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      `,
            },
            {
                id: 3,
                path: "",
                first_name: "Kristen",
                last_name: "Beck",
                email: "kirsten.beck@mail.com",
                date: c_dt.getMonth() + 1 + "/" + c_dt.getDate() + "/" + c_dt.getFullYear(),
                time: "11:09 AM",
                title: "Verification Link",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "inbox",
                is_important: false,
                group: "social",
                is_unread: true,
                description: `
      <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
      <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      `,
            },
            {
                id: 4,
                path: "profile-34.jpeg",
                first_name: "Christian",
                last_name: "",
                email: "christian@mail.com",
                date: "11/30/2021",
                time: "2:00 PM",
                title: "New Updates",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "inbox",
                is_important: false,
                group: "private",
                is_unread: false,
                attachments: [{ name: "update.zip", size: "1.38MB", type: "zip" }],
                description: `
      <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
      <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      `,
            },
            {
                id: 5,
                path: "profile-31.jpeg",
                first_name: "Roxanne",
                last_name: "",
                email: "roxanne@mail.com",
                date: "11/15/2021",
                time: "2:00 PM",
                title: "Schedular Alert",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "inbox",
                is_important: false,
                group: "personal",
                is_unread: true,
                description: `
      <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
      <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      `,
            },
            {
                id: 6,
                path: "profile-17.jpeg",
                first_name: "Nia",
                last_name: "Hillyer",
                email: "niahillyer@mail.com",
                date: "08/16/2020",
                time: "2:22 AM",
                title: "Motion UI Kit",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "inbox",
                is_important: true,
                group: "",
                is_unread: false,
                description: `
      <p class="mail-content"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
      <div class="gallery text-center">
          <img alt="image-gallery" src="/assets/images/scroll-6.jpeg" class="img-fluid mb-4 mt-4" style="width: 250px; height: 180px;">
          <img alt="image-gallery" src="/assets/images/scroll-7.jpeg" class="img-fluid mb-4 mt-4" style="width: 250px; height: 180px;">
          <img alt="image-gallery" src="/assets/images/scroll-8.jpeg" class="img-fluid mb-4 mt-4" style="width: 250px; height: 180px;">
      </div>
      <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      `,
            },
            {
                id: 7,
                path: "profile-23.jpeg",
                first_name: "Iris",
                last_name: "Hubbard",
                email: "irishubbard@mail.com",
                date: "08/16/2020",
                time: "1:40 PM",
                title: "Green Illustration",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "inbox",
                is_important: true,
                group: "",
                is_unread: false,
                description: `
      <p class="mail-content"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
      <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      `,
            },
            {
                id: 8,
                path: "",
                first_name: "Ernest",
                last_name: "Reeves",
                email: "reevesErnest@mail.com",
                date: "06/02/2020",
                time: "8:25 PM",
                title: "Youtube",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "inbox",
                is_important: true,
                group: "work",
                is_unread: false,
                description: `
      <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
      <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      `,
            },
            {
                id: 9,
                path: "profile-15.jpeg",
                first_name: "Info",
                last_name: "Company",
                email: "infocompany@mail.com",
                date: "02/10/2020",
                time: "7:00 PM",
                title: "50% Discount",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "inbox",
                is_important: false,
                group: "work",
                is_unread: false,
                description: `
      <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
      <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      `,
            },
            {
                id: 10,
                path: "",
                first_name: "NPM",
                last_name: "Inc",
                email: "npminc@mail.com",
                date: "12/15/2018",
                time: "8:37 AM",
                title: "npm Inc",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "inbox",
                is_important: false,
                group: "personal",
                is_unread: true,
                attachments: [{ name: "package.zip", size: "450KB", type: "zip" }],
                description: `
      <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
      <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      `,
            },
            {
                id: 11,
                path: "profile-18.jpeg",
                first_name: "Marlene",
                last_name: "Wood",
                email: "marlenewood@mail.com",
                date: "11/25/2018",
                time: "1:51 PM",
                title: "eBill",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "inbox",
                is_important: false,
                group: "personal",
                is_unread: false,
                description: `
      <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
      <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      `,
            },

            {
                id: 12,
                path: "",
                first_name: "Keith",
                last_name: "Foster",
                email: "kf@mail.com",
                date: "12/15/2018",
                time: "9:30 PM",
                title: "Web Design News",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "draft",
                is_important: false,
                group: "personal",
                is_unread: false,
                description: `
      <p class="mail-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>
      `,
            },
            {
                id: 13,
                path: "",
                first_name: "Amy",
                last_name: "Diaz",
                email: "amyDiaz@mail.com",
                date: "12/15/2018",
                time: "2:00 PM",
                title: "Ecommerce Analytics",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "draft",
                is_important: false,
                group: "private",
                is_unread: false,
                description: `
      <p class="mail-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>
      `,
            },

            {
                id: 14,
                path: "",
                first_name: "Alan",
                last_name: "",
                email: "alan@mail.com",
                date: "12/16/2019",
                time: "8:45 AM",
                title: "Mozilla Update",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "sent_mail",
                is_important: false,
                group: "work",
                is_unread: false,
                attachments: [
                    { name: "Confirm File", size: "450KB", type: "file" },
                    { name: "Important Docs", size: "2.1MB", type: "folder" },
                    { name: "Photo.png", size: "50kb", type: "image" },
                ],
                description: `
      <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
      <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      `,
            },
            {
                id: 15,
                path: "",
                first_name: "Justin",
                last_name: "Cross",
                email: "justincross@mail.com",
                date: "09/14/219",
                time: "3:10 PM",
                title: "App Project Checklist",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "sent_mail",
                is_important: false,
                group: "",
                is_unread: false,
                attachments: [
                    { name: "Important Docs", size: "2.1MB", type: "folder" },
                    { name: "Photo.png", size: "50kb", type: "image" },
                ],
                description: `
      <p class="mail-content"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
      <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      `,
            },

            {
                id: 16,
                path: "profile-18.jpeg",
                first_name: "Alex",
                last_name: "Gray",
                email: "alexGray@mail.com",
                date: "08/16/2019",
                time: "10:18 AM",
                title: "Weekly Newsletter",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "spam",
                is_important: false,
                group: "",
                is_unread: false,
                attachments: [
                    { name: "Confirm File", size: "450KB", type: "file" },
                    { name: "Important Docs", size: "2.1MB", type: "folder" },
                    { name: "Photo.png", size: "50kb", type: "image" },
                ],
                description: `
      <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
      <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      `,
            },
            {
                id: 17,
                path: "profile-15.jpeg",
                first_name: "Info",
                last_name: "Company",
                email: "infocompany@mail.com",
                date: "02/10/2018",
                time: "7:00 PM",
                title: "50% Discount",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "spam",
                is_important: false,
                group: "work",
                is_unread: false,
                description: `
      <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
      <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      `,
            },
            {
                id: 18,
                path: "profile-18.jpeg",
                first_name: "Marlene",
                last_name: "Wood",
                email: "marlenewood@mail.com",
                date: "11/25/2017",
                time: "1:51 PM",
                title: "eBill",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "spam",
                is_important: false,
                group: "personal",
                is_unread: false,
                description: `
      <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
      <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      `,
            },

            {
                id: 19,
                path: "profile-13.jpeg",
                first_name: "Ryan MC",
                last_name: "Killop",
                email: "ryanMCkillop@mail.com",
                date: "08/17/2018",
                time: "11:45 PM",
                title: "Make it Simple",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "trash",
                is_important: false,
                group: "",
                is_unread: false,
                description: `
      <p class="mail-content"> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
      <div class="gallery text-center">
          <img alt="image-gallery" src="/assets/images/scroll-6.jpeg" class="img-fluid mb-4 mt-4" style="width: 250px; height: 180px;">
          <img alt="image-gallery" src="/assets/images/scroll-7.jpeg" class="img-fluid mb-4 mt-4" style="width: 250px; height: 180px;">
          <img alt="image-gallery" src="/assets/images/scroll-8.jpeg" class="img-fluid mb-4 mt-4" style="width: 250px; height: 180px;">
      </div>
      <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      `,
            },
            {
                id: 20,
                path: "profile-23.jpeg",
                first_name: "Liam",
                last_name: "Sheldon",
                email: "liamsheldon@mail.com",
                date: "08/17/2018 ",
                time: "11:45 PM",
                title: "New Offers",
                display_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
                type: "trash",
                is_important: false,
                group: "",
                is_unread: false,
                attachments: [{ name: "Confirm File", size: "450KB", type: "file" }],
                description: `
      <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
      <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      `,
            },
        ];

        search_mails();
    };
    const tab_changed = (type) => {
        selected_tab.value = type;
        search_mails();
        is_show_mail_menu.value = false;
    };

    const search_mails = () => {
        let res;
        if (selected_tab.value == "important") {
            res = mail_list.value.filter((d) => d.is_important);
        } else if (selected_tab.value == "personal" || selected_tab.value == "work" || selected_tab.value == "social" || selected_tab.value == "private") {
            res = mail_list.value.filter((d) => d.group == selected_tab.value);
        } else {
            res = mail_list.value.filter((d) => d.type == selected_tab.value);
        }
        filtered_mail_list.value = res.filter(
            (d) =>
                (d.title && d.title.toLowerCase().includes(search_mail.value)) ||
                (d.first_name && d.first_name.toLowerCase().includes(search_mail.value)) ||
                (d.last_name && d.last_name.toLowerCase().includes(search_mail.value)) ||
                (d.display_description && d.display_description.toLowerCase().includes(search_mail.value))
        );

        clear_selection();
    };

    const select_mail = (item) => {
        if (item) {
            if (item.type != "draft") {
                if (item && item.is_unread) {
                    item.is_unread = false;
                }
                selected_mail.value = item;
            } else {
                open_mail("draft", item);
            }
        } else {
            selected_mail.value = "";
        }

        initTooltip();
    };
    const show_time = (item) => {
        const display_dt = new Date(item.date);
        const c_dt = new Date();
        if (display_dt.toDateString() == c_dt.toDateString()) {
            return item.time;
        } else {
            if (display_dt.getFullYear() == c_dt.getFullYear()) {
                var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                return monthNames[display_dt.getMonth()] + " " + String(display_dt.getDate()).padStart(2, "0");
            } else {
                return String(display_dt.getMonth() + 1).padStart(2, "0") + "/" + String(display_dt.getDate()).padStart(2, "0") + "/" + display_dt.getFullYear();
            }
        }
    };
    const check_all = (is_checked) => {
        if (is_checked) {
            ids.value = filtered_mail_list.value.map((d) => {
                return d.id;
            });
        } else {
            clear_selection();
        }
    };
    const clear_selection = () => {
        ids.value = [];
    };

    const set_group = (group) => {
        if (ids.value.length) {
            let items = filtered_mail_list.value.filter((d) => ids.value.includes(d.id));
            for (let item of items) {
                item.group = group;
            }

            showMessage(ids.value.length + " Mail Grouped as " + group.toUpperCase());
            clear_selection();
        }
    };
    const set_important = () => {
        if (ids.value.length) {
            let items = filtered_mail_list.value.filter((d) => ids.value.includes(d.id));
            for (let item of items) {
                item.is_important = !item.is_important;
            }
            if (selected_tab.value == "important") {
                showMessage(ids.value.length + " Mail removed from Important.");
            } else {
                showMessage(ids.value.length + " Mail added to Important.");
            }
            tab_changed("important");
        }
    };

    const set_spam = () => {
        if (ids.value.length) {
            let items = filtered_mail_list.value.filter((d) => ids.value.includes(d.id));
            for (let item of items) {
                item.type = item.type == "spam" ? "inbox" : "spam";
            }

            if (selected_tab.value == "spam") {
                showMessage(ids.value.length + " Mail removed from Spam.");
            } else {
                showMessage(ids.value.length + " Mail added to Spam.");
            }
            tab_changed("spam");
        }
    };

    const set_action = (type) => {
        if (ids.value.length) {
            let items = filtered_mail_list.value.filter((d) => ids.value.includes(d.id));
            for (let item of items) {
                if (type == "trash") {
                    item.type = "trash";
                    showMessage(ids.value.length + " Mail deleted.");
                    tab_changed("trash");
                } else if (type == "read") {
                    item.is_unread = false;
                    showMessage(ids.value.length + " Mail marked as Read.");
                } else if (type == "unread") {
                    item.is_unread = true;
                    showMessage(ids.value.length + " Mail marked as UnRead.");
                }
                //restore & permanent delete
                else if (type == "restore") {
                    item.type = "inbox";
                    showMessage(ids.value.length + " Mail Restored.");
                    tab_changed("inbox");
                } else if (type == "delete") {
                    mail_list = mail_list.value.filter((d) => d.id != item.id);
                    showMessage(ids.value.length + " Mail Permanently Deleted.");
                    tab_changed("trash");
                }
            }
            clear_selection();
        }
    };

    const open_mail = (type, item) => {
        mail_popup_type.value = type;
        if (type == "add") {
            params.value = JSON.parse(JSON.stringify(default_data));
        } else if (type == "draft") {
            let data = JSON.parse(JSON.stringify(item));
            params.value = data;
            params.value.from = default_data.from;
            params.value.to = data.email;
        } else if (type == "reply") {
            let data = JSON.parse(JSON.stringify(item));
            params.value = data;
            params.value.from = default_data.from;
            params.value.to = data.email;
            params.value.title = "Re: " + params.value.title;
        } else if (type == "forward") {
            let data = JSON.parse(JSON.stringify(item));
            params.value = data;
            params.value.from = default_data.from;
            params.value.to = data.email;
            params.value.title = "Fwd: " + params.value.title;
        }

        composeMailModal.value.show();
    };
    const save_mail = (type) => {
        if (!params.value.to) {
            showMessage("To email address is required.", "error");
            return true;
        }
        if (!params.value.title) {
            showMessage("Subject is required.", "error");
            return true;
        }

        let max_id = 0;
        if (!params.value.id) {
            max_id = mail_list.value.reduce((max, character) => (character.id > max ? character.id : max), mail_list.value[0].id);
        }
        let c_dt = new Date();

        let obj = {
            id: max_id + 1,
            path: "",
            first_name: "",
            last_name: "",
            email: params.value.to,
            date: c_dt.getMonth() + 1 + "/" + c_dt.getDate() + "/" + c_dt.getFullYear(),
            time: c_dt.toLocaleTimeString(),
            title: params.value.title,
            display_description: quillEditorObj.value.getText(),
            type: "draft",
            is_important: false,
            group: "",
            is_unread: false,
            description: params.value.description,
            attachments: [],
        };
        if (params.value.file && params.value.file.length) {
            for (let file of params.value.file) {
                let fl_obj = { name: file.name, size: get_file_size(file.size), type: get_file_type(file.type) };
                obj.attachments.push(fl_obj);
            }
        }

        if (type == "save" || type == "save_reply" || type == "save_forward") {
            //saved to draft

            obj.type = "draft";
            mail_list.value.splice(0, 0, obj);
            tab_changed("draft");

            showMessage("Successfully Saved to Draft.");
        } else if (type == "send" || type == "reply" || type == "forward") {
            //saved to sent mail

            obj.type = "sent_mail";
            mail_list.value.splice(0, 0, obj);
            tab_changed("sent_mail");

            showMessage("Mail Sent Successfully.");
        }

        selected_mail.value = null;
        composeMailModal.value.hide();
    };

    const get_file_type = (file_type) => {
        let type = "file";
        if (file_type.includes("image/")) {
            type = "image";
        } else if (file_type.includes("application/x-zip")) {
            type = "zip";
        }
        return type;
    };
    const get_file_size = (total_bytes) => {
        let size = "";
        if (total_bytes < 1000000) {
            size = Math.floor(total_bytes / 1000) + "KB";
        } else {
            size = Math.floor(total_bytes / 1000000) + "MB";
        }
        return size;
    };
    const showMessage = (msg = "", type = "success") => {
        const toast = window.Swal.mixin({ toast: true, position: "top", showConfirmButton: false, timer: 3000 });
        toast.fire({ icon: type, title: msg, padding: "10px 20px" });
    };
</script>
