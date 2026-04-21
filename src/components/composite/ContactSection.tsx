import { Mail, Phone, MapPin, ExternalLink, FileDown, KeyRound } from "lucide-react";
import { CONTACT, SOCIAL_LINKS } from "../../lib/constants";
import { personalInfo } from "../../lib/data";
import { SectionContainer } from "../layout/SectionContainer";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../lib/utils";

const contactItems = [
  { icon: Mail, label: "Correo electrónico", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Teléfono", value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
  { icon: MapPin, label: "Ubicación", value: CONTACT.location, href: undefined },
];

export function ContactSection() {
  return (
    <SectionContainer
      id="contact"
      title="Contacto"
      subtitle="¿Tienes un proyecto en mente? ¡Hablemos!"
    >
      <div className="max-w-2xl mx-auto">
        {/* Contact info list */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 mb-10"
        >
          {contactItems.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="flex items-center gap-4"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full border border-border-primary bg-bg-primary">
                <item.icon size={20} className="text-text-primary" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-secondary">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-text-primary font-medium hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-text-primary font-medium">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-primary text-text-primary text-sm hover:bg-text-primary hover:text-bg-primary transition-colors duration-200"
            >
              <s.icon size={16} />
              {s.label}
              <ExternalLink size={12} className="opacity-50" />
            </a>
          ))}
        </motion.div>

        {/* Download Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
        >
          {/* CV Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, boxShadow: "var(--card-hover-shadow)" }}
            transition={{ duration: 0.2 }}
            className="border border-border-primary rounded-xl p-6 flex flex-col items-center text-center gap-4 bg-surface transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-full border border-border-primary flex items-center justify-center">
              <FileDown size={20} className="text-text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-text-primary">Curriculum Vitae</h4>
              <p className="text-xs text-text-secondary mt-1">Descarga mi CV en formato PDF</p>
            </div>
            <Button variant="outline" size="sm" href={personalInfo.cvUrl} download>
              <FileDown size={14} className="mr-2" />
              Descargar CV
            </Button>
          </motion.div>

          {/* Public Key Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, boxShadow: "var(--card-hover-shadow)" }}
            transition={{ duration: 0.2 }}
            className="border border-border-primary rounded-xl p-6 flex flex-col items-center text-center gap-4 bg-surface transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-full border border-border-primary flex items-center justify-center">
              <KeyRound size={20} className="text-text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-text-primary">Llave Pública</h4>
              <p className="text-xs text-text-secondary mt-1">Descarga mi llave pública PGP/GPG</p>
            </div>
            <Button variant="outline" size="sm" href={personalInfo.publicKeyUrl} download>
              <KeyRound size={14} className="mr-2" />
              Descargar llave
            </Button>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button href={`mailto:${CONTACT.email}`} size="lg">
            Enviar correo
          </Button>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
