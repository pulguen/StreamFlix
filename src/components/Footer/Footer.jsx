import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-lg-start text-muted">
      <Container className="pt-4">
        <Row className="justify-content-between">
          <Col md="4" className="mb-4">
            <h6 className="text-uppercase fw-bold logo">StreamFlix</h6>
            <p>
              Tu destino definitivo para disfrutar de una amplia variedad de películas y series en línea.
              Explora un extenso catálogo que abarca desde los éxitos de taquilla más recientes hasta clásicos atemporales.
            </p>
          </Col>
          <Col md="2" className="mb-4">
            <h6 className="text-uppercase fw-bold">Comisión 23644</h6>
            <p className="text-reset">Grupo 4</p>
            <p className="text-reset">Lunes y Miércoles</p>
            <p className="text-reset">10:30 a 12:00 Hs.</p>
          </Col>
          <Col md="3" className="mb-4">
            <h6 className="text-uppercase fw-bold">Enlaces Útiles</h6>
            <p>
              <a href="#!" className="text-reset">
                Home
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                link
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Documentación
              </a>
            </p>
          </Col>
          <Col md="3" className="mb-4">
            <h6 className="text-uppercase fw-bold">Contacto</h6>
            <p className="fas fa-home me-2">Codo a Codo 4.0</p>
            <p className="fas fa-envelope me-2">io.codoacodo@bue.edu.ar</p>
            <p className="fas fa-phone me-2">6076-6000 Int. 5053</p>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Agencia de Aprendizaje a lo largo de la vida
      </div>
    </footer>
  );
};

export default Footer;
