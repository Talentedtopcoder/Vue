<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Tables</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Basic</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#tableSimple" class="nav-link">Simple</a>
                    <a href="#tableHover" class="nav-link">Hover</a>
                    <a href="#tableStriped" class="nav-link">Striped</a>
                    <a href="#tableLight" class="nav-link">Light</a>
                    <a href="#tableCaption" class="nav-link">Caption</a>
                    <a href="#tableProgress" class="nav-link">Progress</a>
                    <a href="#tableContextual" class="nav-link">Contextual</a>
                    <a href="#tableDropdown" class="nav-link">Dropdown</a>
                    <a href="#tableFooter" class="nav-link">Footer</a>
                    <a href="#tableCheckbox" class="nav-link">Checkbox</a>
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
                        <a target="_blank" href="https://getbootstrap.com/docs/5.0/content/tables" class="text-info"> https://getbootstrap.com/docs/5.0/content/tables </a>
                    </div>
                </div>
            </div>

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="tableSimple" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Simple Table</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table role="table" aria-busy="false" aria-colcount="5" class="table table-bordered" id="__BVID__415">
                                    <thead role="rowgroup">
                                        <tr role="row">
                                            <th role="columnheader" scope="col" aria-colindex="1"><div>Name</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="2"><div>Date</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="3"><div>Sale</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="4" class="text-center"><div>status</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="5" aria-label="Action" class="text-center"><div></div></th>
                                        </tr>
                                    </thead>
                                    <tbody role="rowgroup">
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell">{{ item.name }}</td>
                                            <td aria-colindex="2" role="cell">{{ item.date }}</td>
                                            <td aria-colindex="3" role="cell">{{ item.sale }}</td>
                                            <td aria-colindex="4" role="cell" class="text-center">
                                                <span :class="`text-${item.status_class}`"> {{ item.status }} </span>
                                            </td>
                                            <td aria-colindex="5" role="cell" class="text-center">
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
                                                    class="feather feather-trash-2 icon"
                                                >
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-start">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;div class=&quot;table-responsive&quot;&gt;
    &lt;table role=&quot;table&quot; aria-busy=&quot;false&quot; aria-colcount=&quot;5&quot; class=&quot;table table-bordered&quot; id=&quot;__BVID__415&quot;&gt;
        &lt;thead role=&quot;rowgroup&quot;&gt;
            &lt;tr role=&quot;row&quot;&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;1&quot;&gt;&lt;div&gt;Name&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;2&quot;&gt;&lt;div&gt;Date&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;3&quot;&gt;&lt;div&gt;Sale&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;4&quot; class=&quot;text-center&quot;&gt;&lt;div&gt;status&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;5&quot; aria-label=&quot;Action&quot; class=&quot;text-center&quot;&gt;&lt;div&gt;&lt;/div&gt;&lt;/th&gt;
            &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody role=&quot;rowgroup&quot;&gt;
            &lt;tr v-for=&quot;item in table_1&quot; :key=&quot;item.name&quot; role=&quot;row&quot;&gt;
                &lt;td aria-colindex=&quot;1&quot; role=&quot;cell&quot;&gt;{{ item.name }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;2&quot; role=&quot;cell&quot;&gt;{{ item.date }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;3&quot; role=&quot;cell&quot;&gt;{{ item.sale }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;4&quot; role=&quot;cell&quot; class=&quot;text-center&quot;&gt;
                    &lt;span :class=&quot;`text-${item.status_class}`&quot;&gt; {{ item.status }} &lt;/span&gt;
                &lt;/td&gt;
                &lt;td aria-colindex=&quot;5&quot; role=&quot;cell&quot; class=&quot;text-center&quot;&gt;
                    &lt;svg
                        xmlns=&quot;http://www.w3.org/2000/svg&quot;
                        width=&quot;24&quot;
                        height=&quot;24&quot;
                        viewBox=&quot;0 0 24 24&quot;
                        fill=&quot;none&quot;
                        stroke=&quot;currentColor&quot;
                        stroke-width=&quot;2&quot;
                        stroke-linecap=&quot;round&quot;
                        stroke-linejoin=&quot;round&quot;
                        class=&quot;feather feather-trash-2 icon&quot;
                    &gt;
                        &lt;polyline points=&quot;3 6 5 6 21 6&quot;&gt;&lt;/polyline&gt;
                        &lt;path d=&quot;M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2&quot;&gt;&lt;/path&gt;
                        &lt;line x1=&quot;10&quot; y1=&quot;11&quot; x2=&quot;10&quot; y2=&quot;17&quot;&gt;&lt;/line&gt;
                        &lt;line x1=&quot;14&quot; y1=&quot;11&quot; x2=&quot;14&quot; y2=&quot;17&quot;&gt;&lt;/line&gt;
                    &lt;/svg&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;
&lt;/div&gt;
</pre
                                            >
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tableHover" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Hover Table</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table role="table" aria-busy="false" aria-colcount="5" class="table table-hover table-bordered" id="__BVID__415">
                                    <thead role="rowgroup">
                                        <tr role="row">
                                            <th role="columnheader" scope="col" aria-colindex="1"><div>Name</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="2"><div>Date</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="3"><div>Sale</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="4" class="text-center"><div>status</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="5" aria-label="Action" class="text-center"><div></div></th>
                                        </tr>
                                    </thead>
                                    <tbody role="rowgroup">
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell">{{ item.name }}</td>
                                            <td aria-colindex="2" role="cell">{{ item.date }}</td>
                                            <td aria-colindex="3" role="cell">{{ item.sale }}</td>
                                            <td aria-colindex="4" role="cell" class="text-center">
                                                <span :class="`text-${item.status_class}`"> {{ item.status }} </span>
                                            </td>
                                            <td aria-colindex="5" role="cell" class="text-center">
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
                                                    class="feather feather-trash-2 icon"
                                                >
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;div class=&quot;table-responsive&quot;&gt;
    &lt;table role=&quot;table&quot; aria-busy=&quot;false&quot; aria-colcount=&quot;5&quot; class=&quot;table table-hover table-bordered&quot; id=&quot;__BVID__415&quot;&gt;
        &lt;thead role=&quot;rowgroup&quot;&gt;
            &lt;tr role=&quot;row&quot;&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;1&quot;&gt;&lt;div&gt;Name&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;2&quot;&gt;&lt;div&gt;Date&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;3&quot;&gt;&lt;div&gt;Sale&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;4&quot; class=&quot;text-center&quot;&gt;&lt;div&gt;status&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;5&quot; aria-label=&quot;Action&quot; class=&quot;text-center&quot;&gt;&lt;div&gt;&lt;/div&gt;&lt;/th&gt;
            &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody role=&quot;rowgroup&quot;&gt;
            &lt;tr v-for=&quot;item in table_1&quot; :key=&quot;item.name&quot; role=&quot;row&quot;&gt;
                &lt;td aria-colindex=&quot;1&quot; role=&quot;cell&quot;&gt;{{ item.name }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;2&quot; role=&quot;cell&quot;&gt;{{ item.date }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;3&quot; role=&quot;cell&quot;&gt;{{ item.sale }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;4&quot; role=&quot;cell&quot; class=&quot;text-center&quot;&gt;
                    &lt;span :class=&quot;`text-${item.status_class}`&quot;&gt; {{ item.status }} &lt;/span&gt;
                &lt;/td&gt;
                &lt;td aria-colindex=&quot;5&quot; role=&quot;cell&quot; class=&quot;text-center&quot;&gt;
                    &lt;svg
                        xmlns=&quot;http://www.w3.org/2000/svg&quot;
                        width=&quot;24&quot;
                        height=&quot;24&quot;
                        viewBox=&quot;0 0 24 24&quot;
                        fill=&quot;none&quot;
                        stroke=&quot;currentColor&quot;
                        stroke-width=&quot;2&quot;
                        stroke-linecap=&quot;round&quot;
                        stroke-linejoin=&quot;round&quot;
                        class=&quot;feather feather-trash-2 icon&quot;
                    &gt;
                        &lt;polyline points=&quot;3 6 5 6 21 6&quot;&gt;&lt;/polyline&gt;
                        &lt;path d=&quot;M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2&quot;&gt;&lt;/path&gt;
                        &lt;line x1=&quot;10&quot; y1=&quot;11&quot; x2=&quot;10&quot; y2=&quot;17&quot;&gt;&lt;/line&gt;
                        &lt;line x1=&quot;14&quot; y1=&quot;11&quot; x2=&quot;14&quot; y2=&quot;17&quot;&gt;&lt;/line&gt;
                    &lt;/svg&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;
&lt;/div&gt;
</pre
                                            >
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tableStriped" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Striped Table</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table role="table" aria-busy="false" aria-colcount="5" class="table table-striped table-bordered" id="__BVID__415">
                                    <thead role="rowgroup">
                                        <tr role="row">
                                            <th role="columnheader" scope="col" aria-colindex="1"><div>Name</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="2"><div>Date</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="3"><div>Sale</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="5" aria-label="Action" class="text-center"><div>action</div></th>
                                        </tr>
                                    </thead>
                                    <tbody role="rowgroup">
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell">
                                                <div class="d-flex">
                                                    <div class="usr-img-frame me-2 rounded-circle">
                                                        <img alt="avatar" class="img-fluid rounded-circle" :src="'/assets/images/' + item.thumb" />
                                                    </div>
                                                    <p class="align-self-center mb-0">{{ item.name }}</p>
                                                </div>
                                            </td>
                                            <td aria-colindex="2" role="cell">{{ item.date }}</td>
                                            <td aria-colindex="3" role="cell">{{ item.sale }}</td>
                                            <td aria-colindex="5" role="cell" class="text-center">
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
                                                    class="feather feather-x t-icon t-hover-icon"
                                                >
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-start">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;div class=&quot;table-responsive&quot;&gt;
    &lt;table role=&quot;table&quot; aria-busy=&quot;false&quot; aria-colcount=&quot;5&quot; class=&quot;table table-striped table-bordered&quot; id=&quot;__BVID__415&quot;&gt;
        &lt;thead role=&quot;rowgroup&quot;&gt;
            &lt;tr role=&quot;row&quot;&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;1&quot;&gt;&lt;div&gt;Name&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;2&quot;&gt;&lt;div&gt;Date&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;3&quot;&gt;&lt;div&gt;Sale&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;5&quot; aria-label=&quot;Action&quot; class=&quot;text-center&quot;&gt;&lt;div&gt;action&lt;/div&gt;&lt;/th&gt;
            &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody role=&quot;rowgroup&quot;&gt;
            &lt;tr v-for=&quot;item in table_1&quot; :key=&quot;item.name&quot; role=&quot;row&quot;&gt;
                &lt;td aria-colindex=&quot;1&quot; role=&quot;cell&quot;&gt;
                    &lt;div class=&quot;d-flex&quot;&gt;
                        &lt;div class=&quot;usr-img-frame me-2 rounded-circle&quot;&gt;
                            &lt;img alt=&quot;avatar&quot; class=&quot;img-fluid rounded-circle&quot; :src=&quot;'/assets/images/' + item.thumb&quot; /&gt;
                        &lt;/div&gt;
                        &lt;p class=&quot;align-self-center mb-0&quot;&gt;{{ item.name }}&lt;/p&gt;
                    &lt;/div&gt;
                &lt;/td&gt;
                &lt;td aria-colindex=&quot;2&quot; role=&quot;cell&quot;&gt;{{ item.date }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;3&quot; role=&quot;cell&quot;&gt;{{ item.sale }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;5&quot; role=&quot;cell&quot; class=&quot;text-center&quot;&gt;
                    &lt;svg
                        xmlns=&quot;http://www.w3.org/2000/svg&quot;
                        width=&quot;24&quot;
                        height=&quot;24&quot;
                        viewBox=&quot;0 0 24 24&quot;
                        fill=&quot;none&quot;
                        stroke=&quot;currentColor&quot;
                        stroke-width=&quot;2&quot;
                        stroke-linecap=&quot;round&quot;
                        stroke-linejoin=&quot;round&quot;
                        class=&quot;feather feather-x t-icon t-hover-icon&quot;
                    &gt;
                        &lt;line x1=&quot;18&quot; y1=&quot;6&quot; x2=&quot;6&quot; y2=&quot;18&quot;&gt;&lt;/line&gt;
                        &lt;line x1=&quot;6&quot; y1=&quot;6&quot; x2=&quot;18&quot; y2=&quot;18&quot;&gt;&lt;/line&gt;
                    &lt;/svg&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;
&lt;/div&gt;
</pre
                                            >
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tableLight" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Table Light</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="table-light table-responsive">
                                <table role="table" aria-busy="false" aria-colcount="5" class="table b-table table-hover" id="__BVID__310">
                                    <thead role="rowgroup" class="">
                                        <tr role="row" class="">
                                            <th role="columnheader" scope="col" aria-colindex="1" class=""><div>#</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="2" class=""><div>First Name</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="3" class=""><div>Last Name</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="4" class=""><div>Email</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="5" aria-label="Action" class="text-center"><div></div></th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="(item, i) in table_1" :key="item.name" role="rowgroup">
                                        <tr role="row" class="">
                                            <td aria-colindex="1" role="cell" class="">{{ i + 1 }}</td>
                                            <td aria-colindex="2" role="cell" class="">{{ item["first name"] }}</td>
                                            <td aria-colindex="3" role="cell" class="">{{ item["last name"] }}</td>
                                            <td aria-colindex="4" role="cell" class="">{{ item.email }}</td>
                                            <td aria-colindex="5" role="cell" class="text-center">
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
                                                    class="feather feather-x t-icon"
                                                >
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-start">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;div class=&quot;table-light table-responsive&quot;&gt;
    &lt;table role=&quot;table&quot; aria-busy=&quot;false&quot; aria-colcount=&quot;5&quot; class=&quot;table b-table table-hover&quot; id=&quot;__BVID__310&quot;&gt;
        &lt;thead role=&quot;rowgroup&quot; class=&quot;&quot;&gt;
            &lt;tr role=&quot;row&quot; class=&quot;&quot;&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;1&quot; class=&quot;&quot;&gt;&lt;div&gt;#&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;2&quot; class=&quot;&quot;&gt;&lt;div&gt;First Name&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;3&quot; class=&quot;&quot;&gt;&lt;div&gt;Last Name&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;4&quot; class=&quot;&quot;&gt;&lt;div&gt;Email&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;5&quot; aria-label=&quot;Action&quot; class=&quot;text-center&quot;&gt;&lt;div&gt;&lt;/div&gt;&lt;/th&gt;
            &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody v-for=&quot;(item, i) in table_1&quot; :key=&quot;item.name&quot; role=&quot;rowgroup&quot;&gt;
            &lt;tr role=&quot;row&quot; class=&quot;&quot;&gt;
                &lt;td aria-colindex=&quot;1&quot; role=&quot;cell&quot; class=&quot;&quot;&gt;{{ i + 1 }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;2&quot; role=&quot;cell&quot; class=&quot;&quot;&gt;{{ item["first name"] }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;3&quot; role=&quot;cell&quot; class=&quot;&quot;&gt;{{ item["last name"] }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;4&quot; role=&quot;cell&quot; class=&quot;&quot;&gt;{{ item.email }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;5&quot; role=&quot;cell&quot; class=&quot;text-center&quot;&gt;
                    &lt;svg
                        xmlns=&quot;http://www.w3.org/2000/svg&quot;
                        width=&quot;24&quot;
                        height=&quot;24&quot;
                        viewBox=&quot;0 0 24 24&quot;
                        fill=&quot;none&quot;
                        stroke=&quot;currentColor&quot;
                        stroke-width=&quot;2&quot;
                        stroke-linecap=&quot;round&quot;
                        stroke-linejoin=&quot;round&quot;
                        class=&quot;feather feather-x t-icon&quot;
                    &gt;
                        &lt;line x1=&quot;18&quot; y1=&quot;6&quot; x2=&quot;6&quot; y2=&quot;18&quot;&gt;&lt;/line&gt;
                        &lt;line x1=&quot;6&quot; y1=&quot;6&quot; x2=&quot;18&quot; y2=&quot;18&quot;&gt;&lt;/line&gt;
                    &lt;/svg&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;
&lt;/div&gt;
</pre
                                            >
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tableCaption" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Captions</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table role="table" aria-busy="false" aria-colcount="5" class="table b-table" id="__BVID__319">
                                    <thead role="rowgroup" class="">
                                        <tr role="row" class="">
                                            <th role="columnheader" scope="col" aria-colindex="1" class=""><div>#</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="2" class=""><div>Name</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="3" class=""><div>Email</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="4" class=""><div>Status</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="5" class=""><div>Register</div></th>
                                        </tr>
                                    </thead>
                                    <tbody role="rowgroup">
                                        <tr v-for="(item, i) in table_1" :key="item.name" role="row" class="">
                                            <td aria-colindex="1" role="cell" class="">{{ i + 1 }}</td>
                                            <td aria-colindex="2" role="cell" class="text-success">{{ item.name }}</td>
                                            <td aria-colindex="3" role="cell" class="">{{ item.email }}</td>
                                            <td aria-colindex="4" role="cell" class="">
                                                <span
                                                    class="badge"
                                                    :class="{
                                                        'outline-badge-primary': item.status == 'Complete',
                                                        'outline-badge-secondary': item.status == 'Pending',
                                                        'outline-badge-info': item.status == 'In progress',
                                                        'outline-badge-danger': item.status == 'Canceled',
                                                    }"
                                                >
                                                    {{ item.status }}
                                                </span>
                                            </td>
                                            <td aria-colindex="5" role="cell" class="">{{ item.register }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-start">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;div class=&quot;table-responsive&quot;&gt;
    &lt;table role=&quot;table&quot; aria-busy=&quot;false&quot; aria-colcount=&quot;5&quot; class=&quot;table b-table&quot; id=&quot;__BVID__319&quot;&gt;
        &lt;thead role=&quot;rowgroup&quot; class=&quot;&quot;&gt;
            &lt;tr role=&quot;row&quot; class=&quot;&quot;&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;1&quot; class=&quot;&quot;&gt;&lt;div&gt;#&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;2&quot; class=&quot;&quot;&gt;&lt;div&gt;Name&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;3&quot; class=&quot;&quot;&gt;&lt;div&gt;Email&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;4&quot; class=&quot;&quot;&gt;&lt;div&gt;Status&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;5&quot; class=&quot;&quot;&gt;&lt;div&gt;Register&lt;/div&gt;&lt;/th&gt;
            &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody role=&quot;rowgroup&quot;&gt;
            &lt;tr v-for=&quot;(item, i) in table_1&quot; :key=&quot;item.name&quot; role=&quot;row&quot; class=&quot;&quot;&gt;
                &lt;td aria-colindex=&quot;1&quot; role=&quot;cell&quot; class=&quot;&quot;&gt;{{ i + 1 }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;2&quot; role=&quot;cell&quot; class=&quot;text-success&quot;&gt;{{ item.name }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;3&quot; role=&quot;cell&quot; class=&quot;&quot;&gt;{{ item.email }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;4&quot; role=&quot;cell&quot; class=&quot;&quot;&gt;
                    &lt;span
                        class=&quot;badge&quot;
                        :class=&quot;{
                            'outline-badge-primary': item.status == 'Complete',
                            'outline-badge-secondary': item.status == 'Pending',
                            'outline-badge-info': item.status == 'In progress',
                            'outline-badge-danger': item.status == 'Canceled',
                        }&quot;
                    &gt;
                        {{ item.status }}
                    &lt;/span&gt;
                &lt;/td&gt;
                &lt;td aria-colindex=&quot;5&quot; role=&quot;cell&quot; class=&quot;&quot;&gt;{{ item.register }}&lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;
&lt;/div&gt;
    </pre
                                            >
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tableProgress" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Progress Table</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table role="table" aria-busy="false" aria-colcount="5" class="table b-table table-bordered" id="__BVID__328">
                                    <thead role="rowgroup" class="">
                                        <tr role="row" class="">
                                            <th role="columnheader" scope="col" aria-colindex="1" class=""><div>#</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="2" class=""><div>Name</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="3" class=""><div>Progress</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="4" class=""><div>Sales</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="5" class="text-center"><div>Action</div></th>
                                        </tr>
                                    </thead>
                                    <tbody role="rowgroup">
                                        <tr v-for="(item, i) in table_1" :key="item.name" role="row" class="">
                                            <td aria-colindex="1" role="cell" class="">{{ i + 1 }}</td>
                                            <td aria-colindex="2" role="cell" class="">{{ item["first name"] + " " + item["last name"] }}</td>
                                            <td aria-colindex="3" role="cell" class="">
                                                <div class="progress br-30" min="0">
                                                    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="30" class="progress-bar" :class="`bg-${item.status_class}`" :style="`width: ${item.sales}%`"></div>
                                                </div>
                                            </td>
                                            <td aria-colindex="4" role="cell" class="">
                                                <p :class="i == 3 ? 'text-success' : 'text-danger'">{{ item.sales + "%" }}</p>
                                            </td>
                                            <td aria-colindex="5" role="cell" class="text-center">
                                                <ul class="table-controls">
                                                    <li>
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Edit">
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
                                                                class="feather feather-edit-2"
                                                            >
                                                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Delete">
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
                                                        </a>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-start">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;div class=&quot;table-responsive&quot;&gt;
    &lt;table role=&quot;table&quot; aria-busy=&quot;false&quot; aria-colcount=&quot;5&quot; class=&quot;table b-table table-bordered&quot; id=&quot;__BVID__328&quot;&gt;
        &lt;thead role=&quot;rowgroup&quot; class=&quot;&quot;&gt;
            &lt;tr role=&quot;row&quot; class=&quot;&quot;&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;1&quot; class=&quot;&quot;&gt;&lt;div&gt;#&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;2&quot; class=&quot;&quot;&gt;&lt;div&gt;Name&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;3&quot; class=&quot;&quot;&gt;&lt;div&gt;Progress&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;4&quot; class=&quot;&quot;&gt;&lt;div&gt;Sales&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;5&quot; class=&quot;text-center&quot;&gt;&lt;div&gt;Action&lt;/div&gt;&lt;/th&gt;
            &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody role=&quot;rowgroup&quot;&gt;
            &lt;tr v-for=&quot;(item, i) in table_1&quot; :key=&quot;item.name&quot; role=&quot;row&quot; class=&quot;&quot;&gt;
                &lt;td aria-colindex=&quot;1&quot; role=&quot;cell&quot; class=&quot;&quot;&gt;{{ i + 1 }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;2&quot; role=&quot;cell&quot; class=&quot;&quot;&gt;{{ item["first name"] + " " + item["last name"] }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;3&quot; role=&quot;cell&quot; class=&quot;&quot;&gt;
                    &lt;div class=&quot;progress br-30&quot; min=&quot;0&quot;&gt;
                        &lt;div
                            role=&quot;progressbar&quot;
                            aria-valuemin=&quot;0&quot;
                            aria-valuemax=&quot;100&quot;
                            aria-valuenow=&quot;30&quot;
                            class=&quot;progress-bar&quot;
                            :class=&quot;`bg-${item.status_class}`&quot;
                            :style=&quot;`width: ${item.sales}%`&quot;
                        &gt;&lt;/div&gt;
                    &lt;/div&gt;
                &lt;/td&gt;
                &lt;td aria-colindex=&quot;4&quot; role=&quot;cell&quot; class=&quot;&quot;&gt;
                    &lt;p :class=&quot;i == 3 ? 'text-success' : 'text-danger'&quot;&gt;{{ item.sales + "%" }}&lt;/p&gt;
                &lt;/td&gt;
                &lt;td aria-colindex=&quot;5&quot; role=&quot;cell&quot; class=&quot;text-center&quot;&gt;
                    &lt;ul class=&quot;table-controls&quot;&gt;
                        &lt;li&gt;
                            &lt;a href=&quot;javascript:void(0);&quot; data-bs-toggle=&quot;tooltip&quot; title=&quot;Edit&quot;&gt;
                                &lt;svg&gt; ... &lt;/svg&gt;
                            &lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;a href=&quot;javascript:void(0);&quot; data-bs-toggle=&quot;tooltip&quot; title=&quot;Delete&quot;&gt;
                                &lt;svg&gt; ... &lt;/svg&gt;
                            &lt;/a&gt;
                        &lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;
&lt;/div&gt;
</pre
                                            >
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tableContextual" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Contextual</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="contextual-table table-responsive">
                                <table role="table" class="table b-table" id="__BVID__337">
                                    <thead role="rowgroup" class="">
                                        <tr role="row" class="">
                                            <th role="columnheader" scope="col" class="">#</th>
                                            <th role="columnheader" scope="col" class="">first name</th>
                                            <th role="columnheader" scope="col" class="">last name</th>
                                            <th role="columnheader" scope="col" class="">email</th>
                                        </tr>
                                    </thead>
                                    <tbody role="rowgroup">
                                        <tr v-for="(item, i) in table_2" :key="item.name" role="row" :class="'table-' + random_class(i)">
                                            <td role="cell" class="">{{ i + 1 }}</td>
                                            <td role="cell" class="">{{ item["first name"] }}</td>
                                            <td role="cell" class="">{{ item["first name"] }}</td>
                                            <td role="cell" class="">{{ item.email }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code7')" class="code-section text-start">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;div class=&quot;contextual-table table-responsive&quot;&gt;
    &lt;table role=&quot;table&quot; class=&quot;table b-table&quot; id=&quot;__BVID__337&quot;&gt;
        &lt;thead role=&quot;rowgroup&quot; class=&quot;&quot;&gt;
            &lt;tr role=&quot;row&quot; class=&quot;&quot;&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; class=&quot;&quot;&gt;#&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; class=&quot;&quot;&gt;first name&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; class=&quot;&quot;&gt;last name&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; class=&quot;&quot;&gt;email&lt;/th&gt;
            &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody role=&quot;rowgroup&quot;&gt;
            &lt;tr v-for=&quot;(item, i) in table_2&quot; :key=&quot;item.name&quot; role=&quot;row&quot; :class=&quot;'table-' + random_class(i)&quot;&gt;
                &lt;td role=&quot;cell&quot; class=&quot;&quot;&gt;{{ i + 1 }}&lt;/td&gt;
                &lt;td role=&quot;cell&quot; class=&quot;&quot;&gt;{{ item["first name"] }}&lt;/td&gt;
                &lt;td role=&quot;cell&quot; class=&quot;&quot;&gt;{{ item["first name"] }}&lt;/td&gt;
                &lt;td role=&quot;cell&quot; class=&quot;&quot;&gt;{{ item.email }}&lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;
&lt;/div&gt;
</pre
                                            >
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tableDropdown" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Dropdown</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table role="table" class="table b-table table-bordered" id="__BVID__345">
                                    <thead role="rowgroup" class="">
                                        <tr role="row" class="">
                                            <th role="columnheader" scope="col" class="">Name</th>
                                            <th role="columnheader" scope="col" class="">Date</th>
                                            <th role="columnheader" scope="col" class="">Sale</th>
                                            <th role="columnheader" scope="col" class="text-center">Status</th>
                                            <th role="columnheader" scope="col" class="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody role="rowgroup">
                                        <tr v-for="item in table_2" :key="item.name" role="row" class="">
                                            <td role="cell" class="">{{ item.name }}</td>
                                            <td role="cell" class="">{{ item.date }}</td>
                                            <td role="cell" class="">{{ item.sale }}</td>
                                            <td role="cell" class="">
                                                <span class="badge" :class="`badge-${item.status_class}`">{{ item.status }}</span>
                                            </td>
                                            <td role="cell" class="text-center">
                                                <div class="dropdown b-dropdown custom-dropdown btn-group" id="__BVID__464">
                                                    <a aria-haspopup="true" aria-expanded="false" href="javascript:;" target="_self" class="btn dropdown-toggle btn-icon-only" data-bs-toggle="dropdown" boundary="body" id="ddlcustom">
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
                                                    <ul role="menu" tabindex="-1" class="dropdown-menu dropdown-menu-right" aria-labelledby="ddlcustom" style="">
                                                        <li role="presentation"><a role="menuitem" href="javascript:" target="_self" class="dropdown-item">Download</a></li>
                                                        <li role="presentation"><a role="menuitem" href="javascript:" target="_self" class="dropdown-item">Share</a></li>
                                                        <li role="presentation"><a role="menuitem" href="javascript:" target="_self" class="dropdown-item">Edit</a></li>
                                                        <li role="presentation"><a role="menuitem" href="javascript:" target="_self" class="dropdown-item">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code8')" class="code-section text-start">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;div class=&quot;table-responsive&quot;&gt;
    &lt;table role=&quot;table&quot; class=&quot;table b-table table-bordered&quot; &gt;
        &lt;thead role=&quot;rowgroup&quot; class=&quot;&quot;&gt;
            &lt;tr role=&quot;row&quot; class=&quot;&quot;&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; class=&quot;&quot;&gt;Name&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; class=&quot;&quot;&gt;Date&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; class=&quot;&quot;&gt;Sale&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; class=&quot;text-center&quot;&gt;Status&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; class=&quot;text-center&quot;&gt;Action&lt;/th&gt;
            &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody role=&quot;rowgroup&quot;&gt;
            &lt;tr v-for=&quot;item in table_2&quot; :key=&quot;item.name&quot; role=&quot;row&quot; class=&quot;&quot;&gt;
                &lt;td role=&quot;cell&quot; class=&quot;&quot;&gt;{{ item.name }}&lt;/td&gt;
                &lt;td role=&quot;cell&quot; class=&quot;&quot;&gt;{{ item.date }}&lt;/td&gt;
                &lt;td role=&quot;cell&quot; class=&quot;&quot;&gt;{{ item.sale }}&lt;/td&gt;
                &lt;td role=&quot;cell&quot; class=&quot;&quot;&gt;
                    &lt;span class=&quot;badge&quot; :class=&quot;`badge-${item.status_class}`&quot;&gt;{{ item.status }}&lt;/span&gt;
                &lt;/td&gt;
                &lt;td role=&quot;cell&quot; class=&quot;text-center&quot;&gt;
                    &lt;div class=&quot;dropdown b-dropdown custom-dropdown btn-group&quot; id=&quot;__BVID__464&quot;&gt;
                        &lt;a
                            aria-haspopup=&quot;true&quot;
                            aria-expanded=&quot;false&quot;
                            href=&quot;javascript:;&quot;
                            target=&quot;_self&quot;
                            class=&quot;btn dropdown-toggle btn-icon-only&quot;
                            data-bs-toggle=&quot;dropdown&quot;
                            boundary=&quot;body&quot;
                            id=&quot;ddlcustom&quot;
                        &gt;
                            &lt;svg&gt; ... &lt;/svg&gt;
                        &lt;/a&gt;
                        &lt;ul role=&quot;menu&quot; tabindex=&quot;-1&quot; class=&quot;dropdown-menu dropdown-menu-right&quot; aria-labelledby=&quot;ddlcustom&quot; style=&quot;&quot;&gt;
                            &lt;li role=&quot;presentation&quot;&gt;&lt;a role=&quot;menuitem&quot; href=&quot;javascript:&quot; target=&quot;_self&quot; class=&quot;dropdown-item&quot;&gt;Download&lt;/a&gt;&lt;/li&gt;
                            &lt;li role=&quot;presentation&quot;&gt;&lt;a role=&quot;menuitem&quot; href=&quot;javascript:&quot; target=&quot;_self&quot; class=&quot;dropdown-item&quot;&gt;Share&lt;/a&gt;&lt;/li&gt;
                            &lt;li role=&quot;presentation&quot;&gt;&lt;a role=&quot;menuitem&quot; href=&quot;javascript:&quot; target=&quot;_self&quot; class=&quot;dropdown-item&quot;&gt;Edit&lt;/a&gt;&lt;/li&gt;
                            &lt;li role=&quot;presentation&quot;&gt;&lt;a role=&quot;menuitem&quot; href=&quot;javascript:&quot; target=&quot;_self&quot; class=&quot;dropdown-item&quot;&gt;Delete&lt;/a&gt;&lt;/li&gt;
                        &lt;/ul&gt;
                    &lt;/div&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;
&lt;/div&gt;
</pre
                                            >
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tableFooter" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Table with Footer</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="table-condensed table-responsive">
                                <table role="table" aria-busy="false" aria-colcount="4" class="table b-table table-hover table-bordered" id="__BVID__354">
                                    <thead role="rowgroup" class="">
                                        <tr role="row" class="">
                                            <th role="columnheader" scope="col" aria-colindex="1" class=""><div>Name</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="2" class=""><div>Position</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="3" class=""><div>Office</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="4" class="text-center"><div>Action</div></th>
                                        </tr>
                                    </thead>
                                    <tbody role="rowgroup">
                                        <tr v-for="item in table_1" :key="item.name" role="row" class="">
                                            <td aria-colindex="1" role="cell" class="">{{ item.name }}</td>
                                            <td aria-colindex="2" role="cell" class="">{{ item.position }}</td>
                                            <td aria-colindex="3" role="cell" class="">{{ item.office }}</td>
                                            <td aria-colindex="4" role="cell" class="text-center">
                                                <ul class="table-controls">
                                                    <li>
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Edit">
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
                                                                class="feather feather-check-circle text-primary"
                                                            >
                                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Delete">
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
                                                                class="feather feather-x-circle text-danger"
                                                            >
                                                                <circle cx="12" cy="12" r="10"></circle>
                                                                <line x1="15" y1="9" x2="9" y2="15"></line>
                                                                <line x1="9" y1="9" x2="15" y2="15"></line>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot role="rowgroup" class="">
                                        <tr role="row" class="">
                                            <th role="columnheader" scope="col" aria-colindex="1" class=""><div>Name</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="2" class=""><div>Position</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="3" class=""><div>Office</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="4" class="text-center"><div>Action</div></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code9')" class="code-section text-start">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;div class=&quot;table-condensed table-responsive&quot;&gt;
    &lt;table role=&quot;table&quot; aria-busy=&quot;false&quot; aria-colcount=&quot;4&quot; class=&quot;table b-table table-hover table-bordered&quot; id=&quot;__BVID__354&quot;&gt;
        &lt;thead role=&quot;rowgroup&quot; class=&quot;&quot;&gt;
            &lt;tr role=&quot;row&quot; class=&quot;&quot;&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;1&quot; class=&quot;&quot;&gt;&lt;div&gt;Name&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;2&quot; class=&quot;&quot;&gt;&lt;div&gt;Position&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;3&quot; class=&quot;&quot;&gt;&lt;div&gt;Office&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;4&quot; class=&quot;text-center&quot;&gt;&lt;div&gt;Action&lt;/div&gt;&lt;/th&gt;
            &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody role=&quot;rowgroup&quot;&gt;
            &lt;tr v-for=&quot;item in table_1&quot; :key=&quot;item.name&quot; role=&quot;row&quot; class=&quot;&quot;&gt;
                &lt;td aria-colindex=&quot;1&quot; role=&quot;cell&quot; class=&quot;&quot;&gt;{{ item.name }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;2&quot; role=&quot;cell&quot; class=&quot;&quot;&gt;{{ item.position }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;3&quot; role=&quot;cell&quot; class=&quot;&quot;&gt;{{ item.office }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;4&quot; role=&quot;cell&quot; class=&quot;text-center&quot;&gt;
                    &lt;ul class=&quot;table-controls&quot;&gt;
                        &lt;li&gt;
                            &lt;a href=&quot;javascript:void(0);&quot; data-bs-toggle=&quot;tooltip&quot; title=&quot;Edit&quot;&gt;
                                &lt;svg&gt; ... &lt;/svg&gt;line points=&quot;22 4 12 14.01 9 11.01&quot;&gt;&lt;/polyline&gt;
                                &lt;/svg&gt;
                            &lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;a href=&quot;javascript:void(0);&quot; data-bs-toggle=&quot;tooltip&quot; title=&quot;Delete&quot;&gt;
                                &lt;svg&gt; ... &lt;/svg&gt;
                            &lt;/a&gt;
                        &lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
        &lt;tfoot role=&quot;rowgroup&quot; class=&quot;&quot;&gt;
            &lt;tr role=&quot;row&quot; class=&quot;&quot;&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;1&quot; class=&quot;&quot;&gt;&lt;div&gt;Name&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;2&quot; class=&quot;&quot;&gt;&lt;div&gt;Position&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;3&quot; class=&quot;&quot;&gt;&lt;div&gt;Office&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;4&quot; class=&quot;text-center&quot;&gt;&lt;div&gt;Action&lt;/div&gt;&lt;/th&gt;
            &lt;/tr&gt;
        &lt;/tfoot&gt;
    &lt;/table&gt;
&lt;/div&gt;
</pre
                                            >
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tableCheckbox" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Checkboxes</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="table-checkable table-highlight-head table-responsive">
                                <table role="table" aria-busy="false" aria-colcount="5" class="table b-table table-striped table-hover table-bordered" id="__BVID__368">
                                    <thead role="rowgroup" class="">
                                        <tr role="row" class="">
                                            <th role="columnheader" scope="col" aria-colindex="1" class="text-center">
                                                <div class="checkbox-primary custom-control custom-checkbox">
                                                    <input variant="primary" type="checkbox" class="custom-control-input" value="true" id="__BVID__372" /><label class="custom-control-label" for="__BVID__372"></label>
                                                </div>
                                            </th>
                                            <th role="columnheader" scope="col" aria-colindex="2" class=""><div>Name</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="3" class=""><div>Date</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="4" class=""><div>Sale</div></th>
                                            <th role="columnheader" scope="col" aria-colindex="5" class="text-center"><div>icons</div></th>
                                        </tr>
                                    </thead>
                                    <tbody role="rowgroup">
                                        <tr v-for="(item, i) in table_1" :key="item.name" role="row" class="">
                                            <td aria-colindex="1" role="cell" class="text-center">
                                                <div class="checkbox-primary custom-control custom-checkbox">
                                                    <input variant="primary" type="checkbox" class="custom-control-input" value="true" :id="'chk' + i" /><label class="custom-control-label" :for="'chk' + i"></label>
                                                </div>
                                            </td>
                                            <td aria-colindex="2" role="cell" class="">{{ item.name }}</td>
                                            <td aria-colindex="3" role="cell" class="">{{ item.date }}</td>
                                            <td aria-colindex="4" role="cell" class="">{{ item.sale }}</td>
                                            <td aria-colindex="5" role="cell" class="text-center">
                                                <ul class="table-controls">
                                                    <li>
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Settings">
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
                                                                class="feather feather-settings text-primary"
                                                            >
                                                                <circle cx="12" cy="12" r="3"></circle>
                                                                <path
                                                                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                                                                ></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Edit">
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
                                                                class="feather feather-edit-2 text-success"
                                                            >
                                                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Delete">
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
                                                                class="feather feather-trash-2 text-danger"
                                                            >
                                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="code-section-container show-code">
                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code10')"><span>Code</span></button>

                                <div v-if="code_arr.includes('code10')" class="code-section text-start">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;div class=&quot;table-checkable table-highlight-head table-responsive&quot;&gt;
    &lt;table role=&quot;table&quot; aria-busy=&quot;false&quot; aria-colcount=&quot;5&quot; class=&quot;table b-table table-striped table-hover table-bordered&quot; id=&quot;__BVID__368&quot;&gt;
        &lt;thead role=&quot;rowgroup&quot; class=&quot;&quot;&gt;
            &lt;tr role=&quot;row&quot; class=&quot;&quot;&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;1&quot; class=&quot;text-center&quot;&gt;
                    &lt;div class=&quot;checkbox-primary custom-control custom-checkbox&quot;&gt;
                        &lt;input variant=&quot;primary&quot; type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; value=&quot;true&quot; /&gt;&lt;label
                            class=&quot;custom-control-label&quot;
                        &gt;&lt;/label&gt;
                    &lt;/div&gt;
                &lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;2&quot; class=&quot;&quot;&gt;&lt;div&gt;Name&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;3&quot; class=&quot;&quot;&gt;&lt;div&gt;Date&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;4&quot; class=&quot;&quot;&gt;&lt;div&gt;Sale&lt;/div&gt;&lt;/th&gt;
                &lt;th role=&quot;columnheader&quot; scope=&quot;col&quot; aria-colindex=&quot;5&quot; class=&quot;text-center&quot;&gt;&lt;div&gt;icons&lt;/div&gt;&lt;/th&gt;
            &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody role=&quot;rowgroup&quot;&gt;
            &lt;tr v-for=&quot;(item, i) in table_1&quot; :key=&quot;item.name&quot; role=&quot;row&quot; class=&quot;&quot;&gt;
                &lt;td aria-colindex=&quot;1&quot; role=&quot;cell&quot; class=&quot;text-center&quot;&gt;
                    &lt;div class=&quot;checkbox-primary custom-control custom-checkbox&quot;&gt;
                        &lt;input variant=&quot;primary&quot; type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; value=&quot;true&quot; :id=&quot;'chk' + i&quot; /&gt;&lt;label
                            class=&quot;custom-control-label&quot;
                            :for=&quot;'chk' + i&quot;
                        &gt;&lt;/label&gt;
                    &lt;/div&gt;
                &lt;/td&gt;
                &lt;td aria-colindex=&quot;2&quot; role=&quot;cell&quot; class=&quot;&quot;&gt;{{ item.name }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;3&quot; role=&quot;cell&quot; class=&quot;&quot;&gt;{{ item.date }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;4&quot; role=&quot;cell&quot; class=&quot;&quot;&gt;{{ item.sale }}&lt;/td&gt;
                &lt;td aria-colindex=&quot;5&quot; role=&quot;cell&quot; class=&quot;text-center&quot;&gt;
                    &lt;ul class=&quot;table-controls&quot;&gt;
                        &lt;li&gt;
                            &lt;a href=&quot;javascript:void(0);&quot; data-bs-toggle=&quot;tooltip&quot; title=&quot;Settings&quot;&gt;
                                &lt;svg&gt; ... &lt;/svg&gt;
                            &lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;a href=&quot;javascript:void(0);&quot; data-bs-toggle=&quot;tooltip&quot; title=&quot;Edit&quot;&gt;
                                &lt;svg&gt; ... &lt;/svg&gt;
                            &lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;a href=&quot;javascript:void(0);&quot; data-bs-toggle=&quot;tooltip&quot; title=&quot;Delete&quot;&gt;
                                &lt;svg&gt; ... &lt;/svg&gt;
                            &lt;/a&gt;
                        &lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;
&lt;/div&gt;
</pre
                                            >
                                        </div>
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
    import { onMounted, ref } from "vue";

    import "../assets/sass/scrollspyNav.scss";
    import "../assets/sass/tables/table-basic.scss";
    import highlight from "../components/plugins/highlight.vue";

    import { useMeta } from "../composables/use-meta";
    useMeta({ title: "Tables" });

    const code_arr = ref([]);
    const table_1 = ref([]);
    const table_2 = ref([]);

    onMounted(() => {
        initTooltip();
        init_tables();
    });

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };

    const initTooltip = () => {
        setTimeout(() => {
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map((tooltipTriggerEl) => {
                return new window.bootstrap.Tooltip(tooltipTriggerEl);
            });
        });
    };

    const init_tables = () => {
        table_1.value = [
            {
                thumb: "boy.png",
                name: "Shaun Park",
                "first name": "John",
                "last name": "Doe",
                email: "johndoe@yahoo.com",
                date: "10/08/2020",
                sale: "320",
                sales: "29.56",
                status: "Complete",
                status_class: "success",
                register: "5 min ago",
                position: "Developer",
                office: "London",
            },
            {
                thumb: "girl-1.png",
                name: "Alma Clarke",
                "first name": "Andy",
                "last name": "King",
                email: "andyking@gmail.com",
                date: "11/08/2020",
                sale: "420",
                sales: "19.15",
                status: "Pending",
                status_class: "secondary",
                register: "10 min ago",
                position: "Designer",
                office: "New York",
            },
            {
                thumb: "girl-2.png",
                name: "Xavier",
                "first name": "Lisa",
                "last name": "Doe",
                email: "lisadoe@yahoo.com",
                date: "12/08/2020",
                sale: "130",
                sales: "39.00",
                status: "In progress",
                status_class: "info",
                register: "1 hour ago",
                position: "Accountant",
                office: "Amazon",
            },
            {
                thumb: "boy-2.png",
                name: "Vincent Carpenter",
                "first name": "Vincent",
                "last name": "Carpenter",
                email: "vinnyc@yahoo.com",
                date: "13/08/2020",
                sale: "260",
                sales: "88.03",
                status: "Canceled",
                status_class: "danger",
                register: "1 day ago",
                position: "Data Scientist",
                office: "Canada",
            },
        ];

        table_2.value = [
            {
                thumb: "boy.png",
                name: "Amy Diaz",
                "first name": "Amy",
                "last name": "Diaz",
                email: "amydiaz@yahoo.com",
                date: "10/08/2020",
                sale: "320",
                sales: "29.56",
                status: "Complete",
                status_class: "success",
                register: "5 min ago",
            },
            {
                thumb: "girl-1.png",
                name: "Nia Hillyer",
                "first name": "Nia",
                "last name": "Hillyer",
                email: "niahill@gmail.com",
                date: "11/08/2020",
                sale: "420",
                sales: "19.15",
                status: "Pending",
                status_class: "secondary",
                register: "10 min ago",
            },
            {
                thumb: "girl-2.png",
                name: "Marry",
                "first name": "Marry",
                "last name": "McDonald",
                email: "marryMcD@yahoo.com",
                date: "12/08/2020",
                sale: "130",
                sales: "39.00",
                status: "In progress",
                status_class: "info",
                register: "1 hour ago",
            },
            {
                thumb: "boy-2.png",
                name: "Shaun Park",
                "first name": "Shaun",
                "last name": "Park",
                email: "park@yahoo.com",
                date: "13/08/2020",
                sale: "260",
                sales: "88.03",
                status: "Canceled",
                status_class: "danger",
                register: "1 day ago",
            },
        ];
        table_2.value = table_1.value.concat(table_2.value);
    };

    const random_class = (index) => {
        if (index == 0) {
            return "default";
        } else if (index == 1) {
            return "primary";
        } else if (index == 2) {
            return "secondary";
        } else if (index == 3) {
            return "success";
        } else if (index == 4) {
            return "dark";
        } else if (index == 5) {
            return "danger";
        } else if (index == 6) {
            return "info";
        } else if (index == 7) {
            return "warning";
        }
        return "dark";
    };
</script>
