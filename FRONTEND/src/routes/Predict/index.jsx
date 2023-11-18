import React, { useState, useEffect } from 'react';
import './predict.scss';

export default function App() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [result, setResult] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Recupera o nome do usuário da sessionStorage
    const storedUsername = sessionStorage.getItem("token-user");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleImageChange = (e) => {
    const uploadedImage = e.target.files[0];

    // Atualiza a URL da imagem para visualização instantânea
    setImageUrl(URL.createObjectURL(uploadedImage));

    // Atualiza o estado da imagem
    setImage(uploadedImage);

    // Realiza a previsão automaticamente
    handlePrediction(uploadedImage);
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

    console.log(data);
  };

  if (sessionStorage.getItem("token-user")) {
    return (
      <div>
        <div className="container">
          <div className="presentation">
            Olá {username}, como posso te ajudar?
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

            {imageUrl && (
              <div className="image-container">
                <img
                  src={imageUrl}
                  alt="Uploaded"
                  className="uploaded-image"
                />
              </div>
            )}

            {result && (
              <div className="result">
                Resultado: A classe predita é{' '}
                {result.predicted_class === 0
                  ? 'glioma'
                  : result.predicted_class === 1
                    ? 'meningioma'
                    : result.predicted_class === 2
                      ? 'sem tumor'
                      : result.predicted_class === 3
                        ? 'pituitary'
                        : ''}
              </div>
            )}
          </form>
        </div>
        <div className="container_2">

        </div>
      </div>
    );
  } else {
    window.location.href = "/";
    return null; // Adicione um retorno nulo para evitar problemas de renderização
  }
}
