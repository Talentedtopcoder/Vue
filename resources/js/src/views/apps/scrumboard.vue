<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Scrumboard</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="action-btn layout-top-spacing mb-5">
            <button type="button" id="add-list" class="btn btn-primary" @click="edit_project()">Add List</button>
        </div>

        <div class="row scrumboard" id="cancel-row">
            <div class="col-lg-12 layout-spacing">
                <div class="task-list-section">
                    <div v-for="project in project_list" :key="project.id" class="task-list-container">
                        <div class="connect-sorting">
                            <div class="task-container-header">
                                <h6 class="s-heading" data-listTitle="In Progress">{{ project.title }}</h6>
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
                                            class="feather feather-more-horizontal"
                                        >
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlMore">
                                        <li><a href="javascript:;" class="dropdown-item" @click="edit_project(project)">Edit</a></li>
                                        <li><a href="javascript:;" class="dropdown-item" @click="delete_project(project)">Delete</a></li>
                                        <li><a href="javascript:;" class="dropdown-item" @click="clear_project(project)">Clear All</a></li>
                                    </ul>
                                </div>
                            </div>

                            <draggable class="connect-sorting-content" group="default" ghost-class="ui-state-highlight" drag-class="ui-sortable-helper" :animation="200">
                                <div v-for="task in project.tasks" :key="project.id + '' + task.task_id" class="card task-text-progress cursor-move ui-sortable-handle">
                                    <div class="card-body">
                                        <div v-if="task.image" class="px-2 pt-2">
                                            <img src="/assets/images/taskboard.jpg" class="img-fluid rounded" alt="scrumboard" />
                                        </div>

                                        <div class="task-header">
                                            <h4>{{ task.title }}</h4>
                                        </div>

                                        <div class="task-body">
                                            <div v-if="task.description" class="task-content">
                                                <p>{{ task.description }}</p>
                                            </div>
                                            <div class="task-bottom">
                                                <div class="tb-section-1">
                                                    <span>
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
                                                            class="feather feather-calendar"
                                                        >
                                                            <rect x="3" y="4" width="20" height="20" rx="2" ry="2"></rect>
                                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                                        </svg>
                                                        {{ task.date }}
                                                    </span>
                                                </div>
                                                <div class="tb-section-2">
                                                    <a href="javascript:;" @click="edit_task(project.id, task)">
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
                                                            class="feather feather-edit-2 s-task-edit"
                                                        >
                                                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                                        </svg>
                                                    </a>
                                                    <a href="javascript:;" @click="delete_confirm(project.id, task)">
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
                                                            class="feather feather-trash-2 s-task-delete"
                                                        >
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </draggable>

                            <div class="add-s-task">
                                <a href="javascript:;" class="addTask" @click="edit_task(project.id)">
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
                                    Add Task
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div id="addListModal" class="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-md modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ params.id ? "Edit List" : "Add List" }}</h5>
                        <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="compose-box">
                            <div class="compose-content" id="addListModalTitle">
                                <form action="javascript:void(0);">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group mb-0">
                                                <label>Name</label>
                                                <input type="text" v-model="params.title" class="form-control" placeholder="Name" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" data-bs-dismiss="modal">Discard</button>
                        <button type="button" class="btn btn-primary" @click="save_project()">{{ params.id ? "Update List" : "Add List" }}</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="addTaskModal" class="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-md modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ params_task.task_id ? "Edit Task" : "Add Task" }}</h5>
                        <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="compose-box">
                            <div class="compose-content" id="addTaskModalTitle">
                                <div class="addTaskAccordion" id="add_task_accordion">
                                    <div class="card task-text-progress">
                                        <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#add_task_accordion">
                                            <div class="card-body p-0">
                                                <form action="javascript:void(0);">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group mb-4">
                                                                <label>Title</label>
                                                                <input type="text" v-model="params_task.title" class="form-control" placeholder="Title" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group mb-0">
                                                                <label>Description</label>
                                                                <textarea v-model="params_task.description" class="form-control" rows="5" placeholder="Description"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" data-bs-toggle="modal" data-bs-target="#addTaskModal">Discard</button>
                        <button type="button" data-btnfn="addTask" class="btn btn-primary" @click="save_task()">{{ params_task.task_id ? "Update Task" : "Add Task" }}</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="deleteConformation" class="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-md modal-dialog-centered">
                <div class="modal-content mailbox-popup">
                    <div class="modal-header">
                        <div class="icon">
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
                        </div>
                        <h5 class="modal-title" id="exampleModalLabel">Delete the task?</h5>
                        <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="">If you delete the task it will be gone forever. Are you sure you want to proceed?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" data-remove="task" class="btn btn-danger" @click="delete_task()">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from "vue";

    import "../../assets/sass/apps/scrumboard.scss";
    import { VueDraggableNext as draggable } from "vue-draggable-next";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Scrum Task Board" });

    const params = ref({ id: null, title: "" });
    const params_task = ref({ project_id: null, task_id: null, title: "", description: "" });
    const project_list = ref([]);
    const deleted_task = ref({ project_id: null, task_id: null });
    let addListModal = ref(null);
    let addTaskModal = ref(null);
    let deleteConformation = ref(null);

    onMounted(() => {
        initPopup();
        bind_project_list();
    });

    const initPopup = () => {
        addListModal = new window.bootstrap.Modal(document.getElementById("addListModal"));
        addTaskModal = new window.bootstrap.Modal(document.getElementById("addTaskModal"));
        deleteConformation = new window.bootstrap.Modal(document.getElementById("deleteConformation"));
    };

    const bind_project_list = () => {
        project_list.value = [
            {
                id: 1,
                title: "In Progress",
                tasks: [
                    { task_id: 1, title: "Creating a new Portfolio on Dribble", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", image: true, date: " 08 Aug, 2020" },
                    { task_id: 2, title: "Singapore Team Meet", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", date: " 09 Aug, 2020" },
                ],
            },
            {
                id: 2,
                title: "Complete",
                tasks: [
                    { task_id: 1, title: "Dinner with Kelly Young", description: "", date: " 08 Aug, 2020" },
                    {
                        task_id: 2,
                        title: "Launch New SEO Wordpress Theme ",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        date: " 09 Aug, 2020",
                    },
                ],
            },
            {
                id: 3,
                title: "New",
                tasks: [],
            },
        ];
    };

    //Project
    const edit_project = (project) => {
        params.value = { id: null, title: "" };
        if (project) {
            params.value = JSON.parse(JSON.stringify(project));
        }

        addListModal.show();
    };
    const save_project = () => {
        if (!params.value.title) {
            showMessage("Title is required.", "error");
            return true;
        }

        if (params.value.id) {
            //update project
            let project = project_list.value.find((d) => d.id == params.value.id);
            project.title = params.value.title;
        } else {
            //add project
            let max_project_id = project_list.value.reduce((max, character) => (character.id > max ? character.id : max), project_list.value[0].id);
            if (!max_project_id) {
                max_project_id = 0;
            }

            let project = {
                id: max_project_id + 1,
                title: params.value.title,
                tasks: [],
            };
            project_list.value.push(project);
        }

        showMessage("Project saved successfully.");
        addListModal.hide();
    };
    const delete_project = (project) => {
        project_list.value = project_list.value.filter((d) => d.id != project.id);
        showMessage("Project deleted successfully.");
    };
    const clear_project = (project) => {
        project.tasks = [];
    };

    //Task

    const edit_task = (project_id, task) => {
        params_task.value = { project_id: null, task_id: null, title: "", description: "" };
        if (task) {
            params_task.value = JSON.parse(JSON.stringify(task));
        }
        params_task.value["project_id"] = project_id;
        addTaskModal.show();
    };

    const save_task = () => {
        if (!params_task.value.title) {
            showMessage("Title is required.", "error");
            return true;
        }

        let project = project_list.value.find((d) => d.id == params_task.value.project_id);
        if (params_task.value.task_id) {
            //update task
            let task = project.tasks.find((d) => d.task_id == params_task.value.task_id);
            task.title = params_task.value.title;
            task.description = params_task.value.description;
        } else {
            //add task
            let max_task_id = 0;
            if (project.tasks.length) {
                max_task_id = project.tasks.reduce((max, character) => (character.task_id > max ? character.task_id : max), project.tasks[0].task_id);
            }

            let today = new Date();
            var dd = String(today.getDate()).padStart(2, "0");
            var mm = String(today.getMonth()); //January is 0!
            var yyyy = today.getFullYear();
            var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            let task = {
                task_id: max_task_id + 1,
                title: params_task.value.title,
                description: params_task.value.description,
                date: dd + " " + monthNames[mm] + ", " + yyyy,
            };
            project.tasks.push(task);
        }

        showMessage("Task saved successfully.");
        addTaskModal.hide();
    };

    const delete_confirm = (project_id, task) => {
        deleted_task.value = { project_id: project_id, task_id: task.task_id };
        deleteConformation.show();
    };
    const delete_task = () => {
        let project = project_list.value.find((d) => d.id == deleted_task.value.project_id);
        project.tasks = project.tasks.filter((d) => d.task_id != deleted_task.value.task_id);

        showMessage("Task deleted successfully.");
        deleteConformation.hide();
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
