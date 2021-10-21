from django.urls import path
from .views import SneakerListView, SneakerDetailView


urlpatterns = [
    path('', SneakerListView.as_view()),                # /sneakers/
    path('<int:pk>/', SneakerDetailView.as_view())      # /smeakers/:pk
]