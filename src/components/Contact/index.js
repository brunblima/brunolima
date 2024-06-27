import React from "react";
import {
  Container,
  Header,
  Separator,
  ContactForm,
  Form,
  MapBox,
  Submit,
  TextArea,
  InputWrapper,
} from "./styles";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <Container>
      <Header>
        <h2>Contato</h2>
        <Separator />
      </Header>

      <MapBox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126682.29550433384!2d-34.963999355071316!3d-7.1466015354979096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace839019aa3d7%3A0x6e414a9c6d26db34!2sJo%C3%A3o%20Pessoa%2C%20State%20of%20Para%C3%ADba%2C%20Brazil!5e0!3m2!1sen!2sbd!4v1718219964397!5m2!1sen!2sbd"
            width="400"
            height="300"
            loading="lazy"
          />
        </figure>
      </MapBox>

      <ContactForm>
        <h3>Formulario para Contato</h3>
        <Form>
          <InputWrapper>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </InputWrapper>

          <TextArea placeholder="Message"></TextArea>
          <Submit type="submit">
            {" "}
            <FaPaperPlane />
            Enviar
          </Submit>
        </Form>
      </ContactForm>
    </Container>
  );
};

export default Contact;
