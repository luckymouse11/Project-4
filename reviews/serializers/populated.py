from jwt_auth.serializers.common import User, UserSerializer
from .common import ReviewSerializer

class PopulatedReviewSerializer(ReviewSerializer):
    owner = UserSerializer()