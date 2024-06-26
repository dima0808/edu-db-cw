# Модель прецедентів

## Загальна схема

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    actor "Гість" as Guest
    actor "Користувач" as User
    actor "Адміністратор" as Admin

    usecase "<b>Search<b> \n Пошук інформації" as GS
    usecase "<b>SignUp<b> \n Зареєструватися в системі" as GSU
    usecase "<b>SignIn<b> \n Увійти в систему" as GSI
    
    usecase "<b>Logout<b> \n Вихід з системи" as UL
    usecase "<b>Download<b> \n Завантаження файлу \n даних з системи" as UD
    usecase "<b>UploadRequest<b> \n Завантаження даних \n користувачем у систему" as UUR
    usecase "<b>EditRequest<b> \n Оновлення даних \n користувачем у систему" as UER

    usecase "<b>ChangeUserPermissions<b> \n Змінити доступ до функцій \n системи конкретному користувачеві" as ACUP
    usecase "<b>ApproveRequest<b> \n Одобрити запит користувача" as AAR
    usecase "<b>DenyRequest<b> \n Відхилити запит користувача" as ADR
    
    Guest -u-> GS
    Guest -u-> GSU
    Guest -u-> GSI
    
    User -u-> UL
    User -r-> UUR
    User -l-> UER
    User -d-> UD
    
    Admin -r-> ACUP 
    Admin -d-> AAR
    Admin -d-> ADR
    
    Admin -u-|> User
    User -u-|> Guest

@enduml

</center>

## Гість

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    actor "Гість" as Guest

    usecase "<b>Search<b> \n Пошук інформації" as GS
    usecase "<b>SignUp<b> \n Зареєструватися в системі" as GSU
    usecase "<b>SignIn<b> \n Увійти в систему" as GSI

    Guest -u-> GSU
    Guest -u-> GS
    Guest -u-> GSI

@enduml

</center>

## Користувач

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    actor "Користувач" as User

    usecase "<b>Logout<b> \n Вихід з системи" as UL
    usecase "<b>Download<b> \n Завантаження файлу \n даних з системи" as UD
    usecase "<b>DataChangeRequest<b> \n Запит користувача \n щодо зміни даних" as UCR
    usecase "<b>UploadRequest<b> \n Завантаження даних \n користувачем у систему" as UUR
    usecase "<b>EditRequest<b> \n Оновлення даних \n користувачем у систему" as UER

    User -u-> UL
    User -l-> UCR
    User -r-> UD

    UUR .u.> UCR:extends
    UER .d.> UCR:extends

@enduml

</center>

## Адміністратор

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml
    
    actor "Адміністратор" as Admin
    
    usecase "<b>ChangeUserPermissions<b> \n Змінити доступ до функцій \n системи конкретному користувачеві" as ACUP
    usecase "<b>ConsiderRequest<b> \n Розглянути запит користувача" as ACR
    usecase "<b>ApproveRequest<b> \n Одобрити запит користувача" as AAR
    usecase "<b>DenyRequest<b> \n Відхилити запит користувача" as ADR
    
    Admin -r-> ACUP
    Admin -l-> ACR
    
    AAR .u.> ACR:extends
    ADR .d.> ACR:extends

@enduml

</center>

## Сценарії використання

### Гість

| **ID:**                | `Search`                                    |
|------------------------|---------------------------------------------|
| **НАЗВА:**             | Пошук інформації.                           |
| **УЧАСНИКИ:**          | Гість, Система.                             |
| **ПЕРЕДУМОВИ:**        | Наявність бази даних для пошуку.            |
| **РЕЗУЛЬТАТ:**         | Інформація на основі запиту гостя.          |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Даних за запитом не знайдено - SearchError. |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

@startuml

    |Гість|
    start;
    : Переходить на сторінку пошуку;
    : Вводить дані в поле пошуку;
    : Натискає кнопку "Пошук";

    |Система|
    : Проводить пошук у базі даних
    <font color="red">(Можлива SearchError)</font>;
    : Відображає результати пошуку;

    |Гість|
    stop;

@enduml

</center>

| **ID:**                | `SignUp`                                                                                                                                                                                                                                                                                                                  |
|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Зареєструватися в системі.                                                                                                                                                                                                                                                                                                |
| **УЧАСНИКИ:**          | Гість, Система.                                                                                                                                                                                                                                                                                                           |
| **ПЕРЕДУМОВИ:**        | Гість не має облікового запису у системі.                                                                                                                                                                                                                                                                                 |
| **РЕЗУЛЬТАТ:**         | Створення нового облікового запису користувача.                                                                                                                                                                                                                                                                           |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Порожні обов'язкові поля для реєстрації - EmptyRequiredSignUpField <br/> Невірне заповнення полів згідно умов реєстрації - InvalidSignUpFiledValue. <br/> Користувач з вказаною електронною адресою вже зареєстрований у системі - UserAlreadyExist <br/> Пароль не відповідає умовам реєстрації - InvalidSignUpPassword. |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

@startuml

    |Гість|
    start;
    : Вибирає опцію "Реєстрація";

    |Система|
    : Перенаправляє гостя на сторінку із формою реєстрації;

    |Гість|
    : Заповнює форму реєстрації;
    : Натискає кнопку "Зареєструватися"
    <font color="red">(можливі EmptyRequiredSignUpField,</font>
    <font color="red">InvalidSignUpFiledValue,</font>
    <font color="red">InvalidSignUpPassword)</font>;

    |Система|
    : Перевіряє наявність облікового запису 
    з введеними даними гостя 
    <font color="red">(можлива UserAlreadyExist)</font>;
    : Створює новий обліковий запис для гостя;
    : Перенаправляє гостя на головну сторінку з повідомленням
    про успішну реєстрацію в системі;
    stop;

@enduml

</center>

| **ID:**                | `SignIn`                                                                                                                                                                                                             |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Увійти в систему.                                                                                                                                                                                                    | 
| **УЧАСНИКИ:**          | Гість, Система.                                                                                                                                                                                                      |
| **ПЕРЕДУМОВИ:**        | Гість має обліковий запис у системі.                                                                                                                                                                                 |
| **РЕЗУЛЬТАТ:**         | Вхід в обліковий запис користувача.                                                                                                                                                                                  |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | EmptyRequiredSignInField - Обов'язкові поля для входу не заповнені. <br/>IncorrectSignInPassword - Невірний пароль введений користувачем. <br/>UserNotFound - Користувач з вказаною електронною поштою не знайдений. |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

@startuml

    |Гість|
    start;
    : Вибирає опцію "Увійти в систему";

    |Система|
    : Перенаправляє гостя на сторінку з формою входу;

    |Гість|
    : Заповнює форму входу;
    : Натискає кнопку "Увійти"
    <font color="red">(можлива EmptyRequiredSignInField)</font>;

    |Система|
    : Перевіряє наявність облікового запису
    <font color="red">(можлива UserNotFound)</font>;
    : Перевіряє введений гостем пароль
    <font color="red">(можлива IncorrectSignInPassword)</font>;
    : Надає доступ до облікового запису користувача;
    : Перенаправляє гостя на головну сторінку з повідомленням
    про успішний вхід у систему;
    stop;

@enduml

</center>

### Користувач

| **ID:**                | `Logout`                               |
|------------------------|----------------------------------------|
| **НАЗВА:**             | Вихід з системи.                       | 
| **УЧАСНИКИ:**          | Користувач, система.                   |
| **ПЕРЕДУМОВИ:**        | Користувач увійшов до системи.         |
| **РЕЗУЛЬТАТ:**         | Вихід з облікового запису користувача. |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Немає.                                 |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

@startuml

    |Користувач|
    start;
    : Вибирає опцію "Вийти";

    |Система|
    : Відображає вікно для підтвердження виходу;

    |Користувач|
    : Натискає "Так", щоб підтвердити свій намір вийти;

    |Система|
    : Завершує сеанс користувача;
    : Перенаправляє користувача на головну сторінку;
    stop;

@enduml

</center>

| **ID:**                | `Download`                                                                            |
|------------------------|---------------------------------------------------------------------------------------|
| **НАЗВА:**             | Завантаження файлу даних з системи.                                                   | 
| **УЧАСНИКИ:**          | Користувач, система.                                                                  |
| **ПЕРЕДУМОВИ:**        | Користувач авторизувався в системі, інформація знайдена у базі даних.                 |
| **РЕЗУЛЬТАТ:**         | Файл з даними успішно завантажено з системи у відповідному форматі.                   |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Файл з даними у відповідному форматі не доступний у системі - DataFormatNotAvailable. |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

@startuml

    |Користувач|
    start;
    : Вибирає опцію "Завантажити на пристрій";
    : Вибирає формат файлу для завантаження;

    |Система|
    : Перевіряє наявність відповідного формату файлу у базі даних
    <font color="red">(можлива DataFormatNotAvailable)</font>;
    : Розпочинає передачу файлу у вибраному форматі на комп'ютер користувача;
    : Повідомляє про успішне завершення завантаження;
    stop;

@enduml

</center>

| **ID:**                | `UploadRequest`                                                                               |
|------------------------|-----------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Завантаження даних користувачем у систему.                                                    | 
| **УЧАСНИКИ:**          | Користувач, Адміністратор, Система.                                                           |
| **ПЕРЕДУМОВИ:**        | Система управління даними дозволяє користувачам пропонувати завантаження нових наборів даних. |
| **РЕЗУЛЬТАТ:**         | Користувацький запит на розміщення нової інформації.                                          |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Недоступний формат файлу - DataFormatNotAvailable. <br/>Відсутність даних - MissingData.      |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

@startuml

    |Користувач|
    start;
    : Переходить на веб-сторінку, де можна загрузити нові дані;
    : Вибирає опцію "Загрузити нові дані";
    : Вибирає формат файлу для завантаження;

    |Система|
    : Відображає вікно з формою для загрузки даних;

    |Користувач|
    : Обирає файл з даними на своєму пристрої;

    |Система|
    : Перевіряє формат та структуру даних 
    <font color="red">(можливі DataFormatNotAvailable, MissingData)</font>;
    
    |Користувач|
    : Переглядає параметри завантаження даних та підтверджує 
    їх, натискаючи кнопку "Надіслати";

    |Система|
    : Обробляє завантажені дані, зберігає їх у системній базі даних;
    : Надсилає на перевірку адміністратору;
    : Повідомляє про успішне завантаження та прохання зачекати на результати перевірки;
    stop;

@enduml

</center>

| **ID:**                | `EditRequest`                                                                                                     |
|------------------------|-------------------------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Оновлення даних користувачем у систему.                                                                           | 
| **УЧАСНИКИ:**          | Користувач, Адміністратор, Система.                                                                               |
| **ПЕРЕДУМОВИ:**        | Система управління даними відкрита для користувачів, щоб вони могли пропонувати оновлення існуючих наборів даних. |
| **РЕЗУЛЬТАТ:**         | Користувацький запит на редагування даних.                                                                        |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Відсутність змін у даних - DataNotEdited.<br/> Дані повністю видалені - DataDeleted.                              |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

@startuml

    |Користувач|
    start;
    : Переходить на веб-сторінку, де можна відредагувати дані;

    |Система|
    : Відображає вікно для редагування даних;

    |Користувач|
    : Вносить зміни в дані та натискає кнопку "Зберегти";

    |Система|
    : перевіряє внесені зміни 
    <font color="red">(можливі DataNotEdited, DataDeleted)</font>;
    
    |Користувач|
    : Переглядає всі свої зміни та натискає кнопку "Надіслати" для підтвердження;

    |Система|
    : Обробляє змінені дані, зберігає їх у системній базі даних;
    : Надсилає на перевірку адміністратору;
    : Повідомляє про успішне редагування та прохання зачекати на результати перевірки;
    stop;

@enduml

</center>


### Адміністратор

| **ID:**                | `ChangeUserPermissions`                                      |
|------------------------|--------------------------------------------------------------|
| **НАЗВА:**             | Змінити доступ до функцій системи конкретному користувачеві. | 
| **УЧАСНИКИ:**          | Адміністратор, Система.                                      |
| **ПЕРЕДУМОВИ:**        | Користувач зареєстрований у системі.                         |
| **РЕЗУЛЬТАТ:**         | Зміна рівня доступу до функціоналу системи для користувача.  |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Користувача не знайдено в системі - UserNotFound.            |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

@startuml

    |Адміністратор|
    start;
    : Обирає опцію "Керувати користувачами" на сторінці зі списком користувачів;

    |Система|
    : Активує режим управління користувачами для адміністратора та додає 
    опцію зміни доступу до функцій системи для кожного користувача;

    |Адміністратор|
    : Натискає кнопку "Змінити доступ до функцій" для відповідного користувача;

    |Система|
    : Перевіряє наявність даного користувача у базі даних 
    <font color="red">(можлива UserNotFound)</font>;
    : Направляє адміністратора на сторінку управління доступними функціями 
    для цього користувача;
    
    |Адміністратор|
    : Вносить зміни у доступ до функцій системи для користувача та 
    натискає кнопку "Підтвердити";

    |Система|
    : Зберігає внесені зміни у доступі до функцій для користувача;
    : Перенаправляє адміністратора на сторінку зі списком користувачів;
    stop;

@enduml

</center>

| **ID:**                | `ApproveRequest`                                  |
|------------------------|---------------------------------------------------|
| **НАЗВА:**             | Одобрити запит користувача.                       | 
| **УЧАСНИКИ:**          | Адміністратор, система.                           |
| **ПЕРЕДУМОВИ:**        | Користувач надіслав запит.                        |
| **РЕЗУЛЬТАТ:**         | Зміни в системі відповідно до запиту користувача. |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Немає.                                            |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

@startuml

    |Адміністратор|
    start;
    : Переходить на сторінку, де можна переглянути запити;
    : Натискає кнопку "Одобрити запит";

    |Система|
    : Надає доступ до нових даних користувачеві;
    : Видаляє запит зі списку;
    stop;

@enduml

</center>

| **ID:**                | `DenyRequest`                            |
|------------------------|------------------------------------------|
| **НАЗВА:**             | Відхилити запит користувача.             | 
| **УЧАСНИКИ:**          | Адміністратор, система.                  |
| **ПЕРЕДУМОВИ:**        | Користувач надіслав запит.               |
| **РЕЗУЛЬТАТ:**         | Видалення запиту з системної бази даних. |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Немає.                                   |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

@startuml

    |Адміністратор|
    start;
    : Переходить на сторінку, де можна переглянути запити;
    : Натискає кнопку "Відхилити запит";

    |Система|
    : Видаляє запит зі списку;
    stop;

@enduml

</center>