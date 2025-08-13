'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Container , Linkedin, Github, ExternalLink, Calendar, Award, Code, GraduationCap, Database, Server, Smartphone, Globe, CheckCircle, ArrowRight, Menu, X, MessageSquareText } from 'lucide-react'
import { url } from 'inspector'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const sendWhatsAppMessage = () => {
    const phoneNumber = "5551997041908" // Número com código do país (55 para Brasil)
    const message = `Olá Eduardo, meu nome é ${formData.name}. ${formData.message} (Contato: ${formData.email})`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendWhatsAppMessage()
  }

  const skills = [
    { name: 'Java Spring Boot', icon: Code, level: 85 },  
    { name: 'Spring Security', icon: Code, level: 70 }, 
    { name: 'PostgreSQL', icon: Database, level: 85 },
    { name: 'Arquitetura Hexagonal', icon: Code, level: 75 },
    { name: 'Docker', icon: Container, level: 70 },        
    { name: 'SAP ABAP', icon: Code, level: 70 },           
    { name: 'REST APIs', icon: Code, level: 90 },  
    { name: 'JavaScript', icon: Code, level: 95 },         
    { name: 'Node.js', icon: Server, level: 90 },          
    { name: 'PHP', icon: Code, level: 60 },                     
    { name: 'Angular', icon: Code, level: 80 },            
    { name: 'Ionic/Cordova', icon: Smartphone, level: 75 },
  ]

  const experiences = [
    {
      period: 'Out 2018 - Mai 2025',
      company: 'Direction générale des douanes et droits indirects (DGDDI) - Centre Informatique Douanier',
      location: 'Osny, França',
      role: 'Analista de Suporte de Aplicações Web',
      description: 'Atuei no suporte a sistemas web críticos em constante adaptação normativa, especialmente durante a transição pós-Brexit (2020–2022). Contribuí para o treinamento e integração de novos membros da equipe.',
      highlight: {
        title: 'Automação de Processo Crítico',
        text: 'Além de minhas atribuições formais, sempre busquei contribuir de forma proativa: ' + 
                   'Identifiquei e automatizei a associação em massa de usuários a uma plataforma de alertas em tempo real, que notificava sobre atualizações e falhas em sistemas críticos que afetavam usuários no âmbito nacional. ' + 
                   'O processo era manual e demandava horas por falta de endpoints para cadastro em massa. ' + 
                   'Desenvolvi uma solução em JavaScript (usando Fetch API) para replicar o comportamento do formulário via chamadas assíncronas, eliminando a necessidade de cadastros individuais, escalando o processo para +600 usuários-chave, responsáveis por replicar alertas para suas redes de colaboradores e clientes, ampliando o impacto nacional da solução.',
      },
      technologies: ['JavaScript', 'XML', 'JSON', 'Automação'],
    },
    {
      period: 'Fev 2017 - Jan 2018',
      company: 'Mobixio',
      location: 'Montpellier, França',
      role: 'Desenvolvedor JavaScript | AngularJS | NodeJS',
      description: 'Em 2017, atuei como desenvolvedor JavaScript na Mobixio, contribuindo para o desenvolvimento do aplicativo multiplataforma Yoozcool, voltado para o monitoramento em tempo real de uma frota de transporte. Utilizei tecnologias como Ionic, Cordova, AngularJS, NodeJS e Leaflet.',
      highlight: {
        title: 'Implementação de um formulario de autenticação',
        text: 'Durante este período, implementei um sistema de autenticação de usuários para controlar acessos à versão demo publicada na web. Esta solução garantiu o acesso seguro aos dados sensíveis através de um controle de permissões.',
      },
      technologies: ['Ionic', 'Cordova', 'AngularJS', 'Node.js', 'Leaflet']
    },
    {
      period: 'Abr 2016 - Jun 2016',
      company: 'O+ Studio',
      location: 'Montferrier-sur-Lez, França',
      role: 'Estágio de Desenvolvedor Web',
      description: 'Durante esse estágio de fim de curso, com duração de dez semanas, desenvolvi uma aplicação web em PHP5 com arquitetura MVC e utilizando MySQL como sistema gerenciador de banco de dados (SGBD). Tecnologias utilizadas: HTML, CSS, JavaScript, jQuery. Ferramentas: NetBeans, XAMPP, FileZilla e MySQL Workbench.',
      technologies: ['PHP5', 'Javascript', 'SQL', 'Design Pattern MVC']
    }
  ]

  const projects = [
    {
      title: 'Pedidos de venda',
      description: 'Visão Geral do Desenvolvimento RAP no Eclipse',
      technologies: ['Fiori Elements', 'CDS Views ', 'OData Services', 'RAP Model'],
      url: 'https://github.com/eduardoschoepf/sap-fiori',
      status: 'Concluído'
    },
    {
      title: 'Landing page delivery',
      description: 'Landing page responsiva para promover aplicativo de delivery.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Design Responsivo'],
      url: 'https://eduardoschoepf.github.io/landing-page-la-commande/',
      status: 'Concluído'
    },
    {
      title: 'La Commande App',
      description: 'Aplicativo para encomendar lanches via WhatsApp, facilitando o pedido rápido e prático.',
      technologies: ['React', 'TypeScript', 'WhatsApp API', 'Tailwind CSS', 'Design Responsivo'],
      url: 'https://eduardoschoepf.github.io/la-commande/',
      status: 'Concluído'
    },
    {
      title: 'Movies Application',
      description: 'Este aplicativo foi desenvolvido como resultado dos meus estudos em React Native. O aplicativo se conecta à API do TMDB para obter informações sobre filmes e séries de TV',
      technologies: ['React Native', 'TMDB API'],
      url: 'https://github.com/eduardoschoepf/Movies/',
      status: 'Concluído'
    },
    {
      title: 'Yoozcool Mobile App',
      description: 'Aplicativo multiplataforma para monitoramento de frota em tempo real com mapas interativos.',
      technologies: ['Ionic', 'AngularJS', 'Leaflet', 'Node.js'],
      url: '',
      status: 'Concluído'
    }
  ]

  const certifications = [
    {
      title: 'Getting started with SAP Cloud Application Programming Model',
      institution: 'SAP Learning',
      location: 'Online',
      year: '2025',
      type: 'Certificado',
      url: 'https://www.credly.com/badges/a4acb595-4264-44d6-83cd-f2080cadd0aa'
    },
    {
      title: 'Developing and Extending SAP Fiori Elements Apps',
      institution: 'SAP Learning',
      location: 'Online',
      year: '2025',
      type: 'Certificado',
      url: 'https://github.com/eduardoschoepf/sap-fiori-elements/blob/main/README.md'
    },
    {
      title: 'Containerize Java Microservices with Docker',
      institution: 'IBM',
      location: 'Online',
      year: '2024',
      type: 'Certificado',
      url: 'https://courses.edx.org/certificates/6803c37d3b1e4c0ebeb9ada8ff04e510'
    },
    {
      title: 'Create & Load tables in PostgreSQL database',
      institution: 'IBM',
      location: 'Online',
      year: '2024',
      type: 'Certificado',
      url: 'https://courses.edx.org/certificates/9f30eeb0a2374e078fa44b34102bfe45'
    },
    {
      title: 'Java Developer',
      institution: 'LinkedIn Learning',
      location: 'Online',
      year: '2022',
      type: 'Certificado',
      url: 'https://www.linkedin.com/learning/certificates/96d78831fcc0a542f2c4c8e6681ea8f43ab53bf082a701fb8ac66df5aab784ad'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="container mx-auto px-16 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-slate-800">
              Eduardo Schoepf
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Início' },
                { id: 'about', label: 'Sobre' },
                { id: 'experience', label: 'Experiência' },
                { id: 'projects', label: 'Projetos' },
                { id: 'education', label: 'Formação' },
                { id: 'contact', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-slate-200">
              <div className="flex flex-col space-y-4 pt-4">
                {[
                  { id: 'home', label: 'Início' },
                  { id: 'about', label: 'Sobre' },
                  { id: 'experience', label: 'Experiência' },
                  { id: 'projects', label: 'Projetos' },
                  { id: 'education', label: 'Formação' },
                  { id: 'contact', label: 'Contato' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Eduardo Schoepf
              </h1>
              <h2 className="text-xl lg:text-2xl text-slate-300 mb-6">
                Desenvolvedor de Software
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl">
                SAP ABAP | SAP Fiori | BTP | CAP | RAP Model | CDS Views | OData Services | PostgreSQL | Java & Spring Boot | React | Docker 
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  🇫🇷 Experiência Internacional
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  👨‍💻 8+ Anos atuando na área de TI
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => scrollToSection('contact')}
                >
                  Entre em Contato
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-56 h-56 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-slate-600 shadow-2xl">
                <img
                  src="2025_photo.png"
                  alt="Eduardo Schoepf"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container px-16">
          <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Sobre Mim
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="md:col-span-2">
                  <CardContent className="p-6">
                    <p className="text-slate-600 leading-relaxed">
                      Desde 2017, construo uma trajetória sólida em desenvolvimento de software, contribuindo para
                      projetos internacionais e me adaptando a diferentes tecnologias para resolver desafios técnicos
                      complexos. Entre 2020 e 2022, participei do suporte a plataformas web estratégicas em constante
                      adaptação normativa, especialmente no cenário de transição pós-Brexit, onde cada ajuste exigia
                      precisão, agilidade e trabalho colaborativo.
                    </p>
                    <p className="text-slate-600 leading-relaxed mt-4">
                      Atualmente, estou disponível para novas oportunidades e projetos como PJ.
                    </p>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
                      <div className="text-sm text-slate-600">Anos atuando na área de TI</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">🇫🇷</div>
                      <div className="text-sm text-slate-600">Experiência Internacional</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                  Principais Competências
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <Icon className="h-6 w-6 text-blue-600" />
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium text-slate-700">{skill.name}</span>
                            <span className="text-sm text-slate-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>


              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Globe className="h-8 w-8 text-blue-600" />
                      <div>
                        <h4 className="font-semibold text-slate-800">Experiência Internacional</h4>
                        <p className="text-slate-600">França</p>
                      </div>
                    </div>
                    <p className="text-slate-600">
                      Com mais de 8 anos de experiência profissional na França, 
                      atuei em projetos críticos e em constante adaptação normativa, especialmente durante a transição pós-Brexit (2020–2022).
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Code className="h-8 w-8 text-blue-600" />
                      <div>
                        <h4 className="font-semibold text-slate-800">Arquiteturas Escaláveis</h4>
                        <p className="text-slate-600">Hexagonal, REST APIs, Microserviços</p>
                      </div>
                    </div>
                    <p className="text-slate-600">
                      Especialista em arquiteturas escaláveis, com experiência em design e implementação de soluções baseadas em arquitetura hexagonal, 
                      desenvolvimento de APIs REST e construção de sistemas distribuídos com microserviços.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-slate-50">
        <div className="container px-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Experiência Profissional
              </h2>
              <p className="text-lg text-slate-600">
                Trajetória em desenvolvimento de software
              </p>
            </div>

            <div className="mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200"></div>

                {experiences.map((exp, index) => (
                  <div key={index} className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Timeline dot */}
                    <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                    <div className={`flex-1 ml-12 lg:ml-0 ${
                      index % 2 === 0 ? 'lg:pr-0' : 'lg:pl-0'
                    }`}>
                      <Card className="shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">
                              <Calendar className="mr-1 h-3 w-3" />
                              {exp.period}
                            </Badge>
                            <MapPin className="h-4 w-4 text-slate-500" />
                          </div>
                          <CardTitle className="text-xl text-slate-800">{exp.role}</CardTitle>
                          <CardDescription className="text-lg font-medium text-blue-600">
                            {exp.company} • {exp.location}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-600 mb-4">{exp.description}</p>

                          {exp.highlight && (
                            <div className="bg-blue-50 p-4 rounded-lg mb-4">
                              <h4 className="font-semibold text-slate-800 mb-2">
                                Destaque: {exp.highlight.title}
                              </h4>
                              <p className="text-slate-600 text-sm">{exp.highlight.text}</p>
                            </div>
                          )}

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>

                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-16">
          <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Projetos
              </h2>
              <p className="text-lg text-slate-600">
                Lista de projetos em curso e concluídos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 group"
                      >
                        <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </CardTitle>
                        <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                      </a>
                    </div>
                    <Badge 
                      variant={project.status === 'Concluído' ? 'default' : 'secondary'}
                      className="w-fit"
                    >
                      <CheckCircle className="mr-1 h-3 w-3" />
                      {project.status}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-slate-50">
        <div className="container mx-auto px-16">
          <div className="max-w-5xl mx-auto">

              {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Formação e Certificados
              </h2>
              <p className="text-lg text-slate-600">
                Educação continuada e certificações em tecnologias
              </p>
            </div>

            {/* Principal Education */}
            <div className="space-y-4 grid gap-8 lg:grid-cols-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                      Engenharia de Software
                  </CardTitle>
                  <CardDescription>UNINTER • 2023 - Em andamento</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Graduação focada em aprimorar habilidades técnicas e de gerenciamento de projetos, 
                    complementando a experiência prática com fundamentos teóricos sólidos.
                  </p>                
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Code className="h-6 w-6 text-blue-600" />
                      Desenvolvedor de software (nível 5 do Quadro Europeu de Qualificações)
                  </CardTitle>
                  <CardDescription>OBJECTIF 3W • 2015 - 2016</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Formação incluindo algoritmos, estruturas de dados, POO, MySQL, UML, 
                    PHP5, JavaScript, jQuery, Ajax, XML, HTML5 e CSS3.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {certifications.map((cert, index) => (
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="no-underline"
                  key={index}>
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    
                    <CardHeader>
                      <div className="flex gap-3">
                        <Award className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div className="flex gap-3 flex-1 items-center justify-center">
                          <CardTitle >{cert.title}</CardTitle>
                        </div>
                      </div> 
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium text-blue-600 mb-1">{cert.institution}</p>
                      <p className="text-sm text-slate-500 mb-2">{cert.location}</p>
                      <Badge variant="outline" className="text-xs">
                        {cert.year} • {cert.type}
                      </Badge>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

          </div>
          
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Entre em Contato
              </h2>
              <p className="text-lg text-slate-600">
                Vamos conversar sobre oportunidades e projetos interessantes
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Email</h3>
                    <p className="text-slate-600">eduardo.schoepf@hotmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Telefone</h3>
                    <p className="text-slate-600">+55 (51) 9 9704-1908</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Localização</h3>
                    <p className="text-slate-600">Santa Cruz do Sul, Brasil</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1"
                    onClick={() => window.open('https://www.linkedin.com/in/eduardoschoepf/', '_blank')}
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1"
                    onClick={() => window.open('https://github.com/eduardoschoepf', '_blank')}
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                </div>
              </div>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Envie uma Mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário e entrarei em contato em breve
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-slate-700 mb-2 block">
                          Nome
                        </label>
                        <Input 
                          placeholder="Seu nome" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700 mb-2 block">
                          Email
                        </label>
                        <Input 
                          type="email" 
                          placeholder="seu@email.com" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Assunto
                      </label>
                      <Input 
                        placeholder="Assunto da mensagem" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Mensagem
                      </label>
                      <Textarea 
                        placeholder="Sua mensagem..." 
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Button 
                      onClick={sendWhatsAppMessage}
                      className="w-full bg-green-600 hover:bg-green-700 text-white pt-2.5"
                    >
                      <MessageSquareText className="mr-2 h-5 w-5" />
                      Enviar WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Eduardo Schoepf</h3>
              <p className="text-slate-400">Desenvolvedor de Software</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400">
                © {new Date().getFullYear()} Eduardo Schoepf. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}