//......................... Dialog.......................
function confirm(heading, question, cancelButtonTxt, okButtonTxt, callback1, callback2) {

    var confirmModal = $('<div class="modal fade">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
            '<h4 class="modal-title">' + heading + '</h4>' +
            '</div>' +
            '<div class="modal-body">' +
            '<p>' + question + '</p>' +
            '</div>' +
            '<div class="modal-footer">' +
            '<button type="button" class="btn btn-default" data-dismiss="modal" id="cancelbtn">' + cancelButtonTxt + '</button>' +
            '<button type="button" class="btn btn-primary" id="okButton">' + okButtonTxt + '</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
    confirmModal.find('#okButton').click(function(event) {
        callback1();
        confirmModal.modal('hide');
    });
    confirmModal.find('#cancelbtn').click(function(event) {
        callback2();
        confirmModal.modal('hide');
    });
    confirmModal.modal('show');
}



//...........................................................



function donner_data_table() {
    var tableData;
    $.post("../Controller/controller.php", {loading_donnerdata: 'table'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="4"> No Data Found in database </td></tr>';
            $('#orders-datatable tbody').html('').append(tableData);
        } else {

            $.each(e, function(index, data) {



                //confirmation;
                var conf;
                if (data.confirmation === "true")
                {
                    conf = '<span class="label label-success">Paid</span>';
                } else
                {
                    conf = '<span class="label label-warning">Pending</span>';
                }
                
                tableData += '<tr>';
                tableData += '<td>' + data.fname + " " + data.lname + '</td>';
                tableData += '<td>' + data.phone + '</td>';
                tableData += '<td>' + data.email + '</td>';
                tableData += '<td>' + conf + '</td>';
                tableData += '<td><button class="btn btn-sm btn-alt m-r-5 delete_admin_data" value="' + data.nic_no + '"><i class="fa fa-trash-o fa-lg"></i>&nbsp;Delete</button></td>';
                tableData += '</tr>';
            });
            //Load Json Data to Table
            $('#orders-datatable tbody').html('').append(tableData);        

            //Delete Data through Delete button
             $('.delete_admin_data').click(function() {
             id_for_delete = $(this).val();
             confirm("Delete Record ", "Are you sure want to delete This Donner Record", "No", "Yes", function() {
             $.post("../Controller/controller.php", {delete_donnerdata: 'delete', id_for_delete: id_for_delete}, function(delMsg) {
             $.each(delMsg, function(index, valueDel) {
             if (valueDel.msgType === 1) {
             alertify.success(valueDel.msg, 3000);
             } else if (valueDel.msgType === 2) {
             alertify.error(valueDel.msg, 3000);
             }
             });
             donner_data_table();
             }, "json");
             });
             });
         
    
        }
    }, "json");
}