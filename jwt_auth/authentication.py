from rest_framework.authentication import BasicAuthentication   # Class to inherit that has pre-defined validations
from rest_framework.exceptions import PermissionDenied          # throws an exception
from django.contrib.auth import get_user_model                  # method that returns the current auth model
from django.conf import settings                                # import settings so we can get secret key
import jwt                                                      # import jwt so we can decode the token in the auth header

User = get_user_model() # saving auth model to a variable

class JWTAuthentication(BasicAuthentication):

    def authenticate(self, request):
        header = request.headers.get('Authorization')

        if not header:
            return None

        if not header.startswith('Bearer'):
            raise PermissionDenied(detail="Invalid Auth Token Format")

        token = header.replace('Bearer ', '')

        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(pk=payload.get('sub'))

        except jwt.exceptions.InvalidTokenError:
            raise PermissionDenied(detail='Invalid Token')

        except User.DoesNotExist:
            raise PermissionDenied(detail='User Not Found')

        return (user, token)