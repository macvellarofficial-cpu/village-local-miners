<?php
header('Content-Type: application/json; charset=UTF-8');
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
    echo json_encode(['success' => false, 'error' => 'Please fill in all required fields (Name, Email, Message).']);
    exit;
}

// Hostinger Authenticated SMTP Configuration
$smtpHost = 'smtp.hostinger.com';
$smtpUser = 'info@localvillageminers.com';
$smtpPass = '@London2026';
$to = 'info@localvillageminers.com';
$cc = 'hotmail.villagelocalminers@gmail.com';

$htmlBody = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
  <title>New Website Inquiry - Village Local Miners</title>
</head>
<body style='font-family: Arial, sans-serif; color: #222; line-height: 1.6; background-color: #f7f7f7; padding: 20px;'>
  <div style='max-width: 600px; margin: 0 auto; background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);'>
    <div style='border-bottom: 2px solid #d97706; padding-bottom: 12px; margin-bottom: 20px;'>
      <h2 style='color: #d97706; margin: 0; font-size: 22px;'>New Website Trade Inquiry</h2>
      <p style='color: #6b7280; font-size: 13px; margin: 4px 0 0;'>Direct from localvillageminers.com contact form</p>
    </div>
    
    <table style='width: 100%; border-collapse: collapse; margin-bottom: 20px;'>
      <tr>
        <td style='padding: 8px 0; width: 140px; color: #6b7280; font-weight: bold;'>Sender Name:</td>
        <td style='padding: 8px 0; color: #111827; font-weight: 600;'>{$name}</td>
      </tr>
      <tr>
        <td style='padding: 8px 0; color: #6b7280; font-weight: bold;'>Sender Email:</td>
        <td style='padding: 8px 0;'><a href='mailto:{$email}' style='color: #d97706; text-decoration: none; font-weight: 600;'>{$email}</a></td>
      </tr>
      <tr>
        <td style='padding: 8px 0; color: #6b7280; font-weight: bold;'>Phone / WhatsApp:</td>
        <td style='padding: 8px 0; color: #111827;'>" . ($phone ? $phone : 'Not provided') . "</td>
      </tr>
      <tr>
        <td style='padding: 8px 0; color: #6b7280; font-weight: bold;'>Subject / Interest:</td>
        <td style='padding: 8px 0; color: #111827; font-weight: 600;'>{$subject}</td>
      </tr>
      <tr>
        <td style='padding: 8px 0; color: #6b7280; font-weight: bold;'>Date & Time:</td>
        <td style='padding: 8px 0; color: #6b7280; font-size: 13px;'>" . date('Y-m-d H:i:s T') . "</td>
      </tr>
    </table>
    
    <div style='margin-top: 15px; margin-bottom: 25px;'>
      <h3 style='color: #374151; font-size: 15px; margin-bottom: 8px;'>Message Content:</h3>
      <div style='background: #fffbeb; padding: 16px; border-left: 4px solid #d97706; border-radius: 4px; color: #1f2937; white-space: pre-line; font-size: 14px;'>
        " . nl2br($message) . "
      </div>
    </div>
    
    <hr style='border: none; border-top: 1px solid #e5e7eb; margin: 25px 0 15px;'>
    <p style='font-size: 12px; color: #9ca3af; text-align: center; margin: 0;'>
      Village Local Miners - Export & Supply of Fine Minerals (Gold & Diamonds)<br>
      <a href='https://localvillageminers.com' style='color: #d97706;'>www.localvillageminers.com</a>
    </p>
  </div>
</body>
</html>
";

function smtp_read_response($socket) {
    $response = '';
    while (!feof($socket)) {
        $line = fgets($socket, 512);
        if ($line === false) break;
        $response .= $line;
        if (preg_match('/^\d{3}\s/', $line) || strlen($line) < 4) {
            break;
        }
    }
    return $response;
}

function sendViaHostingerSMTP($host, $username, $password, $to, $cc, $subject, $htmlBody, $replyToEmail, $replyToName) {
    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ]);

    // Try Port 465 (SSL) first
    $errno = 0;
    $errstr = '';
    $socket = @stream_socket_client("ssl://{$host}:465", $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $context);
    $portUsed = 465;

    // Fallback to Port 587 (TLS) if 465 fails
    if (!$socket) {
        $socket = @stream_socket_client("tcp://{$host}:587", $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $context);
        $portUsed = 587;
        if (!$socket) {
            throw new Exception("Unable to connect to Hostinger SMTP ($host) on port 465 or 587: [{$errno}] {$errstr}");
        }

        $res = smtp_read_response($socket);
        if (substr($res, 0, 3) !== '220') {
            fclose($socket);
            throw new Exception("SMTP greeting error on 587: " . trim($res));
        }

        fwrite($socket, "EHLO localvillageminers.com\r\n");
        smtp_read_response($socket);

        fwrite($socket, "STARTTLS\r\n");
        $tlsRes = smtp_read_response($socket);
        if (substr($tlsRes, 0, 3) !== '220') {
            fclose($socket);
            throw new Exception("STARTTLS failed on 587: " . trim($tlsRes));
        }

        if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            fclose($socket);
            throw new Exception("TLS encryption handshake failed on 587");
        }
    } else {
        $res = smtp_read_response($socket);
        if (substr($res, 0, 3) !== '220') {
            fclose($socket);
            throw new Exception("SMTP greeting error on 465: " . trim($res));
        }
    }

    // EHLO
    fwrite($socket, "EHLO localvillageminers.com\r\n");
    $res = smtp_read_response($socket);
    if (substr($res, 0, 3) !== '250') {
        fclose($socket);
        throw new Exception("EHLO command failed: " . trim($res));
    }

    // AUTH LOGIN
    fwrite($socket, "AUTH LOGIN\r\n");
    $res = smtp_read_response($socket);
    if (substr($res, 0, 3) !== '334') {
        fclose($socket);
        throw new Exception("AUTH LOGIN failed: " . trim($res));
    }

    // Send Username
    fwrite($socket, base64_encode($username) . "\r\n");
    $res = smtp_read_response($socket);
    if (substr($res, 0, 3) !== '334') {
        fclose($socket);
        throw new Exception("Username authentication failed: " . trim($res));
    }

    // Send Password
    fwrite($socket, base64_encode($password) . "\r\n");
    $res = smtp_read_response($socket);
    if (substr($res, 0, 3) !== '235') {
        fclose($socket);
        throw new Exception("Password authentication failed. Please verify mailbox credentials: " . trim($res));
    }

    // MAIL FROM
    fwrite($socket, "MAIL FROM:<{$username}>\r\n");
    $res = smtp_read_response($socket);
    if (substr($res, 0, 3) !== '250') {
        fclose($socket);
        throw new Exception("MAIL FROM rejected: " . trim($res));
    }

    // RCPT TO (Primary)
    fwrite($socket, "RCPT TO:<{$to}>\r\n");
    $res = smtp_read_response($socket);
    if (substr($res, 0, 3) !== '250') {
        fclose($socket);
        throw new Exception("RCPT TO ({$to}) rejected: " . trim($res));
    }

    // RCPT TO (CC)
    if (!empty($cc)) {
        fwrite($socket, "RCPT TO:<{$cc}>\r\n");
        smtp_read_response($socket);
    }

    // DATA
    fwrite($socket, "DATA\r\n");
    $res = smtp_read_response($socket);
    if (substr($res, 0, 3) !== '354') {
        fclose($socket);
        throw new Exception("DATA rejected: " . trim($res));
    }

    // Headers & Payload
    $encodedSubject = '=?UTF-8?B?' . base64_encode("Website Inquiry: " . $subject) . '?=';
    $encodedFromName = '=?UTF-8?B?' . base64_encode("Village Local Miners") . '?=';
    $encodedReplyName = '=?UTF-8?B?' . base64_encode($replyToName) . '?=';

    $headers = "Date: " . date('r') . "\r\n";
    $headers .= "To: <{$to}>\r\n";
    if (!empty($cc)) {
        $headers .= "Cc: <{$cc}>\r\n";
    }
    $headers .= "From: {$encodedFromName} <{$username}>\r\n";
    $headers .= "Reply-To: {$encodedReplyName} <{$replyToEmail}>\r\n";
    $headers .= "Subject: {$encodedSubject}\r\n";
    $headers .= "Message-ID: <" . time() . "." . md5($replyToEmail . time()) . "@localvillageminers.com>\r\n";
    $headers .= "X-Mailer: Hostinger Authenticated SMTP\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: base64\r\n\r\n";

    $payload = $headers . chunk_split(base64_encode($htmlBody)) . "\r\n.\r\n";
    fwrite($socket, $payload);
    $res = smtp_read_response($socket);
    if (substr($res, 0, 3) !== '250') {
        fclose($socket);
        throw new Exception("Message content rejected by SMTP server: " . trim($res));
    }

    // QUIT
    fwrite($socket, "QUIT\r\n");
    fclose($socket);

    return [
        'sent' => true,
        'port' => $portUsed,
    ];
}

try {
    $result = sendViaHostingerSMTP(
        $smtpHost,
        $smtpUser,
        $smtpPass,
        $to,
        $cc,
        $subject,
        $htmlBody,
        $email,
        $name
    );

    echo json_encode([
        'success' => true,
        'message' => "Your inquiry has been successfully delivered via Hostinger SMTP to {$to}.",
        'details' => $result
    ]);
} catch (Exception $e) {
    // If SMTP fails, attempt fallback mail() and return error details
    $fallbackHeaders = "From: Village Local Miners <{$smtpUser}>\r\n" .
                       "Reply-To: {$name} <{$email}>\r\n" .
                       "Cc: {$cc}\r\n" .
                       "MIME-Version: 1.0\r\n" .
                       "Content-Type: text/html; charset=UTF-8\r\n";
    $fallbackSent = @mail($to, "Website Inquiry: {$subject}", $htmlBody, $fallbackHeaders);

    http_response_code(500);
    echo json_encode([
        'success' => $fallbackSent,
        'error' => 'SMTP Delivery Error: ' . $e->getMessage(),
        'fallbackMailSent' => $fallbackSent
    ]);
}
