import { AiFillFileText, AiFillBulb, AiFillAudio } from "react-icons/ai";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiCrown } from "react-icons/bi";
import { RiLeafLine } from "react-icons/ri";
import { Modal } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  closeLoginModal,
  closeSignUpModal,
  openLoginModal,
  openSignUpModal,
  toggleLoginModal,
  toggleResetModal,
} from "@component/redux/ModalSlice";
import { useState } from "react";
import { auth } from "../../firebase";
import SignUpModal from "@component/components/modals/SignUpModal";
import ResetModal from "@component/components/modals/ResetModal";
import LoginModal from "@component/components/modals/LoginModal";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const username = useSelector((state) => state.user.username);

  // Function to handle the opening of SignUpModal
  const handleOpenSignUpModal = () => {
    setIsSignUpOpen(true);
    dispatch(toggleLoginModal()); // Close the loginModal
  };

  // Function to handle the closing of SignUpModal
  const handleCloseSignUpModal = () => {
    setIsSignUpOpen(false);
    dispatch(toggleLoginModal()); // Open the loginModal
    // dispatch(toggleSignUpModal())
    dispatch(toggleResetModal())
  };


  return (
    <div>
      <nav className="nav">
        <div className="nav__wrapper">
          <figure className="nav__img--mask">
            <img className="nav__img" src="assets/logo.png" alt="" />
          </figure>
          <ul className="nav__list--wrapper">
            <li
              onClick={handleOpenSignUpModal}
              className="nav__list nav__list--login"
            >
              Login
            </li>
            <li className="nav__list nav__list--mobile">About</li>
            <li className="nav__list nav__list--mobile">Contact</li>
            <li className="nav__list nav__list--mobile">Help</li>
          </ul>
        </div>
      </nav>
      <section id="landing">
        <div className="container">
          <div className="row">
            <div className="landing__wrapper">
              <div className="landing__content">
                <div className="landing__content__title">
                  Gain more knowledge <br className="remove--tablet" />
                  in less time
                </div>
                <div className="landing__content__subtitle">
                  Great summaries for busy people,
                  <br className="remove--tablet" />
                  individuals who barely have time to read,
                  <br className="remove--tablet" />
                  and even people who don’t like to read.
                </div>
                <div className="display-none">
                  <LoginModal />
                  <SignUpModal />
                  <ResetModal />
                </div>
                {/* <Modal
                  className="flex justify-center items-center"
                  open={isSignUpOpen}
                  onClose={handleCloseSignUpModal}
                >
                  <div
                    className="w-[70%] h-fit bg-white md:w-[560px] md:h-[600px] rounded-lg lg:w-[25%] lg:h-[75%]
            flex justify-center ml-10 "
                  >
                    <div className="w-full mt-8 flex flex-col">
                      <h1 className="text-black flex justify-center mb-6 font-bold text-lg">
                        Login to Summarist
                      </h1>
                      <button className="bg-[#3A579D] text-white font-bold p-2 w-[80%] m-auto">
                        Login as a Guest
                      </button>
                      <h1 className="text-center mt-2 text-black text-lg">
                        or
                      </h1>
                      <button className="bg-[#4285f4] text-white font-bold p-2 mt-3 w-[80%] m-auto">
                        Login with Google
                      </button>
                      <h1 className="text-center mt-2 text-black text-lg mb-2">
                        or
                      </h1>

                      <input
                        placeholder="Email Address"
                        className="h-10 rounded-md p-4 w-[80%] m-auto border border-black"
                        type={"email"}
                        onChange={e => setEmail(e.target.value)}
                      />
                      <input
                        placeholder="Password"
                        className="h-10 rounded-md p-4 mt-7 w-[80%] m-auto border border-black"
                        type={"password"}
                        onChange={e => setPassword(e.target.value)}
                      />
                      <button onClick={handleSignUp} className="bg-[#2BD97C] text-white font-bold p-2 mt-8 w-[80%] m-auto">
                        Login
                      </button>
                      <p className="text-[#116BE9] flex justify-center mt-6 cursor-pointer">
                        <ResetModal/>
                      </p>

                      <div className="bg-[#F1F6F4] flex justify-center mt-6 p-1.5 cursor-pointer">
                     <SignUpModal/>
                      </div>
                    </div>
                  </div>
                </Modal> */}
                <button
                  onClick={handleOpenSignUpModal}
                  className="btn home__cta--btn"
                >
                  Login
                </button>
              </div>
              <figure className="landing__image--mask">
                <img src="assets/landing.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section id="features">
        <div className="container">
          <div className="row">
            <div className="section__title">
              Understand books in few minutes
            </div>
            <div className="features__wrapper">
              <div className="features">
                <div className="features__icon">
                  <AiFillFileText />
                </div>
                <div className="features__title">Read or listen</div>
                <div className="features__sub--title">
                  Save time by getting the core ideas from the best books.
                </div>
              </div>
              <div className="features">
                <div className="features__icon">
                  <AiFillBulb />
                </div>
                <div className="features__title">Find your next read</div>
                <div className="features__sub--title">
                  Explore book lists and personalized recommendations.
                </div>
              </div>
              <div className="features">
                <div className="features__icon">
                  <AiFillAudio />
                </div>
                <div className="features__title">Briefcasts</div>
                <div className="features__sub--title">
                  Gain valuable insights from briefcasts
                </div>
              </div>
            </div>
            <div className="statistics__wrapper">
              <div className="statistics__content--header">
                <div className="statistics__heading">
                  Enhance your knowledge
                </div>
                <div className="statistics__heading">
                  Achieve greater success
                </div>
                <div className="statistics__heading">Improve your health</div>
                <div className="statistics__heading">
                  Develop better parenting skills
                </div>
                <div className="statistics__heading">Increase happiness</div>
                <div className="statistics__heading">
                  Be the best version of yourself!
                </div>
              </div>
              <div className="statistics__content--details">
                <div className="statistics__data">
                  <div className="statistics__data--number">93%</div>
                  <div className="statistics__data--title">
                    of Summarist members <b>significantly increase</b> reading
                    frequency.
                  </div>
                </div>
                <div className="statistics__data">
                  <div className="statistics__data--number">96%</div>
                  <div className="statistics__data--title">
                    of Summarist members <b>establish better</b> habits.
                  </div>
                </div>
                <div className="statistics__data">
                  <div className="statistics__data--number">90%</div>
                  <div className="statistics__data--title">
                    have made <b>significant positive</b> change to their lives.
                  </div>
                </div>
              </div>
            </div>
            <div className="statistics__wrapper">
              <div className="statistics__content--details statistics__content--details-second">
                <div className="statistics__data">
                  <div className="statistics__data--number">91%</div>
                  <div className="statistics__data--title">
                    of Summarist members <b>report feeling more productive</b>
                    after incorporating the service into their daily routine.
                  </div>
                </div>
                <div className="statistics__data">
                  <div className="statistics__data--number">94%</div>
                  <div className="statistics__data--title">
                    of Summarist members have <b>noticed an improvement</b> in
                    their overall comprehension and retention of information.
                  </div>
                </div>
                <div className="statistics__data">
                  <div className="statistics__data--number">88%</div>
                  <div className="statistics__data--title">
                    of Summarist members <b>feel more informed</b> about current
                    events and industry trends since using the platform.
                  </div>
                </div>
              </div>
              <div className="statistics__content--header statistics__content--header-second">
                <div className="statistics__heading">Expand your learning</div>
                <div className="statistics__heading">Accomplish your goals</div>
                <div className="statistics__heading">
                  Strengthen your vitality
                </div>
                <div className="statistics__heading">
                  Become a better caregiver
                </div>
                <div className="statistics__heading">Improve your mood</div>
                <div className="statistics__heading">
                  Maximize your abilities
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="reviews">
        <div className="row">
          <div className="container">
            <div className="section__title">What our members say</div>
            <div className="reviews__wrapper">
              <div className="review">
                <div className="review__header">
                  <div className="review__name">Hanna M.</div>
                  <div className="review__stars">
                    <BsStarFill />
                  </div>
                </div>
                <div className="review__body">
                  This app has been a <b>game-changer</b> for me! It's saved me
                  so much time and effort in reading and comprehending books.
                  Highly recommend it to all book lovers.
                </div>
              </div>
              <div className="review">
                <div className="review__header">
                  <div className="review__name">David B.</div>
                  <div className="review__stars">
                    <BsStarFill />
                  </div>
                </div>
                <div className="review__body">
                  I love this app! It provides
                  <b> concise and accurate summaries</b> of books in a way that
                  is easy to understand. It's also very user-friendly and
                  intuitive.
                </div>
              </div>
              <div className="review">
                <div className="review__header">
                  <div className="review__name">Nathan S.</div>
                  <div className="review__stars">
                    <BsStarFill />
                  </div>
                </div>
                <div className="review__body">
                  This app is a great way to get the main takeaways from a book
                  without having to read the entire thing.
                  <b> The summaries are well-written and informative.</b>
                  <b></b> Definitely worth downloading.
                </div>
              </div>
              <div className="review">
                <div className="review__header">
                  <div className="review__name">Ryan R.</div>
                  <div className="review__stars">
                    <BsStarFill />
                  </div>
                </div>
                <div className="review__body">
                  If you're a busy person who
                  <b> loves reading but doesn't have the time</b> to read every
                  book in full, this app is for you! The summaries are thorough
                  and provide a great overview of the book's content.
                </div>
              </div>
            </div>
            <div className="reviews__btn--wrapper">
              <button className="btn home__cta--btn">Login</button>
            </div>
          </div>
        </div>
      </section>
      <section id="numbers">
        <div className="container">
          <div className="row">
            <div className="section__title">
              Start growing with Summarist now
            </div>
            <div className="numbers__wrapper">
              <div className="numbers">
                <div className="numbers__icon">
                  <BiCrown />
                </div>
                <div className="numbers__title">3 Million</div>
                <div className="numbers__sub--title">
                  Downloads on all platforms
                </div>
              </div>
              <div className="numbers">
                <div className="numbers__icon numbers__star--icon">
                  <BsStarFill />
                  <BsStarHalf />
                </div>
                <div className="numbers__title">4.5 Stars</div>
                <div className="numbers__sub--title">
                  Average ratings on iOS and Google Play
                </div>
              </div>
              <div className="numbers">
                <div className="numbers__icon">
                  <RiLeafLine />
                </div>
                <div className="numbers__title">97%</div>
                <div className="numbers__sub--title">
                  Of Summarist members create a better reading habit
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="footer">
        <div className="container">
          <div className="row">
            <div className="footer__top--wrapper">
              <div className="footer__block">
                <div className="footer__link--title">Actions</div>
                <div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Summarist Magazine</a>
                  </div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Cancel Subscription</a>
                  </div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Help</a>
                  </div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Contact us</a>
                  </div>
                </div>
              </div>
              <div className="footer__block">
                <div className="footer__link--title">Useful Links</div>
                <div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Pricing</a>
                  </div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Summarist Business</a>
                  </div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Gift Cards</a>
                  </div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Authors & Publishers</a>
                  </div>
                </div>
              </div>
              <div className="footer__block">
                <div className="footer__link--title">Company</div>
                <div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">About</a>
                  </div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Careers</a>
                  </div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Partners</a>
                  </div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Code of Conduct</a>
                  </div>
                </div>
              </div>
              <div className="footer__block">
                <div className="footer__link--title">Other</div>
                <div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Sitemap</a>
                  </div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Legal Notice</a>
                  </div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Terms of Service</a>
                  </div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Privacy Policies</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__copyright--wrapper">
              <div className="footer__copyright">
                Copyright &copy; 2023 Summarist.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
