<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">DataTables</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>HTML5 Export</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-12 layout-spacing">
                <div class="panel br-6">
                    <div class="custom-table panel-body p-0">
                        <div class="d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0">
                            <button variant="primary" class="btn m-1 btn-primary" @click="export_table('csv')">CSV</button>
                            <vue3-json-excel class="btn btn-primary m-1" name="table.xls" :fields="excel_columns()" :json-data="excel_items()">Excel</vue3-json-excel>
                            <button variant="primary" class="btn m-1 btn-primary" @click="export_table('print')">Print</button>
                            <button variant="primary" class="btn m-1 btn-primary" @click="export_table('pdf')">PDF</button>
                        </div>

                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #profile="props">
                                <img :src="'/assets/images/' + props.row.thumb" class="rounded-circle profile-img" alt="avatar" />
                            </template>
                            <template #action>
                                <div class="custom-dropdown dropdown btn-group">
                                    <div class="btn-group" href="#" role="button" id="pendingTask" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <button type="button" class="btn btn-dark">Open</button>
                                        <div role="group" class="btn-group">
                                            <div class="dropdown b-dropdown custom-dropdown show btn-group">
                                                <a class="btn dropdown-toggle btn-dark"
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
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item"> Action </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item"> Another action </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item"> Something else here... </a>
                                        </li>
                                        <li role="presentation"><hr role="separator" aria-orientation="horizontal" class="dropdown-divider" /></li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item"> Separated link </a>
                                        </li>
                                    </ul>
                                </div>
                            </template>
                            <template #salary="props"> ${{ props.row.salary }} </template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from "vue";

    //pdf export
    import jsPDF from "jspdf";
    import "jspdf-autotable";

    import { useMeta } from "../../../composables/use-meta";
    useMeta({ title: "Export Table" });

    const columns = ref(["profile", "name", "position", "office", "age", "start_date", "salary", "action"]);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: "table table-hover",
        columnsClasses: { action: "actions text-center" },
        pagination: { nav: "scroll", chunk: 5 },
        texts: {
            count: "Showing {from} to {to} of {count}",
            filter: "",
            filterPlaceholder: "Search...",
            limit: "Results:",
        },
        sortable: ["name", "position", "office", "age", "start_date", "salary"],
        sortIcon: {
            base: "sort-icon-none",
            up: "sort-icon-asc",
            down: "sort-icon-desc",
        },
        resizableColumns: false,
    });

    onMounted(() => {
        bind_data();
    });

    const bind_data = () => {
        items.value = [
            { id: 1, thumb: "boy-1.png", name: "Tiger Nixon", position: "System Architect", office: "Edinburgh", age: 61, start_date: "2011/04/25", salary: "320,800" },
            { id: 2, thumb: "boy-1.png", name: "Garrett Winters", position: "Accountant", office: "Tokyo", age: 63, start_date: "2011/07/25", salary: "170,750" },
            { id: 3, thumb: "boy.png", name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: 66, start_date: "2009/01/12", salary: "86,000" },
            { id: 4, thumb: "boy-1.png", name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, start_date: "2012/03/29", salary: "433,060" },
            { id: 5, thumb: "girl-1.png", name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, start_date: "2008/11/28", salary: "162,700" },
            { id: 6, thumb: "girl-4.png", name: "Brielle Williamson", position: "Integration Specialist", office: "New York", age: 61, start_date: "2012/12/02", salary: "372,000" },
            { id: 7, thumb: "boy.png", name: "Herrod Chandler", position: "Sales Assistant", office: "San Francisco", age: 59, start_date: "2012/08/06", salary: "137,500" },
            { id: 8, thumb: "girl-4.png", name: "Rhona Davidson", position: "Integration Specialist", office: "Tokyo", age: 55, start_date: "2010/10/14", salary: "327,900" },
            { id: 9, thumb: "girl-1.png", name: "Colleen Hurst", position: "Javascript Developer", office: "San Francisco", age: 39, start_date: "2009/09/15", salary: "205,500" },
            { id: 10, thumb: "girl-1.png", name: "Sonya Frost", position: "Software Engineer", office: "Edinburgh", age: 23, start_date: "2008/12/13", salary: "103,600" },
            { id: 11, thumb: "girl-2.png", name: "Jena Gaines", position: "Office Manager", office: "London", age: 30, start_date: "2008/12/19", salary: "90,560" },
            { id: 12, thumb: "girl-3.png", name: "Quinn Flynn", position: "Support Lead", office: "Edinburgh", age: 22, start_date: "2013/03/03", salary: "342,000" },
            { id: 13, thumb: "boy.png", name: "Charde Marshall", position: "Regional Director", office: "San Francisco", age: 36, start_date: "2008/10/16", salary: "470,600" },
            { id: 14, thumb: "girl-4.png", name: "Haley Kennedy", position: "Senior Marketing Designer", office: "London", age: 43, start_date: "2012/12/18", salary: "313,500" },
            { id: 15, thumb: "girl-2.png", name: "Tatyana Fitzpatrick", position: "Regional Director", office: "London", age: 19, start_date: "2010/03/17", salary: "385,750" },
            { id: 16, thumb: "boy.png", name: "Michael Silva", position: "Marketing Designer", office: "London", age: 66, start_date: "2012/11/27", salary: "198,500" },
            { id: 17, thumb: "boy-2.png", name: "Paul Byrd", position: "Chief Financial Officer (CFO)", office: "New York", age: 64, start_date: "2010/06/09", salary: "725,000" },
            { id: 18, thumb: "girl-2.png", name: "Gloria Little", position: "Systems Administrator", office: "New York", age: 59, start_date: "2009/04/10", salary: "237,500" },
            { id: 19, thumb: "girl-3.png", name: "Bradley Greer", position: "Software Engineer", office: "London", age: 41, start_date: "2012/10/13", salary: "132,000" },
            { id: 20, thumb: "girl-4.png", name: "Dai Rios", position: "Personnel Lead", office: "Edinburgh", age: 35, start_date: "2012/09/26", salary: "217,500" },
            { id: 21, thumb: "girl-1.png", name: "Jenette Caldwell", position: "Development Lead", office: "New York", age: 61, start_date: "2011/09/03", salary: "345,000" },
            { id: 22, thumb: "boy.png", name: "Yuri Berry", position: "Chief Marketing Officer (CMO)", office: "New York", age: 40, start_date: "2009/06/25", salary: "675,000" },
            { id: 23, thumb: "boy-2.png", name: "Caesar Vance", position: "Pre-Sales Support", office: "New York", age: 21, start_date: "2011/12/12", salary: "106,450" },
            { id: 24, thumb: "boy.png", name: "Doris Wilder", position: "Sales Assistant", office: "Sidney", age: 23, start_date: "2010/09/20", salary: "85,600" },
            { id: 25, thumb: "girl-2.png", name: "Angelica Ramos", position: "Chief Executive Officer (CEO)", office: "London", age: 47, start_date: "2009/10/09", salary: "1,200,000" },
            { id: 26, thumb: "boy-2.png", name: "Gavin Joyce", position: "Developer", office: "Edinburgh", age: 42, start_date: "2010/12/22", salary: "92,575" },
            { id: 27, thumb: "girl-3.png", name: "Jennifer Chang", position: "Regional Director", office: "Singapore", age: 28, start_date: "2010/11/14", salary: "57,650" },
        ];
    };

    const export_table = (type) => {
        let cols = columns.value.filter((d) => d != "profile" && d != "action");
        let records = items.value;
        let filename = "table";

        if (type == "csv") {
            let coldelimiter = ",";
            let linedelimiter = "\n";
            let result = cols
                .map((d) => {
                    return capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            records.map((item) => {
                cols.map((d, index) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : "";
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/csv/i) && !window.navigator.msSaveOrOpenBlob) {
                var data = "data:application/csv;charset=utf-8," + encodeURIComponent(result);
                var link = document.createElement("a");
                link.setAttribute("href", data);
                link.setAttribute("download", filename + ".csv");
                link.click();
            } else {
                var blob = new Blob([result]);
                if (window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveBlob(blob, filename + ".csv");
                }
            }
        } else if (type == "print") {
            var rowhtml = "<p>" + filename + "</p>";
            rowhtml += '<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ';
            cols.map((d) => {
                rowhtml += "<th>" + capitalize(d) + "</th>";
            });
            rowhtml += "</tr></thead>";
            rowhtml += "<tbody>";

            records.map((item) => {
                rowhtml += "<tr>";
                cols.map((d) => {
                    let val = item[d] ? item[d] : "";
                    rowhtml += "<td>" + val + "</td>";
                });
                rowhtml += "</tr>";
            });
            rowhtml +=
                "<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>";
            rowhtml += "</tbody></table>";
            var winPrint = window.open("", "", "left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0");
            winPrint.document.write("<title>Print</title>" + rowhtml);
            winPrint.document.close();
            winPrint.focus();
            winPrint.print();
            // winPrint.close();
        } else if (type == "pdf") {
            cols = cols.map((d) => {
                return { header: capitalize(d), dataKey: d };
            });
            const doc = new jsPDF("l", "pt", cols.length > 10 ? "a3" : "a4");
            doc.autoTable({
                headStyles: { fillColor: "#eff5ff", textColor: "#515365" },
                columns: cols,
                body: records,
                styles: { overflow: "linebreak" },
                pageBreak: "auto",
                margin: { top: 45 },
                didDrawPage: () => {
                    doc.text("Export Table", cols.length > 10 ? 535 : 365, 30);
                },
            });
            doc.save(filename + ".pdf");
        }
    };

    const excel_columns = () => {
        return {
            Name: "name",
            Position: "position",
            Office: "office",
            Age: "age",
            "Start Date": "start_date",
            Salary: "salary",
        };
    };
    const excel_items = () => {
        return items.value;
    };
    const capitalize = (text) => {
        return text
            .replace("_", " ")
            .replace("-", " ")
            .toLowerCase()
            .split(" ")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ");
    };
</script>
