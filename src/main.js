import './style.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

// Datos de vehículos reales
const catalogData = [
    {
        id: 1,
        model: 'AUDI A4',
        brand: 'Audi',
        img: '/AUDI A4/audia41.jpeg',
        images: ['/AUDI A4/audia41.jpeg', '/AUDI A4/audia42.jpeg', '/AUDI A4/audia43.jpeg', '/AUDI A4/audia44.jpeg'],
        price: 'Consultar precio',
        desc: 'Para más información sobre este vehículo o solicitar una cotización, llena el formulario inferior especificando cómo podemos ayudarte.'
    },
    {
        id: 2,
        model: 'BMW325I',
        brand: 'BMW',
        img: '/BMW325I/bmw3251.jpeg',
        images: ['/BMW325I/bmw3251.jpeg', '/BMW325I/bmw3252.jpeg', '/BMW325I/bmw3253.jpeg'],
        price: 'Consultar precio',
        desc: 'Para más información sobre este vehículo o solicitar una cotización, llena el formulario inferior especificando cómo podemos ayudarte.'
    },
    {
        id: 3,
        model: 'BMWX5',
        brand: 'BMW',
        img: '/BMWX5/bmwx51.jpeg',
        images: ['/BMWX5/bmwx51.jpeg', '/BMWX5/bmwx52.jpeg', '/BMWX5/bmwx53.jpeg', '/BMWX5/bmwx54.jpeg'],
        price: 'Consultar precio',
        desc: 'Para más información sobre este vehículo o solicitar una cotización, llena el formulario inferior especificando cómo podemos ayudarte.'
    },
    {
        id: 4,
        model: 'DODGE CHALLENGER',
        brand: 'Dodge',
        img: '/DODGE CHALLENGER/dodger1.jpeg',
        images: ['/DODGE CHALLENGER/dodger1.jpeg', '/DODGE CHALLENGER/dodger2.jpeg', '/DODGE CHALLENGER/dodger3.jpeg', '/DODGE CHALLENGER/dodger4.jpeg'],
        price: 'Consultar precio',
        desc: 'Para más información sobre este vehículo o solicitar una cotización, llena el formulario inferior especificando cómo podemos ayudarte.'
    },
    {
        id: 5,
        model: 'DODGE DURANGO',
        brand: 'Dodge',
        img: '/DODGE DURANGO/dodged1.jpeg',
        images: ['/DODGE DURANGO/dodged1.jpeg', '/DODGE DURANGO/dodged2.jpeg', '/DODGE DURANGO/dodged3.jpeg'],
        price: 'Consultar precio',
        desc: 'Para más información sobre este vehículo o solicitar una cotización, llena el formulario inferior especificando cómo podemos ayudarte.'
    },
    {
        id: 6,
        model: 'GMC',
        brand: 'GMC',
        img: '/GMC/gmc1.jpeg',
        images: ['/GMC/gmc1.jpeg', '/GMC/gmc2.jpeg', '/GMC/gmc3.jpeg', '/GMC/gmc4.jpeg'],
        price: 'Consultar precio',
        desc: 'Para más información sobre este vehículo o solicitar una cotización, llena el formulario inferior especificando cómo podemos ayudarte.'
    },
    {
        id: 7,
        model: 'MAZDA',
        brand: 'Mazda',
        img: '/MAZDA/mazda1.jpeg',
        images: ['/MAZDA/mazda1.jpeg', '/MAZDA/mazda2.jpeg', '/MAZDA/mazda3.jpeg', '/MAZDA/mazda4.jpeg', '/MAZDA/mazda5.jpeg'],
        price: 'Consultar precio',
        desc: 'Para más información sobre este vehículo o solicitar una cotización, llena el formulario inferior especificando cómo podemos ayudarte.'
    },
    {
        id: 8,
        model: 'DUCATI PANIGALE V4',
        brand: 'Ducati',
        img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800',
        images: ['https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800'],
        price: 'Consultar precio',
        desc: 'La cumbre de las superbikes. Tecnología de MotoGP para la calle. Una experiencia de conducción inigualable.'
    },
    {
        id: 9,
        model: 'BMW S1000RR',
        brand: 'BMW Motorrad',
        img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800',
        images: ['https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800'],
        price: 'Consultar precio',
        desc: 'Diseñada para el circuito, optimizada para la carretera. Potencia pura y agilidad extrema.'
    },
    {
        id: 10,
        model: 'HARLEY-DAVIDSON FAT BOY',
        brand: 'Harley-Davidson',
        img: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&q=80&w=800',
        images: ['https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&q=80&w=800'],
        price: 'Consultar precio',
        desc: 'Un ícono de la carretera. Estilo clásico con el músculo moderno que solo Harley puede ofrecer.'
    }
];

// Elementos del DOM generales
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Funciones
// Funciones
function renderCatalog() {
    const catalogContainer = document.getElementById('catalog-container');
    if (!catalogContainer) return;

    catalogContainer.innerHTML = '';
    
    catalogData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card stagger-item';
        card.innerHTML = `
            <div class="card-img-container">
                <img src="${item.img}" alt="${item.model}" loading="lazy" onerror="this.src='https://via.placeholder.com/800x600?text=Imagen+Próximamente'">
                <div style="position: absolute; top: 1rem; right: 1rem; background: var(--color-accent); color: #000; padding: 0.3rem 0.8rem; font-weight: bold; border-radius: 4px; font-size: 0.8rem; text-transform: uppercase;">Disponible</div>
            </div>
            <div class="card-content">
                <span style="color: var(--color-accent); font-size: 0.65rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px;">${item.brand}</span>
                <h3 class="card-title" style="margin-top: 0.3rem; font-size: 1.1rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.model}</h3>
                <p style="font-weight: bold; font-size: 1rem; margin-top: 0.3rem; color: #fff;">${item.price}</p>
                <div class="card-actions">
                    <a href="/detalle.html?id=${item.id}" class="btn btn-secondary" style="padding: 0.6rem 0.4rem; font-size: 0.7rem; letter-spacing: 0.5px;">Ver detalles</a>
                    <a href="/detalle.html?id=${item.id}#contacto" class="btn btn-primary" style="padding: 0.6rem 0.4rem; font-size: 0.7rem; letter-spacing: 0.5px;">Cotizar</a>
                </div>
            </div>
        `;
        catalogContainer.appendChild(card);
    });
}

function renderFeaturedCatalog() {
    const featuredContainer = document.getElementById('featured-catalog');
    if (!featuredContainer) return;

    featuredContainer.innerHTML = '';
    
    // Tomar los primeros 3
    catalogData.slice(0, 3).forEach(item => {
        const card = document.createElement('div');
        card.className = 'card stagger-item';
        card.innerHTML = `
            <div class="card-img-container" style="position: relative;">
                <img src="${item.img}" alt="${item.model}" loading="lazy" onerror="this.src='https://via.placeholder.com/800x600?text=Imagen+Próximamente'">
                 <div style="position: absolute; top: 1rem; right: 1rem; background: var(--color-accent); color: #000; padding: 0.3rem 0.8rem; font-weight: bold; border-radius: 4px; font-size: 0.8rem; text-transform: uppercase;">Nuevo Ingreso</div>
            </div>
            <div class="card-content">
                <span style="color: var(--color-accent); font-size: 0.65rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px;">${item.brand}</span>
                <h3 class="card-title" style="margin-top: 0.3rem; font-size: 1.1rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.model}</h3>
                <p style="font-weight: bold; font-size: 1rem; margin-top: 0.3rem; color: #fff;">${item.price}</p>
                <div class="card-actions">
                    <a href="/detalle.html?id=${item.id}" class="btn btn-secondary" style="padding: 0.6rem 0.4rem; font-size: 0.7rem; letter-spacing: 0.5px;">Ver detalles</a>
                    <a href="/detalle.html?id=${item.id}#contacto" class="btn btn-primary" style="padding: 0.6rem 0.4rem; font-size: 0.7rem; letter-spacing: 0.5px;">Cotizar</a>
                </div>
            </div>
        `;
        featuredContainer.appendChild(card);
    });
}

function renderDetail() {
    const detalleContainer = document.getElementById('detalle-container');
    if (!detalleContainer) return;

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const item = catalogData.find(v => v.id === id);

    if (!item) {
        detalleContainer.innerHTML = `
            <div style="text-align: center; padding: 5rem 0;">
                <h2 style="font-size: 3rem; margin-bottom: 2rem;">Vehículo no encontrado</h2>
                <a href="/catalogo.html" class="btn btn-primary">Volver al catálogo</a>
            </div>
        `;
        return;
    }

    let thumbnailsHtml = item.images.map((img, index) => `
        <div class="thumbnail-wrapper ${index === 0 ? 'active' : ''}" onclick="changeMainImage(this, '${img}')">
            <img src="${img}" class="thumbnail" onerror="this.src='https://via.placeholder.com/800x600?text=Error'">
        </div>
    `).join('');

    const messageValue = `Hola, estoy interesado en el ${item.brand} ${item.model}. Por favor, envíenme más información.`;

    detalleContainer.innerHTML = `
        <div class="detail-grid">
            <div class="detail-visuals">
                <div class="detail-main-img-wrapper">
                    <img id="main-image" src="${item.img}" alt="${item.model}" onerror="this.src='https://via.placeholder.com/800x600?text=Imagen+Próximamente'">
                </div>
                <div class="thumbnails" style="display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 1rem;">
                    ${thumbnailsHtml}
                </div>
                
                <div style="background-color: var(--color-bg-card); padding: 3rem; border-radius: var(--border-radius); border: 1px solid rgba(255,255,255,0.05); margin-top: 3rem;">
                    <h3 style="margin-bottom: 2rem; color: #fff; font-size: 1.8rem;">Especificaciones Técnicas</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;">
                        <div class="spec-item-v2">
                            <span style="color: var(--color-accent); font-weight: bold; font-size: 0.9rem; text-transform: uppercase;">Condición</span>
                            <p style="font-size: 1.2rem; margin-top: 0.5rem;">Certificado</p>
                        </div>
                        <div class="spec-item-v2">
                            <span style="color: var(--color-accent); font-weight: bold; font-size: 0.9rem; text-transform: uppercase;">Transmisión</span>
                            <p style="font-size: 1.2rem; margin-top: 0.5rem;">Automática / Secuencial</p>
                        </div>
                        <div class="spec-item-v2">
                            <span style="color: var(--color-accent); font-weight: bold; font-size: 0.9rem; text-transform: uppercase;">Combustible</span>
                            <p style="font-size: 1.2rem; margin-top: 0.5rem;">Gasolina Premium</p>
                        </div>
                        <div class="spec-item-v2">
                            <span style="color: var(--color-accent); font-weight: bold; font-size: 0.9rem; text-transform: uppercase;">Kilometraje</span>
                            <p style="font-size: 1.2rem; margin-top: 0.5rem;">0 KM (Nuevo)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="detail-info" style="position: sticky; top: 120px;">
                <span style="color: var(--color-accent); font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">${item.brand}</span>
                <h1 style="font-size: clamp(2.5rem, 4vw, 4rem); margin-top: 1rem; margin-bottom: 1rem; line-height: 1;">${item.model}</h1>
                <p style="font-size: 2.5rem; font-weight: 800; color: #fff; margin-bottom: 2rem;">${item.price}</p>
                
                <p style="color: var(--color-text-muted); line-height: 1.8; font-size: 1.1rem; margin-bottom: 3rem;">
                    ${item.desc}
                </p>

                <div id="contacto" class="form-wrapper" style="padding: 2.5rem; background: var(--color-bg-card); width: 100%; border-radius: var(--border-radius); border: 1px solid rgba(255,255,255,0.1); box-shadow: var(--shadow-md);">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: #fff;">Quiero este vehículo</h3>
                    <form id="detail-cta-form" class="custom-form">
                        <input type="hidden" name="id" value="${item.id}">
                        <div class="form-group" style="margin-bottom: 1.5rem;">
                            <label style="font-size: 0.8rem; color: var(--color-accent);">NOMBRE</label>
                            <input type="text" name="nombre" placeholder="Tu nombre" required style="padding: 1rem;">
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div class="form-group" style="margin-bottom: 1.5rem;">
                                <label style="font-size: 0.8rem; color: var(--color-accent);">TELÉFONO</label>
                                <input type="tel" name="telefono" placeholder="Tu teléfono" required style="padding: 1rem;">
                            </div>
                            <div class="form-group" style="margin-bottom: 1.5rem;">
                                <label style="font-size: 0.8rem; color: var(--color-accent);">EMAIL</label>
                                <input type="email" name="email" placeholder="Tu email" required style="padding: 1rem;">
                            </div>
                        </div>
                        <div class="form-group" style="margin-bottom: 1.5rem;">
                            <label style="font-size: 0.8rem; color: var(--color-accent);">MENSAJE</label>
                            <textarea name="mensaje" required style="padding: 1rem;">${messageValue}</textarea>
                        </div>
                        <div style="display: grid; gap: 1rem; margin-top: 2rem;">
                            <button type="submit" class="btn btn-primary btn-block">Solicitar información</button>
                            <a href="https://wa.me/525652189129?text=${encodeURIComponent(messageValue)}" target="_blank" class="btn btn-secondary btn-block">Consultar vía WhatsApp</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
}

// Para usar por la vista de detalle
window.changeMainImage = function(element, src) {
    document.getElementById('main-image').src = src;
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
};

// Funciones de utilidad para Citas
function handleAppointments() {
    const appointmentForm = document.getElementById('appointment-form');
    const serviceInput = document.getElementById('app-service');

    if (!appointmentForm) return;

    // 1. Auto-llenado desde URL
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('servicio');
    if (serviceParam && serviceInput) {
        serviceInput.value = serviceParam;
    }

    // 2. Manejo de envío
    appointmentForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            nombre: document.getElementById('app-name').value,
            telefono: document.getElementById('app-phone').value,
            servicio: serviceInput.value,
            fecha: document.getElementById('app-date').value,
            hora: document.getElementById('app-time').value,
            comentarios: document.getElementById('app-comments').value,
            email: document.getElementById('app-email')?.value || 'no-email@elrayo.com',
            fechaRegistro: new Date().toLocaleString()
        };

        try {
            // Guardar localmente
            const citasExistentes = JSON.parse(localStorage.getItem('citas_el_rayo') || '[]');
            citasExistentes.push(formData);
            localStorage.setItem('citas_el_rayo', JSON.stringify(citasExistentes));

            // Llamada al backend
            const response = await fetch(`${API_URL}/api/citas`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.ok) {
                alert('¡Cita agendada! Hemos enviado una confirmación a tu correo.');
                appointmentForm.reset();
            } else {
                throw new Error(result.error || 'Error en el servidor');
            }
        } catch (error) {
            console.error('Error al agendar cita:', error);
            alert('¡Cita solicitada! Un asesor se pondrá en contacto contigo pronto para confirmar.');
            appointmentForm.reset();
        }
    });

    // 3. Botón de WhatsApp para Citas
    const btnContainer = appointmentForm.querySelector('.btn-submit-container') || appointmentForm.lastElementChild;
    const waBtn = document.createElement('button');
    waBtn.type = 'button';
    waBtn.className = 'btn btn-secondary';
    waBtn.style.width = '100%';
    waBtn.style.marginTop = '1rem';
    waBtn.innerText = 'Consultar Cita vía WhatsApp';
    waBtn.onclick = () => {
        const nombre = document.getElementById('app-name').value;
        const servicio = serviceInput.value;
        const fecha = document.getElementById('app-date').value;
        const msg = `Hola EL RAYO, soy ${nombre}. Me gustaría agendar una cita para el servicio de "${servicio}" el día ${fecha}. ¿Tienen disponibilidad?`;
        window.open(`https://wa.me/525652189129?text=${encodeURIComponent(msg)}`, '_blank');
    };
    btnContainer.appendChild(waBtn);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    renderFeaturedCatalog();
    renderDetail();
    handleAppointments();
});

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        if(navMenu) navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active'); 
    });
}

if (navLinks) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(navMenu) navMenu.classList.remove('active');
        });
    });
}

// Manejo de formularios mediante delegación (captura formularios dinámicos)
document.addEventListener('submit', async (e) => {
    const form = e.target;
    
    // El formulario de citas se maneja por separado en handleAppointments
    if (form.id === 'appointment-form') return;

    if (form.tagName === 'FORM') {
        e.preventDefault();
        
        // Recoger datos del formulario
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            // Llamada al backend
            const response = await fetch(`${API_URL}/api/contacto`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.ok) {
                alert('¡Gracias! Hemos recibido tu solicitud y enviado un correo de confirmación.');
                form.reset();
            } else {
                throw new Error(result.error || 'Error desconocido');
            }
        } catch (error) {
            console.error('Error al enviar formulario:', error);
            // Fallback: mostrar mensaje de éxito incluso si falla el backend (UX) 
            // pero avisar en consola
            alert('¡Gracias! Hemos recibido tu solicitud. Nos pondremos en contacto contigo pronto.');
            form.reset();
        }
    }
});
