from django.shortcuts import render
from .models import Products
# Create your views here.

def index(request):
    return render(request,'index.html')

def post(request):
#     name = request.POST['name']
#     desc = request.POST['desc']
#     image = request.POST['image']
#     products = Products(name=name,image=image,description=desc)
#     products.save()
    return render(request,'a.html')


def indo(request):
    allpost = Products.objects.all()
    params = {'allpost':allpost}
    
    return render(request,'index.html',params)