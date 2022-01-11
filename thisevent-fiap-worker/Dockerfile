FROM python:3.9.5-alpine

#ENV AUTH_URL=http://thisevent_fiap_auth_service/api

ADD . /customer-service-api
WORKDIR /customer-service-api

COPY . /requirements.txt

RUN pip install --upgrade pip
RUN pip install -r requirements.txt 
EXPOSE 5003

CMD ["celery",  "-A", "tasks", "worker", "--loglevel=INFO"]