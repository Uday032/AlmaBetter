from django.urls import path
from .views import StudentViewSet 


urlpatterns = [
    path('allmarks/', StudentViewSet.as_view()),
]