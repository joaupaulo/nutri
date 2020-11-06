
import React, { useEffect } from 'react';
import '../principal/index.css';
import Aos from "aos";
import "aos/dist/aos.css";
import banner1 from '../../Assets/imagens/banner1.jpg';
import banner2 from '../../Assets/imagens/feirao.jpg';
import banner3 from '../../Assets/imagens/fitness.png';
import banner5 from '../../Assets/imagens/banner5.png';
import banner6 from '../../Assets/imagens/banner6.jpg';


const Conteudo = () => {

  useEffect( () => {
    Aos.init({duration : 2000});
  }, []);

  return (
    <>
      <section> <nav>
        <div> <h1> Monica Nunes </h1>
          <h3>Nutricionista</h3>
        </div>
        <ul>
          <li><a>home</a></li>
          <li><a>serviços</a></li>
          <li><a>blog</a></li>
          <li><a >quem é monica nunes ? </a></li>
        </ul>
        <div className="socialink">
          <i href="https://www.facebook.com/" class="fab fa-facebook-f"></i>
          <i href="https://www.instagram.com/joaupaulo_/" class="fab fa-instagram"></i></div>
      </nav>
      </section>
      <div className="banner">
        <div> <img src={banner1}></img> </div>
      </div>


      <div className="conteudo" >
        <h1> Dieta Fléxivel </h1>
        <h3> Você já ouviu falar na <strong>  dieta flexível? </strong>  Muito famosa lá fora e ganhando força no Brasil, ela busca, em vez de focar nas <strong> calorias, contabilizar os macronutrientes – proteínas, gorduras e carboidratos da alimentação. </strong> </h3>
        <h3>Em inglês, <strong> ela é chamada de If it fit your macros (IIFYM),</strong> que em tradução livre significa <strong>  “se couber nos seus macros[nutrientes]”. </strong> </h3>
        <h3> Essa forma de combinar os alimentos permite muito mais flexibilidade, pois todos os tipos podem ser apreciados, desde que se encaixem nos macros do dia.</h3>
        <button >  <a href="#">  SAIBA MAIS </a> </button>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GTIoj87CR1c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>


      <div data-aos="fade-up"  className="store">
        <div > <h1> MyFitnessPall</h1> </div>
        <h3><strong>calculadora de calorias </strong> mais rápida e fácil de usar, 100% GRATIS. Com o maior banco de dados de alimentos de qualquer contador de calorias <strong> (mais de 5 milhões de alimentos)  </strong> , e com registros rapidíssimos de alimentos e exercícios, nós vamos ajudá-lo a perder peso, ficar em boa forma e manter sua saúde. <strong>Não há aplicativo de dieta melhor para emagrecer - ponto final.</strong> </h3>
        <div > <img src={banner3}></img> </div>
        <h3> Interface do aplicativo,nesta imagem você pode ver como funciona a contagem de calórias </h3>
        <div><img src={banner5}></img> </div>
        <div> <img src={banner6}></img> </div>
      </div>




      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.2376293009!2d-38.37842625572786!3d-12.93792038984927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161775f71fcf81%3A0xc5b8bd4b3acc3031!2sItapu%C3%A3%2C%20Salvador%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1604531782930!5m2!1spt-BR!2sbr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" style={{ width: '100%', margintop: '100%' }}></iframe>
      <footer>
        <div> <h1> M. Nunes </h1>
          <h3>Nutricionista</h3>
        </div>

        <div> <h2> INSTITUCIONAL</h2>
          <hr />
          <h3> <a href="#" >  Quem sou eu ? </a>  </h3>
          <h3 > <a href="#" > Politica de privacidade ? </a>  </h3>
          <h3> <a href="#" > Termos de uso </a> </h3>
        </div>
        <div> <h2> SERVIÇO </h2>
          <hr />
          <h3> <a href="#" > Trabalhe conosco </a>  </h3>
          <h3> <a href="#" > Fale conosco  </a> </h3>
        </div>
        <div> <h2> CANAIS </h2>
          <hr />
          <div>
            <i href="https://www.facebook.com/" class="fab fa-facebook-f"></i>
            <i href="https://www.instagram.com/joaupaulo_/" class="fab fa-instagram"></i></div>
        </div>
      </footer>

    </>
  )




}



export default Conteudo;