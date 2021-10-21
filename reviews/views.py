from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

# import models
from .models import Review

# import serializer
from .serializers.common import ReviewSerializer

class ReviewListView(APIView):
    def post(self, request):
        review_to_add = ReviewSerializer(data=request.data)
        if review_to_add.is_valid():
            review_to_add.save()
            return Response(review_to_add.data, status=status.HTTP_201_CREATED)
        return Response(review_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class ReviewDetailView(APIView):

    def get_review(self, pk):
        try:
            review = Review.objects.get(pk=pk)
            return review
        except Review.DoesNotExist:
            raise NotFound(detail="🆘 Review not found")

    def delete(self, request, pk):
        review_to_delete = self.get_review(pk=pk)
        review_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)