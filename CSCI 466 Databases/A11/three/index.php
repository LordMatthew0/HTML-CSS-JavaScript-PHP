<?php
	include ("header.html");
	require ("conn.php");
	 $sql = 'select * from dogs';
	echo '<form action="index.php" method="post">';
        echo '<select name="addVisit">';   
        //fetch and print each record or row 
        foreach($conn->query($sql) as $row)
        {
            echo '<option name="go" id="go" value="';
            echo $row["dogId"]; //What gets passed in 
            echo '">';
            echo $row["name"]; //What is visible 
            echo '</option>"';
        } // end foreach 
        echo 'Enter dog breed ';
        echo '<input type="text" name="go2" id="go2" hint="date"><br>';
        //close the selection 
        echo '</select>';
        echo '<br><input type="submit" name="submit" value="submit"><br>';
    echo '</form>';
    
    
    if($_SERVER['REQUEST_METHOD']=='POST')
    {
       // $own = $_POST['addVisit'];
        $dogId = trim($_POST['addVisit']);
        $date = trim($_POST['go2']);     
        $sql = "insert into visits (dogId, date) values ('$dogId', '$date')";
        $stmt = $conn->query($sql);
    } // end if 
    
    
	include("footer.html");
?>