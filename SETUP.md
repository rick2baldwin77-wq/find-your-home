# Setup Guide - Find Your Home

Complete step-by-step instructions to get the app running locally.

## Prerequisites

Make sure you have these installed on your computer:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)

Verify installation:
```bash
node --version
npm --version
git --version
```

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/rick2baldwin77-wq/find-your-home.git
cd find-your-home
```

---

## Step 2: Setup Backend (Node.js/Express)

### Navigate to backend folder:
```bash
cd backend
```

### Install dependencies:
```bash
npm install
```

### Create .env file:
Create a file named `.env` in the `backend/` folder with this content:
```
PORT=5000
NODE_ENV=development
```

### Start the backend server:
```bash
npm start
```

You should see:
```
🚀 Backend running on http://localhost:5000
📡 API available at http://localhost:5000/api
```

✅ **Backend is running!** Keep this terminal open.

---

## Step 3: Setup Frontend (React)

### Open a NEW terminal window and navigate to frontend:
```bash
cd frontend
```

### Install dependencies:
```bash
npm install
```

### Start the React development server:
```bash
npm start
```

The app should automatically open in your browser at `http://localhost:3000`

If it doesn't, manually open: **http://localhost:3000**

---

## Testing the App

### ✅ Search Features to Try:

1. **Filter by Property Type**: Select "Apartment" or "Single Family Home"
2. **Filter by Price**: Set Min: 800, Max: 1500
3. **Filter by Bedrooms**: Select "2 Bedrooms"
4. **Filter by Location**: Type "Downtown" or "10001"
5. **Filter by Move-In Date**: Pick a date
6. **Section 8 Only**: Check the box to see only Section 8 accepted properties

7. **Click any listing card** to see full details including:
   - Landlord requirements (income, credit score)
   - Application fees, hold fees, security deposit
   - Total upfront costs
   - Contact information

---

## Troubleshooting

### "Port 5000 already in use"
```bash
# Change PORT in backend/.env to 5001
# Then restart backend: npm start
```

### "Cannot find module" errors
```bash
# Delete node_modules and reinstall:
rm -rf node_modules
npm install
```

### Backend not connecting to frontend
- Make sure backend is running on `http://localhost:5000`
- Check that frontend `package.json` has `"proxy": "http://localhost:5000"`
- Restart both servers

### CORS errors
- Backend has CORS enabled, so frontend can connect
- If still having issues, restart both servers

---

## Project Structure

```
find-your-home/
├── backend/
│   ├── server.js          # Main Express server
│   ├── package.json       # Backend dependencies
│   └── .env               # Environment variables
│
├── frontend/
│   ├── src/
│   │   ├── App.js         # Main React component
│   │   ├── App.css        # Styling
│   │   ├── index.js       # Entry point
│   │   └── components/
│   │       ├── SearchForm.js      # Search filter form
│   │       ├── ListingCard.js     # Individual listing card
│   │       └── ListingDetail.js   # Full listing details
│   ├── public/
│   │   └── index.html     # HTML template
│   └── package.json       # Frontend dependencies
│
└── README.md
```

---

## API Endpoints

### Get all listings with filters:
```
GET http://localhost:5000/api/listings
```

**Query Parameters:**
- `propertyType` - apartment, single-family, townhouse, condo, studio
- `minPrice` - minimum monthly rent
- `maxPrice` - maximum monthly rent
- `bedrooms` - 0, 1, 2, 3+
- `location` - city name or zip code
- `moveInDate` - date (YYYY-MM-DD)
- `section8Only` - true/false

**Example:**
```
http://localhost:5000/api/listings?propertyType=apartment&maxPrice=1200&section8Only=true
```

### Get single listing:
```
GET http://localhost:5000/api/listings/:id
```

### Health check:
```
GET http://localhost:5000/api/health
```

---

## Next Steps (Future Features)

- [ ] Add real rental data from Craigslist, Zillow, Apartments.com
- [ ] Add database (PostgreSQL/MongoDB) to store listings
- [ ] User accounts & saved listings
- [ ] Email notifications for new listings
- [ ] Mobile app (React Native)
- [ ] Map view of listings
- [ ] Landlord contact form integration
- [ ] Application tracking

---

## Need Help?

1. Check the README.md for project overview
2. Review the code comments in each file
3. Check browser console for error messages (F12)
4. Check backend terminal for API errors

---

## Stop the Servers

Press `Ctrl + C` in each terminal window to stop the servers.

---

**Happy searching! 🏠**
