<!DOCTYPE html>
<html lang="pt-br">

<head>
	<meta charset="utf-8">
	<title>Brisanet Telecomunicações</title>
	<link rel="stylesheet" type="text/css" href="style.css">			
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" type="image/x-icon" href="../pics/favicon.ico">
	<meta name="theme-color" content="#083D93">
	<meta name="apple-mobile-web-app-status-bar-style" content="#083D93" />
	<link rel="stylesheet" type="text/css" href="../wickedcss.min.css">
	<meta name="msapplication-navbutton-color" content="#083D93" />
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">	
	
				

</head>


<body onLoad="slide1 ()">  

	<!--preloader-inicio-->
	
	
    <div class="overlay">
        <div class="loader"></div>
    </div>

    <script>
    	const overlay = document.querySelector(".overlay");

		// Quando a página for totalmente carregada, o overlay será desabilitado e a página
		// irá aparecer.

		window.addEventListener("load", function () {
		    overlay.style.display = "none";
		})
    </script>

<!--preloader-final-->

<!-- botao whatsapp inicio -->
	<a class="pulse" href="https://api.whatsapp.com/send?phone=558281380830&text=Oi%2C%20vim%20pelo%20site%20da%20Brisanet%20e%20gostaria%20de%20contratar%20o%20servi%C3%A7o" target="_blank"><i class="fab fa-whatsapp" aria-hidden="true"></i></a>



	<script src="https://kit.fontawesome.com/3370153949.js" crossorigin="anonymous"></script>


	<!-- botao whatsapp final -->
	

<!--cabecalho-initial-->

	<header class="cabecalho">

		<div class="container-pre-nav">

			<span class="text">Você está em <b>Brisanet vendas</b></span>
			

		</div>

		<div class="container-nav">

 		
			<a href="https://brisanetplanos.com.br/"><img class="logo" src="../pics/logo.webp"></a>				
			<hr class="line">
			<a class="botao" href="https://api.whatsapp.com/send?phone=558281380830&text=Oi%2C%20vim%20pelo%20site%20da%20Brisanet%20e%20gostaria%20de%20contratar%20o%20servi%C3%A7o" target="_blank"> ASSINE JÁ</a>
			
		</div> 

 
		

	</header>

	

<!--cabecalho-end--> 



<!-- ============================================================formulario-inicio======================================-->

<div class="container">
	<br>
   
		<form class="form-camp" class="form-horizontal" method="POST" action="envia.php" id="contato" enctype="multipart/form-data">
		  <fieldset>

			<!-- Título do formulário -->
			<legend>Cadastro</legend> 

				<!-- Campo: planos -->
			<div>
			  <label for="plano">Planos de Internet</label>  
				<div>
				    <select class="form-1" id="plano" name="plano"> 

				    	  <option  selected></option>							  
						  <option value="50 Mega">50 Mega - R$ 73,00</option>
						  <option value="100 Mega">100 Mega - R$ 83,00</option>
						  <option value="200 Mega">200 Mega - R$ 99,90</option>
						  <option value="500 Mega">500 Mega - R$ 99,90 - PROMO</option>
						  <option value="500 Mega">1 Giga - R$ 499,90</option>
						  
		    		</select>	

				</div>
			</div> 


				<!-- Campo: planos-2 -->
			<div>
			  <label for="plano-2">Planos de Tv</label>  
				<div>
				    <select class="form-1" id="plano-2" name="plano-2"> 
				    	  <option  selected></option>
						  <option value="PLANO BÁSICO">BÁSICO - R$ 29,90</option>
						  <option value="PLANO HD">HD - R$ 59,90</option>
						  <option value="PLANO HD FAMÍLIA">HD FAMÍLIA - R$ 89,90</option>
						  <!--<option value="PLANO HD PREMIUM">HD PREMIUM - R$ 124,90</option>
						  <option value="PLANO HD CINE HBO">HD CINE HBO - R$ 159,90</option>-->
		    		</select>	

				</div>
			</div> 

					

			<!-- Campo: Nome -->
			<div>
			  <label for="nome">Nome completo*</label>  
				<div>
				  <input class="form-1" id="nome" name="nome" placeholder="Nome Completo"  required="" type="text">
				</div>
			</div> 

				<!-- Campo: Data de nascimento --> 
			<div>
			  <label for="nascimento">Data de nascimento*</label>  
				<div>
				  <input class="form-1" id="nascimento" name="nascimento" placeholder="Selecione uma data"  required="" type="date">
				</div>
			</div>

				 <!-- Campo: cpf--> 
			<div>
			  <label for="cpf">CPF</label>  
				<div>
				  
					<input class="form-1" name="cpf" type="text" placeholder="Apenas números" minlength="0" maxlength="14" id="cpf" aria-invalid="false">
				</div>
			</div>

				<!-- Campo: rg--> 
			<div>
			  <label for="rg">RG</label>  
				<div>
				  <input class="form-1" id="rg" name="rg" placeholder="Apenas números"  minlength="0" maxlength="12"  type="text">
				</div>
			</div>
		

				<!-- Campo: endereço -->
			<div>
			  <label for="endereco">Endereço*</label>  
				<div>
				  <input class="form-1" id="endereco" name="endereco" placeholder="Logradouro "  required="" type="text">
				</div>
			</div> 

					<!-- Campo: complemento -->
			<div>
			  <label for="complemento">Complemento</label>  
				<div>
				  <input class="form-1" id="complemento" name="complemento" placeholder="Complemento "  required="" type="text">
				</div>
			</div> 

				<!-- Campo: cep -->
			<div>
			  <label for="cep">CEP*</label>  
				<div>
				  <input class="form-1" id="cep" name="cep" placeholder="Apenas números" maxlength="9" minlength="8"  required="" type="text">
				</div>
			</div>

				<!-- Campo: ponto de referencia-->
			<div>
			  <label for="referencia">Ponto de referência</label>  
				<div>
				  <input class="form-1" id="referencia" name="referencia" placeholder="Digite aqui"  required="" type="text">
				</div>
			</div>

					<!-- email -->
			<div>
			  <label for="email">E-mail</label>  
				<div>
				  <input class="form-1" id="email" name="email" placeholder="Apenas números"  required="" type="text">
				</div>
			</div> 

			
				<!-- contatos -1 -->
			<div>
			  <label for="contato-1">Contato 1*</label>  
				<div>
				  <input class="form-1" id="contato-1" name="contato-1" placeholder="Apenas números" maxlength="11" minlength="11"    required="" type="text">
				</div>
			</div> 

				<!-- contatos-2-->
			<div>
			  <label for="contato-2">Contato 2*</label>  
				<div>
				  <input class="form-1" id="contato-2" name="contato-2" placeholder="Apenas números" maxlength="11" minlength="11"    required="" type="text">
				</div>
			</div>
			
			
			
			
		


			
			
			
			<!-- Botão Enviar -->
			<center>
			<div>
			  <label for="submit"></label>
				<div>
				  <button class="button-form" type="submit">Enviar</button>
				</div>
			</div>

		  </fieldset>
		</form>

	</div> 




<!-- ============================================================formulario-final======================================-->

	
	<footer class="rodape">

		<!-- Inicia codigo Contador -->
		<div class="contador" align="center"><a title='Contador de Visitas do MegaContador' href='https://megacontador.com.br/' ><img src='https://megacontador.com.br/img-n2QpuCEd471FzMXF-15.gif' border='0' alt='Contador de visitas'></a></div>
		<!-- Fim do codigo Contador -->


		<div class="container-rp">

			<div class="element-rp-1"><img src="../pics/logo-horinzontal-white.svg"></div>


			<div class="element-rp-2">
				<p>Brisanet Telecomunicações S.A. - CNPJ: 04.601.397/0001-28 <br> Rodovia CE - 138, km 14 - Zona Rural, Pereiro/CE</p>
			</div>
			
		</div>
		
		<span class="id-rp">Agente autorizado</span>	

		<div class="ut-rp">
			<span class="ut-rp-tx">©2022 Brisanet Planos - Todos os direitos reservados</span>
		</div>	

	</footer>


</body> 
</html>