[![Build status](https://ci.appveyor.com/api/projects/status/v1we8vddletw6mce?svg=true)](https://ci.appveyor.com/project/LiquidAssContainer/ahj-anim)

# Animation

[GitHub Pages](https://liquidasscontainer.github.io/ahj_anim).

### Collapse

Всё работает, но есть случай некорректного поведения: если `collapse_hidden-text` имеет слишком большую высоту (например, от 1000 пикселей), то у `collapse_hidden-text_container` вычисляется меньшая высота, из-за чего часть текста не видна. Во всяком случае так было при значительном сужении ширины окна.

### Callback Chat

Работает, для элемента класса `chat` не заморачивался со стилями. Есть некритичная вещь: если навести курсор на ещё открывающуюся кнопку `chat_toggle-btn`, то последующий `transition` не будет плавным.

### Liker

Решил, что случайно выбранную анимацию удобнее задавать через JS стилям элемента. Также создал отдельный `like_wrapper`, чтобы разделить анимации перемещения вверх и перемещения по сторонам.
