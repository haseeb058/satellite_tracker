import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useState } from "react";

export const useLogin = () => {
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

  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
    isLoading,
  };
};

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
