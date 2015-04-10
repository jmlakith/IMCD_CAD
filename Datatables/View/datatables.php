<!DOCTYPE html>
<html>

    <!-- Mirrored from wolfadmin.herokuapp.com/1.1/lists/datatables by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 14 May 2014 02:33:15 GMT -->
    <!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />	
        <title>Donor Data</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link data-turbolinks-track="true" href="../../assets/application-b9abcf044a0bc3e705568d103eddd00e.css" media="all" rel="stylesheet" />
        <script data-turbolinks-track="true" src="../../assets/application-c19ca191fe14a22b6c3ee53ac5b340a6.js"></script>
        <meta content="authenticity_token" name="csrf-param" />
        <meta content="OszadhPDbPaLmettDOd3kDnS+XRVU5SVqyjBoVc8Tr8=" name="csrf-token" />

        <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    </head>
    
    <?php include("../../Common/alertify.php"); ?>     

    <body id="datatables">

        <div id="wrapper">

            <?php include("../../Common/short_menu.php"); ?>

            <div id="content">


                <div class="menubar">
                    <div class="sidebar-toggler visible-xs">
                        <i class="ion-navicon"></i>
                    </div>

                    <div class="page-title">
                        Donor Information
                    </div>
                </div>

                <div class="content-wrapper">

                    <div class="block-area" id="defaultStyle">
                        <h3 class="block-title">Donor Information</h3>
                        <div class="dark-title">
                            <input type="text" class="main-search" id="dev-table-filter" data-action="filter" data-filters="#orders-datatable" placeholder="Search Records" />
                        </div>
                        <div class="clearfix"></div>
                        <table class="table table-bordered table-hover tile" id="orders-datatable">
                            <thead>
                                <tr>
                                    <th tabindex="0" rowspan="1" colspan="1">Name
                                    </th>

                                    <th tabindex="0" rowspan="1" colspan="1">Phone
                                    </th>
                                    <th tabindex="0" rowspan="1" colspan="1">Email
                                    </th>
                                    <th tabindex="0" rowspan="1" colspan="1">Confirmation
                                    </th>
                                    <th tabindex="0" rowspan="1" colspan="1">Delete
                                    </th>

                                </tr>
                            </thead>
                             <tfoot>
            <tr>
               
                <th rowspan="1" colspan="1">Name</th>
                <th rowspan="1" colspan="1">Phone</th>
                <th rowspan="1" colspan="1">Email</th>
                <th rowspan="1" colspan="1">Confirmation</th>
                <th rowspan="1" colspan="1">Delete</th>
                
            </tr>
        </tfoot>
                            <tbody>                            
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>  
        </div>


        <?php require_once '../../Common/all_js_links.php'; ?>

        <script src="js/donnerdata.js"></script> 
        <script type="text/javascript">
            $(document).ready(function() {


                $(function() {
                    
                    donner_data_table();


                });




            });

        </script>

    </body>

    <!-- Mirrored from wolfadmin.herokuapp.com/1.1/lists/datatables by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 14 May 2014 02:33:15 GMT -->
</html>
