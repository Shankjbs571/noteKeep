from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class Note(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    color = models.CharField(max_length=20, default='white')  # Note color
    pinned = models.BooleanField(default=False)  # Whether the note is pinned
    archived = models.BooleanField(default=False)  # Whether the note is archived
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title


