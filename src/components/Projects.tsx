import { useState } from 'react';
import { motion } from 'motion/react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  // Dados mantidos caso você queira usar em gráficos futuros
  const salesData = [
    { month: 'Jan', vendas: 45, previsao: 43 },
    { month: 'Fev', vendas: 52, previsao: 50 },
    { month: 'Mar', vendas: 48, previsao: 49 },
    { month: 'Abr', vendas: 61, previsao: 59 },
    { month: 'Mai', vendas: 55, previsao: 57 },
    { month: 'Jun', vendas: 67, previsao: 65 },
  ];

  const clusterData = [
    { name: 'Machine Learning', value: 35 },
    { name: 'Deep Learning', value: 28 },
    { name: 'NLP', value: 22 },
    { name: 'Computer Vision', value: 15 },
  ];

  const fraudData = [
    { metrica: 'Acurácia', valor: 92 },
    { metrica: 'Precisão', valor: 89 },
    { metrica: 'Recall', valor: 94 },
    { metrica: 'F1-Score', valor: 91 },
  ];

  const COLORS = ['#0A3D62', '#82CCDD', '#60A3BC', '#2F3640'];

  const projects = [
    {
      title: 'A Jornada do Profissional de Dados',
      description: 'A Jornada do Profissional de Dados: Mapeando Transições de Carreira no Brasil',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MDY4OTI5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['Python','Pandas', 'Matplotlib'],
      chart: (
        <div className="text-center py-6">
          <a
            href="https://www.kaggle.com/code/natashabrando/a-jornada-do-profissional-de-dados"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A3D62] underline text-lg font-semibold hover:text-[#082A44] transition-colors"
          >
            Acesse o projeto no Kaggle
          </a>
        </div>
      ),
      details: 'A Jornada do Profissional de Dados: explore o projeto completo no Kaggle.'
    },
    {
      title: 'Análise dos Custos de Transporte na Embraer',
      description: 'Dashboard de Análise de Custos de Transporte na Embraer.',
      image: 'https://images.unsplash.com/photo-1691643158804-d3f02eb456a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aXN0aWNhbCUyMGFuYWx5c2lzJTIwY2hhcnRzfGVufDF8fHx8MTc2MDcxNDk0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['Python', 'Matplotlib', 'ARIMA', 'Power BI'],
      chart: (
        <div className="text-center py-6">
          <a
            href="https://sites.google.com/view/portflionatashabrando/embraer-social-tech-careers?authuser=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A3D62] underline text-lg font-semibold hover:text-[#082A44] transition-colors"
          >
            Acesse o projeto completo
          </a>
        </div>
      ),
      details: 'Análise aprofundada dos custos de transporte na Embraer, focando na área de logística e supply chain. Este estudo abordará os custos associados ao transporte de mercadorias, podendo englobar modalidades como transporte terrestre, marítimo e aéreo.'
    },
    {
      title: 'MAP: Analisando os Mal-entendidos Matemáticos',
      description: 'Modelo de NLP capaz de prever mal-entendidos matemáticos a partir das explicações dos estudantes.',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzYwNzE0OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['Python', 'NLP', 'Transformers', 'Deep Learning'],
      chart: (
        <div className="text-center py-6">
          <a
            href="https://www.kaggle.com/code/natashabrando/map-step-by-step-deberta-v3-train-infer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A3D62] underline text-lg font-semibold hover:text-[#082A44] transition-colors"
          >
            Acesse o projeto completo
          </a>
        </div>
      ),
      details: 'O objetivo é criar uma ferramenta que auxilie educadores a identificar e corrigir padrões de pensamento incorretos, melhorando a aprendizagem em matemática.'
    },
    // NOVO PROJETO ADICIONADO AQUI
    {
      title: 'Portfólio de Dashboards',
      description: 'Coleção centralizada de dashboards interativos e visualizações de dados estratégicas.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      tech: ['Power BI', 'Data Viz', 'Business Intelligence'],
      chart: (
        <div className="text-center py-6">
          <a
            href="https://tundra-blossom-858.notion.site/Portf-lio-2c67b06a230d817fbe69ea4c43e06ecf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A3D62] underline text-lg font-semibold hover:text-[#082A44] transition-colors"
          >
            Acesse o Portfólio de Projetos
          </a>
        </div>
      ),
      details: 'Neste portfólio dedicado, apresento diversos casos de uso de Dashboards interativos, focando em storytelling de dados e insights visuais para tomada de decisão.'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-['Poppins',sans-serif] text-[#0A3D62] mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-xl text-[#2F3640] max-w-3xl mx-auto">
              Casos reais de aplicação de análise de dados e modelagem estatística com resultados mensuráveis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow group h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden shrink-0">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/80 to-transparent"></div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-['Poppins',sans-serif] text-[#0A3D62] mb-3">
                          {project.title}
                        </h3>
                        <p className="text-[#2F3640] mb-4 flex-grow">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-[#82CCDD]/20 text-[#0A3D62] rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-[#60A3BC] mt-auto">
                          <ExternalLink size={16} />
                          <span className="text-sm">Ver detalhes</span>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-['Poppins',sans-serif] text-[#0A3D62]">
                        {project.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                      />
                      <p className="text-[#2F3640] mb-6">
                        {project.details}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-['Poppins',sans-serif] text-[#0A3D62] mb-3">Visualização dos Resultados</h4>
                        <div className="bg-[#F5F6FA] p-4 rounded-lg">
                          {project.chart}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-['Poppins',sans-serif] text-[#0A3D62] mb-3">Tecnologias Utilizadas</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 bg-[#0A3D62] text-[#F5F6FA] rounded-lg"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}