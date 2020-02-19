// Call the dataTables jQuery plugin
$(document).ready(function() {
    $('#dataTableBevetelek').DataTable({
        ajax: '/data/2020/bevetel-terv.json',
        paging: false,
        searching: false,
        ordering: false,
        info: false
    });

    $('#dataTableKiadasok').DataTable({
        ajax: '/data/2020/kiadas-terv.json',
        paging: false,
        searching: false,
        ordering: false,
        info: false
    });
});
