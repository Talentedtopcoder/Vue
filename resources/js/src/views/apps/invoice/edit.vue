<template>
    <div class="layout-px-spacing apps-invoice-add">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Invoice Edit</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row invoice layout-top-spacing layout-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="doc-container">
                    <div class="row">
                        <div class="col-xl-9">
                            <div class="invoice-content">
                                <div class="invoice-detail-body">
                                    <div class="invoice-detail-title">
                                        <div class="invoice-logo">
                                            <div class="upload pe-md-4">
                                                <input ref="fl_profile" type="file" class="d-none" accept="image/*" @change="change_file" />
                                                <img v-if="selected_file" :src="selected_file ? selected_file : '/assets/images/user-profile.jpeg'" alt="profile" class="profile-preview" @click="$refs.fl_profile.click()" />
                                                <div v-else class="profile-preview upload-preview" @click="$refs.fl_profile.click()">
                                                    <div>
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
                                                            class="feather feather-upload-cloud"
                                                        >
                                                            <polyline points="16 16 12 12 8 16"></polyline>
                                                            <line x1="12" y1="12" x2="12" y2="21"></line>
                                                            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                                            <polyline points="16 16 12 12 8 16"></polyline>
                                                        </svg>
                                                    </div>
                                                    <div class="mt-2">Click to Upload Picture/Logo</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="invoice-title">
                                            <input type="text" v-model="params.title" class="form-control" placeholder="Invoice Label" />
                                        </div>
                                    </div>

                                    <div class="invoice-detail-header">
                                        <div class="row justify-content-between">
                                            <div class="col-xl-5 invoice-address-company">
                                                <h4>From:-</h4>

                                                <div class="invoice-address-company-fields">
                                                    <div class="form-group row">
                                                        <label for="company-name" class="col-sm-3 col-form-label col-form-label-sm">Name</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="params.from.name" id="company-name" class="form-control form-control-sm" placeholder="Business Name" />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="company-email" class="col-sm-3 col-form-label col-form-label-sm">Email</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="params.from.email" id="company-email" class="form-control form-control-sm" placeholder="name@company.com" />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="company-address" class="col-sm-3 col-form-label col-form-label-sm">Address</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="params.from.address" id="company-address" class="form-control form-control-sm" placeholder="XYZ Street" />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="company-phone" class="col-sm-3 col-form-label col-form-label-sm">Phone</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="params.from.phone" id="company-phone" class="form-control form-control-sm" placeholder="(123) 456 789" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xl-5 invoice-address-client">
                                                <h4>Bill To:-</h4>

                                                <div class="invoice-address-client-fields">
                                                    <div class="form-group row">
                                                        <label for="client-name" class="col-sm-3 col-form-label col-form-label-sm">Name</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="params.to.name" id="client-name" class="form-control form-control-sm" placeholder="Client Name" />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="client-email" class="col-sm-3 col-form-label col-form-label-sm">Email</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="params.to.email" id="client-email" class="form-control form-control-sm" placeholder="name@company.com" />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="client-address" class="col-sm-3 col-form-label col-form-label-sm">Address</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="params.to.address" id="client-address" class="form-control form-control-sm" placeholder="XYZ Street" />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="client-phone" class="col-sm-3 col-form-label col-form-label-sm">Phone</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="params.to.phone" id="client-phone" class="form-control form-control-sm" placeholder="(123) 456 789" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="invoice-detail-terms">
                                        <div class="row justify-content-between">
                                            <div class="col-md-3">
                                                <div class="form-group mb-4">
                                                    <label for="number">Invoice Number</label>
                                                    <input type="text" v-model="params.invoice_no" id="number" class="form-control form-control-sm" placeholder="#0001" />
                                                </div>
                                            </div>

                                            <div class="col-md-3">
                                                <div class="form-group mb-4">
                                                    <label for="date">Invoice Date</label>
                                                    <flat-pickr v-model="params.invoice_date" class="form-control form-control-sm flatpickr active" placeholder="Invoice Date"></flat-pickr>
                                                </div>
                                            </div>

                                            <div class="col-md-3">
                                                <div class="form-group mb-4">
                                                    <label for="due">Due Date</label>
                                                    <flat-pickr v-model="params.due_date" class="form-control form-control-sm flatpickr active" placeholder="Due Date"></flat-pickr>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="invoice-detail-items">
                                        <div class="table-responsive">
                                            <table class="table table-bordered item-table">
                                                <thead>
                                                    <tr>
                                                        <th class=""></th>
                                                        <th>Description</th>
                                                        <th class="">Rate</th>
                                                        <th class="">Qty</th>
                                                        <th class="text-end">Amount</th>
                                                        <th class="text-center">Tax</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(item, index) in items" :key="index">
                                                        <td class="delete-item-row">
                                                            <ul class="table-controls">
                                                                <li>
                                                                    <a href="javascript:void(0);" class="delete-item" @click="remove_item(item)">
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
                                                                            class="feather feather-x-circle"
                                                                        >
                                                                            <circle cx="12" cy="12" r="10"></circle>
                                                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td class="description">
                                                            <input type="text" v-model="item.title" class="form-control form-control-sm" placeholder="Item Description" />
                                                            <textarea v-model="item.description" class="form-control" placeholder="Additional Details"></textarea>
                                                        </td>
                                                        <td class="rate">
                                                            <input type="number" v-model="item.rate" class="form-control form-control-sm" placeholder="Price" />
                                                        </td>
                                                        <td class="text-end qty">
                                                            <input type="number" v-model="item.quantity" class="form-control form-control-sm" placeholder="Quantity" />
                                                        </td>
                                                        <td class="text-end amount">
                                                            <span class="editable-amount mt-2">
                                                                <span class="currency">$</span> <span class="amount">{{ item.amount }}</span>
                                                            </span>
                                                        </td>
                                                        <td class="text-center tax">
                                                            <div class="checkbox-primary custom-control custom-checkbox">
                                                                <input type="checkbox" :id="`chktax-${index}`" v-model="item.is_tax" class="custom-control-input" />
                                                                <label class="custom-control-label" :for="`chktax-${index}`"></label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <button type="button" class="btn btn-secondary additem btn-sm" @click="add_item()">Add Item</button>
                                    </div>

                                    <div class="invoice-detail-total">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group row invoice-created-by">
                                                    <label for="payment-method-account" class="col-sm-3 col-form-label col-form-label-sm">Account #:</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" v-model="params.bank_info.no" id="payment-method-account" class="form-control form-control-sm" placeholder="Bank Account Number" />
                                                    </div>
                                                </div>

                                                <div class="form-group row invoice-created-by">
                                                    <label for="payment-method-bank-name" class="col-sm-3 col-form-label col-form-label-sm">Bank Name:</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" v-model="params.bank_info.name" id="payment-method-bank-name" class="form-control form-control-sm" placeholder="Insert Bank Name" />
                                                    </div>
                                                </div>

                                                <div class="form-group row invoice-created-by">
                                                    <label for="payment-method-code" class="col-sm-3 col-form-label col-form-label-sm">SWIFT code:</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" v-model="params.bank_info.swift_code" id="payment-method-code" class="form-control form-control-sm" placeholder="Insert Code" />
                                                    </div>
                                                </div>

                                                <div class="form-group row invoice-created-by">
                                                    <label for="payment-method-country" class="col-sm-3 col-form-label col-form-label-sm">Country:</label>
                                                    <div class="col-sm-9">
                                                        <select v-model="params.bank_info.country" class="country_code form-select form-select-sm" id="payment-method-country">
                                                            <option value="">Choose Country</option>
                                                            <option value="United States">United States</option>
                                                            <option value="United Kingdom">United Kingdom</option>
                                                            <option value="Canada">Canada</option>
                                                            <option value="Australia">Australia</option>
                                                            <option value="Germany">Germany</option>
                                                            <option value="Sweden">Sweden</option>
                                                            <option value="Denmark">Denmark</option>
                                                            <option value="Norway">Norway</option>
                                                            <option value="New-Zealand">New Zealand</option>
                                                            <option value="Afghanistan">Afghanistan</option>
                                                            <option value="Albania">Albania</option>
                                                            <option value="Algeria">Algeria</option>
                                                            <option value="American-Samoa">Andorra</option>
                                                            <option value="Angola">Angola</option>
                                                            <option value="Antigua Barbuda">Antigua &amp; Barbuda</option>
                                                            <option value="Argentina">Argentina</option>
                                                            <option value="Armenia">Armenia</option>
                                                            <option value="Aruba">Aruba</option>
                                                            <option value="Austria">Austria</option>
                                                            <option value="Azerbaijan">Azerbaijan</option>
                                                            <option value="Bahamas">Bahamas</option>
                                                            <option value="Bahrain">Bahrain</option>
                                                            <option value="Bangladesh">Bangladesh</option>
                                                            <option value="Barbados">Barbados</option>
                                                            <option value="Belarus">Belarus</option>
                                                            <option value="Belgium">Belgium</option>
                                                            <option value="Belize">Belize</option>
                                                            <option value="Benin">Benin</option>
                                                            <option value="Bermuda">Bermuda</option>
                                                            <option value="Bhutan">Bhutan</option>
                                                            <option value="Bolivia">Bolivia</option>
                                                            <option value="Bosnia">Bosnia &amp; Herzegovina</option>
                                                            <option value="Botswana">Botswana</option>
                                                            <option value="Brazil">Brazil</option>
                                                            <option value="British">British Virgin Islands</option>
                                                            <option value="Brunei">Brunei</option>
                                                            <option value="Bulgaria">Bulgaria</option>
                                                            <option value="Burkina">Burkina Faso</option>
                                                            <option value="Burundi">Burundi</option>
                                                            <option value="Cambodia">Cambodia</option>
                                                            <option value="Cameroon">Cameroon</option>
                                                            <option value="Cape">Cape Verde</option>
                                                            <option value="Cayman">Cayman Islands</option>
                                                            <option value="Central-African">Central African Republic</option>
                                                            <option value="Chad">Chad</option>
                                                            <option value="Chile">Chile</option>
                                                            <option value="China">China</option>
                                                            <option value="Colombia">Colombia</option>
                                                            <option value="Comoros">Comoros</option>
                                                            <option value="Costa-Rica">Costa Rica</option>
                                                            <option value="Croatia">Croatia</option>
                                                            <option value="Cuba">Cuba</option>
                                                            <option value="Cyprus">Cyprus</option>
                                                            <option value="Czechia">Czechia</option>
                                                            <option value="Côte">Côte d’Ivoire</option>
                                                            <option value="Djibouti">Djibouti</option>
                                                            <option value="Dominica">Dominica</option>
                                                            <option value="Dominican">Dominican Republic</option>
                                                            <option value="Ecuador">Ecuador</option>
                                                            <option value="Egypt">Egypt</option>
                                                            <option value="El-Salvador">El Salvador</option>
                                                            <option value="Equatorial-Guinea">Equatorial Guinea</option>
                                                            <option value="Eritrea">Eritrea</option>
                                                            <option value="Estonia">Estonia</option>
                                                            <option value="Ethiopia">Ethiopia</option>
                                                            <option value="Fiji">Fiji</option>
                                                            <option value="Finland">Finland</option>
                                                            <option value="France">France</option>
                                                            <option value="Gabon">Gabon</option>
                                                            <option value="Georgia">Georgia</option>
                                                            <option value="Ghana">Ghana</option>
                                                            <option value="Greece">Greece</option>
                                                            <option value="Grenada">Grenada</option>
                                                            <option value="Guatemala">Guatemala</option>
                                                            <option value="Guernsey">Guernsey</option>
                                                            <option value="Guinea">Guinea</option>
                                                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                            <option value="Guyana">Guyana</option>
                                                            <option value="Haiti">Haiti</option>
                                                            <option value="Honduras">Honduras</option>
                                                            <option value="Hong-Kong">Hong Kong SAR China</option>
                                                            <option value="Hungary">Hungary</option>
                                                            <option value="Iceland">Iceland</option>
                                                            <option value="India">India</option>
                                                            <option value="Indonesia">Indonesia</option>
                                                            <option value="Iran">Iran</option>
                                                            <option value="Iraq">Iraq</option>
                                                            <option value="Ireland">Ireland</option>
                                                            <option value="Israel">Israel</option>
                                                            <option value="Italy">Italy</option>
                                                            <option value="Jamaica">Jamaica</option>
                                                            <option value="Japan">Japan</option>
                                                            <option value="Jordan">Jordan</option>
                                                            <option value="Kazakhstan">Kazakhstan</option>
                                                            <option value="Kenya">Kenya</option>
                                                            <option value="Kuwait">Kuwait</option>
                                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                            <option value="Laos">Laos</option>
                                                            <option value="Latvia">Latvia</option>
                                                            <option value="Lebanon">Lebanon</option>
                                                            <option value="Lesotho">Lesotho</option>
                                                            <option value="Liberia">Liberia</option>
                                                            <option value="Libya">Libya</option>
                                                            <option value="Liechtenstein">Liechtenstein</option>
                                                            <option value="Lithuania">Lithuania</option>
                                                            <option value="Luxembourg">Luxembourg</option>
                                                            <option value="Macedonia">Macedonia</option>
                                                            <option value="Madagascar">Madagascar</option>
                                                            <option value="Malawi">Malawi</option>
                                                            <option value="Malaysia">Malaysia</option>
                                                            <option value="Maldives">Maldives</option>
                                                            <option value="Mali">Mali</option>
                                                            <option value="Malta">Malta</option>
                                                            <option value="Mauritania">Mauritania</option>
                                                            <option value="Mauritius">Mauritius</option>
                                                            <option value="Mexico">Mexico</option>
                                                            <option value="Moldova">Moldova</option>
                                                            <option value="Monaco">Monaco</option>
                                                            <option value="Mongolia">Mongolia</option>
                                                            <option value="Montenegro">Montenegro</option>
                                                            <option value="Morocco">Morocco</option>
                                                            <option value="Mozambique">Mozambique</option>
                                                            <option value="Myanmar">Myanmar (Burma)</option>
                                                            <option value="Namibia">Namibia</option>
                                                            <option value="Nepal">Nepal</option>
                                                            <option value="Netherlands">Netherlands</option>
                                                            <option value="Nicaragua">Nicaragua</option>
                                                            <option value="Niger">Niger</option>
                                                            <option value="Nigeria">Nigeria</option>
                                                            <option value="North-Korea">North Korea</option>
                                                            <option value="Oman">Oman</option>
                                                            <option value="Pakistan">Pakistan</option>
                                                            <option value="Palau">Palau</option>
                                                            <option value="Palestinian">Palestinian Territories</option>
                                                            <option value="Panama">Panama</option>
                                                            <option value="Papua">Papua New Guinea</option>
                                                            <option value="Paraguay">Paraguay</option>
                                                            <option value="Peru">Peru</option>
                                                            <option value="Philippines">Philippines</option>
                                                            <option value="Poland">Poland</option>
                                                            <option value="Portugal">Portugal</option>
                                                            <option value="Puerto">Puerto Rico</option>
                                                            <option value="Qatar">Qatar</option>
                                                            <option value="Romania">Romania</option>
                                                            <option value="Russia">Russia</option>
                                                            <option value="Rwanda">Rwanda</option>
                                                            <option value="Réunion">Réunion</option>
                                                            <option value="Samoa">Samoa</option>
                                                            <option value="San-Marino">San Marino</option>
                                                            <option value="Saudi-Arabia">Saudi Arabia</option>
                                                            <option value="Senegal">Senegal</option>
                                                            <option value="Serbia">Serbia</option>
                                                            <option value="Seychelles">Seychelles</option>
                                                            <option value="Sierra-Leone">Sierra Leone</option>
                                                            <option value="Singapore">Singapore</option>
                                                            <option value="Slovakia">Slovakia</option>
                                                            <option value="Slovenia">Slovenia</option>
                                                            <option value="Solomon-Islands">Solomon Islands</option>
                                                            <option value="Somalia">Somalia</option>
                                                            <option value="South-Africa">South Africa</option>
                                                            <option value="South-Korea">South Korea</option>
                                                            <option value="Spain">Spain</option>
                                                            <option value="Sri-Lanka">Sri Lanka</option>
                                                            <option value="Sudan">Sudan</option>
                                                            <option value="Suriname">Suriname</option>
                                                            <option value="Swaziland">Swaziland</option>
                                                            <option value="Switzerland">Switzerland</option>
                                                            <option value="Syria">Syria</option>
                                                            <option value="Sao-Tome-and-Principe">São Tomé &amp; Príncipe</option>
                                                            <option value="Tajikistan">Tajikistan</option>
                                                            <option value="Tanzania">Tanzania</option>
                                                            <option value="Thailand">Thailand</option>
                                                            <option value="Timor-Leste">Timor-Leste</option>
                                                            <option value="Togo">Togo</option>
                                                            <option value="Tonga">Tonga</option>
                                                            <option value="Trinidad-and-Tobago">Trinidad &amp; Tobago</option>
                                                            <option value="Tunisia">Tunisia</option>
                                                            <option value="Turkey">Turkey</option>
                                                            <option value="Turkmenistan">Turkmenistan</option>
                                                            <option value="Uganda">Uganda</option>
                                                            <option value="Ukraine">Ukraine</option>
                                                            <option value="UAE">United Arab Emirates</option>
                                                            <option value="Uruguay">Uruguay</option>
                                                            <option value="Uzbekistan">Uzbekistan</option>
                                                            <option value="Vanuatu">Vanuatu</option>
                                                            <option value="Venezuela">Venezuela</option>
                                                            <option value="Vietnam">Vietnam</option>
                                                            <option value="Yemen">Yemen</option>
                                                            <option value="Zambia">Zambia</option>
                                                            <option value="Zimbabwe">Zimbabwe</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="totals-row">
                                                    <div class="invoice-totals-row invoice-summary-subtotal">
                                                        <div class="invoice-summary-label">Subtotal</div>
                                                        <div class="invoice-summary-value">
                                                            <div class="subtotal-amount"><span class="currency">$</span><span class="amount">100</span></div>
                                                        </div>
                                                    </div>
                                                    <div class="invoice-totals-row invoice-summary-total">
                                                        <div class="invoice-summary-label">Discount</div>
                                                        <div class="invoice-summary-value">
                                                            <div class="total-amount"><span class="currency">$</span><span>10</span></div>
                                                        </div>
                                                    </div>
                                                    <div class="invoice-totals-row invoice-summary-tax">
                                                        <div class="invoice-summary-label">Tax</div>
                                                        <div class="invoice-summary-value">
                                                            <div class="tax-amount">
                                                                <span>0%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="invoice-totals-row invoice-summary-balance-due">
                                                        <div class="invoice-summary-label">Total</div>
                                                        <div class="invoice-summary-value">
                                                            <div class="balance-due-amount"><span class="currency">$</span><span>90</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="invoice-detail-note">
                                        <div class="row">
                                            <div class="col-md-12 align-self-center">
                                                <div class="form-group row invoice-note">
                                                    <label for="invoice-detail-notes" class="col-sm-12 col-form-label col-form-label-sm">Notes:</label>
                                                    <div class="col-sm-12">
                                                        <textarea v-model="params.notes" rows="3" id="invoice-detail-notes" class="form-control" placeholder='Notes - For example, \"Thank you for doing business with us"'></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3">
                            <div class="invoice-actions">
                                <div class="invoice-action-currency">
                                    <div class="form-group mb-0">
                                        <label for="currency">Currency</label>
                                        <div class="dropdown selectable-dropdown invoice-select d-block btn-group">
                                            <a href="javascript:;" id="ddlCurrency" class="btn dropdown-toggle btn-icon-only text-nowrap" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img :src="'/assets/images/' + selected_currency.thumb" class="flag-width" alt="flag" />
                                                <span class="selectable-text">{{ selected_currency.key }}</span>
                                                <span class="selectable-arrow"
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </span>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlCurrency">
                                                <li v-for="(item, index) in currency_list" :key="index">
                                                    <a href="javascript:;" class="dropdown-item" @click="selected_currency = item"> <img :src="'/assets/images/' + item.thumb" class="flag-width" alt="flag" /> {{ item.key }} </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="invoice-action-tax">
                                    <h5>Tax</h5>

                                    <div class="invoice-action-tax-fields">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-group mb-0">
                                                    <label for="type">Type</label>
                                                    <div class="dropdown selectable-dropdown invoice-select d-block btn-group">
                                                        <a href="javascript:;" id="ddlTax" class="btn dropdown-toggle btn-icon-only text-nowrap" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <span class="selectable-text">{{ selected_tax_type.key }}</span>
                                                            <span class="selectable-arrow"
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
                                                                    class="feather feather-chevron-down"
                                                                >
                                                                    <polyline points="6 9 12 15 18 9"></polyline></svg
                                                            ></span>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlTax">
                                                            <li v-for="(item, index) in tax_type_list" :key="index">
                                                                <a href="javascript:;" class="dropdown-item" @click="selected_tax_type = item">
                                                                    {{ item.key }}
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div v-if="selected_tax_type.value !== null" class="form-group mb-0 tax-rate-deducted">
                                                    <label for="rate">Rate (%)</label>
                                                    <input v-model="selected_tax_type.value" type="number" min="0" max="100" class="input-rate form-control" placeholder="Rate" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="invoice-action-discount">
                                    <h5>Discount</h5>

                                    <div class="invoice-action-discount-fields">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-group mb-0">
                                                    <label for="type">Type</label>

                                                    <div class="dropdown selectable-dropdown invoice-select d-block btn-group">
                                                        <a href="javascript:;" id="ddlDiscount" class="btn dropdown-toggle btn-icon-only text-nowrap" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <span class="selectable-text">{{ selected_discount.key }}</span>
                                                            <span class="selectable-arrow"
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
                                                                    class="feather feather-chevron-down"
                                                                >
                                                                    <polyline points="6 9 12 15 18 9"></polyline></svg
                                                            ></span>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlDiscount">
                                                            <li v-for="(item, index) in discount_list" :key="index">
                                                                <a href="javascript:;" class="dropdown-item" @click="selected_discount = item">{{ item.key }}</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div v-if="selected_discount.value !== null" class="form-group mb-0 discount-amount">
                                                    <label for="rate" class="text-capitalize">{{ selected_discount.type }}</label>
                                                    <input v-model="selected_discount.value" type="number" min="0" class="input-rate form-control" placeholder="Rate" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="invoice-actions-btn">
                                <div class="invoice-action-btn">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-4">
                                            <a href="javascript:;" class="btn btn-primary btn-send">Send Invoice</a>
                                        </div>
                                        <div class="col-xl-12 col-md-4">
                                            <router-link to="/apps/invoice/preview" class="btn btn-dark btn-preview">Preview</router-link>
                                        </div>
                                        <div class="col-xl-12 col-md-4">
                                            <a href="javascript:;" class="btn btn-success btn-download">Save</a>
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
    import { onMounted, ref } from "vue";
    import "../../../assets/sass/apps/invoice-edit.scss";

    //flatpickr
    import flatPickr from "vue-flatpickr-component";
    import "flatpickr/dist/flatpickr.css";
    import "../../../assets/sass/forms/custom-flatpickr.css";

    import { useMeta } from "../../../composables/use-meta";

    useMeta({ title: "Invoice Edit" });

    const items = ref([]);
    const selected_file = ref("../../../assets/images/cork-logo.png");
    const params = ref({
        title: "Cork Inc.",
        invoice_no: "#0001",
        from: { name: "Cork Inc.", email: "info@company.com", address: "XYZ Delta Street", phone: "(120) 456 789" },
        to: { name: "Jesse Cory", email: "redq@company.com", address: "405 Mulberry Rd. Mc Grady, NC, 28649", phone: "(128) 666 070" },

        invoice_date: "",
        due_date: "",
        bank_info: { no: "1234567890", name: "Bank of America", swift_code: "VS70134", country: "United States" },
        notes: "Thank you for doing business with us.",
    });
    const currency_list = ref([]);
    const selected_currency = ref({ key: "USD - US Dollar", thumb: "flags/en.png" });
    const tax_type_list = ref([]);
    const selected_tax_type = ref({ key: "None", value: null });
    const discount_list = ref([]);
    const selected_discount = ref({ key: "None", value: null, type: "" });

    onMounted(() => {
        //set default data
        items.value = [
            { id: 1, title: "Calendar App Customization", description: "Make Calendar App Dynamic", rate: 60, quantity: 2, amount: 120, is_tax: false },
            { id: 2, title: "Chat App Customization", description: "Customized Chat Application to resolve some Bug Fixes", rate: 25, quantity: 1, amount: 25, is_tax: false },
        ];

        let dt = new Date();
        params.value.invoice_date = JSON.parse(JSON.stringify(dt));
        dt.setDate(dt.getDate() + 5);
        params.value.due_date = dt;

        //currency list
        currency_list.value = [
            { key: "USD - US Dollar", thumb: "flags/en.png" },
            { key: "GBP - British Pound", thumb: "flags/gbp.png" },
            { key: "IDR - Indonesian Rupiah", thumb: "flags/idr.png" },
            { key: "INR - Indian Rupee", thumb: "flags/inr.png" },
            { key: "BRL - Brazilian Real", thumb: "flags/brl.png" },
            { key: "EUR - Germany (Euro)", thumb: "flags/de.png" },
            { key: "TRY - Turkish Lira", thumb: "flags/tr.png" },
        ];

        //tax type list
        tax_type_list.value = [
            { key: "Deducted", value: 10 },
            { key: "Per Item", value: 5 },
            { key: "On Total", value: 25 },
            { key: "None", value: null },
        ];

        //discount list
        discount_list.value = [
            { key: "Percent", value: 10, type: "percent" },
            { key: "Flat Amount", value: 25, type: "amount" },
            { key: "None", value: null, type: "" },
        ];
    });

    const change_file = (event) => {
        selected_file.value = URL.createObjectURL(event.target.files[0]);
    };

    const add_item = () => {
        let max_id = 0;
        if (items.value && items.value.length) {
            max_id = items.value.reduce((max, character) => (character.id > max ? character.id : max), items.value[0].id);
        }
        items.value.push({ id: max_id + 1, title: "", description: "", rate: 0, quantity: 0, amount: 0, is_tax: false });
    };

    const remove_item = (item) => {
        items.value = items.value.filter((d) => d.id != item.id);
    };
</script>
