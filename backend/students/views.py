from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view, APIView
from rest_framework.response import Response
from .models import StudentMarks
from .serializers import StudentSerializer
# Create your views here.

class StudentViewSet(APIView):

    def get(self, request, format=None):
        studentmarks = StudentMarks.objects.all()
        serializer = StudentSerializer(studentmarks, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        print(request.data)
        student = StudentMarks.objects.filter(roll_no= request.data["roll_no"])
        serializerstudent = StudentSerializer(student, many=True)
        if(len(serializerstudent.data)==0):
            serializer = StudentSerializer(data=request.data)
            if(serializer.is_valid()):
                serializer.save()
            
            return Response(serializer.data)
        return Response("User already exists")
# {
# "roll_no":"1",
# "name":"Uday Agarwal",
# "physicsmarks":"90",
# "mathsmarks":"80",
# "chemistrymarks":"90"
# }