FROM php:8.2-cli
WORKDIR /app
COPY . /app
RUN apt-get update && apt-get install -y zip unzip git
RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer
RUN composer install --no-interaction --prefer-dist --optimize-autoloader
EXPOSE 8000
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
