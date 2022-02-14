var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "/Admin/Order/GetAll"
        },
        "columns": [
            { "data": "id", "width": "5%" },
            { "data": "name", "width": "10%" },
            { "data": "phoneNumber", "width": "10%" },
            { "data": "applicationUser.email", "width": "15%" },
            { "data": "orderStatus", "width": "5%" },
            /*{ "data": "orderTotal", "width": "5%" },*/
            {
                "data": "id",
                "render": function (data) {
                    return `
                        <div class="w-75 btn-group" role="group">
                        <a href="/Admin/Order/Details?id=${data}"
                        class="btn btn-primary mx-2"> <i class="bi bi-pencil-square"></i></a>
					</div>
                        `
                },
                "width": "15%"
            }
        ]
    });
}