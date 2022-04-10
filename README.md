# File manager system

### How to configure

```
# -- Clone repository

git clone https://github.com/ivanmercedes/filemanager

# -- Navigate to the dir  project

cd filemanager

# -- Install composer pacakage

composer install
```

### configure database

copy **.env-example** and rename to **.env** and edit database environment key

```
DB_DATABASE=yourdatabase
DB_USERNAME=youruser
DB_PASSWORD=yourpassword

```

now run all migrations

```
php artisan migrate:refresh
```
