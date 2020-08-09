<?php
	include ("../header.html");
	require ("../conn.php");
    
    echo '<a href="../NewCustomerAccount/index.php" >New Customer Account</a>';
    echo '<a href="../GenReport/index2.php" >Generate Report</a>';
    echo '<h1 style="text-align: center">Create New Inventory Part</h1>';
    
    echo '<form action="index.php" method="post">';

    echo '<table style="width: 100%;text-align: center;">';
    echo '<tr>';
    echo '<td>';
        echo '<fieldset style="width: 40%;font-size: 30px;margin-left: 30%;">';
            echo '<legend>Inventory Part</legend>';
            echo 'Part Name: <br> <input type="text" name="PName" id="PName">';
            echo '<br>Part Quantity: <br> <input type="text" name="PQuantity" id="PQuantity">';
            echo '<br>Listing/Selling Price: <br> <input type="text" name="LSPrice" id="LSPrice">';
            echo '<br>Manufacturer Name: <br> <input type="text" name="MName" id="MName">';
            echo '<br>Part Description: <br> <textarea name="PDesc" id="PDesc" rows="10" cols="40"></textarea>';
            echo '<br>Comments: <br> <textarea name="Comments" id="Comments" rows="10" cols="40"></textarea>';
        echo '</fieldset>';
    echo '</td>';
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
        $PName = trim($_POST['PName']);
        $PQuantity = trim($_POST['PQuantity']);
        $LSPrice = trim($_POST['LSPrice']);
        $MName = trim($_POST['MName']);
        $PDesc = trim($_POST['PDesc']);
        $Comments = trim($_POST['Comments']);
        
        $req = "";
        
        if($PName == "" || $PQuantity == "" || $LSPrice == "" || $MName == "" || $PDesc == "" || $Comments == ""){
            $req = 'All text boxes must be filled.';
        } else {
            $sql = "insert into parts (Pname, Quantity, Price, Mname, Description, Comments) values ('$PName', '$PQuantity', '$LSPrice', '$MName', '$PDesc', '$Comments')";
            $stmt = $conn->query($sql);
            $req = "Successfully submited data";
        }
        echo $req;
    }
	include("../footer.html");
?>