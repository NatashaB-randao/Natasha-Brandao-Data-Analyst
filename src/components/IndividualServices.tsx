import { motion } from 'motion/react';
import { FileBarChart, SearchCheck, TrendingUp, GraduationCap, PieChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function IndividualServices() {
  const formUrl = 'https://jruwbrxr.formester.com/f/OBARTlNaBH';
  
  const services = [
    {
      icon: FileBarChart,
      title: 'Análise Descritiva',
      description: 'Limpeza, estruturação e exploração inicial dos dados.',
      features: [
        'Identificação de padrões, tendências e outliers',
        'Visualizações básicas e interpretação técnica'
      ],
      deliverables: 'Relatório técnico (PDF) + gráficos e tabelas',
      ideal: 'Quem quer entender seus dados antes de tomar decisões'
    },
    {
      icon: SearchCheck,
      title: 'Análise Diagnóstica',
      description: 'Análise aprofundada para descobrir por que algo aconteceu.',
      features: [
        'Testes estatísticos aplicados',
        'Comparações detalhadas entre grupos',
        'Análise de correlações entre variáveis'
      ],
      deliverables: 'Relatório interpretativo + visualizações comparativas',
      ideal: 'Empresas e pesquisadores que querem identificar causas e relações entre variáveis'
    },
    {
      icon: TrendingUp,
      title: 'Análise Preditiva',
      description: 'Criação e validação de modelos estatísticos ou de machine learning (ARIMA, regressão, árvore de decisão, Prophet etc.).',
      features: [
        'Inclui análise descritiva prévia',
        'Explicação detalhada do modelo usado',
        'Validação e métricas de performance'
      ],
      deliverables: 'Notebook técnico (Python/Colab) + relatório resumido com métricas e previsões',
      ideal: 'Clientes que precisam prever resultados (vendas, demanda, crescimento etc.)'
    },
    {
      icon: GraduationCap,
      title: 'Apoio a Pesquisas e Projetos Acadêmicos',
      description: 'Limpeza e organização de bases científicas (PubMed, Scopus, Kaggle etc.).',
      features: [
        'Análise estatística rigorosa',
        'Gráficos formatados para artigos científicos',
        'Auxílio na interpretação dos resultados',
        'Descrição metodológica detalhada'
      ],
      deliverables: 'Notebook técnico + relatório técnico com descrição metodológica',
      ideal: 'Pesquisadores e estudantes que desejam análises estatísticas confiáveis para papers e projetos'
    },
    {
      icon: PieChart,
      title: 'Dashboards e Relatórios Técnicos',
      description: 'Criação de painéis visuais e relatórios personalizados para comunicação de dados.',
      features: [
        {
          type: 'Dashboard Simples',
          description: 'Métricas principais e gráficos fixos (Python com Plotly/Matplotlib)'
        },
        {
          type: 'Dashboard Interativo',
          description: 'Painel com filtros dinâmicos e visualizações avançadas (Streamlit)'
        },
        {
          type: 'Relatório Técnico Personalizado',
          description: 'Documento visual e interpretativo de uma análise específica'
        }
      ],
      deliverables: 'Dashboard funcional + documentação de uso',
      ideal: 'Empresas que precisam visualizar e acompanhar métricas de forma clara e profissional',
      hasSubServices: true
    }
  ];

  return (
    <section id="individual-services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-['Poppins',sans-serif] text-[#0A3D62] mb-4">
              Serviços Individuais
            </h2>
            <p className="text-xl text-[#2F3640] max-w-3xl mx-auto">
              Soluções especializadas em análise de dados adaptadas às suas necessidades específicas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-[#82CCDD]/30 hover:border-[#60A3BC] hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-2">
                      <div className="bg-[#0A3D62] w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="text-[#82CCDD]" size={28} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-['Poppins',sans-serif] text-[#0A3D62] mb-2">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-[#2F3640]">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-['Poppins',sans-serif] text-[#0A3D62] mb-3">
                        {service.hasSubServices ? 'Tipos de serviço:' : 'O que inclui:'}
                      </h4>
                      {service.hasSubServices ? (
                        <div className="space-y-4">
                          {service.features.map((feature: any, i: number) => (
                            <div key={i} className="bg-[#F5F6FA] p-4 rounded-lg border-l-4 border-[#82CCDD]">
                              <h5 className="font-['Poppins',sans-serif] text-[#0A3D62] mb-1">
                                {feature.type}
                              </h5>
                              <p className="text-[#2F3640] text-sm">{feature.description}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="space-y-2">
                          {service.features.map((feature: any, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-[#2F3640]">
                              <span className="text-[#60A3BC] mt-1">●</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="mb-4 p-4 bg-[#F5F6FA] rounded-lg">
                      <h4 className="font-['Poppins',sans-serif] text-[#0A3D62] mb-2">Entregáveis:</h4>
                      <p className="text-[#2F3640]">{service.deliverables}</p>
                    </div>

                    <div className="p-4 bg-[#82CCDD]/10 rounded-lg border-l-4 border-[#60A3BC]">
                      <h4 className="font-['Poppins',sans-serif] text-[#0A3D62] mb-2">Ideal para:</h4>
                      <p className="text-[#2F3640]">{service.ideal}</p>
                    </div>

                    <a
                      href={formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 block w-full text-center py-3 bg-[#0A3D62] text-[#F5F6FA] rounded-lg hover:bg-[#2F3640] transition-all"
                    >
                      Solicitar Este Serviço
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center bg-[#F5F6FA] p-8 rounded-lg">
            <h3 className="text-2xl font-['Poppins',sans-serif] text-[#0A3D62] mb-4">
              Não encontrou o que precisa?
            </h3>
            <p className="text-[#2F3640] mb-6 max-w-2xl mx-auto">
              Todos os serviços podem ser combinados ou personalizados de acordo com suas necessidades. 
              Entre em contato para discutirmos a melhor solução para seu projeto.
            </p>
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#60A3BC] text-[#F5F6FA] rounded-lg hover:bg-[#0A3D62] transition-all"
            >
              Falar com a Especialista
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
