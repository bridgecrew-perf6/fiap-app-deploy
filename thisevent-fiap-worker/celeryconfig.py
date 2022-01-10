broker_url = 'amqp://guest@rabbit-local//'

task_routes = {
    'tasks.add': 'low-priority',
}
