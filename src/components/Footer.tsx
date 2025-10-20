import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2F3640] text-[#F5F6FA] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-['Poppins',sans-serif] mb-4">Natasha Brandão</h3>
            <p className="text-[#F5F6FA]/80">
              Analista de Dados & Modelagem Estatística especializada em transformar dados em insights acionáveis.
            </p>
          </div>

          <div>
            <h4 className="font-['Poppins',sans-serif] mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-[#F5F6FA]/80">
              <li>
                <a href="#services" className="hover:text-[#82CCDD] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#82CCDD] transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#82CCDD] transition-colors">
                  Pacotes
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#82CCDD] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Poppins',sans-serif] mb-4">Especialidades</h4>
            <ul className="space-y-2 text-[#F5F6FA]/80">
              <li>Análise Estatística</li>
              <li>Machine Learning</li>
              <li>Visualização de Dados</li>
              <li>Modelagem Preditiva</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#F5F6FA]/20 pt-8 text-center text-[#F5F6FA]/80">
          <p className="flex items-center justify-center gap-2">
            Feito com <Heart className="text-[#82CCDD]" size={16} fill="currentColor" /> por Natasha Brandão © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
