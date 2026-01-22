<?php

$server = '127.0.0.1';
$username = 'root';
$password = '';
$database = 'backend_lks';

$connection = mysqli_connect($server, $username, $password, $database);

if (!$connection) {
  die('Koneksi gagal: ' . mysqli_connect_error());
}

echo 'Koneksi berhasil';
