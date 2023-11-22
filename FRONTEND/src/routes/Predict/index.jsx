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
      // Adicione lógica para lidar com nenhum arquivo selecionado, se necessário
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    // Faz requisição POST para o Flask
    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setResult(data);

    // Adiciona a mensagem do bot ao chat com o resultado
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { type: 'bot', text: `A classe prevista é ${getClassName(data.predicted_class)}` },
    ]);
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

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Adiciona a mensagem do usuário ao estado de mensagens do chat
    setChatMessages((prevMessages) => [...prevMessages, { type: 'user-text', text: inputMessage, image: null }]);
    setInputMessage('');

    // Adicione a lógica de envio da mensagem para o chatbot aqui (se necessário)
  };

  const handleKeyDown = (event) => {
    if(event.key === 'Enter') {
      handleSendMessage();
    }
  }

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
