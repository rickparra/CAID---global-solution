from flask import Flask, request, jsonify
import cv2
import numpy as np
from keras.models import load_model

app = Flask(__name__)

# Carrega modelo
model = load_model('E:\FIAP\GLOBAL\DEEPLEARNING\modelo\modelo.h5')

# Habilita CORS
from flask_cors import CORS
CORS(app, origins='*')

# Rota para predição
@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    # Obtém imagem
    img = cv2.imdecode(np.frombuffer(request.files['image'].read(), np.uint8), cv2.IMREAD_COLOR)
    
    # Pré-processamento da Imagem
    img = cv2.resize(img, (150, 150))
    img = img / 255.0  # Normalização
    img = np.expand_dims(img, axis=0)

    # Predição
    prediction = model.predict(img)

    # Interpretar a Predição
    predicted_class = np.argmax(prediction)
    
    return jsonify({"predicted_class": int(predicted_class)})

if __name__ == '__main__':
    app.run(debug=True)
