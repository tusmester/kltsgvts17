// Call the dataTables jQuery plugin
$(document).ready(function() {
    $('#dataTableKiadasokFull').DataTable({
        ajax: '/data/2020/kiadasok-full.json',
        lengthChange: false,
        //paging: false,
        //searching: false,
        ordering: false,
        //info: false
        "pageLength": 50,
        "columns": [                        
            { data: "eloiranyzat", className: "dt-left", render: $.fn.dataTable.render.number(',', '.', 0, '', '') },
            { data: "szemelyi", className: "dt-left", render: $.fn.dataTable.render.number(',', '.', 0, '', '') },
            { data: "jarulek", className: "dt-left", render: $.fn.dataTable.render.number(',', '.', 0, '', '') },
            { data: "dologi", className: "dt-left", render: $.fn.dataTable.render.number(',', '.', 0, '', '') },
            { data: "ellatottak", className: "dt-left", render: $.fn.dataTable.render.number(',', '.', 0, '', '') },
            { data: "egyebmukodes", className: "dt-left", render: $.fn.dataTable.render.number(',', '.', 0, '', '') },
            { data: "beruhazas", className: "dt-left", render: $.fn.dataTable.render.number(',', '.', 0, '', '') },
            { data: "felujitas", className: "dt-left", render: $.fn.dataTable.render.number(',', '.', 0, '', '') },
            { data: "egyebfelhalmozas", className: "dt-left", render: $.fn.dataTable.render.number(',', '.', 0, '', '') },
            { data: "koltsegvetesi", className: "dt-left", render: $.fn.dataTable.render.number(',', '.', 0, '', '') },
            { data: "kozponti", className: "dt-left", render: $.fn.dataTable.render.number(',', '.', 0, '', '') },
            { data: "osszesen", className: "dt-left", render: $.fn.dataTable.render.number(',', '.', 0, '', '') },
            //{ "width": "20%", render: $.fn.dataTable.render.number(',', '.', 0, '', '') }
        ],
        rowGroup: {
            dataSrc: 'group'
        }
    });
});
