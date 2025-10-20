import { motion } from 'motion/react';
import { TrendingUp, Search, Brain, BarChart3 } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Search,
      title: 'Análise Descritiva',
      description: 'Exploração profunda dos dados para identificar padrões, tendências e insights iniciais.'
    },
    {
      icon: Brain,
      title: 'Análise Diagnóstica',
      description: 'Investigação das causas raízes dos fenômenos observados nos dados.'
    },
    {
      icon: TrendingUp,
      title: 'Análise Preditiva',
      description: 'Modelagem estatística para prever comportamentos futuros com base em dados históricos.'
    },
    {
      icon: BarChart3,
      title: 'Dashboards Interativos',
      description: 'Visualizações claras e interativas que comunicam resultados de forma impactante.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-['Poppins',sans-serif] text-[#0A3D62] mb-4">
              Sobre o Serviço
            </h2>
            <p className="text-xl text-[#2F3640] max-w-3xl mx-auto">
              Análises técnicas, claras e reproduzíveis, focadas em entregar insights acionáveis para decisões estratégicas baseadas em dados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#82CCDD]/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-[#0A3D62]" size={32} />
                </div>
                <h3 className="text-xl font-['Poppins',sans-serif] text-[#0A3D62] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#2F3640]">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-[#0A3D62] text-[#F5F6FA] p-8 md:p-12 rounded-lg">
            <h3 className="text-2xl font-['Poppins',sans-serif] mb-4">Principais Entregas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-[#82CCDD] mb-2">✓</div>
                <p>Relatórios técnicos detalhados e documentados</p>
              </div>
              <div>
                <div className="text-[#82CCDD] mb-2">✓</div>
                <p>Dashboards interativos para visualização de dados</p>
              </div>
              <div>
                <div className="text-[#82CCDD] mb-2">✓</div>
                <p>Código reproduzível e documentação completa</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
