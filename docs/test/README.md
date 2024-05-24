# Тестування працездатності системи

*В цьому розділі необхідно вказати засоби тестування, навести вихідні коди тестів та результати тестування.*
*Тестування виконується за допомогою Postman*
*Для авторизації використовуються JWT токени. У кожному запиті Користувача або Адміністратора в Headers додається Authorization з токеном*

## GET

### Отримати всі дані - Гість

![](./images/GET_allData.png)

### Отримати всі запити (виводяться запити користувача) - Користувач

![](./images/GET_allRequests.png)

### Отримати всі запити (виводяться запити всіх користувачів) - Адміністратор

![](./images/GET_allRequests_admin.png)

### Отримати дані користувача - Користувач

![](./images/GET_user.png)

## POST

### Схвалити запит - Адміністратор

![](./images/POST_approveRequest_admin.png)

### Відхилити запит - Адміністратор

![](./images/POST_denyRequest_admin.png)

### Зареєстуватись - Гість

![](./images/POST_signup_1.png)
![](./images/POST_signup_2.png)

### Авторизуватись - Гість

![](./images/POST_signin.png)

### Відправити запит - Користувач

![](./images/POST_uploadRequest.png)

## PATCH

### Добавити дозволи користувачу - Адміністратор

![](./images/PATCH_addPermissions_admin_1.png)
![](./images/PATCH_addPermissions_admin_2.png)

### Оновити профіль користувача - Користувач

![](./images/PATCH_user_1.png)
![](./images/PATCH_user_2.png)

## DELETE

### Видалити дозволи користувача - Адміністратор

![](./images/DELETE_deletePermissions_admin_1.png)
![](./images/DELETE_deletePermissions_admin_2.png)
