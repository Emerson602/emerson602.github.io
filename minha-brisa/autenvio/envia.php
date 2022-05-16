<?php
 // Adiciona o arquivo class.phpmailer.php - você deve especificar corretamente o caminho da pasta com o este arquivo.
 require_once("PHPMailerAutoload.php");
 // Inicia a classe PHPMailer
 $mail = new PHPMailer();
 // DEFINIÇÃO DOS DADOS DE AUTENTICAÇÃO - Você deve auterar conforme o seu domínio!
 $mail->IsSMTP(); // Define que a mensagem será SMTP
 $mail->Host = "smtp.brisanetplanos.com.br"; // Seu endereço de host SMTP
 $mail->SMTPAuth = true; // Define que será utilizada a autenticação -  Mantenha o valor "true"
 $mail->Port = 587; // Porta de comunicação SMTP - Mantenha o valor "587"
 $mail->SMTPSecure = false; // Define se é utilizado SSL/TLS - Mantenha o valor "false"
 $mail->SMTPAutoTLS = false; // Define se, por padrão, será utilizado TLS - Mantenha o valor "false"
 $mail->Username = 'contato@brisanetplanos.com.br'; // Conta de email existente e ativa em seu domínio
 $mail->Password = 'bruno2205'; // Senha da sua conta de email
 // DADOS DO REMETENTE
 $mail->Sender = "contato@brisanetplanos.com.br"; // Conta de email existente e ativa em seu domínio
 $mail->From = "contato@brisanetplanos.com.br"; // Sua conta de email que será remetente da mensagem
 $mail->FromName = "Form do site"; // Nome da conta de email
 // DADOS DO DESTINATÁRIO
 $mail->AddAddress('contato@brisanetplanos.com.br', 'Nome - Recebe1'); // Define qual conta de email receberá a mensagem
 //$mail->AddAddress('recebe2@dominio.com.br'); // Define qual conta de email receberá a mensagem
 //$mail->AddCC('copia@dominio.net'); // Define qual conta de email receberá uma cópia
 //$mail->AddBCC('copiaoculta@dominio.info'); // Define qual conta de email receberá uma cópia oculta
 // Definição de HTML/codificação
 $mail->IsHTML(true); // Define que o e-mail será enviado como HTML
 $mail->CharSet = 'utf-8'; // Charset da mensagem (opcional)
 // DEFINIÇÃO DA MENSAGEM
 $mail->Subject  = "Formulário de Contato"; // Assunto da mensagem
 $mail->Body .= " Planos internet: ".$_POST['plano']."
"; // Texto da mensagem
$mail->Body .= " Planos tv: ".$_POST['plano-2']."
"; // Texto da mensagem
 $mail->Body .= " Nome: ".$_POST['nome']."
"; // Texto da mensagem
 $mail->Body .= " Data de nascimento: ".$_POST['nascimento']."
"; // Texto da mensagem

$mail->Body .= " CPF: ".$_POST['cpf']."
"; // Texto da mensagem

$mail->Body .= " RG: ".$_POST['rg']."
"; // Texto da mensagem

$mail->Body .= " Endereço: ".$_POST['endereco']."
"; // Texto da mensagem 
$mail->Body .= " Complemento: ".$_POST['complemento']."
"; // Texto da mensagem
$mail->Body .= " CEP: ".$_POST['cep']."
"; // Texto da mensagem

$mail->Body .= " Ponto de referência : ".$_POST['referencia']."
"; // Texto da mensagem 

$mail->Body .= " E-mail: ".$_POST['email']."
"; // Texto da mensagem

$mail->Body .= " Contato 1: ".$_POST['contato-1']."
"; // Texto da mensagem

$mail->Body .= " Contato 2: ".$_POST['contato-2']."
"; // Texto da mensagem




 // ENVIO DO EMAIL
 $enviado = $mail->Send();
 // Limpa os destinatários e os anexos
 $mail->ClearAllRecipients();
 // Exibe uma mensagem de resultado do envio (sucesso/erro)
 if ($enviado) {

   echo "<script>alert('Entraremos em contato em breve...')</script>";
   header ("Location: ../redirect.html");

 } else {
   echo "Não foi possível enviar o e-mail.";
   echo "Detalhes do erro: " . $mail->ErrorInfo;
 }
