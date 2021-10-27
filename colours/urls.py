from django.urls import path

# import views
from .views import ColourListView

urlpatterns = [
    path('', ColourListView.as_view())
]