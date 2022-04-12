<?php
    header('Content-type: application/json');
    include './parts/database.php';

    echo json_encode($arrAlbum);