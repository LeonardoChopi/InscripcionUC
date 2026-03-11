/**
 * aviso-privacidad.js
 * Muestra un aviso de almacenamiento local cada vez que el usuario entra a la página.
 *
 * USO CORRECTO:
 *   <script src="aviso-privacidad.js"></script>
 *
 * IMPORTANTE: NO usar type="module". Este script debe cargarse como script clásico.
 *   ❌  <script type="module" src="aviso-privacidad.js"></script>
 *   ✅  <script src="aviso-privacidad.js"></script>
 *
 * Colocar antes del cierre de </body>. No requiere dependencias externas.
 */

(function () {
  const STORAGE_KEY = 'aviso_privacidad_aceptado';

  // ── Estilos del modal ──────────────────────────────────────────────────────
  const styles = `
    #aviso-overlay {
      position: fixed;
      inset: 0;
      background: rgba(10, 20, 35, 0.6);
      backdrop-filter: blur(4px);
      z-index: 99999;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding: 24px;
      animation: aviso-fade-in 0.25s ease;
    }
    @keyframes aviso-fade-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    #aviso-box {
      background: #faf9f6;
      border: 1px solid #c8c3b8;
      border-radius: 8px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.22);
      max-width: 560px;
      width: 100%;
      padding: 24px 26px 20px;
      font-family: 'IBM Plex Sans', system-ui, sans-serif;
      animation: aviso-slide-up 0.28s cubic-bezier(0.22, 1, 0.36, 1);
    }
    @keyframes aviso-slide-up {
      from { transform: translateY(20px); opacity: 0; }
      to   { transform: translateY(0);    opacity: 1; }
    }
    #aviso-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 14px;
    }
    #aviso-icon {
      width: 38px;
      height: 38px;
      background: #e8f4ed;
      border: 1px solid #b2d9bf;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    #aviso-title {
      font-size: 0.95rem;
      font-weight: 600;
      color: #1a1814;
      margin: 0;
    }
    #aviso-subtitle {
      font-size: 0.72rem;
      color: #7a7670;
      margin: 2px 0 0;
      font-family: 'IBM Plex Mono', monospace;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    #aviso-body {
      font-size: 0.855rem;
      color: #3a3632;
      line-height: 1.65;
      margin-bottom: 18px;
    }
    #aviso-body strong {
      color: #1a1814;
      font-weight: 600;
    }
    #aviso-alerta {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      background: #fef8e7;
      border: 1px solid #e0c97a;
      border-radius: 4px;
      padding: 10px 13px;
      margin-top: 12px;
      font-size: 0.82rem;
      color: #6b5000;
      line-height: 1.5;
    }
    #aviso-alerta svg {
      flex-shrink: 0;
      margin-top: 1px;
    }
    #aviso-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }
    #aviso-check-label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.8rem;
      color: #7a7670;
      cursor: pointer;
      user-select: none;
    }
    #aviso-check {
      width: 15px;
      height: 15px;
      accent-color: #1a3a5c;
      cursor: pointer;
      flex-shrink: 0;
    }
    #aviso-btn {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.75rem;
      letter-spacing: 0.06em;
      padding: 8px 22px;
      background: #1a3a5c;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      transition: background 0.15s;
      white-space: nowrap;
    }
    #aviso-btn:hover { background: #2e6da4; }
  `;

  // ── HTML del aviso ─────────────────────────────────────────────────────────
  function crearAviso() {
    // Inyectar estilos
    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);

    // Overlay
    const overlay = document.createElement('div');
    overlay.id = 'aviso-overlay';

    overlay.innerHTML = `
      <div id="aviso-box" role="dialog" aria-modal="true" aria-labelledby="aviso-title">
        <div id="aviso-header">
          <div id="aviso-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                 stroke="#1d5c3a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <div>
            <p id="aviso-title">Almacenamiento local de datos</p>
            <p id="aviso-subtitle">Aviso de privacidad</p>
          </div>
        </div>

        <div id="aviso-body">
          Esta página guarda información <strong>únicamente en tu dispositivo</strong>
          mediante <code>localStorage</code>, una tecnología del navegador que almacena
          datos de forma local. Ningún dato es enviado a servidores externos ni
          compartido con terceros.
          <br><br>
          Los datos que se almacenan incluyen las <strong>materias inscritas</strong>
          y el <strong>array de unidades curriculares</strong> que hayas cargado,
          de manera que se mantengan disponibles al recargar o volver a abrir la página.

          <div id="aviso-alerta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="#6b5000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <span>
              <strong>Recomendación:</strong> no ingreses datos sensibles como contraseñas,
              documentos de identidad, información bancaria u otros datos personales.
              El almacenamiento local puede ser accedido por cualquier persona con acceso
              físico al dispositivo o al navegador.
            </span>
          </div>
        </div>

        <div id="aviso-footer">
          <label id="aviso-check-label">
            <input type="checkbox" id="aviso-check">
            No volver a mostrar este aviso
          </label>
          <button id="aviso-btn">Entendido</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // ── Lógica de cierre ────────────────────────────────────────────────────
    function cerrar() {
      // Buscar el checkbox dentro del overlay ya montado, no con getElementById
      var checkbox = overlay.querySelector('#aviso-check');
      var noMostrar = checkbox ? checkbox.checked : false;
      if (noMostrar) {
        try { localStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
      }
      overlay.style.transition = 'opacity 0.18s ease';
      overlay.style.opacity = '0';
      setTimeout(function () {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, 200);
    }

    // Botón principal — buscar dentro del overlay, no globalmente
    var btnAceptar = overlay.querySelector('#aviso-btn');
    if (btnAceptar) btnAceptar.addEventListener('click', cerrar);

    // Cerrar con ESC — registrar después de que el modal ya está en el DOM
    function escHandler(e) {
      if (e.key === 'Escape') {
        cerrar();
        document.removeEventListener('keydown', escHandler);
      }
    }
    document.addEventListener('keydown', escHandler);
  }

  // ── Punto de entrada ───────────────────────────────────────────────────────
  function init() {
    // Si el usuario eligió "no volver a mostrar", respetar su elección
    try {
      if (localStorage.getItem(STORAGE_KEY) === '1') return;
    } catch (e) {}

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', crearAviso);
    } else {
      crearAviso();
    }
  }

  init();
})();
