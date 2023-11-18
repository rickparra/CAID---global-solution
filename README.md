# CAID - Câncer AI Diagnóstico e Assistente Digital

O CAID é uma solução de Inteligência Artificial para auxiliar no diagnóstico precoce de câncer a partir da análise de imagens médicas combinada a dados clínicos do paciente.

## Propósito do Projeto

O diagnóstico precoce do câncer pode aumentar significativamente as chances de sobrevivência e qualidade de vida dos pacientes. O CAID tem como objetivo utilizar técnicas de IA para aprimorar e acelerar a detecção do câncer em estágios iniciais e avançados.

## Funcionalidades

- Upload de imagens de exames como mamografia, tomografia, etc.
- Extração de dados relevantes do prontuário eletrônico do paciente
- Modelo de deep learning para análise das imagens e detecção de anomalias
- Chatbot para diálogo com o médico, levantando informações importantes do caso
- Interface amigável para apresentar resultados e explicações

## Tecnologias Utilizadas

- Python
- Framework KERAS para models de deep learning
- React para interface web
- Flask para a API

## Começando

### Passos para Configurar e Executar o CAID

1. **Treinar o Modelo de Deep Learning:**
   - Acesse a pasta `deeplearning`.
   - Abra o arquivo `keras.ipynb` para treinar o modelo.

2. **Configurar o Backend:**
   - Vá para a pasta `backend`.
   - Execute o arquivo `app.py`.

3. **Configurar o Frontend:**
   - Vá para a pasta `frontend`.
   - Execute os seguintes comandos:
      ```bash
      npm install
      npm run backend  # Conectar com o jsonserver
      npm run dev
      ```

## Contribuindo

Informações sobre como contribuir com o projeto - issues, pull requests, etc.

## License

Código aberto sob a licença MIT.
