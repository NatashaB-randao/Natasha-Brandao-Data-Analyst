import { motion } from 'motion/react';
import { Award, Code2, Eye, MessageSquare, BookOpen, Target } from 'lucide-react';

export function Differentials() {
  const differentials = [
    {
      icon: Award,
      title: 'Foco Técnico e Científico',
      description: 'Metodologias estatísticas rigorosas e validadas pela comunidade científica.'
    },
    {
      icon: Code2,
      title: 'Entregas Replicáveis',
      description: 'Código limpo, documentado e versionado para garantir reprodutibilidade total.'
    },
    {
      icon: Eye,
      title: 'Visualizações Claras',
      description: 'Gráficos e dashboards que comunicam insights complexos de forma acessível.'
    },
    {
      icon: MessageSquare,
      title: 'Linguagem Acessível',
      description: 'Relatórios técnicos que traduzem estatística complexa em insights acionáveis.'
    },
    {
      icon: BookOpen,
      title: 'Documentação Completa',
      description: 'Cada análise acompanhada de documentação detalhada e justificativas técnicas.'
    },
    {
      icon: Target,
      title: 'Atendimento Humanizado',
      description: 'Comunicação clara, transparente e alinhada às suas necessidades específicas.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A3D62] to-[#2F3640] text-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-['Poppins',sans-serif] mb-4">
              Diferenciais
            </h2>
            <p className="text-xl text-[#82CCDD] max-w-3xl mx-auto">
              O que torna meu trabalho único e focado em entregar valor real para seus projetos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all"
              >
                <div className="bg-[#82CCDD] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-[#0A3D62]" size={28} />
                </div>
                <h3 className="text-xl font-['Poppins',sans-serif] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#F5F6FA]/90">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-lg text-center"
          >
            <h3 className="text-2xl font-['Poppins',sans-serif] mb-4">
              Compromisso com a Excelência
            </h3>
            <p className="text-[#F5F6FA]/90 max-w-3xl mx-auto mb-6">
              Cada projeto é tratado com rigor técnico e atenção aos detalhes, garantindo análises confiáveis 
              que realmente agregam valor ao seu negócio. Trabalho com transparência total, desde o briefing 
              inicial até a entrega final, mantendo você informado em cada etapa do processo.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div>
                <div className="text-4xl font-['Poppins',sans-serif] text-[#82CCDD] mb-2">100%</div>
                <div className="text-[#F5F6FA]/80">Código Reproduzível</div>
              </div>
              <div>
                <div className="text-4xl font-['Poppins',sans-serif] text-[#82CCDD] mb-2">24h</div>
                <div className="text-[#F5F6FA]/80">Tempo de Resposta</div>
              </div>
              <div>
                <div className="text-4xl font-['Poppins',sans-serif] text-[#82CCDD] mb-2">3+</div>
                <div className="text-[#F5F6FA]/80">Anos de Experiência</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
