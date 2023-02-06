import React, { useState } from "react";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../components/button";
import Input from "../../components/input";

import style from "../../styles/login.module.scss";

const Login = () => {
  const { push } = useRouter();
  const [isLoading, setisLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  //on login
  const onSubmit = async (data) => {
    setisLoading(true);
    setTimeout(() => {
      push("/dashboard");
      setisLoading(false);
    }, 1500);
  };

  return (
    <div className={style.main_wrapper}>
      <div className={style.card_wrapper}>
        <div className={style.card_header}>
          <h2>Clinican Portal</h2>
          <p>Login</p>
        </div>
        <div className={style.form_wrapper}>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Input
              name="email"
              register={register}
              type={"email"}
              value={"demo@gmail.com"}
              placeholder={"Email"}
              className={style.textField}
              errorMessage={errors?.email?.message}
            />
            <Input
              type="password"
              name="password"
              value={"demo@gmail.com"}
              placeholder={"Password"}
              register={register}
              className={style.textField}
              errorMessage={errors?.password?.message}
            />
            <div className={style.btn_wrapper}>
              <Button
                type={"submit"}
                title={"Log in"}
                isLoading={isLoading}
                className={style.btnLogin}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
