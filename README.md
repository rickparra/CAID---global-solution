<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>

  <h1>CAID - Câncer AI Diagnóstico e Assistente Digital</h1>

  <p>O CAID é uma solução de Inteligência Artificial para auxiliar no diagnóstico precoce de câncer a partir da análise de imagens médicas combinada a dados clínicos do paciente.</p>

  <h2>Propósito do Projeto</h2>

  <p>O diagnóstico precoce do câncer pode aumentar significativamente as chances de sobrevivência e qualidade de vida dos pacientes. O CAID tem como objetivo utilizar técnicas de IA para aprimorar e acelerar a detecção do câncer em estágios iniciais e avançados.</p>

  <h2>Funcionalidades</h2>

  <ul>
    <li>Upload de imagens de exames tomografia</li>
    <li>Extração de dados relevantes do prontuário eletrônico do paciente</li>
    <li>Modelo de deep learning para análise das imagens e detecção de anomalias</li>
    <li>Chatbot para diálogo com o médico, levantando informações importantes do caso</li>
    <li>Interface amigável para apresentar resultados e explicações</li>
  </ul>

  <h2>Tecnologias Utilizadas</h2>

  <ul>
    <li>Python</li>
    <li>Framework KERAS para models de deep learning</li>
    <li>React para interface web</li>
    <li>Flask para o Backend</li>
  </ul>

  <h2>Começando</h2>

  <h3>Passos para Configurar e Executar o CAID</h3>

  <h4>Dependências Python</h4>

  <p>Certifique-se de ter as seguintes dependências Python instaladas antes de executar o CAID:</p>

  <h5>Dependências Backend</h5>

<pre><code>pip install flask opencv-python keras</code></pre>

<h5>Dependências para Análise de Dados e Treinamento do Modelo</h5>

<pre><code>pip install pandas numpy matplotlib seaborn pillow tqdm scikit-learn tensorflow</code></pre>


<ol>
  <li><strong>Treinar o Modelo de Deep Learning:</strong>
    <ul>
      <li>Acesse a pasta <code>deeplearning</code>.</li>
      <li>Abra o arquivo <code>keras.ipynb</code> execute para treinar o modelo.</li>
    </ul>
  </li>
  <li><strong>Configurar o Backend:</strong>
    <ul>
      <li>Vá para a pasta <code>backend</code>.</li>
      <li>Execute o arquivo <code>app.py</code>.</li>
    </ul>
  </li>
  <li><strong>Configurar o Frontend:</strong>
    <ul>
      <li>Execute os seguintes comandos em um terminal:</li>
    </ul>
    <pre><code>cd frontend
npm install
npm run backend  # Conectar com o jsonserver
npm run dev</code></pre>
  </li>
</ol>

  <h3>Após configurar o ambiente</h3>
  <h5>Após completar esses passos, acesse a tela de login:</h5>

<p>Faça login com as seguintes informações:<br>
Usuário: <code>Parra</code><br>
Senha: <code>senha</code></p>


  <h2>Contribuidores</h2>

<table>
  <tr>
    <th>Nome</th>
    <th>RM</th>
    <th>Turma</th>
  </tr>
  <tr>
    <td>Henrique Parra Benitez</td>
    <td>RM551973</td>
    <td>1ESPV</td>
  </tr>
  <tr>
    <td>Tony Willian da Silva Segalin</td>
    <td>RM550667</td>
    <td>1ESPV</td>
  </tr>
</table>


  <h2>License</h2>

  <p>Código aberto sob a licença MIT.</p>

</body>

</html>
