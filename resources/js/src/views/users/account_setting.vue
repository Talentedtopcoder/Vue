<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Users</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Account Settings</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="account-settings-container layout-top-spacing">
            <div class="account-content">
                <div class="scrollspy-example" data-spy="scroll" data-target="#account-settings-scroll" data-offset="-100">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                            <form id="general-info" class="section general-info">
                                <div class="info">
                                    <h6 class="">General Information</h6>
                                    <div class="row">
                                        <div class="col-lg-11 mx-auto">
                                            <div class="row">
                                                <div class="col-xl-2 col-lg-12 col-md-4">
                                                    <div class="upload mt-4 pe-md-4">
                                                        <input ref="fl_profile" type="file" class="d-none" accept="image/*" @change="change_file" />
                                                        <img :src="selected_file ? selected_file : '/assets/images/user-profile.jpeg'" alt="profile" class="profile-preview" @click="$refs.fl_profile.click()" />
                                                        <p class="mt-2">Upload Picture</p>
                                                    </div>
                                                </div>
                                                <div class="col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4">
                                                    <div class="form">
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                <div class="form-group">
                                                                    <label for="fullName">Full Name</label>
                                                                    <input class="form-control mb-4" id="fullName" placeholder="Full Name" value="Jimmy Turner" />
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <label class="dob-input">Date of Birth</label>
                                                                <div class="d-sm-flex d-block">
                                                                    <div class="form-group me-1">
                                                                        <select v-model="ddl_1" class="form-select">
                                                                            <option value="Day">Day</option>
                                                                            <option v-for="item in 30" :value="item" :key="item">
                                                                                {{ item }}
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                    <div class="form-group me-1">
                                                                        <select v-model="ddl_2" class="form-select">
                                                                            <option value="Month">Month</option>
                                                                            <option v-for="item in months" :value="item" :key="item">
                                                                                {{ item }}
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                    <div class="form-group me-1">
                                                                        <select v-model="ddl_3" class="form-select">
                                                                            <option value="Year">Year</option>
                                                                            <option v-for="item in 42" :value="2022 - item" :key="2022 - item">
                                                                                {{ 2022 - item }}
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="profession">Profession</label>
                                                            <input class="form-control mb-4" id="profession" placeholder="Designer" value="Web Developer" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                            <form id="about" class="section about">
                                <div class="info">
                                    <h5 class="">About</h5>
                                    <div class="row">
                                        <div class="col-md-11 mx-auto">
                                            <div class="form-group">
                                                <label for="aboutBio">Bio</label>
                                                <textarea id="aboutBio" placeholder="Tell something interesting about yourself" rows="10" class="form-control" style="height: 243px">
I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.

My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                            <form id="work-platforms" class="section work-platforms">
                                <div class="info">
                                    <h5 class="">Work Platforms</h5>
                                    <div class="row">
                                        <div class="col-md-12 text-end mb-5">
                                            <button type="button" id="add-work-platforms" class="btn btn-primary">Add</button>
                                        </div>
                                        <div class="col-md-11 mx-auto">
                                            <div class="platform-div">
                                                <div class="form-group">
                                                    <label for="platform-title">Platforms Title</label>
                                                    <input class="form-control mb-4" id="platform-title" placeholder="Platforms Title" value="Web Design" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="platform-description">Description</label>
                                                    <textarea class="form-control mb-4" id="platform-description" placeholder="Platforms Description" rows="10" style="height: 243px">
Duis aute irure dolor in reprehenderit in voluptate velit esse eu fugiat nulla pariatur.</textarea
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                            <form id="contact" class="section contact">
                                <div class="info">
                                    <h5 class="">Contact</h5>
                                    <div class="row">
                                        <div class="col-md-11 mx-auto">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="country">Country</label>
                                                        <select v-model="ddl_6" id="country" class="form-select w-100">
                                                            <option value="all">All Countries</option>
                                                            <option value="United States">United States</option>
                                                            <option value="India">India</option>
                                                            <option value="Japan">Japan</option>
                                                            <option value="China">China</option>
                                                            <option value="Brazil">Brazil</option>
                                                            <option value="Norway">Norway</option>
                                                            <option value="Canada">Canada</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="address">Address</label>
                                                        <input class="form-control mb-4" id="address" placeholder="Address" value="New York" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="location">Location</label>
                                                        <input class="form-control mb-4" id="location" placeholder="Location" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="phone">Phone</label>
                                                        <input class="form-control mb-4" id="phone" placeholder="Write your phone number here" value="+1 (530) 555-12121" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="email">Email</label>
                                                        <input class="form-control mb-4" id="email" placeholder="Write your email here" value="Jimmy@gmail.com" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="website1">Website</label>
                                                        <input class="form-control mb-4" id="website1" placeholder="Write your website here" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                            <form id="social" class="section social">
                                <div class="info">
                                    <h5 class="">Social</h5>
                                    <div class="row">
                                        <div class="col-md-11 mx-auto">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="input-group social-linkedin mb-3">
                                                        <span class="input-group-text me-3" id="linkedin"
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
                                                                class="feather feather-linkedin"
                                                            >
                                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                                <rect x="2" y="9" width="4" height="12"></rect>
                                                                <circle cx="4" cy="4" r="2"></circle></svg
                                                        ></span>
                                                        <input placeholder="linkedin Username" value="jimmy_turner" class="form-control" />
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="input-group social-tweet mb-3">
                                                        <span class="input-group-text me-3" id="tweet"
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
                                                                class="feather feather-twitter"
                                                            >
                                                                <path
                                                                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                                                                ></path></svg
                                                        ></span>
                                                        <input placeholder="Twitter Username" value="@jTurner" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-11 mx-auto">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="input-group social-fb mb-3">
                                                        <span class="input-group-text me-3" id="fb"
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
                                                                class="feather feather-facebook"
                                                            >
                                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg
                                                        ></span>
                                                        <input placeholder="Facebook Username" value="Jimmy Turner" class="form-control" />
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="input-group social-github mb-3">
                                                        <span class="input-group-text me-3" id="github"
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
                                                                class="feather feather-github"
                                                            >
                                                                <path
                                                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                                                ></path></svg
                                                        ></span>
                                                        <input placeholder="Github Username" value="@TurnerJimmy" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                            <div id="skill" class="section skill">
                                <div class="info">
                                    <h5 class="">Skills</h5>
                                    <div class="row progress-bar-section">
                                        <div class="col-md-12 mx-auto">
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-md-11 mx-auto">
                                                        <div class="input-form">
                                                            <input type="text" id="skills" placeholder="Add Your Skills Here" class="form-control" />
                                                            <button type="button" id="add-skills" class="btn btn-primary">Add</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-11 mx-auto">
                                            <div class="custom-progress top-right progress-up">
                                                <p class="skill-name">PHP</p>
                                                <input type="range" min="0" max="100" class="form-range progress-range-counter" v-model="range_1" />
                                                <div class="range-count">
                                                    <span class="range-count-number">{{ range_1 }}</span> <span class="range-count-unit">%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-11 mx-auto">
                                            <div class="custom-progress top-right progress-up">
                                                <p class="skill-name">Wordpress</p>
                                                <input type="range" min="0" max="100" class="form-range progress-range-counter" v-model="range_2" />
                                                <div class="range-count">
                                                    <span class="range-count-number">{{ range_2 }}</span> <span class="range-count-unit">%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-11 mx-auto">
                                            <div class="custom-progress top-right progress-up">
                                                <p class="skill-name">Javascript</p>
                                                <input type="range" min="0" max="100" class="form-range progress-range-counter" v-model="range_3" />
                                                <div class="range-count">
                                                    <span class="range-count-number">{{ range_3 }}</span> <span class="range-count-unit">%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-11 mx-auto">
                                            <div class="custom-progress top-right progress-up">
                                                <p class="skill-name">jQuery</p>
                                                <input type="range" min="0" max="100" class="form-range progress-range-counter" v-model="range_4" />
                                                <div class="range-count">
                                                    <span class="range-count-number">{{ range_4 }}</span> <span class="range-count-unit">%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                            <form id="edu-experience" class="section edu-experience">
                                <div class="info">
                                    <h5 class="">Education</h5>
                                    <div class="row">
                                        <div class="col-md-12 text-end mb-5">
                                            <button type="button" id="add-education" class="btn btn-primary">Add</button>
                                        </div>
                                        <div class="col-md-11 mx-auto">
                                            <div class="edu-section">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label for="degree1">Enter Your Collage Name</label>
                                                            <input class="form-control mb-4" id="degree1" placeholder="Add your education here" value="Royal Collage of Art Designer Illustrator" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label>Starting From</label>

                                                                    <div class="row">
                                                                        <div class="col-md-6 mb-4">
                                                                            <select v-model="ddl_4" class="form-select w-100">
                                                                                <option value="Month">Month</option>
                                                                                <option v-for="item in months" :value="item" :key="item">
                                                                                    {{ item }}
                                                                                </option>
                                                                            </select>
                                                                        </div>

                                                                        <div class="col-md-6">
                                                                            <select v-model="ddl_5" class="form-select w-100">
                                                                                <option value="Year">Year</option>
                                                                                <option v-for="item in 42" :value="2022 - item" :key="2022 - item">
                                                                                    {{ 2022 - item }}
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label>Ending In</label>

                                                                    <div class="row">
                                                                        <div class="col-md-6 mb-4">
                                                                            <select v-model="selected" class="form-select w-100">
                                                                                <option :value="null">Month</option>
                                                                                <option v-for="item in months" :value="item" :key="item">
                                                                                    {{ item }}
                                                                                </option>
                                                                            </select>
                                                                        </div>

                                                                        <div class="col-md-6">
                                                                            <select v-model="selected" class="form-select w-100">
                                                                                <option :value="null">Year</option>
                                                                                <option v-for="item in 42" :value="2022 - item" :key="2022 - item">
                                                                                    {{ 2022 - item }}
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <textarea placeholder="Description" rows="10" class="form-control" style="height: 243px"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                            <form id="work-experience" class="section work-experience">
                                <div class="info">
                                    <h5 class="">Work Experience</h5>
                                    <div class="row">
                                        <div class="col-md-12 text-end mb-5">
                                            <button type="button" id="add-work-exp" class="btn btn-primary">Add</button>
                                        </div>
                                        <div class="col-md-11 mx-auto">
                                            <div class="work-section">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label for="degree2">Company Name</label>
                                                            <input class="form-control mb-4" id="degree2" placeholder="Add your work here" value="Netfilx Inc." />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label for="degree3">Job Tilte</label>
                                                                    <input class="form-control mb-4" id="degree3" placeholder="Add your work here" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label for="degree4">Location</label>
                                                                    <input class="form-control mb-4" id="degree4" placeholder="Add your work here" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12">
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label>Starting From</label>

                                                                    <div class="row">
                                                                        <div class="col-md-6 mb-4">
                                                                            <select v-model="selected" class="form-select w-100">
                                                                                <option :value="null">Month</option>
                                                                                <option v-for="item in months" :value="item" :key="item">
                                                                                    {{ item }}
                                                                                </option>
                                                                            </select>
                                                                        </div>

                                                                        <div class="col-md-6 mb-4">
                                                                            <select v-model="selected" class="form-select w-100">
                                                                                <option :value="null">Year</option>
                                                                                <option v-for="item in 42" :value="2022 - item" :key="2022 - item">
                                                                                    {{ 2022 - item }}
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label>Ending In</label>

                                                                    <div class="row">
                                                                        <div class="col-md-6 mb-4">
                                                                            <select v-model="selected" class="form-select w-100">
                                                                                <option :value="null">Month</option>
                                                                                <option v-for="item in months" :value="item" :key="item">
                                                                                    {{ item }}
                                                                                </option>
                                                                            </select>
                                                                        </div>

                                                                        <div class="col-md-6 mb-4">
                                                                            <select v-model="selected" class="form-select w-100">
                                                                                <option :value="null">Year</option>
                                                                                <option v-for="item in 42" :value="2022 - item" :key="2022 - item">
                                                                                    {{ 2022 - item }}
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12">
                                                        <textarea placeholder="Description" rows="10" class="form-control" style="height: 243px"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="account-settings-footer">
                <div class="as-footer-container">
                    <button type="button" class="btn btn-primary">Reset All</button>
                    <button type="button" class="btn btn-success" @click="save()">Save Changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import "../../assets/sass/scrollspyNav.scss";
    import "../../assets/sass/users/account-setting.scss";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "Account Setting" });

    const selected = ref(null);
    const selected_file = ref(null);
    const ddl_1 = ref("20");
    const ddl_2 = ref("Jan");
    const ddl_3 = ref("1989");
    const ddl_4 = ref("May");
    const ddl_5 = ref("2009");
    const ddl_6 = ref("United States");
    const months = ref(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
    const range_1 = ref(25);
    const range_2 = ref(50);
    const range_3 = ref(70);
    const range_4 = ref(60);

    const change_file = (event) => {
        selected_file.value = URL.createObjectURL(event.target.files[0]);
    };

    const save = () => {
        showMessage("Settings saved successfully.");
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
