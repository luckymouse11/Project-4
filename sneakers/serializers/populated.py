from .common import SneakerSerializer
from reviews.serializers.populated import PopulatedReviewSerializer
from colours.serializers.common import ColourSerializer
from jwt_auth.serializers.common import UserSerializer

class PopulatedSneakerSerializer(SneakerSerializer):
    reviews = PopulatedReviewSerializer(many=True)
    colour = ColourSerializer(many=True)
    owner = UserSerializer()