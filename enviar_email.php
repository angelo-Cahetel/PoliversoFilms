<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["name"];
    $email = $_POST["email"];
    $mensagem = $_POST["message"];
    $categoria = $_POST["category"];

    $destinatario = "poliversofilms@gmail.com";//substitir o email depois
    $assunto = "Nova mesagem do formulario de contato";

    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "Email: $email\n";
    $corpo_email .= "Mensagem: $mensagem\n";
    $corpo_email .= "Categoria: $categoria\n";
    
    mail($destinatario, $assunto, $corpo_email,);

    echo "Mensagem enviada com sucesso!";
} else {
    echo "Erro ao processar o formulário.";
}
?>