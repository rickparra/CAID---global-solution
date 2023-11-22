import React, { useState, useEffect } from 'react';
import './predict.scss';

export default function App() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [result, setResult] = useState(null);
  const [username, setUsername] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    // Recupera o nome do usuário da sessionStorage
    const storedUsername = sessionStorage.getItem('token-user');
    if (storedUsername) {
      setUsername(storedUsername);
    }
    // Inicia o chat com a mensagem inicial
    setChatMessages([
      { type: 'bot', text: 'Olá, como posso te ajudar?' },
      { type: 'bot', text: '1 - Prontuário Médico' },
      { type: 'bot', text: '2 - Acompanhamento de algum paciente' },
    ]);
  }, []);

  const handleImageChange = async (e) => {
    const uploadedImage = e.target.files[0];

    // Atualiza a URL da imagem para visualização instantânea
    setImageUrl(URL.createObjectURL(uploadedImage));

    // Atualiza o estado da imagem
    setImage(uploadedImage);

    // Adiciona a mensagem da imagem ao chat
    setChatMessages((prevMessages) => [...prevMessages, { type: 'user-image', image: uploadedImage, text: '' }]);

    // Realiza a previsão automaticamente
    await handlePrediction(uploadedImage);
  };

  const handlePrediction = async (image) => {
    if (!image) {
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      // Faz requisição POST para o Flask
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setResult(data);

      // Lógica de interação adicional com base no resultado
      handleUserInteraction(getClassName(data.predicted_class));
    } catch (error) {
      console.error('Erro na previsão:', error);
    }
  };

  const getClassName = (predictedClass) => {
    switch (predictedClass) {
      case 0:
        return 'glioma';
      case 1:
        return 'meningioma';
      case 2:
        return 'sem tumor';
      case 3:
        return 'pituitary';
      default:
        return '';
    }
  };

  const handleUserInteraction = (predictedClass) => {
    switch (predictedClass) {
      case '1':
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', text: 'Você selecionou prontuário médico. Como posso ajudar você? Escolha uma opção:' },
          { type: 'bot', text: '1-1 - Escolher um prontuário' },
          { type: 'bot', text: '1-2 - Ver histórico de consultas' },
          { type: 'bot', text: '1-3 - Agendar uma consulta' },
        ]);
        break;
      case '1-1':
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', text: 'Você escolheu a subopção 1 de prontuário médico.' },
          // Adicione lógica específica para a subopção 1 aqui
        ]);
        break;
      case '1-2':
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', text: 'Você escolheu a subopção 2 de prontuário médico. Aqui estão as consultas anteriores:' },
          // Adicione lógica específica para a subopção 2 aqui
        ]);
        break;
      case '1-3':
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', text: 'Você escolheu a subopção 3 de prontuário médico. Por favor, escolha uma data disponível para agendar:' },
          // Adicione lógica específica para a subopção 3 aqui
        ]);
        break;
      case '2':
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', text: 'Você selecionou Acompanhamento médico. Como posso ajudar você? Escolha uma opção:' },
          { type: 'bot', text: '2-1 - Ver pacientes em acompanhamento' },
          { type: 'bot', text: '2-2 - Adicionar novo paciente para acompanhamento' },
          { type: 'bot', text: '2-3 - Verificar resultados de exames' },
        ]);
        break;
      case '2-1':
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', text: 'Você escolheu a subopção 1 de acompanhamento médico. Aqui estão os pacientes:' },
          // Adicione lógica específica para a subopção 1 aqui
        ]);
        break;
      case '2-2':
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', text: 'Você escolheu a subopção 2 de acompanhamento médico. Por favor, forneça os detalhes do novo paciente:' },
          // Adicione lógica específica para a subopção 2 aqui
        ]);
        break;
      case '2-3':
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', text: 'Você escolheu a subopção 3 de acompanhamento médico. Por favor, forneça o nome do paciente para verificar os resultados de exames:' },
          // Adicione lógica específica para a subopção 3 aqui
        ]);
        break;
      case 'glioma':
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', text: 'Um glioma foi identificado.' },
        ]);
        break;
      case 'meningioma':
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', text: 'Um meningioma foi identificado.' },
        ]);
        break;
      case 'sem tumor':
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', text: 'Nenhum tumor foi identificado.' },
        ]);
        break;
      case 'pituitary':
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', text: 'Um tumor pituitário foi identificado.' },
        ]);
        break;
      default:
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', text: 'Desculpe, não entendi. Por favor, escolha uma opção válida.' },
        ]);
    }
  };
  


  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Adiciona a mensagem do usuário ao estado de mensagens do chat
    setChatMessages((prevMessages) => [...prevMessages, { type: 'user-text', text: inputMessage, image: null }]);

    // Lógica para interação com o usuário
    handleUserInteraction(inputMessage);

    setInputMessage('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (sessionStorage.getItem('token-user')) {
    return (
      <div>
        <div className="container">
          <div className="presentation">
            <h1>Olá {username}, como posso te ajudar?</h1>
          </div>
          <div className="chat-container">
            {chatMessages.map((message, index) => (
              <div key={index} className={message.type === 'user-text' ? 'user-message' : message.type === 'bot' ? 'bot-message' : 'image-message'}>
                {message.type === 'user-text' && <div className="user-message-content">{message.text}</div>}
                {message.type === 'bot' && <div className="bot-message-content">{message.text}</div>}
                {message.type === 'user-image' && <img src={URL.createObjectURL(message.image)} alt="User Uploaded" className="uploaded-image" />}
              </div>
            ))}
          </div>
          <div className="inputs-chat">
            <div className="input-container">
              <input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua mensagem..."
              />
              <button onClick={handleSendMessage}>Enviar</button>
            </div>
            <form>
              <label htmlFor="imageInput" className="upload-container">
                Arraste e solte ou clique aqui para escolher uma imagem
                <input
                  id="imageInput"
                  type="file"
                  onChange={(e) => handleImageChange(e)}
                  className="upload-input"
                />
              </label>
            </form>
          </div>
        </div>
        <div className="container_2"></div>
      </div>
    );
  } else {
    window.location.href = '/';
    return null; // Adicione um retorno nulo para evitar problemas de renderização
  }
}
