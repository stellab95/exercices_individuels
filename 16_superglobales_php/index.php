<?php
// Start the session
session_start();
?>

<?php

  if (empty($_GET["first_name"])) {
    echo 'Bonjour Anonyme';
  } else {
    echo 'Bonjour ' . htmlspecialchars($_GET["first_name"]) . '!';
}
?>

<form action="index.php" method="post">
 <p>Votre nom : <input type="text" name="first_name" /></p>
 <p><input type="submit" value="OK"></p>
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['first_name']);
  if (empty($name)) {
    echo 'Bonjour Anonyme';
  } else {
    echo $name;
  }
}
?>

<style>
    a{
    text-decoration: none;
    list-style: none;
    color: black;

    }
</style>

<div>
  <?php session_unset() ?>
   <button><a href="/unset.php">Reset</a></button> 
</div>
<?php
