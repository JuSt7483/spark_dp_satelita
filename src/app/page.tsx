import Image from "next/image";
import Button from "../components/UI/primitives/Button/Button";
import StyledHeading from "../components/UI/primitives/StyledHeading/StyledHeading";
import { AnonymousIcon, FireIcon, GalleryMinimalistic, LikeIcon, MoneyIcon, RocketIcon, UsersIcon } from "../components/UI/svg";
import './page.scss'
import ServicesImg from "../shared/data/ServicesImg";
import Vector from '@/public/Image/Services/LightServices.png'
import GridVector2 from '@/public/Image/Vector/GridVector2.png'
import GridVector from '@/public/Image/Vector/GridVector.png'
import LightMain from '@/public/Image/Main/LightMain.png'
import ReferralVectorContainer from "@/public/Image/Referral/ReferralVectorContainer.png"
import ReferralImage from "@/public/Image/Referral/ReferralImage.png"
import Slider from "../components/Slider/Slider";
import VerticalSlider from "../components/VerticalSlide/VerticalSlide";
import GalleryMain from "../shared/data/GalleryMain";
import Accordion from "../components/UI/primitives/Accordion/Accordion";
import Link from "next/link";
import ButtonLink from "../shared/data/mainPageText";
import Price from "../components/Price/Price";



export default function Home() {
  return (
    <div className="main container" >
      <section className="main__banner" id="home">
        <Image className="main__banner-vector" src={LightMain} alt="undress ai remover" />
        <StyledHeading>AI Undresser</StyledHeading>
        <h1 className="main__banner-title">Undress ai is your new assistant in the undress with ai sphere.</h1>
        <p className="main__banner-description">Undress AI is a tool that lets you remove clothes from photos in just a few seconds. It’s designed to make your life more fun and your pictures look even better. With Undress Me AI, you can explore creativity and make unique, artistic images. It’s like stepping into a world of beauty and creating something special with the help of AI. Give it a try and see what you can create!</p>
        <Link href={ButtonLink}>
          <Button size="medium" color="main" iconSvg={<RocketIcon />}>Launch up</Button>
        </Link>
        <div className="main__banner-video">
          <Image className="main__banner-video-vector" src={GridVector} alt="undress ai." />
          <div className="main__banner-video-wrapper">
            <Link href={ButtonLink} className="main__banner-video-button"></Link>
            <video autoPlay loop muted playsInline>
              <source src="/videos/Video1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section className="main__table-contents" id="table-contents">
          <div className="main__table-contents-wrapper">
            <p className="main__table-contents-title">Table of Contents</p>
            <div className="main__table-contents-list">
              <Button href="#home">Home</Button>
              <Button href="#choose">Why choose us</Button>
              <Button href="#how-to-works">About AI Tool</Button>
              <Button href="#pricing">Pricing Plans</Button>
              <Button href="#reviews">Result from our service</Button>
              <Button href="#services">Discover Modes</Button>
              <Button href="#referral">Referral Program</Button>
              <Button href="#reviews">Reviews</Button>
              <Button href="#faq">FAQ</Button>
            </div>
          </div>
      </section>
      <section className="main__choose" id="choose">
        <Image src={GridVector2} alt="undress ai websites" className="main__choose-vector hidden-mobile" />
        <div className="main__choose-text">
          <StyledHeading>Why choose us</StyledHeading>
          <h3 className="main__choose-title">With our app, you can watch live broadcasts and receive countless statistics, tips,</h3>
          <div className="main__choose-list">
            <div className="main__choose-item">
              <p className="main__choose-item-title">100k+</p>
              <div className="main__choose-item-description">
                <UsersIcon />
                <p className="main__choose-item-description-text">Users every day</p>
              </div>
            </div>
            <div className="main__choose-item">
              <p className="main__choose-item-title">500k+</p>
              <div className="main__choose-item-description">
                <GalleryMinimalistic />
                <p className="main__choose-item-description-text">Generated photos</p>
              </div>
            </div>
            <div className="main__choose-item">
              <p className="main__choose-item-title">100k+</p>
              <div className="main__choose-item-description">
                <MoneyIcon />
                <p className="main__choose-item-description-text">Money withdrawn</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main__choose-video">
          <div className="main__choose-video-wrapper">
            <video className="main__choose-video-item" autoPlay loop muted playsInline>
              <source src="/videos/Video2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <div className="main__line"/>
      <section className="main__how-it-works" id="how-to-works">
        <div className="main__how-it-works-heading"><StyledHeading>About AI Tool</StyledHeading></div>
        <h2 className="main__how-it-works-title">How It Works?</h2>
        <p className="main__how-it-works-description">Technologies allow you to use a modern development called AI Undresser. </p>
        <div>
          <VerticalSlider />
        </div>
        <div className="main__how-it-works-info">
          <div className="main__how-it-works-item">
            <div className="main__how-it-works-item-icon icon"><AnonymousIcon  className="main__how-it-works-item-image"/></div>
            <p className="main__how-it-works-item-title">Secure anonymous registration</p>
            <p className="main__how-it-works-item-description">With its help, you can realistically change photos and look at the most intimate. The program works automatically and generates photos based on the images you provided.</p>
          </div>
          <div className="main__how-it-works-item">
            <div className="main__how-it-works-item-icon icon"><LikeIcon className="main__how-it-works-item-image"/></div>
            <p className="main__how-it-works-item-title">Trustworthy the first deepnude app</p>
            <p className="main__how-it-works-item-description">With our app, you can watch live broadcasts and receive countless statistics, tips, and even match predictions which will help you place better bets and improve your odds of winning.</p>
          </div>
        </div>
      </section>
      <section className="main__gallery" id="gallery">
        <StyledHeading>Gallery</StyledHeading>
        <p className="main__gallery-title h2">Result from our service</p>
        <p className="main__gallery-description">To use Undress AI, you will need to upload a photo. You can do it for free first. Then, just wait a little and follow the several steps.</p>
        <div className="main__gallery-wrapper">
          {GalleryMain.map((item, index) => (
            <Image key={index} src={item.img} alt={item.alt} className="main__gallery-item" />
          ))}
        </div>
      </section>
      <section className="main__pricing" id="pricing">
        <div className="main__pricing-text">
          <StyledHeading>Pricing Plans</StyledHeading>
          <p className="main__pricing-title h2">Pricing Plans</p>
        </div>
        <Price />
      </section>
      <section className="main__services" id="services">
        <div className="main__services-text">
          <div className="main__services-wrapper">
            <StyledHeading>Our Services</StyledHeading>
            <h3 className="main__services-title">Discover modes</h3>
          </div>
          <div className="main__services-wrapper">
            <p className="main__services-description">Besides main Undress Mode, there are several new modes. Don&apos;t wait miss the opportunity to try each one.</p>
          </div>
        </div>
        <div className="main__services-content">
          <Image className="main__services-vector" src={Vector} alt="vector"/>
          <div className="main__services-item main__services-item--1">
            <h4 className="main__services-item-title">Undress</h4>
            <p className="main__services-item-description">Undress any image in one click, and get the best result</p>
            <div className="main__services-item-images">
              <Image className="main__services-item-images-img" src={ServicesImg[0].img1} alt={ServicesImg[0].alt1} />
              <Image className="main__services-item-images-img" src={ServicesImg[0].img2} alt={ServicesImg[0].alt2} />
            </div>
          </div>
          <div className="main__services-item main__services-item--2">
            <h4 className="main__services-item-title">Sex pose</h4>
            <p className="main__services-item-description">Swap faces any images, and enjoy perfect results</p>
            <div className="main__services-item-images">
              <Image className="main__services-item-images-img" src={ServicesImg[1].img1} alt={ServicesImg[1].alt1} />
              <Image className="main__services-item-images-img" src={ServicesImg[1].img2} alt={ServicesImg[1].alt2} />
            </div>
          </div>
          <div className="main__services-item main__services-item--3">
            <h4 className="main__services-item-title">Lingerie mode</h4>
            <p className="main__services-item-description">Swap faces any images, and enjoy perfect results</p>
            <div className="main__services-item-images">
              <Image className="main__services-item-images-img" src={ServicesImg[2].img1} alt={ServicesImg[2].alt1} />
              <Image className="main__services-item-images-img" src={ServicesImg[2].img2} alt={ServicesImg[2].alt2} />
            </div>
          </div>
          <div className="main__services-item main__services-item--4">
            <h4 className="main__services-item-title">Men&#39;s undress</h4>
            <p className="main__services-item-description">Swap faces any images, and enjoy perfect results</p>
            <div className="main__services-item-images">
              <Image className="main__services-item-images-img" src={ServicesImg[3].img1} alt={ServicesImg[3].alt1} />
              <Image className="main__services-item-images-img" src={ServicesImg[3].img2} alt={ServicesImg[3].alt2} />
            </div>
          </div>
        </div>
      </section>
      <section className="main__reviews" id="reviews">
        <Image className="main__reviews-vector hidden-mobile" src={GridVector2} alt="vector" />
        <div className="main__reviews-heading"><StyledHeading>Our Users Feedback</StyledHeading></div>
        <div className="main__reviews-slider">
          <Slider />
        </div>
        <div className="main__line visible-mobile"/>
        <div className="main__reviews-banner" id="referral">
          <Image className="main__reviews-banner-vector hidden-tablet" src={ReferralVectorContainer} alt="Undress nude ai" />
          <Image className="main__reviews-banner-image hidden-tablet" src={ReferralImage} alt="best ai undress app" />
          <div className="main__reviews-banner-text">
            <div className="main__reviews-banner-heading">
              <FireIcon />
              <p className="main__reviews-banner-heading-text">Referral Program</p>
            </div>
            <h2 className="main__reviews-banner-title">Undress for free</h2>
            <p className="main__reviews-banner-description">For each friend you invite you get free credits that can be used for Undress AI!</p>
          </div>
          <div className="main__reviews-banner-buttons">
            <Link href={ButtonLink}><Button size="medium" color="main">Invite friends</Button></Link>
            <span>1 invitation: 2 credits</span>
          </div>
        </div>
      </section>
      <section className="main__faq" id="faq">
        <div className="main__faq-text">
          <StyledHeading>FAQ</StyledHeading>
          <h3 className="main__faq-title">Frequently Asked Questions</h3>
          <Link href={ButtonLink}>
            <Button size="medium">UNDRESS RIGHT NOW</Button>
          </Link>
        </div>
        <div className="main__faq-accordion">
          <Accordion />
        </div>
      </section>
    </div>
  );
}
