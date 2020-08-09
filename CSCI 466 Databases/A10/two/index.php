<?php 
	include ("header.html");
	require ("conn.php");
    $sql = 'select * from Publisher';
	echo '<form action="index.php" method="post">';
        echo '<select name="owner">';   
        //fetch and print each record or row 
        foreach($conn->query($sql) as $row)
        {
            echo '<option value="';
            echo $row["PublisherCode"]; //What gets passed in 
            echo '">';
            echo $row["PublisherName"]; //What is visible 
            echo '</option>"';
        } // end foreach 
        //close the selection 
        echo '</select>';
        echo '<br><input type="submit" name="submit" value="submit"><br>';
    echo '</form>';
    
    if($_SERVER['REQUEST_METHOD']=='POST')
    {
        $own = $_POST['owner'];
        $sql = "select Book.Title, Publisher.PublisherCode, Publisher.PublisherName from Book, Publisher where Book.PublisherCode = Publisher.PublisherCode and Publisher.PublisherCode = '$own'";
        $count = 0;
        foreach($conn->query($sql) as $row)
        {
            if($count == 0){
                echo '<h2>';
                echo $row["PublisherName"];
                echo '</h2>';
                $count = $count + 1;
            }
            echo $row["Title"], '<br>';
        } //end for each
    } // end if 
	include("footer.html");
?>