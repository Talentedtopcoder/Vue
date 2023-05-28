<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Sweet Alerts</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div id="navSection" class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#sweetalertbasic" class="nav-link">Basic</a>
                    <a href="#sweetalertmessage" class="nav-link">Message</a>
                    <a href="#sweetalertdynamic" class="nav-link">Dynamic</a>
                    <a href="#sweetalertatitlewithtext" class="nav-link">A title with text</a>
                    <a href="#sweetalertchainingmodals" class="nav-link">Chaining modals</a>
                    <a href="#sweetalertanimation" class="nav-link">Animation</a>
                    <a href="#sweetalertautoclosetimer" class="nav-link">Auto close timer</a>
                    <a href="#sweetalertcustomimage" class="nav-link">Custom image</a>
                    <a href="#sweetalertcustomhtml" class="nav-link">Custom HTML</a>
                    <a href="#sweetalertwarningmessage" class="nav-link">Warning message</a>
                    <a href="#sweetalertcancel" class="nav-link">Cancel</a>
                    <a href="#sweetalertcustomstyle" class="nav-link">Custom Style</a>
                    <a href="#sweetalertfooter" class="nav-link">Footer</a>
                    <a href="#sweetalertrtl" class="nav-link">RTL</a>
                    <a href="#sweetalertmixin" class="nav-link">Mixin</a>
                </div>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        Documentation:
                        <a target="_blank" href="https://www.npmjs.com/package/vue-sweetalert2" class="text-info"> https://www.npmjs.com/package/vue-sweetalert2 </a>
                    </div>
                </div>
            </div>
            <div v-scroll-spy class="row layout-top-spacing">
                <div id="sweetalertbasic" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic message</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary me-2 btn" @click="showAlert(1)">Basic message</button>
                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button variant=&quot;primary&quot; class=&quot;me-2 btn&quot; @click=&quot;showAlert(1)&quot;&gt;Basic message&lt;/button&gt;

 new window.Swal({
    title: 'Saved succesfully',
    padding: '2em'
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertmessage" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Success message</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary me-2 btn" @click="showAlert(2)">Success message!</button>
                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button variant=&quot;primary&quot; class=&quot;me-2 btn&quot; @click=&quot;showAlert(2)&quot;&gt;Success message!&lt;/button&gt;

new window.Swal({
    icon: 'success',
    title: 'Good job!',
    text: 'You clicked the!',
    padding: '2em'
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertdynamic" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Dynamic queue</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary me-2 btn" @click="showAlert(3)">Dynamic queue</button>
                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button variant=&quot;primary&quot; class=&quot;me-2 btn&quot; @click=&quot;showAlert(3)&quot;&gt;Dynamic queue&lt;/button&gt;

const ipAPI = 'https://api.ipify.org?format=json';
new window.Swal({
    title: 'Your public IP',
    confirmButtonText: 'Show my public IP',
    text: 'Your public IP will be received ' + 'via AJAX request',
    showLoaderOnConfirm: true,
    preConfirm: () =&gt; {
        return fetch(ipAPI)
            .then(response =&gt; {
                return response.json();
            })
            .then(data =&gt; {
                new window.Swal({
                    title: data.ip
                });
            })
            .catch(() =&gt; {
                new window.Swal({
                    type: 'error',
                    title: 'Unable to get your public IP'
                });
            });
    }
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertatitlewithtext" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>A title with a text under</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary me-2 btn" @click="showAlert(4)">Title & text</button>
                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button variant=&quot;primary&quot; class=&quot;me-2 btn&quot; @click=&quot;showAlert(4)&quot;&gt;Title &amp; text&lt;/button&gt;

new window.Swal({
    icon: 'question',
    title: 'The Internet?',
    text: 'That thing is still around?',
    padding: '2em'
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertchainingmodals" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Chaining modals (queue)</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary me-2 btn" @click="showAlert(5)">Chaining modals (queue)</button>
                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button variant=&quot;primary&quot; class=&quot;me-2 btn&quot; @click=&quot;showAlert(5)&quot;&gt;Chaining modals (queue)&lt;/button&gt;

const steps = ['1', '2', '3'];
const swalQueueStep =  window.Swal.mixin({
    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    progressSteps: steps,
    input: 'text',
    inputAttributes: {
        required: true
    },
    validationMessage: 'This field is required',
    padding: '2em'
});

const values = [];
let currentStep;

for (currentStep = 0; currentStep &lt; steps.length; ) {
    const result = await swalQueueStep.fire({
        title: `Question ${steps[currentStep]}`,
        text: currentStep == 0 ? 'Chaining swal2 modals is easy.' : '',
        inputValue: values[currentStep],
        showCancelButton: currentStep &gt; 0,
        currentProgressStep: currentStep
    });

    if (result.value) {
        values[currentStep] = result.value;
        currentStep++;
    } else if (result.dismiss === new window.Swal.DismissReason.cancel) {
        currentStep--;
    } else {
        break;
    }
}

if (currentStep === steps.length) {
    new window.Swal.fire({
        title: 'All done!',
        padding: '2em',
        html: 'Your answers: &lt;pre&gt;' + JSON.stringify(values) + '&lt;/pre&gt;',
        confirmButtonText: 'Lovely!'
    });
}
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertanimation" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Custom animation</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary me-2 btn" @click="showAlert(6)">Custom animation</button>
                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button variant=&quot;primary&quot; class=&quot;me-2 btn&quot; @click=&quot;showAlert(6)&quot;&gt;Custom animation&lt;/button&gt;

new window.Swal({
    title: 'Custom animation with Animate.css',
    animation: false,
    customClass: 'animated tada',
    padding: '2em'
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertautoclosetimer" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Message with auto close timer</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary me-2 btn" @click="showAlert(7)">Message timer</button>
                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code7')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button variant=&quot;primary&quot; class=&quot;me-2 btn&quot; @click=&quot;showAlert(7)&quot;&gt;Message timer&lt;/button&gt;

let timerInterval;

new window.Swal({
    title: 'Auto close alert!',
    html: 'I will close in &lt;b&gt;&lt;/b&gt; milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () =&gt; {
        new window.Swal.showLoading();
        const b = new window.Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() =&gt; {
            b.textContent = new window.Swal.getTimerLeft();
        }, 100);
    },
    willClose: () =&gt; {
        clearInterval(timerInterval);
    }
}).then((result)=> {
    if (result.dismiss === new window.Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
    }
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertcustomimage" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Message with custom image</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary me-2 btn" @click="showAlert(8)">Message with custom image</button>
                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code8')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button variant=&quot;primary&quot; class=&quot;me-2 btn&quot; @click=&quot;showAlert(8)&quot;&gt;Message with custom image&lt;/button&gt;

new window.Swal({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: '/assets/images/thumbs-up.jpg',
    imageWidth: 224,
    imageHeight: 200,
    imageAlt: 'Custom image',
    animation: false,
    padding: '2em'
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertcustomhtml" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Custom HTML description and buttons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary me-2 btn" @click="showAlert(9)">Custom Description & buttons</button>
                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code9')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button variant=&quot;primary&quot; class=&quot;me-2 btn&quot; @click=&quot;showAlert(9)&quot;&gt;Custom Description &amp; buttons&lt;/button&gt;

new window.Swal({
    icon: 'info',
    title: '&lt;i&gt;HTML&lt;/i&gt; &lt;u&gt;example&lt;/u&gt;',
    html: 'You can use &lt;b&gt;bold text&lt;/b&gt;, ' + '&lt;a href=&quot;//github.com&quot;&gt;links&lt;/a&gt; ' + 'and other HTML tags',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '&lt;i class=&quot;flaticon-checked-1&quot;&gt;&lt;/i&gt; Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText: '&lt;i class=&quot;flaticon-cancel-circle&quot;&gt;&lt;/i&gt; Cancel',
    cancelButtonAriaLabel: 'Thumbs down',
    padding: '2em'
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertwarningmessage" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Warning message, with "Confirm" button</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary me-2 btn" @click="showAlert(10)">Confirm</button>
                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code10')"><span>Confirm</span></button>

                                <div v-if="code_arr.includes('code10')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button variant=&quot;primary&quot; class=&quot;me-2 btn&quot; @click=&quot;showAlert(10)&quot;&gt;Confirm&lt;/button&gt;

new window.Swal({
    title: 'Are you sure?',
    text: &quot;You won't be able to revert this!&quot;,
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Delete',
    padding: '2em'
}).then(result =&gt; {
    if (result.value) {
        new window.Swal('Deleted!', 'Your file has been deleted.', 'success');
    }
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertcancel" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Execute something else for "Cancel".</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary me-2 btn" @click="showAlert(11)">Addition else for "Cancel".</button>
                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code11')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code11')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button variant=&quot;primary&quot; class=&quot;me-2 btn&quot; @click=&quot;showAlert(11)&quot;&gt;Addition else for &quot;Cancel&quot;.&lt;/button&gt;

const swalWithBootstrapButtons =  window.Swal.mixin({
    confirmButtonClass: 'btn btn-secondary',
    cancelButtonClass: 'btn btn-dark me-3',
    buttonsStyling: false
});
swalWithBootstrapButtons
    .fire({
        title: 'Are you sure?',
        text: &quot;You won't be able to revert this!&quot;,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
        padding: '2em'
    })
    .then(result =&gt; {
        if (result.value) {
            swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
        } else if (result.dismiss === new window.Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
        }
    });
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertcustomstyle" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>A message with custom width, padding and background</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary me-2 btn" @click="showAlert(12)">Custom Message</button>
                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code12')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code12')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button variant=&quot;primary&quot; class=&quot;me-2 btn&quot; @click=&quot;showAlert(12)&quot;&gt;Custom Message&lt;/button&gt;

new window.Swal({
    title: 'Custom width, padding, background.',
    width: 600,
    padding: '7em',
    customClass: 'background-modal',
    background: '#fff url(' + '/assets/images/sweet-bg.jpg' + ') no-repeat 100% 100%'
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertfooter" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>With Footer</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary me-2 btn" @click="showAlert(13)">With Footer</button>
                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code13')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code13')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button variant=&quot;primary&quot; class=&quot;me-2 btn&quot; @click=&quot;showAlert(13)&quot;&gt;With Footer&lt;/button&gt;

new window.Swal({
    type: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '&lt;a href&gt;Why do I have this issue?&lt;/a&gt;',
    padding: '2em'
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertrtl" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>RTL Support</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary me-2 btn" @click="showAlert(14)">RTL</button>
                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code14')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code14')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button variant=&quot;primary&quot; class=&quot;me-2 btn&quot; @click=&quot;showAlert(14)&quot;&gt;RTL&lt;/button&gt;

new window.Swal({
    title: 'هل تريد الاستمرار؟',
    confirmButtonText: 'نعم',
    cancelButtonText: 'لا',
    showCancelButton: true,
    showCloseButton: true,
    padding: '2em',
    target: document.getElementById('rtl-container')
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertmixin" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Mixin</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <button type="button" class="btn btn-primary me-2 btn" @click="showAlert(15)">Mixin</button>
                            <div class="code-section-container show-code">
                                <button class="btn btn-default toggle-code-snippet" @click="toggleCode('code15')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code15')" class="code-section text-start">
                                    <highlight>
                                        <pre>
&lt;button variant=&quot;primary&quot; class=&quot;me-2 btn&quot; @click=&quot;showAlert(15)&quot;&gt;Mixin&lt;/button&gt;

const toast =  window.Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    padding: '2em'
});
toast.fire({
    icon: 'success',
    title: 'Signed in successfully',
    padding: '2em'
});
                                        </pre>
                                    </highlight>
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
    import { ref } from "vue";
    import "../../assets/sass/scrollspyNav.scss";
    import "../../assets/sass/components/custom-sweetalert.scss";
    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Sweet Alert" });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };

    const showAlert = async (type) => {
        if (type === 1) {
            new window.Swal({
                title: "Saved succesfully",
                padding: "2em",
            });
        } else if (type === 2) {
            new window.Swal({
                icon: "success",
                title: "Good job!",
                text: "You clicked the!",
                padding: "2em",
            });
        } else if (type === 3) {
            const ipAPI = "https://api.ipify.org?format=json";
            new window.Swal({
                title: "Your public IP",
                confirmButtonText: "Show my public IP",
                text: "Your public IP will be received " + "via AJAX request",
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    return fetch(ipAPI)
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {
                            new window.Swal({
                                title: data.ip,
                            });
                        })
                        .catch(() => {
                            new window.Swal({
                                type: "error",
                                title: "Unable to get your public IP",
                            });
                        });
                },
            });
        } else if (type === 4) {
            new window.Swal({
                icon: "question",
                title: "The Internet?",
                text: "That thing is still around?",
                padding: "2em",
            });
        } else if (type === 5) {
            const steps = ["1", "2", "3"];
            const swalQueueStep = window.Swal.mixin({
                confirmButtonText: "Next →",
                showCancelButton: true,
                progressSteps: steps,
                input: "text",
                inputAttributes: {
                    required: true,
                },
                validationMessage: "This field is required",
                padding: "2em",
            });

            const values = [];
            let currentStep;

            for (currentStep = 0; currentStep < steps.length; ) {
                const result = await swalQueueStep.fire({
                    title: `Question ${steps[currentStep]}`,
                    text: currentStep == 0 ? "Chaining swal2 modals is easy." : "",
                    inputValue: values[currentStep],
                    showCancelButton: currentStep > 0,
                    currentProgressStep: currentStep,
                });

                if (result.value) {
                    values[currentStep] = result.value;
                    currentStep++;
                } else if (result.dismiss === new window.Swal.DismissReason.cancel()) {
                    currentStep--;
                } else {
                    break;
                }
            }

            if (currentStep === steps.length) {
                window.Swal.fire({
                    title: "All done!",
                    padding: "2em",
                    html: "Your answers: <pre>" + JSON.stringify(values) + "</pre>",
                    confirmButtonText: "Lovely!",
                });
            }
        } else if (type === 6) {
            new window.Swal({
                title: "Custom animation with Animate.css",
                animation: false,
                customClass: "animated tada",
                padding: "2em",
            });
        } else if (type === 7) {
            let timerInterval;

            new window.Swal({
                title: "Auto close alert!",
                html: "I will close in <b></b> milliseconds.",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    window.Swal.showLoading();
                    const b = window.Swal.getHtmlContainer().querySelector("b");
                    timerInterval = setInterval(() => {
                        b.textContent = window.Swal.getTimerLeft();
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                },
            }).then((result) => {
                if (result.dismiss === window.Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }
            });
        } else if (type === 8) {
            new window.Swal({
                title: "Sweet!",
                text: "Modal with a custom image.",
                imageUrl: "/assets/images/thumbs-up.jpg",
                imageWidth: 224,
                imageHeight: 200,
                imageAlt: "Custom image",
                animation: false,
                padding: "2em",
            });
        } else if (type === 9) {
            new window.Swal({
                icon: "info",
                title: "<i>HTML</i> <u>example</u>",
                html: "You can use <b>bold text</b>, " + '<a href="//github.com">links</a> ' + "and other HTML tags",
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: '<i class="flaticon-checked-1"></i> Great!',
                confirmButtonAriaLabel: "Thumbs up, great!",
                cancelButtonText: '<i class="flaticon-cancel-circle"></i> Cancel',
                cancelButtonAriaLabel: "Thumbs down",
                padding: "2em",
            });
        } else if (type === 10) {
            new window.Swal({
                icon: "warning",
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                showCancelButton: true,
                confirmButtonText: "Delete",
                padding: "2em",
            }).then((result) => {
                if (result.value) {
                    new window.Swal("Deleted!", "Your file has been deleted.", "success");
                }
            });
        } else if (type === 11) {
            const swalWithBootstrapButtons = window.Swal.mixin({
                confirmButtonClass: "btn btn-secondary",
                cancelButtonClass: "btn btn-dark me-3",
                buttonsStyling: false,
            });
            swalWithBootstrapButtons
                .fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel!",
                    reverseButtons: true,
                    padding: "2em",
                })
                .then((result) => {
                    if (result.value) {
                        swalWithBootstrapButtons.fire("Deleted!", "Your file has been deleted.", "success");
                    } else if (result.dismiss === window.Swal.DismissReason.cancel) {
                        swalWithBootstrapButtons.fire("Cancelled", "Your imaginary file is safe :)", "error");
                    }
                });
        } else if (type === 12) {
            new window.Swal({
                title: "Custom width, padding, background.",
                width: 600,
                padding: "7em",
                customClass: "background-modal",
                background: "#fff url(" + "/assets/images/sweet-bg.jpg" + ") no-repeat 100% 100%",
            });
        } else if (type === 13) {
            new window.Swal({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: "<a href>Why do I have this issue?</a>",
                padding: "2em",
            });
        } else if (type === 14) {
            new window.Swal({
                title: "هل تريد الاستمرار؟",
                confirmButtonText: "نعم",
                cancelButtonText: "لا",
                showCancelButton: true,
                showCloseButton: true,
                padding: "2em",
                target: document.getElementById("rtl-container"),
            });
        } else if (type === 15) {
            const toast = window.Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                padding: "2em",
            });
            toast.fire({
                icon: "success",
                title: "Signed in successfully",
                padding: "2em",
            });
        }
    };
</script>
