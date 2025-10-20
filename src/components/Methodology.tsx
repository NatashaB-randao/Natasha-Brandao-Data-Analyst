import { motion } from 'motion/react';
import { FileText, Database, LineChart, CheckCircle, FileCheck } from 'lucide-react';

export function Methodology() {
  const steps = [
    {
      icon: FileText,
      title: 'Briefing',
      description: 'Entendimento detalhado das suas necessidades, objetivos e contexto do negócio.'
    },
    {
      icon: Database,
      title: 'Limpeza e Exploração',
      description: 'Tratamento dos dados, identificação de inconsistências e análise exploratória inicial.'
    },
    {
      icon: LineChart,
      title: 'Análise Estatística e Modelagem',
      description: 'Aplicação de técnicas estatísticas avançadas e desenvolvimento de modelos preditivos.'
    },
    {
      icon: CheckCircle,
      title: 'Validação e Interpretação',
      description: 'Validação rigorosa dos resultados e interpretação clara dos insights obtidos.'
    },
    {
      icon: FileCheck,
      title: 'Entrega Documentada',
      description: 'Relatório completo com código reproduzível, visualizações e recomendações estratégicas.'
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-['Poppins',sans-serif] text-[#0A3D62] mb-4">
              Metodologia
            </h2>
            <p className="text-xl text-[#2F3640] max-w-3xl mx-auto">
              Processo estruturado e transparente para garantir análises de alta qualidade e resultados confiáveis.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#82CCDD]/30"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-[#F5F6FA] p-6 rounded-lg shadow-lg">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="bg-[#0A3D62] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <step.icon className="text-[#82CCDD]" size={24} />
                      </div>
                      <h3 className="text-xl font-['Poppins',sans-serif] text-[#0A3D62]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#2F3640]">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#60A3BC] rounded-full border-4 border-white"></div>

                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
