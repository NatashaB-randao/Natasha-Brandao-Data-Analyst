import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, ExternalLink } from 'lucide-react';

// Componente do ícone Kaggle
function KaggleIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M106.2 207.1c-12.5 0-22.7 10.2-22.7 22.7s10.2 22.7 22.7 22.7 22.7-10.2 22.7-22.7-10.2-22.7-22.7-22.7zm0 32c-5.2 0-9.3-4.2-9.3-9.3s4.2-9.3 9.3-9.3 9.3 4.2 9.3 9.3-4.1 9.3-9.3 9.3zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 472c-119.1 0-216-96.9-216-216S136.9 40 256 40s216 96.9 216 216-96.9 216-216 216zm-44.6-152h-27.5v-64h27.5c12.1 0 22 9.9 22 22s-9.9 22-22 22h-17.1v20h17.1c22.2 0 40-17.8 40-40s-17.8-40-40-40h-27.5v-64h27.5c57.3 0 104 46.7 104 104s-46.7 104-104 104z"/>
    </svg>
  );
}

export function Contact() {
  const formUrl = 'https://jruwbrxr.formester.com/f/OBARTlNaB';
  
  return (
    <section id="contact" className="py-20 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-['Poppins',sans-serif] text-[#0A3D62] mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-[#2F3640] max-w-3xl mx-auto">
              Pronta para transformar seus dados em insights valiosos. Vamos conversar sobre seu projeto!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-[#0A3D62] to-[#2F3640] text-[#F5F6FA] p-8 rounded-lg">
                <h3 className="text-2xl font-['Poppins',sans-serif] mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#82CCDD] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#0A3D62]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-['Poppins',sans-serif] mb-1">E-mail</h4>
                      <a href="mailto:natashabrandao57@gmail.com" className="text-[#82CCDD] hover:underline">
                        contato@natashabrandao.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#82CCDD] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#0A3D62]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-['Poppins',sans-serif] mb-1">Atendimento</h4>
                      <p className="text-[#F5F6FA]/90">100% Remoto - Brasil</p>
                    </div>
                  </div>

                  <div className="border-t border-[#F5F6FA]/20 pt-6 mt-8">
                    <h4 className="font-['Poppins',sans-serif] mb-4">Conecte-se</h4>
                    <div className="flex gap-4">
                      <a
                        href="https://www.linkedin.com/in/natasha-brand%C3%A3o/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#F5F6FA]/10 p-3 rounded-lg hover:bg-[#82CCDD] transition-all"
                      >
                        <Linkedin size={24} />
                      </a>
                      <a
                        href="https://github.com/NatashaB-randao"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#F5F6FA]/10 p-3 rounded-lg hover:bg-[#82CCDD] transition-all"
                      >
                        <Github size={24} />
                      </a>
                      <a
                        href="https://www.kaggle.com/natashabrando"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#F5F6FA]/10 p-3 rounded-lg hover:bg-[#82CCDD] transition-all"
                      >
                        <KaggleIcon size={24} />
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-[#F5F6FA]/20 pt-6">
                    <h4 className="font-['Poppins',sans-serif] mb-2">Portfólio Técnico</h4>
                    <p className="text-[#F5F6FA]/90 mb-4">
                      Acesse meu GitHub ou Kaggle para ver projetos completos, códigos e análises detalhadas.
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/NatashaB-randao"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#F5F6FA]/10 p-3 rounded-lg hover:bg-[#82CCDD] transition-all"
                      >
                        <Github size={24} />
                      </a>
                      <a
                        href="https://www.kaggle.com/natashabrando"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#F5F6FA]/10 p-3 rounded-lg hover:bg-[#82CCDD] transition-all"
                      >
                        <KaggleIcon size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg text-center">
                <div className="bg-[#82CCDD]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ExternalLink className="text-[#0A3D62]" size={40} />
                </div>
                
                <h3 className="text-3xl font-['Poppins',sans-serif] text-[#0A3D62] mb-4">
                  Preencha o Formulário
                </h3>
                
                <p className="text-[#2F3640] mb-8 text-lg">
                  Conte-me sobre seu projeto! Preencha o formulário com suas necessidades e entrarei em contato em até 24 horas úteis.
                </p>

                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#0A3D62] text-[#F5F6FA] rounded-lg hover:bg-[#2F3640] transition-all transform hover:scale-105 shadow-lg"
                >
                  <span className="text-lg">Acessar Formulário</span>
                  <ExternalLink size={20} />
                </a>

                <div className="mt-8 pt-8 border-t border-[#82CCDD]/20">
                  <div className="grid grid-cols-2 gap-4 text-sm text-[#2F3640]">
                    <div className="bg-[#F5F6FA] p-4 rounded-lg">
                      <div className="text-2xl font-['Poppins',sans-serif] text-[#60A3BC] mb-1">24h</div>
                      <div>Tempo de Resposta</div>
                    </div>
                    <div className="bg-[#F5F6FA] p-4 rounded-lg">
                      <div className="text-2xl font-['Poppins',sans-serif] text-[#60A3BC] mb-1">100%</div>
                      <div>Remoto</div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#2F3640]/70 mt-6">
                  Seus dados serão tratados com total confidencialidade e segurança.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
