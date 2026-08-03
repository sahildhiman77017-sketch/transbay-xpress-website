@echo off
setlocal
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Install Node.js 18 or newer and run this file again.
  pause
  exit /b 1
)

echo Installing project dependencies...
call npm install
if errorlevel 1 (
  echo Dependency installation failed.
  pause
  exit /b 1
)

echo Starting the TransBay Xpress website...
call npm run dev
endlocal
