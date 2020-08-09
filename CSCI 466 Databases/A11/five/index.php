<?php
	include ("header.html");
	require ("conn.php");
	 $sql = 'select * from visits';
	echo '<form action="index.php" method="post">';
        echo '<select name="removeVisit">';   
        //fetch and print each record or row 
                    echo "select which visit id you would like to delete ";

        foreach($conn->query($sql) as $row)
        {
            echo '<option name="go" id="go" value="';
            
            echo $row["visitId"]; //What gets passed in 
            echo '">';
            echo $row["visitId"]; //What is visible 
            echo '</option>"';
        } // end foreach 
        //close the selection 
        echo '</select>';
        echo '<br><input type="submit" name="submit" value="submit"><br>';
    echo '</form>';
    
    
    if($_SERVER['REQUEST_METHOD']=='POST')
    {
       // $own = $_POST['addVisit'];
        $visitId = trim($_POST['removeVisit']);     
        $sql = "delete from visits where visitId = '$visitId'";
        $stmt = $conn->query($sql);
    } // end if 
    
    
	include("footer.html");
?>