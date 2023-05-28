<template>
    <div class="layout-px-spacing apps-calendar">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    <span>Calendar</span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing" id="cancel-row">
            <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="statbox panel box box-shadow">
                    <div class="panel-body">
                        <div class="calendar-upper-section">
                            <div class="row">
                                <div class="col-md-8 col-12">
                                    <div class="labels text-md-start text-center">
                                        <p class="label label-primary">Work</p>
                                        <p class="label label-warning">Travel</p>
                                        <p class="label label-success">Personal</p>
                                        <p class="label label-danger">Important</p>
                                    </div>
                                </div>
                                <div class="col-md-4 col-12">
                                    <form class="form-horizontal mt-md-0 mt-3 text-md-end text-center">
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addEventsModal" @click="edit_event()">
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
                                                class="feather feather-calendar me-2"
                                            >
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                            </svg>
                                            Add Event
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <FullCalendar ref="calendar" :key="randomKey" :options="options">
                            <template v-slot:eventContent="arg">
                                <div class="fc-event-main-frame">
                                    <div class="fc-event-time">{{ arg.timeText }}</div>
                                    <div class="fc-event-title-container">
                                        <div class="fc-event-title fc-sticky">
                                            {{ arg.event.title }}
                                        </div>
                                    </div>

                                    <div class="calendar-tlp">
                                        <div class="p-2 bg-dark text-white text-start text-wrap">
                                            {{ arg.timeText + ' : ' + arg.event.title }}
                                        </div>
                                        <div class="p-2 text-start text-wrap">
                                            {{ arg.event.extendedProps ? arg.event.extendedProps.description : '' }}
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </FullCalendar>
                    </div>
                </div>
            </div>

            <!-- The Modal -->
            <div id="addEventsModal" class="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-md modal-dialog-centered">
                    <div class="modal-content mailbox-popup">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                {{ params.id ? 'Edit Event' : 'Add Event' }}
                            </h5>
                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group mb-4">
                                        <label for="start-date" class="">Event Title:</label>
                                        <input type="text" v-model="params.title" class="form-control" placeholder="Enter Title" />
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-6 col-12">
                                    <div class="form-group start-date mb-4">
                                        <label>From:</label>
                                        <flat-pickr
                                            v-model="params.start"
                                            :config="{
                                                enableTime: true,
                                                dateFormat: 'Y-m-d H:i:S',
                                                minDate: min_date_start,
                                            }"
                                            @on-change="start_date_change"
                                            class="form-control flatpickr active"
                                            placeholder="Start Date"
                                        ></flat-pickr>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-12">
                                    <div class="form-group end-date mb-4">
                                        <label for="end-date" class="">To:</label>
                                        <flat-pickr
                                            v-model="params.end"
                                            :config="{
                                                enableTime: true,
                                                dateFormat: 'Y-m-d H:i:S',
                                                minDate: min_date_end,
                                            }"
                                            @on-change="end_date_change"
                                            class="form-control flatpickr active"
                                            placeholder="End Date"
                                        ></flat-pickr>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group mb-4">
                                        <label class="">Event Description:</label>
                                        <textarea v-model="params.description" class="form-control" placeholder="Enter Description" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="event-badge">
                                        <label>Badge:</label>
                                        <div class="d-sm-flex d-block">
                                            <div class="radio-classic radio-primary me-2 custom-control custom-radio">
                                                <input v-model="params.className" type="radio" value="bg-primary" name="marker" class="custom-control-input" id="rdoWork" /><label
                                                    class="custom-control-label"
                                                    for="rdoWork"
                                                >
                                                    Work
                                                </label>
                                            </div>

                                            <div class="radio-classic radio-warning me-2 custom-control custom-radio">
                                                <input v-model="params.className" type="radio" value="bg-warning" name="marker" class="custom-control-input" id="rdoTravel" /><label
                                                    class="custom-control-label"
                                                    for="rdoTravel"
                                                >
                                                    Travel
                                                </label>
                                            </div>

                                            <div class="radio-classic radio-success me-2 custom-control custom-radio">
                                                <input v-model="params.className" type="radio" value="bg-success" name="marker" class="custom-control-input" id="rdoPersonal" /><label
                                                    class="custom-control-label"
                                                    for="rdoPersonal"
                                                >
                                                    Personal
                                                </label>
                                            </div>

                                            <div class="radio-classic radio-danger me-2 custom-control custom-radio">
                                                <input v-model="params.className" type="radio" value="bg-danger" name="marker" class="custom-control-input" id="rdoImportant" /><label
                                                    class="custom-control-label"
                                                    for="rdoImportant"
                                                >
                                                    Important
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal" data-bs-dismiss="modal">Discard</button>
                            <button type="button" class="btn btn-primary" @click="save_event()">
                                {{ params.id ? 'Update Event' : 'Add Event' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref, reactive } from 'vue';
    import '../../assets/sass/apps/calendar.scss';

    import '@fullcalendar/core/vdom';
    import FullCalendar from '@fullcalendar/vue3';
    import dayGridPlugin from '@fullcalendar/daygrid';
    import timeGridPlugin from '@fullcalendar/timegrid';
    import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

    //flatpickr
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import '../../assets/sass/forms/custom-flatpickr.css';

    import { useMeta } from '../../composables/use-meta';
    useMeta({ title: 'Fullcalendar Drag and Drop Event' });

    const defaultParams = ref({
        id: null,
        title: '',
        start: '',
        end: '',
        description: '',
        className: 'bg-primary',
    });
    const params = ref(JSON.parse(JSON.stringify(defaultParams.value)));

    const options = reactive({
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next,today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
        },
        editable: true,
        dayMaxEvents: true,
        selectable: true,
        droppable: true,
        eventClick: (event) => {
            edit_event(event);
        },
        select: (event) => {
            edit_date(event);
        },
        eventMouseEnter: null,
        eventMouseLeave: null,
        events: [],
    });
    let addEventsModal = ref(null);
    const calendar = ref(null);
    const min_date_start = ref('');
    const min_date_end = ref('');
    const randomKey = ref('');

    onMounted(() => {
        setRandomKey();
        initPopup();
        bind_events();
        options.eventMouseEnter = event_mouse_hover;
        options.eventMouseLeave = event_mouse_leave;
    });
    const setRandomKey = () => {
        randomKey.value = Math.random().toString().split('.').join('');
    };

    const initPopup = () => {
        addEventsModal = new window.bootstrap.Modal(document.getElementById('addEventsModal'));
    };

    const bind_events = () => {
        let now = new Date();
        options.events = [
            {
                id: 1,
                title: 'All Day Event',
                start: now.getFullYear() + '-' + get_month(now) + '-01T14:30:00',
                end: now.getFullYear() + '-' + get_month(now) + '-02T14:30:00',
                className: 'bg-danger',
                description: 'Aenean fermentum quam vel sapien rutrum cursus. Vestibulum imperdiet finibus odio, nec tincidunt felis facilisis eu.',
            },
            {
                id: 2,
                title: 'Site Visit',
                start: now.getFullYear() + '-' + get_month(now) + '-07T19:30:00',
                end: now.getFullYear() + '-' + get_month(now) + '-08T14:30:00',
                className: 'bg-primary',
                description: 'Etiam a odio eget enim aliquet laoreet. Vivamus auctor nunc ultrices varius lobortis.',
            },
            {
                id: 3,
                title: 'Product Lunching Event',
                start: now.getFullYear() + '-' + get_month(now) + '-17T14:30:00',
                end: now.getFullYear() + '-' + get_month(now) + '-18T14:30:00',
                className: 'bg-info',
                description: 'Proin et consectetur nibh. Mauris et mollis purus. Ut nec tincidunt lacus. Nam at rutrum justo, vitae egestas dolor.',
            },
            {
                id: 4,
                title: 'Meeting',
                start: now.getFullYear() + '-' + get_month(now) + '-12T10:30:00',
                end: now.getFullYear() + '-' + get_month(now) + '-13T10:30:00',
                className: 'bg-danger',
                description: 'Mauris ut mauris aliquam, fringilla sapien et, dignissim nisl. Pellentesque ornare velit non mollis fringilla.',
            },
            {
                id: 5,
                title: 'Lunch',
                start: now.getFullYear() + '-' + get_month(now) + '-12T15:00:00',
                end: now.getFullYear() + '-' + get_month(now) + '-13T15:00:00',
                className: 'bg-info',
                description: 'Integer fermentum bibendum elit in egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            },
            {
                id: 6,
                title: 'Conference',
                start: now.getFullYear() + '-' + get_month(now) + '-12T21:30:00',
                end: now.getFullYear() + '-' + get_month(now) + '-13T21:30:00',
                className: 'bg-success',
                description:
                    'Curabitur facilisis vel elit sed dapibus. Nunc sagittis ex nec ante facilisis, sed sodales purus rhoncus. Donec est sapien, porttitor et feugiat sed, eleifend quis sapien. Sed sit amet maximus dolor.',
            },
            {
                id: 7,
                title: 'Happy Hour',
                start: now.getFullYear() + '-' + get_month(now) + '-12T05:30:00',
                end: now.getFullYear() + '-' + get_month(now) + '-13T05:30:00',
                className: 'bg-info',
                description: ' odio lectus, porttitor molestie scelerisque blandit, hendrerit sed ex. Aenean malesuada iaculis erat, vitae blandit nisl accumsan ut.',
            },
            {
                id: 8,
                title: 'Dinner',
                start: now.getFullYear() + '-' + get_month(now) + '-12T20:00:00',
                end: now.getFullYear() + '-' + get_month(now) + '-13T20:00:00',
                className: 'bg-danger',
                description: 'Sed purus urna, aliquam et pharetra ut, efficitur id mi. Pellentesque ut convallis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                id: 9,
                title: 'Birthday Party',
                start: now.getFullYear() + '-' + get_month(now) + '-27T20:00:00',
                end: now.getFullYear() + '-' + get_month(now) + '-28T20:00:00',
                className: 'bg-success',
                description: 'Sed purus urna, aliquam et pharetra ut, efficitur id mi. Pellentesque ut convallis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                id: 10,
                title: 'New Talent Event',
                start: now.getFullYear() + '-' + get_month(now, 1) + '-24T08:12:14',
                end: now.getFullYear() + '-' + get_month(now, 1) + '-27T22:20:20',
                className: 'bg-danger',
                description: 'Sed purus urna, aliquam et pharetra ut, efficitur id mi. Pellentesque ut convallis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                id: 11,
                title: 'Other new',
                start: now.getFullYear() + '-' + get_month(now, -1) + '-13T08:12:14',
                end: now.getFullYear() + '-' + get_month(now, -1) + '-16T22:20:20',
                className: 'bg-primary',
                description: 'Pellentesque ut convallis velit. Sed purus urna, aliquam et pharetra ut, efficitur id mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                id: 13,
                title: 'Upcoming Event',
                start: now.getFullYear() + '-' + get_month(now, 1) + '-15T08:12:14',
                end: now.getFullYear() + '-' + get_month(now, 1) + '-18T22:20:20',
                className: 'bg-primary',
                description: 'Pellentesque ut convallis velit. Sed purus urna, aliquam et pharetra ut, efficitur id mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
        ];
        setup_draggable();
    };

    const get_month = (dt, add = 0) => {
        let month = dt.getMonth() + 1 + add;
        const str = (month < 10 ? '0' + month : month).toString();
        return str;
    };

    const edit_date = (data) => {
        let obj = {
            event: { start: data.start, end: data.end },
        };
        edit_event(obj);
    };

    const event_mouse_hover = (data) => {
        let element = data.el.querySelector('.calendar-tlp');
        element.classList.add('d-block');
    };

    const event_mouse_leave = (data) => {
        let element = data.el.querySelector('.calendar-tlp');
        element.classList.remove('d-block');
    };

    const start_date_change = (selectedDates, dateStr) => {
        if (selectedDates && dateStr) {
            min_date_end.value = dateStr;
            params.value.end = '';
        }
    };

    const end_date_change = () => {};

    const edit_event = (data) => {
        params.value = JSON.parse(JSON.stringify(defaultParams));

        if (data) {
            let obj = JSON.parse(JSON.stringify(data.event));
            params.value = {
                id: obj.id ? obj.id : null,
                title: obj.title ? obj.title : null,
                start: obj.start,
                end: obj.end,
                description: obj.extendedProps ? obj.extendedProps.description : '',
                className: obj.classNames ? obj.classNames[0] : 'bg-primary',
            };

            min_date_start.value = obj.start;
            min_date_end.value = obj.start;
        } else {
            min_date_start.value = new Date();
            min_date_end.value = new Date();
        }

        addEventsModal.show();
    };

    const save_event = () => {
        if (!params.value.title) {
            showMessage('Title is required.', 'error');
            return true;
        }
        if (!params.value.start) {
            showMessage('Start date is required.', 'error');
            return true;
        }
        if (!params.value.end) {
            showMessage('End date is required.', 'error');
            return true;
        }

        if (params.value.id) {
            //update event
            let event = options.events.find((d) => d.id == params.value.id);
            event.title = params.value.title;
            event.start = params.value.start;
            event.end = params.value.end;
            event.description = params.value.description;
            event.className = params.value.className;
        } else {
            //add event
            let max_event_id = 0;
            if (options.events) {
                max_event_id = options.events.reduce((max, character) => (character.id > max ? character.id : max), options.events[0].id);
            }

            let event = {
                id: max_event_id + 1,
                title: params.value.title,
                start: params.value.start,
                end: params.value.end,
                description: params.value.description,
                className: params.value.className,
            };

            options.events.push(event);
        }
        setRandomKey();
        calendar.value.getApi(); //refresh calendar
        showMessage('Event saved successfully.');
        addEventsModal.hide();
    };

    const setup_draggable = () => {
        new Draggable(document.querySelector('.fc-view'), {
            itemSelector: '.fc-event',
            eventData: function (eventEl) {
                let event = {
                    title: eventEl.innerText,
                    duration: '01:00',
                };
                return event;
            },
        });
    };

    const showMessage = (msg = '', type = 'success') => {
        const toast = window.Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: '10px 20px',
        });
    };
</script>
