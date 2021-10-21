from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Sneaker
from .serializers import SneakerSerializer


# Create your views here.
class SneakerListView(APIView):

    def get(self, _request):
        sneakers = Sneaker.objects.all()
        print('Sneakers', sneakers)
        serialized_sneakers = SneakerSerializer(sneakers, many=True)
        print('Serializer', serialized_sneakers.data)
        return Response(serialized_sneakers.data, status=status.HTTP_200_OK)

    # POST /sneakers/
    # add a new sneaker
    def post(self, request):
        request.data['owner'] = request.user.id
        sneaker_to_add = SneakerSerializer(data=request.data)
        if sneaker_to_add.is_valid():
            sneaker_to_add.save()
            return Response(sneaker_to_add.data, status=status.HTTP_201_CREATED)
        return Response(sneaker_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


# single sneaker
class SneakerDetailView(APIView):

    def get_sneaker(self, pk):
        try:
            return Sneaker.objects.get(pk=pk)
        except Sneaker.DoesNotExist:
            raise NotFound(detail="🆘 Can't find that Sneaker!")

    # GET single sneaker
    def get(self, _request, pk):
            sneaker = Sneaker.objects.get(pk=pk)
            serialized_sneaker = SneakerSerializer(sneaker)
            return Response(serialized_sneaker.data, status=status.HTTP_200_OK)


    # DELETE single sneaker
    def delete(self, _request, pk):
        sneaker_to_delete = self.get_sneaker(pk=pk)
        sneaker_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


    # PUT single sneaker
    def put(self, request, pk):
        sneaker_to_update = self.get_sneaker(pk=pk)
        print('Request Data', request.data)
        updated_sneaker = SneakerSerializer(sneaker_to_update, data=request.data)
        if updated_sneaker.is_valid():
            updated_sneaker.save()
            print('Updated Data', updated_sneaker.data)
            return Response(updated_sneaker.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_sneaker.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)