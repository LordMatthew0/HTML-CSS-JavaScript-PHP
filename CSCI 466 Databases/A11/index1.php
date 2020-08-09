<?php
	include ("header.html");
	require ("conn.php");
    
    echo '<form action="index.php" method="post">';
    echo 'Enter new dog name';
    echo '<input type="text" name="go" id="go" hint="dog name"><br>';
    echo 'Enter dog breed ';
    echo '<input type="text" name="go2" id="go2" hint="breed"><br>';
    echo '<br><input type="submit" name="submit" value="Submit"><br>';
    echo '</form>';
    
    //now check if the submit button has been clicked 
    // and if so pick up the data entered in the text box
    if($_SERVER['REQUEST_METHOD']=='POST')
    {
        $name = trim($_POST['go']);
        $breed = trim($_POST['go2']);
        $sql = "insert into dogs (breed, name) values ('$breed', '$name')";
        $stmt = $conn->query($sql);
    }
	include("footer.html");
?>