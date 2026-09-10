<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method Not Allowed']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$name = htmlspecialchars(trim($data['name'] ?? ''));
$email = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone = htmlspecialchars(trim($data['phone'] ?? ''));
$subject = htmlspecialchars(trim($data['subject'] ?? 'New Mineral Inquiry'));
$message = htmlspecialchars(trim($data['message'] ?? ''));

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please fill in all required fields.']);
    exit;
}

$to = 'info@localvillageminers.com';
$headers = "From: Village Local Miners <info@localvillageminers.com>\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "Cc: hotmail.villagelocalminers@gmail.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$body = "
<html>
<head>
  <title>New Website Inquiry - Village Local Miners</title>
</head>
<body style='font-family: Arial, sans-serif; color: #333; line-height: 1.6;'>
  <div style='max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;'>
    <h2 style='color: #d97706; border-bottom: 2px solid #d97706; padding-bottom: 8px;'>New Inquiry from Website Contact Form</h2>
    <p><strong>Sender Name:</strong> {$name}</p>
    <p><strong>Sender Email:</strong> <a href='mailto:{$email}'>{$email}</a></p>
    <p><strong>Phone / WhatsApp:</strong> {$phone}</p>
    <p><strong>Subject:</strong> {$subject}</p>
    <hr style='border: none; border-top: 1px solid #eee; margin: 15px 0;'>
    <p><strong>Message:</strong></p>
    <div style='background: #f9f9f9; padding: 15px; border-left: 4px solid #d97706; border-radius: 4px;'>
      " . nl2br($message) . "
    </div>
    <hr style='border: none; border-top: 1px solid #eee; margin: 15px 0;'>
    <p style='font-size: 12px; color: #777;'>This inquiry was sent from the contact form at <a href='https://localvillageminers.com'>https://localvillageminers.com</a>.</p>
  </div>
</body>
</html>
";

$mailSent = @mail($to, "Website Inquiry: {$subject}", $body, $headers);

echo json_encode([
    'success' => true,
    'message' => 'Your inquiry has been successfully sent to info@localvillageminers.com. Our team will reply shortly.',
    'mailSent' => $mailSent
]);
