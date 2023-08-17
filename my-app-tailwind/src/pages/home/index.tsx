import { chair1Img, chair2Img } from "../../assets/images";
import { UnderlineButton } from "../../components/buttons";
import { Header } from "./components/Header";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="bg-cultured py-[100px]">
        <div className="container mx-auto flex">
          {[
            {
              name: "Side table 1",
              image: chair1Img,
            },
            {
              name: "Side table 2",
              image: chair2Img,
            },
          ].map((item, index) => (
            <div className="flex-1 flex flex-col items-start">
              <img src={item.image} alt="" />
              <p className="text-3xl font-medium">{item.name}</p>
              <UnderlineButton onClick={() => {}} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
