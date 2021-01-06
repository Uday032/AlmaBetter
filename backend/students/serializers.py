from rest_framework import serializers
from .models import StudentMarks

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentMarks
        fields = '__all__'
