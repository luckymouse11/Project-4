from sneakers.models import Sneaker
from .common import ColourSerializer
from sneakers.serializers.common import SneakerSerializer

class PopulatedColourSerializer(ColourSerializer):
    sneakers = SneakerSerializer(many=True)