<?php
$social = $_GET['social'];

if ($social === "facebook") {
    header("Location: https://www.facebook.com");
} elseif ($social === "youtube") {
    header("Location: https://www.youtube.com");
} elseif ($social === "telegram") {
    header("Location: https://t.me");
} else {
    http_response_code(404);
    echo "Page not found!";
}
exit;
?>
