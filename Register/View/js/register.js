//////////// Care At Clinic  ///////////////////
currentId = 0;


function requiredFields(param) {

    var value = 1;
    for (i = 0; i < param.length; i++) {
        if ($('#' + param[i]).val() === "") {
            value *= 0;
        } else {

            value *= 1;
        }
    }

    return value;
}


function passwordCheck() {
    
    if($('#password').val()!==$('#re_password').val()){
        
        return false;
    }
    


}



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



function register_data_save() {

    var fname = $('#fname').val();
    var lname = $('#lname').val();
    var nic = $('#nic').val();
    var gender = $('#gender').val();
    var pnumber = $('#pnumber').val();
    var country = $('#country').val();
    var address = $('#address').val();
    var city = $('#city').val();
    var state = $('#state').val();
    var zip = $('#zip').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var re_password = $('#re_password').val();

    
    $.post('../Controller/controller.php', {save_register: 'data', fname: fname, lname: lname, nic: nic, gender: gender, pnumber: pnumber, country: country, address: address, city: city, state: state, zip: zip, email: email, password: password, re_password: re_password}, function(data) {
      if (data.msgType === 1) {
             alertify.success(data.msg, 2000);
             okModel("Thank you for getting registered ", " One of our member will call you to select the package ", "OK");

             
        } else {
             alertify.error(data.msg, 2000);
        }

        clear_register();
    }, "json");
    
    
    
    
}


function clear_register() {

    $('#fname').val('');
    $('#lname').val('');
    $('#nic').val('');
    $('#gender').val('');
    $('#pnumber').val('');
    $('#country').val('');
    $('#address').val('');
    $('#city').val('');
    $('#state').val('');
    $('#zip').val('');
    $('#email').val('');
    $('#password').val('');
    $('#re_password').val('');


}








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
