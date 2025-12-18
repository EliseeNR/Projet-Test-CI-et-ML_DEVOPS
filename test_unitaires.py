import pytest
import joblib


# Charger le modèle
def load_model():
    return joblib.load('regression.joblib')

@pytest.fixture
def model():
    return load_model()

def test_prediction_positive(model):
    """Vérifie que la prédiction renvoie un nombre positif"""
    X = [[100, 3, 1]]  # taille=100, 3 chambres, jardin=1
    prediction = model.predict(X)
    assert prediction[0] > 0

def test_prediction_type(model):
    """Vérifie que la prédiction est bien un float"""
    X = [[80, 2, 0]]
    prediction = model.predict(X)
    assert isinstance(prediction[0], float)

model = load_model()
test_prediction_positive(model)
test_prediction_type(model)
