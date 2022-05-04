from rest_framework import serializers
from .models import Student, Path
from django.utils.timezone import now


# class StudentSerializer(serializers.Serializer):
#     first_name = serializers.CharField(max_length=30)
#     last_name = serializers.CharField(max_length=30)
#     number = serializers.IntegerField(required=False)

#     def create(self, validated_data):
#         return Student.objects.create(**validated_data)

#     def update(self, instance, validated_data):
#         instance.first_name = validated_data.get(
#             'first_name', instance.first_name)
#         instance.last_name = validated_data.get(
#             'last_name', instance.last_name)
#         instance.number = validated_data.get('number', instance.number)
#         instance.save()
#         return instance


class StudentSerializer(serializers.ModelSerializer):
    days_since_joined = serializers.SerializerMethodField()
    path = serializers.StringRelatedField()
    path_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Student
        fields = ["id", "path", "path_id", "first_name", "last_name",
                  "number", "days_since_joined"]
        # fields = '__all__'
        # exclude = ['number']

    def get_days_since_joined(self, obj):
        return (now() - obj.register_date).days

    def validate(self, data):
        """
        Check first_name and last_name
        """
        if data['first_name'] == data['last_name']:
            raise serializers.ValidationError(
                "First name and lastname are same.")
        return data

    def validate_number(self, value):
        if value < 1000:
            raise serializers.ValidationError(
                "Number must be bigger than 1000")


class PathSerializer(serializers.ModelSerializer):
    students = StudentSerializer(many=True)
    # students = serializers.PrimaryKeyRelatedField(read_only=True, many=True)

    class Meta:
        model = Path
        fields = ["id", "path_name", "students"]
