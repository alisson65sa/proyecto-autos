import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

const DB = path.join(__dirname, "../database/citas.json");

// Configuración de Email (User: Debe configurar sus credenciales)
const transporter = nodemailer.createTransport({
    service: 'gmail', // o su proveedor preferido
    auth: {
        user: 'SU_CORREO@gmail.com',
        pass: 'SU_CONTRASEÑA_O_APP_TOKEN'
    }
});

app.post("/api/contacto", async (req, res) => {
    const { nombre, email, telefono, mensaje, id } = req.body;

    // En un entorno real, aquí se guardaría en una DB
    console.log(`Nueva consulta recibida para el vehículo ID: ${id}`);

    const mailOptions = {
        from: '"EL RAYO - Asesoría Premium" <no-reply@elrayo.com>',
        to: email,
        subject: 'Confirmación de solicitud - EL RAYO',
        html: `
            <div style="font-family: 'Outfit', sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0a; color: #ffffff; padding: 40px; border-radius: 8px; border: 1px solid #ff6600;">
                <h1 style="color: #ff6600; text-align: center;">EL RAYO</h1>
                <p style="font-size: 1.2rem;">Hola <strong>${nombre}</strong>,</p>
                <p>Hemos recibido correctamente tu solicitud de información sobre uno de nuestros vehículos premium.</p>
                <div style="background-color: #1a1a1a; padding: 20px; border-radius: 4px; margin: 20px 0;">
                    <p><strong>Hemos registrado los siguientes datos:</strong></p>
                    <ul style="list-style: none; padding: 0;">
                        <li>📞 Teléfono: ${telefono}</li>
                        <li>📧 Email: ${email}</li>
                        <li>💬 Mensaje: ${mensaje}</li>
                    </ul>
                </div>
                <p>Un asesor senior se pondrá en contacto contigo a la brevedad para brindarte una atención personalizada.</p>
                <hr style="border: 0; border-top: 1px solid #333; margin: 30px 0;">
                <p style="text-align: center; color: #888; font-size: 0.8rem;">Este es un mensaje automático. Por favor, no responda a este correo.</p>
            </div>
        `
    };

    try {
        // En producción el usuario debe configurar credenciales para que esto funcione
        // Por ahora, simulamos el envío exitoso si no hay credenciales
        if (transporter.transporter.options.auth.user === 'SU_CORREO@gmail.com') {
            console.log("SIMULACIÓN: Correo enviado a " + email);
            return res.json({ ok: true, message: "Simulación de correo exitosa" });
        }

        await transporter.sendMail(mailOptions);
        res.json({ ok: true });
    } catch (error) {
        console.error("Error al enviar correo:", error);
        res.status(500).json({ ok: false, error: error.message });
    }
});

app.post("/api/citas", async (req, res) => {
    const nueva = req.body;
    const { nombre, email, telefono, servicio, fecha, hora, comentarios } = nueva;

    // 1. Guardar en JSON
    let citas = [];
    if (fs.existsSync(DB)) {
        citas = JSON.parse(fs.readFileSync(DB));
    }
    citas.push(nueva);
    fs.writeFileSync(DB, JSON.stringify(citas, null, 2));

    // 2. Enviar Correo de Confirmación
    const mailOptions = {
        from: '"EL RAYO - Citas de Servicio" <no-reply@elrayo.com>',
        to: email,
        subject: 'Confirmación de Cita - EL RAYO',
        html: `
            <div style="font-family: 'Outfit', sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0a; color: #ffffff; padding: 40px; border-radius: 8px; border: 1px solid #ff6600;">
                <h1 style="color: #ff6600; text-align: center;">EL RAYO</h1>
                <h2 style="text-align: center; color: #fff;">Agendado con éxito</h2>
                <p>Hola <strong>${nombre}</strong>,</p>
                <p>Confirmamos la recepción de tu solicitud de cita para mantenimiento/servicio.</p>
                <div style="background-color: #1a1a1a; padding: 20px; border-radius: 4px; margin: 20px 0;">
                    <p><strong>Detalles de tu Cita:</strong></p>
                    <ul style="list-style: none; padding: 0;">
                        <li>🛠️ Servicio: ${servicio}</li>
                        <li>📅 Fecha: ${fecha}</li>
                        <li>⏰ Hora: ${hora}</li>
                        <li>📞 Teléfono: ${telefono}</li>
                        <li>💬 Comentarios: ${comentarios || 'Ninguno'}</li>
                    </ul>
                </div>
                <p>Si necesitas reprogramar o tienes alguna duda, puedes contactarnos directamente respondiendo a este correo o vía WhatsApp.</p>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="https://wa.me/525652189129" style="background-color: #ff6600; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">HABLAR CON UN ASESOR</a>
                </div>
                <hr style="border: 0; border-top: 1px solid #333; margin: 30px 0;">
                <p style="text-align: center; color: #888; font-size: 0.8rem;">&copy; 2026 EL RAYO. Todos los derechos reservados.</p>
            </div>
        `
    };

    try {
        // Simulación si no hay credenciales
        if (transporter.transporter.options.auth.user === 'SU_CORREO@gmail.com') {
            console.log("SIMULACIÓN: Cita enviada a " + email);
            return res.json({ ok: true, message: "Simulación de cita exitosa" });
        }

        await transporter.sendMail(mailOptions);
        res.json({ ok: true });
    } catch (error) {
        console.error("Error al enviar correo de cita:", error);
        res.status(500).json({ ok: false, error: error.message });
    }
});

app.listen(4000, () => {
    console.log("Servidor backend en http://localhost:4000");
});