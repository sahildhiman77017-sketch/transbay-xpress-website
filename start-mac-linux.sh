#!/usr/bin/env bash
set -e

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is not installed. Install Node.js 18 or newer and run this script again."
  exit 1
fi

echo "Installing project dependencies..."
npm install

echo "Starting the TransBay Xpress website..."
npm run dev
