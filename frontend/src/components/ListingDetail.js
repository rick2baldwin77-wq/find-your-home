import React from 'react';
import './ListingDetail.css';

function ListingDetail({ listing, onBack }) {
  return (
    <div className="listing-detail">
      <button className="back-button" onClick={onBack}>← Back to Listings</button>

      <div className="detail-container">
        <div className="detail-header">
          <h1>{listing.title}</h1>
          {listing.section8Accepted && (
            <span className="section8-badge-large">✓ Section 8 Accepted</span>
          )}
        </div>

        <div className="detail-grid">
          {/* Left Column */}
          <div className="detail-column">
            <div className="detail-section">
              <h2>Property Information</h2>
              <div className="info-grid">
                <div className="info-item">
                  <span className="label">Type:</span>
                  <span className="value">{listing.propertyType}</span>
                </div>
                <div className="info-item">
                  <span className="label">Price:</span>
                  <span className="price-large">${listing.price}/month</span>
                </div>
                <div className="info-item">
                  <span className="label">Bedrooms:</span>
                  <span className="value">{listing.bedrooms > 0 ? listing.bedrooms : 'Studio'}</span>
                </div>
                <div className="info-item">
                  <span className="label">Bathrooms:</span>
                  <span className="value">{listing.bathrooms}</span>
                </div>
                <div className="info-item">
                  <span className="label">Location:</span>
                  <span className="value">{listing.location}</span>
                </div>
                <div className="info-item">
                  <span className="label">Zip Code:</span>
                  <span className="value">{listing.zipCode}</span>
                </div>
                <div className="info-item">
                  <span className="label">Move-In Date:</span>
                  <span className="value">{new Date(listing.moveInDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h2>Description</h2>
              <p className="description">{listing.description}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="detail-column">
            <div className="detail-section requirements-section">
              <h2>Landlord Requirements</h2>
              <div className="requirements-grid">
                <div className="requirement-item">
                  <span className="req-label">Minimum Income:</span>
                  <span className="req-value">${listing.landlordRequirements.minIncome}</span>
                  <span className="req-note">(Usually 2.5-3x rent)</span>
                </div>
                <div className="requirement-item">
                  <span className="req-label">Minimum Credit Score:</span>
                  <span className="req-value">{listing.landlordRequirements.minCreditScore}</span>
                </div>
                <div className="requirement-item">
                  <span className="req-label">Application Fee:</span>
                  <span className="req-value">${listing.landlordRequirements.applicationFee}</span>
                </div>
                <div className="requirement-item">
                  <span className="req-label">Hold Fee:</span>
                  <span className="req-value">${listing.landlordRequirements.holdFee}</span>
                </div>
                <div className="requirement-item">
                  <span className="req-label">Security Deposit:</span>
                  <span className="req-value">${listing.landlordRequirements.securityDeposit}</span>
                </div>
                <div className="requirement-item">
                  <span className="req-label">Other Requirements:</span>
                  <span className="req-value">{listing.landlordRequirements.otherRequirements}</span>
                </div>
              </div>

              <div className="total-upfront">
                <strong>Total Upfront Costs (est.):</strong>
                <span className="total-amount">
                  ${listing.landlordRequirements.applicationFee + 
                    listing.landlordRequirements.holdFee + 
                    listing.landlordRequirements.securityDeposit}
                </span>
              </div>
            </div>

            <div className="detail-section contact-section">
              <h2>Contact Information</h2>
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <a href={`tel:${listing.contact.phone}`} className="contact-value">
                  {listing.contact.phone}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href={`mailto:${listing.contact.email}`} className="contact-value">
                  {listing.contact.email}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Website:</span>
                <a href={`https://${listing.contact.website}`} target="_blank" rel="noopener noreferrer" className="contact-value">
                  {listing.contact.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingDetail;
