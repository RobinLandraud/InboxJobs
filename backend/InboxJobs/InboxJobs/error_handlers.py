from django.http import JsonResponse
from django.conf import settings
import logging

logger = logging.getLogger(__name__)


def custom_404_view(request, exception):
    """
    Custom 404 error handler that returns JSON response
    """
    response_data = {
        'error': 'Not Found',
        'message': 'The requested resource was not found on this server.',
        'status_code': 404
    }
    
    # Add more details in debug mode
    if settings.DEBUG:
        response_data['path'] = request.path
        response_data['method'] = request.method
    
    return JsonResponse(response_data, status=404)


def custom_500_view(request):
    """
    Custom 500 error handler that returns JSON response
    """
    response_data = {
        'error': 'Internal Server Error',
        'message': 'An unexpected error occurred. Please try again later.',
        'status_code': 500
    }
    
    # Add more details in debug mode
    if settings.DEBUG:
        response_data['path'] = request.path
        response_data['method'] = request.method
    
    # Log the error
    logger.error(f"500 error on {request.path} - {request.method}")
    
    return JsonResponse(response_data, status=500)


def custom_400_view(request, exception):
    """
    Custom 400 error handler that returns JSON response
    """
    response_data = {
        'error': 'Bad Request',
        'message': 'The request could not be understood by the server.',
        'status_code': 400
    }
    
    if settings.DEBUG:
        response_data['path'] = request.path
        response_data['method'] = request.method
    
    return JsonResponse(response_data, status=400)


def custom_403_view(request, exception):
    """
    Custom 403 error handler that returns JSON response
    """
    response_data = {
        'error': 'Forbidden',
        'message': 'You do not have permission to access this resource.',
        'status_code': 403
    }
    
    if settings.DEBUG:
        response_data['path'] = request.path
        response_data['method'] = request.method
    
    return JsonResponse(response_data, status=403)