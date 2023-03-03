<p align="center">
    <img src="https://github.com/octobercms/october/blob/develop/themes/demo/assets/images/october.png?raw=true" alt="October" width="25%" height="25%" />
</p>

[October](https://octobercms.com) is a Content Management System (CMS) and web platform whose sole purpose is to make your development workflow simple again. It was born out of frustration with existing systems. We feel building websites has become a convoluted and confusing process that leaves developers unsatisfied. We want to turn you around to the simpler side and get back to basics.

October's mission is to show the world that web development is not rocket science.

![Stable Build](https://github.com/octobercms/october/workflows/Tests/badge.svg?branch=1.1)
[![License](https://poser.pugx.org/october/october/license.svg)](https://packagist.org/packages/october/october)

## Installing October

1. Create a folder and open it
```
    mkdir new_folder
    cd new_folder
```
2. Write the command below and clone git repo
```
    git clone git@github.com:deikkiu/jaisan-octobercms.git
```
3. Install the necessary packages and settings
```
    composer install
    php artisan october:install
```
4. If necessary, change the admin password
```
    php artisan october:passwd admin <new_password>
```
5. Start any local server (Open Server, MAMP, xaamp)

