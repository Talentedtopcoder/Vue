<template>
    <div class="layout-px-spacing todo-list">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Todo List</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="mail-box-container">
                    <div class="mail-overlay" :class="{ 'mail-overlay-show': is_show_task_menu }" @click="is_show_task_menu = false"></div>

                    <div class="tab-title" :class="{ 'mail-menu-show': is_show_task_menu }">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-12 text-center">
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
                                <h5 class="app-title">Todo List</h5>
                            </div>

                            <!-- <perfect-scrollbar class="todoList-sidebar-scroll"> -->
                            <perfect-scrollbar class="todoList-sidebar-scroll col-md-12 col-sm-12 col-12 mt-4 ps-0">
                                <ul class="nav nav-pills d-block">
                                    <li class="nav-item" @click="tab_changed('')">
                                        <a id="all-list" href="javascript:;" class="nav-link" :class="{ active: selected_tab === '' }">
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
                                            Inbox
                                            <span class="todo-badge badge">
                                                {{ task_list && task_list.filter((d) => d.status != "trash").length }}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="nav-item" @click="tab_changed('complete')">
                                        <a id="todo-task-done" href="javascript:;" class="nav-link" :class="{ active: selected_tab === 'complete' }">
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
                                            Done
                                            <span class="todo-badge badge">
                                                {{ task_list && task_list.filter((d) => d.status == "complete").length }}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="nav-item" @click="tab_changed('important')">
                                        <a id="todo-task-important" href="javascript:;" class="nav-link" :class="{ active: selected_tab === 'important' }">
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
                                            Important
                                            <span class="todo-badge badge">
                                                {{ task_list && task_list.filter((d) => d.status == "important").length }}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="nav-item" @click="tab_changed('trash')">
                                        <a id="todo-task-trash" href="javascript:;" class="nav-link" :class="{ active: selected_tab === 'trash' }">
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
                                                class="feather feather-trash-2"
                                            >
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                            </svg>
                                            Trash
                                        </a>
                                    </li>
                                </ul>
                            </perfect-scrollbar>
                            <!-- </perfect-scrollbar> -->

                            <a class="btn w-auto" id="addTask" href="javascript:;" @click="edit_task()">
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
                                New Task
                            </a>
                        </div>
                    </div>

                    <div id="todo-inbox" class="accordion todo-inbox">
                        <div class="search">
                            <input type="text" v-model="search_task" class="input-search form-control" v-on:keyup="search_tasks()" placeholder="Search Here..." />
                            <div class="d-flex align-items-center" @click="is_show_task_menu = !is_show_task_menu">
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
                            </div>
                        </div>

                        <div class="todo-box">
                            <perfect-scrollbar class="todo-box-scroll" :options="{ wheelSpeed: 0.5, swipeEasing: !0, minScrollbarLength: 40, maxScrollbarLength: 300, suppressScrollX: true }">
                                <div v-for="task in filtered_task_list" class="todo-item all-list" :class="{ 'todo-task-done': task.status == 'complete' }" :key="task.task_id">
                                    <div class="todo-item-inner">
                                        <div class="checkbox-primary new-control custom-control custom-checkbox">
                                            <input type="checkbox" :id="`chk-${task.task_id}`" class="custom-control-input" :checked="task.status == 'complete'" @change="task_complete(task)" /><label
                                                class="custom-control-label"
                                                :for="`chk-${task.task_id}`"
                                            ></label>
                                        </div>

                                        <div class="todo-content" data-bs-toggle="modal" data-bs-target="#todoShowListItem" @click="view_task(task)">
                                            <h5 class="todo-heading">{{ task.title }}</h5>
                                            <p class="meta-date">{{ task.date }}</p>
                                            <p class="todo-text">{{ task.description_text }}</p>
                                        </div>

                                        <div class="priority-dropdown">
                                            <div class="dropdown btn-group">
                                                <a href="javascript:;" id="ddlPriority" class="btn dropdown-toggle btn-icon-only" data-bs-toggle="dropdown" aria-expanded="false" :class="[priority_class(task)]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style="width: 24px; height: 24px"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-alert-octagon"
                                                    >
                                                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                                        <line x1="12" y1="16" x2="12" y2="16"></line>
                                                    </svg>
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlPriority">
                                                    <li>
                                                        <a href="javascript:;" class="dropdown-item danger" @click="set_priority(task, 'high')">
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
                                                                class="feather feather-alert-octagon"
                                                            >
                                                                <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                                                <line x1="12" y1="16" x2="12" y2="16"></line>
                                                            </svg>
                                                            High
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="dropdown-item warning" @click="set_priority(task, 'middle')">
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
                                                                class="feather feather-alert-octagon"
                                                            >
                                                                <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                                                <line x1="12" y1="16" x2="12" y2="16"></line>
                                                            </svg>
                                                            Middle
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="dropdown-item primary" @click="set_priority(task, 'low')">
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
                                                                class="feather feather-alert-octagon"
                                                            >
                                                                <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                                                <line x1="12" y1="16" x2="12" y2="16"></line>
                                                            </svg>
                                                            Low
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="action-dropdown">
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
                                                    <template v-if="task.status == 'trash'">
                                                        <li><a href="javascript:;" class="dropdown-item" @click="delete_task(task, 'delete_permanent')">Permanent Delete</a></li>
                                                        <li><a href="javascript:;" class="dropdown-item" @click="delete_task(task, 'restore')">Revive Task</a></li>
                                                    </template>
                                                    <template v-else>
                                                        <li><a href="javascript:;" class="dropdown-item" @click="edit_task(task)">Edit</a></li>
                                                        <li v-if="task.status == 'important'"><a href="javascript:;" class="dropdown-item" @click="set_important(task)">Back to List</a></li>
                                                        <li v-else><a href="javascript:;" class="dropdown-item" @click="set_important(task)">Important</a></li>
                                                        <li><a href="javascript:;" class="dropdown-item" @click="delete_task(task, 'delete')">Delete</a></li>
                                                    </template>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </perfect-scrollbar>
                        </div>
                    </div>
                </div>

                <!-- Modal -->
                <div id="todoShowListItem" class="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-md modal-dialog-centered">
                        <div class="modal-content todolist-popup" v-if="selected_task">
                            <div class="modal-header">
                                <h5 class="modal-title task-heading">{{ selected_task.title }}</h5>
                                <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="compose-box">
                                    <div class="compose-content">
                                        <p class="task-text overflow-auto" v-html="selected_task.description"></p>
                                    </div>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal" data-bs-dismiss="modal">
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
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="addTaskModal" class="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-md modal-dialog-centered">
                        <div class="modal-content todolist-popup">
                            <div class="modal-header">
                                <h5 class="modal-title">{{ params.task_id ? "Update Task" : "Add Task" }}</h5>
                                <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="compose-box">
                                    <div class="compose-content">
                                        <form>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group mb-4">
                                                        <label>Title</label>
                                                        <div class="w-100">
                                                            <input type="text" v-model="params.title" class="form-control" placeholder="Title" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label>Description</label>
                                                        <div class="w-100">
                                                            <quill-editor ref="editor" v-model:value="params.description" :options="editor_options" style="min-height: 200px" @ready="quillEditorReady($event)"></quill-editor>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal" data-bs-dismiss="modal">Discard</button>
                                <button type="button" class="btn btn-primary" @click="save_task()">{{ params.task_id ? "Update" : "Add" }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .todo-inbox .todo-item .todo-item-inner .action-dropdown .dropdown-menu.show,
    .todo-inbox .todo-item .todo-item-inner .priority-dropdown .dropdown-menu.show {
        top: 10px !important;
    }

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
    #addTaskModal .ql-toolbar.ql-snow {
        border: 1px solid #bfc9d4;
        box-sizing: border-box;
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        padding: 8px;
        border-radius: 6px;
        margin-top: 0;
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
    import { onMounted, ref } from "vue";
    import { quillEditor } from "vue3-quill";
    import "vue3-quill/lib/vue3-quill.css";
    import "../../assets/sass/apps/todolist.scss";

    import "../../assets/sass/components/custom-modal.scss";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Todo List" });

    const is_show_task_menu = ref(false);
    const params = ref({ task_id: null, title: "", description: "" });
    const tab_index = ref(0);
    const task_list = ref([]);
    const filtered_task_list = ref([]);
    const search_task = ref("");
    const selected_tab = ref("");
    const selected_task = ref(null);
    const editor_options = ref({
        modules: {
            toolbar: [[{ header: [1, 2, false] }], ["bold", "italic", "underline"], ["image", "code-block"]],
        },
    });
    let addTaskModal = ref(null);
    let quillEditorData = ref(null);

    onMounted(() => {
        initPopup();
        bind_task_list();
    });

    const initPopup = () => {
        addTaskModal = new window.bootstrap.Modal(document.getElementById("addTaskModal"));
    };

    const quillEditorReady = (quill) => {
        quillEditorData = quill;
    };
    const bind_task_list = () => {
        task_list.value = [
            {
                task_id: 1,
                title: "Meeting with Shaun Park at 4:50pm",
                date: "Aug, 07 2020",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                description_text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                priority: "middle",
                status: "",
            },
            {
                task_id: 2,
                title: "Team meet at Starbucks",
                date: "Aug, 06 2020",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                description_text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                priority: "low",
                status: "",
            },
            {
                task_id: 3,
                title: "Meet Lisa to discuss project details",
                date: "Aug, 05 2020",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                description_text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                priority: "middle",
                status: "complete",
            },
            {
                task_id: 4,
                title: "Download Complete",
                date: "Aug, 04 2020",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                description_text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                priority: "low",
                status: "",
            },
            {
                task_id: 5,
                title: "Conference call with Marketing Manager",
                date: "Aug, 03 2020",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                description_text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                priority: "high",
                status: "important",
            },
            {
                task_id: 6,
                title: "New User Registered",
                date: "Aug, 02 2020",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                description_text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                priority: "middle",
                status: "important",
            },
            {
                task_id: 7,
                title: "Fix issues in new project",
                date: "Aug, 01 2020",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                description_text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                priority: "middle",
                status: "",
            },
            {
                task_id: 8,
                title: "Check All functionality",
                date: "Aug, 07 2020",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                description_text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                priority: "middle",
                status: "important",
            },
            {
                task_id: 9,
                title: "Check Repository",
                date: "Aug, 07 2020",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                description_text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                priority: "middle",
                status: "complete",
            },
            {
                task_id: 10,
                title: "Trashed Tasks",
                date: "Aug, 08 2020",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                description_text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                priority: "middle",
                status: "trash",
            },
            {
                task_id: 11,
                title: "Trashed Tasks 2",
                date: "Aug, 09 2020",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                description_text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                priority: "middle",
                status: "trash",
            },
            {
                task_id: 12,
                title: "Trashed Tasks 3",
                date: "Aug, 10 2020",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                description_text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",
                priority: "middle",
                status: "trash",
            },
        ];
        search_tasks();
    };

    const tab_changed = (type) => {
        selected_tab.value = type;
        search_tasks();
        is_show_task_menu.value = false;
    };

    const search_tasks = () => {
        let res;
        if (selected_tab.value) {
            res = task_list.value.filter((d) => d.status == selected_tab.value);
        } else {
            res = task_list.value.filter((d) => d.status != "trash");
        }
        filtered_task_list.value = res.filter((d) => d.title.toLowerCase().includes(search_task.value));
    };
    const priority_class = (task) => {
        if (task.priority == "low") {
            return "primary";
        } else if (task.priority == "middle") {
            return "warning";
        } else if (task.priority == "high") {
            return "danger";
        }
    };
    const set_priority = (task, name) => {
        task.priority = name;
    };
    const task_complete = (task) => {
        if (!task.status) {
            task.status = "complete";
        } else {
            task.status = "";
        }
    };
    const set_important = (task) => {
        if (task.status == "important") {
            task.status = "";
            tab_index.value = 0;
            tab_changed("");
        } else {
            task.status = "important";
        }
    };
    const delete_task = (task, type) => {
        if (type == "delete") {
            task.status = "trash";
        }
        if (type == "delete_permanent") {
            task_list.value = task_list.value.filter((d) => d.task_id != task.task_id);
        } else if (type == "restore") {
            task.status = "";
        }
        search_tasks();
    };
    const view_task = (task) => {
        selected_task.value = task;
    };

    const edit_task = (task) => {
        params.value = { task_id: null, title: "", description: "" };
        if (task) {
            params.value = JSON.parse(JSON.stringify(task));
        }
        addTaskModal.show();
    };

    const save_task = () => {
        if (!params.value.title) {
            showMessage("Title is required.", "error");
            return false;
        }
        let description_text = quillEditorData.getText();
        if (params.value.task_id) {
            //update task
            let task = task_list.value.find((d) => d.task_id == params.value.task_id);
            task.title = params.value.title;
            task.description = params.value.description;
            task.description_text = description_text;
        } else {
            //add task
            const max_task_id = task_list.value.reduce((max, character) => (character.task_id > max ? character.task_id : max), task_list.value[0].task_id);

            let today = new Date();
            var dd = String(today.getDate()).padStart(2, "0");
            var mm = String(today.getMonth()); //January is 0!
            var yyyy = today.getFullYear();
            var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            let task = {
                task_id: max_task_id + 1,
                title: params.value.title,
                description: params.value.description,
                description_text: description_text,
                date: monthNames[mm] + ", " + dd + " " + yyyy,
                priority: "low",
                status: "",
            };
            task_list.value.splice(0, 0, task);
            search_tasks();
        }

        showMessage("Task saved successfully.");
        addTaskModal.hide();
    };

    const showMessage = (msg = "", type = "success") => {
        const toast = window.Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: "10px 20px",
        });
    };
</script>
