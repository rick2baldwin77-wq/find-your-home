#!/bin/bash

# Find Your Home - Quick Start Script
# This script sets up and runs both backend and frontend

echo "🏠 Find Your Home - Quick Start"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo "✅ npm found: $(npm --version)"
echo ""

# Setup Backend
echo "📦 Setting up backend..."
cd backend
npm install > /dev/null 2>&1

# Create .env if it doesn't exist
if [ ! -f .env ]; then
    echo "PORT=5000" > .env
    echo "NODE_ENV=development" >> .env
    echo "✅ Created backend/.env"
fi

cd ..

# Setup Frontend
echo "📦 Setting up frontend..."
cd frontend
npm install > /dev/null 2>&1
cd ..

echo ""
echo "✅ Setup complete!"
echo ""
echo "Starting servers..."
echo ""
echo "📡 Backend will run on: http://localhost:5000"
echo "🌐 Frontend will run on: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the servers"
echo ""

# Start backend in background
cd backend
npm start &
BACKEND_PID=$!
cd ..

# Give backend time to start
sleep 2

# Start frontend
cd frontend
npm start
cd ..

# Cleanup
kill $BACKEND_PID 2>/dev/null
