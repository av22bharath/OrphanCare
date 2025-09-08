import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Edit, Heart, Calendar, User, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import styles from '../styles/DonorDashboard.module.css';

const DonorDashboard: React.FC = () => {
  const handleEditProfile = () => {
    // Navigate to profile edit
  };

  const handleDonate = (orphanageId: string) => {
    // Navigate to donation page
  };

  const handleLogout = () => {
    // Logout functionality
  };

  return (
    <div className={styles.donorDashboard}>
      <Header userType="donor" />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <svg viewBox="0 0 1200 600" className={styles.heroWave}>
            <path d="M0,0 C300,150 500,50 1200,200 L1200,0 Z" fill="var(--primary-maroon)" />
          </svg>
        </div>
        
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              "Hope begins here"
            </h1>
            <p className={styles.heroText}>
              Welcome to OrphanCare Network. You can be the reason a child smiles today…
            </p>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        {/* Profile Section */}
        <section className={styles.profileSection}>
          <div className={styles.profileCard}>
            <div className={styles.profileInfo}>
              <div className={styles.profileAvatar}>
                <User size={40} />
              </div>
              <div className={styles.profileDetails}>
                <h2>Akshay D S</h2>
                <div className={styles.profileMeta}>
                  <div className={styles.metaItem}>
                    <MapPin size={16} />
                    <span>Bangalore, Karnataka</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Phone size={16} />
                    <span>+91 9876543210</span>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/donor/profile-complete" className={`${styles.btn} ${styles.btnEdit}`}>
              <Edit size={16} />
              Edit Your Profile
            </Link>
          </div>
        </section>

        {/* Mission Section */}
        <section className={styles.mission}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.missionText}>
            To connect caring donors with orphanages in need, creating a bridge of hope
            that transforms lives and builds stronger communities.
          </p>
          
          <div className={styles.missionImages}>
            <div className={styles.imageCard}>
              <img 
                src="https://images.pexels.com/photos/8419063/pexels-photo-8419063.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" 
                alt="Children learning"
                loading="lazy"
              />
            </div>
            <div className={styles.imageCard}>
              <img 
                src="https://images.pexels.com/photos/8923189/pexels-photo-8923189.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" 
                alt="Happy children"
                loading="lazy"
              />
            </div>
            <div className={styles.imageCard}>
              <img 
                src="https://images.pexels.com/photos/8923113/pexels-photo-8923113.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" 
                alt="Children playing"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* How to Donate Section */}
        <section className={styles.howToDonate}>
          <h2 className={styles.sectionTitle}>How to Donate?</h2>
          
          <div className={styles.donationSteps}>
            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <User size={32} />
                <span className={styles.stepNumber}>1</span>
              </div>
              <h3>Register as Donor</h3>
            </div>
            
            <div className={styles.heartbeat}>
              <Heart size={24} fill="var(--primary-maroon)" color="var(--primary-maroon)" />
            </div>
            
            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <Edit size={32} />
                <span className={styles.stepNumber}>2</span>
              </div>
              <h3>View the requirements posted by Orphanages</h3>
            </div>
            
            <div className={styles.heartbeat}>
              <Heart size={24} fill="var(--primary-maroon)" color="var(--primary-maroon)" />
            </div>
            
            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <Heart size={32} />
                <span className={styles.stepNumber}>3</span>
              </div>
              <h3>Donate what you want</h3>
            </div>
          </div>
        </section>

        {/* Your Donations */}
        <section className={styles.donations}>
          <h2 className={styles.sectionTitle}>Your Donations</h2>
          <div className={styles.donationsScroll}>
            <div className={styles.donationCard}>
              <div className={styles.donationStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>5</span>
                  <span className={styles.statLabel}>Books</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>3</span>
                  <span className={styles.statLabel}>Clothes</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>₹2000</span>
                  <span className={styles.statLabel}>Fund</span>
                </div>
              </div>
              <h4>Abhayadhama Orphanage</h4>
              <div className={styles.donationMeta}>
                <Calendar size={14} />
                <span>15 Dec 2024</span>
              </div>
            </div>
            
            <div className={styles.donationCard}>
              <div className={styles.donationStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>10</span>
                  <span className={styles.statLabel}>Books</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>₹5000</span>
                  <span className={styles.statLabel}>Fund</span>
                </div>
              </div>
              <h4>Hope Children Home</h4>
              <div className={styles.donationMeta}>
                <Calendar size={14} />
                <span>10 Dec 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Orphanages Near Me */}
        <section className={styles.orphanages}>
          <h2 className={styles.sectionTitle}>Orphanages near me</h2>
          <div className={styles.orphanagesGrid}>
            <div className={styles.orphanageCard}>
              <h4>Abhayadhama</h4>
              <p className={styles.orphanageDesc}>
                Providing care and education to underprivileged children since 1995.
              </p>
              <div className={styles.orphanageContact}>
                <div className={styles.contactItem}>
                  <MapPin size={14} />
                  <span>Whitefield Post, Bengaluru 560066</span>
                </div>
                <div className={styles.contactItem}>
                  <Phone size={14} />
                  <span>+91 9876543210</span>
                </div>
              </div>
              
              <div className={styles.currentNeeds}>
                <h5>Current Needs</h5>
                <div className={styles.needsTags}>
                  <span className={styles.tag}>Food</span>
                  <span className={styles.tag}>Clothes</span>
                  <span className={styles.tag}>Groceries</span>
                  <span className={styles.tag}>Funds</span>
                </div>
              </div>
              
              <Link 
                to="/orphanage/1" 
                className={`${styles.btn} ${styles.btnDonate}`}
              >
                Donate Now
                <ChevronRight size={16} />
              </Link>
            </div>
            
            <div className={styles.orphanageCard}>
              <h4>Hope Children Home</h4>
              <p className={styles.orphanageDesc}>
                A safe haven for children providing love, care, and quality education.
              </p>
              <div className={styles.orphanageContact}>
                <div className={styles.contactItem}>
                  <MapPin size={14} />
                  <span>Koramangala, Bengaluru 560034</span>
                </div>
                <div className={styles.contactItem}>
                  <Phone size={14} />
                  <span>+91 8765432109</span>
                </div>
              </div>
              
              <div className={styles.currentNeeds}>
                <h5>Current Needs</h5>
                <div className={styles.needsTags}>
                  <span className={styles.tag}>Books</span>
                  <span className={styles.tag}>Stationery</span>
                  <span className={styles.tag}>Bedding</span>
                </div>
              </div>
              
              <Link 
                to="/orphanage/2" 
                className={`${styles.btn} ${styles.btnDonate}`}
              >
                Donate Now
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Pending Donations */}
        <section className={styles.pendingDonations}>
          <h2 className={styles.sectionTitle}>Pending Donations</h2>
          <div className={styles.pendingList}>
            <div className={styles.pendingCard}>
              <div className={styles.pendingInfo}>
                <h4>Abhayadhama</h4>
                <span className={styles.pendingStatus}>Pending</span>
                <p className={styles.requestedItem}>Food</p>
              </div>
            </div>
            <div className={styles.pendingCard}>
              <div className={styles.pendingInfo}>
                <h4>Hope Children Home</h4>
                <span className={styles.pendingStatus}>Pending</span>
                <p className={styles.requestedItem}>Clothes & Groceries</p>
              </div>
            </div>
          </div>
          <p className={styles.pendingMessage}>
            Your donation is still pending – please complete it as soon as possible
          </p>
        </section>

        {/* About Us Section */}
        <section className={styles.about}>
          <div className={styles.aboutCard}>
            <h2 className={styles.sectionTitle}>About Us</h2>
            <p>
              OrphanCare Network is a dedicated platform that bridges the gap between 
              generous donors and orphanages in need. We believe that every child deserves 
              love, care, and opportunity to thrive.
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <span>OrphanCare Network</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DonorDashboard;