import { motion } from 'motion/react';
import { MapPin, Mail, Linkedin, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profilePhoto from 'figma:asset/9af680dc79b05d6a7ed866bb859039cf538c87c2.png';

// Componente para o ícone do Kaggle
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

export function Hero() {
  const formUrl = 'https://jruwbrxr.formester.com/f/OBARTlNaB';
  
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-[#0A3D62] via-[#2F3640] to-[#0A3D62] text-[#F5F6FA] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="w-full py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Coluna de Texto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-[#82CCDD]/20 rounded-full text-[#82CCDD] mb-4">
                  Análise de Dados & Modelagem Estatística
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-['Poppins',sans-serif] mb-6">
                Natasha Brandão
              </h1>
              
              <p className="text-xl md:text-2xl text-[#82CCDD] mb-8">
                Transformo dados em decisões inteligentes e visualizações de alto impacto
              </p>

              <div className="flex flex-wrap gap-6 mb-12">
                <div className="flex items-center gap-2">
                  <MapPin className="text-[#82CCDD]" size={20} />
                  <span>Atendimento Remoto</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-[#82CCDD]" size={20} />
                  <a href="mailto:natashabrandao57@gmail.com" className="hover:text-[#82CCDD] transition-colors">
                    contato
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#82CCDD] text-[#0A3D62] rounded-lg hover:bg-[#60A3BC] transition-all transform hover:scale-105"
                >
                  Entre em Contato
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 border-2 border-[#F5F6FA] text-[#F5F6FA] rounded-lg hover:bg-[#F5F6FA] hover:text-[#0A3D62] transition-all"
                >
                  Ver Projetos
                </a>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://www.linkedin.com/in/natasha-brand%C3%A3o/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#F5F6FA]/10 rounded-lg hover:bg-[#82CCDD] transition-all"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/NatashaB-randao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#F5F6FA]/10 rounded-lg hover:bg-[#82CCDD] transition-all"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.kaggle.com/natashabrando"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#F5F6FA]/10 rounded-lg hover:bg-[#82CCDD] transition-all"
                >
                  <KaggleIcon size={24} />
                </a>
              </div>
            </motion.div>

            {/* Coluna de Imagem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Elemento decorativo de fundo */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#82CCDD]/20 to-[#60A3BC]/10 rounded-2xl blur-2xl"></div>
                
                {/* Container da imagem */}
                <div className="relative rounded-2xl overflow-hidden border-4 border-[#82CCDD]/30 shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Natasha Brandão - Analista de Dados"
                    className="w-full h-auto aspect-[3/4] object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}