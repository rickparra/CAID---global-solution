import React, { useState } from 'react';

function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Prever</button>
      </form>
  
      {result && (
  <div>
    Resultado: A classe predita é {result.predicted_class === 0 ? 'glioma' :
                                     result.predicted_class === 1 ? 'menigioma' :
                                     result.predicted_class === 2 ? 'sem tumor' :
                                     result.predicted_class === 3 ? 'pituitary' : ''}
  </div>
)}
    </div>
  );
}

export default App;
