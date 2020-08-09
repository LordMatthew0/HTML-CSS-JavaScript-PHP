<?php
	include ("../header.html");
	require ("../conn.php");
   echo '<a href="../NewInventoryPart/index.php" >New Inventory Part</a>';
    echo '<a href="../GenReport/index2.php" >Generate Report</a>';
    
    echo '<h1 style="text-align: center">Create New Customer Account</h1>';
    
    echo '<form action="index.php" method="post">';

    echo '<table style="width: 100%">';
    echo '<tr>';
    echo'<td>';
        echo '<p>Company Name: <input type="text" name="Cname" id="Cname"> </p> ';
        echo '<fieldset style="width: 90%">';
            echo '<legend>Company Representative</legend>';
            echo 'First Name: <br> <input type="text" name="CRFirst" id="CRFirst">';
            echo '<br>Last Name: <br> <input type="text" name="CRLast" id="CRLast">';
            echo '<br>Email Address: <br> <input type="text" name="CREmail" id="CREmail">';
            echo '<br>Phone Number: <br> <input type="text" name="CRPhone" id="CRPhone">';
        echo '</fieldset>';
            
        echo '<fieldset style="width: 90%">';
            echo '<legend>Manager information</legend>';
            echo 'Quote Type: <select name="QuoteType" id="QuoteType"> <option value="Manual">Manual</option> <option value="Auto">Auto</option> </select>';
            echo '<br>Email Address: <br> <input type="text" name="MEmail" id="MEmail">';
            echo '<br>Phone Number: <br> <input type="text" name="MPhone" id="MPhone">';
        echo '</fieldset>';
    echo'</td>';
    echo'<td>';
        echo '<fieldset style="width: 90%">';
            echo '<legend>Shipping Address</legend>';
            echo '<input type="checkbox" name="SandBsame" id="SandBsame" value="same"> Check if shipping and billing addresses are the same';
            echo '<br>Street address: <br> <input type="text" name="sAddress" id="sAddress">';
            echo '<br>City: <br> <input type="text" name="sCity" id="sCity">';
            echo '<br>State: <br> <input type="text" name="sState" id="sState">';
            echo '<br>Zip Code: <br> <input type=text" name="sZip" id="sZip">';
        echo '</fieldset>';

        echo '<fieldset style="width: 90%">';
            echo '<legend>Billing Address</legend>';
            echo 'Street address: <br> <input type="text" name="bAddress" id="bAddress">';
            echo '<br>City: <br> <input type="text" name="bCity" id="bCity">';
            echo '<br>State: <br> <input type="text" name="bState" id="bState">';
            echo '<br>Zip Code: <br> <input type=text" name="bZip" id="bZip">';
        echo '</fieldset>';
    echo'</td>';
    echo '</tr>';
    echo '</table>';
    
    echo '<div style="text-align: center;">';
        echo '<button style="width: 10%;height: 10%;margin-right: 3%;font-size: 30px;" type="reset" value="Reset">Reset</button>';

        echo '<button style="width: 10%;height: 10%;margin-right: 3%;font-size: 30px;" type="submit" value="Submit">Submit</button>';
    echo '</div>';
    
    
    echo '</form>';
   
    //now check if the submit button has been clicked 
    // and if so pick up the data entered in the text box
    if($_SERVER['REQUEST_METHOD']=='POST')
    {
        $Cname = trim($_POST['Cname']);
        $CRFirst = trim($_POST['CRFirst']);
        $CRLast = trim($_POST['CRLast']);
        $CREmail = trim($_POST['CREmail']);
        $CRPhone = trim($_POST['CRPhone']);
        $QuoteType = trim($_POST['QuoteType']);
        $MEmail = trim($_POST['MEmail']);
        $MPhone = trim($_POST['MPhone']);
        
        $sAddress = trim($_POST['sAddress']);
        $sCity = trim($_POST['sCity']);
        $sState = trim($_POST['sState']);
        $sZip = trim($_POST['sZip']);
        
        $bAddress = trim($_POST['bAddress']);
        $bCity = trim($_POST['bCity']);
        $bState = trim($_POST['bState']);
        $bZip = trim($_POST['bZip']);
        
        $req = "";
    
        
        if(isset($_POST['SandBsame'])){
            if($Cname == "" || $CRFirst == "" || $CRLast == "" || $CREmail == "" || $CRPhone == "" || $QuoteType == "" || $MEmail == "" || $MPhone == "" || $sAddress == "" || $sCity == "" || $sState == "" || $sZip == ""){
                $req = 'Only Billing can be blank.';
               
            } else {
                $sql = "insert into customer2 (Cname, Fname, Lname, Email, Phone, Quote, Memail, Mphone, ShippingStreet, ShippingCity, ShippingState, ShippingZip, BillingStreet, BillingCity, BillingState, BillingZip) values ('$Cname', '$CRFirst', '$CRLast', '$CREmail', '$CRPhone', '$QuoteType', '$MEmail', '$MPhone', '$sAddress', '$sCity', '$sState', '$sZip', '$sAddress', '$sCity', '$sState', '$sZip')";
                $stmt = $conn->query($sql);
                $req = 'Successfully submited data';
            }  
        } else {
            if($Cname == "" || $CRFirst == "" || $CRLast == "" || $CREmail == "" || $CRPhone == "" || $QuoteType == "" || $MEmail == "" || $MPhone == "" || $sAddress == "" || $sCity == "" || $sState == "" || $sZip == "" || $bAddress == "" || $bCity == "" || $bState == "" || $bZip == ""){
                $req = 'All text boxes must be filled.';
            } else {
                $sql = "insert into customer2 (Cname, Fname, Lname, Email, Phone, Quote, Memail, Mphone, ShippingStreet, ShippingCity, ShippingState, ShippingZip, BillingStreet, BillingCity, BillingState, BillingZip) values ('$Cname', '$CRFirst', '$CRLast', '$CREmail', '$CRPhone', '$QuoteType', '$MEmail', '$MPhone', '$sAddress', '$sCity', '$sState', '$sZip', '$bAddress', '$bCity', '$bState', '$bZip')";
                $stmt = $conn->query($sql);
                $req = 'Successfully submited data';
            }
        }
        echo $req;
    }
	include("../footer.html");
?>