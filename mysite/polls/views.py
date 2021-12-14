from django.http.response import Http404
from django.shortcuts import get_object_or_404, render
from django import template
from django.http import HttpResponse
from django.template import loader

from polls.models import Question

# Create your views here.
# def index(request):
#     lastest_question_list = Question.objects.order_by('-pub_date')[:5]
#     # output = ', '.join([q.question_text for q in last_question_list])
#     template = loader.get_template('polls/index.html')
#     context = {
#         'lastest_question_list': lastest_question_list
#     }
#     return HttpResponse(template.render(context, request))
#A shortcut: render()
def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    context = {'latest_question_list': latest_question_list}
    return render(request, 'polls/index.html', context)

#rising a 404 error
# def detail(request, question_id):
#     try:
#         question = Question.objects.get(pk=question_id)
#     except:
#         raise Http404("Question does not exist")
#     return render(request, 'polls/detail.html', {'question': question})

#A shortcut: get_object_or_404()
def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/detail.html', {'question': question})

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting at question %s." % question_id)
