// Call the dataTables jQuery plugin
$(document).ready(function() {
    $('#dataTableKepviselok').DataTable({
        ajax: '/data/2019/kepviselok.json',
        lengthChange: false,
        //paging: false,
        //searching: false,
        //ordering: false,
        //info: false
        "columns": [            
            { data: "valasztokerulet", title: "Választókerület", "width": "8%" },
            { data: "cimzettek", title: "Címzett", className: "dt-left" },
            { data: "feladat", title: "Feladat", className: "dt-left" },
            { data: "osszeg", title: "Összeg", "width": "20%", render: $.fn.dataTable.render.number(',', '.', 0, '', ' Ft') }
        ]
    });
});
