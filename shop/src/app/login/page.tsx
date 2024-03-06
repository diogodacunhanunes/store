import LoginGoogle from "../Components/Login/LoginGoogle";
import RegisterNewsletter from "../Components/Login/RegisterNewsletter";

export default function Login() {
  return (
    <div className="w-full h-full py-4 gap-4 self-center flex flex-col justify-center items-center lg:flex-row lg:py-20 lg:justify-center lg:items-center lg:gap-36 ">
      <div className="w-[70%] py-10 max-w-[520px] flex flex-col gap-4 lg:w-full">
        <LoginGoogle />
      </div>
      <div className="w-[70%] h-[1px] bg-gray-200 lg:w-[1px] lg:h-[250px]">
        &nbsp;
      </div>
      <div className="py-2 w-[70%] mb-16 lg:w-auto lg:mb-0">
        <RegisterNewsletter />
      </div>
    </div>
  );
}
