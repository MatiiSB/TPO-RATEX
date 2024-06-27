import React from 'react';
import './RatexPrivacyPolicy.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function RatexPrivacyPolicy() {
  return (
    <div className="ratex-privacy-policy">
      <h1>Políticas de Privacidad de Ratex</h1>

      <p>Ratex se compromete a proteger la privacidad de sus usuarios. Esta política de privacidad explica cómo recopilamos, usamos y divulgamos su información personal cuando utiliza nuestro sitio web o aplicaciones.</p>

      <h2>Información que recopilamos</h2>

      <p>Recopilamos la siguiente información personal cuando utiliza Ratex:</p>

      <ul>
        <li>Su nombre y dirección de correo electrónico</li>
        <li>Su contraseña (si crea una cuenta)</li>
        <li>Las reseñas que escribe</li>
        <li>Su dirección IP</li>
        <li>Su navegador y sistema operativo</li>

      </ul>

      <p>También recopilamos información no personal, como su actividad en nuestro sitio web o aplicaciones, para mejorar nuestros servicios.</p>

      <h2>Cómo usamos su información</h2>

      <p>Usamos su información personal para los siguientes propósitos:</p>

      <ul>
        <li>Proporcionarle los servicios que solicita</li>
        <li>Mejorar nuestros servicios</li>
        <li>Contactarlo con información sobre Ratex</li>
        <li>Prevenir el fraude y el abuso</li>

      </ul>

      <p>No compartiremos su información personal con terceros sin su consentimiento, excepto en los siguientes casos:</p>

      <ul>
        <li>Cuando sea requerido por la ley</li>
        <li>Cuando sea necesario para proteger nuestros derechos</li>
        <li>Cuando sea necesario para investigar o prevenir fraudes</li>

      </ul>

      <h2>Su acceso a su información</h2>

      <p>Puede acceder y actualizar su información personal en cualquier momento iniciando sesión en su cuenta.</p>

      <h2>Seguridad de su información</h2>

      <p>Tomamos medidas para proteger su información personal contra pérdida, robo y uso no autorizado. Sin embargo, ninguna medida de seguridad es perfecta, y no podemos garantizar que su información personal esté completamente segura.</p>

      <h2>Cambios a esta política de privacidad</h2>

      <p>Podemos actualizar esta política de privacidad en cualquier momento. Le notificaremos de cualquier cambio publicando la política de privacidad actualizada en nuestro sitio web.</p>
    </div>
  );
}


export default RatexPrivacyPolicy;