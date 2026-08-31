import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './components/SearchForm';
import ListingCard from './components/ListingCard';
import ListingDetail from './components/ListingDetail';

function App() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedListing, setSelectedListing] = useState(null);
  const [filters, setFilters] = useState({
    propertyType: 'all',
    minPrice: '',
    maxPrice: '',
    bedrooms: 'any',
    location: '',
    moveInDate: '',
    section8Only: false
  });

  // Fetch listings on component mount and when filters change
  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async (searchFilters = filters) => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      
      if (searchFilters.propertyType && searchFilters.propertyType !== 'all') {
        params.append('propertyType', searchFilters.propertyType);
      }
      if (searchFilters.minPrice) {
        params.append('minPrice', searchFilters.minPrice);
      }
      if (searchFilters.maxPrice) {
        params.append('maxPrice', searchFilters.maxPrice);
      }
      if (searchFilters.bedrooms && searchFilters.bedrooms !== 'any') {
        params.append('bedrooms', searchFilters.bedrooms);
      }
      if (searchFilters.location) {
        params.append('location', searchFilters.location);
      }
      if (searchFilters.moveInDate) {
        params.append('moveInDate', searchFilters.moveInDate);
      }
      if (searchFilters.section8Only) {
        params.append('section8Only', 'true');
      }

      const response = await axios.get(
        `/api/listings${params.toString() ? '?' + params.toString() : ''}`
      );
      setListings(response.data.listings);
    } catch (err) {
      setError('Failed to fetch listings. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
    setSelectedListing(null);
    fetchListings(newFilters);
  };

  const handleListingClick = (listing) => {
    setSelectedListing(listing);
  };

  const handleBackToList = () => {
    setSelectedListing(null);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>🏠 Find Your Home</h1>
        <p>Search for rental homes & apartments that accept Section 8</p>
      </header>

      <div className="container">
        {selectedListing ? (
          <ListingDetail listing={selectedListing} onBack={handleBackToList} />
        ) : (
          <>
            <SearchForm onSearch={handleSearch} />

            {error && <div className="error-message">{error}</div>}

            <div className="results-section">
              <h2>Available Listings ({listings.length})</h2>

              {loading && <div className="loading">Loading listings...</div>}

              {!loading && listings.length === 0 && (
                <div className="no-results">
                  No listings found. Try adjusting your filters.
                </div>
              )}

              <div className="listings-grid">
                {listings.map(listing => (
                  <ListingCard
                    key={listing.id}
                    listing={listing}
                    onClick={() => handleListingClick(listing)}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
