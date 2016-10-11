# Скрипты UI-лементов (разбиты на файлы с соответствующим названием):


## Индикатор процесса

### Как использовать индикатор процесса для страницы:
1. Поместите внутрь <body> код:
```html
    <div class="bal_loader" data-bal-role="page">
        <div class="bal_loader__indicator"></div>
    </div>
```
2. Подключите balalayka.loader.js;
3. Лоадер появится при открытии страницы и скроется после полной её загрузки.

### Как использовать индикатор процесса для элемента:
1. Поместите внутрь элемента код:
```html
    <div class="bal_loader" data-bal-role="element">
        <div class="bal_loader__indicator"></div>
    </div>
```
2. Проследите, чтобы у самого этого элемента был position: relative | absolute | fixed;
3. Запускайте индикатор процесса, добавив к нему класс loading;
4. Останавливайте, убрав класс loading.


## Модальное окно и алерт

### Как использовать простое модальное окно:
1. Добавьте на элемент, при нажатии на который должно открыть модальное окно, атрибут data-bal-popup="xxx", где xxx - атрибут id модального окна;
2. Добавьте в тег <body> код:
```html
    <div class="bal_popups_bg"></div> - добавляется один раз
    <div class="bal_popup" id="xxx"> - добавляется столько раз, сколько у вас мод. окон (каждый со уникальным атрибутом id)
        <button class="bal_popup__cross" data-bal-action="close" title="Закрыть"></button>
        ...
    </div>
```
3. Мод. окно закрывается при клике на фон, при нажатии клавиши Esc, а также при нажатии на все элементы внутри модального окна, у которых есть атрибут data-bal-action="close".


### Вызов алерта.
Функционал модального окна также предполагает вызов своего алерта на базе модального окна. Для этого:
1. Добавьте в тег <body> код:
```html
    <div class="bal_popups_bg"></div>
    <div class="bal_popup" id="alert">
        <button class="bal_popup__cross" data-bal-action="close" title="Закрыть"></button>
        <div class="bal_title h2"></div>
        <p class="bal_text"></p>
    </div>
```
2. Вызывайте алерт следующим кодом:
```javascript
    balAlert('Это заголовок сообщения', 'Это текст сообщения');
```


## Стилизованный комбобокс Chosen

### Выбор одной опции:
```html
<select class="chosen">
    <option>Опция 1</option>
    <option>Опция 2</option>
</select>
```

### Выбор нескольких опций:
```html
<select class="chosen" multiple>
    <option>Опция 1</option>
    <option>Опция 2</option>
</select>
```