import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function Packages() {
  const formUrl = 'https://jruwbrxr.formester.com/f/OBARTlNaBH';
  
  const packages = [
    {
      name: 'Essencial',
      price: 'Sob Consulta',
      description: 'Ideal para análises iniciais e exploração de dados',
      features: [
        'Análise descritiva completa dos dados',
        'Dashboard simples e intuitivo',
        'Relatório técnico detalhado',
        'Visualizações estáticas (gráficos e tabelas)',
        'Documentação do código',
        '1 rodada de revisões',
        'Suporte por 15 dias após entrega'
      ],
      highlighted: false
    },
    {
      name: 'Avançado',
      price: 'Sob Consulta',
      description: 'Para análises complexas e modelagem preditiva',
      features: [
        'Análise descritiva, diagnóstica e preditiva',
        'Dashboard interativo completo',
        'Modelagem estatística avançada',
        'Machine Learning (quando aplicável)',
        'Relatório técnico + apresentação executiva',
        'Código reproduzível e documentado',
        '2 rodadas de revisões',
        'Suporte por 30 dias após entrega',
        'Sessão de apresentação dos resultados'
      ],
      highlighted: true
    }
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-['Poppins',sans-serif] text-[#0A3D62] mb-4">
              Pacotes de Serviço
            </h2>
            <p className="text-xl text-[#2F3640] max-w-3xl mx-auto">
              Soluções flexíveis para diferentes necessidades de análise de dados e modelagem estatística.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-lg overflow-hidden ${
                  pkg.highlighted
                    ? 'bg-gradient-to-br from-[#0A3D62] to-[#2F3640] text-[#F5F6FA] shadow-2xl scale-105'
                    : 'bg-[#F5F6FA] text-[#2F3640] shadow-lg'
                }`}
              >
                {pkg.highlighted && (
                  <div className="bg-[#82CCDD] text-[#0A3D62] text-center py-2">
                    <span className="font-['Poppins',sans-serif]">Mais Popular</span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-3xl font-['Poppins',sans-serif] mb-2">
                    {pkg.name}
                  </h3>
                  <p className={`mb-6 ${pkg.highlighted ? 'text-[#82CCDD]' : 'text-[#2F3640]'}`}>
                    {pkg.description}
                  </p>
                  <div className="mb-8">
                    <span className="text-4xl font-['Poppins',sans-serif]">{pkg.price}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className={`flex-shrink-0 mt-1 ${
                            pkg.highlighted ? 'text-[#82CCDD]' : 'text-[#60A3BC]'
                          }`}
                          size={20}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-4 rounded-lg transition-all ${
                      pkg.highlighted
                        ? 'bg-[#82CCDD] text-[#0A3D62] hover:bg-[#60A3BC]'
                        : 'bg-[#0A3D62] text-[#F5F6FA] hover:bg-[#2F3640]'
                    }`}
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[#2F3640] mb-4">
              Precisa de algo personalizado? Entre em contato para criar um pacote sob medida.
            </p>
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border-2 border-[#0A3D62] text-[#0A3D62] rounded-lg hover:bg-[#0A3D62] hover:text-[#F5F6FA] transition-all"
            >
              Fale Comigo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
