import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


export function SignIn() {
  return (

    <section className="m-8 flex items-center justify-center ">
      <div className="w-full mt-9 text-center">
        <form className="mt-8 mb-2 rounded-lg shadow-xl bg-white p-5 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <Typography variant="h2" className="font-bold">Iniciar Sesión</Typography>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 text-left font-medium">
              Usuario o Email
            </Typography>
            <Input
              size="lg"
              placeholder="email@cbtis123.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 text-left  font-medium">
              Contraseña
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="flex items-center justify-between gap-2 mt-4">

            <Typography variant="small" className="font-medium text-red-900">
              <a href="#">
                Olvidaste tu contraseña?
              </a>
            </Typography>

            <Typography variant="small" className="font-medium text-blue-gray-900">
              <a href="#">
                Solicitar cuenta
              </a>
            </Typography>
          </div>

          <Button className="mt-6" fullWidth>
            Sign In
          </Button>


          <div className="space-y-4 mt-5">
            <Button size="lg" color="white" className="flex items-center gap-2 justify-center shadow-md transition-all duration-300 hover:bg-red-500 hover:text-white" fullWidth>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-microsoft" viewBox="0 0 16 16">
                <path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z" />
                <defs>
                  <clipPath id="clip0_1156_824">
                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span>Iniciar con Microsoft</span>
            </Button>
          </div>

        </form>

      </div >
      {/*  <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/bruce-mars.jpeg"
          className="h-full w-full object-cover rounded-3xl"
        />  
      </div> */}

    </section >
  );
}

export default SignIn;
