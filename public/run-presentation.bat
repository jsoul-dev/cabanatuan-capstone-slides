@echo off
title SCENTALA Brand Presentation
echo ===================================================
echo   SCENTALA - Luxury Fragrance Brand Presentation
echo ===================================================
echo.
echo Starting local presentation server...
echo.

:: Check for Python
where python >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Launching with Python on http://localhost:8000 ...
    start http://localhost:8000
    python -m http.server 8000
    goto end
)

:: Check for Node / npx
where npx >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Launching with Node.js on http://localhost:8000 ...
    npx serve -l 8000 .
    goto end
)

:: Fallback
echo Opening live presentation...
start https://scentala.netlify.app

:end
pause
