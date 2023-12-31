import { ContainerHome, ImgContainer, LetterContainer } from "./style";
import SendEmailButton from "../../components/sendEmail/SendEmail";
import ImgDesktop from "../../assets/images/imgDesktop";
import IconList from "../../assets/images/iconList";
import { sendProps } from "../../routes/Routes";


const Home: React.FC <sendProps> = ({handleChange, sendEmailData}) => {
  return (
    <>
      <ContainerHome>
        <LetterContainer>
          <h1>Stay updated!</h1>

          <p>Join 60,000+ product managers receiving monthly updates on:</p>

          <p>
            {" "}
            <IconList />
            Product discovery and building what matters
          </p>
          <p>
            {" "}
            <IconList />
            Measuring to ensure updates are a sucess 
          </p>
          <p>
            {" "}
            <IconList /> And much more!
          </p>
          <SendEmailButton handleChange={handleChange} sendEmailData={sendEmailData} />
        </LetterContainer>
        <ImgContainer>
          <ImgDesktop />
        </ImgContainer>
      </ContainerHome>
    </>
  );
}

export default Home;
