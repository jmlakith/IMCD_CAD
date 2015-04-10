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


function confirm_reset_bill(heading, question, cancelButtonTxt, okButtonTxt, callback1, callback2) {
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
            '<button type="button" class="btn btn-success" data-dismiss="modal" id="item_data">' + cancelButtonTxt + '</button>' +
            '<button type="button" class="btn btn-primary" id="bill_summery">' + okButtonTxt + '</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
    confirmModal.find('#item_data').click(function(event) {
        callback1();
        confirmModal.modal('hide');
    });
    confirmModal.find('#bill_summery').click(function(event) {
        callback2();
        confirmModal.modal('hide');
    });
    confirmModal.modal('show');
}

function refreshChosen() {
    $('select').trigger("liszt:updated");
}



function get_container_id() {
    $.post('view.php', {contaiiner_id_combo: 'data'},
    function(data) {
        $("#container_id").html(data);
        refreshChosen();
    });
}

function get_test_done_locations() {
    $.post('view.php', {test_done_combo: 'data'},
    function(data) {
        $("#ad_AddTest_TDoneLoc").html(data);
        refreshChosen();
    });
}

function get_dip_prefix() {
    dip_id = $('.dipids').val();
    $.post('view.php', {dpart_prifix: 'data', dip_id: dip_id},
    function(data) {
        $("#ad_AddTest_TCode").val(data);
    });
}
function clear_test_felds() {
    $('#ad_AddTest_TDepId').val('');
    $('#ad_AddTest_TCode').val('');
    $('#ad_AddTest_TName').val('');
    $('#ad_AddTest_TPrice').val('');
    $('#container_id').val('');
    $('#ad_AddTest_TDoneLoc').val('');
}
function save_test_data() {
    dipid = $('#ad_AddTest_TDepId').val();
    testcode = $('#ad_AddTest_TCode').val();
    testname = $('#ad_AddTest_TName').val();
    peice = $('#ad_AddTest_TPrice').val();
    containerid = $('#container_id').val();
    t_don_loc = $('#ad_AddTest_TDoneLoc').val();
    $.post("view.php", {savetest_Data: 'save', dipid: dipid, testcode: testcode, testname: testname, peice: peice, containerid: containerid, t_don_loc: t_don_loc}, function(serMsg) {
//        loadServiceDataTable();
        $.each(serMsg, function(index, valueSaveServices) {
            if (valueSaveServices.msgType === 1) {
                alertify.success(valueSaveServices.msg, 2000);
            } else if (valueSaveServices.msgType === 2) {
                alertify.error(valueSaveServices.msg, 2000);
            }
        });
        load_test_data_table();
        clear_test_felds();
        get_next_auto_number_for_test();
//        hideUpdateDeleteBtns();
    }, "json");
}

function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function get_next_auto_number_for_test() {
    $.post('view.php', {auto_no: 'data'},
    function(data) {
        $("#ad_AddTest_TId").val(data);
    });
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function get_pro_names_for_combo() {
    $.post('view.php', {pro_name_combo: 'data'},
    function(data) {
        $("#pro_name").html(data);
        refreshChosen();
    });
}

function clear_product_felds() {
    $('#all_qun').val('');
    $('#com_price').val('');
    $('#sel_price').val('');
}

function save_pro_data() {
    pro_name = $('#pro_name').val();
    com_price = $('#com_price').val();
    sel_price = $('#sel_price').val();
    all_qun = $('#all_qun').val();
    $.post("view.php", {savepro_Data: 'save', all_qun: all_qun, pro_name: pro_name, com_price: com_price, sel_price: sel_price}, function(serMsg) {
        console.log(serMsg);
        $.each(serMsg, function(index, valueSaveServices) {
            if (valueSaveServices.msgType === 1) {
                alertify.success(valueSaveServices.msg, 2000);
            } else if (valueSaveServices.msgType === 2) {
                alertify.error(valueSaveServices.msg, 2000);
            }
        });
        load_product_data_table();
        clear_product_felds();
        refreshChosen();
        get_all_qun_for_display();
//        hideUpdateDeleteBtns();
    }, "json");
}

function load_product_data_table() {
    var tableData;
    $.post("view.php", {product_datatbl: 'table'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="6"> No Data Found in database </td></tr>';
            $('.product_data_table tbody').html('').append(tableData);
        } else {
            $.each(e, function(index, data) {
                tableData += '<tr>';
                tableData += '<td>' + data.pro_name + '</td>';
                tableData += '<td>' + data.all_qun + '</td>';
                tableData += '<td>' + data.pro_com_price + '</td>';
                tableData += '<td>' + data.pro_sales_price + '</td>';
                tableData += '<td><div class="btn-group"><button class="btn btn-primary selproductData" value="' + data.pro_id + '"><i class="fa fa-plus-square fa-lg"></i>&nbsp;Select</button><button class="btn btn-danger delproductData" value="' + data.pro_id + '"><i class="fa fa-trash-o fa-lg"></i>&nbsp;Delete</button></div></td>';
                tableData += '</tr>';

            });
            //Load Json Data to Table
            $('.product_data_table tbody').html('').append(tableData);

            //Delete Data through Delete button
            $('.delproductData').click(function() {
                product_id = $(this).val();
                confirm("Delete Product Data", "Are you sure want to delete Product data", "No", "Yes", function() {
                    $.post("view.php", {delete_product: 'delete', product_id: product_id}, function(delMsg) {
                        load_product_data_table();
                        $.each(delMsg, function(index, valueDel) {
                            if (valueDel.msgType === 1) {
                                alertify.success(valueDel.msg, 2000);
                            } else if (valueDel.msgType === 2) {
                                alertify.error(valueDel.msg, 2000);
                            }
                        });
                    }, "json");
                });
            });

            //Select Data through select button   
            $('.selproductData').click(function() {
                $('#item_states_bar').slideUp();
                $('#save_prodata').hide();
                $('#update_prodata').show();
//                $('#upDelBtns').removeClass("hidden");
                product_id_up = $(this).val();
                $.post("view.php", {product_id_for_up: 'upData', product_id_up: product_id_up}, function(up) {
                    load_product_data_table();
                    $.each(up, function(index, data) {
                        $('#hide_pro_id').val(data.pro_id);
                        $('#pro_name').val(data.pro_name_id);
                        $('#com_price').val(data.pro_com_price);
                        $('#sel_price').val(data.pro_sales_price);
                        $('#all_qun').val(data.all_qun);
                        refreshChosen();
                    });
                }, "json");
            });
        }
    }, "json");
}

function update_product_data() {
    hide_id = $('#hide_pro_id').val();
    pro_name = $('#pro_name').val();
    com_price = $('#com_price').val();
    sel_price = $('#sel_price').val();
    all_qun = $('#all_qun').val();
    $.post("view.php", {update_product_data: 'save', hide_id: hide_id, up_pro_name: pro_name, com_price: com_price, sel_price: sel_price, all_qun: all_qun}, function(updateSerMsg) {
        load_product_data_table();
        $.each(updateSerMsg, function(index, valueUpdateServices) {
            if (valueUpdateServices.msgType === 1) {
                alertify.success(valueUpdateServices.msg, 2000);
            } else if (valueUpdateServices.msgType === 2) {
                alertify.error(valueUpdateServices.msg, 2000);
            }
        });
        clear_product_felds();
//        hideUpdateDeleteBtns();
    }, "json");
}

function filter_table(search_val) {
    var tableData;
    $.post("view.php", {product_tbl_filter: 'table'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="6"> No Data Found in database </td></tr>';
            $('#product_data_table tbody').html('').append(tableData);
        } else {
            $.each(e, function(index, data) {
                if (data.pro_name === search_val) {
                    tableData += '<tr>';
                    tableData += '<td>' + data.pro_name + '</td>';
                    tableData += '<td>' + data.pro_no_of_pack + '</td>';
                    tableData += '<td>' + data.pro_qun_of_pcack + '</td>';
                    tableData += '<td>' + data.pro_com_price + '</td>';
                    tableData += '<td>' + data.pro_sales_price + '</td>';
                    tableData += '<td><div class="btn-group"><button class="btn btn-primary selproductData" value="' + data.pro_id + '"><i class="fa fa-plus-square fa-lg"></i>&nbsp;Select</button><button class="btn btn-danger delproductData" value="' + data.pro_id + '"><i class="fa fa-trash-o fa-lg"></i>&nbsp;Delete</button></div></td>';
                    tableData += '</tr>';
                } else {
                }
            });
            //Load Json Data to Table
            $('#product_data_table tbody').html('').append(tableData);
        }
    }, "json");
}

function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
        return false;

    return true;
}

function load_product_name_table() {
    var tableData;
    $.post("view.php", {product_name_datatb2: 'table'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="2"> No Data Found in database </td></tr>';
            $('.product_name_table tbody').html('').append(tableData);
        } else {
            $.each(e, function(index, data) {
                tableData += '<tr>';
                if (data.pro_name === 'Select Product') {
                } else {
                    tableData += '<td>' + data.pro_name + '</td>';
                    tableData += '<td><div class="btn-group"><button class="btn btn-primary selproductData" value="' + data.pro_name_id + '"><i class="fa fa-plus-square fa-lg"></i>&nbsp;Select</button><button class="btn btn-danger delproductData" value="' + data.pro_name_id + '"><i class="fa fa-trash-o fa-lg"></i>&nbsp;Delete</button></div></td>';
                    tableData += '</tr>';
                }
            });
            //Load Json Data to Table
            $('.product_name_table tbody').html('').append(tableData);

            //Delete Data through Delete button
            $('.delproductData').click(function() {
                product_id = $(this).val();
                confirm("Delete Product Data", "Are you sure want to delete Product data", "No", "Yes", function() {
                    $.post("view.php", {delete_product_name: 'delete', product_name_id: product_id}, function(delMsg) {
                        load_product_name_table();
                        $.each(delMsg, function(index, valueDel) {
                            if (valueDel.msgType === 1) {
                                alertify.success(valueDel.msg, 2000);
                            } else if (valueDel.msgType === 2) {
                                alertify.error(valueDel.msg, 2000);
                            }
                        });
                    }, "json");
                });
            });

            //Select Data through select button   
            $('.selproductData').click(function() {
                $('#update_prodata').show();
//                $('#upDelBtns').removeClass("hidden");
                product_id_up = $(this).val();
                $.post("view.php", {product_name_id_for_up: 'upData', product_name_id_up: product_id_up}, function(up) {
                    load_product_name_table();
                    $.each(up, function(index, data) {
                        $('#hide_pro_id').val(data.pro_name_id);
                        $('#pro_name_data').val(data.pro_name);
                    });
                }, "json");
            });
        }
    }, "json");
}

function clear_product_name_felds() {
    $('#pro_name_data').val('');
}

function save_pro_name_data() {
    pro_name = $('#pro_name_data').val();
    $.post("view.php", {savepro_name_Data: 'save', pro_name_add: pro_name}, function(serMsg) {
        $.each(serMsg, function(valueSaveServices) {
            if (valueSaveServices.msgType === 1) {
                alertify.success(valueSaveServices.msg, 2000);
            } else if (valueSaveServices.msgType === 2) {
                alertify.error(valueSaveServices.msg, 2000);
            }
        });
        load_product_name_table();
        clear_product_name_felds();
//        hideUpdateDeleteBtns();
    }, "json");
}

function update_product_name_data() {
    pro_name = $('#pro_name_data').val();
    hide_pro_id = $('#hide_pro_id').val();
    $.post("view.php", {update_product_dataa: 'save', hide_pro_name_id: hide_pro_id, pro_name_for_update: pro_name}, function(updateSerMsg) {
        load_product_name_table();
        $.each(updateSerMsg, function(index, valueUpdateServices) {
            if (valueUpdateServices.msgType === 1) {
                alertify.success(valueUpdateServices.msg, 2000);
            } else if (valueUpdateServices.msgType === 2) {
                alertify.error(valueUpdateServices.msg, 2000);
            }
        });
        clear_product_felds();
//        hideUpdateDeleteBtns();
    }, "json");
}

function filter_table_for_name(search_val) {
    var tableData;
    $.post("view.php", {product_tbl_filter_name: 'table'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="6"> No Data Found in database </td></tr>';
            $('#product_data_table tbody').html('').append(tableData);
        } else {
            $.each(e, function(index, data) {
                if (data.pro_name === search_val) {
                    tableData += '<tr>';
                    tableData += '<td>' + data.pro_name + '</td>';
                    tableData += '<td><div class="btn-group"><button class="btn btn-primary selproductData" value="' + data.pro_name_id + '"><i class="fa fa-plus-square fa-lg"></i>&nbsp;Select</button><button class="btn btn-danger delproductData" value="' + data.pro_name_id + '"><i class="fa fa-trash-o fa-lg"></i>&nbsp;Delete</button></div></td>';
                    tableData += '</tr>';
                } else {
                }
            });
            $('#product_data_table tbody').html('').append(tableData);
            //Delete Data through Delete button
            $('.delproductData').click(function() {
                product_id = $(this).val();
                confirm("Delete Product Data", "Are you sure want to delete Product data", "No", "Yes", function() {
                    $.post("view.php", {delete_product_name: 'delete', product_name_id: product_id}, function(delMsg) {
                        load_product_name_table();
                        $.each(delMsg, function(index, valueDel) {
                            if (valueDel.msgType === 1) {
                                alertify.success(valueDel.msg, 2000);
                            } else if (valueDel.msgType === 2) {
                                alertify.error(valueDel.msg, 2000);
                            }
                        });
                    }, "json");
                });
            });

            //Select Data through select button   
            $('.selproductData').click(function() {
                $('#update_prodata').show();
//                $('#upDelBtns').removeClass("hidden");
                product_id_up = $(this).val();
                $.post("view.php", {product_name_id_for_up: 'upData', product_name_id_up: product_id_up}, function(up) {
                    $.each(up, function(index, data) {
                        $('#hide_pro_id').val(data.pro_name_id);
                        $('#pro_name_data').val(data.pro_name);
                    });
                }, "json");
            });
        }
    }, "json");
}

function get_all_qun_for_display() {
    data = $('#pro_name').val();
    if (data == 1) {
        $('#item_states_bar').slideUp();
        $('#display_pack').val('');
        $('#display_pack_qun').val('');
    } else {
        $.post("view.php", {pro_qun_display: 'upData', pro_name_idd: data}, function(up) {
            if (up === undefined || up.length === 0 || up === null) {
                $('#item_states_bar').slideUp();
            } else {
                $('#item_states_bar').slideDown();
                $.each(up, function(index, data) {
                    $('#display_pack').val(data.pro_no_of_pack);
                    $('#display_pack_qun').val(data.pro_qun_of_pcack);
                });
            }
        }, "json");
    }
}

function get_pro_names_for_issue() {
    $.post('view.php', {pro_name_combo: 'data'},
    function(data) {
        $("#item_name").html(data);
        refreshChosen();
    });
}

function clear_issue_felds() {
    $('#item_name').val('');
    $('#issued_qun').val('');
    $('#extra_qun').val('');
}

function save_isssue_data() {
    date = $('#date').val();
    vehi_no = $('#vehi_no').val();
    item_name = $('#item_name').val();
    issued_qun = $('#issued_qun').val();
    $.post("view.php", {savepro_issue_Data: 'save', date_for_issue: date, vehi_no: vehi_no, item_name_for_issue: item_name, issued_qun: issued_qun}, function(serMsg) {
        $.each(serMsg, function(index, valueSaveServices) {
            if (valueSaveServices.msgType === 1) {
                alertify.success(valueSaveServices.msg, 2000);
            } else if (valueSaveServices.msgType === 2) {
                alertify.error(valueSaveServices.msg, 2000);
            }
        });
        load_issud_data_tble();
        clear_issue_felds();
        refreshChosen();
    }, "json");
}

function load_issud_data_tble() {
    var tableData;
    $.post("view.php", {issued_items: 'table'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="6"> No Data Found in database </td></tr>';
            $('.product_issue_table tbody').html('').append(tableData);
        } else {
            $.each(e, function(index, data) {
                tableData += '<tr>';
                tableData += '<td>' + data.iss_date + '</td>';
                tableData += '<td>' + data.vehical_no + '</td>';
                tableData += '<td>' + data.pro_name + '</td>';
                tableData += '<td>' + data.iss_qun + '</td>';
                tableData += '<td><div class="btn-group"><button class="btn btn-primary selproductData" value="' + data.issued_id + '"><i class="fa fa-plus-square fa-lg"></i>&nbsp;Select</button><button class="btn btn-danger delproductData" value="' + data.issued_id + '"><i class="fa fa-trash-o fa-lg"></i>&nbsp;Delete</button></div></td>';
                tableData += '</tr>';
            });
            //Load Json Data to Table
            $('.product_issue_table tbody').html('').append(tableData);

            //Delete Data through Delete button
            $('.delproductData').click(function() {
                product_id = $(this).val();
                confirm("Delete Product Data", "Are you want to Delete This Issued Product ?", "No", "Yes", function() {
                    $.post("view.php", {delete_issued_data: 'delete', issued_id: product_id}, function(delMsg) {
                        load_issud_data_tble();
                        $.each(delMsg, function(index, valueDel) {
                            if (valueDel.msgType === 1) {
                                alertify.success(valueDel.msg, 2000);
                            } else if (valueDel.msgType === 2) {
                                alertify.error(valueDel.msg, 2000);
                            }
                        });
                    }, "json");
                });
            });

            //Select Data through select button   
            $('.selproductData').click(function() {
                $('#update').show();
                $('#save').hide();
//                $('#upDelBtns').removeClass("hidden");
                product_id_up = $(this).val();
                $.post("view.php", {pro_issue_data_for_up: 'upData', product_name_id_for_upp: product_id_up}, function(up) {
                    load_issud_data_tble();
                    $.each(up, function(index, data) {
                        $('#hide_pro_id').val(data.issued_id);
                        $('#date').val(data.iss_date);
                        $('#vehi_no').val(data.vehi_no);
                        $('#item_name').val(data.pro_name_id);
                        $('#issued_qun').val(data.iss_qun);
                        refreshChosen();
                    });
                }, "json");
            });
        }
    }, "json");
}

function check_avalable_pack(data) {
    if (data === undefined || data.length === 0 || data === null) {
        $('#btn_section').show();
        $('#msg').hide();
        $('#msg').html('');
    } else {
        item_id = $('#item_name').val();
        $.post("view.php", {check_pro_pack: 'upData', check_data: data, item_id_for_check: item_id}, function(up) {
            if (up.msgType == 1) {
                $('#btn_section').hide();
                $('#msg').show();
                $('#msg').html(up.msg);
            } else {
                $('#btn_section').show();
                $('#msg').hide();
                $('#msg').html('');
            }
        }, "json");
    }
}

function get_itemdata(data) {
    if (data == 1) {
    } else {
        $.post("view.php", {get_item_data_for_set: 'data', itm_id: data}, function(up) {
            $.each(up, function(index, data) {
                $('#all_qun').val(data.qun_of_a_pack);
                $('#com_price').val(data.pro_com_price);
                $('#sel_price').val(data.pro_sales_price);
            });
        }, "json");
    }
}

function clear_sales_felds() {
    $('#peaces_qun').val('');
    $('#free_peaces').val('');
    document.getElementById("Peaces_btn").checked = false;
    document.getElementById("free_peaces_btn").checked = false;
}

function save_data_and_set() {
    vehicle = $('#vehi_no').val();
    date = $('#date').val();
    invo_no = $('#invo_no').val();
    pro_name_id = $('#pro_name').val();
    peaces_qun = $('#peaces_qun').val();
    free_peaces = $('#free_peaces').val();
    gross = $('#gross').val();
    return_val = $('#return').val();
    discount = $('#discount').val();
    current_net = $('#net').val();
    free_val = $('#free_val').val();
    $.post("view.php", {save_bill_data: 'save', sfree_peaces: free_peaces, svehicle: vehicle, sinvo_no: invo_no, sdate: date, sitem_name_id: pro_name_id, speaces_qun: peaces_qun}, function(sales) {
        if (sales.msgType === 1) {
            alertify.success(sales.msg, 2000);
        } else {
            alertify.error(sales.msg, 2000);
        }
        get_sales_tabl_data();
    }, "json");

    $.post("view.php", {get_data_to_pack_price: 'data', free_val: free_val, current_net: current_net, return_val: return_val, discount: discount, item_name_id_for_search: pro_name_id, gross: gross, peaces_qun: peaces_qun, free_peaces: free_peaces}, function(data) {
        $('#gross').val(data.last_grros);
        $('#net').val(data.net_val);
        $('#free_val').val(data.free_val);
        refreshChosen();
        clear_sales_felds();
    }, "json");
}

function get_vehical_name() {
    $.post('view.php', {veho_name: 'data'},
    function(data) {
        $("#vehi_no").html(data);
        refreshChosen();
    });
}

function clear_all_felds() {
    $('#cash').val('');
    $('#check').val('');
    $('#loan').val('');
    $('#gross').val('');
    $('#return').val('');
    $('#discount').val('');
    $('#net').val('');
    $('#invo_no').val('');
    $('#free_val').val('');
    document.getElementById("cash_box").checked = false;
    document.getElementById("check_box").checked = false;
    document.getElementById("loan_box").checked = false;
    refreshChosen();
}

function finish_bill() {
    cash = $('#cash').val();
    check = $('#check').val();
    loan = $('#loan').val();
    gross = $('#gross').val();
    return_val = $('#return').val();
    discount = $('#discount').val();
    net = $('#net').val();
    invo_no = $('#invo_no').val();
    free_val = $('#free_val').val();
    $.post("view.php", {finish_bill: 'save', free_val: free_val, cash: cash, check: check, loan: loan, gross: gross, return_val: return_val, discount: discount, net: net, invo_no: invo_no}, function(sales) {
        if (sales.msgType === 1) {
            alertify.success(sales.msg, 2000);
        } else {
            alertify.error(sales.msg, 2000);
        }
        clear_all_felds();
    }, "json");

}

function get_invoice_no() {
    $.post('view.php', {invo_no_get: 'data'},
    function(data) {
        $("#invo_no").html(data);
        refreshChosen();
        get_credit_val($('#invo_no').val());
    });
}

function get_credit_val() {
    data = $('#invo_no').val();
    $.post('view.php', {get_pendin_credits: 'data', invo_id: data},
    function(data) {
        $("#pending_pay").val(data);

    });
}

function clear_loan_felds() {
    $('#resive_pay').val('');
}

function add_payment() {
    resived_pay = $('#resive_pay').val();
    inov_id = $('#invo_no').val();
    $.post('view.php', {add_payment: 'data', resived_pay: resived_pay, inovic_id: inov_id}, function(credit) {
        if (credit.msgType === 1) {
            alertify.success(credit.msg, 2000);
        } else {
            alertify.error(credit.msg, 2000);
        }
        get_credit_val()
    }, "json");
}

function get_daly_collection_data(data) {
    var tableData;
    $.post('view.php', {daly_collection: 'data', date_for_genarate: data}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="9"> No Data Found in database </td></tr>';
            $('#daly_collection tbody').html('').append(tableData);
        } else {
            a = 1;
            $.each(e, function(index, data) {
                tableData += '<tr>';
                tableData += '<td>' + a + '</td>';
                tableData += '<td>' + data.invoice_no + '</td>';
                tableData += '<td>' + data.free_val + '</td>';
                tableData += '<td>' + data.gross + '</td>';
                tableData += '<td>' + data.discount + '</td>';
                tableData += '<td>' + data.return + '</td>';
                tableData += '<td>' + data.net_value + '</td>';
                tableData += '<td>' + data.cash_payment + '</td>';
                tableData += '<td>' + data.cheque_payment + '</td>';
                tableData += '<td>' + data.loane_payement + '</td>';
                tableData += '</tr>';
                a++;
            });
            //Load Json Data to Table
            $('#daly_collection tbody').html('').append(tableData);
        }
    }, "json");
}

function get_daly_summery_tot(data) {
    var tableData;
    $.post('view.php', {daly_collection_tot: 'data', date_for_sum: data}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="9"> No Data Found in database </td></tr>';
            $('#daly_collection_tot tbody').html('').append(tableData);
        } else {
            $.each(e, function(index, data) {
                tableData += '<tr>';
                tableData += '<td width="10%;" colspan="2" class="td_font" >All Totals</td>';
                tableData += '<td width="8.5%;" class="td_font">' + data.free_val + '</td>';
                tableData += '<td width="8.5%;" class="td_font">' + data.sum_of_gross + '</td>';
                tableData += '<td width="8.5%;" class="td_font">' + data.sum_of_discount + '</td>';
                tableData += '<td width="8.5%;" class="td_font">' + data.sum_of_returns + '</td>';
                tableData += '<td width="8.5%;" class="td_font">' + data.sum_of_net + '</td>';
                tableData += '<td width="8.5%;" class="td_font">' + data.cash + '</td>';
                tableData += '<td width="8.5%;" class="td_font">' + data.cheque + '</td>';
                tableData += '<td width="8.5%;" class="td_font">' + data.credit + '</td>';
                tableData += '</tr>';
            });
            //Load Json Data to Table
            $('#daly_collection_tot tbody').html('').append(tableData);
        }
    }, "json");
}

function get_monthly_collection_data(data) {
    var tableData;
    $.post('view.php', {monthly_collection: 'data', date_for_genarate: data}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="9"> No Data Found in database </td></tr>';
            $('#daly_collection tbody').html('').append(tableData);
        } else {
            a = 1;
            $.each(e, function(index, data) {
                tableData += '<tr>';
                tableData += '<td>' + a + '</td>';
                tableData += '<td>' + data.invoice_no + '</td>';
                tableData += '<td>' + data.free_val + '</td>';
                tableData += '<td>' + data.gross + '</td>';
                tableData += '<td>' + data.discount + '</td>';
                tableData += '<td>' + data.return + '</td>';
                tableData += '<td>' + data.net_value + '</td>';
                tableData += '<td>' + data.cash_payment + '</td>';
                tableData += '<td>' + data.cheque_payment + '</td>';
                tableData += '<td>' + data.loane_payement + '</td>';
                tableData += '</tr>';
                a++;
            });
            //Load Json Data to Table
            $('#daly_collection tbody').html('').append(tableData);
        }
    }, "json");
}

function get_monthly_summery_tot(data) {
    var tableData;
    $.post('view.php', {monthly_collection_tot: 'data', date_for_sum: data}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="9"> No Data Found in database </td></tr>';
            $('#daly_collection_tot tbody').html('').append(tableData);
        } else {
            $.each(e, function(index, data) {
                tableData += '<tr>';
                tableData += '<td width="10%;" colspan="2" class="td_font" >All Totals</td>';
                tableData += '<td width="8.5%;" class="td_font">' + data.free_val + '</td>';
                tableData += '<td width="8.5%;" class="td_font">' + data.sum_of_gross + '</td>';
                tableData += '<td width="8.5%;" class="td_font">' + data.sum_of_discount + '</td>';
                tableData += '<td width="8.5%;" class="td_font">' + data.sum_of_returns + '</td>';
                tableData += '<td width="8.5%;" class="td_font">' + data.sum_of_net + '</td>';
                tableData += '<td width="8.5%;" class="td_font">' + data.cash + '</td>';
                tableData += '<td width="8.5%;" class="td_font">' + data.cheque + '</td>';
                tableData += '<td width="8.5%;" class="td_font">' + data.credit + '</td>';
                tableData += '</tr>';
            });
            //Load Json Data to Table
            $('#daly_collection_tot tbody').html('').append(tableData);
        }
    }, "json");
}

function load_admin_table() {
    var tableData;
    $.post("view.php", {load_admin_table: 'table'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="4"> No Data Found in database </td></tr>';
            $('#admin_table tbody').html('').append(tableData);
        } else {
            $.each(e, function(index, data) {
                tableData += '<tr>';
                tableData += '<td>' + data.user_name + '</td>';
                tableData += '<td>' + data.date + '</td>';
                if (data.user_level === '1') {
                    tableData += '<td>Admin</td>';
                } else {
                    tableData += '<td>User</td>';
                }
                tableData += '<td><button class="btn btn-danger delete_admin_data" value="' + data.id + '"><i class="fa fa-trash-o fa-lg"></i>&nbsp;Delete</button></div></td>';
                tableData += '</tr>';
            });
            //Load Json Data to Table
            $('#admin_table tbody').html('').append(tableData);

            //Delete Data through Delete button
            $('.delete_admin_data').click(function() {
                admin_del_id = $(this).val();
                confirm("Delete Service Data", "Are you sure want to delete This User", "No", "Yes", function() {
                    $.post("view.php", {delete_admin_id: 'delete', admin_del_id: admin_del_id}, function(delMsg) {
                        load_admin_table();
                        $.each(delMsg, function(index, valueDel) {
                            if (valueDel.msgType === 1) {
                                alertify.success(valueDel.msg, 3000);
                            } else if (valueDel.msgType === 2) {
                                alertify.error(valueDel.msg, 3000);
                            }
                        });
                    }, "json");
                });
            });
        }
    }, "json");
}

function save_admin_data() {
    user_name = $('#user_name').val();
    pwd = $('#pwd').val();
    user_level = $('#user_level').val();
    $.post('view.php', {save_admin_data: 'data', user_name: user_name, pwd: pwd, user_level: user_level},
    function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);
        } else {
            alertify.error(data.msg, 2000);
        }
        load_admin_table();
    }, "json");
}

function vehical_data_save() {
    var vehi_no = $('#vehi_no').val();
    var vehi_note = $('#vehi_note').val();
    $.post('view.php', {save_vehical: 'data', vehi_no: vehi_no, vehi_note: vehi_note}, function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);
        } else {
            alertify.error(data.msg, 2000);
        }
        vehical_data_table();
        ve_clear();
    }, "json");
}

function ve_clear() {
    $('#vehi_no').val('');
    $('#vehi_note').val('');


}

function vehical_data_table() {
    var tableData;
    $.post("view.php", {loading_vehical: 'table'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="4"> No Data Found in database </td></tr>';
            $('#admin_table tbody').html('').append(tableData);
        } else {
            $.each(e, function(index, data) {
                tableData += '<tr>';
                tableData += '<td>' + data.vehical_no + '</td>';
                tableData += '<td>' + data.note + '</td>';
                tableData += '<td>' + data.note + '</td>';
                tableData += '<td>' + data.note + '</td>';
                tableData += '<td><button class="btn btn-danger delete_admin_data" value="' + data.id + '"><i class="fa fa-trash-o fa-lg"></i>&nbsp;Delete</button><button class="btn btn-primary selproductData" value="' + data.id + '"><i class="fa fa-plus-square fa-lg"></i>&nbsp;Select</button></td>';
                tableData += '</tr>';
            });
            //Load Json Data to Table
            $('#vehi_data_table tbody').html('').append(tableData);

            //Delete Data through Delete button
            $('.delete_admin_data').click(function() {
                vehical_id_for_delete = $(this).val();
                confirm("Delete Service Data", "Are you sure want to delete This Vehicle", "No", "Yes", function() {
                    $.post("view.php", {delete_vehical: 'delete', vehical_id_for_delete: vehical_id_for_delete}, function(delMsg) {
                        $.each(delMsg, function(index, valueDel) {
                            if (valueDel.msgType === 1) {
                                alertify.success(valueDel.msg, 3000);
                            } else if (valueDel.msgType === 2) {
                                alertify.error(valueDel.msg, 3000);
                            }
                        });
                        vehical_data_table();
                    }, "json");
                });
            });
            $('.selproductData').click(function() {
                $('#update_btn').slideDown();
                $('#save_btn').slideUp();
                product_id_up = $(this).val();
                $.post("view.php", {get_vehical_data_to_up: 'upData', vehinu_for_up: product_id_up}, function(up) {
                    $.each(up, function(index, data) {
                        $('#vehi_no').val(data.vehical_no);
                        $('#vehi_note').val(data.note);
                        $('#hidden_val').val(data.id);
                    });
                }, "json");
            });
        }
    }, "json");
}

function update_vehi_data() {
    vehi_no = $('#vehi_no').val();
    vehi_note = $('#vehi_note').val();
    hide_id = $('#hidden_val').val();
    $.post('view.php', {update_vehical: 'data', vehi_no_up: vehi_no, vehi_note_up: vehi_note, hide_id_up: hide_id},
    function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);
        } else {
            alertify.error(data.msg, 2000);
        }
        vehical_data_table();
    }, "json");
}

function get_item_name() {
    $.post('view.php', {i_name_for_display: 'data'},
    function(data) {
        $("#i_name").html(data);
        refreshChosen();
        get_current_re_level($("#i_name").val())
    });
}

function get_current_re_level(data) {

    $.post('view.php', {get_re_level: 'data', pro_id_for_re_order: data},
    function(data) {
        console.log(data);
        $("#r_level").val(data);
    });
}

function get_re_order_tbl() {
    var tableData;
    $.post('view.php', {get_re_order_data: 'data'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="9"> No Data Found in database </td></tr>';
            $('#re_order_tbl tbody').html('').append(tableData);
        } else {
            a = 1;
            $.each(e, function(index, data) {
                tableData += '<tr>';
                tableData += '<td>' + data.pro_name + '</td>';
                tableData += '<td>' + data.product_re_order_level + '</td>';
                tableData += '</tr>';
                a++;
            });
            //Load Json Data to Table
            $('#re_order_tbl tbody').html('').append(tableData);
        }
    }, "json");
}

function new_re_level() {
    i_name = $('#i_name').val();
    r_level = $('#r_level').val();
    $.post('view.php', {add_new_re_level: 'data', i_name: i_name, r_level: r_level},
    function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);
        } else {
            alertify.error(data.msg, 2000);
        }
        get_re_order_tbl();
    }, "json");
}

function update_issue_data() {

    hide_pro_id = $('#hide_pro_id').val();
    date = $('#date').val();
    vehi_no = $('#vehi_no').val();
    item_name = $('#item_name').val();
    issued_qun = $('#issued_qun').val();
    $.post('view.php', {update_issue_data: 'data', upphide_pro_id: hide_pro_id, uppdate: date, uppvehi_no: vehi_no, uppitem_name: item_name, uppissued_qun: issued_qun},
    function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);
        } else {
            alertify.error(data.msg, 2000);
        }
        load_issud_data_tble();
    }, "json");
}

function get_stock_summery() {
    var tableData;
    $.post('view.php', {get_stock_summery: 'data'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="5"> No Data Found in database </td></tr>';
            $('#stock_summery_tbl tbody').html('').append(tableData);
        } else {
            a = 1;
            $.each(e, function(index, data) {
                var sum = parseFloat(data.all_qun) + parseFloat(data.iss_qun);
                tableData += '<tr>';
                tableData += '<td>' + a + '</td>';
                tableData += '<td>' + data.pro_name + '</td>';
                tableData += '<td>' + data.all_qun + '</td>';
                tableData += '<td>' + data.iss_qun + '</td>';
                tableData += '<td>' + sum + '</td>';
                tableData += '</tr>';
                a++;
            });
            //Load Json Data to Table
            $('#stock_summery_tbl tbody').html('').append(tableData);
        }
    }, "json");
}

function get_daly_profit(data) {
    var tableData;
    $.post('view.php', {genarate_daly_profit: 'data', date_profit: data},
    function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="6"> No Data Found in database </td></tr>';
            $('#profit_tble tbody').html('').append(tableData);
        } else {
            a = 1;
            total_profit = 0;
            profit = 0;
            $.each(e, function(index, data) {
                var sell_price = parseFloat(data.pro_peaces_qun) * parseFloat(data.pro_sales_price);
                var cost_price = parseFloat(data.pro_peaces_qun) * parseFloat(data.pro_com_price);
                var profit = sell_price - cost_price;
                tableData += '<tr>';
                tableData += '<td>' + a + '</td>';
                tableData += '<td>' + data.pro_name + '</td>';
                tableData += '<td>' + data.pro_peaces_qun + '</td>';
                tableData += '<td>' + sell_price.toFixed(2) + '</td>';
                tableData += '<td>' + cost_price.toFixed(2) + '</td>';
                tableData += '<td id = "tot' + a + '">' + profit.toFixed(2) + '</td>';
                tableData += '</tr>';
                a++;
                total_profit += profit;
                console.log(total_profit.toFixed(2));
            });
            $('#disp_tot').val(total_profit.toFixed(2));
            //Load Json Data to Table
            $('#profit_tble tbody').html('').append(tableData);
        }
        get_lat_profit($('#disp_tot').val());
    }, "json");
}

function get_lat_profit(data) {
    current_profit = data;
    date_for_profit = $('#date').val()
    $.post('view.php', {get_daly_discount: 'data', date_for_profit: date_for_profit},
    function(data) {
        $.each(data, function(index, data) {
            $('#discount').val(parseFloat(data.dis_tot).toFixed(2))
            final_data = current_profit - parseFloat(data.dis_tot);
            $('#profit').val(final_data);
        });
    }, "json");
}

function get_daly_sold_item_count() {
    var tableData;
    date_for_count = $('#date').val()
    $.post('view.php', {get_sold_item_cont: 'data', date_for_count: date_for_count}, function(data) {
        if (data === undefined || data.length === 0 || data === null) {
            tableData = '<tr class="error"><td colspan="5"> No Data Found in database </td></tr>';
            $('#daly_sold_tbl tbody').html('').append(tableData);
        } else {
            a = 1;
            $.each(data, function(index, data) {
                var sum = parseFloat(data.all_qun) + parseFloat(data.iss_qun);
                tableData += '<tr>';
                tableData += '<td>' + a + '</td>';
                tableData += '<td>' + data.pro_name + '</td>';
                tableData += '<td>' + data.all_count + '</td>';
                tableData += '</tr>';
                a++;
            });
            //Load Json Data to Table
            $('#daly_sold_tbl tbody').html('').append(tableData);
        }
    }, "json");
}

function dispaly_masg_box() {
    confirm_reset_bill("Delete Service Data", "Are you sure want to delete This Vehicle", "Bill Item", "Bill Summery", function() {
        $.post("view.php", {delete_vehical: 'delete', vehical_id_for_delete: vehical_id_for_delete}, function(delMsg) {
            $.each(delMsg, function(index, valueDel) {
                if (valueDel.msgType === 1) {
                    alertify.success(valueDel.msg, 3000);
                } else if (valueDel.msgType === 2) {
                    alertify.error(valueDel.msg, 3000);
                }
            });
        }, "json");
    });
}

function get_item_name_for_sales(data) {
    $.post('view.php', {item_name_get: 'data', item_idd_for_name: data},
    function(data) {
        $("#pro_name_disp").html(data);
    });
}

function get_sales_tabl_data() {
    var tableData;
    var a = 1;
    invo_for_tbl = $('#invo_for_tbl').val();
    $.post('view.php', {sales_tbl: 'data', invo_for_tbl: invo_for_tbl}, function(data) {
        if (data === undefined || data.length === 0 || data === null) {
            tableData = '<tr class="error"><td colspan="5"> No Data Found in database </td></tr>';
            $('.sales_data_tbl tbody').html('').append(tableData);
        } else {
            $.each(data, function(index, data) {
                var sum = (parseFloat(data.pro_peaces_qun) + parseFloat(data.pro_free_peaces)) * data.pro_sales_price;
                tableData += '<tr>';
                tableData += '<td>' + a + '</td>';
                tableData += '<td>' + data.pro_name + '</td>';
                tableData += '<td>' + data.pro_peaces_qun + '</td>';
                tableData += '<td>' + data.pro_free_peaces + '</td>';
                tableData += '<td>' + data.pro_sales_price + '</td>';
                tableData += '<td>' + sum.toFixed(2) + '</td>';
                tableData += '<td><button class="btn btn-primary sel_sales_Data" value="' + data.pro_sales_id + '"><i class="fa fa-plus-square fa-lg"></i>&nbsp;Change</button><button class="btn btn-danger delete_salese_data" value="' + data.pro_sales_id + '"><i class="fa fa-trash-o fa-lg"></i>&nbsp;Delete</button></td>';
                tableData += '</tr>';
                a++;
            });
            //Load Json Data to Table
            $('.sales_data_tbl tbody').html('').append(tableData);
        }
        $('.delete_salese_data').click(function() {
            sales_id = $(this).val();
            confirm("Delete Sales Data", "Are you sure want to delete This Sales Data", "No", "Yes", function() {
                $.post("view.php", {delete_vehical: 'delete', vehical_id_for_delete: vehical_id_for_delete}, function(delMsg) {
                    $.each(delMsg, function(index, valueDel) {
                        if (valueDel.msgType === 1) {
                            alertify.success(valueDel.msg, 3000);
                        } else if (valueDel.msgType === 2) {
                            alertify.error(valueDel.msg, 3000);
                        }
                    });
                }, "json");
            });
        });
    }, "json");
}
/////---------------------------medical delegate management system for GS---------------------------------////
//////////////////////doctor form///////////////////////////////

function get_max_RegId() {
    $.post('view.php', {max_regId: 'data'},
    function(data) {


        //$("#idNo").val($("#phmArea").val()+"/"+data);
        $("#idNo").val($("#idNo").val() + " / " + data);

    });
}



function get_area_code() {
    $.post('view.php', {get_area: 'data', phmArea: $("#phmArea").val()},
    function(data) {

        $("#idNo").val('');
        //$("#idNo").val($("#phmArea").val()+"/"+data);
        $("#idNo").val(data);

    });
}


//load Eligible Family Record table eligibleReg
function eligibleReg_data_table() {
    var tableData;
    $.post("view.php", {loading_eligibleReg: 'table'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="4"> No Data Found in database </td></tr>';
            $('#doctor_data_table tbody').html('').append(tableData);
        } else {
            $.each(e, function(index, data) {
                tableData += '<tr>';
                tableData += '<td>' + data.idNo + '</td>';
                tableData += '<td>' + data.mName + '</td>';
                tableData += '<td>' + data.phone + '</td>';
                tableData += '<td>' + data.phmArea + '</td>';
                tableData += '<td>' + data.mDob + '</td>';
                tableData += '<td><button class="btn btn-sm btn-alt m-r-5 delete_admin_data" value="' + data.regId + '"><i class="fa fa-trash-o fa-lg"></i>&nbsp;Delete</button><button class="btn btn-sm btn-alt m-r-5 selproductData" value="' + data.regId + '"><i class="fa fa-plus-square fa-lg"></i>&nbsp;Select</button></td>';
                tableData += '</tr>';
            });
            //Load Json Data to Table
            $('#doctor_data_table tbody').html('').append(tableData);

            //Delete Data through Delete button
            $('.delete_admin_data').click(function() {
                doctor_id_for_delete = $(this).val();
                confirm("Deletion of eligibleReg Data", "Are you sure want to delete This Eligible Register Record", "No", "Yes", function() {
                    $.post("view.php", {delete_eligibleReg: 'delete', doctor_id_for_delete: doctor_id_for_delete}, function(delMsg) {
                        $.each(delMsg, function(index, valueDel) {
                            if (valueDel.msgType === 1) {
                                alertify.success(valueDel.msg, 3000);
                            } else if (valueDel.msgType === 2) {
                                alertify.error(valueDel.msg, 3000);
                            }
                        });
                        eligibleReg_data_table();
                    }, "json");
                });
            });
            $('.selproductData').click(function() {

                $('#update_btn').slideDown();
                $('#save_btn').slideUp();
                $docID = $(this).val();

                console.log($docID);
                $.post("view.php", {get_eligibleReg_data_to_up: 'upData', docID: $docID}, function(up) {
                    $.each(up, function(index, data) {


                        $('#hidden_val').val(data.regId);
                        // alert("hide_id set "+data.regId);
                        $('#phmArea').val(data.phmArea);
                        $('#idNo').val(data.idNo);
                        $('#date').val(data.date);
                        $('#email').val(data.email);
                        $('#phone').val(data.phone);
                        $('#mName').val(data.mName);
                        $('#mDob').val(data.mDob);
                        $('#mAge').val(data.mAge);
                        $('#mEdu').val(data.mEdu);
                        $('#fName').val(data.fName);
                        $('#fDob').val(data.fDob);
                        $('#fAge').val(data.fAge);
                        $('#fEdu').val(data.fEdu);
                        $('#childCount').val(data.childCount);
                        $('#childAges').val(data.childAges);
                        $('#dParity').val(data.dParity);
                        $('#dDate').val(data.dDate);
                        $('#dResult').val(data.dResult);
                        $('#sRubella').val(data.sRubella);
                        $('#pap').val(data.pap);




                        $('#spec').trigger("chosen:updated");

                    });
                }, "json");
            });
        }
    }, "json");
}
//doctor data save funtion

function eligibleReg_data_save() {


    var phmArea = $('#phmArea').val();
    var idNo = $('#idNo').val();
    var date = $('#date').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var mName = $('#mName').val();
    var mDob = $('#mDob').val();
    var mAge = $('#mAge').val();
    var mEdu = $('#mEdu').val();
    var fName = $('#fName').val();
    var fDob = $('#fDob').val();
    var fAge = $('#fAge').val();
    var fEdu = $('#fEdu').val();
    var childCount = $('#childCount').val();
    var childAges = $('#childAges').val();
    var dParity = $('#dParity').val();
    var dDate = $('#dDate').val();
    var dResult = $('#dResult').val();
    var sRubella = $('#sRubella').val();
    var pap = $('#pap').val();



    /*  
     var docName = $('#docName').val();
     var spec = $('#spec').val();
     var dob = $('#dob').val();
     var teritoryID = $('#teritoryID1').val();
     var telephone = $('#telephone').val();  */

    $.post('view.php', {save_eligibleReg: 'data', phmArea: phmArea, idNo: idNo, date: date, email: email, phone: phone, mName: mName, mDob: mDob, mAge: mAge, mEdu: mEdu, fName: fName, fDob: fDob, fAge: fAge, fEdu: fEdu, childCount: childCount, childAges: childAges, dParity: dParity, dDate: dDate, dResult: dResult, sRubella: sRubella, pap: pap}, function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);
        } else {
            alertify.error(data.msg, 2000);
        }
        eligibleReg_data_table();
        clear_eligibleReg();
    }, "json");
}

//doctor table update
function update_eligibleReg_data() {

    /*  var docName = $('#docName').val();
     var spec = $('#spec').val();
     var dob = $('#dob').val();
     var teritoryID = $('#teritoryID1').val();
     var telephone = $('#telephone').val();
     var hide_id = $('#hidden_val').val();  */

    var phmArea = $('#phmArea').val();
    var idNo = $('#idNo').val();
    var date = $('#date').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var mName = $('#mName').val();
    var mDob = $('#mDob').val();
    var mAge = $('#mAge').val();
    var mEdu = $('#mEdu').val();
    var fName = $('#fName').val();
    var fDob = $('#fDob').val();
    var fAge = $('#fAge').val();
    var fEdu = $('#fEdu').val();
    var childCount = $('#childCount').val();
    var childAges = $('#childAges').val();
    var dParity = $('#dParity').val();
    var dDate = $('#dDate').val();
    var dResult = $('#dResult').val();
    var sRubella = $('#sRubella').val();
    var pap = $('#pap').val();
    var hide_id = $('#hidden_val').val();

    //  alert("hide_id get"+hide_id);

    $.post('view.php', {update_eligibleReg: 'data', phmArea: phmArea, idNo: idNo, date: date, email: email, phone: phone, mName: mName, mDob: mDob, mAge: mAge, mEdu: mEdu, fName: fName, fDob: fDob, fAge: fAge, fEdu: fEdu, childCount: childCount, childAges: childAges, dParity: dParity, dDate: dDate, dResult: dResult, sRubella: sRubella, pap: pap, hide_id_up: hide_id},
    function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);

        } else {
            alertify.error(data.msg, 2000);
        }
        eligibleReg_data_table();
        clear_eligibleReg();
    }, "json");
}




function clear_eligibleReg() {

    /* $('#update_btn').slideUp();
     $('#save_btn').slideDown();
     
     $('#docName').val('');
     $('#spec').val('0');
     $('#dob').val('');
     $('#telephone').val('');
     $('#teritoryID').val('0');*/



    $('#phmArea').val('0');
    $('#idNo').val('');
    $('#date').val('');
    $('#email').val('');
    $('#phone').val('');
    $('#mName').val('');
    $('#mDob').val('');
    $('#mAge').val('');
    $('#mEdu').val('');
    $('#fName').val('');
    $('#fDob').val('');
    $('#fAge').val('');
    $('#fEdu').val('');
    $('#childCount').val('');
    $('#childAges').val('');
    $('#dParity').val('');
    $('#dDate').val('');
    $('#dResult').val('');
    $('#sRubella').val('');
    $('#pap').val('');
    refreshChosen();


}
///////////////////////////////////////end of doctor form/////////////////////////



//////////// pmRec ////////////////////////





function pmRecord_data_table() {
    var tableData;
    $.post("view.php", {loading_pmRecord: 'table'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="4"> No Data Found in database </td></tr>';
            $('#doctor_data_table tbody').html('').append(tableData);
        } else {
            $.each(e, function(index, data) {
                tableData += '<tr>';
                tableData += '<td>' + data.regNo + '</td>';
                tableData += '<td>' + data.regDate + '</td>';
                tableData += '<td>' + data.bloodCheck + '</td>';
                tableData += '<td>' + data.riskFact + '</td>';
                tableData += '<td>' + data.deliveryDate + '</td>';
                tableData += '<td><button class="btn btn-sm btn-alt m-r-5 delete_admin_data" value="' + data.recId + '"><i class="fa fa-trash-o fa-lg"></i>&nbsp;Delete</button><button class="btn btn-sm btn-alt m-r-5 selproductData2" value="' + data.recId + '"><i class="fa fa-plus-square fa-lg"></i>&nbsp;Select</button></td>';
                tableData += '</tr>';
            });
            //Load Json Data to Table
            $('#doctor_data_table tbody').html('').append(tableData);

            //Delete Data through Delete button
            $('.delete_admin_data').click(function() {
                pmRecord_id_for_delete = $(this).val();
                confirm("Deletion of pmRecord Data", "Are you sure want to delete This Eligible Register Record", "No", "Yes", function() {
                    $.post("view.php", {delete_pmRecord: 'delete', pmRecord_id_for_delete: pmRecord_id_for_delete}, function(delMsg) {
                        $.each(delMsg, function(index, valueDel) {
                            if (valueDel.msgType === 1) {
                                alertify.success(valueDel.msg, 3000);
                            } else if (valueDel.msgType === 2) {
                                alertify.error(valueDel.msg, 3000);
                            }
                        });
                        pmRecord_data_table();
                    }, "json");
                });
            });
            $('.selproductData2').click(function() {

                $('#update_btn').slideDown();
                $('#save_btn').slideUp();
                $docID = $(this).val();

                console.log($docID);

                $.post("view.php", {get_pmRecord_data_to_up: 'upData', docID: $docID}, function(up) {
                    $.each(up, function(index, data) {

                        $('#hidden_val').val(data.recId);
                        // alert("hide_id set "+data.regId);


                        $('#regNo').val(data.regNo);
                        $('#regDate').val(data.regDate);
                        $('#deliveryDate').val(data.deliveryDate);
                        $('#sTetanus').val(data.sTetanus);
                        $('#riskFact').val(data.riskFact);
                        $('#bloodCheck').val(data.bloodCheck);
                        $('#vdrlTest').val(data.vdrlTest);
                        $('#initialWeight').val(data.initialWeight);
                        $('#iniDaysWomb').val(data.iniDaysWomb);
                        $('#finalWeight').val(data.finalWeight);
                        $('#finDaysWomb').val(data.finDaysWomb);
                        $('#ancVisits').val(data.ancVisits);
                        $('#babyWeight').val(data.babyWeight);
                        $('#deliveryMode').val(data.deliveryMode);
                        $('#deliverdDate').val(data.deliverdDate);
                        $('#deliverdPlace').val(data.deliverdPlace);
                        $('#deliverdOutcome').val(data.deliverdOutcome);
                        $('#postPartumOne').val(data.postPartumOne);
                        $('#postPartumTwo').val(data.postPartumTwo);
                        $('#postPartumThree').val(data.postPartumThree);




                        $('#spec').trigger("chosen:updated");

                    });
                }, "json");
            });
        }
    }, "json");
}
//pmRec save funtion

function pmRecord_data_save() {


    var regNo = $('#regNo').val();
    var regDate = $('#regDate').val();
    var deliveryDate = $('#deliveryDate').val();
    var sTetanus = $('#sTetanus').val();
    var riskFact = $('#riskFact').val();
    var bloodCheck = $('#bloodCheck').val();
    var vdrlTest = $('#vdrlTest').val();
    var initialWeight = $('#initialWeight').val();
    var iniDaysWomb = $('#iniDaysWomb').val();
    var finalWeight = $('#finalWeight').val();
    var finDaysWomb = $('#finDaysWomb').val();
    var ancVisits = $('#ancVisits').val();
    var babyWeight = $('#babyWeight').val();
    var deliveryMode = $('#deliveryMode').val();
    var deliverdDate = $('#deliverdDate').val();
    var deliverdPlace = $('#deliverdPlace').val();
    var deliverdOutcome = $('#deliverdOutcome').val();
    var postPartumOne = $('#postPartumOne').val();
    var postPartumTwo = $('#postPartumTwo').val();
    var postPartumThree = $('#postPartumThree').val();





    $.post('view.php', {save_pmRecord: 'data', regNo: regNo, regDate: regDate, deliveryDate: deliveryDate, sTetanus: sTetanus, riskFact: riskFact, bloodCheck: bloodCheck, vdrlTest: vdrlTest, initialWeight: initialWeight, iniDaysWomb: iniDaysWomb, finalWeight: finalWeight, finDaysWomb: finDaysWomb, ancVisits: ancVisits, babyWeight: babyWeight, deliveryMode: deliveryMode, deliverdDate: deliverdDate, deliverdPlace: deliverdPlace, deliverdOutcome: deliverdOutcome, postPartumOne: postPartumOne, postPartumTwo: postPartumTwo, postPartumThree: postPartumThree}, function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);
        } else {
            alertify.error(data.msg, 2000);
        }
        pmRecord_data_table();
        clear_pmRecord();
    }, "json");
}

//doctor table update
function update_pmRecord_data() {



    var regNo = $('#regNo').val();
    var regDate = $('#regDate').val();
    var deliveryDate = $('#deliveryDate').val();
    var sTetanus = $('#sTetanus').val();
    var riskFact = $('#riskFact').val();
    var bloodCheck = $('#bloodCheck').val();
    var vdrlTest = $('#vdrlTest').val();
    var initialWeight = $('#initialWeight').val();
    var iniDaysWomb = $('#iniDaysWomb').val();
    var finalWeight = $('#finalWeight').val();
    var finDaysWomb = $('#finDaysWomb').val();
    var ancVisits = $('#ancVisits').val();
    var babyWeight = $('#babyWeight').val();
    var deliveryMode = $('#deliveryMode').val();
    var deliverdDate = $('#deliverdDate').val();
    var deliverdPlace = $('#deliverdPlace').val();
    var deliverdOutcome = $('#deliverdOutcome').val();
    var postPartumOne = $('#postPartumOne').val();
    var postPartumTwo = $('#postPartumTwo').val();
    var postPartumThree = $('#postPartumThree').val();

    var hide_id = $('#hidden_val').val();

    //  alert("hide_id get"+hide_id);

    $.post('view.php', {update_pmRecord: 'data', regNo: regNo, regDate: regDate, deliveryDate: deliveryDate, sTetanus: sTetanus, riskFact: riskFact, bloodCheck: bloodCheck, vdrlTest: vdrlTest, initialWeight: initialWeight, iniDaysWomb: iniDaysWomb, finalWeight: finalWeight, finDaysWomb: finDaysWomb, ancVisits: ancVisits, babyWeight: babyWeight, deliveryMode: deliveryMode, deliverdDate: deliverdDate, deliverdPlace: deliverdPlace, deliverdOutcome: deliverdOutcome, postPartumOne: postPartumOne, postPartumTwo: postPartumTwo, postPartumThree: postPartumThree, hide_id_up: hide_id},
    function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);

        } else {
            alertify.error(data.msg, 2000);
        }
        pmRecord_data_table();
        clear_pmRecord();
    }, "json");
}


function clear_pmRecord() {


    $('#regNo').val('');
    $('#regDate').val('');
    $('#deliveryDate').val('');
    $('#sTetanus').val('');
    $('#riskFact').val('');
    $('#bloodCheck').val('');
    $('#vdrlTest').val('');
    $('#initialWeight').val('');
    $('#iniDaysWomb').val('');
    $('#finalWeight').val('');
    $('#finDaysWomb').val('');
    $('#ancVisits').val('');
    $('#babyWeight').val('');
    $('#deliveryMode').val('');
    $('#deliverdDate').val('');
    $('#deliverdPlace').val('');
    $('#deliverdOutcome').val('');
    $('#postPartumOne').val('');
    $('#postPartumTwo').val('');
    $('#postPartumThree').val('');

    refreshChosen();


}







//////////// pmRec End ////////////////

















///////////// obsHistory  ///////////////////



function obsHistory_data_table() {
    var tableData;
    $.post("view.php", {loading_obsHistory: 'table'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="4"> No Data Found in database </td></tr>';
            $('#doctor_data_table tbody').html('').append(tableData);
        } else {
            $.each(e, function(index, data) {
                tableData += '<tr>';
                tableData += '<td>' + data.regId + '</td>';
                tableData += '<td>' + data.parity + '</td>';
                tableData += '<td>' + data.LRMP + '</td>';
                tableData += '<td>' + data.EDD + '</td>';
                tableData += '<td>' + data.quickening + '</td>';
                tableData += '<td><button class="btn btn-sm btn-alt m-r-5 delete_admin_data" value="' + data.recId + '"><i class="fa fa-trash-o fa-lg"></i>&nbsp;Delete</button><button class="btn btn-sm btn-alt m-r-5 selproductData" value="' + data.recId + '"><i class="fa fa-plus-square fa-lg"></i>&nbsp;Select</button></td>';
                tableData += '</tr>';
            });
            //Load Json Data to Table
            $('#doctor_data_table tbody').html('').append(tableData);

            //Delete Data through Delete button
            $('.delete_admin_data').click(function() {
                doctor_id_for_delete = $(this).val();
                confirm("Deletion of obsHistory ", "Are you sure want to delete This obsHistory Record", "No", "Yes", function() {
                    $.post("view.php", {delete_obsHistory: 'delete', doctor_id_for_delete: doctor_id_for_delete}, function(delMsg) {
                        $.each(delMsg, function(index, valueDel) {
                            if (valueDel.msgType === 1) {
                                alertify.success(valueDel.msg, 3000);
                            } else if (valueDel.msgType === 2) {
                                alertify.error(valueDel.msg, 3000);
                            }
                        });
                        obsHistory_data_table();
                    }, "json");
                });
            });
            $('.selproductData').click(function() {

                $('#update_btn').slideDown();
                $('#save_btn').slideUp();
                $docID = $(this).val();

                console.log($docID);
                $.post("view.php", {get_obsHistory_data_to_up: 'upData', docID: $docID}, function(up) {
                    $.each(up, function(index, data) {


                        $('#hidden_val').val(data.recId);
                        // alert("hide_id set "+data.regId);
                        $('#parity').val(data.parity);
                        $('#liveChildCount').val(data.liveChildCount);
                        $('#lastChildAge').val(data.lastChildAge);
                        $('#LRMP').val(data.LRMP);
                        $('#EDD').val(data.EDD);
                        $('#quickening').val(data.quickening);
                        $('#POA').val(data.POA);
                        $('#rubellaVac').val(data.rubellaVac);
                        $('#regId').val(data.regId);




                        $('#spec').trigger("chosen:updated");

                    });
                }, "json");
            });
        }
    }, "json");
}







function obsHistory_data_save() {




    var parity = $('#parity').val();
    var liveChildCount = $('#liveChildCount').val();
    var lastChildAge = $('#lastChildAge').val();
    var LRMP = $('#LRMP').val();
    var EDD = $('#EDD').val();
    var quickening = $('#quickening').val();
    var POA = $('#POA').val();
    var rubellaVac = $('#rubellaVac').val();
    var regId = $('#regId').val();





    $.post('view.php', {save_obsHistory: 'data', parity: parity, liveChildCount: liveChildCount, lastChildAge: lastChildAge, LRMP: LRMP, EDD: EDD, quickening: quickening, POA: POA, rubellaVac: rubellaVac, regId: regId}, function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);
        } else {
            alertify.error(data.msg, 2000);
        }
        obsHistory_data_table();
        clear_obsHistory();
    }, "json");
}



function update_obsHistory_data() {



    var parity = $('#parity').val();
    var liveChildCount = $('#liveChildCount').val();
    var lastChildAge = $('#lastChildAge').val();
    var LRMP = $('#LRMP').val();
    var EDD = $('#EDD').val();
    var quickening = $('#quickening').val();
    var POA = $('#POA').val();
    var rubellaVac = $('#rubellaVac').val();
    var regId = $('#regId').val();

    var hide_id = $('#hidden_val').val();



    $.post('view.php', {update_obsHistory: 'data', parity: parity, liveChildCount: liveChildCount, lastChildAge: lastChildAge, LRMP: LRMP, EDD: EDD, quickening: quickening, POA: POA, rubellaVac: rubellaVac, regId: regId, hide_id_up: hide_id},
    function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);

        } else {
            alertify.error(data.msg, 2000);
        }
        obsHistory_data_table();
        clear_obsHistory();
    }, "json");
}



function clear_obsHistory() {




    $('#parity').val('');
    $('#liveChildCount').val('');
    $('#lastChildAge').val('');
    $('#LRMP').val('');
    $('#EDD').val('');
    $('#quickening').val('');
    $('#POA').val('');
    $('#rubellaVac').val('');
    $('#regId').val('');

    refreshChosen();


}



//////////// obsHistory End ///////////////////////

/////////////past obsHistory  ///////////////////


function pastObsHistory_data_table() {
    var tableData;
    $.post("view.php", {loading_pastObsHistory: 'table'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="4"> No Data Found in database </td></tr>';
            $('#doctor_data_table tbody').html('').append(tableData);
        } else {
            $.each(e, function(index, data) {
                tableData += '<tr>';
                tableData += '<td>' + data.regId + '</td>';
                tableData += '<td>' + data.para + '</td>';
                tableData += '<td>' + data.result + '</td>';
                tableData += '<td>' + data.deliveryDetails + '</td>';
                tableData += '<td>' + data.birthWeight + '</td>';
                tableData += '<td>' + data.complications + '</td>';
                tableData += '<td>' + data.deliveryPlace + '</td>';
                tableData += '<td><button class="btn btn-sm btn-alt m-r-5 delete_admin_data" value="' + data.recId + '"><i class="fa fa-trash-o fa-lg"></i>&nbsp;Delete</button><button class="btn btn-sm btn-alt m-r-5 selproductData" value="' + data.recId + '"><i class="fa fa-plus-square fa-lg"></i>&nbsp;Select</button></td>';
                tableData += '</tr>';
            });
            //Load Json Data to Table
            $('#doctor_data_table tbody').html('').append(tableData);

            //Delete Data through Delete button
            $('.delete_admin_data').click(function() {
                doctor_id_for_delete = $(this).val();
                confirm("Deletion of loading_pastObsHistory ", "Are you sure want to delete This loading_pastObsHistory Record", "No", "Yes", function() {
                    $.post("view.php", {delete_pastObsHistory: 'delete', doctor_id_for_delete: doctor_id_for_delete}, function(delMsg) {
                        $.each(delMsg, function(index, valueDel) {
                            if (valueDel.msgType === 1) {
                                alertify.success(valueDel.msg, 3000);
                            } else if (valueDel.msgType === 2) {
                                alertify.error(valueDel.msg, 3000);
                            }
                        });
                        pastObsHistory_data_table();
                    }, "json");
                });
            });
            $('.selproductData').click(function() {

                $('#update_btn').slideDown();
                $('#save_btn').slideUp();
                $docID = $(this).val();

                console.log($docID);
                $.post("view.php", {get_pastObsHistory_data_to_up: 'upData', docID: $docID}, function(up) {
                    $.each(up, function(index, data) {


                        $('#hidden_val').val(data.recId);

                        $('#regId').val(data.regId);
                        $('#para').val(data.para);
                        $('#result').val(data.result);
                        $('#deliveryDetails').val(data.deliveryDetails);
                        $('#birthWeight').val(data.birthWeight);
                        $('#complications').val(data.complications);
                        $('#deliveryPlace').val(data.deliveryPlace);





                        $('#spec').trigger("chosen:updated");

                    });
                }, "json");
            });
        }
    }, "json");
}

function pastObsHistory_data_save() {




    var regId = $('#regId').val();
    var para = $('#para').val();
    var result = $('#result').val();
    var deliveryDetails = $('#deliveryDetails').val();
    var birthWeight = $('#birthWeight').val();
    var complications = $('#complications').val();
    var deliveryPlace = $('#deliveryPlace').val();





    $.post('view.php', {save_pastObsHistory: 'data', regId: regId, para: para, result: result, deliveryDetails: deliveryDetails, birthWeight: birthWeight, complications: complications, deliveryPlace: deliveryPlace}, function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);
        } else {
            alertify.error(data.msg, 2000);
        }
        pastObsHistory_data_table();
       clear_pastObsHistory();
    }, "json");
}


function update_pastObsHistory() {




    var regId = $('#regId').val();
    var para = $('#para').val();
    var result = $('#result').val();
    var deliveryDetails = $('#deliveryDetails').val();
    var birthWeight = $('#birthWeight').val();
    var complications = $('#complications').val();
    var deliveryPlace = $('#deliveryPlace').val();

    var hide_id = $('#hidden_val').val();



    $.post('view.php', {update_pastObsHistory: 'data', regId: regId, para: para, result: result, deliveryDetails: deliveryDetails, birthWeight: birthWeight, complications: complications, deliveryPlace: deliveryPlace, hide_id_up: hide_id},
    function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);

        } else {
            alertify.error(data.msg, 2000);
        }
        pastObsHistory_data_table();
        clear_pastObsHistory();
    }, "json");
}



function clear_pastObsHistory() {




    $('#regId').val('');
    $('#para').val('');
    $('#result').val('');
    $('#deliveryDetails').val('');
    $('#birthWeight').val('');
    $('#complications').val('');
    $('#deliveryPlace').val('');

    refreshChosen();


}












///////////// obsHistory end  ///////////////////


///////////// Risk factors /////////////////////



function riskFactors_data_table() {
    var tableData;
    $.post("view.php", {loading_riskFactors: 'table'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="4"> No Data Found in database </td></tr>';
            $('#doctor_data_table tbody').html('').append(tableData);
        } else {
            $.each(e, function(index, data) {
                tableData += '<tr>';
                tableData += '<td>' + data.regId + '</td>';
                tableData += '<td>' + data.abortions + '</td>';
                tableData += '<td>' + data.deliveryComp + '</td>';
                tableData += '<td>' + data.anemia + '</td>';
                tableData += '<td>' + data.bmi + '</td>';
                tableData += '<td>' + data.diabetes + '</td>';
                tableData += '<td>' + data.malaria + '</td>';
                tableData += '<td><button class="btn btn-sm btn-alt m-r-5 delete_admin_data" value="' + data.recId + '"><i class="fa fa-trash-o fa-lg"></i>&nbsp;Delete</button><button class="btn btn-sm btn-alt m-r-5 selproductData" value="' + data.recId + '"><i class="fa fa-plus-square fa-lg"></i>&nbsp;Select</button></td>';
                tableData += '</tr>';
            });
            //Load Json Data to Table
            $('#doctor_data_table tbody').html('').append(tableData);

            //Delete Data through Delete button
            $('.delete_admin_data').click(function() {
                doctor_id_for_delete = $(this).val();
                confirm("Deletion of loading_riskFactors ", "Are you sure want to delete This loading_riskFactors Record", "No", "Yes", function() {
                    $.post("view.php", {delete_riskFactors: 'delete', doctor_id_for_delete: doctor_id_for_delete}, function(delMsg) {
                        $.each(delMsg, function(index, valueDel) {
                            if (valueDel.msgType === 1) {
                                alertify.success(valueDel.msg, 3000);
                            } else if (valueDel.msgType === 2) {
                                alertify.error(valueDel.msg, 3000);
                            }
                        });
                       riskFactors_data_table();
                    }, "json");
                });
            });
            $('.selproductData').click(function() {

                $('#update_btn').slideDown();
                $('#save_btn').slideUp();
                $docID = $(this).val();

                console.log($docID);
                $.post("view.php", {get_riskFactors_data_to_up: 'upData', docID: $docID}, function(up) {
                    $.each(up, function(index, data) {


                        $('#hidden_val').val(data.recId);

                        $('#regId').val(data.regId);
                        $('#abortions').val(data.abortions);
                        $('#pToxoemia').val(data.pToxoemia);
                        $('#aph').val(data.aph);
                        $('#deliveryComp').val(data.deliveryComp);
                        $('#grandMulti').val(data.grandMulti);
                        $('#ppToxaemia').val(data.ppToxaemia);
                        $('#mutliPregnancy').val(data.mutliPregnancy);
                        $('#malPresentation').val(data.malPresentation);
                        $('#anemia').val(data.anemia);
                        $('#ppOther').val(data.ppOther);
                        $('#bmi').val(data.bmi);
                        $('#diabetes').val(data.diabetes);
                        $('#malaria').val(data.malaria);
                        $('#heartDisease').val(data.heartDisease);
                        $('#renalDisease').val(data.renalDisease);
                        $('#other').val(data.other);





                        $('#spec').trigger("chosen:updated");

                    });
                }, "json");
            });
        }
    }, "json");
}













///////////// end Risk factors end ////////////////






/////////////ClinicReg/////////////////////////

function pastObsHistory_data_table() {
    var tableData;
    $.post("view.php", {loading_pastObsHistory: 'table'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="4"> No Data Found in database </td></tr>';
            $('#doctor_data_table tbody').html('').append(tableData);
        } else {
            $.each(e, function(index, data) {
                tableData += '<tr>';
                tableData += '<td>' + data.regId + '</td>';
                tableData += '<td>' + data.para + '</td>';
                tableData += '<td>' + data.result + '</td>';
                tableData += '<td>' + data.deliveryDetails + '</td>';
                tableData += '<td>' + data.birthWeight + '</td>';
                tableData += '<td>' + data.complications + '</td>';
                tableData += '<td>' + data.deliveryPlace + '</td>';
                tableData += '<td><button class="btn btn-sm btn-alt m-r-5 delete_admin_data" value="' + data.recId + '"><i class="fa fa-trash-o fa-lg"></i>&nbsp;Delete</button><button class="btn btn-sm btn-alt m-r-5 selproductData" value="' + data.recId + '"><i class="fa fa-plus-square fa-lg"></i>&nbsp;Select</button></td>';
                tableData += '</tr>';
            });
            //Load Json Data to Table
            $('#doctor_data_table tbody').html('').append(tableData);

            //Delete Data through Delete button
            $('.delete_admin_data').click(function() {
                doctor_id_for_delete = $(this).val();
                confirm("Deletion of loading_pastObsHistory ", "Are you sure want to delete This loading_pastObsHistory Record", "No", "Yes", function() {
                    $.post("view.php", {delete_pastObsHistory: 'delete', doctor_id_for_delete: doctor_id_for_delete}, function(delMsg) {
                        $.each(delMsg, function(index, valueDel) {
                            if (valueDel.msgType === 1) {
                                alertify.success(valueDel.msg, 3000);
                            } else if (valueDel.msgType === 2) {
                                alertify.error(valueDel.msg, 3000);
                            }
                        });
                        pastObsHistory_data_table();
                    }, "json");
                });
            });
            $('.selproductData').click(function() {

                $('#update_btn').slideDown();
                $('#save_btn').slideUp();
                $docID = $(this).val();

                console.log($docID);
                $.post("view.php", {get_pastObsHistory_data_to_up: 'upData', docID: $docID}, function(up) {
                    $.each(up, function(index, data) {


                        $('#hidden_val').val(data.recId);

                        $('#regId').val(data.regId);
                        $('#para').val(data.para);
                        $('#result').val(data.result);
                        $('#deliveryDetails').val(data.deliveryDetails);
                        $('#birthWeight').val(data.birthWeight);
                        $('#complications').val(data.complications);
                        $('#deliveryPlace').val(data.deliveryPlace);





                        $('#spec').trigger("chosen:updated");

                    });
                }, "json");
            });
        }
    }, "json");
}








/////////////ClinicReg End/////////////////////

///////////////////////////////delegate form////////////////////////////////////////

//delegate data table load/////////
function delegate_data_table() {
    var tableData;
    $.post("view.php", {loading_delegate: 'table'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="4"> No Data Found in database </td></tr>';
            $('#delegate_data_table tbody').html('').append(tableData);
        } else {
            $.each(e, function(index, data) {
                tableData += '<tr>';
                tableData += '<td>' + data.name + '</td>';
                tableData += '<td>' + data.mobile + '</td>';
                tableData += '<td>' + data.telephone + '</td>';
                tableData += '<td>' + data.teritory + '</td>';
                tableData += '<td>' + data.DoB + '</td>';
                tableData += '<td>' + data.other + '</td>';
                tableData += '<td><button class="btn btn-sm btn-alt m-r-5 delete_admin_data" value="' + data.iddelegate + '"><i class="fa fa-trash-o fa-lg"></i>&nbsp;Delete</button><button class="btn btn-sm btn-alt m-r-5 selproductData" value="' + data.iddelegate + '"><i class="fa fa-plus-square fa-lg"></i>&nbsp;Select</button></td>';
                tableData += '</tr>';
                console.log(data.iddelegate);
            });
            //Load Json Data to Table
            $('#delegate_data_table tbody').html('').append(tableData);

            //Delete Data through Delete button
            $('.delete_admin_data').click(function() {
                delegate_id_for_delete = $(this).val();
                confirm("Deletion of Delegate Data", "Are you sure want to delete This Delegate", "No", "Yes", function() {
                    $.post("view.php", {delete_delegate: 'delete', delegate_id_for_delete: delegate_id_for_delete}, function(delMsg) {
                        $.each(delMsg, function(index, valueDel) {
                            if (valueDel.msgType === 1) {
                                alertify.success(valueDel.msg, 3000);
                            } else if (valueDel.msgType === 2) {
                                alertify.error(valueDel.msg, 3000);
                            }
                        });
                        delegate_data_table();
                    }, "json");
                });
            });
            $('.selproductData').click(function() {
                $('#update_btn').slideDown();
                $('#save_btn').slideUp();
                $delID = $(this).val();
                console.log($delID);
                $.post("view.php", {get_delegate_data_to_up: 'upData', delID: $delID}, function(up) {
                    $.each(up, function(index, data) {
                        $('#delName').val(data.name);
                        $('#delTP').val(data.telephone);
                        $('#delMob').val(data.mobile);
                        $('#dob').val(data.DoB);
                        $('#other').val(data.other);

                        $('#hidden_val').val(data.iddelegate);
                        $(".select").trigger("chosen:updated");
                        scrollTo(0, 0);
                    });
                }, "json");
            });
        }
    }, "json");
}

//delegate data save funtion
function delegate_data_save() {
    var delName = $('#delName').val();
    var delTp = $('#delTP').val();
    var delMob = $('#delMob').val();
    var other = $('#other').val();
    var dob = $('#dob').val();
    var teritoryID = $('#teritoryID').val();
    $.post('view.php', {save_delegate: 'data', delName: delName, delTp: delTp, delMob: delMob, other: other, dob: dob, teritoryID: teritoryID}, function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);
        } else {
            alertify.error(data.msg, 2000);
        }
        delegate_data_table();
        clear_delegate();
    }, "json");
}

//update delegate
function update_delegate_data() {
    var delName = $('#delName').val();
    var delTp = $('#delTP').val();
    var delMob = $('#delMob').val();
    var other = $('#other').val();
    var dob = $('#dob').val();
    var teritoryID = $('#teritoryID').val();
    var hide_id = $('#hidden_val').val();
    $.post('view.php', {update_delegate: 'data', delName: delName, delTp: delTp, delMob: delMob, dob: dob, teritoryID: teritoryID, other: other, hide_id_up: hide_id},
    function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);
        } else {
            alertify.error(data.msg, 2000);
        }
        delegate_data_table();
        clear_delegate();
    }, "json");
}


//clear delegate//
function clear_delegate() {
    $('#update_btn').slideUp();
    $('#save_btn').slideDown();
    $('#delName').val('');
    $('#delTP').val('');
    $('#delMob').val('');
    $('#other').val('');
    $('#dob').val('');
    $('#teritoryID').val('0');
    refreshChosen();
}
//////////////////////////////end of delegate form////////////////////////////////

//////////////start product form///////////////////////////
//product data table load/////////
function product_data_table() {
    var tableData;
    $.post("view.php", {loading_product: 'table'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="4"> No Data Found in database </td></tr>';
            $('#product_data_table tbody').html('').append(tableData);
        } else {
            $.each(e, function(index, data) {
                tableData += '<tr>';
                tableData += '<td>' + data.brandName + '</td>';
                tableData += '<td>' + data.genericName + '</td>';
                tableData += '<td class="text-right">' + "Rs.   " + data.wholesalePrice + '</td>';
                tableData += '<td class="text-right">' + "Rs.   " + data.retailPrice + '</td>';
                tableData += '<td>' + data.packsize + '</td>';
                tableData += '<td>' + data.description + '</td>';
                tableData += '<td><button class="btn btn-sm btn-alt m-r-5 delete_admin_data" value="' + data.idproduct + '"><i class="fa fa-trash-o fa-lg"></i>&nbsp;Delete</button><button class="btn btn-sm btn-alt m-r-5 selproductData" value="' + data.idproduct + '"><i class="fa fa-plus-square fa-lg"></i>&nbsp;Select</button></td>';
                tableData += '</tr>';



            });
            //Load Json Data to Table
            $('#product_data_table tbody').html('').append(tableData);

            //Delete Data through Delete button
            $('.delete_admin_data').click(function() {
                product_id_for_delete = $(this).val();
                confirm("Deletion of Product Data", "Are you sure want to delete This Product", "No", "Yes", function() {
                    $.post("view.php", {delete_product: 'delete', product_id_for_delete: product_id_for_delete}, function(delMsg) {
                        $.each(delMsg, function(index, valueDel) {
                            if (valueDel.msgType === 1) {
                                alertify.success(valueDel.msg, 3000);
                            } else if (valueDel.msgType === 2) {
                                alertify.error(valueDel.msg, 3000);
                            }
                        });
                        product_data_table();
                    }, "json");
                });
            });
            $('.selproductData').click(function() {
                $('#update_btn').slideDown();
                $('#save_btn').slideUp();
                $proID = $(this).val();

                $.post("view.php", {get_product_data_to_up: 'upData', proID: $proID}, function(up) {
                    $.each(up, function(index, data) {

                        $('#brandName').val(data.brandName);
                        $('#genName').val(data.genericName);
                        $('#wholePrice').val(data.wholesalePrice);
                        $('#retailPrice').val(data.retailPrice);
                        $('#packsize').val(data.packsize);
                        $('#description').val(data.description);
                        $('#hidden_val').val(data.idproduct);
                        scrollTo(0, 0);
                        //  refreshChosen();
                    });
                }, "json");
            });
        }
    }, "json");
}

//product data save funtion
function product_data_save() {
    var brandName = $('#brandName').val();
    var genName = $('#genName').val();
    var wholePrice = $('#wholePrice').val();
    var retailPrice = $('#retailPrice').val();
    var packsize = $('#packsize').val();
    var description = $('#description').val();
    $.post('view.php', {save_product: 'data', brandName: brandName, genName: genName, wholePrice: wholePrice, retailPrice: retailPrice, packsize: packsize, description: description}, function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);
        } else {
            alertify.error(data.msg, 2000);
        }
        product_data_table();
        clear_product();
    }, "json");
}

//update product
function update_product_data() {
    var brandName = $('#brandName').val();
    var genName = $('#genName').val();
    var wholePrice = $('#wholePrice').val();
    var retailPrice = $('#retailPrice').val();
    var packsize = $('#packsize').val();
    var description = $('#description').val();
    var hide_id = $('#hidden_val').val();
    $.post('view.php', {update_product: 'data', brandName: brandName, genName: genName, wholePrice: wholePrice, retailPrice: retailPrice, hide_id_up: hide_id, packsize: packsize, description: description},
    function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);
        } else {
            alertify.error(data.msg, 2000);
        }
        product_data_table();
        clear_product();
    }, "json");
}


//clear product//
function clear_product() {
    $('#brandName').val('');
    $('#genName').val('');
    $('#wholePrice').val('');
    $('#retailPrice').val('');
    $('#packsize').val('');
    $('#description').val('');
    $('#hidden_val').val('');
    $('#update_btn').slideUp();
    $('#save_btn').slideDown();
    // refreshChosen();
}

//////////////end of product form/////////////////////////

///////////////////////////////manager form////////////////////////////////////////

//manager data table load/////////
function manager_data_table() {
    var tableData;
    $.post("view.php", {loading_manager: 'table'}, function(e) {
        if (e === undefined || e.length === 0 || e === null) {
            tableData = '<tr class="error"><td colspan="4"> No Data Found in database </td></tr>';
            $('#manager_data_table tbody').html('').append(tableData);
        } else {
            $.each(e, function(index, data) {
                tableData += '<tr>';
                tableData += '<td>' + data.name + '</td>';
                tableData += '<td>' + data.mobile + '</td>';
                tableData += '<td>' + data.telephone + '</td>';
                tableData += '<td>' + data.DoB + '</td>';
                tableData += '<td>' + data.other + '</td>';
                tableData += '<td><button class="btn btn-sm btn-alt m-r-5 delete_admin_data" value="' + data.idmanager + '"><i class="fa fa-trash-o fa-lg"></i>&nbsp;Delete</button><button class="btn btn-sm btn-alt m-r-5 selproductData" value="' + data.idmanager + '"><i class="fa fa-plus-square fa-lg"></i>&nbsp;Select</button></td>';
                tableData += '</tr>';

            });
            //Load Json Data to Table
            $('#manager_data_table tbody').html('').append(tableData);

            //Delete Data through Delete button
            $('.delete_admin_data').click(function() {
                manager_id_for_delete = $(this).val();
                confirm("Deletion of Delegate Data", "Are you sure want to delete This Manager", "No", "Yes", function() {
                    $.post("view.php", {delete_manager: 'delete', manager_id_for_delete: manager_id_for_delete}, function(delMsg) {
                        $.each(delMsg, function(index, valueDel) {
                            if (valueDel.msgType === 1) {
                                alertify.success(valueDel.msg, 3000);
                            } else if (valueDel.msgType === 2) {
                                alertify.error(valueDel.msg, 3000);
                            }
                        });
                        manager_data_table();
                    }, "json");
                });
            });
            $('.selproductData').click(function() {
                $('#update_btn').slideDown();
                $('#save_btn').slideUp();
                $ManID = $(this).val();
                console.log($ManID);
                $.post("view.php", {get_manager_data_to_up: 'upData', ManID: $ManID}, function(up) {
                    $.each(up, function(index, data) {
                        $('#ManName').val(data.name);
                        $('#ManTP').val(data.telephone);
                        $('#ManMob').val(data.mobile);
                        $('#dob').val(data.DoB);
                        $('#Manother').val(data.other);
                        $('#hidden_val').val(data.idmanager);

                        refreshChosen();
                    });
                }, "json");
            });
        }
    }, "json");
}

//delegate data save funtion
function manager_data_save() {
    var ManName = $('#ManName').val();
    var ManTp = $('#ManTP').val();
    var ManMob = $('#ManMob').val();
    var Manother = $('#Manother').val();
    var dob = $('#dob').val();
    $.post('view.php', {save_manager: 'data', ManName: ManName, ManTp: ManTp, ManMob: ManMob, Manother: Manother, dob: dob}, function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);
        } else {
            alertify.error(data.msg, 2000);
        }
        manager_data_table();
        clear_delegate();
    }, "json");
}

//update delegate
function update_delegate_data() {
    var ManName = $('#ManName').val();
    var ManTp = $('#ManTP').val();
    var ManMob = $('#ManMob').val();
    var Manother = $('#Manother').val();
    var dob = $('#dob').val();

    var hide_id = $('#hidden_val').val();
    $.post('view.php', {update_delegate: 'data', delName: delName, delTp: delTp, delMob: delMob, dob: dob, teritoryID: teritoryID, other: other, hide_id_up: hide_id},
    function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);
        } else {
            alertify.error(data.msg, 2000);
        }
        delegate_data_table();
        clear_delegate();
    }, "json");
}


//clear delegate//
function clear_delegate() {
    $('#update_btn').slideUp();
    $('#save_btn').slideDown();
    $('#delName').val('');
    $('#delTP').val('');
    $('#delMob').val('');
    $('#other').val('');
    $('#dob').val('');
    $('#teritoryID').val('0');
    refreshChosen();
}
//////////////////////////////end of delegate form////////////////////////////////

///////////////
//////////////
//////////////////
//******************other utilities********************
///////////////
//////////
/*function get_teritories() {
 $.post('view.php', {teritory_name: 'data'},
 function(data) {
 $("#teritoryID").html(data);
 refreshChosen();
 });
 }   */

function add_teritories() {

    var new_teritory = $('#new_teritory').val();

    $.post('view.php', {add_teritory: 'data', new_teritory: new_teritory}, function(data) {
        if (data.msgType === 1) {
            alertify.success(data.msg, 2000);
        } else {
            alertify.error(data.msg, 2000);
        }
        get_teritories();
    }, "json");
}
