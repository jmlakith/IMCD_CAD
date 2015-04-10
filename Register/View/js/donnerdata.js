
function okModel(heading, question, okButtonTxt, callback2) {

    var ok = $('<div class="modal fade">' +
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
            '<button type="button" class="btn btn-primary" id="okButton">' + okButtonTxt + '</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
    ok.find('#okButton').click(function(event) {
        ok.modal('hide');
    });

    ok.modal('show');
}




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
    $.post("../Controller/controller.php", {loading_donnerdata_approved: 'table'}, function(e) {
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
                tableData += '<td>' + data.city + '</td>';
                tableData += '<td><button class="btn btn-sm btn-alt m-r-5 clinicCare " value="' + data.nic_no + '"><i class="fa fa-plus-square fa-lg"></i>&nbsp;Select</button></td>';
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




            //........................

            $('.clinicCare').click(function() {

              /*  $('#update_btn').slideDown();
                $('#save_btn').slideUp();*/
                $clinicID = $(this).val();
                currentId = $(this).val();


                console.log($clinicID);

                $.post("../Controller/controller.php", {get_donner_data: 'upData', clinicID: $clinicID}, function(up) {
                    $.each(up, function(index, data) {


                       $('#hidden_val').val(data.nic_no);

                        $('#name').val(data.fname+" "+data.lname);
                        $('#pnumber').val(data.phone);
                         var src = data.bank_slip;
                         $("#mainlink").attr("href", src);
                         $("#image").attr("src", src);
                        
                        

                    });
                }, "json");
            });










            //..................

        }
    }, "json");
}






//..............................................................................



function assign_student() {



    var student_id = $('#autocomplete').val();
    var package = $('#package').val();
    var hide_id = $('#hidden_val').val();



    $.post('../Controller/controller.php', {update_donnerdetails: 'data', student_id: student_id, package: package, hide_id_up: hide_id},
    function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);

        } else {
            alertify.error(data.msg, 2000);
        }
        donner_data_table();
        $('#autocomplete').val("");
        $('#package').val("");
    }, "json");
}