<!DOCTYPE html>
<html lang="pt-br">

<head>
	<meta charset="utf-8">
	<title>Brisanet Telecomunicações</title>
	<link rel="stylesheet" type="text/css" href="style.css">			
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" type="image/x-icon" href="pics/favicon.ico">
	<meta name="theme-color" content="#083D93">
	<meta name="apple-mobile-web-app-status-bar-style" content="#083D93" />
	<meta name="msapplication-navbutton-color" content="#083D93" />
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link rel="stylesheet" type="text/css" href="wickedcss.min.css"> 	
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">	
	<script src="https://unpkg.com/scrollreveal"></script>   
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
   <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>


<body id="teste" onLoad="slide1 (), slide4 ()">  



	<!--preloader-inicio-->
	
	
    <div class="overlay">
        <div class="loader"></div>
    </div>

   

<!--preloader-final-->
<a class="link-wpp" href="#" target="_blank">	
  <div class="container-wpp">	

		<i class="fa-brands fa-whatsapp"></i> 

  </div>		
</a>
<!--cabecalho-initial-->

	<header class="cabecalho">

		<div class="container-pre-nav">

			<span class="text">Você está em <b>Brisanet vendas</b></span>
			

		</div>

	<div class="container-nav">

 
			<a class="logo" href="index.html"><img class="img-logo" src="imgs/logo.webp"></a>	

				<ul class="nav-desktop">
				    <a href="#"><li>Início</li></a>						

				     <li class="nav-item dropdown">
				      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
				        Planos
				      </a>

				      <div class="dropdown-menu">

				        <a class="dropdown-item" href="#">Internet</a>
				        <a class="dropdown-item" href="#">Planos de TV</a>
				     
				      </div>
				    </li>
					

				    <a href="#"><li>Contato</li></a>

					<a href="#"><li>Sobre</li></a> 			

				</ul> 			


				<!--menu mobile-->

					<div class="wrapper">
					<div class="menu">
						<div class="hamburger_menu"> 
							 
						   <div class="toggle" onclick="menuToggle(this);"> 		     	

				     		    <div class="menu-bar-1"></div>
				     	     	<div class="menu-bar-2"></div>
				     		    <div class="menu-bar-3"></div>   		
		     	
		   	         	   </div> 
						
						</div>

						

						<div class="dd_wrap">
							<ul>




							   <li>
								   <a href="#" class="a_parent">
									    <div class="wrap">
										        <span class="icon">
											        
										        </span>
										        <span class="text">Início</span>
									    </div>
								   </a>
							   </li>



							    <li>
							       <a href="#" class="a_parent">
									    <div class="wrap">
										           <span class="icon">
											          
										           </span> 
											        <span class="text">Planos</span>
										</div>
									</a>
										    <div class="dd_menu">
										      	<ul>

												<li>
													<a href="#">
														<div class="wrap">
															<span class="icon">
																
															</span>
															<span class="text">
																Internet
															</span>
														</div>
													</a>
												</li>  	

												

												<li>
													<a href="#">
														<div class="wrap">
															<span class="icon">
																
															</span>
															<span class="text">Planos de Tv</span>
														</div>
													</a>
												</li>

											</ul>
										</div>
									</li>
									

									<li>
										<a href="#"  class="a_parent">
											<div class="wrap">
												<span class="icon">
													
												</span>
												
												<span class="text">Contato</span>
											</div>
										</a>
									</li>		


									<li>
										<a href="#"  class="a_parent">
											<div class="wrap">
												<span class="icon">
													
												</span>
												
												<span class="text">Sobre</span>
											</div>
										</a>
									</li>		 									
																	
							</ul>
						</div>
					</div>
				</div> 	 	

	</div> 

			
		
			


				
			
	</div>   
		

	</header>

	

	<main class="container-main">
		
<!-- ============================================================formulario-inicio======================================-->

<div class="container-formulario">
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

	 
	</main>


		<footer class="rodape">

		

		<div class="container-rp">

			<div class="element-rp-1"><img src="pics/logo-horinzontal-white.svg"></div>


			<div class="element-rp-2">
				<p>Brisanet Telecomunicações S.A. - CNPJ: 04.601.397/0001-28 <br> Rodovia CE - 138, km 14 - Zona Rural, Pereiro/CE</p>
			</div>
			
		</div>
		
		<span class="id-rp">Agente autorizado</span>	

		<div class="ut-rp">
			<span class="ut-rp-tx">©2022 Brisanet Vendas - Todos os direitos reservados</span>
		</div>	

	</footer>



			

<script type="text/javascript" src="overlay.js"></script>
<script type="text/javascript" src="toggle.js"></script>
<script type="text/javascript" src="dropdown.js"></script>
<script src="https://kit.fontawesome.com/6b5359d6c2.js" crossorigin="anonymous"></script>


</body> 
</html>			