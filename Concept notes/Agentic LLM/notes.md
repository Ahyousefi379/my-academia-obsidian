ذخیره کردن api_key به شکل key_value بدون hard code:

ذخیره کردنشون تو یه فایل با پسوند .env
تو jupyter:
```python
%load_ext dotenv
%dotenv
```

# add data to history of messages
```python
from langchain_core.chat_history import InMemoryChatMessageHistory

history.add_user_message("hey, what's your name?")
history.add_ai_message("hi!,my name is Alfred, nice to meet you")

history = InMemoryChatMessageHistory()

#multiple outputs
background_info.json()
background_info.dict()
background_info.schema()

background_info.clear()
```

