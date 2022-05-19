FROM php:7.3-apache
RUN apt-get update && apt-get install -y \
        nano \
        libicu-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libzip-dev \
    && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ && \ 
docker-php-ext-install gd intl pdo pdo_mysql mysqli mbstring zip 

COPY ./docker/apache/site.conf /etc/apache2/sites-available/000-default.conf
COPY ./docker/apache/SSL/ssl.conf /etc/apache2/sites-available/ssl.conf
COPY . .

RUN echo '\
log_errors = On\n\
error_log = /dev/stderr\n\
error_reporting = E_ALL\n\
' >> /usr/local/etc/php/php.ini

RUN pecl install xdebug \
  && docker-php-ext-enable xdebug

RUN mkdir -p \
    tmp/cache/models \
    tmp/cache/persistent \
  && chown -R :www-data \
    tmp \
  && chmod -R 770 \
    tmp
RUN a2enmod headers 
RUN a2enmod ssl
RUN a2ensite ssl
RUN echo ServerName localhost> /etc/apache2/conf-available/fqdn.conf && a2enconf fqdn
# Enable Apache modules and restart
RUN a2enmod rewrite \
  && service apache2 restart

EXPOSE 80
