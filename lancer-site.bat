@echo off
echo ========================================
echo   Creations Artisanales - Lancement
echo ========================================
echo.
echo Demarrage du serveur local...
echo.
echo Le site sera accessible a l'adresse :
echo http://localhost:8000
echo.
echo Appuyez sur Ctrl+C pour arreter le serveur
echo.

REM Essayer Python 3
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Utilisation de Python...
    python -m http.server 8000
    goto :end
)

REM Essayer PHP
php --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Utilisation de PHP...
    php -S localhost:8000
    goto :end
)

REM Si aucun serveur n'est disponible
echo.
echo ATTENTION: Aucun serveur local n'a ete trouve.
echo.
echo Vous pouvez :
echo 1. Double-cliquer sur index.html pour ouvrir le site
echo 2. Installer Python depuis https://python.org
echo 3. Installer Node.js et utiliser 'npx serve'
echo.
pause

:end
