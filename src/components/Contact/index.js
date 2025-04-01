import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    const response = await fetch("https://formspree.io/f/xovekary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Erro ao enviar a mensagem.");
    }
  };

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
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputWrapper>

          <TextArea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></TextArea>
          <Submit type="submit">
            <FaPaperPlane />
            Enviar
          </Submit>
        </Form>
        {status && <p>{status}</p>}
      </ContactForm>
    </Container>
  );
};

export default Contact;
