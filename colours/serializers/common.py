from rest_framework import serializers
from ..models import Colour

# define generic serializer
class ColourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colour
        fields = '__all__'