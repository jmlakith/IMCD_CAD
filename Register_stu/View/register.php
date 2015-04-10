<!DOCTYPE html>
<html>

    <!-- Mirrored from wolfadmin.herokuapp.com/1.1/forms/new_customer by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 14 May 2014 02:34:08 GMT -->
    <!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />	
        <title>COLOUR A DREAM</title>
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
    <body id="form">

        <div id="wrapper">

            <?php include("../../Common/short_menu.php"); ?>

            <div id="content">


                <div class="menubar">
                    <div class="sidebar-toggler visible-xs">
                        <i class="ion-navicon"></i>
                    </div>

                    <div class="page-title">
                        Register as a Donner  
                        <small class="hidden-xs">
                            <strong>Send a Request for Registration </strong>
                        </small>
                    </div>
                </div>

                <div class="content-wrapper">
                    <form id="new-customer" class="form-horizontal" method="get" action="#" role="form">
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">First name</label>
                            <div class="col-sm-10 col-md-8">
                                <input type="text" id="fname" class="form-control" name="fname" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">Last name</label>
                            <div class="col-sm-10 col-md-8">
                                <input  type="text" id="lname" class="form-control" name="lname" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">National ID No</label>
                            <div class="col-sm-10 col-md-8">
                                <div class="has-feedback">
                                <input type="text" id="nic" class="form-control mask-nic" name="nic"  />
                                 <i class="ion-information-circled form-control-feedback" data-toggle="tooltip" title="Enter Your NIC Number">
                                    </i>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="inputPassword3" class="col-sm-2 col-md-2 control-label">Gender</label>
                            <div class="col-sm-10 col-md-8">
                                <select class="form-control" id="gender" data-smart-select>

                                    <!--- check -->
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>             
                                    <!--- check -->        

                                </select>
                            </div>
                        </div>



                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">Phone number</label>
                            <div class="col-sm-10 col-md-8">
                                <div class="has-feedback">
                                    <input type="text" id="pnumber" class="form-control mask-phone" name="pnumber" />
                                    <i class="ion-information-circled form-control-feedback" data-toggle="tooltip" title="Enter Your Private Mobile Number">
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword3" class="col-sm-2 col-md-2 control-label">Country</label>
                            <div class="col-sm-10 col-md-8">
                                <select id="country" class="form-control" data-smart-select>

                                    <!--- check -->

                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antarctica">Antarctica</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Bouvet Island">Bouvet Island</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">Christmas Island</option>
                                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Cote D'Ivoire (Ivory Coast)">Cote D'Ivoire (Ivory Coast)</option>
                                    <option value="Croatia (Hrvatska)">Croatia (Hrvatska)</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Czechoslovakia (former)">Czechoslovakia (former)</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="East Timor">East Timor</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="Metropolitan">Metropolitan</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Great Britain (UK)">Great Britain (UK)</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard and McDonald Islands">Heard and McDonald Islands</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea (North)">Korea (North)</option><option value="Korea (South)">Korea (South)</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macau">Macau</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="Neutral Zone">Neutral Zone</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand (Aotearoa)">New Zealand (Aotearoa)</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn">Pitcairn</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russian Federation">Russian Federation</option><option value="Rwanda">Rwanda</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Slovak Republic">Slovak Republic</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="Spain">Spain</option><option selected="selected" value="Sri Lanka">Sri Lanka</option><option value="St. Helena">St. Helena</option><option value="St. Pierre and Miquelon">St. Pierre and Miquelon</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="Uruguay">Uruguay</option><option value="US Minor Outlying Islands">US Minor Outlying Islands</option><option value="USSR (former)">USSR (former)</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Vatican City State (Holy See)">Vatican City State (Holy See)</option><option value="Venezuela">Venezuela</option><option value="Viet Nam">Viet Nam</option><option value="Virgin Islands (British)">Virgin Islands (British)</option><option value="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option><option value="Wallis and Futuna Islands">Wallis and Futuna Islands</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Yugoslavia">Yugoslavia</option><option value="Zaire">Zaire</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>


                                    <!--- check -->        

                                </select>
                            </div>
                        </div>
                        <div class="address">
                            <div class="form-group">
                                <label class="col-sm-2 col-md-2 control-label">Home Address</label>
                                <div class="col-sm-10 col-md-8">
                                    <input type="text" id="address" class="form-control" placeholder="Address" name="address" />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-3 col-sm-offset-2">
                                    <input type="text" id="city" class="form-control" placeholder="City" name="city" />
                                </div>
                                <div class="col-sm-3">
                                    <input type="text" id="state" class="form-control" placeholder="State" name="state" />
                                </div>
                                <div class="col-sm-2 col-md-2">
                                    <input type="text" id="zip" class="form-control" placeholder="Zip code" name="zip" />
                                </div>
                            </div>
                        </div>


                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">Email address</label>
                            <div class="col-sm-10 col-md-8">
                                <input type="text" id="email" class="form-control" name="customer[email]" />
                            </div>
                            
                        </div>

                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">Password</label>
                            <div class="col-sm-10 col-md-8">
                                <input type="password" id="password" class="form-control" name="password" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">Re-type Password</label>
                            <div class="col-sm-10 col-md-8">
                                <input type="password" id="re_password" class="form-control" name="re_password" />
                            </div>

                        </div>
                        <div class="form-group">

                        </div>

                        <div class="form-group form-actions">
                            <div class="col-sm-offset-2 col-sm-10">

                                <button type="button" id="reset" class="btn btn-success">Reset</button>
                                <button type="button" id="register" class="btn btn-success">Register as a Donner</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>  
        </div>
        
        
        
        
        <!-- modal -->
    
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

        <script src="js/register.js"></script>
         <?php require_once '../../Common/all_js_links.php'; ?>

        <script type="text/javascript">

            (function() {

                $('.mask-age').mask('ZZ', {translation: {'Z': {pattern: /[0-9]/, optional: true}}});
                $('.mask-weight').mask('ZZZ', {translation: {'Z': {pattern: /[0-9]/, optional: true}}});
                $('.mask-nic').mask('ZZZZZZZZZV', {translation: {'Z': {pattern: /[0-9]/, optional: true}, 'V': {pattern: /[A-Za-z]/, optional: true}}});
                 $('.mask-phone').mask('000-0000000');
                   
      
        
                 
            })();
        
            (function() {
           $('#reset').click(function() {
                clear_register();                    
            });
            
            
    
             })();

        </script>
        
        
        <script>
         $(document).ready(function() {
             
             
              $('#register').click(function() {
                  
                  
               var fields = ["fname", "lname", "nic", "pnumber", "email", "password","re_password"]; 
               
               if(passwordCheck()===false){
                   
                   okModel("ERROR : Password Mismatch ", "Re-type the same password that you typed before ", "OK");
               }
                else if (requiredFields(fields) === 1) {

                   register_data_save();


                } else {

                    okModel("ERROR : Data incomplete ", "You should complete neccessary fields before register ", "OK");

                }

                  
                  
                
                
            });
             
             
             
             
         });
        
        </script>


    </body>

    <!-- Mirrored from wolfadmin.herokuapp.com/1.1/forms/new_customer by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 14 May 2014 02:34:08 GMT -->
</html>
