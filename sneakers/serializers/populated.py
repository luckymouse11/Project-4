from reviews.models import Review
from .common import SneakerSerializer
from reviews.serializers.common import ReviewSerializer

class PopulatedSneakerSerializer(SneakerSerializer):
    reviews = ReviewSerializer(many=True)