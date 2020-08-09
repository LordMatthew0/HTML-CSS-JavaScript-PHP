<?php 
	include ("../header.html");
	require ("../conn.php");
    
    echo '<a href="../NewCustomerAccount/index.php" >New Customer Account</a>';
    echo '<a href="../NewInventoryPart/index.php" >New Inventory Part</a>';
    
    $stmt = $conn->query('select count(RFQID) from RFQ;');
    $RFQCount = $stmt->fetch(PDO::FETCH_ASSOC);
    echo '<form action="index2.php" method="post">';
    echo '<p>Select RFQID</p>';
    echo '<select name="selectRFQID[]" id="selectRFQID" size="10" multiple>';
    
    for ($counter = 1; $counter < 20; $counter++){
        echo '<option value="'; echo $counter; echo '">'; echo $counter; echo '</option>'; 
    }  
    echo '</select>';
   
    echo '<p>Hold down crtl to select multiple</p>';
    
    echo '<div style="margin-bottom: 1%;">';
        echo '<button style="width: 10%;height: 10%;margin-right: 3%;font-size: 30px;" type="reset" value="Reset">Reset</button>';
       # echo '<button style="width: 10%;height: 10%;margin-right: 3%;font-size: 30px;" type="submit" value="Submit">Submit</button>';
        echo '<input type="submit" name="formSubmit" value="Submit" style="width: 10%;height: 10%;margin-right: 3%;font-size: 30px;" >';
    echo '</div>';
    echo '</form>';
    
    
    if($_SERVER['REQUEST_METHOD']=='POST')
    { 
      //  $stmt = $conn->query('select * from RFQ where RFQID = 1;');
        
        if(isset($_POST['formSubmit'])){
            $numbers = $_POST['selectRFQID'];
            
            if(!isset($numbers)){
                echo '<p>You did not select anything</p>';
            } else {
            
                echo '<table border="1" style="width: 100%;text-align: center;">';
                echo '<tr><td>';
                echo '<h3>Sales Quote Number</h3>';
                echo '</td><td>';
                echo '<h3>Date Created</h3>';
                echo '</td><td>';
                echo '<h3>Part Number</h3>';
                echo '</td><td>';
                echo '<h3>Quantity</h3>';
                echo '</td><td>';
                echo '<h3>Price</h3>';
                echo '</td><td>';
                echo '<h3>Part Description</h3>';
                echo '</td><td>';
                echo '<h3>Date ISP can Provide The Part</h3>';
                echo '</td><td>';
                echo '<h3>Date Quote Expires</h3>';
                echo '</td><td>';
                echo '<h3>Status</h3>';
                
                for ($i = 0; $i < count($numbers); $i++){ 
                    $stm = 'select * from RFQ where RFQID = ' . $numbers[$i] . ';';
                    $stmt = $conn->query($stm);
                    while($row = $stmt->fetch(PDO::FETCH_ASSOC))
                    {
                        echo '<tr><td>';
                        echo $row['RFQID'];
                        echo '</td><td> ';
                        echo $row['DateCreated'];
                        echo '</td><td> ';
                        echo $row['PartNumber'];
                        echo '</td><td>';	
                        echo $row['Quantity'];
                        echo '</td><td>';	
                        echo $row['Price'];
                        echo '</td><td>';	
                        echo $row['PartDesc'];
                        echo '</td><td>';
                        echo $row['DateISP'];
                        echo '</td><td>';
                        echo $row['DateExp'];
                        echo '</td><td>';	
                        echo $row['Status'];
                        echo '</td></tr>';	
                    }  
                }
                 echo '</table>';
            }
        } 
    }
    
	include("../footer.html");
?>