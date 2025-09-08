import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Calendar, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import styles from '../styles/OrphanegeProfileComplete.module.css';

const OrphanegeProfileComplete: React.FC = () => {
  const [formData, setFormData] = useState({
    orphanageName: '',
    established: '',
    contactNumber: '',
    address: '',
    registrationNumber: '',
    male: '',
    female: '',
    bankName: '',
    accountType: '',
    accountHolderName: '',
    accountNumber: '',
    ifscCode: ''
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
      navigate('/orphanage/dashboard');
    }, 1500);
  };

  return (
    <div className={styles.profileComplete}>
      <Header userType="orphanage" />
      
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.projectText}>OUR PROJECT</div>
            <h1>Complete your profile</h1>
            <div className={styles.avatarContainer}>
              <Building size={60} />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Basic Details */}
            <div className={styles.section}>
              <h2><span className={styles.sectionNumber}>1</span> Basic Details</h2>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="orphanageName">Orphanage Name</label>
                  <input
                    type="text"
                    id="orphanageName"
                    name="orphanageName"
                    value={formData.orphanageName}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Enter orphanage name"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="established">Established</label>
                  <input
                    type="date"
                    id="established"
                    name="established"
                    value={formData.established}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="contactNumber">Contact Number</label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Enter contact number"
                  />
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
                    placeholder="Enter complete address"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Orphanage Details */}
            <div className={styles.section}>
              <h2><span className={styles.sectionNumber}>2</span> Orphanage Details</h2>
              
              <div className={styles.formGroup}>
                <label htmlFor="registrationNumber">Orphanage Registration Number</label>
                <input
                  type="text"
                  id="registrationNumber"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="ex: 1A2D 2C8D 30XX"
                />
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="male">Male</label>
                  <input
                    type="number"
                    id="male"
                    name="male"
                    value={formData.male}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Enter the number of Male Orphans"
                    min="0"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="female">Female</label>
                  <input
                    type="number"
                    id="female"
                    name="female"
                    value={formData.female}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Enter the number of Female Orphans"
                    min="0"
                  />
                </div>
              </div>
            </div>

            {/* Bank Details */}
            <div className={styles.section}>
              <h2><span className={styles.sectionNumber}>3</span> Bank Details</h2>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="bankName">Bank Name</label>
                  <input
                    type="text"
                    id="bankName"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Enter bank name"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="accountType">Account Type</label>
                  <select
                    id="accountType"
                    name="accountType"
                    value={formData.accountType}
                    onChange={handleChange}
                    required
                    className={styles.select}
                  >
                    <option value="">Select account type</option>
                    <option value="savings">Savings</option>
                    <option value="current">Current</option>
                  </select>
                </div>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="accountHolderName">Account Holder Name</label>
                  <input
                    type="text"
                    id="accountHolderName"
                    name="accountHolderName"
                    value={formData.accountHolderName}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Enter account holder name"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="accountNumber">Account Number</label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Enter account number"
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="ifscCode">IFSC Code</label>
                <input
                  type="text"
                  id="ifscCode"
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter IFSC code"
                />
              </div>
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
            <Building size={24} />
          </div>
          <div className={styles.decoration2}>
            <Calendar size={24} />
          </div>
          <div className={styles.decoration3}>
            <CreditCard size={24} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OrphanegeProfileComplete;