from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# import models
from .models import Colour

# import serializers
from .serializers.populated import PopulatedColourSerializer

# define views
class ColourListView(APIView):

    def get(self, _request):
        colours = Colour.objects.all()
        serialized_colours = PopulatedColourSerializer(colours, many=True)
        return Response(serialized_colours.data, status=status.HTTP_200_OK)