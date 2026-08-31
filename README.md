# Find Your Home 🏠

A modern web application to search for rental homes and apartments that accept Section 8 housing vouchers. Filter by property type, price, location, move-in date, and landlord requirements.

**Live Demo:** Coming soon  
**Status:** ✅ Fully functional with mock data

---

## 🎯 Features

✅ **Advanced Search & Filtering**
- Filter by property type (apartment, single-family, townhouse, condo, studio)
- Price range filtering
- Bedroom/bathroom filtering
- Location search (city or zip code)
- Move-in date filtering
- Section 8 acceptance filter

✅ **Detailed Listings**
- View all property details at a glance
- See landlord requirements (income, credit score)
- Calculate total upfront costs (application + hold + security deposit)
- Contact landlord via phone, email, or website

✅ **Clean, Modern UI**
- Beautiful gradient design
- Responsive on all devices (desktop, tablet, mobile)
- Smooth animations and transitions
- Intuitive user experience

✅ **Mock Data Included**
- 5 sample listings to test the app
- Full property details for each listing
- Complete landlord requirement information

---

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)
```bash
# Clone the repo
git clone https://github.com/rick2baldwin77-wq/find-your-home.git
cd find-your-home

# Run quick start script (Mac/Linux)
bash quick-start.sh

# For Windows, follow Option 2
```

### Option 2: Manual Setup

**Prerequisites:**
- Node.js v16+ ([Download](https://nodejs.org/))
- npm (comes with Node.js)

**Backend Setup:**
```bash
cd backend
npm install
echo "PORT=5000" > .env
npm start
```

**Frontend Setup (New Terminal):**
```bash
cd frontend
npm install
npm start
```

The app will open at `http://localhost:3000` 🎉

---

## 📖 Full Setup Guide

See **[SETUP.md](./SETUP.md)** for detailed step-by-step instructions, troubleshooting, and API documentation.

---

## 📁 Project Structure

```
find-your-home/
│
├── backend/                    # Node.js/Express REST API
│   ├── server.js              # Main server with listings API
│   ├── package.json           # Backend dependencies
│   └── .env                   # Environment variables
│
├── frontend/                   # React web application
│   ├── src/
│   │   ├── App.js            # Main component & state management
│   │   ├── App.css           # Global styles
│   │   ├── index.js          # Entry point
│   │   └── components/
│   │       ├── SearchForm.js       # Filter form
│   │       ├── SearchForm.css
│   │       ├── ListingCard.js      # Listing preview card
│   │       ├── ListingCard.css
│   │       ├── ListingDetail.js    # Full listing view
│   │       └── ListingDetail.css
│   ├── public/
│   │   └── index.html        # HTML template
│   └── package.json          # Frontend dependencies
│
├── README.md                  # This file
├── SETUP.md                   # Detailed setup guide
├── quick-start.sh             # One-command setup script
└── .gitignore
```

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Get All Listings
```
GET /listings
```

**Query Parameters:**
| Parameter | Type | Example | Description |
|-----------|------|---------|-------------|
| `propertyType` | string | `apartment` | apartment, single-family, townhouse, condo, studio |
| `minPrice` | number | `800` | Minimum monthly rent |
| `maxPrice` | number | `1500` | Maximum monthly rent |
| `bedrooms` | string | `2` or `3+` | Number of bedrooms |
| `location` | string | `Downtown` | City name or zip code |
| `moveInDate` | date | `2024-09-01` | YYYY-MM-DD format |
| `section8Only` | boolean | `true` | Only Section 8 accepted properties |

**Example Request:**
```bash
curl "http://localhost:5000/api/listings?propertyType=apartment&maxPrice=1200&section8Only=true"
```

**Example Response:**
```json
{
  "count": 2,
  "listings": [
    {
      "id": 1,
      "title": "Spacious 2BR Apartment Downtown",
      "propertyType": "apartment",
      "price": 1200,
      "bedrooms": 2,
      "bathrooms": 1,
      "location": "Downtown, City",
      "zipCode": "10001",
      "moveInDate": "2024-09-01",
      "section8Accepted": true,
      "description": "Beautiful apartment in the heart of downtown...",
      "landlordRequirements": {
        "minIncome": 2400,
        "minCreditScore": 650,
        "applicationFee": 50,
        "holdFee": 100,
        "securityDeposit": 1200,
        "otherRequirements": "Employment verification required"
      },
      "contact": {
        "phone": "555-0101",
        "email": "landlord1@example.com",
        "website": "www.landlord1.com"
      }
    }
  ]
}
```

### Get Single Listing
```
GET /listings/:id
```

### Health Check
```
GET /health
```

---

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI framework
- **Axios** - HTTP client
- **CSS3** - Styling with gradients, grid, and flexbox

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin requests
- **dotenv** - Environment management

---

## 📱 Sample Listings Included

The app comes with 5 mock listings:

1. **Spacious 2BR Apartment Downtown** - $1,200/mo (Section 8 ✓)
2. **Single Family Home 3BR/2BA** - $1,800/mo (Section 8 ✓)
3. **Cozy Studio** - $850/mo (Section 8 ✓)
4. **Modern 1BR Condo** - $1,100/mo (No Section 8)
5. **Townhouse 2BR/2.5BA** - $1,500/mo (Section 8 ✓)

---

## 🎨 UI/UX Highlights

- **Gradient Header**: Modern purple gradient design
- **Card Layout**: Grid-based responsive listings
- **Detail Page**: Comprehensive property information
- **Color Coding**: 
  - Green for Section 8 badges
  - Purple for primary actions
  - Yellow for landlord requirements
  - Red for costs
- **Hover Effects**: Cards lift on hover with smooth animations
- **Mobile Responsive**: Adapts perfectly to all screen sizes

---

## 🔄 How It Works

1. User opens the app at `http://localhost:3000`
2. Search form loads with default filters
3. Initial listing load displays all available properties
4. User applies filters (property type, price, location, etc.)
5. Frontend sends filter parameters to backend API
6. Backend filters mock data and returns matching listings
7. Frontend displays listings as cards in a grid
8. User clicks a listing card to see full details
9. Detail view shows all landlord requirements and contact info

---

## 📝 Landlord Requirements Explained

Each listing shows important financial requirements:

- **Minimum Income**: Usually 2.5-3x the monthly rent
- **Minimum Credit Score**: Required credit rating
- **Application Fee**: Non-refundable processing fee
- **Hold Fee**: To reserve the property
- **Security Deposit**: Refundable deposit (usually 1x rent)
- **Other Requirements**: Employment verification, references, etc.

**Total Upfront Costs** = Application Fee + Hold Fee + Security Deposit

---

## 🚀 Future Enhancements

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Real rental data from Craigslist, Zillow, Apartments.com
- [ ] User accounts with saved listings
- [ ] Email notifications for new listings matching criteria
- [ ] Map view of listings
- [ ] Application tracking system
- [ ] Landlord contact form
- [ ] Mobile app (React Native)
- [ ] Admin panel for managing listings
- [ ] Reviews and ratings

---

## 🐛 Troubleshooting

### Backend won't start
```bash
# Check if port 5000 is in use
# Edit backend/.env and change PORT to 5001
npm start
```

### Frontend shows "Cannot GET /api/listings"
- Make sure backend is running on `http://localhost:5000`
- Check browser console (F12) for errors
- Restart both backend and frontend

### Styling looks broken
- Clear browser cache: Ctrl+Shift+Delete
- Restart frontend: `npm start`

See **[SETUP.md](./SETUP.md)** for more troubleshooting.

---

## 📄 License

MIT License - feel free to use this project for your own purposes

---

## 👤 Author

Created by [rick2baldwin77-wq](https://github.com/rick2baldwin77-wq)

---

## 💡 Need Help?

1. Check **[SETUP.md](./SETUP.md)** for detailed setup instructions
2. Review the code comments in each file
3. Open browser DevTools (F12) to check for errors
4. Check the backend terminal for API errors

---

## 🤝 Contributing

Found a bug or have a feature idea? Feel free to create an issue or pull request!

---

**Happy searching! 🏠** Find your perfect home with Section 8 acceptance.
