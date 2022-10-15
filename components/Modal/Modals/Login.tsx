import {
   Stack,
   Text,
   Input,
   Button,
   Link,
   useToast,
   useMediaQuery,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import useStore from "../../../store";
import {
   loginWithEmailAndPassword,
   sendPasswordReset,
} from "../../../utils/firebase/collections/user";
import Modal from "../Modal";

const Login = () => {
   const { isLoggingIn, setLoggingIn } = useStore((state) => state);
   const [isMobilesize] = useMediaQuery("(max-width: 500px)");
   const [busy, setBusy] = useState(false);
   const [error, setError] = useState("");
   const emailRef = useRef<HTMLInputElement>(null);
   const passwordRef = useRef<HTMLInputElement>(null);
   const toast = useToast();

   const onHandleClose = () => !busy && setLoggingIn(false);
   const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

   const onHandleSubmit = async () => {
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;

      if (!email || !password)
         return setError("Please enter your email and password");

      if (!validateEmail(email))
         return setError("Please enter a valid email address");

      setError("");
      setBusy(true);

      const result = await loginWithEmailAndPassword(email, password);

      if (result) {
         toast({
            title: "Login successful",
            status: "success",
            description: `Welcome back ${result.user.displayName}`,
            duration: 3000,
            isClosable: true,
         });
         setLoggingIn(false);
      } else {
         setError(result);
      }

      setBusy(false);
   };

   const onForgotPassword = async () => {
      const email = emailRef.current?.value;
      if (!email || !validateEmail(email))
         return setError("Please enter an email address");
      setBusy(true);
      const result = await sendPasswordReset(email);
      setBusy(false);
      if (result === true) setLoggingIn(false);
      else setError(result);
   };

   const inputSize = isMobilesize ? "sm" : "md";
   const btnSize = isMobilesize ? "md" : "lg";

   return (
      <Modal handleClose={onHandleClose} isOpen={isLoggingIn} title="Login">
         <Stack spacing={4} mt={2}>
            {error && (
               <Text color="red.500" fontSize="sm">
                  {error}
               </Text>
            )}
            <Stack spacing={1}>
               <Text fontSize="md">Email Address</Text>
               <Input
                  id="email"
                  size={inputSize}
                  disabled={busy}
                  type="email"
                  ref={emailRef}
                  placeholder="Email Address..."
               />
            </Stack>
            <Stack spacing={1}>
               <Text fontSize="md">Password</Text>
               <Input
                  id="password"
                  size={inputSize}
                  disabled={busy}
                  type="password"
                  ref={passwordRef}
                  placeholder="Password..."
               />
            </Stack>
            <Link onClick={onForgotPassword}>Forgot Password?</Link>
            <Button
               size={btnSize}
               isLoading={busy}
               onClick={onHandleSubmit}
               w="100%"
            >
               Login
            </Button>
         </Stack>
      </Modal>
   );
};

export default Login;
