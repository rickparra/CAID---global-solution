import React from 'react';
import './about.scss'; // Importing the SCSS file directly
import LinhaDivisora from '../../components/LinhaDivisora';
import Block from '../../components/Block';

export default function About() {
  return (
    <>
      <div className="top_site">
        <div className="title">
          <div className="leftTitle">
            <h1>Transformando o prognóstico</h1>
          </div>
          <div className="rightTitle">
            <h1>com tecnologia e cuidado</h1>
          </div>
        </div>

        <div className="sub_title">
          <h3>
            A CAID é desenvolvida pelos estudantes da FIAP, visa a ciência de ponta para longeridade com qualidade.
          </h3>
        </div>
      </div>

      <LinhaDivisora />

      <div className="nossasIdeias">
        <div className="esquerda">
          <h2>Nosso Propósito</h2>
        </div>

        <div className="direita">
          <h1>
          Nosso propósito com o CAID é criar um impacto positivo e duradouro na vida dos pacientes. Com dedicação à tecnologia e inovação em saúde, vamos superar expectativas no diagnóstico precoce do câncer, promovendo mudanças significativas no prognóstico e qualidade de vida dos nossos pacientes. Acreditamos no poder da inovação e cuidado centrado na pessoa para transformar vidas.          </h1>

          <div className="blockContainer">
            <Block
              title="Por que a detecção precoce?"
              text="A detecção precoce do câncer desponta como um dos desafios mais prementes na medicina, e mantemos a firme convicção de que a tecnologia e a inovação em IA podem transformar o diagnóstico, possibilitando que o tratamento aconteça a tempo de salvar vidas. Nosso propósito com o CAID é remodelar a rotina nos hospitais, onde a certeza diagnóstica e a atenção humanizada são realidade para cada paciente."
            />

            <Block
              title="Interdisciplinar"
              text="Nós somos um grupo formado por estudantes, pesquisadores, engenheiros e líderes, trazendo uma variedade de experiências que enriquecem nossa cultura."
            />

            <Block
              title="Nossa Abordagem"
              text="Nossa abordagem é baseada na coleta de dados do prontuário eletrônico do paciente em tempo real, integrada a imagens de exames como tomografia. Esses dados são processados por nossa inteligência artificial, que analisa os exames levando em conta o contexto clínico de cada paciente. Além disso, estamos trabalhando para integrar nosso sistema de suporte a decisões com os fluxos de trabalho dos hospitais, provendo diagnósticos personalizados por meio de um chatbot amigável aos médicos."
            />

            <Block
              title="Assistente de Diagnósticos"
              text="Promovemos uma melhora no fluxo de trabalho dos médicos, provendo um assistente virtual baseado em IA para apoiar no processo de diagnóstico. Nosso chatbot serve como um estágiario virtual, que pode fornecer informações relevantes dos pacientes e interpretar resultados de exames de imagem, explicando os fatores por trás das predições. Dessa forma, os médicos podem tomar decisões mais assertivas e focar sua atenção no cuidado humanizado com os pacientes."
            />
          </div>
        </div>
      </div>

      <LinhaDivisora />

      <div className="nossasIdeias">
        <div className="esquerda">
          <h2>Nossa Equipe</h2>
        </div>

        <div className="direita">
          <h1>
            Compostos por estudantes, pesquisadores, engenheiros e líderes, somos uma equipe que reúne habilidades em diversas áreas. Trabalhamos em juntos para forjar um futuro melhor.
          </h1>

          <div className="blockContainer">
            <Block
              title="Pesquisa e Desenvolvimento"
              text="Nossa equipe de pesquisa e desenvolvimento está comprometida em criar soluções inovadoras para melhorar a segurança urbana. Utilizamos tecnologia de ponta para coletar e analisar dados em tempo real."
            />

            <Block
              title="Políticas de Segurança"
              text="Nosso compromisso com políticas de segurança rigorosas garante que os dados dos usuários sejam protegidos e mantidos com o mais alto padrão de confidencialidade."
            />

            <Block
              title="Produto e Inovação"
              text="Estamos constantemente aprimorando nosso produto para atender às necessidades em constante evolução de nossos usuários. A inovação está no cerne do que fazemos."
            />

            <Block
              title="Operações Eficientes"
              text="Nossas operações são executadas com eficiência para garantir que o UrbanShield seja uma plataforma confiável e funcional para todos os nossos usuários."
            />
          </div>
        </div>
      </div>

      <LinhaDivisora />

      <div className="nossasIdeias">
        <div className="esquerda">
          <h2>Nossos Valores</h2>
        </div>

        <div className="direita">
          <div className="blockContainer">
            <Block
              title="Integridade"
              text="A integridade é o alicerce dos nossos valores. Comprometemo-nos a agir com honestidade, transparência e ética em todas as nossas ações."
            />

            <Block
              title="Inovação"
              text="Valorizamos a inovação como meio para impulsionar a mudança positiva. Buscamos constantemente maneiras criativas de abordar os desafios de segurança urbana."
            />

            <Block
              title="Colaboração"
              text="Acreditamos no poder da colaboração. Trabalhamos em conjunto com parceiros e a comunidade para alcançar nossos objetivos comuns."
            />

            <Block
              title="Empoderamento"
              text="Empoderamos nossos usuários fornecendo-lhes as ferramentas e informações necessárias para tomar decisões informadas sobre sua segurança."
            />
          </div>
        </div>
      </div>
    </>
  );
}
