const contenedorContacto = document.querySelector("[data-contact]");

const contenido = `<div class="contact__subcontainer">
                    <div class="contact__container__logo">
                        <img src="assets/img/e-zone.png" alt="" class="contact__logo">
                    </div>
                    <div class="contact__container__links">
                        <a href="" class="contact__link">Quiénes somos</a>
                        <a href="" class="contact__link">Política de privacidad</a>
                        <a href="" class="contact__link">Programa de fidelidad</a>
                        <a href="" class="contact__link">Nuestras tiendas</a>
                        <a href="" class="contact__link">Quiero ser franquiciado</a>
                        <a href="" class="contact__link">Anúncie aquí</a>
                    </div>
                    </div>
                    <div class="contact__container__form">
                    <form action="" class="contact__form" data-contact>
                        <h4 for="" class="contact__form__label">
                            Hable con nosotros
                        </h4>
                        <input type="text" class="contact__form__name" name="name" id="contact-name" placeholder="Nombre">
                        <textarea class="contact__form__textarea" name="message" id="contact-message" cols="30" rows="10" placeholder="Escribe tu mensaje"></textarea>
                        <button class="contact__form__button" id="contact-btn">Enviar mensaje</button>
                    </form>
                    </div>`;

contenedorContacto.innerHTML = contenido;

