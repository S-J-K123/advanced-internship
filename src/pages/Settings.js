import { auth } from "../../firebase";
import SearchIcon from "@mui/icons-material/Search";
import SideBar from "@component/components/SideBar";
import LoginModal from "@component/components/modals/LoginModal";
import {
  closeSignUpModal,
  openSignUpModal,
  toggleLoginModal,
  toggleSignUpModal,
} from "@component/redux/ModalSlice";
import { setUser } from "@component/redux/userSlice";
import { Modal } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import Plan from "../pages/Plan";
import Link from "next/link";

const Settings = () => {
  const [email, setEmail] = useState("");
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  // const isUserAuth = useSelector((state) => state.auth.isUserAuth)
  const user = auth.currentUser;
  const subscriptionPlan = user?.subscriptionPlan
  
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userEmail = user.email;
        setEmail(userEmail);
        const userObj = {
          uid: user.uid,
          email: user.email,
        };
        console.log(userObj);
        dispatch(setUser(userObj));
      } else {
        setEmail(null);
      }
    });
    
    return () => unsubscribe();
  }, [email]);


  const handleHideSignUpModal = () => {
    setIsSignUpOpen(false);
    // Open the loginModal
    dispatch(toggleSignUpModal());
  };

  const handleCloseSignUpModal = () => {
    setIsSignUpOpen(false);
    dispatch(toggleLoginModal()); // Open the loginModal
  };

  const redirectToHome = () => {
    if (router.pathname !== "/settings") {
      router.push("/"); // Navigate to the home page if not on the settings page
    }
  };

  return (
    <div>
      <SideBar />
      <div className="wrapper">
        <div className="search__content">
          <div className="search">
            <div className="search__input--wrapper">
              <input
                className="search__input"
                placeholder="Search for books"
                type="text"
              />
              <div className="search__icon">
                <SearchIcon className="svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {email ? (
        <div className="settings__container">
          <div className="settings-row">
            <div className="settings-title">Settings</div>
            {subscriptionPlan ? (
                  <div className="setting__content">
              <div className="settings__sub--title">Your Subscription plan</div>
              <div className="setting__text">Premium</div>
            </div>
            ) : (
                  <div className="setting__content">
              <div className="settings__sub--title">Your Subscription plan</div>
              <div className="setting__text">Basic</div>
              <Link href="/Plan"
             style={{ width: 'fit-content' }}
              className=" upgrade__btn">
              Upgrade to Premium
              </Link>
            </div> 
            )}
        
       
            <div className="settings__content">
              <div className="settings__sub--title">Email</div>
              <div className="setting__text">{email}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="settings__container">
          <div className="settings-row">
            <div className="settings-title">Settings</div>
            <div className="settings__login--wrapper">
              <img
                className="settings__img"
                src="https://summarist.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin.e313e580.png&w=1080&q=75"
                alt="Login"
              />
              <div className="settings__login--text">
                Log in to your account to see your details.
              </div>
              <button
                onClick={() => {
                  handleCloseSignUpModal();
                  redirectToHome(); // Navigate to home page when logging in
                }}
                className="btn"
              >
                Login
              </button>
              <div className="display-none">
                <LoginModal />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
