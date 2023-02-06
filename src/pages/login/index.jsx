import React from "react";

import Button from "../../components/button";
import Input from "../../components/input";

import { useLogin } from "./helper";

import style from "../../styles/login.module.scss";

const Login = () => {
  const { onSubmit, handleSubmit, register, errors, isLoading } = useLogin();

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
