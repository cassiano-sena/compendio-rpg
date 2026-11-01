@echo off
chcp 65001 >nul
title Compendio RPG - Iniciando...
cd /d "%~dp0"

echo ====================================================
echo          INICIANDO O COMPENDIO EPICO RPG
echo ====================================================
echo.

where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] Iniciando servidor rapido com Node.js...
    node server.js
) else (
    echo [OK] Node.js nao encontrado. Iniciando com o servidor nativo do Windows...
    powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
)

pause

