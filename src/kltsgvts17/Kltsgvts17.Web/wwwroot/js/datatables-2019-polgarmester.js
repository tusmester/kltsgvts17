// Call the dataTables jQuery plugin
$(document).ready(function() {
    $('#dataTablePolgarmester').DataTable({
        ajax: '/data/2019/polgarmester.json',
        lengthChange: false,
        //paging: false,
        //searching: false,
        //ordering: false,
        //info: false
        "columns": [            
            null,
            null,
            { "width": "20%", render: $.fn.dataTable.render.number(',', '.', 0, '', ' Ft') }
        ]
    });
});
