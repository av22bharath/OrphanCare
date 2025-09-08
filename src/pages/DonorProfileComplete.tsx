import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import styles from '../styles/ProfileComplete.module.css';

const DonorProfileComplete: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    address: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      navigate('/donor/dashboard');
    }, 1500);
  };

  return (
    <div className={styles.profileComplete}>
      <Header userType="donor" />
      
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.card}>
          <div className={styles.header}>
            <h1>Complete your profile</h1>
            <div className={styles.avatarContainer}>
              <User size={60} />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter your first name"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <div className={styles.dateField}>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                  <Calendar size={20} className={styles.dateIcon} />
                </div>
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className={styles.select}
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Enter your complete address"
                rows={4}
              />
            </div>
            
            <button 
              type="submit" 
              className={`${styles.btn} ${styles.btnConfirm}`}
              disabled={isLoading}
            >
              {isLoading ? <span className="spinner"></span> : 'Confirm'}
            </button>
          </form>
          
          <div className={styles.footer}>
            <span>OrphanCare Network</span>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className={styles.decorations}>
          <div className={styles.decoration1}>
            <User size={24} />
          </div>
          <div className={styles.decoration2}>
            <Calendar size={24} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DonorProfileComplete;